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
  async asyncData({query, store}) {

    const gameQuestions = [
      {
        id: 'mission',
        title: 'Mission',
        titleComponent: 'MissionText',
        text: 'How fulfilled are you in knowing and living your mission, work that is meaningful to you?',
        lowDescription: 'Struggling to figure out what to do with your life or working a job that is not fulfilling.',
        highDescription: 'Fully engaged in meaningful and satisfying work. Making a positive impact in the world.',
        value: store.state.quest.gameScores.mission,
        color: "#ff6800"
      },
      {
        id: 'mind',
        title: 'Mind',
        titleComponent: 'MindText',
        text: `How fulfilled are you in your mental and emotional health?`,
        lowDescription: 'Stressed out, unhealthy beliefs and/or focus, depressed, anxious, low self-esteem, low confidence.',
        highDescription: 'High resilience, healthy focus, clear-minded, at peace, confident, centered, grounded.',
        value: store.state.quest.gameScores.mind,
        color: "#0059b9"
      },
      {
        id: 'fun',
        title: 'Fun',
        titleComponent: 'FunText',
        text: 'How fulfilled are you in having fun, being playful, and enjoying the lighter side of yourself and your life?',
        lowDescription: 'Not having fun, feeling miserable and stuck, too serious, all work and no play.',
        highDescription: 'Enjoying your life, smiling and laughing, hobbies and recreation, feeling playful, work/life balance.',
        value: store.state.quest.gameScores.fun,
        color: "#f9e777"
      },
      {
        id: 'social',
        title: 'Social',
        titleComponent: 'SocialText',
        text: 'How are you doing at staying in touch and feeling connected with the people who mean the most to you?',
        lowDescription: 'Feeling isolated, lonely, struggling to make and maintain friendships, low trust in others.',
        highDescription: 'Enjoying a rich, satisfying social life with people you trust and enjoy spending time with.',
        value: store.state.quest.gameScores.social,
        color: "#61a5e3"
      },
      {
        id: 'home',
        title: 'Home',
        titleComponent: 'HomeText',
        text: 'How fulfilled are you with your home and the current state of your physical surroundings?',
        lowDescription: 'Home problems, mess/clutter, home getting in the way of your well-being in other areas.',
        highDescription: 'Home life is comfortable, safe, clean. Your home is a source of happiness.',
        value: store.state.quest.gameScores.home,
        color: "#72655f"
      },
      {
        id: 'love',
        title: 'Love',
        titleComponent: 'LoveText',
        text: 'How fulfilled are you in experiencing feelings of intimacy, love for self and others, and actively living with love?',
        lowDescription: 'Avoiding love, feeling hurt, struggling to feel, or receive love. Lacking loving relationships.',
        highDescription: 'In love / feeling content with relationships, enjoying feeling, expressing and receiving love.',
        value: store.state.quest.gameScores.love,
        color: "#c22832"
      },
      {
        id: 'wealth',
        title: 'Wealth',
        titleComponent: 'WealthText',
        text: ' How are you doing at having enough money to do what you want, enjoying financial security, and having the skills and mindset to grow your wealth?',
        lowDescription: 'Money is an obstacle, stressed about money, spending more than you make, too much debt.',
        highDescription: "Money isn't an obstacle, in control of your finances, saving for the future, working with a budget.",
        value: store.state.quest.gameScores.wealth,
        color: "#FFD700"
      },
      {
        id: 'vitality',
        title: 'Vitality',
        titleComponent: 'VitalityText',
        text: 'How fulfilled are you in your physical health and well-being, and having the energy to do the things you want?',
        lowDescription: 'Low energy, little movement, poor food and drink choices, feeling weak, lethargic, and unhealthy.',
        highDescription: 'Lots of energy, healthy food and drink choices, feeling strong and energized.',
        value: store.state.quest.gameScores.vitality,
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
        this.$store.commit('quest/setGameScore', {id: this.gameQuestions[this.currentStepIndex].id, newScore: this.gameQuestions[this.currentStepIndex].value});
        this.currentStepIndex--;
        this.$router.push(`?step=${this.currentStepIndex}`);
      }
    },
    handleNext() {
      if (this.currentStepIndex < 7) {
        this.$store.commit('quest/setGameScore', {id: this.gameQuestions[this.currentStepIndex].id, newScore: this.gameQuestions[this.currentStepIndex].value});
        this.currentStepIndex++;
        this.$router.push(`?step=${this.currentStepIndex}`);
      } else { // current-index is 7
        this.handleResults();
      }
    },
    handleResults() {
      // Set the score for the last stage first
      this.$store.commit('quest/setGameScore', {id: this.gameQuestions[this.currentStepIndex].id, newScore: this.gameQuestions[this.currentStepIndex].value});
      this.$store.commit('quest/setPlayerText');
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
    ...mapState({
      gameScores: state => state.quest.gameScores
    })
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