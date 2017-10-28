import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Home from '~/views/home'
import Login from '~/views/login'
import NotFound from '~/views/404'

export default () => {
  return (
  <BrowserRouter>
    <div>
      <Route path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/404" component={NotFound}/>
    </div>
  </BrowserRouter>
)}
