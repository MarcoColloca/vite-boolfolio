<script>
    import axios from 'axios'
    import ProjectCard from '../components/single-components/main/ProjectCard.vue';

    export default {
        components:{
            ProjectCard,
        },


        data(){
            return{
                projects: [],

                currentPage: 1,

                lastPage: null,
                
                selected: '',

                options: [
                    {
                        text: '3',
                        value: 3
                    },
                    {
                        text: '5',
                        value: 5
                    },
                    {
                        text: '8',
                        value: 8
                    },
                    {
                        text: '12',
                        value: 12
                    },
                    {
                        text: '16',
                        value: 16
                    },
                ],

                perPage: 3,
            }

        },


        created(){
            this.fetchProjects()
            
            //console.log(this.perPage)
        },

        watch:{
            /* 
                selected(newValue, oldValue){
                    if(newValue !== oldValue){
                        this.cardsInPage()
                        this.fetchProjects()
                    }
                }
            */
        },

        methods:{
            fetchProjects(){
                axios.get('http://127.0.0.1:8000/api/projects',
                {
                    params:{
                        page: this.currentPage,
                        perPage: this.perPage 
                    }
                })
                .then(res =>{
                    //console.log(res.data.results.data)
                    this.projects = res.data.results.data
                    this.lastPage = res.data.results.last_page
                })
            },

            changePage(n){
                if(n === this.currentPage) return
                this.currentPage = n
                this.fetchProjects()
            },

            cardsInPage(){
                this.perPage = this.selected
                this.fetchProjects()
            }

        }
    }
</script>



<template>
    <!-- Page Main -->
    <main>
        
        <div class="projects-section my-5">
            <div class="container">
                <h1 class="text-center my-5 text-warning"> My Projects</h1>
            </div>


            <div class="container my-5">
                <div class="row gap-5 justify-content-center">
                    <div class="col-3 text-center">
                        <p>Page:</p>
                        <ul class="change-page d-flex justify-content-center">
                            <li :class="n === currentPage ? 'text-coral' : ''" @click="changePage(n)" v-for="n in lastPage" :key="n">
                                {{ n }}
                            </li>
                        </ul>
                    </div>
                    <div class="col-3 text-center">
                        <p>Cards per Page:</p>
                        <div>
                            <select @change="cardsInPage()" name="cards-pp" id="cards-pp" v-model="selected">
                                <option v-for="option in options" :value="option.value">
                                    {{ option.text }}
                                </option>
                            </select>
                        </div>
                        
                    </div>
                </div>
            </div>


            <div class="container">
                <div class="row row-gap-3">
                    <div v-for="(project, i) in projects" :key="project.id" class="col-4">
                        <ProjectCard
                         :name="project.name"
                         :description="project.description"
                         :technologies="project.technologies"
                         :link="project.link"
                         :type="project.type?.name"
                         :isPublic="project.is_public"
                         :contributors="project.contributors"
                         :date="project.date_of_creation"
                        ></ProjectCard>  
                        <router-link :to="{name: 'projects.show', params: { slug:project.slug }}">Read More..</router-link>                  
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>



<style lang="scss" scoped>

    main{
        min-height: 1000px;
    }

    .change-page{
        display: flex;
        gap: 15px; 
        padding: 0;
        li{
            cursor: pointer;
            padding: 5px 12px;
            &:hover{
                color: coral;
                //border: 1px solid coral;
            }
        }
    }
</style>