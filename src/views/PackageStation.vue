<template>
  <div>
    <router-link to="/customer">我是客户</router-link>
    <Header/>
    <PackageList/>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import PackageList from "./components/PackageList";
  export default {
    name: "RookieStation",
    data(){
      return {
        collapsed: false,
      }
    },
    components: {PackageList, Header},
    mounted() {
      this.$store.dispatch('loadList')
    }
  }
</script>

<style scoped>
</style>
