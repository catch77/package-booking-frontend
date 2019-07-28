<template>
  <div id="AddPackage">
    <div class="div1">
      <h2>包裹入库</h2>
      <p>运单号： <input v-model="OrderId"/></p>
      <p>收件人： <input v-model="OwnerName"/></p>
      <p>电话：   <input v-model="phoneNumber"/></p>
      <p>重量：   <input v-model="Weight"/></p>
      <button @click="addPackageToRepository">确认入库</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddPackage",
    data(){
      return{
        OrderId:"",
        OwnerName:"",
        phoneNumber:"",
        Weight:0,
      }
    },
    methods:{
      addPackageToRepository(){
        this.$store.dispatch('AddPackageItem',{orderId:this.OrderId,ownerName:this.OwnerName,phoneNumber:this.phoneNumber,status:0,appointmentTime:"",isGot:0});
        this.$router.push('/');
        this.OrderId = "";
        this.OwnerName = "";
        this.phoneNumber = "";
        this.Weight = 0;
      }
    }
  }
</script>

<style scoped>
  .div1{
    text-align: center;
  }
  input{
    width: 40%;
  }
</style>
