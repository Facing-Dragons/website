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
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          email: ""
        }
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