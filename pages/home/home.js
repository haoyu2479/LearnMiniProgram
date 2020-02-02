Page({
  data:{
    name:'Coder',
    age:18,
    students:[
      {id:110,name:'john',age:20},
      {id:111,name:'james',age:30},
      {id:112,name:'curry',age:28},
      {id:113,name:'jordan',age:18}
    ],
    counter: 0
  },
    handleBtnClick(){
      //1.错误做法：界面上是不会发生刷新的，只有在后台会改变
      //this.data.counter += 1
      //console.log(this.data.counter)
      
      //2.this.setData()
      this.setData({
        counter:this.data.counter +1
      })
    },
    handleBtnClick2(){
      this.setData({
        counter:this.data.counter -1
      })
    }

})