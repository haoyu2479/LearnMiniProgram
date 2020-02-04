// pages/home/home.js
// getApp()获取App（）产生的示例对象
// const app = getApp()
// const name = app.globaData.name;
// const age = app.globaData.age;\

//注册一个页面
//页面也有自己的生命周期函数

Page({
  data: {
    message: '哈哈哈',
  },
  handleGetUserInfo(event){
  console.log(event)
    },

    //----------1.监听页面生命周期函数-----------
    //页面被加载出来执行onLoad
    onLoad(){
      console.log('onLoad')
      // wx.request({
      //   url: 'http',
      // })
    },
    //页面显示出来时
    onShow(){
      console.log('onShow')
    },
    //当页面隐藏起来时
    onHide(){
      console.log('onHide')
    },
    //页面跳转时
    onUnload(){
      console.log('onUnload')
    },
    //页面初次渲染完成时
    onReady(){
      console.log('onReady')
    },
    handleGetUserInfo(event) {
      console.log(event)
    },
    handleViewClick(){
      console.log('哈哈哈被点击了')
    },

    //---------4.其他事件----------
    //监听页面的滚动
     onpageScroll(obj){
       console.log(obj)
     },
     //监听页面滚动到底部
      onReachBottom(){
        console.log('页面滚动到底部')
      },
      onPullDownRefresh(){
        console.log('下拉刷新的事件')
      }
   })