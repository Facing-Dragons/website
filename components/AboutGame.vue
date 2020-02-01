<template>
    <div class="container about-main-container mt-5">
        <div class="row">
            <div class="col-12 justify-content-center">
                <div class="video-frame rounded p-2">
                    <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/TA1uyIciJ8Y"
                        allowfullscreen
                    ></b-embed>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.video-frame {
    background: rgba(230, 230, 230, 0.5);
}
</style>