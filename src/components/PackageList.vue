<template>
  <div id="PackageList">
    <el-table
      :data="getShowPackageList"
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
        label="index"
        width="180" v-if="false">
      </el-table-column>
      <el-table-column
        prop="orderId"
        label="运单号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ownerName"
        label="收件人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phoneNumber"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="180">
      </el-table-column>
      <el-table-column
        prop="appointmentTime"
        label="预约时间"
        width="180">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="confirmReceipt(scope.row)" type="text" size="small">确认收货</el-button>
        </template>
      </el-table-column>
    </el-table>>
  </div>
</template>

<script>
  import {mapGetters } from 'vuex';
  export default {
    name: 'List',
    data(){
      return{
        isGot:0
      }
    },
    computed: {
      ...mapGetters([
        'getShowPackageList'
      ])
    },
    methods:{
      confirmReceipt(item){
        item.status = 2
        this.$store.dispatch('UpdatePackage',item)
      }
    }
  }
</script>

<style scoped>
  .listDiv{
    margin-top: 10%;
  }
  span{
    float: left;
    padding: 20px;
  }
</style>
