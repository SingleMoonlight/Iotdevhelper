// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather: 'NA'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      mask: true,
    })
    wx.setNavigationBarTitle({
      title: '天气信息',
    })
    wx.hideLoading()
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

  },

  getweather: function(){
    console.log("获取天气中...");
    wx.request({
      url: 'https://api.seniverse.com/v3/weather/now.json?key=SsNfhtk5vSc5BLBBI&location=wuhan&language=zh-Hans&unit=c',
      success: (result) => {
        console.log(result.data.results[0].now);
        this.setData({ weather: result.data.results[0].now.text})
        console.log("获取成功")
      },
      fail: (res) => {console.log("获取失败")},
    })
  },
})