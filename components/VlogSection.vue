<template>
  <div class="container vlog-main-container my-5" id="posts">
    <div class="row mt-2">
      <section-title 
          v-b-visible="handleTitleVisible"
          right
          class="vlog-section-title"
          title-text="Posts"
          text-gradient="linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);"
          line-gradient="linear-gradient(to right, black 0%, #f9d423 100%)"
      ></section-title>
      <div class="col-12 swiper-section">
        <swiper :options="swiperOptions" ref="mySwiper">
          <swiper-slide v-for="v in videos" :index="v.id" :key="v.id">
            <div class="vlog-container rounded p-1">
              <!-- <youtube :video-id="v.id" :ref="`video-${id}`" @playing=""></youtube> -->
              <b-embed
                  type="iframe"
                  aspect="16by9"
                  :src="v.url"
                  allowfullscreen
              ></b-embed>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '~/components/SectionTitle';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import anime from 'animejs/lib/anime.es.js';

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
                id: 'er66ouHPTJU',
                url: 'https://www.youtube.com/embed/er66ouHPTJU?rel=0'
            },
            {
                id: '3A0m9l7O59E',
                url: 'https://www.youtube.com/embed/3A0m9l7O59E?rel=0'
            },
            {
                id: 'EM2dfGk_lgQ',
                url: 'https://www.youtube.com/embed/EM2dfGk_lgQ?rel=0'
            },
            {
                id: 'BNW4z6UiBKg',
                url: 'https://www.youtube.com/embed/BNW4z6UiBKg?rel=0'
            },
            {
                id: 'Ov6EVYghHDI',
                url: 'https://www.youtube.com/embed/Ov6EVYghHDI?rel=0'
            },
            {
                id: 'DYVWN5TNnMA',
                url: 'https://www.youtube.com/embed/DYVWN5TNnMA?rel=0'
            },

        ]
        return {
            videos,
            animationTimeline: '',
            swiperOptions: {
              autoHeight: true,
              effect: 'coverflow',
              slidesPerView: 3,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              },
              grabCursor: false,
              // loop: true,
              // freeMode: true,
              breakpoints: {
                1023: {
                  // slidesPerView: 1,
                  slidesPerView: 'auto',
                  effect: 'none'
                }
              },
              // coverflowEffect: {
              //   slideShadows: false,
              //   rotate: 60,
              //   stretch: 20,
              //   depth: 100
              // }
            }
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
      var tl = anime.timeline({
        easing: 'easeOutExpo',
        autoplay: false,
        delay: 1000,
      });

      tl.add({
          targets: '.vlog-section-title',
          translateX: ['-20vw', 0],
          opacity: [0, 1],
          easing: 'easeInOutSine',
          duration: 600,
      })
      .add({
          targets: '.swiper-section',
          translateY: ['5rem', 0],
          opacity: [0, 1],
          easing: 'easeInOutSine',
          duration: 600,
      });

      this.animationTimeline = tl;
    },
    methods: {
      handleTitleVisible(isVisible) {
        if(isVisible && !this.animationTimeline.began) {
          this.animationTimeline.play();
        }
      }
    }
}
</script>

<style lang="scss" scoped>
.vlog-container {
  background-color: rgba(230, 230, 230, 0.5); 
  // width: 30vw;
  // max-width: 80vw;
}

.swiper-button-prev {
  left: -24px;

  @media screen and (max-width: 576px) {
    left: 0;
  }
}

.swiper-button-next {
  right: -24px;
  @media screen and (max-width: 576px) {
    right: 0;
  }
}

</style>