<template>
    <div 
        class="section-title-container py-5"
    >
        <div class="title-text d-flex flex-column text-right">
            <div 
                v-for="fragment in titleTextArray"
                :key="fragment"
                class="title-text-fragment"
                :style="titleTextStyle"
            >
                {{ fragment }}
            </div>
        </div> 
        <div class="title-line" :style="titleLineStyle"></div>
    </div>    
</template>

<script>
export default {
    props: {
        titleText: String,
        textColor: String,
        textGradient: String,
        lineColor: String,
        lineGradient: String
    },
    computed: {
        titleTextArray() {
            return this.titleText.split(' ');
        },
        titleTextStyle() {
            return `background: ${this.textColor || this.textGradient || 'white'};
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;`
        },
        titleLineStyle() {
            return `
                background: ${this.lineColor || this.lineGradient || 'white'}
            `
        }
    }
}
</script>

<style scoped>
.section-title-container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    color: white;
}

.title-line {
    height: 2px;
    width: 100%;
}
</style>