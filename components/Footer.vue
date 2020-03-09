<template>
    <div id="contact" class="container footer-container p-5 justify-content-center align-items-center">
        <section-title 
            v-b-visible="handleTitleVisible"
            class="pt-5 sponsors-section-title"
            right
            title-text="Contact"
            text-gradient="linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);"
            line-gradient="linear-gradient(to right, black 0%, #f9d423 100%)"
        ></section-title>
        <!-- <div class="input-box w-100 p-2">
            <b-form-textarea
                id="textarea-rows"
                placeholder="Tall textarea"
                rows="8"
            ></b-form-textarea>
        </div> -->
        <div 
            class="icon-set p-3 d-flex w-100 flex-wrap justify-content-center align-items-center"
        >
            <a 
                v-for="info in mediaInfo"
                :href="info.link" 
                :key="info.title" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <div
                    class="icon-container p-2 m-2"
                >
                    <font-awesome-icon :icon="info.icon.split(' ')"/>
                </div>
            </a>
        </div>
        <div class="facing-dragons text-center">
            Facing Dragons
        </div>
        <div class="copyright text-center">
            &copy 2019 Copyright Facing Dragons <br>
            Website by <a href="https://rajabiseraji.github.io">MrOlaf</a> 
        </div>
    </div>    
</template>

<script>
import SectionTitle from '~/components/SectionTitle';
export default {
    components: {
        SectionTitle
    },
    data() {
        const mediaInfo = [
            {
                title: "Facebook",
                link: "https://www.facebook.com/FacingDragons/?fref=ts",
                icon: "fab facebook-f"
            },
            {
                title: "Twitter",
                link: "https://twitter.com/FacingDragons",
                icon: "fab twitter-square"
            },
            {
                title: "LinkedIn",
                link: "https://www.linkedin.com/company/facingdragons/",
                icon: "fab linkedin"
            },
            {
                title: "YouTube",
                link: "https://www.youtube.com/user/FacingDragons",
                icon: "fab youtube-square"
            },
            {
                title: "Instagram",
                link: "https://www.instagram.com/facingdragons/",
                icon: "fab instagram"
            },
            {
                title: "Pinterest",
                link: "https://www.pinterest.com/facingdragons/",
                icon: "fab pinterest-square"
            }

        ];
        return {
            mediaInfo
        }
    }
}
</script>

<style scoped>
    .team-section {
        width: 100%;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .temp-text {
        font-size: 1.6rem;
    }

    .icon-container {
        width: 5.5rem;
        height: 5.5rem; 
        background-color: #2b2b2b;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 2rem;
    }

    .footer-container {
        background-color: black;
    }

    .facing-dragons {
        color: #ebebeb;
        font-size: 1.5rem;
    }

    .copyright {
        color: #868686;
        font-size: 0.6rem;
    }
</style>