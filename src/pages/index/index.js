import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {name: '22', avatarUrl: ''}
  }

  config = {
    navigationBarTitleText: '互达万用积分'
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
       <View className='top'></View>
       <View className='content'>
          <View className='card'>
            <Text className='titile'> 万用积分卡</Text>
            <View className='user'>
                <Image className="img" src={this.state.avatarUrl}></Image>
                <Text className='username'>{this.state.name}</Text>
            </View>
            <Text className='node'>编号：32359844152</Text>
          </View>
          <View className='nav'>
            <View className='num'>
              <Text>积分商城</Text>
              <Text>11</Text>
            </View>
            <View className='num'>
              <Text>积分商城</Text>
              <Text onClick={this.getuserinfoss}>333</Text>
            </View>
          </View>
          <button open-type='getUserInfo' size=''  
          bindgetuserinfo={this.getuserinfoss.bind(this)} 
          type="primary"className='btn'>点击授权
          </button>
          <Swiper
              className='test-h'
              indicatorColor='#999'
              indicatorActiveColor='#333'
              circular
              indicatorDots
              next-margin= '35px'
              autoplay>
              <SwiperItem className='item'>
                <View className='demo-text'>
                </View>
              </SwiperItem>
              <SwiperItem className='item'>
                <View className='demo-text'>
                </View>
              </SwiperItem>
              <SwiperItem className='item'>
                <View className='demo-text'>
                {/* <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" class="slide-image" width="100%" height="150" /> */}
                </View>
              </SwiperItem>
            </Swiper>
       </View> 
      </View>
    )
  }
}

