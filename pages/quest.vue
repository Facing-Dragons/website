<template>
    
</template>

<script>
import GameQuestion from '~/components/GameQuestion';
export default {
  data() {
    const gameQuestions = [
      {
        title: 'Mind',
        text: 'How fulfilled are you in your mental and emotional health?',
        value: 0
      },
      {
        title: 'Mission',
        text: 'How fulfilled are you in knowing and living your mission, work that is meaningful to you?',
        value: 0
      },
      {
        title: 'Vitality',
        text: 'How fulfilled are you in your physical health and well-being, and having the energy to do the things you want?',
        value: 0
      },
      {
        title: 'Love',
        text: 'How fulfilled are you in experiencing feelings of intimacy, love for self and others, and actively living with love?',
        value: 0
      },
      {
        title: 'Fun',
        text: 'How fulfilled are you in having fun, being playful, and enjoying the lighter side of yourself and your life?',
        value: 0
      },
      {
        title: 'Connection',
        text: 'How are you doing at staying in touch and feeling connected with the people who mean the most to you?',
        value: 0
      },
      {
        title: 'Home',
        text: 'How fulfilled are you with your home and the current state of your physical surroundings?',
        value: 0
      },
      {
        title: 'Wealth',
        text: ' How are you doing at having enough money to do what you want, enjoying financial security, and having the skills and mindset to grow your wealth?',
        value: 0
      }
    ]
    return {
      gameQuestions,
    }
  }
}
</script>

<style scoped>

</style>