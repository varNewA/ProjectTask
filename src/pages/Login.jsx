/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react'
import styles from './Login.css'

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles.login_form}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [
              { required: true, message: '用户名不能为空' },
              { pattern: new RegExp(/^[a-zA-Z0-9_]+$/), message: '用户名只能由英文和数字组成' },
              { min: 6, message: '用户名长度在6-10个字符' },
              { max: 10, message: '用户名长度在6-10个字符' },
            ],
            validateTrigger: 'onBlur',
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: '密码不能为空' },
              { min: 6, message: '密码长度不得小于6个字符' },
            ],
            validateTrigger: 'onBlur',
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: false,
          })(<Checkbox>记住</Checkbox>)}
          <a className={styles.login_form_registe} href="./registe">
            注册
          </a>
          <Button type="primary" htmlType="submit" className={styles.login_form_button} href="./index">
            登陆
          </Button>{/*  跳转index */}
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm