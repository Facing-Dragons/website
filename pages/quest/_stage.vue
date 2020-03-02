<template>
<!-- This is the welcome page of the quest to tell the players what they're doing and stuff -->
    <div class="main-container">
        <game-question
          v-bind="currentProperties"
          @change="handleChange"
        >
            <transition
                name="slide-fade"
                mode="out-in"
            >
                <component :is="currentTextComponent"></component>
            </transition>
        </game-question>
      <div class="button-container d-none d-md-block">
        <transition
          name="slide-fade"
        >
        <div 
          @click="handlePrev" 
          v-if="currentStepIndex > 0" 
          class="quest-arrow-container bg-success h-100 arrow-prev rounded-right"
        >
          <chevron-left class="arrow-icon chevron-left"></chevron-left>
        </div>
        </transition>
        <transition
          name="slide-fade"
        >
        <div @click="handleNext" v-if="currentStepIndex < 7" class="quest-arrow-container bg-success h-100 arrow-next rounded-left">
          <chevron-right class="arrow-icon chevron-right"></chevron-right>
        </div>
        <div @click="handleResults" v-else class="quest-arrow-container bg-warning h-100 arrow-next last-next rounded-left">
          <chevron-right class="arrow-icon chevron-right" fill="black"></chevron-right>
          <div class="arrow-text">
            RESULTS
          </div>
        </div>
        </transition>
      </div>

      <!-- MOBILE ARROWS -->

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
        <div @click="handleNext" v-if="currentStepIndex < 7" class="quest-arrow-container mobile bg-success h-100 arrow-next">
          <chevron-right class="arrow-icon chevron-right" fill="white"></chevron-right>
        </div>
        <div @click="handleResults" v-else class="quest-arrow-container mobile bg-warning h-100 last-next-mobile arrow-next">
          <chevron-right class="arrow-icon chevron-right" fill="black" ></chevron-right>
        </div>
        </transition>
      </div>
    </div>
</template>

<script>
import GameQuestion from '~/components/GameQuestion';
import ChevronRight from '~/components/ChevronRight';
import ChevronLeft from '~/components/ChevronLeft';
import MindText from '~/components/MindText';
import LoveText from '~/components/LoveText';
import FunText from '~/components/FunText';
import VitalityText from '~/components/VitalityText';
import WealthText from '~/components/WealthText';
import HomeText from '~/components/HomeText';
import SocialText from '~/components/SocialText';
import MissionText from '~/components/MissionText';
import {fireDb} from '~/plugins/firebase.js'
import {mapState} from 'vuex';

