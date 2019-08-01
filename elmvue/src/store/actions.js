import mutations from './mutation.js'
const actions = {
    changeScrolls({commit},[a,b]){
    	commit('changeScroll',[a,b])
    },
    changescrollplms({commit},a){
    	commit('changescrollplm',a)
    },
    changeusernames({commit},[a,b,c,d]){
    	commit('changeusername',[a,b,c,d])
    },
    getbuss({commit},a){
        commit('getbus',a)
    },
    dilikes({commit},i){
        commit('dilike',i)
    },
    changeplmss({commit},[i,r]){
        commit('changeplms',[i,r])
    },
    infoods({commit},[a,b]){
         commit('infood',[a,b])
    },
    changefoodlists({commit},a){
         commit('changefoodlist',a)
    }
  }
export default actions