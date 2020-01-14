<template>
    <div class="container-fluid footer-container py-5 d-flex justify-content-center align-items-center">
        <div 
            class="icon-set p-2 d-flex justify-content-center align-items-center"
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
    </div>    
</template>

<script>
export default {
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
        width: 2rem;
        height: 2rem; 
        background-color: black;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1rem;
    }

    .footer-container {
        background-color: gray;
    }
</style>