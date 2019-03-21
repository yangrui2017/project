// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: '../../image/location.png',
      id: 0,
      latitude: 31.140401,
      longitude: 121.432783, 
      width: 30,
      height: 30,
      title: "",
      callout: {
        content: "",
        color: "#2c8df6",
        fontSize: 20,
        borderRadius: 10,
        bgColor: "#fff",
        display: "ALWAYS",
        boxShadow: "2px 2px 10px #aaa"
      },
      label: {
        color: "#000",
        fontSize: 12,
        content: "",
        x: 34.780439,
        y: 113.699774
      }
    },
      {
        iconPath: '../../image/location.png',
        id: 0,
        latitude: 31.177005,
        longitude: 121.417961,
        width: 30,
        height: 30,
        title: "",
        callout: {
          content: "",
          color: "#2c8df6",
          fontSize: 20,
          borderRadius: 10,
          bgColor: "#fff",
          display: "ALWAYS",
          boxShadow: "2px 2px 10px #aaa"
        },
        label: {
          color: "#000",
          fontSize: 12,
          content: "",
          x: 34.780439,
          y: 113.699774
        }
      },
      {
        iconPath: '../../image/location.png',
        id: 0,
        latitude: 31.177287,
        longitude: 121.424647,
        width: 30,
        height: 30,
        title: "",
        callout: {
          content: "",
          color: "#2c8df6",
          fontSize: 20,
          borderRadius: 10,
          bgColor: "#fff",
          display: "ALWAYS",
          boxShadow: "2px 2px 10px #aaa"
        },
        label: {
          color: "#000",
          fontSize: 12,
          content: "",

        }
      },
      {
        iconPath: '../../image/location.png',
        id: 0,
        latitude: 31.178371,
        longitude: 121.420209,
        width: 30,
        height: 30,
        title: "",
        callout: {
          content: "",
          color: "#2c8df6",
          fontSize: 20,
          borderRadius: 10,
          bgColor: "#fff",
          display: "ALWAYS",
          boxShadow: "2px 2px 10px #aaa"
        },
        label: {
          color: "#000",
          fontSize: 12,
          content: "",

        }
      },
      {
        iconPath: '../../image/location.png',
        id: 0,
        latitude: 31.177372,
        longitude: 121.416026,
        width: 30,
        height: 30,
        title: "",
        callout: {
          content: "",
          color: "#2c8df6",
          fontSize: 20,
          borderRadius: 10,
          bgColor: "#fff",
          display: "ALWAYS",
          boxShadow: "2px 2px 10px #aaa"
        },
        label: {
          color: "#000",
          fontSize: 12,
          content: "",

        }
      },
      {
        iconPath: '../../image/location.png',
        id: 0,
        latitude: 31.176166,
        longitude: 121.416132,
        width: 30,
        height: 30,
        title: "",
        callout: {
          content: "",
          color: "#2c8df6",
          fontSize: 20,
          borderRadius: 10,
          bgColor: "#fff",
          display: "ALWAYS",
          boxShadow: "2px 2px 10px #aaa"
        },
        label: {
          color: "#000",
          fontSize: 12,
          content: "",

        }
      },
      {
        iconPath: '../../image/location.png',
        id: 0,
        latitude: 31.176082,
        longitude: 121.4202, 
        width: 30,
        height: 30,
        title: "",
        callout: {
          content: "",
          color: "#2c8df6",
          fontSize: 20,
          borderRadius: 10,
          bgColor: "#fff",
          display: "ALWAYS",
          boxShadow: "2px 2px 10px #aaa"
        },
        label: {
          color: "#000",
          fontSize: 12,
          content: "",

        }
      },
      {
        iconPath: '../../image/location.png',
        id: 0,
        latitude: 31.173049,
        longitude: 121.414497,
        width: 30,
        height: 30,
        title: "",
        callout: {
          content: "",
          color: "#2c8df6",
          fontSize: 20,
          borderRadius: 10,
          bgColor: "#fff",
          display: "ALWAYS",
          boxShadow: "2px 2px 10px #aaa"
        },
        label: {
          color: "#000",
          fontSize: 12,
          content: "",

        }
      },
      {
        iconPath: '../../image/location.png',
        id: 0,
        latitude: 31.172012,
        longitude: 121.419082,
        width: 30,
        height: 30,
        title: "",
        callout: {
          content: "",
          color: "#2c8df6",
          fontSize: 20,
          borderRadius: 10,
          bgColor: "#fff",
          display: "ALWAYS",
          boxShadow: "2px 2px 10px #aaa"
        },
        label: {
          color: "#000",
          fontSize: 12,
          content: "",

        }
      },
      {
        iconPath: '../../image/location.png',
        id: 0,
        latitude: 31.180852,
        longitude: 121.420996, 
        width: 30,
        height: 30,
        title: "",
        callout: {
          content: "",
          color: "#2c8df6",
          fontSize: 20,
          borderRadius: 10,
          bgColor: "#fff",
          display: "ALWAYS",
          boxShadow: "2px 2px 10px #aaa"
        },
        label: {
          color: "#000",
          fontSize: 12,
          content: "",

        }
      },
      {
        iconPath: '../../image/location.png',
        id: 0,
        latitude: 31.18185,
        longitude: 121.415128, 
        width: 30,
        height: 30,
        title: "",
        callout: {
          content: "",
          color: "#2c8df6",
          fontSize: 20,
          borderRadius: 10,
          bgColor: "#fff",
          display: "ALWAYS",
          boxShadow: "2px 2px 10px #aaa"
        },
        label: {
          color: "#000",
          fontSize: 12,
          content: "",

        }
      },
      {
        iconPath: '../../image/location.png',
        id: 0,
        latitude: 31.176989,
        longitude: 121.407826, 
        width: 30,
        height: 30,
        title: "",
        callout: {
          content: "",
          color: "#2c8df6",
          fontSize: 20,
          borderRadius: 10,
          bgColor: "#fff",
          display: "ALWAYS",
          boxShadow: "2px 2px 10px #aaa"
        },
        label: {
          color: "#000",
          fontSize: 12,
          content: "",

        }
      }],
    polyline: [
      {
      points: [
      //   {
      //   latitude: 31.188388,
      //   longitude: 121.436304

      // }, {
      //     longitude: 121.436275,
      //     latitude: 31.187797
      //   }, {
      //     latitude: 34.790778,
      //     longitude: 113.711855,
      //   },
        ],
      color: "#ff6600",
      width: 2,
      dottedLine: false,
      arrowLine: true,
      borderColor: "#000",
      borderWidth: 5
    }],
    controls: [{
      id: 1,
      iconPath: '../../image/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    polygons:[
      {    
        points: [{
          latitude: 31.139089,
          longitude: 121.431617

      }, {
            longitude: 121.43153,
            latitude: 31.139068
      }, {
            latitude: 31.139073,
            longitude: 121.431464,
          }, {
            latitude: 31.139252,
            longitude: 121.431321,
          }, {
            latitude: 31.139426,
            longitude: 121.431152,
          }, {
            latitude: 31.139739,
            longitude: 121.430863,
          }, {
            latitude: 31.139825,
            longitude: 121.430781
          }, {
            latitude: 31.139908,
            longitude: 121.430795,
          }, {
            latitude: 31.139993,
            longitude: 121.430795,
          }, {
            latitude: 31.140057,
            longitude: 121.43084,
          }, {
            latitude: 31.140187,
            longitude: 121.431107,
          }, {
            latitude: 31.141269,
            longitude: 121.433455,
          }, {
            latitude: 31.14142,
            longitude: 121.433717,
          }, {
            latitude: 31.141589,
            longitude: 121.43388,
          }, {
            latitude: 31.141658,
            longitude: 121.434022,
          }, {
            latitude: 31.141679,
            longitude: 121.43408,
          }, {
            latitude: 31.141847,
            longitude: 121.434624,
          }, {
            latitude: 31.141095,
            longitude: 121.43492,
          }, {
            latitude: 31.140869,
            longitude: 121.434177,
          }, {
            latitude: 31.140728,
            longitude: 121.434184,
          }, {
            latitude: 31.140651,
            longitude: 121.434199,
          }, {
            latitude: 31.140562,
            longitude: 121.434228,
          }, {
            latitude: 31.140449,
            longitude: 121.434189,
          }, {
            latitude: 31.140418 ,
            longitude: 121.43415 ,
          }, {
            latitude: 31.140038 ,
            longitude: 121.43263 ,
          }, {
            latitude: 31.139972,
            longitude: 121.432584 ,
          }, {
            latitude: 31.139899,
            longitude:  121.432603,
          }, {
            latitude: 31.139554 ,
            longitude: 121.432734 ,
          }, {
            latitude: 31.139476,
            longitude: 121.432755,
          }, {
            latitude: 31.139452 ,
            longitude: 121.432703,
          }, {
            latitude: 31.139424,
            longitude: 121.43267,
          }, {
            latitude: 31.139089 ,
            longitude: 121.431617 ,
          }],
      strokeWidth: 1,
      strokeColor: "#ff6600",
      fillColor: "#FF66008c",
      },
      {
        points: [{
          latitude: 31.177938,
          longitude: 121.416598 ,
        }, {
            latitude: 31.178402,
            longitude: 121.418599,
          }, {
            latitude: 31.178021,
            longitude: 121.418726 ,
          }, {
            latitude: 31.177235 ,
            longitude: 121.418961,
          }, {
            latitude: 31.176336,
            longitude: 121.419255,
          }, {
            latitude: 31.175969 ,
            longitude: 121.419384,
          }, {
            latitude: 31.175937,
            longitude: 121.419227 ,
          }, {
            latitude: 31.176057,
            longitude: 121.419187,
          }, {
            latitude: 31.175847 ,
            longitude: 121.418308,
          }, {
            latitude: 31.175621 ,
            longitude: 121.417316,
          }, {
            latitude: 31.176576,
            longitude: 121.416998,
          }, {
            latitude: 31.177117,
            longitude: 121.416838,
          }, {
            latitude: 31.177858,
            longitude: 121.416617,
          }, {
            latitude: 31.177938,
            longitude: 121.416598,
          }],
        strokeWidth: 1,
        strokeColor: "#ff6600",
        fillColor: "#FF66008c",
      }, {
        points: [{
          latitude: 31.177126,
          longitude: 121.425893 ,
        }, {
            latitude: 31.177008,
            longitude: 121.42576 ,
          }, {
            latitude: 31.176831,
            longitude: 121.425129 ,
          }, {
            latitude: 31.176791,
            longitude: 121.424911,
          }, {
            latitude: 31.176528,
            longitude: 121.42467,
          }, {
            latitude: 31.177253,
            longitude: 121.423601,
          }, {
            latitude: 31.177621,
            longitude: 121.423928,
          }, {
            latitude: 31.17812,
            longitude: 121.424279,
          }, {
            latitude: 31.177126 ,
            longitude: 121.425893,
          }],
        strokeWidth: 1,
        strokeColor: "#ff6600",
        fillColor: "#FF66008c",
      }, {
        points: [{
          latitude: 31.178006,
          longitude: 121.420544,
        }, {
            latitude: 31.177932,
            longitude: 121.42025,
          }, {
            latitude: 31.17788,
            longitude: 121.419958,
          }, {
            latitude: 31.178023,
            longitude: 121.419908,
          }, {
            latitude: 31.178163,
            longitude: 121.419878,
          }, {
            latitude: 31.178266,
            longitude: 121.419962,
          }, {
            latitude: 31.178659,
            longitude: 121.419851,
          }, {
            latitude: 31.178717,
            longitude: 121.419905,
          }, {
            latitude: 31.178777 ,
            longitude: 121.420094,
          }, {
            latitude: 31.178797,
            longitude: 121.420146 ,
          }, {
            latitude: 31.17883,
            longitude: 121.420233,
          }, {
            latitude: 31.178862,
            longitude: 121.42034,
          }, {
            latitude: 31.178883,
            longitude: 121.420496,
          }, {
            latitude: 31.178819,
            longitude: 121.420488,
          }, {
            latitude: 31.178352,
            longitude: 121.420496 ,
          }, {
            latitude: 31.178006,
            longitude: 121.420544,
          }],
        strokeWidth: 1,
        strokeColor: "#ff6600",
        fillColor: "#FF66008c",
      }, {
        points: [{
          latitude: 31.177618,
          longitude: 121.415228,
        }, {
            latitude: 31.177936,
            longitude: 121.416571,
          }, {
            latitude: 31.177121,
            longitude: 121.416803,
          }, {
            latitude: 31.176806,
            longitude: 121.415508,
          }, {
            latitude: 31.177618,
            longitude: 121.415228,
          }],
        strokeWidth: 1,
        strokeColor: "#ff6600",
        fillColor: "#FF66008c",
      }, {
        points: [{
          latitude: 31.175496,
          longitude: 121.416641,
        }, {
            latitude: 31.175372,
            longitude: 121.416116,
          }, {
            latitude: 31.175383,
            longitude: 121.416064,
          }, {
            latitude: 31.175444,
            longitude: 121.416009,
          }, {
            latitude: 31.176715,
            longitude: 121.415544,
          }, {
            latitude: 31.176742,
            longitude: 121.415545,
          }, {
            latitude: 31.17677,
            longitude: 121.415552,
          }, {
            latitude: 31.176949,
            longitude: 121.41624,
          }, {
            latitude: 31.176932 ,
            longitude: 121.41628,
          }, {
            latitude: 31.176872,
            longitude: 121.416307,
          }, {
            latitude: 31.175631,
            longitude: 121.416669,
          }, {
            latitude: 31.175545,
            longitude: 121.416666,
          }, {
            latitude: 31.175496,
            longitude: 121.416641,
          }],
        strokeWidth: 1,
        strokeColor: "#ff6600",
        fillColor: "#FF66008c",
      }, {
        points: [{
          latitude: 31.176601,
          longitude: 121.419221,
        }, {
            latitude: 31.176651,
            longitude: 121.419315,
          }, {
            latitude: 31.176484,
            longitude: 121.420106,
          }, {
            latitude: 31.176697,
            longitude: 121.420914,
          }, {
            latitude: 31.176036,
            longitude: 121.421302,
          }, {
            latitude: 31.175889,
            longitude: 121.421174,
          }, {
            latitude: 31.175547 ,
            longitude: 121.420275,
          }, {
            latitude: 31.175334 ,
            longitude: 121.419575,
          }, {
            latitude: 31.176601 ,
            longitude: 121.419221,
          },],
        strokeWidth: 1,
        strokeColor: "#ff6600",
        fillColor: "#FF66008c",
      }, 
      {
        points: [{
          latitude: 31.173486,
          longitude: 121.412605,
        }, {
            latitude: 31.174044,
            longitude: 121.415135,
          }, {
            latitude: 31.17363,
            longitude: 121.415253,
          }, {
            latitude: 31.173876,
            longitude: 121.41628,
          }, {
            latitude: 31.172756,
            longitude: 121.416682,
          }, {
            latitude: 31.172687,
            longitude: 121.416594,
          }, {
            latitude: 31.172478,
            longitude: 121.415448,
          }, {
            latitude: 31.172387,
            longitude: 121.414856,
          }, {
            latitude: 31.172006,
            longitude: 121.412935,
          }, {
            latitude: 31.173364,
            longitude: 121.41249,
          }, {
            latitude: 31.173486,
            longitude: 121.412605,
          },],
        strokeWidth: 1,
        strokeColor: "#ff6600",
        fillColor: "#FF66008c",
      }, 
      {
        points: [{
          latitude: 31.170543,
          longitude: 121.417788,
        }, {
            latitude: 31.172735 ,
            longitude: 121.416964,
          }, {
            latitude: 31.172768 ,
            longitude: 121.417006,
          }, {
            latitude: 31.173453,
            longitude: 121.419969,
          }, {
            latitude: 31.173426,
            longitude: 121.42011,
          }, {
            latitude: 31.173367,
            longitude: 121.420281,
          }, {
            latitude: 31.17322 ,
            longitude: 121.420485,
          }, {
            latitude: 31.17303,
            longitude: 121.420629,
          }, {
            latitude: 31.172873,
            longitude: 121.420675,
          }, {
            latitude: 31.172012,
            longitude: 121.420901,
          }, {
            latitude: 31.171682,
            longitude: 121.420977,
          }, {
            latitude: 31.171182,
            longitude: 121.421101,
          }, {
            latitude: 31.170861,
            longitude: 121.4195,
          }, {
            latitude: 31.170543,
            longitude: 121.417788,
          },],
        strokeWidth: 1,
        strokeColor: "#ff6600",
        fillColor: "#FF66008c",
      }, 
      {
        points: [{
          latitude: 31.181219 ,
          longitude: 121.420728,
        }, {
            latitude: 31.181182,
            longitude: 121.421388,
          }, {
            latitude: 31.181082,
            longitude: 121.421378,
          }, {
            latitude: 31.180984,
            longitude: 121.421369,
          }, {
            latitude: 31.180895,
            longitude: 121.421359,
          }, {
            latitude: 31.180808,
            longitude: 121.421335,
          }, {
            latitude: 31.180758,
            longitude: 121.421282,
          }, {
            latitude: 31.18074 ,
            longitude: 121.421244,
          }, {
            latitude: 31.18071,
            longitude: 121.421192,
          }, {
            latitude: 31.180684,
            longitude: 121.421179,
          }, {
            latitude: 31.180559,
            longitude: 121.421153, 
          }, {
            latitude: 31.180437,
            longitude: 121.421145, 
          }, {
            latitude: 31.180457,
            longitude: 121.42067, 
          }, {
            latitude: 31.181219,
            longitude: 121.420728,
          },],
        strokeWidth: 1,
        strokeColor: "#ff6600",
        fillColor: "#FF66008c",
      }, 
      {
        points: [{
          latitude: 31.182082,
          longitude: 121.414307, 
        }, {
            latitude: 31.181989,
            longitude: 121.415808,
          }, {
            latitude: 31.181964,
            longitude: 121.41588, 
          }, {
            latitude: 31.181916,
            longitude: 121.415927, 
          }, {
            latitude: 31.181866,
            longitude: 121.415943, 
          }, {
            latitude: 31.181811,
            longitude: 121.415943,
          }, {
            latitude: 31.181758,
            longitude: 121.415931, 
          }, {
            latitude: 31.181666,
            longitude: 121.415895, 
          }, {
            latitude: 31.181616,
            longitude: 121.415848, 
          }, {
            latitude: 31.18172,
            longitude: 121.414359, 
          }, {
            latitude: 31.182082,
            longitude: 121.414307, 
          },],
        strokeWidth: 1,
        strokeColor: "#ff6600",
        fillColor: "#FF66008c",
      }, 
      {
        points: [{
          latitude: 31.177539,
          longitude: 121.406813,
        }, {
            latitude: 31.177677,
            longitude: 121.406888, 
          }, {
            latitude: 31.177994,
            longitude: 121.408494, 
          }, {
            latitude: 31.176322,
            longitude: 121.408805, 
          }, {
            latitude: 31.17626,
            longitude: 121.408692,
          }, {
            latitude: 31.175989,
            longitude: 121.407209, 
          }, {
            latitude: 31.177539,
            longitude: 121.406813, 
          }],
        strokeWidth: 1,
        strokeColor: "#ff6600",
        fillColor: "#FF66008c",
      }
    ],
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //拨打手机号码
  makePhoneCall: function () {
    var that = this
    wx.makePhoneCall({
      phoneNumber: '15136135201',
      success: function () {
        console.log("成功拨打电话")
      }
    })
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
