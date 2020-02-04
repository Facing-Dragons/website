<template>
  <div class="container vlog-main-container my-5">
    <div class="row mt-2">
      <section-title 
          right
          title-text="Dev VLogs"
          text-gradient="linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);"
          line-gradient="linear-gradient(to right, black 0%, #f9d423 100%)"
      ></section-title>
      <div class="col-12">
        <swiper :options="swiperOptions" ref="mySwiper">
          <swiper-slide v-for="v in videos" :index="v.id" :key="v.id">
            <div class="vlog-container rounded p-1">
              <b-embed
                  type="iframe"
                  aspect="16by9"
                  :src="v.url"
                  allowfullscreen
              ></b-embed>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '~/components/SectionTitle';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'VlogSection',
    components: {
        SectionTitle,
        swiper,
        swiperSlide
    },
    data() {
        const videos = [
            {
                id: 0,
                url: 'https://www.youtube.com/embed/JxCQOfH1Wa8?rel=0'
            },
            {
                id: 1,
                url: 'https://www.youtube.com/embed/zFsMAbpeRXw?rel=0'
            },
            {
                id: 2,
                url: 'https://www.youtube.com/embed/XcQEPNA0TZk?rel=0'
            },
            {
                id: 3,
                url: 'https://www.youtube.com/embed/QateDsNO7fY?rel=0'
            },
            {
                id: 4,
                url: 'https://www.youtube.com/embed/BNW4z6UiBKg?rel=0'
            },
            {
                id: 5,
                url: 'https://www.youtube.com/embed/EM2dfGk_lgQ?rel=0'
            },

        ]
        return {
            videos,
            swiperOptions: {
              effect: 'coverflow',
              slidesPerView: 5,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              },
              grabCursor: true,
              loop: true,
              freeMode: true,
              breakpoints: {
                980: {
                  slidesPerView: 3,
                },
                540: {
                  slidesPerView: 1,
                }
              },
              coverflowEffect: {
                slideShadows: false,
                rotate: 30,
                stretch: 20,
                depth: 100
              }
            }
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
      // current swiper instance
      console.log('this is current swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)
    },
}
</script>

<style lang="scss" scoped>
.vlog-container {
  background-color: rgba(230, 230, 230, 0.5); 
}

</style>