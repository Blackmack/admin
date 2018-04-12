<template>
  <div class="list">
    <div class="query-condition">
      <el-input v-model="searchInfo.merchant" size="medium"  placeholder="请输入商户号" clearable></el-input>
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
        <el-table-column prop="merchant" label="商户号" >
        </el-table-column>
        <el-table-column prop="abbreviations" label="简称">
        </el-table-column>
        <el-table-column prop="status" label="状态" >
        </el-table-column>
        <el-table-column prop="type" label="类型">
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
    <el-dialog title="编辑商户信息" :visible.sync="dialogFormVisible">
      <el-form :model="merchantModel" ref="merchantForm">
        <el-row>
          <el-col :span="12">
            <el-form-item prop="merchant" label="商户号" :label-width="formLabelWidth"
                :rules="[{ required: true, message: '商户号不能为空'}]">
              <el-input v-model="merchantModel.merchant" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="type" label="商户类型" :label-width="formLabelWidth" :rules="[{ required: true, message: '商户类型不能为空'}]">
              <el-select v-model="merchantModel.type" placeholder="请选择商户类型" style="width: 100%;">
                <el-option label="银行" value="shanghai"></el-option>
                <el-option label="卖肉的" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item prop="attribute" label="商户属性" :label-width="formLabelWidth" :rules="[{ required: true, message: '商户属性不能为空'}]">
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
            <el-form-item prop="name" label="商户全称" :label-width="formLabelWidth" :rules="[{ required: true, message: '商户全称不能为空'}]">
              <el-input v-model="merchantModel.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="abbreviations" label="商户简称" :label-width="formLabelWidth" :rules="[{ required: true, message: '商户简称不能为空'}]">
              <el-input v-model="merchantModel.abbreviations" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item prop="legalPerson" label="企业法人" :label-width="formLabelWidth" :rules="[{ required: true, message: '企业法人不能为空'}]">
              <el-input v-model="merchantModel.legalPerson" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="address" label="商家地址" :label-width="formLabelWidth" :rules="[{ required: true, message: '商家地址不能为空'}]">
              <el-input v-model="merchantModel.address" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item prop="contactNumber" label="联系电话" :label-width="formLabelWidth" :rules="[{ required: true, message: '联系电话不能为空'}]">
              <el-input v-model="merchantModel.contactNumber" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="fax" label="传真" :label-width="formLabelWidth" :rules="[{ required: true, message: '传真不能为空'}]">
              <el-input v-model="merchantModel.fax" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item prop="contractNumber" label="合同号" :label-width="formLabelWidth" :rules="[{ required: true, message: '合同号不能为空'}]">
              <el-input v-model="merchantModel.contractNumber" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="authenticationDate" label="认证时间" :label-width="formLabelWidth" :rules="[{ required: true, message: '认证时间不能为空'}]">
              <el-date-picker v-model="merchantModel.authenticationDate" type="datetime" placeholder="选择日期时间" style="width: 100%;">
              </el-date-picker>
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
        mutilsection:[],
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
            let ids=[];
            for(var i=0;i<this.mutilsection.length;i++){
              ids.push(this.mutilsection[i].id);
            }
            this.deleteMerchant({id:ids}).then((data)=>{
              if(data.code==0){
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              }
            })

        })
      },
      handleSelectionChange(arrSections){
          this.mutilsection=arrSections
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
