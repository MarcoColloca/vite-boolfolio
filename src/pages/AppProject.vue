<script>
    import axios from 'axios';
    import ProjectCard from '../components/single-components/main/ProjectCard.vue';

    export default{

        components:{
            ProjectCard
        },

        props:{
            slug: String
        },  

        data(){
            return{
                project: null,
                //slug: this.$route.params.slug,
                description: true
            }
        },



        mounted(){
            this.fetchProject()
        },

        methods:{
            goBack(){
                this.$router.back()
            },


            fetchProject(){
                axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
                .then(res =>{

                    this.project = res.data.results
                    
                })
                .catch( (err) => {
                    // this.$router.push({name: 'NotFound'})                    
                    // console.log(err)
                    this.$router.replace({
                        name: 'NotFound',
                        params: { pathMatch: this.$route.path.substring(1).split('/') },
                    });

                    // alert("Hello: " + err); //this alert shows up correctly
                });
            },
        }
    }
</script>





<template>
    <div class="container mt-5 ">
        <div class="section-title">
            <h1>
                Project Details
            </h1>
        
            <button class="btn btn-outline-coral" @click="goBack">Back</button>
        </div>
    </div>

    <div v-if="project" class="container my-5 d-flex justify-content-center">        
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
         :imageUrl="project.cover_full_path"
        ></ProjectCard>
    </div>
</template>



<style lang="scss" scoped>
    h1{
        text-align: center;
    }
    .section-title{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        button{
            margin-left: -340px;
            margin-top: 15px;
        }
    }
</style>