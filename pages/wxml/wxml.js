// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      message : '你好小程序',
      firstname: 'kobe',
      lastname: 'bryant',
      age:12,
      nowTime : new Date().toLocaleString() ,
      isActive: false,
      isShow: true,
      score: 50,
      movies: ['我和我的祖国','中国机长','大话西游'],
      nums: [
        [10,14,11,18],
        [20,24,31,48],
        [110,134,211,418],
      ],
    letters: ['a', 'b', 'c']
  },
  onLoad(){
    setInterval (() =>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  handleSwitchColor() {
   this.setData({
     isActive: !this.data.isActive
   })
  },
  handleSwitchShow (){
    this .setData({
      isShow: !this.data.isShow
    })},
  handleIncrement () {
    this .setData({
      score:this.data.score + 6
    })
  },
  numberFoFixed(value) {
    return value.foFixed(2)
  },
 
})