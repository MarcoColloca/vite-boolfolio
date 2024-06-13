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
            <RouterLink :to="{name: 'home'}">Go to Home</RouterLink>
            <RouterLink :to="{name: 'portfolio'}">Go to Blog</RouterLink>
            <RouterLink to="/contact">Go to About</RouterLink>
        </nav>
    </header>
</template>



<style lang="scss" scoped>
    nav{
        height: 100px;
        background-color: coral;
    }
</style>