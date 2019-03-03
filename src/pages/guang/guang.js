import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import './guang.scss'

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {name: '22', avatarUrl: ''}
  }

  config = {
    navigationBarTitleText: '互达万用积分2'
  }
  
  componentWillMount () { }

  componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  getuserinfoss (e) {
      console.log(222222);
      let userinfo = e.detail.userInfo;
      console.log(userinfo)
      if (userinfo){
        //用户按了允许授权按钮
        this.setState({
          name: userinfo.nickName,
          avatarUrl: userinfo.avatarUrl
        });
      } else {
        //用户按了拒绝按钮
      }
      // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
    // Taro.getSetting({
    //   success(res) {
    //     console.log(res);
    //     if (!res.authSetting['scope.userInfo']) {
    //     Taro.authorize({
    //       scope: 'scope.userInfo',
    //       success(res) {
    //         console.log(res);
    //         // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
    //       }
    //     })
    //     }
    //   },
    //   fail(ee) {
    //     console.log(ee);
    //   },
    // })
  }

  render () {
    return (
      <View className='warp'>
      <Text>逛一逛</Text>
      </View>
    )
  }
}

