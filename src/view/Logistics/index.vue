<template>
  <div class="list">
    <div class="query-condition">
      <el-input v-model="searchInfo.merchant" size="medium"  placeholder="编号" clearable></el-input>
      <el-input v-model="searchInfo.name" size="medium" placeholder="请输入简称" clearable></el-input>
      <el-input v-model="searchInfo.status" size="medium" placeholder="请输入状态" clearable></el-input>
      <el-input v-model="searchInfo.type" size="medium" placeholder="请输入类型" clearable></el-input>
      <el-button type="primary" icon="el-icon-search" @click="getMechantList">搜索</el-button>
    </div>
    <div class="query-op">
      <el-button-group>
        <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true"></el-button>
        <el-button type="primary" icon="el-icon-delete" @click="deleteItem"></el-button>
      </el-button-group>
    </div>
    <div class="list-table">
      <el-table ref="multipleTable" v-loading="loading" :data="tableData" border tooltip-effect="dark" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="merchant" label="编号" >
        </el-table-column>
        <el-table-column prop="abbreviations" label="名称">
        </el-table-column>
        <el-table-column prop="status" label="简称" >
        </el-table-column>
        <el-table-column prop="type" label="状态">
        </el-table-column>
        <el-table-column prop="type" label="描述">
        </el-table-column>
        <el-table-column prop="type" label="最后更新时间">
        </el-table-column>
      </el-table>
    </div>
    <div class="list-page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenation.currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
    <el-dialog title="编辑信息" :visible.sync="dialogFormVisible">
      <el-form :model="merchantModel" ref="merchantForm">
        <el-row>
          <el-col :span="12">
            <el-form-item prop="merchant" label="编号" :label-width="formLabelWidth"
                          :rules="[{ required: true, message: '编号不能为空'}]">
              <el-input v-model="merchantModel.merchant" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="merchant" label="公司名称" :label-width="formLabelWidth"
                          :rules="[{ required: true, message: '公司名称不能为空'}]">
              <el-input v-model="merchantModel.merchant" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item prop="attribute" label="简称" :label-width="formLabelWidth" :rules="[{ required: true, message: '简称不能为空'}]">
              <el-input v-model="merchantModel.attribute" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="status" label="状态" :label-width="formLabelWidth" :rules="[{ required: true, message: '状态不能为空'}]">
              <el-select v-model="merchantModel.status" placeholder="请选择状态" style="width: 100%;">
                <el-option label="2" value="shanghai"></el-option>
                <el-option label="3" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item prop="name" label="描述" :label-width="formLabelWidth" :rules="[{ required: true, message: '描述不能为空'}]">
              <el-input v-model="merchantModel.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>

        </el-row>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveMerchantForm('merchantForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        loading:true,
        dialogFormVisible:false,
        tableData:[],
        searchInfo:{
          merchant:'',
          name:'',
          status:'',
          type:''
        },
        merchantModel:{
          merchant:'',
          type:'',
          attribute:'',
          status:'',
          name:'',
          abbreviations:'',
          legalPerson:'',
          address:'',
          contactNumber:'',
          fax:'',
          contractNumber:'',
          authenticationDate:''
        },
        pagenation: {
          currentPage: 1,
        },
        formLabelWidth: '120px'
      }
    },
    mounted() {
      this.getMechantList();
    },
    methods: {
      ...mapActions(['getMerchantList','saveMerchant','updateMerchant','deleteMerchant']),
      getMechantList() {
        let param=this.searchInfo;
        this.getMerchantList(param).then((data) =>{
          if(data.code==0){
            this.loading = false;
            this.tableData=data.date;
          }
          else{
            this.$message(data.msg);
          }
        })
      },
      saveMerchantForm(merchantForm){
        console.log(this.merchantModel)
        this.$refs[merchantForm].validate((valid) => {
          if (valid) {
            console.log(2)
            console.log(this.merchantModel)
            this.saveMerchant(this.merchantModel).then((data)=>{
              console.log(data)
            })
          }
        });
      },
      resetForm(merchantForm) {
        this.$refs[merchantForm].resetFields();
      },
      deleteItem() {
        this.$confirm('确实要删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteMerchant({id:1}).then((data)=>{
            if(data.code==0){
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }
          })

        })
      },
      handleSelectionChange(){

      },
      handleSizeChange(){

      },
      handleCurrentChange(){

      }
    }
  }
</script>
<style lang="scss">
  .query-condition{
    .el-input{
      width:auto;
    }
    input{
      width:200px;
    }
  }
  .query-op{
    margin:10px 0;
  }
  .list-page{
    position: absolute;
    bottom: 10px;
    right:0;
  }
</style>
