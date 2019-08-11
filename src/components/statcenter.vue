<template>
  <div class="statcenter">
    <el-card class="simple-card">
      <div class="card-desc">
        <el-row>
          <el-col :lg="6" :sm="12" class="simple-container">
            <div class="logo">
              <img src="../common/image/data1.png">
            </div>
            <div class="text">
              <span class="text-title">访客数</span>
              <span class="text-num">567</span>
            </div>
          </el-col>
          <el-col :lg="6" :sm="12" class="simple-container">
            <div class="logo">
              <img src="../common/image/data2.png">
            </div>
            <div class="text">
              <span class="text-title">浏览量</span>
              <span class="text-num">80</span>
            </div>
          </el-col>
          <el-col :lg="6" :sm="12" class="simple-container">
            <div class="logo">
              <img src="../common/image/data3.png">
            </div>
            <div class="text">
              <span class="text-title">商品曝光次数</span>
              <span class="text-num">89万</span>
            </div>
          </el-col>
          <el-col :lg="6" :sm="12" class="simple-container">
            <div class="logo">
              <img src="../common/image/data4.png">
            </div>
            <div class="text">
              <span class="text-title">商品浏览量</span>
              <span class="text-num">28340</span>
            </div>
          </el-col>
          <el-col :lg="6" :sm="12" class="simple-container">
            <div class="logo">
              <img src="../common/image/data5.png">
            </div>
            <div class="text">
              <span class="text-title">商品访客数</span>
              <span class="text-num">20458</span>
            </div>
          </el-col>
          <el-col :lg="6" :sm="12" class="simple-container">
            <div class="logo">
              <img src="../common/image/data6.png">
            </div>
            <div class="text">
              <span class="text-title">支付订单数</span>
              <span class="text-num">2067</span>
            </div>
          </el-col>
          <el-col :lg="6" :sm="12" class="simple-container">
            <div class="logo">
              <img src="../common/image/data7.png">
            </div>
            <div class="text">
              <span class="text-title">支付人数</span>
              <span class="text-num">20123</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="simple-card data">
      <h2 class="title">概览数据</h2>
      <el-row>
        <el-col :md="8">
          <div class="my-chart" id="xinlingshou"></div>
          <div class="chart-text">
            <p class="chart-name">新零售</p>
            <h4 class="chart-title">销售占比</h4>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="my-chart" id="shitidian"></div>
          <div class="chart-text">
            <p class="chart-name">实体店</p>
            <h4 class="chart-title">销售占比</h4>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="my-chart" id="taobaodian"></div>
          <div class="chart-text">
            <p class="chart-name">淘宝店</p>
            <h4 class="chart-title">销售占比</h4>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-row>
      <el-col :sm="12" style="padding-right: 10px;">
        <el-card class="simple-card data">
          <h2 class="title">店铺会员</h2>
          <div class="my-chart" id="dianpuhuiyuan" style="height: 400px;"></div>
        </el-card>
      </el-col>
      <el-col :sm="12" style="padding-left: 10px;">
        <el-card class="simple-card data">
          <h2 class="title">本周销售</h2>
          <div class="my-chart" id="benzhouxiaoshou" style="height: 400px;"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-card class="simple-card sell">
      <h4 class="title">流量统计</h4>
      <el-tabs v-model="tabItem" @tab-click="tabChange">
        <el-tab-pane label="近三个月" name="threeMonth">
          <el-row>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">浏览次数</div>
              <div class="money">{{threeMonth[0]}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">独立访客</div>
              <div class="money">{{threeMonth[1]}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">IP</div>
              <div class="money">{{threeMonth[2]}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">点击次数</div>
              <div class="money">{{threeMonth[3]}}</div>
            </el-col>
          </el-row>
          <div class="sell-echarts" id="threeMonth-echarts">
          </div>
        </el-tab-pane>
        <el-tab-pane label="近半年" name="halfYear">
          <el-row>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">浏览次数</div>
              <div class="money">{{halfYear[0]}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">独立访客</div>
              <div class="money">{{halfYear[1]}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">IP</div>
              <div class="money">{{halfYear[2]}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">点击次数</div>
              <div class="money">{{halfYear[3]}}</div>
            </el-col>
          </el-row>
          <div class="sell-echarts" id="halfYear-echarts">
          </div>
        </el-tab-pane>
        <el-tab-pane label="近一年" name="oneYear">
          <el-row>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">浏览次数</div>
              <div class="money">{{oneYear[0]}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">独立访客</div>
              <div class="money">{{oneYear[1]}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">IP</div>
              <div class="money">{{oneYear[2]}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">点击次数</div>
              <div class="money">{{oneYear[3]}}</div>
            </el-col>
          </el-row>
          <div class="sell-echarts" id="oneYear-echarts">
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <el-row>
      <el-col :sm="12" style="padding-right: 10px;">
        <el-card class="simple-card data">
          <h2 class="title">活跃页面</h2>
          <el-table :data="huoyueyemian" :show-header="!!false" size="medium">
            <el-table-column type="index">
            </el-table-column>
            <el-table-column prop="url">
            </el-table-column>
            <el-table-column prop="num">
            </el-table-column>
            <el-table-column prop="percent">
              <template slot-scope="scope">
                <el-progress :percentage="scope.row.percent">
                </el-progress>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :sm="12" style="padding-left: 10px;">
        <el-card class="simple-card data">
          <h2 class="title">浏览最多</h2>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import echarts from 'echarts'
import { formatThousand } from '../common/js/formatThousand'

export default {
  data() {
    return {
      xinlingshou: {
        tooltip: {
          backgroundColor: 'rgba(255,255,255,0.7)',
          transitionDuration: 0.2,
          textStyle: {
            color: '#333',
            fontSize: 12
          },
          extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)'
        },
        series: [{
          data: [{
            value: 20,
            name: '分类一'
          }, {
            value: 80,
            name: '分类二'
          }],
          type: 'pie',
          radius: ['60%', '80%'],
          // center: ['50%', '60%'],
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          hoverOffset: 2,
          legendHoverLink: false
        }],
        color: ['#5584ff', '#ccc']
      },
      shitidian: {
        tooltip: {
          backgroundColor: 'rgba(255,255,255,0.7)',
          transitionDuration: 0.2,
          textStyle: {
            color: '#333',
            fontSize: 12
          },
          extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)'
        },
        series: [{
          data: [{
            value: 60,
            name: '分类一'
          }, {
            value: 48,
            name: '分类二'
          }],
          type: 'pie',
          radius: ['60%', '80%'],
          // center: ['50%', '60%'],
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          hoverOffset: 2,
          legendHoverLink: false
        }],
        color: ['#5584ff', '#ccc']
      },
      taobaodian: {
        tooltip: {
          backgroundColor: 'rgba(255,255,255,0.7)',
          transitionDuration: 0.2,
          textStyle: {
            color: '#333',
            fontSize: 12
          },
          extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)'
        },
        series: [{
          data: [{
            value: 90,
            name: '分类一'
          }, {
            value: 10,
            name: '分类二'
          }],
          type: 'pie',
          radius: ['60%', '80%'],
          // center: ['50%', '60%'],
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          hoverOffset: 2,
          legendHoverLink: false
        }],
        color: ['#5584ff', '#ccc']
      },
      dianpuhuiyuan: {
        grid: {
          left: '5%',
          right: '5%'
        },
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255,255,255,0.7)',
          transitionDuration: 0.2,
          textStyle: {
            color: '#333',
            fontSize: 12
          },
          extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)'
        },
        xAxis: {
          data: ['累积会员数', '新增会员数', '成交会员数', '会员注销数', '总会员数']
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: '#ddd',
              type: 'dotted'
            }
          }
        },
        series: [{
          type: 'bar',
          barCategoryGap: '50%',
          data: [38, 0, 61, 10, 89]
        }],
        color: '#5584ff'
      },
      benzhouxiaoshou: {
        grid: {
          left: '5%',
          right: '5%'
        },
        xAxis: {
          // type: 'value',
          data: ['2019-08-01', '2019-08-02', '2019-08-03', '2019-08-04', '2019-08-05', '2019-08-06', '2019-08-07'],
          boundaryGap: false,
          axisLabel: {
            color: '#333'
          },
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          axisTick: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: '#ddd',
              type: 'dotted'
            }
          }
        },
        label: {},
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255,255,255,0.7)',
          transitionDuration: 0.2,
          textStyle: {
            color: '#333',
            fontSize: 12
          },
          extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)'
        },
        series: [{
          name: '销售额',
          data: [0, 20, 17, 20, 21, 20, 21],
          type: 'line',
          symbol: 'none',
          hoverAnimation: false,
          smooth: true,
          lineStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: '#ff98ea'
              }, {
                offset: 0.7,
                color: '#87b5ff'
              }, {
                offset: 1,
                color: '#ff98ea'
              }]
            }
          }
        }]
      },
      threeMonthChart: {
        grid: {
          left: '5%',
          right: '5%'
        },
        xAxis: {
          // type: 'value',
          data: ['01/01', '02/01', '03/01', '04/01', '05/01', '06/01', '07/01', '08/01', '09/01', '10/01', '11/01', '12/01'],
          boundaryGap: false,
          axisLabel: {
            color: '#333'
          },
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          axisTick: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: '#ddd',
              type: 'dotted'
            }
          }
        },
        label: {},
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255,255,255,0.7)',
          transitionDuration: 0.2,
          textStyle: {
            color: '#333',
            fontSize: 12
          },
          extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)'
        },
        series: [{
          name: 'online',
          data: [7000, 6900, 9500, 14500, 18400, 21500, 25200, 26500, 23300, 18300, 13900, 9600],
          type: 'line'
        }, {
          name: 'offline',
          data: [3900, 4200, 5700, 8500, 11900, 15200, 17000, 16600, 14200, 10300, 6600, 4800],
          type: 'line'
        }],
        color: ['#5584ff', '#33cc33']
      },
      halfYearChart: {
        grid: {
          left: '5%',
          right: '5%'
        },
        xAxis: {
          // type: 'value',
          data: ['01/01', '02/01', '03/01', '04/01', '05/01', '06/01', '07/01', '08/01', '09/01', '10/01', '11/01', '12/01'],
          boundaryGap: false,
          axisLabel: {
            color: '#333'
          },
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          axisTick: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: '#ddd',
              type: 'dotted'
            }
          }
        },
        label: {},
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255,255,255,0.7)',
          transitionDuration: 0.2,
          textStyle: {
            color: '#333',
            fontSize: 12
          },
          extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)'
        },
        series: [{
          name: 'online',
          data: [7000, 6900, 9500, 14500, 18400, 21500, 25200, 26500, 23300, 18300, 13900, 9600],
          type: 'line'
        }, {
          name: 'offline',
          data: [3900, 4200, 5700, 8500, 11900, 15200, 17000, 16600, 14200, 10300, 6600, 4800],
          type: 'line'
        }],
        color: ['#5584ff', '#33cc33']
      },
      oneYearChart: {
        grid: {
          left: '5%',
          right: '5%'
        },
        xAxis: {
          // type: 'value',
          data: ['01/01', '02/01', '03/01', '04/01', '05/01', '06/01', '07/01', '08/01', '09/01', '10/01', '11/01', '12/01'],
          boundaryGap: false,
          axisLabel: {
            color: '#333'
          },
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          axisTick: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: '#ddd',
              type: 'dotted'
            }
          }
        },
        label: {},
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255,255,255,0.7)',
          transitionDuration: 0.2,
          textStyle: {
            color: '#333',
            fontSize: 12
          },
          extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)'
        },
        series: [{
          name: 'online',
          data: [7000, 6900, 9500, 14500, 18400, 21500, 25200, 26500, 23300, 18300, 13900, 9600],
          type: 'line'
        }, {
          name: 'offline',
          data: [3900, 4200, 5700, 8500, 11900, 15200, 17000, 16600, 14200, 10300, 6600, 4800],
          type: 'line'
        }],
        color: ['#5584ff', '#33cc33']
      },
      threeMonth: formatThousand([4677, 3621, 5690, 6583]),
      halfYear: formatThousand([6688, 8339, 7989, 9832]),
      oneYear: formatThousand([10323, 9262, 12639, 26386]),
      tabItem: 'threeMonth',
      huoyueyemian: [{
        url: '/getting',
        num: '2,80,489',
        percent: 90
      }, {
        url: '/home',
        num: '1,98,956',
        percent: 70
      }, {
        url: '/pricing',
        num: '1,90,257',
        percent: 60
      }, {
        url: '/about',
        num: '1,80,745',
        percent: 50
      }, {
        url: '/blog',
        num: '1,24,693',
        percent: 40
      }, {
        url: '/support',
        num: '8,489',
        percent: 35
      }, {
        url: '/team',
        num: '5,233',
        percent: 30
      }, {
        url: '/faq',
        num: '1,688',
        percent: 20
      }]
    }
  },
  mounted() {
    var xinlingshou = echarts.init(document.getElementById('xinlingshou'))
    var shitidian = echarts.init(document.getElementById('shitidian'))
    var taobaodian = echarts.init(document.getElementById('taobaodian'))
    var dianpuhuiyuan = echarts.init(document.getElementById('dianpuhuiyuan'))
    var benzhouxiaoshou = echarts.init(document.getElementById('benzhouxiaoshou'))
    var threeMonthChart = echarts.init(document.getElementById('threeMonth-echarts'))
    xinlingshou.setOption(this.xinlingshou)
    shitidian.setOption(this.shitidian)
    taobaodian.setOption(this.taobaodian)
    dianpuhuiyuan.setOption(this.dianpuhuiyuan)
    benzhouxiaoshou.setOption(this.benzhouxiaoshou)
    threeMonthChart.setOption(this.threeMonthChart)
    window.onresize = function() {
      xinlingshou.resize()
      shitidian.resize()
      taobaodian.resize()
      dianpuhuiyuan.resize()
      benzhouxiaoshou.resize()
      threeMonthChart.resize()
    }
  },
  methods: {
    tabChange() {
      switch (this.tabItem) {
        case 'threeMonth':
          setTimeout(() => {
            var threeMonthChart = echarts.init(document.getElementById('threeMonth-echarts'))
            threeMonthChart.setOption(this.threeMonthChart)
            window.onresize = function() {
              threeMonthChart.resize()
            }
          }, 0)
          break
        case 'halfYear':
          setTimeout(() => {
            var halfYearChart = echarts.init(document.getElementById('halfYear-echarts'))
            halfYearChart.setOption(this.halfYearChart)
            window.onresize = function() {
              halfYearChart.resize()
            }
          }, 0)
          break
        case 'oneYear':
          setTimeout(() => {
            var oneYearChart = echarts.init(document.getElementById('oneYear-echarts'))
            oneYearChart.setOption(this.oneYearChart)
            window.onresize = function() {
              oneYearChart.resize()
            }
          }, 0)
          break
      }
    }
  }
}

