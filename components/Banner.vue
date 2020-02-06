<template>
  <b-container fluid class="main d-flex align-items-md-center">
    <transition name="fade">
          <div 
            v-show="isPlayerModalOpen"
            class="player-modal"
          >
              <div 
                class="overlay" 
              >
                <div class="overlay-background" @click.stop="handleOverlayClick"></div>
                <transition name="popup">
                    <div v-if="isGuidianShown" class="guidian-container d-none d-md-block">
                        <img 
                            src="~/assets/img/guidian.png" 
                            alt="guidian"
                            height="20vh"
                            class="guidian"
                        >
                    </div>
                </transition>
                <b-card class="msg-container d-flex flex-column justify-content-center p-2">
                  <p class="overlay-card-text">Get Your First Quest!</p>
                  <b-form @submit="() => {}" @reset="() => {}">
                    <b-form-group
                      id="input-email-group"
                      :state="emailState"
                      :invalid-feedback="invalidFeedback"
                    >
                      <b-form-input
                        id="input-email"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Enter Your Email"
                      ></b-form-input>
                    </b-form-group>
                  </b-form>
                  <div class="modal-button-container w-100 d-flex justify-content-end">
                    <!-- <b-button variant="danger" @click="handleOverlayClick">No Thanks!</b-button> -->
                    <b-button 
                      class="ml-2" 
                      variant="success" 
                      :disabled="form.email === ''"
                    >
                        Submit
                    </b-button>
                  </div>
                </b-card>
              </div>
          </div>
        </transition><transition name="fade">
          <div 
            v-show="isWorkerModalOpen"
            class="worker-modal"
          >
              <div 
                class="overlay" 
              >
                <div class="overlay-background" @click.stop="handleOverlayClick"></div>
                <transition name="popup">
                    <div v-if="isGuidianShown" class="guidian-container d-none d-md-block">
                        <img 
                            src="~/assets/img/guidian.png" 
                            alt="guidian"
                            height="20vh"
                            class="guidian"
                        >
                    </div>
                </transition>
                <b-card class="msg-container d-flex flex-column justify-content-center p-2">
                  <p class="overlay-card-text">We'll Keep You Posted!</p>
                  <b-form @submit="() => {}" @reset="() => {}">
                    <b-form-group
                      id="input-email-group"
                      :state="emailState"
                      :invalid-feedback="invalidFeedback"
                    >
                      <b-form-input
                        id="input-email"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Enter Your Email"
                      ></b-form-input>
                    </b-form-group>
                  </b-form>
                  <div class="modal-button-container w-100 d-flex justify-content-end">
                    <!-- <b-button variant="danger" @click="handleOverlayClick">No Thanks!</b-button> -->
                    <b-button 
                      class="ml-2" 
                      variant="success" 
                      :disabled="form.email === ''"
                    >
                        Submit
                    </b-button>
                  </div>
                </b-card>
              </div>
          </div>
        </transition>
    
    <div class="title-box">
      <div class="main-title">
        <banner-text-section></banner-text-section>
        <banner-text-unlock class="my-4"></banner-text-unlock>
      </div>
      <!-- <div class="logo-container">
        <img src="~/assets/img/logo_white.png" class="title-logo">
      </div> -->
      <p class="small-text mt-4 pt-4">
        Facing Dragons is the first mixed-reality
        Mental health and life coaching game
        That connects players to real support.
      </p>
      <div class="button-container d-flex flex-row p-0 pt-4 justify-content-center align-items-start">
        <button 
          class="mb-0 mb-md-2 mr-2 mr-md-2 py-2 custom-buttons w-50 rounded"
          @click="handleStartQuest"
        >
          START YOUR QUEST
        </button>
        <button 
          class="w-50 py-2 custom-buttons worker-button rounded"
          @click="handleWorkerQuest"
        >SUPPORT WORKERS</button>
        
        
      </div>
    </div>
    <!-- <img src="~/assets/img/dragon_mountain_02.png" class="dragon-image"> -->
    <div class="arrow-container w-100 d-flex justify-content-center align-items-center">
      <animating-arrow-down></animating-arrow-down>
    </div>
  </b-container>
</template>

<script>
/**
 * This will be the first section of the page, the banner that also contains the video
 */
import BannerTextSection from '~/components/BannerTextFirst'
import BannerTextUnlock from '~/components/BannerTextUnlock'
import AnimatingArrowDown from '~/components/AnimatingArrowDown'

export default {
    components: {
      BannerTextSection,
      BannerTextUnlock,
      AnimatingArrowDown,
    },
    data() {
      return {
        isPlayerModalOpen: false,
        isWorkerModalOpen: false,
        form: {email: ''},
        isGuidianShown: false,
      }
    },
    computed: {
      emailState() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email))
        {
          return (true)
        }
        return (false);
      },
      invalidFeedback() {
        if (this.form.email === '')
          return '';
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)) {
          return '';
        } else {
          return 'Please Enter a Valid Email Address'
        }
      }
    },
    watch: {
      isPlayerModalOpen: function (newVal, oldVal) {
        this.isGuidianShown = newVal;
      },
      isWorkerModalOpen: function (newVal, oldVal) {
        this.isGuidianShown = newVal;
      }
    },
    methods: {
      handleStartQuest: function () {
        this.isPlayerModalOpen = true;
      },
      handleWorkerQuest: function () {
        this.isWorkerModalOpen = true;
      },
      handleOverlayClick: function () {
        this.isPlayerModalOpen = false;
        this.isWorkerModalOpen = false;
      }
    }
}
</script>

