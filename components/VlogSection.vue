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
        <carousel-3d>
          <slide v-for="v in videos" :index="v.id" :key="v.id">
            <div class="vlog-container rounded p-2">
              <b-embed
                  type="iframe"
                  aspect="16by9"
                  :src="v.url"
                  allowfullscreen
              ></b-embed>
            </div>
          </slide>
        </carousel-3d>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import SectionTitle from '~/components/SectionTitle';

export default {
    components: {
        Carousel3d, 
        Slide,
        SectionTitle
    },
    data() {
        const videos = [
            {
                id: 1,
                url: 'https://www.youtube.com/embed/JxCQOfH1Wa8?rel=0'
            },
            {
                id: 2,
                url: 'https://www.youtube.com/embed/zFsMAbpeRXw?rel=0'
            },
            {
                id: 3,
                url: 'https://www.youtube.com/embed/XcQEPNA0TZk?rel=0'
            },
            {
                id: 4,
                url: 'https://www.youtube.com/embed/QateDsNO7fY?rel=0'
            },
            {
                id: 5,
                url: 'https://www.youtube.com/embed/BNW4z6UiBKg?rel=0'
            },
            {
                id: 6,
                url: 'https://www.youtube.com/embed/EM2dfGk_lgQ?rel=0'
            },

        ]
        return {
            videos
        }
    }
}
</script>

<style lang="scss" scoped>
.vlog-container {
  background-color: rgba(230, 230, 230, 0.5); 
}
</style>