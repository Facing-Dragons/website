<template>
    <div class="row about-game-container">
        <div class="about-title my-5 col-12 justify-content-center align-items-center d-flex text-center">
            <strong>
                Face Your Dragon <br>
                <span class="red-text">
                    Unlock Your Purpose
                </span>    
            </strong>
        </div>
        <div class="about-description col-12 justify-content-center align-items-center d-flex text-center">
            <p>
                Facing Dragons is a deeply gamified mental health app that helps young adults overcome life's challenges and 
                unlock their purpose.
            </p>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        tempText: String,
        tempBg: String
    }
}
</script>

<style scoped>
    .red-text {
        color: red;
    }

    .about-game-container {
        color: white;
    }

    .about-title {
        font-size: 2rem;
    }

    .about-description {
        font-size: 1.5rem;
    }
</style>