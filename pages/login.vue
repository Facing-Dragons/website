<template>
  <div class="align-items-center container d-flex flex-column justify-content-center">
    <div class="row">
      <div class="col-12 justify-content-center align-items-center">
        <h2>Pass Test Component</h2>
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
          @click="login"
          :disabled="form.email === '' || !emailState"
        >
          Submit
        </b-button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase';
// import {fireDB} from '~/plugins/firebase';

export default {
    asyncData() {
      return {
        authenticatedUser: null
      }
    },
    // fetch({ store }) {
    //   firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //       console.log('---------------------------------------');
    //       console.log(user);
    //       console.log('---------------------------------------');
    //       // store.commit('quest/setUserInfo', user);
    //     } else {
    //       console.log('no user!');
    //     }
    //   });
    // },
    mounted() {
      // console.log('hiiii!!!');
      
      this.readFromFirestore();
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
        // The client SDK will parse the code from the link for you.
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
            this.writeToUser(result.user);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    data() {
      return {
        form: {
          email: ""
        }
      }
    },
    methods: {
      async writeToUser(user) {
        const messageRef = this.$fireStore.collection('users').doc(user.uid)
        try {
          await messageRef.set({
            username: 'Nuxt-Fire with Firestore rocks!',
            score: 10
          })
        } catch (e) {
          alert(e)
          return
        }
        alert('Success.')
      },
      async readFromFirestore() {
        const messageRef = this.$fireStore.collection('users').doc(this.$store.state.authUser.uid);
        try {
          const messageDoc = await messageRef.get()
          alert(messageDoc.data())
          console.log(messageDoc.data())
        } catch (e) {
        alert(e)
        return
        }
      },
      login() {
        var email = this.form.email;
        var actionCodeSettings = {
          // URL you want to redirect back to. The domain (www.example.com) for this
          // URL must be whitelisted in the Firebase Console.
          url: `${process.env.baseUrl}/login`,
          // This must be true.
          handleCodeInApp: true,
        };
        this.$fireAuth.sendSignInLinkToEmail(email, actionCodeSettings)
        .then(function() {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          
          window.localStorage.setItem('emailForSignIn', email);
        })
        .catch(function(error) {
          // Some error occurred, you can inspect the code: error.code
          console.log(error);
        });
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
}
</script>

<style lang="scss" scoped>
  .container {
    height: 100vh;
    color: white;
  }
</style>