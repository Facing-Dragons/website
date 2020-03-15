<template>
    <div class="main-container">
        <img src="~/assets/img/logo_white.png" class="background-img" alt="Facing dragons Logo">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <transition name="popup">
                        <div v-if="isGuidianShown" class="guidian-container">
                            <img 
                                src="~/assets/img/beige_white_guidian.png" 
                                alt="guidian"
                                class="guidian"
                            >
                        </div>
                    </transition>
                </div>
                <div class="col-6 justify-content-center align-items-center d-flex">
                    <div v-if="isGuidianShown" class="text-box rounded">
                    <p>
                        Would you like to share your email with me so that I can show you how you did on the quest?
                    </p>
                    <div class="w-100">

                        <b-form-checkbox
                            id="is-support"
                            class="mt-5 mb-2 control-label"
                            v-model="isSupport"
                            name="is-support"
                            size="lg"
                        >
                            I AM A SUPPORT WORKER
                        </b-form-checkbox>
                        <b-form>
                            <b-form-group
                            id="input-email-group"
                            :state="emailState"
                            :invalid-feedback="invalidFeedback"
                            >
                            <b-input-group>
                                <b-form-input
                                    id="input-email"
                                    class="custom-input"
                                    v-model="form.email"
                                    type="email"
                                    required
                                    placeholder="Enter Your Email"
                                ></b-form-input>
                                <b-input-group-append>
                                    <b-button 
                                        class="submit-button"
                                        variant="success"
                                        @click="() => writeEmail(true)"
                                        :disabled="form.email === '' || !emailState || isWriting"
                                    >
                                        Submit
                                    </b-button>
                                </b-input-group-append>
                            </b-input-group>
                            </b-form-group>
                        </b-form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    middleware: 'noAuth',
    data() {
        return {
            isGuidianShown: false,
            isSupport: false,
            form: {
                email: ""
            }
        }
    },
    asyncData({store}) {
        store.dispatch('quest/getUser');
    },
    mounted() {
        if (this.$fireAuth.isSignInWithEmailLink(window.location.href)) {
            // Additional state parameters can also be passed via URL.
            // This can be used to continue the user's intended action before triggering
            // the sign-in operation.
            // Get the email if available. This should be available if the user completes
            // the flow on the same device where they started it.
            var email = window.localStorage.getItem('emailForSignIn');
            // console.log('this is email from local storage :', email);
            
            if (!email) {
            // User opened the link on a different device. To prevent session fixation
            // attacks, ask the user to provide the associated email again. For example:
            email = window.prompt('Please provide your email for confirmation');
            }
            var credential = this.$fireAuthObj.EmailAuthProvider.credentialWithLink(email, window.location.href);

            console.log(credential);
            this.$fireAuth.currentUser.linkWithCredential(credential).then((usercred) => {
                    var user = usercred.user;
                    console.log("Anonymous account successfully upgraded", user);
                    this.$store.commit('quest/SET_USER_EMAIL', user.email);
                    this.$store.commit('SET_AUTH_USER', {authUser: {uid: user.uid, email: user.email}});
                    window.location.reload(true);
                }, (error) => {
                console.log("Error upgrading anonymous account", error);
                this.$fireAuth.signInWithEmailLink(email, window.location.href)
                .then((result) => {
                    // Clear email from storage.
                    // console.log(result);
                    window.localStorage.removeItem('emailForSignIn');
                    // store.commit('quest/setUserInfo', result.users);
                    // You can access the new user via result.user
                    // Additional user info profile not available via:
                    // result.additionalUserInfo.profile == null
                    // You can check if the user is new or existing:
                    // result.additionalUserInfo.isNewUser
                    // console.log(this.$route.query);
                    
                })
                .catch(function(error) {
                    console.log(error);
                });
            });
        }



        if(this.$device.isMobileOrTablet) {
            this.$router.replace('/quest/accessMobile');
        }

        setTimeout(() => {
           this.isGuidianShown = true 
        }, 200);
    },
    methods: {
        async writeEmail(isSupport = false) {

        /**
         * First we write user's email and isSupport to the anonymous user database 
         * then do other shit
         */
        this.$store.dispatch("quest/updateUserEmail", {newEmail: this.form.email, newIsSupport: this.isSupport});

        // const isSupportWorker = this.$route.path === '/support'
        var email = this.form.email;
        var actionCodeSettings = {
          // URL you want to redirect back to. The domain (www.example.com) for this
          // URL must be whitelisted in the Firebase Console.
          url: `https://v2.facingdragons.com/quest/access?support=${isSupport}`,
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
          this.isWriteSuccessful = true;
          this.isWriting = false;
        })
        .catch((error) => {
          // Some error occurred, you can inspect the code: error.code
          this.isWriteSuccessful = false;
          this.isWriting = false;
        });
      },
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
}
</script>

<style lang="scss" scoped>


.main-container {
    background: black;
    position: fixed;
    height: 100vh;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.background-img { 
    height: 100%;
    width: auto;
    position: fixed; 
    top: 0;
    bottom: 0;
    z-index: 0;
    opacity: 0.5;
    filter: blur(10px);
}

.guidian-container {
    margin-top: 2vh;
    height: 70vh;
    display: flex;
    justify-content: center;
    padding: 1rem;
}
.guidian {
  height: 100%;
    width: auto;
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

.text-box {
    background: #ebebeb;
    padding: 1.5rem;
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    // align-items: center;
}

p {
    font-size: 1.7rem;
    font-weight: 500;
    max-height: 50%;
    overflow: auto;
}

.custom-control-label {
    font-weight: 700;
}

.custom-input {
    height: 3rem;
    font-size: 1.5rem;
}

.submit-button {
    // font-size: 1.5rem;
}
</style>
