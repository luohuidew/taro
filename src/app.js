import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/guang/guang',
      'pages/jifen/jifen'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#000000',
      navigationBarTitleText: '互达万用积分',
      navigationBarTextStyle: 'white'
    },
    "tabBar": {
      "list": [
      {
      "pagePath": "pages/index/index",
      "text": "首页",
      // "selectedIconPath": "",
      // "iconPath": ""
      },
      {
      "pagePath": "pages/jifen/jifen",
      "text": "积分"
      },
      {
      "pagePath": "pages/guang/guang",
      "text": "逛一逛",
      }
      ],
      "color": "#8B4513",
      "selectedColor": "#FF6347"
      }
      
      
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
