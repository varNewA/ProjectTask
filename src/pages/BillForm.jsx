import { Switch, Form, Input } from 'antd';
import React from 'react';

class Bill extends React.Component {

  onChange = (checked) => {
    console.log(`switch to ${checked}`);
  }

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
        <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked onChange={this.onChange()} />
        <Form.Item label="发票抬头">
          {getFieldDecorator('radio-group', { rules: [{ required: true }] })(<Input placeholder="请输入" />)}
        </Form.Item>
        <Form.Item label="纳税人识别号">
          {getFieldDecorator('radio-group', { rules: [{ required: true }] })(<Input placeholder="请输入" />)}
        </Form.Item>
        <Form.Item label="电话号码">
          {getFieldDecorator('radio-group', { rules: [{ required: true }] })(
            <div style={{ display: 'inline' }}>
              <Input style={{ width: '15%', marginRight: 4 }} />
              <span>-</span>
              <Input style={{ width: '45%', marginRight: 4, marginLeft: 4 }} />
            </div>
          )}
        </Form.Item>
      </Form>
    )
  }
}
const BillForm = Form.create()(Bill);
export default BillForm;