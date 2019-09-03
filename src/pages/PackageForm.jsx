import { Form, Radio, Cascader, Input, Button } from 'antd'
import React from 'react'
import TextArea from 'antd/lib/input/TextArea';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

class Demo extends React.Component {

  state = {
    value: "0",
  };

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="联系方式">
          {getFieldDecorator('radio-group', { rules: [{ required: true }] })(
            <Radio.Group onChange={this.onChange} value={this.state.value}>
              <Radio value="1">公司地址</Radio>
              <Radio value="2">家庭地址</Radio>
              <Radio value="3">新增地址</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        {this.state.value === "1" ?
          <Form.Item label="公司地址：">
            <Cascader
              defaultValue={['zhejiang', 'hangzhou', 'xihu']}
              options={options}
            />
          </Form.Item>
          : null}
        {this.state.value === "2" ?
          <Form.Item label="家庭地址：">
            <Cascader
              defaultValue={['zhejiang', 'hangzhou', 'xihu']}
              options={options}
            />
          </Form.Item>
          : null}
        {this.state.value === "3" ?
          <div>
            <Form.Item label="收件人">
              {getFieldDecorator('name')(<Input placeholder="请输入" />)}
            </Form.Item>
            <Form.Item label="联系电话">
              {getFieldDecorator('phoneNumber')(<Input placeholder="请输入" />)}
            </Form.Item>
            <Form.Item label="详细地址">
              {getFieldDecorator('area')(<TextArea placeholder="请输入备注" />)}
            </Form.Item>
          </div>
          : null}
          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }

}
const PackageForm = Form.create({ name: 'validate_other' })(Demo);
export default PackageForm