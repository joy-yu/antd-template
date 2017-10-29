import React, { Component } from 'react'
import util from '~/util'
import {auth} from '~/api'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
const FormItem = Form.Item

class Login extends Component {

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log(values)
        const res = await auth.login(values)
        if(res.data.code === 0) {
          this.props.history.push('/user')
        }
      }
    })
  }

  render = () => {
    const rules = {
      username: [
        { required: true, message: '请输入账号' }
      ],
      password: [
        { required: true, message: '请输入密码' },
      ]
    }
    const { getFieldDecorator } = this.props.form

    return (
      <Form onSubmit={this.handleSubmit} style={style.login}>
        <h3 style={style.title}>后台管理系统</h3>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: rules.username
          })(
            <Input prefix={<Icon type="user"/>} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: rules.password
          })(
            <Input prefix={<Icon type="lock"/>} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" style={style.btn}>
            登录
          </Button>
          <a onClick={()=>{this.props.history.push('/register')}}>立即注册</a>
          <a className="fr" onClick={()=>{this.props.history.push('/forget')}}>忘记密码</a>
        </FormItem>
      </Form>
    )
  }
}

const style = {
  login: {
    borderRadius: '5px',
    margin: '180px auto',
    width: '400px',
    padding: '35px 35px 15px 35px',
    background: '#fff',
    border: '1px solid #eaeaea',
    boxShadow: '0 0 25px #cac6c6',
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

const wrapLogin = Form.create()(Login)

export default wrapLogin
