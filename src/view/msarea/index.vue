<template>
  <div class="category-wrap">
    <div class="searchCondition">
      <el-form :inline="true"  class="demo-form-inline">
        <el-form-item label="地域名称">
          <el-input v-model="areaName" placeholder="地域名称"></el-input>
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
        <el-form  label-width="80px" :model="msAreaModel" ref="msAreaForm">
          <el-form-item prop="areaName" label="名称" :rules="[{ required: true, message: '名称不能为空'}]">
            <el-input v-model="msAreaModel.areaName"></el-input>
          </el-form-item>
          <el-form-item prop="description" label="描述" :rules="[{ required: true, message: '描述不能为空'}]">
            <el-input v-model="msAreaModel.description"></el-input>
          </el-form-item>
          <el-form-item prop="parentId" label="父类" :rules="[{ required: true, message: '父类不能为空'}]">
            <el-input v-model="msAreaModel.parentId"></el-input>
          </el-form-item>
          <el-form-item label="级别" prop="id" :rules="[{ required: true, message: '级别不能为空'}]">
            <el-input v-model="msAreaModel.id"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('msAreaForm')">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export  default {
    data() {
      return{
        areaName:'',
        msAreaModel:{
          "areaId": 0,
          "areaName": "string",
          "attribute": "string",
          "createDate": "2018-04-14T17:15:02.469Z",
          "createUser": "string",
          "description": "string",
          "id": 0,
          "parentId": 0,
          "state": "string",
          "updateDate": "2018-04-14T17:15:02.469Z",
          "updateUser": "string"
        },
        treeProps:{
          label: 'areaName',
          children: 'msAreaList'
        },
        treeData:[]
      }
    },
    mounted(){
      this.getTreeList();
    },
    methods: {
//    ,'updateMsArea','deleteMsArea'
      ...mapActions(['getMsAreaList','saveMsArea']),
      getTreeList(){
        let param={
          //cagegoryName:this.cagegoryName
        }
        this.getMsAreaList(param).then((data)=>{
          this.treeData=data.msArea;
        })
      },
      //提交表单
      onSubmit(msAreaForm) {
        this.$refs[msAreaForm].validate((valid) => {
          if(valid){
            if(this.msAreaModel.id){
              this.saveMsArea(this.msAreaModel).then((data)=>{
                if(data.code==0){
                  this.getTreeList();
                  this.$message({
                    type:'success',
                    message:'保存成功！'
                  });
                }else{
                  this.$message({
                    type:'success',
                    message:data.msg
                  });
                }
              })
            }
            else{
              this.saveCategory(this.msAreaModel).then((data)=>{
                if(data.code==0){
                  this.getTreeList();
                  this.$message({
                    type:'success',
                    message:'保存成功！'
                  });
                }
                else{
                  this.$message({
                    type:'success',
                    message:data.msg
                  });
                }
              })
            }
          }
        })
      },
      //查询
      search() {
        this.getTreeList();
      },

      nodeClick(obj){
        this.msAreaModel.parentId=obj.parentId;
        this.msAreaModel.areaId=obj.areaId;
        this.msAreaModel.description=obj.description;
        this.msAreaModel.updateUser=obj.updateUser;
        this.msAreaModel.areaName=obj.areaName;
        this.msAreaModel.id=obj.id;
      }
    }
  }
</script>
<style lang="scss">
  .category-wrap{
    height:100%;
    .left-tree{
      width:220px;
      height:100%;
      padding:20px;
      border:1px solid #ccc;
      box-sizing:border-box;
    }
    .right-forms{
      height:100%;
      width: auto;
      padding:10px;
      margin-left:230px;
      border:1px solid #ccc;
      box-sizing:border-box;
      .form-content{
        width: 600px;
      }
    }
    .el-form-item{
      height:40px;
    }
    .el-form-item__error{
      top:0;
    }
    .custom-tree-node {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      padding-right: 8px;
    }
  }
</style>
