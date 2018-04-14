<template>
  <div class="list">
    <div class="query-condition">
      <el-input v-model="searchInfo.merchantsNo" size="medium"  placeholder="请输入商户号" clearable></el-input>
      <el-input v-model="searchInfo.janeName" size="medium" placeholder="请输入简称" clearable></el-input>
      <el-input v-model="searchInfo.state" size="medium" placeholder="请输入状态" clearable></el-input>
      <el-button type="primary" icon="el-icon-search" @click="getMechantList">搜索</el-button>
    </div>
    <div class="query-op">
      <el-button-group>
        <el-button type="success" icon="el-icon-plus" @click="dialogFormVisible = true">新增</el-button>
        <el-button type="primary" icon="el-icon-edit" @click="editForm">修改</el-button>
        <el-button type="danger" icon="el-icon-delete" @click="deleteItem">删除</el-button>
      </el-button-group>
    </div>
    <div class="list-table">
      <el-table ref="multipleTable" v-loading="loading" :data="tableData" border tooltip-effect="dark" style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="merchantsNo" label="商户号" >
        </el-table-column>
        <el-table-column prop="fullName" label="商户全称">
        </el-table-column>
        <el-table-column prop="janeName" label="简称">
        </el-table-column>
        <el-table-column prop="contractNo" label="合同号">
        </el-table-column>
        <el-table-column prop="phone" label="电话">
        </el-table-column>
        <el-table-column prop="legalPerson" label="企业法人">
        </el-table-column>
        <el-table-column prop="certificationTime" label="认证时间">
        </el-table-column>
        <el-table-column prop="state" label="状态" >
            <template slot-scope="scope">{{ scope.row.state==1?'有效':'无效' }}</template>
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
            <el-form-item prop="merchantsNo" label="商户号" :label-width="formLabelWidth"
                :rules="[{ required: true, message: '商户号不能为空'}]">
              <el-input v-model="merchantModel.merchantsNo" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="type" label="商户类型" :label-width="formLabelWidth" :rules="[{ required: true, message: '商户类型不能为空'}]">
              <el-select v-model="merchantModel.type" placeholder="请选择商户类型" style="width: 100%;">
                <el-option label="银行" value="1"></el-option>
                <el-option label="卖肉的" value="2"></el-option>
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
            <el-form-item prop="state" label="状态" :label-width="formLabelWidth" :rules="[{ required: true, message: '状态不能为空'}]">
              <el-select v-model="merchantModel.state" placeholder="请选择状态" style="width: 100%;">
                <el-option label="有效" value="true">有效</el-option>
                <el-option label="无效" value="false">无效</el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item prop="fullName" label="商户全称" :label-width="formLabelWidth" :rules="[{ required: true, message: '商户全称不能为空'}]">
              <el-input v-model="merchantModel.fullName" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="janeName" label="商户简称" :label-width="formLabelWidth" :rules="[{ required: true, message: '商户简称不能为空'}]">
              <el-input v-model="merchantModel.janeName" auto-complete="off"></el-input>
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
            <el-form-item prop="phone" label="联系电话" :label-width="formLabelWidth" :rules="[{ required: true, message: '联系电话不能为空'}]">
              <el-input v-model="merchantModel.phone" auto-complete="off"></el-input>
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
            <el-form-item prop="contractNo" label="合同号" :label-width="formLabelWidth" :rules="[{ required: true, message: '合同号不能为空'}]">
              <el-input v-model="merchantModel.contractNo" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="certificationTime" label="认证时间" :label-width="formLabelWidth" :rules="[{ required: true, message: '认证时间不能为空'}]">
              <el-date-picker v-model="merchantModel.certificationTime" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间" style="width: 100%;">
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
          merchantsNo:'',
          fullName:'',
          state:''
        },
        merchantModel:{
          merchantsNo:'',
          type:'',
          attribute:'',
          state:null,
          fullName:'',
          janeName:'',
          legalPerson:'',
          address:'',
          phone:'',
          fax:'',
          contractNo:'',
          certificationTime:''
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
                this.tableData=data.merchants;
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
            if(this.merchantModel.merchantsId){
              this.updateMerchant(this.merchantModel).then((data)=>{
                if(data.code==0){
                  this.$message({
                    type:'success',
                    message:'保存成功！'
                  });
                  this.getMechantList();
                }
                else{
                  this.$message.error(data.msg);
                }
              })
            }
            else{
              this.saveMerchant(this.merchantModel).then((data)=>{
                if(data.code==0){
                  this.$message({
                    type:'success',
                    message:'保存成功！'
                  });
                  this.getMechantList();
                }
                else{
                  this.$message.error(data.msg);
                }
              })
            }

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
               ids.push(this.mutilsection[i].merchantsId)
            }
            this.deleteMerchant({fullName:ids.join()}).then((data)=>{
              if(data.code==0){
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              }
            })

        })
      },
      editForm(){
          if(this.mutilsection.length>1){
            this.$message({
              type: 'warning',
              message: '只能单条数据修改!'
            });
          }
          else if(this.mutilsection.length==0){
            this.$message({
              type: 'warning',
              message: '请选择一条数据修改!'
            });
          }
          else{
            this.dialogFormVisible=true;
            this.merchantModel.merchantsId=this.mutilsection[0].merchantsId;
            this.merchantModel.merchantsNo=this.mutilsection[0].merchantsNo;
              this.merchantModel.type=this.mutilsection[0].type;
              this.merchantModel.attribute=this.mutilsection[0].attribute;
              this.merchantModel.state=this.mutilsection[0].state;
              this.merchantModel.fullName=this.mutilsection[0].fullName;
              this.merchantModel.janeName=this.mutilsection[0].janeName;
              this.merchantModel.legalPerson=this.mutilsection[0].legalPerson;
              this.merchantModel.address=this.mutilsection[0].address;
              this.merchantModel.phone=this.mutilsection[0].phone;
              this.merchantModel.fax=this.mutilsection[0].fax;
              this.merchantModel.contractNo=this.mutilsection[0].contractNo;
              this.merchantModel.certificationTime=this.mutilsection[0].certificationTime;
          }
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
