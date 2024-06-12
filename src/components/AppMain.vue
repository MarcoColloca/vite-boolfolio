<script>
    import axios from 'axios'
    import ProjectCard from './single-components/main/ProjectCard.vue'

    export default {
        components:{
            ProjectCard,
        },


        data(){
            

        },


    }
</script>



<template>
    <!-- Page Main -->
    <main>
        <div class="projects-section my-5">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <ProjectCard></ProjectCard>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>



<style lang="scss" scoped>
    main{
        height: 500px;
    }
</style>