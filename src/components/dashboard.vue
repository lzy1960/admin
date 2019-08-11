<template>
  <div class="dashboard">
    <el-card class="simple-card">
      <h2 class="title">实时概况</h2>
      <div class="card-desc">
        <el-row>
          <el-col :lg="12" :sm="24" class="simple-container">
            <div class="logo">
              <img src="../common/image/money.png">
            </div>
            <div class="text">
              <span class="text-title">门店销售额(元)</span>
              <span class="text-price">982.00</span>
              <span class="text-yesterday">昨日：680.00</span>
            </div>
            <div class="text">
              <span class="text-title">门店支付订单数</span>
              <span class="text-price">80</span>
              <span class="text-yesterday">昨日：60</span>
            </div>
          </el-col>
          <el-col :lg="12" :sm="24" class="simple-container">
            <div class="logo">
              <img src="../common/image/money.png">
            </div>
            <div class="text">
              <span class="text-title">网店销售额(元)</span>
              <span class="text-price">381.00</span>
              <span class="text-yesterday">昨日：123.00</span>
            </div>
            <div class="text">
              <span class="text-title">网店支付订单数</span>
              <span class="text-price">120</span>
              <span class="text-yesterday">昨日：128</span>
            </div>
          </el-col>
          <el-col :lg="12" :sm="24" class="simple-container">
            <div class="logo">
              <img src="../common/image/customer.png">
            </div>
            <div class="text">
              <span class="text-title">新增客户数</span>
              <span class="text-price">182</span>
              <span class="text-yesterday">昨日：123</span>
            </div>
            <div class="text">
              <span class="text-title">支付客户数</span>
              <span class="text-price">96</span>
              <span class="text-yesterday">昨日：90</span>
            </div>
          </el-col>
          <el-col :lg="12" :sm="24" class="simple-container">
            <div class="logo">
              <img src="../common/image/vip.png">
            </div>
            <div class="text">
              <span class="text-title">新增会员数</span>
              <span class="text-price">89</span>
              <span class="text-yesterday">昨日：78</span>
            </div>
            <div class="text">
              <span class="text-title">新增储值金额(元)</span>
              <span class="text-price">586.00</span>
              <span class="text-yesterday">昨日：693.00</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="simple-card message">
      <h2 class="title">重要提醒</h2>
      <el-row class="card-desc">
        <el-col :lg="12" :sm="24" class="message-container">
          <div class="small-title">订单相关</div>
          <el-row>
            <el-col :lg="8" :sm="24" class="text">
              待发货订单：<span class="num">100</span>
            </el-col>
            <el-col :lg="8" :sm="24" class="text">
              待处理退款：<span class="num">0</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :lg="12" :sm="24" class="message-container">
          <div class="small-title">物流信息</div>
          <el-row>
            <el-col :lg="8" :sm="24" class="text">
              已完成：<span class="num">100</span>
            </el-col>
            <el-col :lg="8" :sm="24" class="text">
              派送中：<span class="num">0</span>
            </el-col>
            <el-col :lg="8" :sm="24" class="text">
              退货中：<span class="num">0</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :lg="12" :sm="24" class="message-container">
          <div class="small-title">商品相关</div>
          <el-row>
            <el-col :lg="8" :sm="24" class="text">
              门店在售：<span class="num">100</span>
            </el-col>
            <el-col :lg="8" :sm="24" class="text">
              门店售罄：<span class="num">0</span>
            </el-col>
            <el-col :lg="8" :sm="24" class="text">
              库存预警：<span class="num">0</span>
            </el-col>
            <el-col :lg="8" :sm="24" class="text">
              网店在售：<span class="num">0</span>
            </el-col>
            <el-col :lg="8" :sm="24" class="text">
              网店售罄：<span class="num">0</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :lg="12" :sm="24" class="message-container">
          <div class="small-title">通知消息</div>
          <el-row>
            <el-col :lg="8" :sm="24" class="text">
              未读客户消息：<span class="num">100</span>
            </el-col>
            <el-col :lg="8" :sm="24" class="text">
              未读通知：<span class="num">0</span>
            </el-col>
            <el-col :lg="8" :sm="24" class="text">
              系统通知：<span class="num">0</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="simple-card function">
      <h2 class="title">常用功能</h2>
      <el-row>
        <el-col :lg="8" :sm="24" class="func-desc">
          <el-link :underline="false" class="func-link">
            <div class="logo">
              <img src="../common/image/shopping.png" width="30">
            </div>
            <div class="text">
              发布门店商品
            </div>
          </el-link>
        </el-col>
        <el-col :lg="8" :sm="24" class="func-desc">
          <el-link :underline="false" class="func-link">
            <div class="logo">
              <img src="../common/image/shopping.png" width="30">
            </div>
            <div class="text">
              发布网店商品
            </div>
          </el-link>
        </el-col>
        <el-col :lg="8" :sm="24" class="func-desc">
          <el-link :underline="false" class="func-link">
            <div class="logo">
              <img src="../common/image/shopping.png" width="30">
            </div>
            <div class="text">
              客服系统
            </div>
          </el-link>
        </el-col>
        <el-col :lg="8" :sm="24" class="func-desc">
          <el-link :underline="false" class="func-link">
            <div class="logo">
              <img src="../common/image/shopping.png" width="30">
            </div>
            <div class="text">
              分销管理
            </div>
          </el-link>
        </el-col>
        <el-col :lg="8" :sm="24" class="func-desc">
          <el-link :underline="false" class="func-link">
            <div class="logo">
              <img src="../common/image/shopping.png" width="30">
            </div>
            <div class="text">
              收入/提现
            </div>
          </el-link>
        </el-col>
        <el-col :lg="8" :sm="24" class="func-desc">
          <el-link :underline="false" class="func-link">
            <div class="logo">
              <img src="../common/image/shopping.png" width="30">
            </div>
            <div class="text">
              帮助中心
            </div>
          </el-link>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="simple-card sell">
      <h4 class="sell-title">销售业绩</h4>
      <el-tabs v-model="tabItem" @tab-click="tabChange">
        <el-tab-pane label="全店" name="all">
          <el-row>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">昨日支付金额(元)</div>
              <div class="money">{{all[0]+'.00 '}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">本月已完成(元)</div>
              <div class="money">{{all[1]+'.00 '}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">本月目标(元)</div>
              <div class="money">{{all[2]+'.00 '}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">完成进度(%)</div>
              <div class="money">{{parseInt((all[1]-all[0])/all[2]*100)}}</div>
            </el-col>
          </el-row>
          <div class="sell-echarts" id="all-echarts">
          </div>
        </el-tab-pane>
        <el-tab-pane label="网店" name="online">
          <el-row>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">昨日支付金额(元)</div>
              <div class="money">{{online[0]+'.00'}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">本月已完成(元)</div>
              <div class="money">{{online[1]+'.00'}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">本月目标(元)</div>
              <div class="money">{{online[2]+'.00'}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">完成进度(%)</div>
              <div class="money">{{parseInt((online[1]-online[0])/online[2]*100)}}</div>
            </el-col>
          </el-row>
          <div class="sell-echarts" id="online-echarts">
          </div>
        </el-tab-pane>
        <el-tab-pane label="门店" name="offline">
          <el-row>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">昨日支付金额(元)</div>
              <div class="money">{{offline[0]+'.00'}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">本月已完成(元)</div>
              <div class="money">{{offline[1]+'.00'}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">本月目标(元)</div>
              <div class="money">{{offline[2]+'.00'}}</div>
            </el-col>
            <el-col class="sell-item" :lg="6" :md="12">
              <div class="sell-item-title">完成进度(%)</div>
              <div class="money">{{parseInt((offline[1]-offline[0])/offline[2]*100)}}</div>
            </el-col>
          </el-row>
          <div class="sell-echarts" id="offline-echarts">
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import echarts from 'echarts'

export default {
  data() {
    return {
      allChart: {
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
      onlineChart: {
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
      offlineChart: {
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
      all: [677.00, 3621.00, 10000.00],
      online: [1286.00, 2836.00, 5000.00],
      offline: [892.00, 1928.00, 5000.00],
      tabItem: 'all'
    }
  },
  mounted() {
    setTimeout(() => {
      var allChart = echarts.init(document.getElementById('all-echarts'))
      allChart.setOption(this.allChart)
      window.onresize = function() {
        allChart.resize()
      }
    }, 0)
  },
  methods: {
    tabChange() {
      switch (this.tabItem) {
        case 'all':
          setTimeout(() => {
            var allChart = echarts.init(document.getElementById('all-echarts'))
            allChart.setOption(this.allChart)
            window.onresize = function() {
              allChart.resize()
            }
          }, 0)
          break
        case 'online':
          setTimeout(() => {
            var onlineChart = echarts.init(document.getElementById('online-echarts'))
            onlineChart.setOption(this.onlineChart)
            window.onresize = function() {
              onlineChart.resize()
            }
          }, 0)
          break
        case 'offline':
          setTimeout(() => {
            var offlineChart = echarts.init(document.getElementById('offline-echarts'))
            offlineChart.setOption(this.offlineChart)
            window.onresize = function() {
              offlineChart.resize()
            }
          }, 0)
          break
      }
    }
  }
}

</script>
<style lang="less" scoped>
.dashboard {
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
        padding: 20px;

        .logo {
          flex: 0 0 58px;
          width: 58px;
          margin-right: 30px;

          img {
            width: 100%;
          }
        }

        .text {
          display: flex;
          flex: 1;
          flex-direction: column;
          line-height: 1.5;

          .text-title {
            flex: 1;
            font-size: 12px;
          }

          .text-price {
            flex: 1;
            font-size: 24px;
          }

          .text-yesterday {
            flex: 1;
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }

  .message {
    .message-container {
      padding: 20px;

      .small-title {
        font-size: 14px;
        margin-bottom: 10px;
      }

      .text {
        font-size: 13px;
        margin-bottom: 10px;
        color: #999;

        .num {
          color: #5584ff;
        }
      }
    }
  }

  .function {
    .func-desc {
      .func-link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0 10px 20px;
        font-size: 0;

        .logo {
          display: inline-block;
          flex: 0 0 30px;
          width: 30px;
          vertical-align: middle;
          margin-right: 10px;
        }

        .text {
          display: inline-block;
          flex: 1;
          font-size: 14px;
          vertical-align: middle;
        }
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
      .sell-item-title {
        margin-bottom: 20px;
        font-size: 14px;
      }

      .money {
        font-weight: 700;
        font-size: 18px;
      }
    }
  }
}

</style>
