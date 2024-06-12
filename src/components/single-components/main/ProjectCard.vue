<script>

    export default {
        components:{

        },

        props:{
            name: String,
            description: String,
            technologies: Array,
            link: String,
            type: [String, null],
            isPublic: Number,
            contributors: Number,
            date: String,
        },

        data(){
            return{

            }
        },

    }
</script>



<template>
    <!-- Project Card -->
    <div class="project-card card">
        <div class="card-header my-header">
            <h4 class="card-title text-primary">{{ name }}</h4>
        </div>
        <div class="card-body">
            <a :href="link"> Link al Progetto</a>
            <p class="my-3">
                This Project is <span class="text-coral">{{ isPublic === 0 ? 'Public' : 'Private' }} </span>   
            </p>
            <p>
                Date of Creation: {{ date }}
            </p>
            <p class="my-3">
                Type of Project: {{ type ?? 'Generic' }}
            </p>
            <p class="my-3">
                Contributors: {{ contributors }}
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