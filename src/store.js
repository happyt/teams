import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teamsInfo: {
      score: [
          {
            team: "Home team",
            flag: "ENG",
            score: 712
          },
          {
            team: "Away team",
            flag: "AUS",
            score: 234
          }
        ],
        time: "76.34"
    },
    searching: false

  },
  getters : {
    SEARCHING : state => {
      return state.searching
    },
    HOMETEAM : state => {
      return state.teamsInfo.score[0].team
    },
    AWAYTEAM : state => {
      return state.teamsInfo.score[1].team
    }
  },
  mutations: {
    SET_INFO(state, teamsInfo) {
      state.teamsInfo = teamsInfo;
    },    
    SET_SEARCH_STATE(state,bool) {
      console.log("set searching", bool)
      state.searching = bool;
    },
    CLEAR_INFO(state) {
      state.teamsInfo = {};
    }
  },
  actions:{
    GET_INFO(context){
      context.commit('SET_SEARCH_STATE',true)
   //   context.commit('CLEAR_INFO')
      console.log("get")
      fetch(`http://localhost:3000/info`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // Read the response as json.
        return response.json();
      })
      .then(function(responseAsJson) {
        // Do stuff with the JSON
        console.log(responseAsJson);
        context.commit('SET_INFO',responseAsJson)
        context.commit('SET_SEARCH_STATE',false)
      })
      .catch(function(error) {
        console.log('Looks like there was a problem: \n', error);
      });
    }
  }
})
