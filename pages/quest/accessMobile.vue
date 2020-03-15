<template>
    <div class="main-container">
        <transition name="popup">
            <div v-if="isGuidianShown" class="guidian-container-mobile">
                <img 
                    src="~/assets/img/beige_white_guidian.png" 
                    alt="guidian"
                    class="guidian"
                >
            </div>
        </transition>
        <transition name="popup">
        <div v-if="isGuidianShown" class="text-box" :class="{'text-box-ios': $device.isIos}">
            <p>
                Would you like to share your email with me so that I can show you how you did on the quest?
            </p>
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
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isGuidianShown: false,
            isSupport: false,
            form: {
                email: ""
            }
        }
    },
    mounted() {
        if(!this.$device.isMobileOrTablet) {
            this.$router.replace('/quest/access')
        }

        setTimeout(() => {
           this.isGuidianShown = true 
        }, 200);
    },
    methods: {
        async writeEmail(isSupport=false) {
        // const isSupportWorker = this.$route.path === '/support'
        var email = this.form.email;
        var actionCodeSettings = {
          // URL you want to redirect back to. The domain (www.example.com) for this
          // URL must be whitelisted in the Firebase Console.
          url: `${process.env.baseUrl}/quest/result?support=${isSupport}`,
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
    }
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
    justify-content: flex-start;
    align-items: center;
}

.guidian-container-mobile {
    margin-top: 2vh;
    height: 50%;
    top: 5%;
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
    position: fixed;
    width: 100%;
    right: 0;
    left: 0;
    bottom: 0;
    // height: 47%;
    padding: 1.5rem;
    font-size: 1.8rem;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.text-box-ios {

    // @media screen and (max-width: 576px) {
    //     height: 35%;
    // }
    height: 40%;
    // bottom: 15%;
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