<template>
    <h1>Access</h1>
</template>

<script>
export default {
    mounted() {
        if(this.$device.isMobileOrTablet) {
            this.$router.replace('/quest/accessMobile');
        }
    }
}
</script>