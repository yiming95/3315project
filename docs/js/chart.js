//! 初始化的四个 Line chart

new Chart(document.getElementById("line-chart1"), {
  type: "line",
  data: {
    labels: [
      "1月1日",
      "1月15日",
      "2月1日",
      "2月15日",
      "3月1日",
      "3月15日",
      "4月1日",
      "4月15日",
      "5月1日",
      "5月15日"
    ],
    datasets: [
      {
        data: [100, 200, 400, 600, 1000, 1400, 2000, 2800, 4000, 5200],
        label: "确诊人数",
        borderColor: "#ed1b2e",
        fill: false
      },
      {
        data: [20, 50, 100, 200, 280, 400, 1000, 1500, 2000, 4000],
        label: "痊愈人数",
        borderColor: "rgba(102, 204, 153, 1)",
        fill: false
      },
      {
        data: [0, 10, 20, 30, 50, 88, 123, 400, 800, 900],
        label: "死亡人数",
        borderColor: "#000000",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "模拟后：全国疫情预测图"
    }
  }
});

new Chart(document.getElementById("line-chart2"), {
  type: "line",
  data: {
    labels: [
      "1月1日",
      "1月15日",
      "2月1日",
      "2月15日",
      "3月1日",
      "3月15日",
      "4月1日",
      "4月15日",
      "5月1日",
      "5月15日"
    ],
    datasets: [
      {
        data: [10, 20, 40, 60, 100, 140, 200, 280, 400, 520],
        label: "确诊人数",
        borderColor: "#ed1b2e",
        fill: false
      },
      {
        data: [2, 5, 10, 20, 28, 40, 100, 150, 200, 400],
        label: "痊愈人数",
        borderColor: "rgba(102, 204, 153, 1)",
        fill: false
      },
      {
        data: [0, 1, 2, 3, 5, 10, 12, 40, 80, 90],
        label: "死亡人数",
        borderColor: "#000000",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "模拟后：浙江省疫情预测图"
    }
  }
});

new Chart(document.getElementById("line-chart3"), {
  type: "line",
  data: {
    labels: [
      "1月1日",
      "1月15日",
      "2月1日",
      "2月15日",
      "3月1日",
      "3月15日",
      "4月1日",
      "4月15日",
      "5月1日",
      "5月15日"
    ],
    datasets: [
      {
        data: [1, 2, 4, 6, 10, 14, 20, 28, 40, 52],
        label: "确诊人数",
        borderColor: "#ed1b2e",
        fill: false
      },
      {
        data: [0, 0, 1, 1, 2, 5, 5, 8, 10, 30],
        label: "痊愈人数",
        borderColor: "rgba(102, 204, 153, 1)",
        fill: false
      },
      {
        data: [0, 0, 0, 0, 0, 2, 3, 5, 5, 10],
        label: "死亡人数",
        borderColor: "#000000",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "模拟后：宁波市疫情预测图"
    }
  }
});

new Chart(document.getElementById("line-chart4"), {
  type: "line",
  data: {
    labels: [
      "1月1日",
      "1月15日",
      "2月1日",
      "2月15日",
      "3月1日",
      "3月15日",
      "4月1日",
      "4月15日",
      "5月1日",
      "5月15日"
    ],
    datasets: [
      {
        data: [0, 0, 0, 0, 1, 2, 3, 3, 4, 6],
        label: "确诊人数",
        borderColor: "#ed1b2e",
        fill: false
      },
      {
        data: [0, 0, 0, 0, 0, 1, 1, 2, 3, 6],
        label: "痊愈人数",
        borderColor: "rgba(102, 204, 153, 1)",
        fill: false
      },
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        label: "死亡人数",
        borderColor: "#000000",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "模拟后：鄞州区疫情预测图"
    }
  }
});

//! checkbox 选中后的处理
// 默认的模拟为0，图像就是按照初始数据；如果模拟为1，那么就是按照新的数据集
var simulateResult = 0;

function simulateFunction() {
  var checkBox1 = document.getElementById("myCheck1");
  var checkBox2 = document.getElementById("myCheck2");
  var checkBox3 = document.getElementById("myCheck3");
  var checkBox4 = document.getElementById("myCheck4");

  //! 暂时认为选中任何button后的数据变化都一样
  if (
    checkBox1.checked |
    checkBox2.checked |
    checkBox3.checked |
    (checkBox4.checked == true)
  ) {
    simulateResult = 1;
  } else {
    simulateResult = 0;
  }
}

//! 点击 “模拟”后 更改图表里的数据
$("#btn1").on("click", function() {
  var context1 = document.querySelector("#line-chart1").getContext("2d");

  if (simulateResult == 1) {
    // 有用户点击了 checkbox, 图一展示新的结果
    new Chart(document.getElementById("line-chart1"), {
      type: "line",
      data: {
        labels: [
          "1月1日",
          "1月15日",
          "2月1日",
          "2月15日",
          "3月1日",
          "3月15日",
          "4月1日",
          "4月15日",
          "5月1日",
          "5月15日"
        ],
        datasets: [
          {
            data: [50, 100, 150, 200, 300, 600, 1000, 1400, 2000, 2600],
            label: "确诊人数",
            borderColor: "#ed1b2e",
            fill: false
          },
          {
            data: [20, 50, 100, 200, 280, 400, 1000, 1500, 2000, 4000],
            label: "痊愈人数",
            borderColor: "rgba(102, 204, 153, 1)",
            fill: false
          },
          {
            data: [0, 10, 20, 30, 50, 88, 123, 400, 800, 900],
            label: "死亡人数",
            borderColor: "#000000",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "模拟后：全国疫情预测图"
        }
      }
    });
    // 有用户点击了 checkbox, 图二展示新的结果
    new Chart(document.getElementById("line-chart2"), {
        type: "line",
        data: {
          labels: [
            "1月1日",
            "1月15日",
            "2月1日",
            "2月15日",
            "3月1日",
            "3月15日",
            "4月1日",
            "4月15日",
            "5月1日",
            "5月15日"
          ],
          datasets: [
            {
              data: [5, 10, 30, 50, 60, 80, 100, 120, 220, 250],
              label: "确诊人数",
              borderColor: "#ed1b2e",
              fill: false
            },
            {
              data: [2, 5, 20, 30, 40, 50, 80, 90, 200, 230],
              label: "痊愈人数",
              borderColor: "rgba(102, 204, 153, 1)",
              fill: false
            },
            {
              data: [0, 1, 2, 3, 3, 4, 4, 4, 8, 10],
              label: "死亡人数",
              borderColor: "#000000",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "模拟后：浙江省疫情预测图"
          }
        }
      });

    // 有用户点击了 checkbox, 图三展示新的结果
    new Chart(document.getElementById("line-chart3"), {
        type: "line",
        data: {
          labels: [
            "1月1日",
            "1月15日",
            "2月1日",
            "2月15日",
            "3月1日",
            "3月15日",
            "4月1日",
            "4月15日",
            "5月1日",
            "5月15日"
          ],
          datasets: [
            {
              data: [1, 2, 2, 4, 4, 4, 5, 5, 5, 5],
              label: "确诊人数",
              borderColor: "#ed1b2e",
              fill: false
            },
            {
              data: [0, 0, 1, 1, 2, 4, 4, 5, 5, 5],
              label: "痊愈人数",
              borderColor: "rgba(102, 204, 153, 1)",
              fill: false
            },
            {
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              label: "死亡人数",
              borderColor: "#000000",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "模拟后：宁波市疫情预测图"
          }
        }
      });
    
    // 有用户点击了 checkbox, 图四展示新的结果
      new Chart(document.getElementById("line-chart4"), {
        type: "line",
        data: {
          labels: [
            "1月1日",
            "1月15日",
            "2月1日",
            "2月15日",
            "3月1日",
            "3月15日",
            "4月1日",
            "4月15日",
            "5月1日",
            "5月15日"
          ],
          datasets: [
            {
              data: [0, 0, 0, 0, 1, 2, 2, 2, 2, 2],
              label: "确诊人数",
              borderColor: "#ed1b2e",
              fill: false
            },
            {
              data: [0, 0, 0, 0, 0, 1, 2, 2, 2, 2],
              label: "痊愈人数",
              borderColor: "rgba(102, 204, 153, 1)",
              fill: false
            },
            {
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              label: "死亡人数",
              borderColor: "#000000",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "模拟后：鄞州区疫情预测图"
          }
        }
      });

  } else {
    // 用户没有点击 checkbox, 但是仍然点击了模拟，那么就恢复初始
    new Chart(document.getElementById("line-chart1"), {
      type: "line",
      data: {
        labels: [
          "1月1日",
          "1月15日",
          "2月1日",
          "2月15日",
          "3月1日",
          "3月15日",
          "4月1日",
          "4月15日",
          "5月1日",
          "5月15日"
        ],
        datasets: [
          {
            data: [100, 200, 400, 600, 1000, 1400, 2000, 2800, 4000, 5200],
            label: "确诊人数",
            borderColor: "#ed1b2e",
            fill: false
          },
          {
            data: [20, 50, 100, 200, 280, 400, 1000, 1500, 2000, 4000],
            label: "痊愈人数",
            borderColor: "rgba(102, 204, 153, 1)",
            fill: false
          },
          {
            data: [0, 10, 20, 30, 50, 88, 123, 400, 800, 900],
            label: "死亡人数",
            borderColor: "#000000",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "模拟后：全国疫情预测图"
        }
      }
    });

    new Chart(document.getElementById("line-chart2"), {
        type: "line",
        data: {
          labels: [
            "1月1日",
            "1月15日",
            "2月1日",
            "2月15日",
            "3月1日",
            "3月15日",
            "4月1日",
            "4月15日",
            "5月1日",
            "5月15日"
          ],
          datasets: [
            {
              data: [10, 20, 40, 60, 100, 140, 200, 280, 400, 520],
              label: "确诊人数",
              borderColor: "#ed1b2e",
              fill: false
            },
            {
              data: [2, 5, 10, 20, 28, 40, 100, 150, 200, 400],
              label: "痊愈人数",
              borderColor: "rgba(102, 204, 153, 1)",
              fill: false
            },
            {
              data: [0, 1, 2, 3, 5, 10, 12, 40, 80, 90],
              label: "死亡人数",
              borderColor: "#000000",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "模拟后：浙江省疫情预测图"
          }
        }
      });

      new Chart(document.getElementById("line-chart3"), {
        type: "line",
        data: {
          labels: [
            "1月1日",
            "1月15日",
            "2月1日",
            "2月15日",
            "3月1日",
            "3月15日",
            "4月1日",
            "4月15日",
            "5月1日",
            "5月15日"
          ],
          datasets: [
            {
              data: [1, 2, 4, 6, 10, 14, 20, 28, 40, 52],
              label: "确诊人数",
              borderColor: "#ed1b2e",
              fill: false
            },
            {
              data: [0, 0, 1, 1, 2, 5, 5, 8, 10, 30],
              label: "痊愈人数",
              borderColor: "rgba(102, 204, 153, 1)",
              fill: false
            },
            {
              data: [0, 0, 0, 0, 0, 2, 3, 5, 5, 10],
              label: "死亡人数",
              borderColor: "#000000",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "模拟后：宁波市疫情预测图"
          }
        }
      });
      
      new Chart(document.getElementById("line-chart4"), {
        type: "line",
        data: {
          labels: [
            "1月1日",
            "1月15日",
            "2月1日",
            "2月15日",
            "3月1日",
            "3月15日",
            "4月1日",
            "4月15日",
            "5月1日",
            "5月15日"
          ],
          datasets: [
            {
              data: [0, 0, 0, 0, 1, 2, 3, 3, 4, 6],
              label: "确诊人数",
              borderColor: "#ed1b2e",
              fill: false
            },
            {
              data: [0, 0, 0, 0, 0, 1, 1, 2, 3, 6],
              label: "痊愈人数",
              borderColor: "rgba(102, 204, 153, 1)",
              fill: false
            },
            {
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              label: "死亡人数",
              borderColor: "#000000",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "模拟后：鄞州区疫情预测图"
          }
        }
      });
  }
});
