Page({
  /**
   * 页面的初始数据
   */
  data: {

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
      title: '工具箱',
    });
    wx.hideLoading();
  },

  /**
   * 去MQTT客户端列表页面
   */
  gotoMqttClientListPage: function() {
    wx.navigateTo({
      url: '../../pages/mqttClientList/mqttClientList',
    });
  },

  /**
   * 去天气信息界面
   */
  gotoWeatherPage: function() {
    wx.navigateTo({
      url: '../../pages/weather/weather',
    });
  },

  /**
   * 点击正在开发
   */
  clickGoon: function() {
    wx.showModal({
      content: '以后会陆续添加新的功能',
      confirmColor: '#409EFF',
      success:function(res){
            // if(res.confirm){
            //   console.log('弹框后点确定')
            // }else{
            //   console.log('弹框后点取消')
            // }
      }
    });
  }
});