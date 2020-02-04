// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },
  handleChooseAlbum() {
    //系统API，让用户在相册中选择照片或者拍照
    wx.chooseImage({
      success: (res) => {
        //1.取出路径
        const path =res.tempFilePaths[0]

        //2.设置imagePath
        //下方的this是个undefined
        this.setData({
          imagePath: path
        })
      },
    })
  },
  handleImageLoad(){
    console.log('图片加载完成')
  }
    
  })