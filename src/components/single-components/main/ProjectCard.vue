<script>

    export default {
        components:{

        },

        props:{
            name: String,
            description: String,
            technologies: Array
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
        <div class="card-body">
            <h4 class="card-title">{{ name }}</h4>
            
            <p>{{ description }}</p>            
        </div>
        <div class="card-footer">
            <ul>                                
                <li v-for="tech in technologies"> {{ tech.name }} </li>
            </ul>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    main{
        height: 500px;
    }
</style>