export default {
  components: {
    GameQuestion,
    ChevronRight,
    ChevronLeft,
    MindText,
    LoveText,
    FunText,
    VitalityText,
    WealthText,
    HomeText,
    SocialText,
    MissionText
  },
  async mounted() {
    //  Here we need a call to the API in order to load the user scores 
    //  Then submit them to the store


    //   const 
    // if(!this.$store.state.email && this.$route.query.id) {
    //   const userID = this.$route.query.id;
      // console.log(userID);
      
    //   const ref = fireDb.collection("users").doc(userID);

    //   let snap
    //   try {
    //     snap = await ref.get()
    //     console.log(snap.data().email);
    //     this.$store.commit('setEmail', snap.data().email);
    //   } catch (e) {
    //     // TODO: error handling
    //     console.error(e)
    //   }
    // }
  },
  async asyncData({query, store}) {
    /**
     * 
     * REPLACE RANDOM READING WITH FIREDB READING
     * 
     */
    var randomGameScores = {
        mindScore: Math.floor(Math.random() * 10),
        missionScore: Math.floor(Math.random() * 10),
        vitalityScore: Math.floor(Math.random() * 10),
        loveScore: Math.floor(Math.random() * 10),
        funScore: Math.floor(Math.random() * 10),
        socialScore: Math.floor(Math.random() * 10),
        homeScore: Math.floor(Math.random() * 10),
        wealthScore: Math.floor(Math.random() * 10),
    };
    store.commit('quest/setAllScores', randomGameScores);

    const gameQuestions = [
      {
        title: 'Mind',
        titleComponent: 'MindText',
        text: `How fulfilled are you in your mental and emotional health?`,
        value: randomGameScores.mindScore,
        color: "#0059b9"
      },
      {
        title: 'Mission',
        titleComponent: 'MissionText',
        text: 'How fulfilled are you in knowing and living your mission, work that is meaningful to you?',
        value: randomGameScores.missionScore,
        color: "#ff6800"
      },
      {
        title: 'Vitality',
        titleComponent: 'VitalityText',
        text: 'How fulfilled are you in your physical health and well-being, and having the energy to do the things you want?',
        value: randomGameScores.vitalityScore,
        color: "#76b72b"
      },
      {
        title: 'Love',
        titleComponent: 'LoveText',
        text: 'How fulfilled are you in experiencing feelings of intimacy, love for self and others, and actively living with love?',
        value: randomGameScores.loveScore,
        color: "#c22832"
      },
      {
        title: 'Fun',
        titleComponent: 'FunText',
        text: 'How fulfilled are you in having fun, being playful, and enjoying the lighter side of yourself and your life?',
        value: randomGameScores.funScore,
        color: "#f9e777"
      },
      {
        title: 'Social',
        titleComponent: 'SocialText',
        text: 'How are you doing at staying in touch and feeling connected with the people who mean the most to you?',
        value: randomGameScores.socialScore,
        color: "#61a5e3"
      },
      {
        title: 'Home',
        titleComponent: 'HomeText',
        text: 'How fulfilled are you with your home and the current state of your physical surroundings?',
        value: randomGameScores.homeScore,
        color: "#72655f"
      },
      {
        title: 'Wealth',
        titleComponent: 'WealthText',
        text: ' How are you doing at having enough money to do what you want, enjoying financial security, and having the skills and mindset to grow your wealth?',
        value: randomGameScores.wealthScore,
        color: "#FFD700"
      }
    ]
    return {
      gameQuestions,
      currentStepIndex: query.step || 0,
    }
  },
  methods: {
    handlePrev() {
      if (this.currentStepIndex > 0) {
        this.$store.commit('quest/setGameScore', {index: this.currentStepIndex, newScore: this.gameQuestions[this.currentStepIndex].value});
        this.currentStepIndex--;
        this.$router.push(`?step=${this.currentStepIndex}`);
      }
    },
    handleNext() {
      if (this.currentStepIndex < 7) {
        this.$store.commit('quest/setGameScore', {index: this.currentStepIndex, newScore: this.gameQuestions[this.currentStepIndex].value});
        this.currentStepIndex++;
        this.$router.push(`?step=${this.currentStepIndex}`);
      }
    },
    handleResults() {
      // Set the score for the last stage first
      this.$store.commit('quest/setGameScore', {index: this.currentStepIndex, newScore: this.gameQuestions[this.currentStepIndex].value});
      this.$router.push('/quest/result');
    },
    handleChange(newVal) {
      this.gameQuestions[this.currentStepIndex].value = newVal;
      // this.$store.commit('quest/setGameScore', {index: this.currentStepIndex, newScore: newVal});
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
    },
    currentTextComponent() {
      return this.gameQuestions[this.currentStepIndex].titleComponent;
    },
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
    height: 19vh;
    width: 100%;
    position: absolute;
    top: 46vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mobile-button-container {
    height: 5vh;
    position: fixed;
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
    transition: all .5s ease;
  }

  .quest-arrow-container:hover {
    background-color: #23913c !important
  }

  .last-next {
    justify-content: center;
    align-items: center;
  }

  .last-next:hover {
    background-color: #e6ae07 !important
  }

  .last-next-mobile:hover {
    background-color: #e6ae07 !important
  }

  .arrow-text {
    font-weight: 700;
    font-size: 1.2rem;
    position: absolute;
    bottom: 0.15rem;
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
    transition: all .3s ease-in-out;
  }
  .slide-fade-leave-active {
    transition: all .3s ease-in-out;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(2px);
    opacity: 0;
  }
</style>