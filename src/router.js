import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Home     from '~/views/home'
import Login    from '~/views/login/login'
import Register from '~/views/login/register'
import Forget   from '~/views/login/forget'
import NotFound from '~/views/404'

const sideRoutes = [
  {
    path: '/user',
    name: '用户管理',
    component: Login
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
  }
]
const routes = [
  {
    path: '/login',
    name: '登录',
    component: Login
  },
  {
    path: '/register',
    name: '注册',
    component: Register
  },
  {
    path: '/forget',
    name: '忘记密码',
    component: Forget
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
]

export {sideRoutes}

export default props => {
  return (
    <BrowserRouter basename="/admin" {...props}>
      <Switch>
        {
          routes.map(v =>
            v.routes?
              v.routes.map(sub => <Route path={sub.path} component={sub.component} key={sub.path} exact={sub.exact}/>)

            :<Route path={v.path} component={v.component} key={v.path} exact={v.exact}/>
          )
        }
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
