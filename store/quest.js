export const state = () => ({
    gameScores: {
        mission: 0,
        mind: 0,
        fun: 0,
        social: 0,
        home: 0,
        love: 0,
        wealth: 0,
        vitality: 0,
    },
    highestScore: '',
    lowestScore: '',
    resultScore: 0,
    resultTitle: "",
    resultSlogan: "",
    user: {},
    shared: {
      gameScores: {},
      resultTitle: "",
      resultSlogan: "",
      user: {uid: ''},
    },
    isSupport: false,
    isPlayer: true,
})

import playerTypes from 'static/playerTypes';
export const mutations = {
    setUserInfo(state, newUserInfo) {
        console.log(newUserInfo);
        state.userInfo = newUserInfo;
    },
    async setGameScore(state, {id, newScore}) {
        state.gameScores[id] = newScore;

        // to be moved to action
        const doc = this.$fireStore.collection('users').doc(state.user.uid);
        try {
          await doc.update({
            gameScores: state.gameScores
          })
        } catch (e) {
          console.log(e)
          return
        }
    },
    setAllScores(state, newScoreObject) {
        state.gameScores = Object.assign(newScoreObject);
    },
    //  We need an action to put the user scores upon !FINISHING! to the database 
    async setPlayerText(state) {
        // Read the playerTypes.json
        const highestScore = Object.keys(state.gameScores).reduce((a, b) => state.gameScores[a] > state.gameScores[b] ? a : b);
        const lowestScore = Object.keys(state.gameScores).reduce((a, b) => state.gameScores[a] < state.gameScores[b] ? a : b);
        state.highestScore = highestScore;
        state.lowestScore = lowestScore;
        state.resultTitle = playerTypes[highestScore][lowestScore].title;
        state.resultSlogan = playerTypes[highestScore][lowestScore].text;

        const doc = this.$fireStore.collection('users').doc(state.user.uid);
        try {
          await doc.update({
            resultTitle: state.resultTitle,
            resultSlogan: state.resultSlogan
          })
        } catch (e) {
          console.log(e)
          return
        }
    },
    SET_USER_DATA(state, userData) {
        console.log(userData);
        state.gameScores = userData.gameScores;
        state.resultTitle = userData.resultTitle;
        state.resultSlogan = userData.resultSlogan;
        if(!userData.gameScores) 
            state.gameScores =  {
              mission: 0,
              mind: 0,
              fun: 0,
              social: 0,
              home: 0,
              love: 0,
              wealth: 0,
              vitality: 0,
            };
        state.user.uid = userData.uid;
    },
    SET_SHARED_USER_DATA(state, userData) {
        console.log(userData);
        state.shared.gameScores = userData.gameScores;
        state.shared.resultTitle = userData.resultTitle;
        state.shared.resultSlogan = userData.resultSlogan;
        if(!userData.gameScores) 
            state.shared.gameScores =  {
              mission: 0,
              mind: 0,
              fun: 0,
              social: 0,
              home: 0,
              love: 0,
              wealth: 0,
              vitality: 0,
            };
        state.shared.user.uid = userData.uid;
    }
}

export const actions = {
  async getUserResults({commit, state}, uid) {
    console.log(uid);
    
    const ref = this.$fireStore.collection('users').doc(uid);
    try {
      const doc = await ref.get();
      console.log(doc.data());
      commit('SET_SHARED_USER_DATA', {
        ...doc.data(),
        uid
      });
    } catch (e) {
      console.log(e);
      return
    }
  },
  async allowSharing({commit, state}) {
    if(state.user.uid) {
      const doc = this.$fireStore.collection('users').doc(state.user.uid);
      try {
        await doc.update({
          shared: true,
        })
      } catch (e) {
        console.log(e)
        return
      }
    }
  }
}