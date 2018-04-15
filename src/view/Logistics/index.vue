<template>
  <div class="list">
    <div class="query-condition">
      <!--<el-input v-model="searchInfo.logisticsId" size="medium"  placeholder="编号" clearable></el-input>-->
      <el-input v-model="searchInfo.logisticsName" size="medium" placeholder="请输入简称" clearable></el-input>
      <el-input v-model="searchInfo.status" size="medium" placeholder="请输入状态" clearable></el-input>
      <!--<el-input v-model="searchInfo.type" size="medium" placeholder="请输入类型" clearable></el-input>-->
      <el-button type="primary" icon="el-icon-search" @click="getList">搜索</el-button>
    </div>
    <div class="query-op">
      <el-button-group>
        <el-button type="success" icon="el-icon-plus" @click="addItem">新增</el-button>
        <el-button type="primary" icon="el-icon-edit" @click="editForm">修改</el-button>
        <el-button type="danger" icon="el-icon-delete" @click="deleteItem">删除</el-button>
      </el-button-group>
    </div>
    <div class="list-table">
      <el-table ref="multipleTable" v-loading="loading" :data="tableData" border tooltip-effect="dark" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <!--<el-table-column prop="logisticsId" label="编号" >-->
        <!--</el-table-column>-->
        <el-table-column prop="logisticsName" label="名称">
        </el-table-column>
        <el-table-column prop="abbreviations" label="简称" >
        </el-table-column>
        <el-table-column prop="status" label="状态">
        </el-table-column>
        <el-table-column prop="description" label="描述">
        </el-table-column>
        <el-table-column prop="updateDate" label="最后更新时间">
        </el-table-column>
      </el-table>
    </div>
    <div class="list-page">
      <!--:page-sizes="[100, 200, 300, 400]"-->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenation.currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="pagenation.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
    <el-dialog title="编辑信息" ref="dialogc" :visible.sync="dialogFormVisible" center>
      <el-form :model="logisticsModel" ref="logisticsForm">
        <el-row>
          <!--<el-col :span="12">-->
            <!--<el-form-item prop="merchant" label="编号" :label-width="formLabelWidth"-->
                          <!--:rules="[{ required: true, message: '编号不能为空'}]">-->
              <!--<el-input v-model="logisticsModel.merchant" auto-complete="off"></el-input>-->
            <!--</el-form-item>-->
          <!--</el-col>-->
          <el-col :span="24">
            <el-form-item prop="logisticsName" label="公司名称" :label-width="formLabelWidth"
                          :rules="[{ required: true, message: '公司名称不能为空'}]">
              <el-input v-model="logisticsModel.logisticsName" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item prop="abbreviations" label="简称" :label-width="formLabelWidth" :rules="[{ required: true, message: '简称不能为空'}]">
              <el-input v-model="logisticsModel.abbreviations" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item prop="status" label="状态" :label-width="formLabelWidth" :rules="[{ required: true, message: '状态不能为空'}]">
              <el-select v-model="logisticsModel.status" placeholder="请选择状态" style="width: 100%;">
                <el-option label="2" value="1"></el-option>
                <el-option label="3" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item prop="description" label="描述" :label-width="formLabelWidth" :rules="[{ required: true, message: '描述不能为空'}]">
              <el-input v-model="logisticsModel.description" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>

        </el-row>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <!--<el-button @click="resetForm('logisticsForm')">重置</el-button>-->
        <el-button type="primary" @click="saveLogisticsForm('logisticsForm')">确 定</el-button>
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
          logisticsName:'',
          status:'',
        },
        logisticsModel:{
//          logisticsId:"",
          logisticsName:'',
          abbreviations:'',
          status:'',
          description:'',
//          createUser:'',
//          createDate:'',
//          updateUser:'',
//          updateDate:''
        },
        pagenation: {
          currentPage: 1,
          pageCount:10,
          pageSize:10
        },
        formLabelWidth: '120px',
        mutilsection:[],
      }
    },
    mounted() {
      this.getList();
    },
    methods: {
      ...mapActions(['getLogisticsList','saveLogistics','updateLogistics','deleteLogistics']),
      getList() {
        let param=this.searchInfo;
        this.getLogisticsList(param).then((data) =>{
          if(data.code==0){
            this.loading = false;
            this.tableData=data.msLogistics;
          }
          else{
            this.$message(data.msg);
          }
        })
      },
      saveLogisticsForm(logisticsForm){
        console.log(this.logisticsModel)
        this.$refs[logisticsForm].validate((valid) => {
          if (valid) {
            let objc={
              logisticsName:this.logisticsModel.logisticsName,
              abbreviations:this.logisticsModel.abbreviations,
              status:this.logisticsModel.status,
              description:this.logisticsModel.description,
            };
            console.log(objc);
            this.saveLogistics(objc).then((data)=>{
              console.log(data)
              this.$message({
                type: 'success',
                message: '保存成功!'
              });
              this.dialogFormVisible=false;
              this.getList();
            }).catch(err =>{
              this.$message.error(err);
            })
          }
        });
      },
      resetForm(logisticsForm) {
        this.$refs[logisticsForm].resetFields();
      },
      deleteItem() {
        let ids=[];
        for(var i=0;i<this.mutilsection.length;i++){
          ids.push(this.mutilsection[i].id)
        }
        if(ids.length==0){
            this.$message.info("请选择要删除数据")
            return;
        }
        console.log(ids);

        this.$confirm('确实要删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.deleteLogistics({id:ids.join()}).then((data)=>{
            if(data.code==0){
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.getList();
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
          this.logisticsModel =this.mutilsection[0]
        }
      },
      addItem(){
        this.dialogFormVisible = true;
        this.logisticsModel={
          logisticsName:'',
          abbreviations:'',
          status:'',
          description:'',
        }

      },
      handleSelectionChange(arrSections){
        this.mutilsection=arrSections;
        console.log(arrSections);
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
