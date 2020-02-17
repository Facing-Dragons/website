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
                            src="~/assets/img/guidian.png" 
                            alt="guidian"
                            height="20vh"
                            class="guidian"
                        >
                    </div>
                </transition>
                <b-card v-if="!$device.isMobile" class="msg-container d-none d-md-flex flex-column justify-content-center p-2">
                  <h2 class="overlay-card-text">
                    Get Your First Quest!
                  </h2>
                  <!-- Begin Mailchimp Signup Form -->
                  <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
                  <div id="mc_embed_signup">
                  <form style="padding: 0" action="https://facingdragons.us16.list-manage.com/subscribe/post?u=73bd4d1cff787d311b6fbc928&amp;id=d87acb66fd" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                      <div id="mc_embed_signup_scroll">
                    
                  <div class="mc-field-group">
                    <input type="email" value="" name="EMAIL" placeholder="Email Address" class="required email" id="mce-EMAIL">
                  </div>
                  <div class="mc-field-group input-group d-none">
                      <strong>Type </strong>
                      <ul><li><input type="radio" value="1" name="group[6339]" id="mce-group[6339]-6339-0" checked><label for="mce-group[6339]-6339-0">Players</label></li>
                  <li><input type="radio" value="2" name="group[6339]" id="mce-group[6339]-6339-1"><label for="mce-group[6339]-6339-1">SupportWorkers</label></li>
                  </ul>
                  </div>
                    <div id="mce-responses" class="clear">
                      <div class="response" id="mce-error-response" style="display:none"></div>
                      <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_73bd4d1cff787d311b6fbc928_d87acb66fd" tabindex="-1" value=""></div>
                      <div class="clear"><input type="submit" value="Subscribe" @click="handleSubscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                      </div>
                  </form>
                  </div>

                  <!--End mc_embed_signup-->

                  <!-- <div v-if="!isWriteSuccessful" class="quest-question"> -->
                    

                    <!--End mc_embed_signup-->
                    <!-- <b-form>
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
                    </b-form>  -->
                    <!-- <div class="modal-button-container w-100 d-flex justify-content-end">
                      <b-button 
                        type="submit"
                        class="ml-2" 
                        variant="success" 
                        @click="writeEmail"
                        :disabled="form.email === '' || !emailState || isWriting"
                      >
                          Submit
                      </b-button> -->
                    <!-- </div> -->
                  <!-- </div> -->
                  <!-- <div v-else class="quest-email-message">
                    Great Choice! You'll get your first quest in 48 hours.
                  </div> -->
                </b-card>
                <b-card v-else no-body class="msg-container-mobile w-100 d-flex d-md-none p-2 pt-4">
                  <transition name="popup">
                    <div v-if="isGuidianShown" class="guidian-container-mobile d-block d-md-none">
                        <img 
                            src="~/assets/img/guidian.png" 
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
                    <!-- Begin Mailchimp Signup Form -->
                  <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
                  <div id="mc_embed_signup">
                  <form style="padding: 0" action="https://facingdragons.us16.list-manage.com/subscribe/post?u=73bd4d1cff787d311b6fbc928&amp;id=d87acb66fd" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                      <div id="mc_embed_signup_scroll">
                    
                  <div class="mc-field-group">
                    <input type="email" value="" name="EMAIL" placeholder="Email Address" class="required email" id="mce-EMAIL">
                  </div>
                  <div class="mc-field-group input-group d-none">
                      <strong>Type </strong>
                      <ul><li><input type="radio" value="1" name="group[6339]" id="mce-group[6339]-6339-0" checked><label for="mce-group[6339]-6339-0">Players</label></li>
                  <li><input type="radio" value="2" name="group[6339]" id="mce-group[6339]-6339-1"><label for="mce-group[6339]-6339-1">SupportWorkers</label></li>
                  </ul>
                  </div>
                    <div id="mce-responses" class="clear">
                      <div class="response" id="mce-error-response" style="display:none"></div>
                      <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_73bd4d1cff787d311b6fbc928_d87acb66fd" tabindex="-1" value=""></div>
                      <div class="clear"><input type="submit" value="Subscribe" name="subscribe" @click="handleSubscribe" id="mc-embedded-subscribe" class="button"></div>
                      </div>
                  </form>
                  </div>
                    <!-- <b-form>
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
                        @click="writeEmail"
                        :disabled="form.email === '' || !emailState || isWriting"
                      >
                          Submit
                      </b-button>
                    </div> -->
                  </div>
                  <div v-else class="quest-email-message quest-question-mobile w-50">
                    Great Choice! You'll get your first quest in 48 hours.
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
                <b-card v-if="!$device.isMobile" class="msg-container d-none d-md-flex d-flex flex-column justify-content-center p-2">
                  <div v-if="!isWriteSuccessful" class="quest-question">
                    <h2 class="overlay-card-text">Subscribe to learn more!</h2>
                    <!-- Begin Mailchimp Signup Form -->
                      <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
                      <div id="mc_embed_signup">
                      <form style="padding: 0" action="https://facingdragons.us16.list-manage.com/subscribe/post?u=73bd4d1cff787d311b6fbc928&amp;id=d87acb66fd" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                          <div id="mc_embed_signup_scroll">
                        
                      <div class="mc-field-group">
                        <input type="email" value="" name="EMAIL" placeholder="Email Address" class="required email" id="mce-EMAIL">
                      </div>
                      <div class="mc-field-group input-group d-none">
                          <strong>Type </strong>
                          <ul><li><input type="radio" value="1" name="group[6339]" id="mce-group[6339]-6339-0"><label for="mce-group[6339]-6339-0">Players</label></li>
                      <li><input type="radio" value="2" name="group[6339]" id="mce-group[6339]-6339-1" checked><label for="mce-group[6339]-6339-1">SupportWorkers</label></li>
                      </ul>
                      </div>
                        <div id="mce-responses" class="clear">
                          <div class="response" id="mce-error-response" style="display:none"></div>
                          <div class="response" id="mce-success-response" style="display:none"></div>
                        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_73bd4d1cff787d311b6fbc928_d87acb66fd" tabindex="-1" value=""></div>
                          <div class="clear"><input type="submit" @click="handleSubscribe" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                          </div>
                      </form>
                      </div>
                    <!-- <b-form>
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
                          @input.enter="() => writeEmail(true)"
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
                    </div> -->
                  </div>
                  <div v-else class="quest-email-message">
                    Thank you for your interest! We will keep in touch.
                  </div>
                </b-card>
                <b-card v-else no-body class="msg-container-mobile w-100 d-flex d-md-none p-2 pt-4">
                  <transition name="popup">
                    <div v-if="isGuidianShown" class="guidian-container-mobile d-block d-md-none">
                        <img 
                            src="~/assets/img/guidian.png" 
                            alt="guidian"
                            height="20vh"
                            class="guidian"
                        >
                    </div>
                  </transition>
                  <div v-if="!isWriteSuccessful" class="quest-question-mobile w-50">
                    <h2 class="overlay-card-text">
                      Subscribe to learn more.
                    </h2>
                    <!-- Begin Mailchimp Signup Form -->
                  <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
                  <div id="mc_embed_signup">
                  <form style="padding: 0" action="https://facingdragons.us16.list-manage.com/subscribe/post?u=73bd4d1cff787d311b6fbc928&amp;id=d87acb66fd" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                      <div id="mc_embed_signup_scroll">
                    
                  <div class="mc-field-group">
                    <input type="email" value="" name="EMAIL" placeholder="Email Address" class="required email" id="mce-EMAIL">
                  </div>
                  <div class="mc-field-group input-group d-none">
                      <strong>Type </strong>
                      <ul><li><input type="radio" value="1" name="group[6339]" id="mce-group[6339]-6339-0"><label for="mce-group[6339]-6339-0">Players</label></li>
                  <li><input type="radio" value="2" name="group[6339]" id="mce-group[6339]-6339-1" checked><label for="mce-group[6339]-6339-1">SupportWorkers</label></li>
                  </ul>
                  </div>
                    <div id="mce-responses" class="clear">
                      <div class="response" id="mce-error-response" style="display:none"></div>
                      <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_73bd4d1cff787d311b6fbc928_d87acb66fd" tabindex="-1" value=""></div>
                      <div class="clear"><input type="submit" value="Subscribe" name="subscribe" @click="handleSubscribe" id="mc-embedded-subscribe" class="button"></div>
                      </div>
                  </form>
                  </div>
                    <!-- <b-form>
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
                        @click="writeEmail"
                        :disabled="form.email === '' || !emailState || isWriting"
                      >
                          Submit
                      </b-button>
                    </div> -->
                  </div>
                  <div v-else class="quest-email-message quest-question-mobile w-50">
                    Thank you for your interest! We will keep in touch.
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
import {fireDb} from '~/plugins/firebase.js'

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
      }
    },
    data() {
      return {
        isPlayerModalOpen: false,
        isWorkerModalOpen: false,
        form: {email: ''},
        isGuidianShown: false,
        isSupportShown: true,
        isButtonInNav: false,
        isWriteSuccessful: false,
        isWriting: false,
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
      async writeEmail(isSupport=false) {
        const isSupportWorker = this.$route.path === '/support'
        const ref = fireDb.collection("users");
        this.isWriting = true;
        try {
          await ref.add({
            email: this.form.email,
            isSupport,
            mission: 0,
            love: 0, 
            fun: 0,
            social: 0,
            vitality: 0,
            wealth: 0,
            mind: 0,
            home: 0
        })
        } catch (e) {
          // TODO: error handling
          console.error(e)
          this.isWriteSuccessful = false;
        }
        this.isWriteSuccessful = true;
        this.isWriting = false;
        this.$store.commit('setEmail', this.form.email);
      },
      handleSubscribe: function() {
        setTimeout(() => {
          this.isWriteSuccessful = true;
          // this.isPlayerModalOpen = false;
          // this.isWorkerModalOpen = false;
        }, 2000);
      },
      handleStartQuest: function () {
        this.isPlayerModalOpen = true;
      },
      handleWorkerQuest: function () {
        this.isWorkerModalOpen = true;
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
  animation: fade-and-up 1.5s forwards ease-in-out 4.5s;
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
  left: -13vw;
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
  z-index: 10;
  transition: 0.5s all ease-in-out;
}

.msg-container-mobile {
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
  animation: fade-and-up 1.5s forwards ease-in-out 3s;
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