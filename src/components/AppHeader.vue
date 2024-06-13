<script>

    export default {
        components:{            
        },

        data(){
            return{

            }
        }
    }
</script>



<template>
    <!-- Page Header -->
    <header>
        <nav class="d-flex gap-5 justify-content-center align-items-center">
            <RouterLink :to="{name: 'home'}">Home</RouterLink>
            <RouterLink :to="{name: 'portfolio'}">Portfolio</RouterLink>
            <RouterLink to="/contact">About Me</RouterLink>
        </nav>
    </header>
</template>



<style lang="scss" scoped>
    nav{
        height: 100px;
        background-color: coral;
    }
</style>