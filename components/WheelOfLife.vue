<template>
    <div class="main">
        <svg viewBox="0 0  500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="500" height="500">
                <path d="M 250 250 v -500 h 500 Z" fill="#C4C4C4"/>
            </mask>
            <g mask="url(#mask0)">
                <circle cx="250" cy="250" r="250" fill="#2CD67A" stroke="black" :stroke-width="computedStrokeWidth"/>
            </g>
        </svg>
        
    </div>
</template>

<script>
export default {
    props: {
        maskColor: {
            type: String,
            default: 'white'
        },
        strokeColor: {
            type: String,
            default: 'blue'
        },
        mainColor: {
            type: String,
            default: 'green'
        },
        currentValue: {
            type: Number, 
            default: 100
        },
        maxValue: {
            type: Number, 
            default: 100
        }
    },
    computed: {
        mainRadius() {
            return this.currentValue * 250 / this.maxValue;
        },
        circleStyle() {
            return {
                strokeWidth: 32,
                strokeDasharray: `12.5 100`
            }
        },
        computedStrokeWidth() {
            // let currentStrokeWidth = (100 * this.currentValue) / ((this.maxValue * 2) - this.currentValue);
            let currentStrokeWidth = (2*250 * (this.maxValue - this.currentValue)) / this.maxValue; // 50 = r
            return currentStrokeWidth;
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    width: 500px;
    height: 500px;
}

svg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: black;
}

</style>