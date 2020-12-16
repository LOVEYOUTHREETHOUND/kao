// pages/demo01/demo01.js
Page({
  tiaozhuan(){
        wx.navigateTo({
          url: '/pages/demo11/demo11',
        })
      },
  /**
   * 页面的初始数据
   */
  data: {
    shopNumber:'120'
 
  },
  makePhoneCall:function(){
    wx.makePhoneCall({
      phoneNumber: this.data.shopNumber,
      success:function(){
        console.log('拨打成功')
      },
      fail:function(){
        console.log('拨打失败')
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})