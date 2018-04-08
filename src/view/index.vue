<template>
  <div>
    <top-header></top-header>
    <div class="content">
      <menu-content></menu-content>
    </div>
  </div>
</template>
<script>
  import Header from '../components/header.vue'
  import leftMenu from '../components/menu.vue'
 export default {
      components: {
          'top-header':Header,
          'menu-content':leftMenu
      }
 }
</script>
<style>
  .content{
    position: absolute;
    top:80px;
    left:0;
    right:0;
    bottom:0;
  }
  .wrap{
    width:100%;
    height: 100%;
  }
  .main{
    overflow: auto;
    height:100%;
    margin-left:0;
    padding:20px;
    box-sizing: border-box;
  }
</style>

