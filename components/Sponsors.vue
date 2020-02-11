<template>
    <b-container class="sponsors-container p-5" id="sponsors">
        <section-title 
            class="pt-5"
            left
            title-text="Our Sponsors"
            text-gradient="linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);"
            line-gradient="linear-gradient(to left, black 0%, #f9d423 100%)"
        ></section-title>
        <div class="carousel-container p-relative">
                <swiper id="swiperSponsors" :options="swiperOption" ref="mySwiperSponsors">
                    <!-- slides -->
                    <swiper-slide 
                      v-for="sponsor in sponsors"
                      :key="sponsor.title"
                    >
                      <div 
                          class="p-2 p-md-0 align-items-center"
                      >
                          <a 
                              class="rounded sponsor-image-div d-block"
                              :href="sponsor.link"
                              target="_blank"    
                          >
                              <img 
                                  :src="sponsor.logo" 
                                  :alt="sponsor.title"
                                  class="sponsor-image"
                              >
                          </a>
                      </div>
                    </swiper-slide>
                    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div> -->
                </swiper>
            <div class="team-swiper-pagination w-100" slot="pagination"></div>
            </div>
    </b-container>
</template>

<script>
import SectionTitle from '~/components/SectionTitle';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'Sponsors',
    components: {
        SectionTitle,
        swiper, 
        swiperSlide
    },
    data() {
        const sponsors = [
            {
                title: "cnrc",
                link: "https://nrc.canada.ca/en",
                logo: require("~/assets/img/logos/cnrc.png")
            },
            {
                title: "sfu",
                link: "https://sfu.ca",
                logo: require("~/assets/img/logos/sfu.png")
            },
            {
                title: "mitacs",
                link: "https://www.mitacs.ca/en",
                logo: require("~/assets/img/logos/mitacs.png")
            },
            {
                title: "columbia trust",
                link: "https://ourtrust.org/",
                logo: require("~/assets/img/logos/columbiabasin.png")
            },
            {
                title: "innovate bc",
                link: "https://innovatebc.ca/",
                logo: require("~/assets/img/logos/innovatebc.png")
            },
            {
                title: "new ventures bc",
                link: "https://www.newventuresbc.com/",
                logo: require("~/assets/img/logos/newventure.png")
            },
            {
                title: "ryla",
                link: "http://ryla5040.org/",
                logo: require("~/assets/img/logos/RYLA.png")
            },
            {
                title: "kpu",
                link: "https://kpu.ca",
                logo: require("~/assets/img/logos/kpu.png")
            },
            {
                title: "kast",
                link: "https://kast.com/",
                logo: require("~/assets/img/logos/kast.png")
            },
        ];  
        return {
          sponsors,
          swiperOption: {
            slidesPerView: 4,
            grabCursor: true,
            loop: true,
            freeMode: false,
            autoplay: {
              delay: 800,
              disableOnInteraction: false
            },
            breakpoints: {
              980: {
                slidesPerView: 3,
              },
              775: {
                slidesPerView: 2,
              },
              540: {
                slidesPerView: 1,
              }
            }
            // navigation: {
            //   nextEl: '.swiper-button-next',
            //   prevEl: '.swiper-button-prev'
            // }
          }
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiperSponsors.swiper;
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
    .sponsor-image {
        width: 100%;
        height: auto;
    }
    .sponsor-image-div {
      filter: grayscale(100%);
      transition: all 0.3s ease-in-out;
    }

    .sponsor-image-div:hover {
        cursor: pointer;
        filter: grayscale(0%);
    }
</style>