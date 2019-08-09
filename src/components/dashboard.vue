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
    </el-card>
  </div>
</template>
<script>
export default {}

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
}

</style>
