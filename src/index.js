import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { useStrict } from 'mobx'
import { AppContainer } from 'react-hot-loader'
import axios from 'axios'
import qs from 'qs'
import Router from '~/router'
import { common } from '~/api'
import '~/index.less'
import appStore from '~/store/appStore'
import { message } from 'antd'

useStrict(true)

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider {...appStore}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}
render(Router)

/*
if (module.hot) {
  module.hot.accept( () => { render(Router) })
}
*/

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.request.use(function(config){
    config.data = qs.stringify(config.data)
    // console.log('请求:', config.url, config)
    return config
})

axios.interceptors.response.use(function (response){
    console.log('响应:', response.config.url, response)
    if (response.data.code !== 0){
      message.error(response.data.msg)
    }
    return response
}, function(err){
    if(err.response){
        switch (err.response.status) {
            case 401:
              // router.replace({name: 'login', query: {redirect: router.currentRoute.fullPath}})
        }
    }
    return Promise.reject(err)
})

common.areaList().then(res => {
  localStorage.arealist = JSON.stringify(res.data.data)
})
