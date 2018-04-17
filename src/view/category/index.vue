<template>
  <div class="category-wrap">
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
      <el-tree :data="treeData" @check="nodeClick" :props="treeProps" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current :expand-on-click-node="false">
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
  export  default {
    data() {
      return{
        cagegoryName:'',
        categoryModel:{
          categoryDescribe: '',
          categoryName: '',
          creatorUser: 'huangc',
          level: null,
          parentId: null,
          state: 1,     //1是有效，0无效
          updateUser: 'huangc'
        },
        treeProps:{
          label: 'categoryName',
          children: 'categoryList'
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
          let param={
                  //cagegoryName:this.cagegoryName
          }
          this.getCategoryList(param).then((data)=>{
               this.treeData=data.category;
          })
      },
      //提交表单
      onSubmit(categoryForm) {
        this.$refs[categoryForm].validate((valid) => {
            if(valid){
             if(this.categoryModel.categoryId){
                  this.updateCategory(this.categoryModel).then((data)=>{
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
            }
        })
      },
      //查询
      search() {
         this.getTreeList();
      },
      //删除
      deleteCategoryItem(node,data){
           console.log(data.categoryId)
          let param = {
               categoryId:data.categoryId,
               state:0
          };
          console.log(param)
          this.deleteCategory(param).then((data)=>{
                if(data.code==0){
                    this.$message({
                      message: '删除成功！',
                      type: 'success'
                    });
                }
                else{
                    this.$message.error(data.msg);
                }
          })
      },
      nodeClick(obj){
         this.categoryModel.parentId=obj.parentId;
         this.categoryModel.categoryId=obj.categoryId;
         this.categoryModel.categoryDescribe=obj.categoryDescribe;
         this.categoryModel.updateUser=obj.updateUser;
         this.categoryModel.categoryName=obj.categoryName;
         this.categoryModel.level=obj.level;
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
