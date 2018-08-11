<template>
    <div>
        <div id="app">
            <router-view/>

        </div>
        <div class="footer">
            <router-link to="/login">
                <mt-button size="small">login</mt-button>
            </router-link>
            <router-link to="/home">
                <mt-button size="small">Home</mt-button>
            </router-link>
            <router-link to="/details">
                <mt-button size="small">details</mt-button>
            </router-link>
            <router-link to="/download">
                <mt-button size="small">download</mt-button>
            </router-link>
            <router-link to="/user">
                <mt-button size="small">user</mt-button>
            </router-link>
        </div>

    </div>

</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    @import "../static/css/main.css";
    .footer{
        position: fixed;
        bottom:0;
        width: 100%;
        text-align: center;

    }
</style>
