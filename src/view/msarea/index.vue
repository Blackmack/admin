<template>
  <div class="tree-wrap">
    <div class="searchCondition">
      <el-form :inline="true"  class="demo-form-inline">
        <el-form-item label="品类名称">
          <el-input v-model="cagegoryName" placeholder="品类名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="left-tree fl">
      <el-tree :data="treeData" @node-click="nodeClick" :props="treeProps" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current :expand-on-click-node="false">
                 <span class="custom-tree-node" slot-scope="{ node, data }">
                 <span>{{ node.label }}</span>
                 <span><el-button type="text" size="mini" @click="() => deleteCategoryItem(node, data)">删除</el-button></span>
                 </span>
      </el-tree>
    </div>
    <div class="right-forms">
      <div class="form-content">
        <el-form  label-width="80px" :model="categoryModel" ref="categoryForm">
          <el-form-item prop="categoryName" label="名称" :rules="[{ required: true, message: '名称不能为空'}]">
            <el-input v-model="categoryModel.categoryName"></el-input>
          </el-form-item>
          <el-form-item prop="categoryDescribe" label="描述" :rules="[{ required: true, message: '描述不能为空'}]">
            <el-input v-model="categoryModel.categoryDescribe"></el-input>
          </el-form-item>
          <el-form-item prop="parentId" label="父类" :rules="[{ required: true, message: '父类不能为空'}]">
            <el-input v-model="categoryModel.parentId"></el-input>
          </el-form-item>
          <el-form-item label="级别" :rules="[{ required: true, message: '级别不能为空'}]">
            <el-input v-model="categoryModel.level"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('categoryForm')">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default{
    data(){
       return {
         treeProps:{
           label: 'categoryName',
           children: 'categoryList'
         }
       }
    },
    mounted(){
      this.query();
    },
    methods:{
      ...mapActions(['getMsAreaList','saveMsArea','updateMsArea','delMsArea']),
      query(){
        let param={
          //areaName:this.areaName
        }
        this.getMsAreaList(param).then((data)=>{
          this.treeData=data
        })
      }
    }

  }
</script>
