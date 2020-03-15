export const state = () => ({
  email: "",
  isSupportWorker: false,
  dataIsLoading: false,
  dataIsLoaded: false,
  dataLoadError: false,
  dataIsWriting: false,
  dataIsWritten: false,
  dataWriteError: false,
  isVideoVisible: false,
  isTeamsVisible: false,
  user: {},
})

export const mutations = {
  setEmail (state, newEmail) {
      state.email = newEmail;
  },
  startWrite (state) {
    state.dataIsLoading = true;
    state.dataIsLoaded = false;
    state.dataLoadError = false;
  },
  setVideoVisible(state, isVideoVisible) {
    state.isVideoVisible = isVideoVisible;
  },
  setTeamsVisible(state, isTeamsVisible) {
    state.isTeamsVisible = isTeamsVisible;
  },


  // FIREBASE MUTATIONS
  ON_SUCCESS_MUTATION(state, {
      authUser,
      claims
    }) {
    
      state.user.id = authUser.uid;
      state.user.email = authUser.email;

  },
  ON_ERROR_MUTATION(state, error) {

  },
  SET_AUTH_USER(state, {
    authUser
  }) {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email
    }
  }
}


export const actions = {
  // firebase actions
  onSuccessAction({commit, dispatch}, {
      authUser,
      claims
    }) {
      // Install servicerWorker if supported on sign-in/sign-up page.
      if (process.browser && 'serviceWorker' in navigator) {
        navigator.serviceWorker.register('/firebase-auth-sw.js', {
          scope: '/'
        })
      }
      commit('SET_AUTH_USER', {
        authUser
      })
      dispatch('getUserData', authUser.uid);
  }, 
  onErrorAction(ctx, error) {
    console.log(error);
  },
  async getUserData({commit}, uid) {
    const ref = this.$fireStore.collection('users').doc(uid);
    try {
      const doc = await ref.get();
      // console.log(doc.data());
      commit('quest/SET_USER_DATA', {...doc.data(), uid});
    } catch (e) {
      // console.log(e);
      return
    }
  }
}

