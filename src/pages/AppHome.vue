<script>
    import BentoBox from '../components/single-components/general/BentoBox.vue'

    export default{
        components:{
            BentoBox
        }
    }
</script>





<template>
    <div class="container my-5 p-5">
        <h1 class="text-coral">
            Homepage
        </h1>
        <p>
            Welcome to my Website. My name is Marco, but my friends call me Mark.  
        </p>
    </div>

    <section class="my-5 hero">
        <div class="h-100 container">            
            <div class="hero-container">
                <h1>
                    Marco Colloca
                </h1>
                <BentoBox class="text-light">
                    <h2 class="mt-2">
                        Creative Developer
                    </h2>
                </BentoBox>
            </div>
        </div>
    </section>
</template>



<style lang="scss" scoped>
    .hero{
        height: 600px;
        background-color: antiquewhite;
        color: black;
    }

    .hero-container{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;   

    }
</style>