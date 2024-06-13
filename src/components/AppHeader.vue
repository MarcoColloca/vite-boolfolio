<script>

    export default {
        components:{            
        },

        data(){
            return{
                loggedIn: true,
            }
        }
    }
</script>



<template>
    <!-- Page Header -->
    <header>
        <nav v-if="loggedIn" class="d-flex gap-5 justify-content-center align-items-center">
            <RouterLink :to="{name: 'home'}">Home</RouterLink>
            <RouterLink :to="{name: 'portfolio'}">Portfolio</RouterLink>
            <RouterLink to="/contact">Contact Me</RouterLink>
        </nav>
        <nav v-else class="d-flex gap-5 justify-content-center align-items-center">
            <RouterLink :to="{name: 'home'}">Home</RouterLink>
        </nav>
    </header>
</template>



<style lang="scss" scoped>
    nav{
        height: 100px;
        background-color: coral;
    }
</style>