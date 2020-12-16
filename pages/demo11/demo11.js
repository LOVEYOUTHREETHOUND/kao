// pages/game/game.js
var app = getApp();
function two_char(n) {
  return n >= 10 ? n : "0" + n;
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    questions: ['猝死最常发生于（     ）。', '心脏骤停早期诊断的最佳指标是（     ）。', '一旦心电监测确定为心室颤动应立即（     ）。', '胸外心脏按压的深度是（     ）cm。', '胸外心脏按压的频率是（     ）。', '人工呼吸的吹气量与每次的吹气时间是（     ）。', '胸外按压的正确位置是（     ）', '以下说法中正确的为（     ）。', '以下说法中不正确的为（     ）。', '以下说法中不正确的为（     ）'],
    questionsA: ['A.冠心病', 'A.瞳孔突然明显散大', 'A.人工心脏起搏', 'A.2~3', 'A.100次/分', 'A.500—600ml；1秒', 'A.胸骨的上半部分', 'A.孕妇进行电除颤时易引起胎儿室颤', 'A.心搏骤停最常见的心律失常是室颤', 'A.AED不需定期进行能量的校准和测试'],
    questionsB: ['B.主动脉瓣狭窄', 'B.测不到血压', 'B.电击复律', 'B.3~4', 'B.80次/分', 'B.1000ml；1秒 ', 'B.乳头连线的左侧', 'B.心肌梗死患者不能使用AED', 'B.AED两电极片之间距离不小于10cm', 'B.致命性心律失常应紧急除颤，无禁忌'],
    questionsC: ['C.二尖瓣脱垂', 'C.颈动脉和股动脉搏动消失', 'C.静注利多卡因', 'C.4~5', 'C.80—100次/分 ', 'C.700—800ml；2秒', 'C.胸骨下，剑突上', 'C.双向波除颤仪除颤所选能量为300J', 'C.室颤可能在数分钟内转为心脏停止', 'C.AED5秒后心搏停止或无电活动则成功'],
    questionsD: ['D.肥厚型心肌病', 'D.呼吸停止', 'D.静注阿托品', 'D.至少5', 'D.支至少100次/分', 'D.1200ml；1秒', 'D.胸骨下半部分，两乳头连线的中点', 'D.室颤患者首选治疗方法为电除颤', 'D.患者俯卧位时也可用AED进行急救', 'D.室颤患者不都可以使用AED'],
    answer: ['A', 'C', 'B', 'D', 'D', 'A', 'D', 'D', 'D', 'A'],
    questionbody:'',
    A:'',
    B:'',
    C:'',
    D:'',
    Ans:'',
    show:'',
    countj:true,
    bindcount:0,
    errorcount:0,
    rightcount:0,
    count: 0,
    time:'',
    index:'',
  },
/*设置计数器5分钟*/
  onLoad: function (options) {
      var sec = options.sec;
      var that = this;
      var si = setInterval(function () {
        if (sec > 0) {
        sec--;
        var date = new Date(0, 0)
        date.setSeconds(sec);
        var h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
        that.setData({
          time: two_char(h) + ":" + two_char(m) + ":" + two_char(s)
        })
        }
        else {
          var count = that.data.count;
          if (that.data.bindcount==0){
          wx.showModal({
            title: '提示：',
            showCancel: false,
            content: '您还未答题，请重新作答',
            success:function(){
              wx.switchTab({
                url: '../../pages/game/index',
              })
            }
          })
          clearInterval(si);
          }
   else{
            clearInterval(si);
            app.globalData.bindcount=that.data.bindcount;
            app.globalData.errorcount = that.data.errorcount;
            app.globalData.rightcount = that.data.rightcount;
            wx.redirectTo({
              url: '../../pages/game/end?count='+count,
            })
            }
          }
        }, 1000);
      },
      /**
       * 生命周期函数--监听页面初次渲染完成
       */
      onReady: function () {
      this.refresh();
      },
      /**
       * 生命周期函数--监听页面显示
       */
      onShow: function () {
      
      },
      /**
       * 生命周期函数--监听页面隐藏
       */
      onHide: function () {
      
      },
      /**
       * 生命周期函数--监听页面卸载
       */
      onUnload: function () {
      
      },
      /**
       * 页面相关事件处理函数--监听用户下拉动作
       */
      onPullDownRefresh: function () {
      
      },
     /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  refresh:function(){
  var that =this;
  var questions = that.data.questions;
  var questionsA = that.data.questionsA;
  var questionsB = that.data.questionsB;
  var questionsC = that.data.questionsC;
  var questionsD = that.data.questionsD;
  var answer =that.data.answer;
  var index = Math.floor(Math.random() * (questions.length - 1));
  if (questions.length > 0) {
     this.setData({
      questionbody: questions.splice(index, 1),
      A: questionsA.splice(index, 1),
      B: questionsB.splice(index, 1),
      C: questionsC.splice(index, 1),
      D: questionsD.splice(index, 1),
      Ans:  answer.splice(index, 1),
      questions: questions,
      questionsA: questionsA,
      questionsB: questionsB,
      questionsC: questionsC,
      questionsD: questionsD,
      answer: answer,
      index: index,
      show: '',
      countj: true,
    })
  }
  else{
    wx.showModal({
      title: '温馨提示',
      content: '没题了',
    })
  }
  },
disp:function(e){
      var id =e.currentTarget.id;
      var num = e.currentTarget.dataset.num;
      var count = e.currentTarget.dataset.count;
      var bindcount = e.currentTarget.dataset.bindcount;
      var rightcount = e.currentTarget.dataset.rightcount;
      var errorcount = e.currentTarget.dataset.errorcount;
      if(this.data.countj){
      if(id==num){
        this.setData({
          show:'正确！',
          count: count + 5,
          countj: false,
          bindcount: bindcount+1,
          rightcount: rightcount+1,
        })
      }
      else{
        this.setData({
          show: '错误！' + '答案：'+num,
          count: count -2,
          countj: false,
          bindcount: bindcount+1,
          errorcount: errorcount+1,
        })
      }
      }
      }
  })