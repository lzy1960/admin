<template>
  <div class="container">
    <el-container>
      <el-header>
        <div class="header">
          <div class="header-logo">
            <a class="header-logo-desc" href="#">LOGO</a>
          </div>
          <div class="header-navbar">
            <a class="header-navbar-item" href="#" title="反馈">
              <i class="iconfont icon-aliwangwang"></i>
              <span>反馈</span>
            </a>
            <a class="header-navbar-item" href="#" title="帮助">
              <i class="iconfont icon-custom-help"></i>
              <span>帮助</span>
            </a>
            <div class="header-navbar-item user-info">
              <el-dropdown>
                <div class="user">
                  <div class="avatar">
                    <img height="40" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURcHBwb+/v7+/v76+vujo6OHh4cnJydTU1IOqnXYAAAADdFJOUxPppyMYpxkAAAD6SURBVEjH7dfbDYIwFAbguoHRCYwTKLcBOIUBaHQAIAxQwvwSEQpyaH/FFxP+5y89vacV4uQBOQix86DsxRmDV3HE4EV4YDa4QQRWSjYILKnNzQ0jekY7Yd3B1AVDeiV3wKCHsQPWPUwdkIbYYWSgtsLAwMwKfQNjFCZWWPwBhEcNz+NoZfLfrLXZPYkD+gtd/H6H97UT5+EK0FPY1ZbABaDYygysuTEvtqg9sI9AiyV/o8xgRNj0DLtHaiuszOahxgJLGueeL8Gpa8vnPHx30yEZGKo5lBwMiEnGwIKDKQMVB+UaSGzWwO2psMGPIfxgh78A8KcC/aY8ACmMo3JtJ3ljAAAAAElFTkSuQmCC">
                  </div>
                  <div class="text-wrapper">
                    <p class="text">名字</p>
                    <p class="text">部门</p>
                  </div>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                      <i class="iconfont icon-LC_icon_setting_line"></i>
                      设置
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <i class="iconfont icon-upload"></i>
                      退出
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </div>
              </el-dropdown>
            </div>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside style="width: 100px;">
          <el-menu>
            <el-menu-item index="1">
              <i class="el-icon-refresh"></i>
              <span>概况</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-date"></i>
              <span>数据</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-sort"></i>
              <span>交易</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-suitcase-1"></i>
              <span>商品</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-goblet"></i>
              <span>订单</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-user"></i>
              <span>客户</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main style="background: #f5f5f5;">
          </el-main>
          <el-footer>footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}

</script>
<style lang="less" scoped>
.container {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-logo {
      .header-logo-desc {
        font-size: 30px;
        color: #5584ff;
        font-weight: 700;
      }
    }

    .header-navbar {
      .header-navbar-item {
        display: inline-block;
        padding: 20px;
        color: #333;
        font-size: 16px;

        &.user-info {
          padding: 0;
          margin-left: 20px;
          vertical-align: middle;

          .user {
            display: flex;
            align-items: center;
            font-size: 13px;
            line-height: 14px;

            .iconfont {
              font-size: 20px;
            }

            .avatar {
              flex: 1;
              margin-right: 10px;
            }

            .text-wrapper {
              flex: 1;
            }
          }

          .text-wrapper {

            .text {}
          }
        }

        .iconfont {
          font-size: 20px;
          vertical-align: middle;
        }

        &:hover {
          color: #3e71f7;
        }
      }
    }
  }
}

</style>
