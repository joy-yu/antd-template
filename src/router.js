import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Home     from '~/views/home'
import Login    from '~/views/login/login'
import Register from '~/views/login/register'
import Forget   from '~/views/login/forget'
import NotFound from '~/views/404'


const routes = [
  {
    path: '/user',
    name: '用户管理',
    component: Login
  },
  {
    path: '/login',
    name: '登录',
    ignore: true,
    component: Login
  },
  {
    path: '/register',
    name: '注册',
    ignore: true,
    component: Register
  },
  {
    path: '/forget',
    name: '忘记密码',
    ignore: true,
    component: Forget
  },
  {
    path: '/tacos',
    component: Login,
    name: '奥术大师多',
    routes: [
      { path: '/tacos/bus',
        component: Register,
        name: 'fu1'
      },
      { path: '/tacos/cart',
        component: Login,
        name: 'fu2'
      }
    ]
  },

  {
    path: '/404',
    name: '404',
    component: NotFound,
    ignore: true
  },
]

export {routes}

export default props => {
  return (
    <BrowserRouter basename="/admin" {...props}>
      <Switch>
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
