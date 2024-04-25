<script>
export default {
  name: "HomeView",
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {

  }
}
</script>

<template>
  <el-container height="800px">
    <el-aside width="200px">
      <el-menu :default-active="activeIndex">
        <el-menu-item class="menuItem" index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-opportunity"></i>功能菜单</template>
          <el-menu-item index="2-1">用户管理</el-menu-item>
          <el-menu-item index="2-2">文章管理</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-s-open"></i>主题切换</template>
          <el-menu-item index="3-1">蓝色风格</el-menu-item>
          <el-menu-item index="3-2">黄色风格</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: rgb(238, 241, 246);
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 600px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.menuItem {
  height: 60px;
}

</style>