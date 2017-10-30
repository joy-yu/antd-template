import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import {routes} from '~/router'
import {common} from '~/api'
import { Layout, Menu, Icon, Avatar, Dropdown } from 'antd'
const { Header, Sider, Content } = Layout
const { SubMenu } = Menu

class Home extends Component {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  componentDidMount = () => {
  }

  logout = () => {

  }

  render = () => {
    const menu = (
      <Menu>
        <Menu.Item key="0" disabled>
          个人中心
        </Menu.Item>
        <Menu.Item key="1" disabled>
          设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2" onClick={this.logout}>退出登录</Menu.Item>
      </Menu>
    )

    const filterRoutes = routes.filter(v => !v.ignore)

    return (
      <Layout style={{minHeight: '100%',height:'100%'}}>
        <Sider
          style={style.sider}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div style={style.logo}>
            <a href="/"><h1 style={style.logo.h1}>{this.state.collapsed?'':'后台管理系统'}</h1></a>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {
              filterRoutes.map((v,i) =>
                v.routes&&v.routes.length?
                  <SubMenu key={i} title={<span><Icon type="user" /><span>{v.name}</span></span>}>
                    {
                      v.routes.map(sub =>
                        <Menu.Item key={sub.path}>
                          <Link to={sub.path}>{sub.name}</Link>
                        </Menu.Item>
                      )
                    }
                  </SubMenu>
                :
                <Menu.Item key={i}>
                  <Icon type="user" />
                  <span>
                    <Link to={v.path} style={{display:'inline-block'}}>{v.name}</Link>
                  </span>
                </Menu.Item>
              )
            }

          </Menu>
        </Sider>

        <Layout>
          <Header style={style.header}>
            <Icon
              style={style.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div className="fr">
              <Dropdown overlay={menu}>
                <div style={{padding:'0 12px',cursor:'pointer'}}>
                  <Avatar style={style.avatar} icon="user" />
                  123
                </div>
              </Dropdown>
              <div>

              </div>
            </div>
          </Header>
          <Content style={style.content}>
            {
              <Switch>
                {
                  filterRoutes.map(v => {
                    if(v.routes) {
                      return v.routes.map(sub => <Route path={sub.path} component={sub.component} key={sub.path} exact={sub.exact}/>)
                    }
                    return <Route path={v.path} component={v.component} key={v.path} exact={v.exact}/>
                  })
                }
                <Redirect to="/user" />
              </Switch>
            }
          </Content>
        </Layout>
      </Layout>
    )
  }
}

const style ={
  sider: {
    overflow: 'auto',
    height: '100%'
  },
  logo: {
    height: '64px',
    lineHeight: '64px',
    background: '#333',
    borderRadius:'6px',
    h1: {
      color: '#fff',
      fontSize: '20px',
      paddingLeft: '24px'
    }
  },

  header: {
    background: '#fff',
    padding: '0 12px 0 0'
  },
  trigger: {
    fontSize: '18px',
    lineHeight: '64px',
    padding: '0 16px',
    cursor: 'pointer',
  },
  avatar: {
    backgroundColor: '#87d068',
    verticalAlign:'middle',
    margin:'-4px 8px 0 0'
  },

  content:{
    margin: '24px 16px',
    padding: '24px',
    background: '#fff'
  }
}

export default Home
