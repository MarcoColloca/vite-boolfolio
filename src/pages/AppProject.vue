<script>
    export default{

        mounted(){
            console.log(this.$router)
            console.log(this.$route)
            console.log(this.$route.params.slug);
        },

        methods:{
            goBack(){
                this.$router.back()
            }
        }
    }
</script>





<template>
    <div class="container">
        <h1>
            Project Details
        </h1>
    
        <button class="btn btn-warning" @click="goBack">Indietro</button>
        
        <p>{{ $route.params.slug }}</p>
    </div>
</template>



<style>
</style>