import axios from 'axios'

const url = "http://localhost:8088/packages/";

export default {

  loadList({ commit }){
    axios.get(url).
    then(response => commit('loadPackageList',response.data))
      .catch((error) => console.log(error));
  },

  loadListByStatus({ commit }, status){
    axios.get(url + '?status=' + status).
    then(response => commit('loadPackageList',response.data))
      .catch((error) => console.log(error));
  },

  //添加一个包裹对象
  AddPackageItem(context,item){
    axios.post(url,item)
      .then(response => context.commit('addPackage',response.data))
      .catch(error => console.log(error));
  },

  UpdatePackage(context,item){
    axios.put(url,item)
      .then(response => dispatch('updatePackageStatus'))
      .catch(error => console.log(error));
  }

}
