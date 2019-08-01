const mutations = {
  	changeScroll(state,[a,b]){
  		state.isScroll=a
  		state.scrollActive=b
  	},
  	changescrollplm(state,a){
  		state.scrollplms=a
  	},
  	changeusername(state,[a,b,c,d]){
  		state.username=a
      state.usercomment=b
      state.usert=c
      state.nickname=d 
  	},
    getbus(state,a){
      state.buslist=a
    },
    dilike(state,i){
      state.buslist.splice(i, 1);
    },
    changeplms(state,[i,r]){
      if(i!=0){
        let rarr =[]
        let brarr = []
        let newrarr=[]
        let newbuslist=[]
        console.log(state.buslist[0][r])
        for(let j=0;j<state.buslist.length;j++){
          rarr.push(state.buslist[j][r]*1)
          brarr.push(state.buslist[j][r]*1)
        }
        if(i==-1){
          for(;;){
            let rmin = Math.min.apply(Math, rarr)*1;
            let k =rarr.indexOf(rmin)
            rarr.splice(k,1)
            newrarr.push(rmin)
            if (rarr.length==0) {
              break;
            }
          }
        }else if(i==1){
          for(;;){
            let rmin = Math.max.apply(Math, rarr)*1;
            let k =rarr.indexOf(rmin)
            rarr.splice(k,1)
            newrarr.push(rmin)
            if (rarr.length==0) {
              break;
            }
          }
        }
        for(let j=0;j<state.buslist.length;j++){
          let k = brarr.indexOf(newrarr[j])
          newbuslist.push(state.buslist[k])

        }
        state.buslist=newbuslist
      }else{
        return
      }
    },
    infood(state,[a,b]){
      state.bname=a
      state.bimg=b
    },
    changefoodlist(state,a){
         state.foodlist=a
    }

  }
export default mutations