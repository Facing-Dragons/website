<template>
<transition name="fade">
  <div v-if="loading" class="loading-page">
    <p>Loading...</p>
  </div>
</transition>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
      console.log(this.loading);
      
    },
    finish () {
      this.loading = false
      console.log(this.loading);
      
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: silver;
  font-size: calc(1rem + 1vw);
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