</script>
<style lang="less" scoped>
.statcenter {
  .simple-card {
    margin-bottom: 20px;

    .title {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .card-desc {
      .simple-container {
        display: flex;
        align-items: center;
        padding: 20px 0;

        .logo {
          flex: 0 0 50px;
          width: 50px;

          img {
            width: 50px;
          }
        }

        .text {
          display: flex;
          flex: 1;
          justify-content: space-between;
          flex-direction: column;
          margin-left: 10px;

          .text-title {
            color: #999;
            font-size: 12px;
            line-height: 20px;
          }

          .text-num {
            font-size: 14px;
            line-height: 30px;
          }
        }
      }
    }
  }

  .data {
    .my-chart {
      width: 100%;
      height: 200px;
    }

    .chart-text {
      text-align: center;

      .chart-name {
        color: #999;
        font-size: 14px;
        margin-bottom: 20px;
      }
    }
  }

  .sell {
    .sell-title {
      margin-bottom: 20px;
    }

    .sell-echarts {
      width: 100%;
      height: 400px;
    }

    .sell-item {
      margin-top: 20px;
      text-align: center;

      .sell-item-title {
        margin-bottom: 20px;
        font-size: 14px;
      }

      .money {
        font-size: 30px;
      }
    }
  }
}

</style>
