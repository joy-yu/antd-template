import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home     from '~/views/home'
import Login    from '~/views/login/login'
import Register from '~/views/login/register'
import Forget   from '~/views/login/forget'
import NotFound from '~/views/404'


export default props => {
  return (
  <BrowserRouter basename="/admin" {...props}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/Forget" component={Forget}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
)}
