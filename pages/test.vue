<template>
  <b-container class="main-container">
    <div 
      ref="shit"
      class="shit d-flex justify-content-center align-items-center"
    >
      {{ count.number  }}
    </div>
  </b-container>    
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
export default {
    data() {
      return {
        count: {
          number: 12
        },
      }
    },
    mounted() {
      anime({
        targets: this.count,
        number: 20,
        easing: 'easeInOutQuad',
        duration: 2000,
        delay: 200,
        round: 10
      });
    }
}
</script>

<style scoped>
.main-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.shit {
  background-color: yellow;
  width: 100px;
  height: 200px;
}
</style>