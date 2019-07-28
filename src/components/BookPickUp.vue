<template>
  <div id="BookPickUp">
    <div>
      <router-link to="/">我是老板</router-link>
      <div class="div1">
        <h2>预约取件</h2>
        <p>运单号： <input v-model="inputOrderId"/></p>
        <p>预约时间： <input type="date" v-model="bookDate"/></p>
        <button type="submit" @click="updatePackageInfo">预约</button><button>取消</button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "BookPickUp",
    data() {
      return {
        inputOrderId: "",
        bookDate: Date,
      }
    },
    methods:{
      updatePackageInfo(){
        this.$store.dispatch('UpdatePackage',{OrderId:this.inputOrderId, appointmentTime:this.bookDate.toString(),status: 2})
      }
    }
  }
</script>

<style scoped>
  .div1{
    text-align: center;
    margin: 5%;
  }
  button{
    margin: 20px;
  }
</style>
