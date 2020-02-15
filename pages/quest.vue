<template>
    <div class="main-container">
      <transition
        name="slide-fade"
      >
        <!-- <game-question
          v-if="currentStepIndex === 0"
          :text="gameQuestions[0].text"
          :color="gameQuestions[0].color"
          :value="gameQuestions[0].value"
          :title="gameQuestions[0].title"
          @change="handleChange"
        ></game-question>
        <game-question
          v-else-if="currentStepIndex === 1"
          :text="gameQuestions[1].text"
          :color="gameQuestions[1].color"
          :value="gameQuestions[1].value"
          :title="gameQuestions[1].title"
          @change="handleChange"
        ></game-question> -->
        <game-question
          v-bind="currentProperties"
          @change="handleChange"
        ></game-question>
      </transition>
      <div class="button-container d-none d-md-block">
        <transition
          name="slide-fade"
        >
        <div 
          @click="handlePrev" 
          v-if="currentStepIndex > 0" 
          class="quest-arrow-container bg-success h-100 arrow-prev"
        >
          <chevron-left class="arrow-icon chevron-left"></chevron-left>
        </div>
        </transition>
        <transition
          name="slide-fade"
        >
        <div @click="handleNext" v-if="currentStepIndex < 9" class="quest-arrow-container bg-success h-100 arrow-next">
          <chevron-right class="arrow-icon chevron-right"></chevron-right>
        </div>
        </transition>
      </div>


      <div class="mobile-button-container d-block d-md-none">
        <transition
          name="slide-fade"
        >
        <div 
          @click="handlePrev" 
          v-if="currentStepIndex > 0" 
          class="quest-arrow-container mobile bg-success h-100 arrow-prev"
        >
          <chevron-left class="arrow-icon chevron-left"></chevron-left>
        </div>
        </transition>
        <div class="line"></div>
        <transition
          name="slide-fade"
        >
        <div @click="handleNext" v-if="currentStepIndex < 9" class="quest-arrow-container mobile bg-success h-100 arrow-next">
          <chevron-right class="arrow-icon chevron-right"></chevron-right>
        </div>
        </transition>
      </div>
    </div>
</template>

<script>
import GameQuestion from '~/components/GameQuestion';
import ChevronRight from '~/components/ChevronRight';
import ChevronLeft from '~/components/ChevronLeft';
import {fireDb} from '~/plugins/firebase.js'

export default {
  components: {
    GameQuestion,
    ChevronRight,
    ChevronLeft
  },
  async mounted() {
    if(!this.$store.state.email && this.$route.query.id) {
      const userID = this.$route.query.id;
      // console.log(userID);
      
      const ref = fireDb.collection("users").doc(userID);

      let snap
      try {
        snap = await ref.get()
        console.log(snap.data().email);
        this.$store.commit('setEmail', snap.data().email);
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
    }
  },
  data() {
    const gameQuestions = [
      {
        title: 'Mind',
        question: 'How fulfilled are you in your mental and emotional health? ',
        text: `Low: High stress, low resilience, unhealthy beliefs and focus, depressed, anxious, low self-esteem, 
              low confidence. High: Low stress, high resilience, healthy beliefs and focus, clear-minded, at peace, 
              confident, centered, grounded.`,
        value: 0,
        color: "#0059b9"
      },
      {
        title: 'Mission',
        text: 'How fulfilled are you in knowing and living your mission, work that is meaningful to you?',
        value: 0,
        color: "#ff6800"
      },
      {
        title: 'Vitality',
        text: 'How fulfilled are you in your physical health and well-being, and having the energy to do the things you want?',
        value: 0,
        color: "#76b72b"
      },
      {
        title: 'Love',
        text: 'How fulfilled are you in experiencing feelings of intimacy, love for self and others, and actively living with love?',
        value: 0,
        color: "#c22832"
      },
      {
        title: 'Fun',
        text: 'How fulfilled are you in having fun, being playful, and enjoying the lighter side of yourself and your life?',
        value: 0,
        color: "#f9e777"
      },
      {
        title: 'Social',
        text: 'How are you doing at staying in touch and feeling connected with the people who mean the most to you?',
        value: 0,
        color: "#61a5e3"
      },
      {
        title: 'Home',
        text: 'How fulfilled are you with your home and the current state of your physical surroundings?',
        value: 0,
        color: "#72655f"
      },
      {
        title: 'Wealth',
        text: ' How are you doing at having enough money to do what you want, enjoying financial security, and having the skills and mindset to grow your wealth?',
        value: 0,
        color: "#c5c5c5"
      }
    ]
    return {
      gameQuestions,
      currentStepIndex: 0,
    }
  },
  methods: {
    handlePrev() {
      if (this.currentStepIndex > 0)
        this.currentStepIndex--;
    },
    handleNext() {
      if (this.currentStepIndex < 9)
        this.currentStepIndex++;
    },
    handleChange(newVal) {
      this.gameQuestions[this.currentStepIndex].value = newVal;
    }
  },
  computed: {
    currentProperties() {
      return {
        text: this.gameQuestions[this.currentStepIndex].text,
        color: this.gameQuestions[this.currentStepIndex].color,
        value: this.gameQuestions[this.currentStepIndex].value,
        title: this.gameQuestions[this.currentStepIndex].title,
        question: this.gameQuestions[this.currentStepIndex].question || '',
      }
    }
  }
}
</script>

<style scoped>
  .main-container {
    background: #ebebeb;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .line {
    position: absolute;
    top: 10%;
    right: 50vw;
    z-index: 5;
    width: 1px;
    height: 80%;
    background: linear-gradient(to bottom, #28a745 0%, #ebebeb 50%, #28a745 100%);
  }

  .button-container {
    overflow: hidden;
    height: 60vh;
    width: 100%;
    position: absolute;
    top: 20vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mobile-button-container {
    height: 5vh;
    position: absolute;
    bottom: 0;
    overflow: hidden;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
  }

  .arrow-next {
    position: absolute;
    right: 0;
  }

  .arrow-prev {
    position: absolute;
    left: 0;
  }

  .quest-arrow-container {
    cursor: pointer;
    width: 8vw;
    display: flex;
  }

  @media screen and (max-width: 760px) {
    .quest-arrow-container {
      width: 50%;
    } 

    .arrow-next:hover .arrow-icon {
      transform: scale(1) translateX(0);
    }

    .arrow-next {
      display: flex;
      justify-content: center;
    }

    .arrow-prev {
      display: flex;
      justify-content: center;
    }
  }

  .arrow-next:hover .arrow-icon {
    transform: scale(1.3) translateX(-1vw);
  }

  .arrow-prev:hover .arrow-icon {
    transform: scale(1.3) translateX(1vw);
  }

  .arrow-icon {
    height: 100%;
    width: auto;
    transition: 0.5s all ease-in-out;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>