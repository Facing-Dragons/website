<template>
    <b-container id="team-section" fluid class="team-container-fluid">
        <!-- <transition name="fade"> -->
          <div v-show="isOverlayShown">
            <div class="overlay">
              <div 
                @click.stop="() => {isOverlayShown = false}" 
                class="overlay-background">
              </div>
              <b-card
                no-body
                class="mb-2 overlay-foreground d-flex text-center text-md-left"
              >
                <b-row no-gutters>
                  <b-col md="6" class="d-flex justify-content-center align-items-center">
                    <b-card-img 
                      :src="require(`~/assets/img/team/icon/${currentMember.icon}`)"
                      class="card-image rounded-0 p-5">
                    </b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body :title="currentMember.name" :sub-title="currentMember.role">
                      <b-card-text class="desc mt-4">
                        {{ currentMember.description }}
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </div>
        <!-- </transition> -->
        <b-container 
            class="team-container"
        >
            <section-title 
                class="pt-5"
                title-text="Meet The Team"
                text-gradient="linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);"
                line-gradient="linear-gradient(to left, black 0%, #f9d423 100%)"
            ></section-title>
            <div class="row">
              <div 
                v-for="(member, index) in teamMembers"
                :key="index"
                class="col-12 col-md-4 my-4 my-md-0 team-member-container"
                @click="() => handleClick(index)"
              >
                <div class="new-slide-content text-center d-flex flex-column justify-content-center h-100 align-items-center">
                  <b-img
                    height="200px"
                    rounded="circle"
                    :src="require(`~/assets/img/team/${member.image}`)"
                  >
                  </b-img>
                  <div class="name my-1">
                    {{ member.name }}
                  </div>
                  <div class="role">
                    {{ member.role }}
                  </div>
                </div>
              </div>
            </div>
        </b-container>
    </b-container>
</template>

<script>
// import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import SectionTitle from '~/components/SectionTitle';
export default {
    name: "newTeamSection",
    components: {
        SectionTitle,
        // swiper,
        // swiperSlide
    },
    data() {
      const teamMembers = [
            { 
                name: "Brodie Whitney",
                role: "CEO",
                shortText: "What if we could make a game that engaged people in their life as much as these video games",
                description: `on a mission to co-create a mixed-reality, self-care game that helps people 
                unlock their purpose and empowers the next generation of leaders.
                Favourite Video Game: Deja Vu
                Fun Fact: Lived in a tipi in the woods.`,
                image: "brodie.jpg",
                icon: "brodie.png",
                backgroundImage: "manager_pattern.jpg",
                socialMedia: [
                    {
                        name: "Facebook",
                        link: "",
                        icon: "fab facebook"
                    },
                    {
                        name: "Twiiter",
                        link: "",
                        icon: "fab twitter"
                    },
                    {
                        name: "Instagram",
                        link: "",
                        icon: "fab instagram"
                    }
                ]
            },
            { 
                name: "Dov “Rallos” Schafer",
                role: "Design Director",
                description: `Dov is PhD candidate in Educational Technology at Simon Fraser University 
                  in British Columba. He is studying peoples’ intrinsic motivation to play video games and 
                  how to create mixed reality games that support positive personal growth. Dov is a lifelong 
                  game enthusiast with a deep knowledge of design and mechanics.

                  Favorite Game: EverQuest Classic; WoW up until WOTLK; I used to be in the top guild in the 
                  world in both EQ and WOW (nerd alert) Also I love boardgames like Star Realms, Dune, 
                  Mageknight…
                  Favorite Dragon: They are like babies to me… don’t make me choose just one. Ok fine, 
                  Helios – I like that he can see the future.
                  Fun Facts:  Dov means Bear in hebrew. I have a culinary degree, and I have lost 
                  over 120lbs since I was 20 years old.
                  Oh I also have a 3 year old boy, and a baby girl scheduled 
                  to start public beta in August`,
                image: "dov.png",
                icon: "dov.png",
                backgroundImage: "dov_pattern.png",
                socialMedia: [
                    {
                        name: "Facebook",
                        link: "",
                        icon: "fab facebook"
                    },
                    {
                        name: "Twiiter",
                        link: "",
                        icon: "fab twitter"
                    },
                    {
                        name: "Instagram",
                        link: "",
                        icon: "fab instagram"
                    }
                ]
            },
            { 
                name: `Osama "Dorgam" Alsalman`,
                role: "Lead Game Developer",
                description: `If Osama isn't spending his time making games, he is probably playing them! 
                His toolbelt include skills in game programming, game design and narrative. He is a strong 
                believer in games as an art form and aims to deliver meaningful experiences through them.
                Unique Facts: Osama's games won many awards including the 2017 Excellence in Design award 
                in the International Mobile Game Awards - MENA
                Favorite Game: Dishonored
                Favorite Dragon: Enthuz - The Play Dragon`,
                image: "osama.jpg",
                icon: "osama.png",
                backgroundImage: "gamer2_pattern.jpg",
                socialMedia: [
                    {
                        name: "Facebook",
                        link: "",
                        icon: "fab facebook"
                    },
                    {
                        name: "Twiiter",
                        link: "",
                        icon: "fab twitter"
                    },
                    {
                        name: "Instagram",
                        link: "",
                        icon: "fab instagram"
                    }
                ]
            },
            { 
                name: "Mohammad Rajabi Seraji",
                role: "Senior UI/UX Developer",
                description: `He's a mystery man, you should visit his website to know more about him. It's enough to know that he's quite a snow man! :D `,
                image: "moh.jpg",
                icon: "moh.png",
                backgroundImage: "programmer2_pattern.jpg",
                socialMedia: [
                    {
                        name: "Facebook",
                        link: "",
                        icon: "fab facebook"
                    },
                    {
                        name: "Twiiter",
                        link: "",
                        icon: "fab twitter"
                    },
                    {
                        name: "Instagram",
                        link: "",
                        icon: "fab instagram"
                    }
                ]
            },
            { 
                name: "Celia 'Cil' Cheung",
                role: "Lead Artist",
                description: `Cil is the art monkey of the team! She brings to the table years of experience 
                with gaming startups and an animation industry background, and is keen on advocating for mental 
                health wellness among gamers and game-makers alike.
                Favourite Dragon: Amora, the Love Dragon
                Unique Facts: Owns a small car and a large cat, was once a martial arts 
                lion dancer, and is just starting to learn archery!`,
                image: "cil.jpg",
                icon: "cil.png",
                backgroundImage: "cil_pattern.png",
                socialMedia: [
                    {
                        name: "Facebook",
                        link: "",
                        icon: "fab facebook"
                    },
                    {
                        name: "Twiiter",
                        link: "",
                        icon: "fab twitter"
                    },
                    {
                        name: "Instagram",
                        link: "",
                        icon: "fab instagram"
                    }
                ]
            },
            { 
                name: "Alyssa Castle",
                role: "Media Manager",
                description: `Alyssa is a Media Wizard by day and avid Minecrafter by night. 
                  She joined the team as a way to face her own dragons and experience fulfillment 
                  in her career. Alyssa is passionate about mental health efforts and is looking 
                  forward to making a difference in the world - especially for fellow gamers!
                  Favourite Dragon: Currently Mentano, the Mind Dragon
                  Unique Facts: Alyssa has two rescue dogs, an unhealthy obsession with spreadsheets, 
                  and drinks too much coffee.`,
                image: "alyssa.jpg",
                icon: "alyssa.png",
                backgroundImage: "alyssa_pattern.png",
                socialMedia: [
                    {
                        name: "Facebook",
                        link: "",
                        icon: "fab facebook"
                    },
                    {
                        name: "Twiiter",
                        link: "",
                        icon: "fab twitter"
                    },
                    {
                        name: "Instagram",
                        link: "",
                        icon: "fab instagram"
                    }
                ]
            },
        ];
      return {
        teamMembers,
        isOverlayShown: false,
        currentMember: teamMembers[0]
      }
    },
    methods: {
      handleClick(index) {
        this.currentMember = this.teamMembers[index];
        this.isOverlayShown = true;
      }
    },
}
</script>


