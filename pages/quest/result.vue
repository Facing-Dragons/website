<template>
    <div class="container bg-light align-items-center d-flex flex-column justify-content-center">
        <div class="row justify-content-center">
            <div class="coll-12">
                <div class="p">
                    <wheel-of-life-section 
                        v-for="(s, i) in wheelSections"
                        :key="i"
                        class="section" 
                        :current-value="s.value"
                        :mainColor="s.color"
                        :style="{transform: `rotate(${45 * i}deg)`}"
                    >
                    </wheel-of-life-section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import WheelOfLifeSection from '~/components/WheelOfLifeSection'
export default {
    components: {
        WheelOfLifeSection
    },
    data() {
        const wheelSections = [
            {value: Math.random() * 100, color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})` },
            {value: Math.random() * 100, color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})` },
            {value: Math.random() * 100, color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})` },
            {value: Math.random() * 100, color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})` },
            {value: Math.random() * 100, color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})` },
            {value: Math.random() * 100, color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})` },
            {value: Math.random() * 100, color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})` },
            {value: Math.random() * 100, color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})` },
        ]
        return {
            wheelSections
        }
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
.section {
    position: absolute;
    top: 55px;
}
</style>