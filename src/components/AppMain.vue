<script>
    import axios from 'axios'
    import ProjectCard from './single-components/main/ProjectCard.vue'

    export default {
        components:{
            ProjectCard,
        },


        data(){
            return{
                projects: [],

                currentPage: 1,

                lastPage: null
            }

        },


        created(){
            this.fetchProjects()

            console.log(this.projects)
        },



        methods:{
            fetchProjects(){
                axios.get('http://127.0.0.1:8000/api/projects',
                {
                    params:{
                        page: this.currentPage,
                        perPage: 5 
                    }
                })
                .then(res =>{
                    console.log(res.data.results.data)
                    this.projects = res.data.results.data
                    this.lastPage = res.data.results.last_page
                })
            },

            changePage(n){
                if(n === this.currentPage) return
                this.currentPage = n
                this.fetchProjects()
            }

        }
    }
</script>



<template>
    <!-- Page Main -->
    <main>
        <!-- <div class="projects-section my-5">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <ProjectCard></ProjectCard>
                    </div>
                </div>
            </div>
        </div> -->
        
        <div class="projects-section my-5">
            <div class="container">
                <h1 class="text-center my-5 text-warning"> My Projects</h1>
            </div>
            <div class="container">
                <div class="row row-gap-3">
                    <div v-for="(project, i) in projects" :key="project.id" class="col-3">
                        <div class="project-card card">
                            <div class="card-body">
                                <h4 class="card-title">{{ project.name }}</h4>
                                <p>{{ project.description }}</p>            
                            </div>
                            <div class="card-footer">
                                <ul>                                
                                    <li v-for="tech in project.technologies"> {{ tech.name }} </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>



<style lang="scss" scoped>
   
</style>