<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  z-index: 6;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.desc {
  font-weight: 500;
  font-size: 1vw;
  text-align: justify;
  color: #2e2e2e;
}

.overlay {
  position: fixed;
  overflow-y: auto;
  z-index: 6;
  width: 100vw;
  height: 100vh;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transition: 0.3s all ease-in-out; */
}

.overlay-background {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 8;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.team-member-container {
  cursor: pointer;
}

.overlay-foreground {
  z-index: 12;
  // position: fixed;
  // top: 10vh;
  // max-width: 50vw;
  background: #ebebeb;
   transition: 0.5s all ease-in-out;
  transition-delay: 1s;
  max-width: 60vw;
  // .card-text {
  //   font-size: 1vw;
  // }
}

@media screen and (max-width: 760px) {
  .overlay-foreground {
    max-width: 85vw;
  }

  .desc {
    font-size: 2.8vw;
  }

  .card-img {
    width: 80%;
  }
}

// .card-image {
//   width: 50%;
//   height: auto;
// }

.team-container-fluid {
    /* margin-top: 100vh; */
    // min-height: 100vh;
    position: relative;
}

.name {
  font-weight: 500;
  font-size: calc(1.1rem + 0.5vw);
  color: #ebebeb;
}

.role {
  color: #ebebeb;
}



.slide-content {
    height: calc(300px + 10vw);
    // transition: 1s all ease-in-out;
    padding: 2rem;

    // &::before {
    //   content: "";
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   position: absolute;
    //   background-image: url('~assets/img/dragon_palettes_02.jpg');
    //   filter: grayscale(100%) blur(5px);
    //   background-size: cover;
    //   transition: 0.2s all ease-in-out;
    // }
    &:hover .card-pattern {
      filter: grayscale(0%) blur(1px);
      transition: 0.2s all ease-in-out;
    }

    &:hover .member-frame {
      width: 95%;
      height: 105%;
    }
}

.member-frame {
  width: 90%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
  position: relative;
  background: #121212;
  padding: 1rem;
  transition: 0.2s all ease-in-out;
}

.frame {
  position: absolute;
  top: -7px;
  right: -4px;
  height: 103%;
  /* position: absolute; */
  z-index: 1;
  width: 102%;
}

.member-image {
  width: 100%;
  height: 65%;
  top: 0;
  right: 0;
  left: 0;
  position: absolute;
}

// .new-swiper-slide {
//   height: 30vh;
// }

.swiper-pagination-bullet {
  height: 12px;
  width: 12px;
  background: #ebebeb;
  display: inline-block;
  border-radius: 100%;
  opacity: 0.2;
}

.img-border-bottom {
  width: 100%;
  background: linear-gradient(to right, black 0%, #f9d423 50%, black 100%);
  height: 8px;
  z-index: 2;
  position: absolute;
  top: 65%;
  left: 0;
}

.card-pattern {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: 0.2s all ease-in-out;
  object-fit: cover;
  filter: grayscale(100%) blur(4px);
}

.member-text {
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  & h2 {
    font-size: 1.4vw;
  }

  & h4 {
    font-size: 1vw;
  }
}



.carousel-container {
}
</style>