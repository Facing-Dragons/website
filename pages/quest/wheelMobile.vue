<template>
<!-- This is the welcome page of the quest to tell the players what they're doing and stuff -->
    <div class="main-container">
        <!-- <game-question
          v-if="$device.isDesktopOrTablet"
          v-bind="currentProperties"
          :is-last-step="currentStepIndex === 7"
          @change="handleChange"
          @next="handleNext"
        >
            <transition
                name="slide-fade"
                mode="out-in"
            >
                <component :is="currentTextComponent"></component>
            </transition>
        </game-question> -->
        <!-- This is just for mobile phones -->
        <game-question-mobile
          v-bind="currentProperties"
          :is-last-step="currentStepIndex === 7"
          @change="handleChange"
          @next="handleNext"
        >
            <transition
                name="slide-fade"
                mode="out-in"
            >
                <component :is="currentTextComponent"></component>
            </transition>
        </game-question-mobile>
    </div>
</template>

<script>
import GameQuestion from '~/components/GameQuestion';
import GameQuestionMobile from '~/components/GameQuestionMobile';
import ChevronRight from '~/components/ChevronRight';
import ChevronLeft from '~/components/ChevronLeft';
import MindText from '~/components/svg/MindText';
import LoveText from '~/components/svg/LoveText';
import FunText from '~/components/svg/FunText';
import VitalityText from '~/components/svg/VitalityText';
import WealthText from '~/components/svg/WealthText';
import HomeText from '~/components/svg/HomeText';
import SocialText from '~/components/svg/SocialText';
import MissionText from '~/components/svg/MissionText';
import {fireDb} from '~/plugins/firebase.js'
import {mapState} from 'vuex';

export default {
  layout: 'quest',
  components: {
    GameQuestion,
    GameQuestionMobile,
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
  watchQuery(newQ, oldQ) {
    this.currentStepIndex = Number(newQ.step);
  },
  created() {
    // screen.orientation.lock('portrait');
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
        mission: Math.floor(Math.random() * 10),
        mind: Math.floor(Math.random() * 10),
        fun: Math.floor(Math.random() * 10),
        social: Math.floor(Math.random() * 10),
        home: Math.floor(Math.random() * 10),
        love: Math.floor(Math.random() * 10),
        wealth: Math.floor(Math.random() * 10),
        vitality: Math.floor(Math.random() * 10),
    };
    store.commit('quest/setAllScores', randomGameScores);

    const gameQuestions = [
      {
        title: 'Mission',
        titleComponent: 'MissionText',
        text: 'How fulfilled are you in knowing and living your mission, work that is meaningful to you?',
        lowDescription: 'Struggling to figure out what to do with your life, under pressure to find a meaningful career path, stressed out working a job you hate',
        highDescription: 'Enjoying work so much it doesn’t feel like work, making a difference or positive impact in the world, fully engaged in meaningful and satisfying work.',
        value: randomGameScores.mission,
        color: "#ff6800"
      },
      {
        title: 'Mind',
        titleComponent: 'MindText',
        text: `How fulfilled are you in your mental and emotional health?`,
        lowDescription: 'High stress, low resilience, unhealthy beliefs and focus, depressed, anxious, low self-esteem, low confidence.',
        highDescription: 'Low stress, high resilience, healthy beliefs and focus, clear-minded, at peace, confident, centered, grounded.',
        value: randomGameScores.mind,
        color: "#0059b9"
      },
      {
        title: 'Fun',
        titleComponent: 'FunText',
        text: 'How fulfilled are you in having fun, being playful, and enjoying the lighter side of yourself and your life?',
        lowDescription: 'Not having fun, feeling miserable and stuck, too serious, all work and no play.',
        highDescription: 'Having fun, feeling relaxed and enjoying your life, smiling and laughing a lot, engaged in extracurricular activities, hobbies and recreation, feeling playful and happy, good work/life balance.',
        value: randomGameScores.fun,
        color: "#f9e777"
      },
      {
        title: 'Social',
        titleComponent: 'SocialText',
        text: 'How are you doing at staying in touch and feeling connected with the people who mean the most to you?',
        lowDescription: 'Not feeling connected to the people around you, feeling isolated, lonely, struggling to make and maintain friendships, feeling betrayed, low trust in others.',
        highDescription: 'Feeling connected to the people around you, enjoying a rich, satisfying social life with people you trust and enjoy spending time with.',
        value: randomGameScores.social,
        color: "#61a5e3"
      },
      {
        title: 'Home',
        titleComponent: 'HomeText',
        text: 'How fulfilled are you with your home and the current state of your physical surroundings?',
        lowDescription: 'You don’t like your home, don’t have a home, home is a mess, don’t feel like your surroundings are a true reflection of who you are.',
        highDescription: 'You enjoy your home and the world around you, home is comfortable, safe, clean and organized. Your surroundings are a true reflection of who you are.',
        value: randomGameScores.home,
        color: "#72655f"
      },
      {
        title: 'Love',
        titleComponent: 'LoveText',
        text: 'How fulfilled are you in experiencing feelings of intimacy, love for self and others, and actively living with love?',
        lowDescription: 'Given up on love or finding love, feeling hurt from a break-up or relationship, struggling to feel, express and receive love.',
        highDescription: 'In love, feeling content with current relationship situation, enjoying feeling, expressing and receiving love.',
        value: randomGameScores.love,
        color: "#c22832"
      },
      {
        title: 'Wealth',
        titleComponent: 'WealthText',
        text: ' How are you doing at having enough money to do what you want, enjoying financial security, and having the skills and mindset to grow your wealth?',
        lowDescription: 'Money is an obstacle, stressed about money, in debt with no foreseeable way out, not sticking to a budget, getting by on credit cards, bills piling up, spending more than you make.',
        highDescription: 'Money is a tool, feeling affluent, in control of your finances, making more than you spend, saving for the future, making smart investments, working with a budget.',
        value: randomGameScores.wealth,
        color: "#FFD700"
      },
      {
        title: 'Vitality',
        titleComponent: 'VitalityText',
        text: 'How fulfilled are you in your physical health and well-being, and having the energy to do the things you want?',
        lowDescription: 'Low energy, little movement, poor food and drink choices, feeling weak, lethargic, and unhealthy.',
        highDescription: 'Lots of energy and movement, healthy food and drink choices, feeling strong and energized.',
        value: randomGameScores.vitality,
        color: "#76b72b"
      }
    ]
    return {
      gameQuestions,
      currentStepIndex: Number(query.step) || 0,
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
      } else { // current-index is 7
        this.handleResults();
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
        lowDescription: this.gameQuestions[this.currentStepIndex].lowDescription || '',
        highDescription: this.gameQuestions[this.currentStepIndex].highDescription || '',
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
    height: 100vh;
    overflow: hidden;
    background: white;
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