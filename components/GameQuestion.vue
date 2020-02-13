<template>
    <div class="container main-quest-container">
        <div class="row">
            <div class="col-12 justify-content-center">
                <p class="quest-text">
                    {{ text }}
                </p>
            </div>
            <div class="col-12 justify-content-center align-items-center">
                <knob-control 
                    v-model="value"
                    :min="0"
                    :max="10"
                ></knob-control>
            </div>
        </div>
    </div>
</template>

<script>
import KnobControl from 'vue-knob-control'
export default {
    components: {
        KnobControl,
    },
    props: {
        text: String,
        value: Number
    }
}
</script>

<style lang="scss" scoped>

</style>