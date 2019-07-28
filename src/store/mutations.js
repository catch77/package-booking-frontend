export default {

  loadPackageList(state,list){
    state.packages = list
  },
  addPackage(state, packageItem) {
    state.packages.push(packageItem);
  },
  updatePackageStatus(state,payload) {
    state.packages.find(item => item.OrderId === payload.OrderId).status = 2;
    state.packages.find(item => item.OrderId === payload.OrderId).appointmentTime = payload.appointmentTime;
  },

  updateFilterStatus(state,FilterStatus){
    state.filterStatus = FilterStatus;
  },

  changePackage(state,payload){
    state.packages.find(item => item.OrderId === payload.OrderId).isGot = 1;
    state.packages.find(item => item.OrderId === payload.OrderId).status = 3;
  }

}
