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
                        v-for="slide in [1,2,3,4,5,6]"
                        :key="slide"
                    >
                        <div 
                            class="slide-content"
                            @mouseover="() => mouseHandler(slide)"
                            :style="`background: #${Math.floor(Math.random()*16777215).toString(16)}`"
                        >
                            {{ slide }}
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
                image: "",
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
                role: "Game Design Researcher",
                description: `Dov Schafer, Gaming Design Researcher, is a PhD candidate at Simon Fraser 
                University in British Columbia. He is studying peoples’ motivation to play video games 
                and how to create mixed reality games that are customized to an individual’s learning 
                needs. Dov is a lifelong gamer with a deep knowledge of game design and mechanics.`,
                image: "",
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
                image: "",
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
                image: "",
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
                image: "",
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
          breakpoints: {
            640: {
              slidesPerView: 2,
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
    height: 50vh;

    &:hover {
        background: 
    }
}


.carousel-container {
}
</style>