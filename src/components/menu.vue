<template>
  <div class="wrap clearfix">
    <div class="leftMenu">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            router
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="/">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/">用户</el-menu-item>
                <el-menu-item index="1-2">权限</el-menu-item>
                <el-menu-item index="1-3">角色</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/msarea">
              <i class="el-icon-menu"></i>
              <span slot="title">城市地域管理</span>
            </el-menu-item>
            <el-menu-item index="/logistics">
              <i class="el-icon-document"></i>
              <span slot="title">物流公司管理</span>
            </el-menu-item>
            <el-menu-item index="/merchant">
              <i class="el-icon-setting"></i>
              <span slot="title">商家配置</span>
            </el-menu-item>
            <el-menu-item index="/category">
              <i class="el-icon-news"></i>
              <span slot="title">品类管理</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
  .leftMenu{
    width:220px;
    float: left;
    height:100%;
    background-color:#545C64;
  }
</style>
