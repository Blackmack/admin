<template>
  <div class="list">
    <div class="query-condition">
      <el-input v-model="input" size="medium"  placeholder="请输入商户号" clearable></el-input>
      <el-input v-model="input" size="medium" placeholder="请输入简称" clearable></el-input>
      <el-input v-model="input" size="medium" placeholder="请输入状态" clearable></el-input>
      <el-input v-model="input" size="medium" placeholder="请输入类型" clearable></el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <div class="query-op">
      <el-button-group>
        <el-button type="primary" icon="el-icon-plus"></el-button>
        <el-button type="primary" icon="el-icon-delete" @click="deleteItem"></el-button>
      </el-button-group>
    </div>
    <div class="list-table">
      <el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="merchant" label="商户号" >
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="简称">
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
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pagenation: {
          currentPage: 3,
        }
      }
    },
    methods: {
      deleteItem() {
        this.$confirm('确实要删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
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
