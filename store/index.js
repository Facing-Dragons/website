export const state = () => ({
  email: "",
  dataIsLoading: false,
  dataIsLoaded: false,
  dataLoadError: false,
  dataIsWriting: false,
  dataIsWritten: false,
  dataWriteError: false,
  isVideoVisible: false,
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
  }
}