// pages/mqttClientList/mqttClientList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clientNames: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      mask: true,
    });
    wx.setNavigationBarTitle({
      title: 'MQTT客户端',
    });
    //从服务器获取客户端信息
    this.setData({clientNames : this.getClientFromServer()});
    //console.log(this.data.clientNames);
    wx.hideLoading();
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

  /**
   * 去MQTT客户端界面，带上客户端名字作为参数
   */
  gotoClient: function(e) {
    var name = e.currentTarget.dataset.name;
    //console.log(name);
    wx.navigateTo({
      url: '../../pages/mqttClient/mqttClient?clientName=' + name,
    })
  },

  /**
   * 从服务器获取客户端信息
   * todo: 改写成真正地从服务器获取信息
   */
  getClientFromServer: function(){
    return [
      {
        name: "NodeMCU",
      },
      {
        name: "Light",
      },
      {
        name: "AirConditioner",
      }
    ]
  }
})