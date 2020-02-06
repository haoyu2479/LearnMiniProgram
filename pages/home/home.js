// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      titles:['衣服','裤子','鞋子']
  },
  handleBtnClick1(){
    console.log('发生点击')
 },
  handleBtnClick2() {
    console.log('发生点击')
  },
  handleTouchStart(){
    console.log('handleTouchStart')
  },
  handleTouchMove(){
    console.log('handleTouchMove')
  },
  handleTouchEnd() {
    console.log('handleTouchEnd')
  },
  hanldeTap() {
    console.log('hanldeTap')
  },
  handleLongpress(){
    console('handleLongpress')
  },
  handleEventClick(event){
    console.log('-----',event)
  },
  handleEventEnd(event){
    console.log('+++++',event)
  },
  handleInner(event){
    console.log(event)
  },
  handleOuter(event) {
    console.log(event)
  },
  handleItemClick(event){
    console.log(event)
    //title - index

    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title,index) 
  },
  // --------事件冒泡和事件捕获------
  handleCaptureView1(){
    console.log('handleCaptureView1')
  },

  handleBindView1(){
    console.log('handleBindView1')
  },


  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },

  handleCaptureView3() {
    console.log('handleCaptureView3')
  },


  handleBindView3() {
    console.log('handleBindView3')
  }


})
