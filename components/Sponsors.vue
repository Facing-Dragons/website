<template>
    <b-container class="sponsors-container p-5" id="sponsors">
        <section-title 
            class="pt-5"
            left
            title-text="Our Sponsors"
            text-gradient="linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);"
            line-gradient="linear-gradient(to left, black 0%, #f9d423 100%)"
        ></section-title>
        <div class="row justify-content-center justify-content-md-start">
            <div 
                v-for="sponsor in sponsors"
                :key="sponsor.title"
                class="col-6 col-md-3 p-2 p-md-0 align-items-center sponsor-image-col"
            >
                <a 
                    class="bg-white rounded p-3 m-2 sponsor-image-div d-block"
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
        </div>
    </b-container>
</template>

<script>
import SectionTitle from '~/components/SectionTitle';
export default {
    components: {
        SectionTitle,
    },
    data() {
        const sponsors = [
            {
                title: "cnrc",
                link: "https://nrc.canada.ca/en",
                logo: require("~/assets/img/cnrc.png")
            },
            {
                title: "sfu",
                link: "https://sfu.ca",
                logo: require("~/assets/img/sfu.png")
            },
            {
                title: "mitacs",
                link: "https://www.mitacs.ca/en",
                logo: require("~/assets/img/mitacs.jpg")
            },
            {
                title: "columbia trust",
                link: "https://ourtrust.org/",
                logo: require("~/assets/img/columbiabasin.jpg")
            },
            {
                title: "innovate bc",
                link: "https://innovatebc.ca/",
                logo: require("~/assets/img/innovatebc.png")
            },
            {
                title: "new ventures bc",
                link: "https://www.newventuresbc.com/",
                logo: require("~/assets/img/newventure.png")
            },
            {
                title: "ryla",
                link: "http://ryla5040.org/",
                logo: require("~/assets/img/RYLA.jpg")
            },
            {
                title: "kpu",
                link: "https://kpu.ca",
                logo: require("~/assets/img/kpu.jpg")
            },
            {
                title: "kast",
                link: "https://kast.com/",
                logo: require("~/assets/img/kast.png")
            },
        ];  
        return {
            sponsors
        }
    }
}
</script>

<style lang="scss" scoped>
    .sponsor-image {
        width: 100%;
        height: auto;
    }
    .sponsor-image-div {
        transition: all 0.3s ease-in-out;
        -webkit-box-shadow: 4px 9px 11px -2px rgba(255, 255, 255,0.75);
        -moz-box-shadow: 4px 9px 11px -2px rgba(255, 255, 255,0.75);
        box-shadow: 4px 9px 11px -6px rgba(255, 255, 255,0.75);
    }

    .sponsor-image-div:hover {
        cursor: pointer;
        transform: translateY(-2vh) scale(1.1);
    }
</style>