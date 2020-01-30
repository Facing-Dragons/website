<template>
    <b-container class="sponsors-container p-5">
        <section-title 
            class="pt-5"
            right
            title-text="Our Sponsors"
            text-gradient="linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);"
            line-gradient="linear-gradient(to left, black 0%, #f9d423 100%)"
        ></section-title>
        <div class="row justify-content-center justify-content-md-start">
            <div 
                v-for="sponsor in sponsors"
                :key="sponsor.title"
                class="col-5 col-md-3 align-items-center"
            >
                <div class="bg-white shadow-sm rounded p-3 m-2 sponsor-image-div">
                    <img 
                        :src="sponsor.logo" 
                        :alt="sponsor.title"
                        class="sponsor-image"
                    >
                </div>
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
                logo: require("~/assets/img/cnrc.png")
            },
            {
                title: "sfu",
                logo: require("~/assets/img/sfu.png")
            },
            {
                title: "mitacs",
                logo: require("~/assets/img/mitacs.jpg")
            },
            {
                title: "columbia trust",
                logo: require("~/assets/img/columbiabasin.jpg")
            },
            {
                title: "innovate bc",
                logo: require("~/assets/img/innovatebc.png")
            },
            {
                title: "new ventures bc",
                logo: require("~/assets/img/newventure.png")
            },
            {
                title: "ryla",
                logo: require("~/assets/img/RYLA.jpg")
            },
            {
                title: "kpu",
                logo: require("~/assets/img/kpu.jpg")
            },
            {
                title: "kast",
                logo: require("~/assets/img/kast.png")
            },
        ];  
        return {
            sponsors
        }
    }
}
</script>

<style scoped>
    .sponsor-image {
        width: 100%;
        height: auto;
    }

    .sponsor-image-div {
        transition: all 0.3s ease-in-out;
    }

    .sponsor-image-div:hover {
        cursor: pointer;
        transform: translateY(-2vh) scale(1.1);
    }
</style>