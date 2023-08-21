<template>
<main-layout>
  <!-- <h1 class="h-[110vh]">Hello</h1> -->
  <home-page class=""/>
</main-layout>
</template>

<script>
import DefualtLayot from '../layouts/default.vue'
import HomePage from '../components/Home.vue'
export default{
  components:{
    'main-layout': DefualtLayot,
    'home-page' : HomePage
  }
}
</script>
