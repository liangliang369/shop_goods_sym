<!--
 * @功能描述: 
 * @版本: 
 * @作者: 张亮三
 * @Date: 2020-04-12 10:11:03
 * @最新修改内容: 
 * @LastEditTime: 2020-04-12 10:12:29
 -->
<template>
  <div class="layout">
    <el-container :style="style">
      <el-header>
        <el-row :gutter="40">
          <el-col :span="6">LOGO</el-col>
          <el-col :span="14" class="ml-auto">
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo ml-auto"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">商品</el-menu-item>
              <el-menu-item index="3">处理中心</el-menu-item>
              <el-menu-item index="4">处理中心</el-menu-item>
              <el-submenu index="5">
                <template slot="title">我的工作台</template>
                <el-menu-item index="5-1">选项1</el-menu-item>
                <el-menu-item index="5-2">选项2</el-menu-item>
                <el-menu-item index="5-3">选项3</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" >
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="3" >
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="3" >
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="3" >
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {
      style: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect() {}
  }
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  overflow: auto;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
