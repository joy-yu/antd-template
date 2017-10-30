import React, { Component } from 'react'
import util from '~/util'

import { Form, Input, Row, Col, Checkbox, Button } from 'antd'
const FormItem = Form.Item


class Register extends Component {

  state = {
    retry_time: 59,
    disable_retry: false
  }

  handleSubmit = e => {
    const form = this.props.form
    e.preventDefault()
    form.validateFieldsAndScroll(
      (err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      }
    )
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码不一致!')
    } else {
      callback()
    }
  }

  getEcode = () => {
    this.props.form.validateFields(
      ['mobile'],
      (err) => {
        if (!err) {
          this.timing()
        }
      },
    )
  }

  timing = () => {
    this.setState({
      retry_time: 59,
      disable_retry: true
    })
    let timer = setInterval(() => {
      this.setState({
        retry_time: this.state.retry_time - 1
      })
      if (this.state.retry_time <= 0) {
        this.setState({
          disable_retry: false
        })
        clearInterval(timer)
      }
    }, 1000)
  }

  render = () => {
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 18
      },
    }

    const rules = {
      mobile: [
        { required: true, message: '请输入手机号!' },
        { validator: util.validate.checkMobile }
      ],
      password: [
        { required: true, message: '请输入密码' }
      ],
      repassword: [
        { required: true, message: '请输入确认密码' },
        { validator: this.checkPassword }
      ],
      ecode: [
        { required: true, message: '请输入验证码!' }
      ]
    }

    return (
      <Form onSubmit={this.handleSubmit} style={style.register} className="register">
        <h3 style={style.title}>忘记密码</h3>
        <FormItem label="手机号" hasFeedback {...formItemLayout}>
          {getFieldDecorator('mobile', {
            rules: rules.mobile,
            validateFirst: true
          })(
            <Input  placeholder="请输入手机号"/>
          )}
        </FormItem>

        <FormItem label="验证码" {...formItemLayout}>
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('ecode', {
                rules: rules.ecode,
              })(
                <Input placeholder="验证码"/>
              )}
            </Col>
            <Col span={12}>
              <Button type="primary" onClick={this.getEcode} disabled={this.state.disable_retry}>获取验证码{this.state.disable_retry?this.state.retry_time:''}</Button>
            </Col>
          </Row>
        </FormItem>

        <FormItem label="新密码" hasFeedback {...formItemLayout}>
          {getFieldDecorator('password', {
            rules: rules.password,
          })(
            <Input type="password"  placeholder="请输入密码"/>
          )}
        </FormItem>

        <FormItem label="确认密码" hasFeedback {...formItemLayout}>
          {getFieldDecorator('confirm', {
            rules: rules.repassword,
          })(
            <Input type="password" placeholder="请确认密码"/>
          )}
        </FormItem>


        <FormItem>
          <Button type="primary" htmlType="submit" style={style.btn}>重置密码</Button>
        </FormItem>
      </Form>
    )
  }
}

const style = {
  register: {
    borderRadius: '5px',
    margin: '180px auto',
    width: '400px',
    padding: '35px 35px 15px 35px',
    background: '#fff',
    border: '1px solid #eaeaea',
    boxShadow: '0 0 25px #cac6c6'
  },
  title: {
    margin: '0px auto 30px auto',
    textAlign: 'center',
    color: '#505458',
  },
  btn: {
    width: '100%'
  }
}

const wrapLogin = Form.create()(Register)

export default wrapLogin
