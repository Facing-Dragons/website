<template>
    <b-navbar 
        toggleable="sm" 
        variant="faded" 
        type="dark"
        fixed="top"
        class="d-flex"
    >
        <b-navbar-brand href="#" class="logo-container ml-3">
            <img class="logo-img" src="~/assets/img/logo_white.png" alt="Facing Dragons">
        </b-navbar-brand>

        <b-navbar-toggle target="main-collapse"></b-navbar-toggle>

        <b-collapse id="main-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="#game" class="item">
                    Game
                </b-nav-item>
                <b-nav-item to="#team">
                    Team
                </b-nav-item>
                <b-nav-item to="#sponsors">
                    Sponsors
                </b-nav-item>
                <b-nav-item to="#contact">
                    Contact Us
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .logo-img {
        width: auto;
        height: 50px;
    }
</style>