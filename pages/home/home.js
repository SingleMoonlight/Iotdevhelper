// pages/home/home.js
Page({

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    wx.setNavigationBarTitle({
      title: '首页',
    })
    wx.hideLoading()
  },
 
})