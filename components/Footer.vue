<template>
    <div class="container-fluid footer-container py-5 d-flex flex-column justify-content-center align-items-center">
        <div 
            class="icon-set p-2 d-flex flex-wrap justify-content-center align-items-center"
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
        <div class="facing-dragons">
            Facing Dragons
        </div>
        <div class="copyright text-center">
            &copy 2019 Copyright Facing Dragons <br>
            Website by <a href="https://rajabiseraji.github.io">MrOlaf</a> 
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
        width: 3rem;
        height: 3rem; 
        background-color: #2b2b2b;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.2rem;
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