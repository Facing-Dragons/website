<template>
    <b-container fluid class="team-container-fluid">
        <b-container 
            class="team-container"
        >
            <section-title 
                class="pt-5"
                title-text="Faces Behind Facing Dragons"
                text-gradient="linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);"
                line-gradient="linear-gradient(to left, black 0%, #f9d423 100%)"
            ></section-title>
            <div class="carousel-container">
                <swiper :options="swiperOption" ref="mySwiper">
                    <!-- slides -->
                    <swiper-slide 
                        v-for="(member, index) in teamMembers"
                        :key="index"
                    >
                        <div 
                            class="slide-content d-flex justify-content-center align-items-center"
                            @mouseover="() => mouseHandler(slide)"
                        >
                            <!-- :style="`background: url(${require('~/assets/img/'+member.backgroundImage)})`" -->
                          <div 
                            class="member-frame"
                          >
                            <img 
                              class="frame"
                              src="~/assets/img/card_frame.png"
                            >
                            <img 
                              class="member-image rounded shadow-sm"
                              :src="require(`~/assets/img/${member.image}`)"
                            >
                            <div class="img-border-bottom"></div>
                            <div class="member-text w-100 d-flex flex-column justify-content-center align-item-center text-center">
                              <h2>
                                {{ member.name }}
                              </h2>
                              <h4>
                                {{ member.role }}
                              </h4>
                            </div>
                          </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </b-container>
    </b-container>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import SectionTitle from '~/components/SectionTitle';
export default {
    components: {
        SectionTitle,
        swiper,
        swiperSlide
    },
    data() {
      const teamMembers = [
            { 
                name: "Brodie",
                role: "CEO",
                description: `Owner and CEO of Facing Dragons, is a Certified Professional Co-active Coach (CPCC).
                 Brodie has extensive experience working one-on-one and in groups, and has a reputation for his 
                 ability to connect with and motivate teens and young adults. 
                 He understands people at a core level and is highly skilled at helping people reach their 
                 goals and create lasting transformations.`,
                image: "moh.jpg",
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
                name: "Dov",
                role: "Game Director",
                description: `Dov Schafer, Gaming Design Researcher, is a PhD candidate at Simon Fraser 
                University in British Columbia. He is studying peoples’ motivation to play video games 
                and how to create mixed reality games that are customized to an individual’s learning 
                needs. Dov is a lifelong gamer with a deep knowledge of game design and mechanics.`,
                image: "moh.jpg",
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
                name: "Stephan",
                role: "Lorem Ipsum!?",
                description: `Stephen Urquhart is their business wizard, helping develop strategic 
                partnerships, access grants, and connect with investors to make this all possible. 
                Stay tuned for more information on how you can be involved with the Facing Dragons 
                game, as well as their upcoming Kickstarter Campaign and official release date!`,
                image: "moh.jpg",
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
                name: "Osama",
                role: "Lorem Ipsum!?",
                description: `Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!
                Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!
                Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!`,
                image: "moh.jpg",
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
                name: "Mohammad",
                role: "Lorem Ipsum!?",
                description: `Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!
                Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!
                Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!`,
                image: "moh.jpg",
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
        ];
      return {
        teamMembers,
        swiperOption: {
          slidesPerView: 3,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          grabCursor: true,
          loop: true,
          freeMode: true,
          breakpoints: {
            980: {
              slidesPerView: 2,
            },
            540: {
              slidesPerView: 1,
            }
          }
        }
      }
    },
    methods: {
        mouseHandler: function (slideNum) {
            console.log('====================================');
            console.log('Im hovered Slide: ' + slideNum);
            console.log('====================================');
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      console.log('this is current swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)
    }
}
</script>


<style lang="scss" scoped>

.team-container-fluid {
    /* margin-top: 100vh; */
    min-height: 100vh;
    position: relative;
}

.slide-content {
    height: calc(200px + 10vw);
    transition: 1s all ease-in-out;
    padding: 2rem;

    &::before {
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url('~assets/img/dragon_palettes_02.jpg');
      filter: grayscale(100%) blur(5px);
      background-size: cover;
      transition: 0.2s all ease-in-out;
    }
    &:hover::before {
      filter: grayscale(0%) blur(2px);
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

.img-border-bottom {
  width: 100%;
  background: linear-gradient(to right, black 0%, #f9d423 50%, black 100%);
  height: 8px;
  z-index: 2;
  position: absolute;
  top: 65%;
  left: 0;
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