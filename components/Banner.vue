<template>
  <b-container fluid class="main d-flex align-items-lg-center">
    <!-- This is the Email Modal Section -->
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
                            src="~/assets/img/beige_white_guidian.png" 
                            alt="guidian"
                            height="20vh"
                            class="guidian"
                        >
                    </div>
                </transition>
                <b-card v-if="!$device.isMobile" class="msg-container d-none d-md-flex flex-column justify-content-center p-2">
                  <div v-if="!isWriteSuccessful" class="quest-question">
                    <h2 class="overlay-card-text">
                      Get Your First Quest!
                    </h2>
                    <b-form>
                      <b-form-group
                        id="input-email-group"
                        :state="emailState"
                        :invalid-feedback="invalidFeedback"
                      >
                        <b-form-input
                          id="input-email"
                          v-model="form.email"
                          type="email"
                          name="EMAIL"
                          required
                          placeholder="Enter Your Email"
                        ></b-form-input>
                      </b-form-group>
                    </b-form> 
                    <div class="modal-button-container w-100 d-flex justify-content-end">
                      <b-button 
                        type="submit"
                        class="ml-2" 
                        variant="success" 
                        @click="() => writeEmail(false)"
                        :disabled="form.email === '' || !emailState || isWriting"
                      >
                          Submit
                      </b-button>
                    </div> 
                  </div>
                  <div v-else class="quest-email-message">
                    Please check your email for your first quest! 
                  </div>
                </b-card>
                <b-card v-else no-body class="msg-container-mobile w-100 d-flex d-md-none p-2 pt-4">
                  <transition name="popup">
                    <div v-if="isGuidianShown" class="guidian-container-mobile d-block d-md-none">
                        <img 
                            src="~/assets/img/beige_white_guidian.png" 
                            alt="guidian"
                            height="20vh"
                            class="guidian"
                        >
                    </div>
                  </transition>
                  <div v-if="!isWriteSuccessful" class="quest-question-mobile w-50">
                    <h2 class="overlay-card-text">
                      Get Your First Quest!
                    </h2>
                    <b-form>
                      <b-form-group
                        id="input-email-group"
                        :state="emailState"
                        :invalid-feedback="invalidFeedback"
                      >
                        <b-form-input
                          id="input-email"
                          v-model="form.email"
                          type="email"
                          name="EMAIL"
                          required
                          placeholder="Enter Your Email"
                        ></b-form-input>
                      </b-form-group>
                    </b-form> 
                    <div class="modal-button-container w-100 d-flex justify-content-end">
                      <b-button 
                        type="submit"
                        class="ml-2" 
                        variant="success" 
                        @click="() => writeEmail(false)"
                        :disabled="form.email === '' || !emailState || isWriting"
                      >
                          Submit
                      </b-button>
                    </div> 
                  </div>
                  <div v-else class="quest-email-message quest-question-mobile w-50">
                    Please check your email for your first quest! 
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
                            src="~/assets/img/beige_white_guidian.png" 
                            alt="guidian"
                            height="20vh"
                            class="guidian"
                        >
                    </div>
                </transition>
                <b-card v-if="!$device.isMobile" class="msg-container d-none d-md-flex d-flex flex-column justify-content-center p-2">
                  <div v-if="!isWriteSuccessfulSupport" class="quest-question">
                    <h2 class="overlay-card-text">Subscribe to learn more!</h2>
                    <b-form>
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
                      <b-button 
                        class="ml-2" 
                        variant="success" 
                        @click="() => writeEmail(true)"
                        :disabled="form.email === '' || !emailState || isWriting"
                      >
                        Submit
                      </b-button>
                    </div>
                  </div>
                  <div v-else class="quest-email-message">
                    Please check your email for your first quest!
                  </div>
                </b-card>
                <b-card v-else no-body class="msg-container-mobile w-100 d-flex d-md-none p-2 pt-4">
                  <transition name="popup">
                    <div v-if="isGuidianShown" class="guidian-container-mobile d-block d-md-none">
                        <img 
                            src="~/assets/img/beige_white_guidian.png" 
                            alt="guidian"
                            height="20vh"
                            class="guidian"
                        >
                    </div>
                  </transition>
                  <div v-if="!isWriteSuccessfulSupport" class="quest-question-mobile w-50">
                    <h2 class="overlay-card-text">
                      Subscribe to learn more.
                    </h2>
                  <b-form>
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
                      <b-button 
                        class="ml-2" 
                        variant="success" 
                        @click="() => writeEmail(true)"
                        :disabled="form.email === '' || !emailState || isWriting"
                      >
                        Submit
                      </b-button>
                    </div>
                  </div>
                  <div v-else class="quest-email-message quest-question-mobile w-50">
                    Please check your email for your first quest!
                  </div>
                </b-card>
              </div>
          </div>
        </transition>
    
    <div class="title-box">
      <div class="main-title">
        <banner-text-section></banner-text-section>
        <banner-text-unlock class="mt-4"></banner-text-unlock>
      </div>
      <div class="title-description">
        <title-desc></title-desc>
      </div>
      <div class="button-container d-flex flex-column p-0 justify-content-center align-items-start">
        <button 
          class="mb-2 py-2 custom-buttons w-100 w-md-75 rounded"
          :class="{'nav-button': isButtonInNav}"
          @click="handleStartQuest"
        >
          START YOUR QUEST!
        </button>
        <button 
          class="w-100 w-md-75 py-2 custom-buttons worker-button rounded"
          @click="handleWorkerQuest"
        >SUPPORT WORKERS</button>
      </div>
    </div> 
    <div v-if="isSupportShown && (!$device.isMobile || (!isPlayerModalOpen && !isWorkerModalOpen))" class="arrow-container d-flex justify-content-center align-items-center">
      <nuxt-link to="#about-game-section">
        <div class="arrow-box">
          <animating-arrow-down></animating-arrow-down>
        </div>
      </nuxt-link>
    </div>
  </b-container>
