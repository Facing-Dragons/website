<template>
    <div class="row bg-white rounded d-flex flex-wrap justify-content-center align-items-center">
        <div class="col-12 d-flex justify-content-center align-items-center">
            <h2 class="my-4">
                Sponsors
            </h2>
        </div>
        <div 
            v-for="sponsor in sponsors"
            :key="sponsor.title"
            class="col-5 col-md-3 justify-content-center align-items-center"
        >
            <img 
                :src="sponsor.logo" 
                :alt="sponsor.title"
                class="sponsor-image"
            >
        </div>
    </div>
</template>

<script>
export default {
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
</style>