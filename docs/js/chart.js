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
        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
        label: "确诊人数",
        borderColor: "rgba(240, 52, 52, 1)",
        fill: false
      },
      {
        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
        label: "痊愈人数",
        borderColor: "rgba(102, 204, 153, 1)",
        fill: false
      },
      {
        data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
        label: "死亡人数",
        borderColor: "rgba(108, 122, 137, 1)",
        fill: false
      },
      {
        data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
        label: "潜伏期人数",
        borderColor: "rgba(255,221,50,1)",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "全国疫情预测图"
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
        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
        label: "确诊人数",
        borderColor: "rgba(240, 52, 52, 1)",
        fill: false
      },
      {
        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
        label: "痊愈人数",
        borderColor: "rgba(102, 204, 153, 1)",
        fill: false
      },
      {
        data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
        label: "死亡人数",
        borderColor: "rgba(108, 122, 137, 1)",
        fill: false
      },
      {
        data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
        label: "潜伏期人数",
        borderColor: "rgba(255,221,50,1)",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "全省疫情预测图"
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
        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
        label: "确诊人数",
        borderColor: "rgba(240, 52, 52, 1)",
        fill: false
      },
      {
        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
        label: "痊愈人数",
        borderColor: "rgba(102, 204, 153, 1)",
        fill: false
      },
      {
        data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
        label: "死亡人数",
        borderColor: "rgba(108, 122, 137, 1)",
        fill: false
      },
      {
        data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
        label: "潜伏期人数",
        borderColor: "rgba(255,221,50,1)",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "全市疫情预测图"
    }
  }
});

//! 柱状图： 排名前十的 COVID-19 国家确诊人数

new Chart(document.getElementById("bar-chart-horizontal1"), {
  type: "horizontalBar",
  data: {
    labels: ["湖北省", "广东省", "河南省", "浙江省", "湖南省"],
    datasets: [
      {
        label: "确诊人数",
        backgroundColor: [
          "rgba(244, 208, 63, 1)",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "rgba(30, 139, 195, 1)"
        ],
        data: [67802, 1514, 1276, 1260, 1019]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "全国各省病患总数统计（前五）"
    }
  }
});
