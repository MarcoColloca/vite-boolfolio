<script>

    export default {
        components:{

        },

        props:{
            name: String,
            slug: String,
            description: String,
            visibleDescription:{
                type: Boolean,
                default: false
            },
            technologies: Array,
            link: String,
            type: [String, null],
            isPublic: Number,
            contributors: Number,
            date: String,
            projectRoute:{
                type: Boolean,
                default: false
            },
            imageUrl: [String, null]
        },

        
        data(){
            return{
                
            }
        },
            


        mounted(){
           console.log(this.imageUrl)
        },
    }
</script>



<template>
    <!-- Project Card -->
    <div class="project-card card">
        <div class="card-header my-header">
            <h4 class="card-title text-coral">{{ name }}</h4>
            <img v-if="imageUrl" :src="imageUrl" alt="">
        </div>
        <div class="card-body my-body">
            <!-- Card Link -->
            <a class="my-link" :href="link"> Project Link</a>

            <!-- Card Is Public -->
            <p class="my-3">
                This Project is <span class="text-coral">{{ isPublic == 0 ? 'Public' : 'Private' }}</span>   
            </p>

            <!-- Card Date -->
            <p>
                Date of Creation: {{ date }}
            </p>

            <!-- Card Type -->
            <p class="my-3">
                Type of Project: {{ type ?? 'Generic' }}
            </p>

            <!-- Card Contributors Number -->
            <p class="my-3">
                Contributors: {{ contributors }}
            </p>

            <!-- Card Link {conditional} -->
            <div class="my-2" v-show="this.projectRoute === true">
                <div class="w-100 d-flex justify-content-end">
                    <span class="btn btn-outline-coral">
                        <router-link :to="{name: 'projects.show', params: { slug:slug }}">Read More..</router-link>
                    </span>
                </div>
            </div>

            <!-- Card Description {conditional} -->
            <p v-show="this.visibleDescription === true">
                {{ description }}
            </p>
        </div>
        <div class="card-footer my-footer">
            <ul>                                
                <li v-for="tech in technologies"> {{ tech.name }} </li>
            </ul>
        </div>
    </div>
</template>



<style lang="scss" scoped>

    .project-card{
        max-width: 450px;
        .my-link{
            &:hover{
                text-decoration: underline;
                color: coral;
            }
        }
    }

    .my-header{
        min-height: 100px;
    }

    

    .my-footer{
        min-height: 100px;
        ul{
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: start;
        }
    }
</style>