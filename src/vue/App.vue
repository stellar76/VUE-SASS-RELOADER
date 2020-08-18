<template>
<div>
    <div class="nav-bar light">
        <router-link to="/foo">Welcome</router-link>
        <router-link to="/bar">Hello</router-link>
    </div>
    <router-view />
</div>
</template>

<script>
import Welcome from "./components/Welcome.vue";

export default {
    name: "App",
    data() {
        return {
            //
        };
    },
    components: {
        Welcome
    },
    created() {
        //
    }
};
</script>
