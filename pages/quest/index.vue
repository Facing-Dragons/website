<template>
  <div class="container-fluid main-landing-container d-flex align-items-center">
    <div class="container">
      <div class="row player-texts" v-if="isPlayer">
        <div class="col-12 col-lg-8 offset-0 offset-lg-2 quest-titles">
          <b-card no-body class="player-quest-card shadow-sm p-4 mt-5 mt-xl-0 d-flex flex-column justify-content-between">
            <div class="card-badge bg-success rounded-left" id="time-badge">
              <font-awesome-icon icon="clock"/>
              <span>
                3-5 Minutes
              </span>
            </div>
            <!-- <div class="card-badge rounded-bottom bg-danger" id="reward-badge">
              <font-awesome-icon icon="gift"/>
              <span>
                Player Class Reveal
              </span>
            </div> -->
            <div class="quest-card-title mb-2">
              <wheel-text></wheel-text>
            </div>
            <div class="quest-card-text">
              <p v-html="questText">
              </p>
            </div>
            <b-button to="/quest/1?step=0" class="card-button rounded">
              Start!
            </b-button>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quest-card-title {
  max-width: 60%;

  @media screen and (max-width: 1920px) {
    max-width: 47%;
  }

  @media screen and (max-width: 1200px) {
    max-width: 70%;
  }
}

.main-landing-container {
  background: #ebebeb;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  // overflow: hidden;
  padding-top: 5rem;
  padding-bottom: 5rem;

  @media screen and (max-width: 1200px) {
    padding-left: 0;
    padding-right: 0;
  }
}

.player-quest-card {
  position: relative;
  // min-height: 80vh;
}

.card-button {
  font-size: 1.5rem;
  font-weight: 700;
  background: #f9b038;
  color: #303030;
  border: none;
  outline: none;
  width: 100%;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: #1f1f1f;
    background: #e26e0a;
  }

  @media screen and (max-width: 1200px) {
    font-size: 2.5rem;
    margin-top: 0.5rem;
  }
}

.card-badge {
  position: absolute;
  right: 0;
  top: 2%;
  width: 10rem;
  height: 4rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1200px) {
    font-weight: 600;
  }

}

.quest-card-text {
  font-size: 1.2rem;

  @media screen and (max-width: 1200px) {
    font-size: 1.7rem;
  }
}

</style>

<script>
import {mapState} from 'vuex';
import WheelText from '~/components/WheelText'
export default {
  components: {
    WheelText
  },
  computed: {
    ...mapState({
      isSupport: state => state.quest.isSupport, 
      isPlayer: state => state.quest.isPlayer
    }),
    questText() {
      if (this.isSupport) {
        return `You are about to see the Life Wheel quest. This introduces players to a useful self-reflection and life fulfillment report cycle. Take note of how you might find this type of information about your clients useful in your practice. <br><br> Give it a try and see how easy and fun it is to engage with!`;
      } else {
        return `Welcome! You are about to start your first quest in the Facing Dragons world. You will be asked to honestly consider how you feel in eight key areas of your life. You will be rewarded by unveiling your player class at the end. <br><br>
        Trust your instincts! Are you ready to begin?`
      }
    }
  }
  
}
</script>