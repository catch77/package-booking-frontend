<template>

  <div id="Header">
    <el-row>
      <el-button type="primary" plain @click="changeStatus()">All</el-button>
      <el-button type="success" plain @click="changeStatus(0)">未取件</el-button>
      <el-button type="info" plain @click="changeStatus(1)">已预约</el-button>
      <el-button type="warning" plain @click="changeStatus(2)">已取件</el-button>
      <el-button type="danger" plain @click="pushToAddPackagePage">添加</el-button>
    </el-row>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: "Header",
    methods: {
      pushToAddPackagePage(){
        this.$router.push('/add')
      },
      ...mapMutations([
        'updateFilterStatus'
      ]),
      changeStatus(status){
        console.log(status)
        this.$store.dispatch('loadListByStatus',status)
      }
    }
  }
</script>

<style scoped>
  p{
    margin:50px;
    padding:20px;
    float: left;
  }
</style>
