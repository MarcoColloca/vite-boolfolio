<script>
  import AppHeader from './components/AppHeader.vue';
  import AppFooter from './components/AppFooter.vue';
  import AppMain from './components/AppMain.vue';

  export default{
    components:{
      AppHeader,
      AppMain,
      AppFooter,
    },

    data(){
      return{
        test: 'Hello!',
      }
    }
  }
</script>




<template>
  <AppHeader></AppHeader>


  

  <!-- <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p> -->

  <main>
    <RouterView />
  </main>


  <AppFooter></AppFooter>
</template>




<style lang="scss">
</style>
