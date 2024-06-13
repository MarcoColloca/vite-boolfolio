<script>
    import axios from 'axios';
    import ProjectCard from '../components/single-components/main/ProjectCard.vue';

    export default{

        components:{
            ProjectCard
        },

        data(){
            return{
                project: {},
                slug: this.$route.params.slug,
                description: true
            }
        },



        mounted(){
            this.fetchProjects()
            // console.log(this.$router)
            // console.log(this.$route)
            // console.log(this.$route.params.slug);            
        },

        methods:{
            goBack(){
                this.$router.back()
            },


            fetchProjects(){
                axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
                .then(res =>{
                    // console.log(res.data.results)

                    this.project = res.data.results
                    
                })
            },
        }
    }
</script>





<template>
    <div class="container mt-5">
        <h1>
            Project Details
        </h1>
    
        <button class="btn btn-outline-coral" @click="goBack">Back</button>
                
    </div>

    <div class="container my-5 d-flex justify-content-center">        
        <ProjectCard
         :name="project.name"
         :slug="project.slug"
         :description="project.description"
         :technologies="project.technologies"
         :link="project.link"
         :type="project.type?.name"
         :isPublic="project.is_public"
         :contributors="project.contributors"
         :date="project.date_of_creation"
         :visibleDescription="true"
        ></ProjectCard>
    </div>
</template>



<style>
</style>