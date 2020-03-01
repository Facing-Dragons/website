<template>
    <div class="container bg-light align-items-center d-flex flex-column justify-content-center">
        <div class="row justify-content-center">
            <div class="coll-12">
                <div class="p">
                    <wheel-of-life></wheel-of-life>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import WheelOfLife from '~/components/WheelOfLife'
export default {
    components: {
        WheelOfLife
    }
}
</script>

<style scoped>
.container {
    height: 100vh;
}
.p {
    height: 500px;
    width: 500px;
}
</style>