<style scoped>
* {
    transition: all 0.5ms ease-in-out;
  }

.dragon-mountain-container {
  position: absolute;
  bottom: -20vh;
  width: 60vw;
}

.btn {
  transition: .2s all ease-in-out;
}

.button-container {
  opacity: 0;
  max-width: 40vw;
  animation: fade-and-up 1.5s forwards ease-in-out 7.5s;
}

.guidian-container {
  margin-right: 1vw;
  z-index: 5;
}
.guidian {
  height: 35vh;
  animation-name: float;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
@keyframes float {
  0% {
      transform: translatey(0px);
  }
  50% {
      transform: translatey(-10px);
  }
  100% {
      transform: translatey(0px);
  }
}

.popup-enter-active, .popup-leave-active {
  opacity: 1;
  transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.popup-enter, .popup-leave-to /* .popup-leave-active below version 2.1.8 */ {
  transform: translateY(100vh);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  z-index: 3;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.overlay {
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transition: 0.3s all ease-in-out; */
}

.overlay-card-text {
  font-weight: 500;
  font-size: 2vmax;
}

.overlay-background {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 4;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.msg-container {
  /* position: relative;
  top: 30vh; */
  z-index: 5;
  transition: 0.5s all ease-in-out;
}

.msg-title {
  position: absolute;
  z-index: 4;
  top: 20vh;
  right: 40vh;
}

.arrow-container {
  height: 10vh;
}

.secondary {
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100%;
}

.main {
  height: 100vh;
  position: relative;
  top: 0;
}

.main-container {
  height: 300vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dragon-image, .mountain-image {
  position: absolute;
  bottom: 0;
  right: 0;
  height: auto;
  width: 50vw;
}

.title-box {
  width: 53vw;
  position: relative;
}

.logo-container {
  position: absolute;
  display: flex;
  top: 3vw;
  background: black;
  left: 24.7vw;
}

.title-logo {
  width: 6.5vw;
}

.main-title-text {
  color: #f79519;
  font-size: 8vw;
  font-weight: 500;
  background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.main-title {
  /* margin-top: -3.7vw; */
  max-width: 40vw;
}

.second {
  margin-top: -6.1vw;
  position: relative;
}

.pre-title {
  padding-left: 0.5vw;
  letter-spacing: 0.8vw;
  font-size: 1.7vw;
  font-weight: 100;
  background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#purpose {
  /* color: #ebebeb; */
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 100;
}

.your-title {
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: -3vw;
  font-size: 2vh;
}

.small-text {
  font-weight: 600;
  opacity: 0;
  text-transform: uppercase;
  /* margin-left: 1vw; */
  font-size: max(1.5vh, 1.2vw);
  letter-spacing: 0.2vw;
  text-align: justify;
  max-width: 40vw;
  background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fade-and-up 1.5s forwards ease-in-out 6s;
}

@keyframes fade-and-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.custom-buttons {
  transition: 0.3s all ease-in-out;
  font-size: calc(1rem + 0.5vw);
  font-weight: 700;
  background: #dfdfdf;
  color: #303030;
  border: none;
  outline: none;
}

.custom-buttons:hover {
  color: #1f1f1f;
  background: #f79519;
}

.worker-button:hover {
  background: #f5a237;
}

/* svg {
  width: 100%;
} */

text {
  fill: #00c9ff;
}

#face {
  fill: linear-gradient(to right, #f83600 0%, #f9d423 100%);
}

#your {
  position: absolute;
  width: 10vw;
  left: 17vw;
  top: 17vh;
}

#dragon {
  /* margin-top: -7.5vh; */
}

@media screen and (max-width: 780px) {
  * {
    transition: all 0.5ms ease-in-out;
  }

  .custom-buttons {
    font-size: max(1.5vh, 1.2vw);
  }

  .main-title {
    /* margin-top: -3.7vw; */
    max-width: 90vw;
  }

  .dragon-image {
    right: -31vw;
    height: 43vh;
    width: auto;
  }

  .small-text {
    font-size: max(1.5vh, 1.2vw);
  }  

  .title-box {
    margin-top: 20vh;
    width: 100%;
    transition: 0.2s all ease-in-out;
  }

  .pre-title {
    padding-left: 0.6vw;
    letter-spacing: 0.8vw;
    font-size: 3.7vw;
  }

  .main-title {
    margin-top: -3vh;
  }

  .main-title-text {
    font-size: 7.7vh;
  }

  .second {
    margin-top: -6vh;
    position: relative;
    font-size: 7.7vh;
  }

  .logo-container {
    display: flex;
    top: 2.5vh;
    height: 7vh;
    background: black;
    left: 24vh;
  }

  .title-logo {
    position: relative;
    top: 0.5vh;
    height: 6vh;
    width: auto;
  }
}

@media screen and (max-width: 480px) {
   .main-title {
    margin-top: -3vh;
  }

  .main-title-text {
    font-size: 6vh;
  }

  .second {
    margin-top: -4.4vh;
    position: relative;
    font-size: 6vh;
  }

  .logo-container {
    display: flex;
    top: 2.1vh;
    height: 7vh;
    background: black;
    left: 18.6vh;
  }

  .title-logo {
    position: relative;
    top: 0;
    height: 5vh;
    width: auto;
  }
}
</style>