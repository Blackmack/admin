<template>
  <div class="category-wrap">
    <div class="left-tree fl">
      <el-tree :data="treeData" @node-click="nodeClick" :props="treeProps" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current>
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
  export  default {
    data() {
      return{
        categoryModel:{
          categoryDescribe: '',
          categoryId: '2',
          categoryName: '',
          creatorDate: '2018-04-12 12:12:12',
          creatorUser: 'huangc',
          level: '',
          parentId: null,
          state: '1',
          updateUser: 'huangc'
        },
        treeProps:{
          label: 'categoryName',
          children: 'categorList'
        },
        treeData:[]
      }
    },
    mounted(){
        this.getTreeList();
    },
    methods: {
      ...mapActions(['getCategoryList','saveCategory','updateCategory','deleteCategory']),
      getTreeList(){
          this.getCategoryList({}).then((data)=>{
               this.treeData=data.category;
          })
      },
      //提交表单
      onSubmit(categoryForm) {
        this.$refs[categoryForm].validate((valid) => {
            if(valid){
              this.saveCategory(this.categoryModel).then((data)=>{
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
        })
      },
      nodeClick(obj){
         this.categoryModel.parentId=obj.id;
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
  }
</style>