</template>

<script>
/**
 * This will be the first section of the page, the banner that also contains the video
 */
import BannerTextSection from '~/components/BannerTextFirst'
import BannerTextUnlock from '~/components/BannerTextUnlock'
import TitleDesc from '~/components/TitleDesc'
import AnimatingArrowDown from '~/components/AnimatingArrowDown'
import {mapState} from 'vuex';

export default {
    components: {
      BannerTextSection,
      BannerTextUnlock,
      AnimatingArrowDown,
      TitleDesc
    },
    props: {
      isSupport: {
        type: Boolean,
        default: false
      },
      showModal: {
        type: Boolean, 
        default: false
      }
    },
    data() {
      return {
        isPlayerModalOpen: this.showModal,
        isWorkerModalOpen: false,
        form: {email: ''},
        isGuidianShown: this.showModal,
        isSupportShown: true,
        isButtonInNav: false,
        isWriteSuccessful: false,
        isWriting: false,
        isWriteSuccessfulSupport: false,
        isWriting: false,
      }
    },
    watch: {
      showModal(newVal) {
        this.isPlayerModalOpen = newVal;
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
      },
      ...mapState({
        authUser: state => state.authUser
      })
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
      async writeEmail(isSupport=false) {
        // const isSupportWorker = this.$route.path === '/support'
        var email = this.form.email;
        var actionCodeSettings = {
          // URL you want to redirect back to. The domain (www.example.com) for this
          // URL must be whitelisted in the Firebase Console.
          url: `${process.env.baseUrl}/quest?support=${isSupport}`,
          // This must be true.
          handleCodeInApp: true,
        };
      
        this.isWriting = true;
        this.$fireAuth.sendSignInLinkToEmail(email, actionCodeSettings)
        .then(() =>  {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          
          window.localStorage.setItem('emailForSignIn', email);
          if (isSupport)
            this.isWriteSuccessfulSupport = true;
          else 
            this.isWriteSuccessful = true;
          this.isWriting = false;
        })
        .catch((error) => {
          // Some error occurred, you can inspect the code: error.code
          if (isSupport)
            this.isWriteSuccessfulSupport = false;
          else 
            this.isWriteSuccessful = false;
          this.isWriting = false;
        });
      },
      handleSubscribe: function() {
        setTimeout(() => {
          this.isWriteSuccessful = true;
          // this.isPlayerModalOpen = false;
          // this.isWorkerModalOpen = false;
        }, 2000);
      },
      handleStartQuest: function () {
        // console.log(this.authUser);
        if(this.authUser) {
          this.$router.push('/quest');
        } else {
          this.isPlayerModalOpen = true;
        }
      },
      handleWorkerQuest: function () {
        // console.log(this.authUser);
        if(this.authUser) {
          this.$router.push('/quest');
        } else {
          this.isWorkerModalOpen = true;
        }
      },
      handleOverlayClick: function () {
        this.isPlayerModalOpen = false;
        this.isWorkerModalOpen = false;
      },
      onScrollHandler() {
        if(window.scrollY > 100) {
          this.isSupportShown = false;
          this.isButtonInNav = true;
        }
        else if (window.screenY < 400) {
          this.isSupportShown = true;
          this.isButtonInNav = false;
        }
      }
    },
    created() {
        if (process.browser) {
            window.addEventListener('scroll', this.onScrollHandler)
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
  animation: fade-and-up .8s forwards ease-in-out 2.5s;
  z-index: 4;
}

.button-container button {
  z-index: 4;
}

@keyframes clickAnimation {
  0% {
    transform: scale(1) rotateY(0);
  }
  30% {
    transform: scale(1.3) rotateY(-30deg);
  }
  50%, 100% {
    transform: scale(1) rotateY(0);
  }
}

.fade-up-enter-active, .fade-up-leave-active {
  transition: all .7s;
}

.fade-up-enter, .fade-up-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}

.guidian-container {
  margin-right: 1vw;
  z-index: 10;
}

.guidian-container-mobile {
  position: absolute;
  bottom: -8vh;
  z-index: 10;
  left: 0vw;
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
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.popup-enter, .popup-leave-to /* .popup-leave-active below version 2.1.8 */ {
  transform: translateY(50vh);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  z-index: 6;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.overlay {
  position: fixed;
  z-index: 6;
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
  font-size: 1.5vmax;
}

.quest-question-mobile {
  position: relative;
  left: 45vw;
}

.quest-email-message {
  font-size: 1.6rem;
}

.overlay-background {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 8;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.msg-container {
  /* position: relative;
  top: 30vh; */
  background: #1e1e1ed8;
  color: white;
  border: 1px solid rgba(107, 107, 107, 0.85);
  z-index: 10;
  transition: 0.5s all ease-in-out;
}

.msg-container-mobile {
  background: #1e1e1ed8;
  color: white;
  border: 1px solid rgba(107, 107, 107, 0.85);
  position: absolute;
  bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  z-index: 20;
  transition: 0.5s all ease-in-out;
}

.msg-container-mobile.overlay-card-text {
  font-size: 2rem;
  text-align: center;
}

.msg-title {
  position: absolute;
  z-index: 8;
  top: 20vh;
  right: 40vh;
}

.arrow-container {
  width: 100%;
  right: 0;
  left: 0;
  height: 8vmin;
  z-index: 10;
  position: absolute;
  top: 93vh;
}

.arrow-box {
  height: 4vmin;
  width: 4vmin;
}

.main {
  height: 100vh;
  position: relative;
  top: 0;
}

.title-box {
  margin-top: 20vh;
  width: 53vw;
  position: relative;
}

.main-title, .title-description {
  max-width: 40vw;
}

.title-description {
  opacity: 0;
  animation: fade-and-up .8s forwards ease-in-out 2s;
  margin-top: 2rem;
  margin-bottom: 2rem;
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
  font-size: 1.5rem;
  font-weight: 700;
  background: #f9b038;
  color: #303030;
  border: none;
  outline: none;
}

.submit-button {
  background: #f9b038;
  color: #303030;
  border: none;
  outline: none;
}

.custom-buttons:hover {
  color: #1f1f1f;
  background: #e26e0a;
}

.worker-button:hover {
  background: #e26e0a;
}

.worker-button {
  background: #fae667;
}


@media screen and (max-width: 5870px) {
  .title-box {
    width: 100%;
  }
}

@media screen and (max-width: 1025px) {
  .title-box {
    position: absolute;
    bottom: 8vh;
    max-width: 55vw;
  }

  .button-container {
    max-width: 100%;
  }


  .main-title, .title-description {
    max-width: 100%;
  }
}

@media screen and (max-width: 767px) {
  .title-box {
    position: absolute;
    bottom: 5vh;
    max-width: 40vw;
  }

  .main-title, .title-description {
    max-width: 100%;
  }
}

@media screen and (max-width: 576px) {
  * {
    transition: all 0.5ms ease-in-out;
  }

  .button-container {
    position: absolute;
    max-width: 100vw;
    /* top: 20vh; */
    width: 100%;
    bottom: 4vh;
  }

  .main-title, .title-description {
    max-width: 90vw;
  }

  .title-box {
    position: relative;
    max-width: 90vw;
    transition: 0.2s all ease-in-out;
  }

  .main-title {
    margin-top: -3vh;
  }
}
</style>