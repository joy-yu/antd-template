import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader'
import axios from 'axios'
import {common} from './api'
import qs from 'qs'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}
render(App)

if (module.hot) {
  module.hot.accept(App, () => { render(App) })
}


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(function(config){
    config.data = qs.stringify(config.data);
    // console.log('请求:', config.url, config);
    return config;
});

axios.interceptors.response.use(function (response){
    console.log('响应:', response.config.url, response);
    if (response.data.code !== 0){
        app.$message({
            message: response.data.msg,
            type: 'error'
        });
    }
    return response;
}, function(error){
    if(error.response){
        switch (error.response.status) {
            case 401:
              router.replace({name: 'login', query: {redirect: router.currentRoute.fullPath}})
        }
    }
    return Promise.reject(error);
});

common.areaList().then((res)=>{
  localStorage.arealist = JSON.stringify(res.data.data);
});
// router.push({name: 'login'})
