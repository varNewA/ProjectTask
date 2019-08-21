/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form, Icon, Input, Button } from 'antd';
import React from 'react'
import styles from './Registe.css'

class NormalRegisteForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleCheckPassword = (rule, value, callback) => {
    const { getFieldValue } = this.props.form
    if (value !== getFieldValue('password') && value !== '') {
      callback('两次输入不一致！')
    }
    callback()
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles.login_form}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [
              { required: true, message: '请输入您的用户名' },
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
              { required: true, message: '请输入您的密码' },
              { min: 6, message: '密码长度不小于6个字符' },
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
          {getFieldDecorator('CheckPassword', {
            rules: [
              { required: true, message: '请确认您的密码' },
              { validator: this.handleCheckPassword }
            ],
            validateTrigger: 'onBlur',
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="确认密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.login_form_button}>
            注册
          </Button>
          <a className={styles.login_form_login} href="./login">
            使用已有账户登陆
          </a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalRegisteForm = Form.create({ name: 'normal_registe' })(NormalRegisteForm);

export default WrappedNormalRegisteForm