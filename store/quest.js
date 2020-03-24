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
        // console.log(newUserInfo);
        state.userInfo = newUserInfo;
    },
    async setGameScore(state, {id, newScore}) {
        state.gameScores[id] = newScore;

        /**
         * instead of commiting it to the database upon each next/prev ... we save it in the store 
         * Then at the end and before getting the results, we move to the database and auth
         */

        // to be moved to action
        // const doc = this.$fireStore.collection('users').doc(state.user.uid);
        // try {
        //   await doc.update({
        //     gameScores: state.gameScores
        //   })
        // } catch (e) {
        //   console.log(e)
        //   return
        // }
    },
    setAllScores(state, newScoreObject) {
        state.gameScores = Object.assign(newScoreObject);
    },
    //  We need an action to put the user scores upon !FINISHING! to the database 
    async setPlayerText(state) {
        // Read the playerTypes.json
        const adjectives = {
          mission: 'Ambitious',
          mind: 'Mindful',
          fun: 'Playful',
          social: 'Friendly',
          home: 'Cozy',
          love: 'Loving',
          wealth: 'Rich',
          vitality: 'Healthy',
        };
        const entries = Object.entries(state.gameScores);
        const sortedArray = entries.sort((a, b) => a[1] - b[1]);
        const secondHighest = adjectives[sortedArray[6][0]];
        const hasBelowSeven = entries.some(el => el[1] < 7);
        const hasBelowEight = entries.some(el => el[1] < 8);
        const hasBelowNine = entries.some(el => el[1] < 9);
        const hasBelowTen = entries.some(el => el[1] < 10);
        const NotHaveAllZero = entries.some(el => el[1] > 0);
        const HasAboveThree = entries.some(el => el[1] > 3);
        const HasButFive = entries.some(el => el[1] !== 5);
        console.log(sortedArray);
        // const highestScore = Object.keys(state.gameScores).reduce((a, b) => state.gameScores[a] > state.gameScores[b] ? a : b);
        // const lowestScore = Object.keys(state.gameScores).reduce((a, b) => state.gameScores[a] < state.gameScores[b] ? a : b);
        const highestScore = sortedArray[7][0];
        const lowestScore = sortedArray[0][0];
        state.highestScore = highestScore;
        state.lowestScore = lowestScore;
        state.resultTitle = `${secondHighest} ${playerTypes[highestScore][lowestScore].title}`;
        state.resultSlogan = playerTypes[highestScore][lowestScore].text;

        if (!hasBelowTen) {
          state.resultTitle = 'ERROR';
          state.resultSlogan = 'ERROR: YOUR LIFE IS TOO PERFECT'
        } else if (!hasBelowNine) {
          state.resultTitle = 'Hero of Ages';
          state.resultSlogan = 'I am the chosen one'
        } else if (!hasBelowEight) {
          state.resultTitle = 'Dragon Rider';
          state.resultSlogan = 'Nothing can stop me!'
        } else if (!hasBelowSeven) {
          state.resultTitle = 'Optimist';
          state.resultSlogan = 'Life is pretty great!'
        } else if (!NotHaveAllZero) {
          state.resultTitle = 'Black Ooze';
          state.resultSlogan = 'Blrgrgllgllll…'
        } else if (!HasButFive) {
          state.resultTitle = 'No. 5';
          state.resultSlogan = 'NUMBER 5 IS ALIVE'
        } else if (!HasAboveThree) {
          state.resultTitle = 'Pessimist';
          state.resultSlogan = 'This quiz sucks! Life sucks!'
        }
        
        /**
         * we need to postpone this to the loading of the results page
         */
        
        // const doc = this.$fireStore.collection('users').doc(state.user.uid);
        // try {
        //   await doc.update({
        //     resultTitle: state.resultTitle,
        //     resultSlogan: state.resultSlogan
        //   })
        // } catch (e) {
        //   console.log(e)
        //   return
        // }
    },
    SET_USER_DATA(state, userData) {
        // console.log(userData);
        state.gameScores = userData.gameScores;
        state.resultTitle = userData.resultTitle;
        state.resultSlogan = userData.resultSlogan;
        state.isSupport = (userData.isSupport === 'true' ? true : false); 
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
        // console.log(userData);
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
    },
    SET_USER_EMAIL(state, email) {
      state.user.email = email;
    }
}

export const actions = {
  async getUser ({commit, state}) {
    this.$fireAuth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);

        // User is signed in.
      } else {
        // No user is signed in.
        console.log('no user')
        // return redirect('/quest/access');
      }
    });
  },
  async getUserResults({commit, state}, uid) {
    // console.log(uid);
    
    const ref = this.$fireStore.collection('users').doc(uid);
    try {
      const doc = await ref.get();
      // console.log(doc.data());
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
          timestamp: new Date(),
          serverTimestamp: '' || this.$fireStoreObj.FieldValue.serverTimestamp()
        })
      } catch (e) {
        console.log(e)
        return
      }
    }
  },
  async uploadUserResults({commit, state}) {
     const doc = this.$fireStore.collection('users').doc(state.user.uid);
     try {
       await doc.set({
        gameScores: state.gameScores,
        resultTitle: state.resultTitle,
        resultSlogan: state.resultSlogan,
        timestamp: new Date(),
        serverTimestamp: '' || this.$fireStoreObj.FieldValue.serverTimestamp()
       }, {
         merge: true
       })
     } catch (e) {
       console.log(e)
       return
     }
  },
  async updateUserEmail({commit, state}, {newEmail, newIsSupport}) {
    console.log(newEmail);
    console.log(newIsSupport);
    
    state.user.email = newEmail;
    state.user.isSupport = newIsSupport;
     const doc = this.$fireStore.collection('users').doc(state.user.uid);
     try {
       await doc.update({
         email: newEmail,
         isSupport: newIsSupport,
         serverTimestamp: '' || this.$fireStoreObj.FieldValue.serverTimestamp()
       })
     } catch (e) {
       console.log(e)
       return
     }
  },

}