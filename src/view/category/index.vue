<template>
  <div class="category-wrap">
    <div class="left-tree fl">
      <el-tree :data="data" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current>
      </el-tree>
    </div>
    <div class="right-forms">
      <div class="form-content">
         <el-form  label-width="80px" :model="categoryModel" ref="categoryModel">
           <el-form-item label="名称">
             <el-input v-model="categoryModel.categoryName"></el-input>
           </el-form-item>
           <el-form-item label="描述">
             <el-input v-model="categoryModel.categoryDescribe"></el-input>
           </el-form-item>
           <el-form-item label="父类">
             <el-input v-model="categoryModel.parentId"></el-input>
           </el-form-item>
           <el-form-item label="级别">
             <el-input v-model="categoryModel.level"></el-input>
           </el-form-item>
           <el-form-item>
             <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
        categoryModel:{
          categoryDescribe: '',
          categoryId: '',
          categoryName: '',
          creatorDate: '',
          creatorUser: '',
          level: '',
          parentId: '',
          state: '',
          updateUser: ''
        },
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }]
      }
    },
    methods: {
      ...mapActions(['getCategoryList','saveCategory']),
      async onSubmit() {
        console.log(this.categoryModel);
//        保存
        let result = await  this.saveCategory(this.categoryModel);
        console.log(result);
//        成功了以后刷新列表
        var obj = {
          "categoryId": null
        }
        let data=await this.getCategoryList(obj);
        this.data.data=data;

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
  }
</style>
