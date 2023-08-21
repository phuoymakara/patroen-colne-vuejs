<template>
  <header class=" w-[100%] sm:max-w-full bg-white py-[15px] px-[20px] md:flex justify-between border-b-2 sticky top-0 left-0 ">
    <div class="flex justify-between sm">
      <span class="py-2">
        <img src="../public/patroen_logo.png" width="24" class="cursor-pointer" alt="Logo">
      </span>
      <div class="mx-3 md:block hidden sm">
        <ul class=" flex py-1 ">
          <li class=" mx-4 cursor-pointer">
            <NuxtLink class="text-[15px] font-semibold flex">
              Products <svg xmlns="http://www.w3.org/2000/svg" class="mx-1 mt-0" width="16" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4l-6 6Z"/></svg>
            </NuxtLink></li>
          <li class="mx-4 cursor-pointer">
            <NuxtLink class="text-[15px] font-semibold  flex">
              For creators <svg xmlns="http://www.w3.org/2000/svg" class="mx-1 mt-0" width="16" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4l-6 6Z"/></svg>
            </NuxtLink>
          </li>
          <li class="mx-4 cursor-pointer">
            <NuxtLink class="text-[15px] font-semibold ">
              Pricing
            </NuxtLink>
          </li>
          <li class="mx-4 cursor-pointer">
            <NuxtLink class="text-[15px] font-semibold  flex">
              Resources <svg xmlns="http://www.w3.org/2000/svg" class="mx-1 mt-0" width="16" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4l-6 6Z"/></svg>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <span class="md:hidden block sm" id="menu_act">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 2048 2048"><path fill="#888888" d="M2048 1536v-128H768v128h1280zm0-640H0v128h2048V896zM384 384v128h1664V384H384z"/></svg>
      </span>
    </div>

    <div class="hidden w-full bg-white z-10 left-0 fixed top-[6.5%]" id="menu-top">
      <ul>
        <li class="items-center justify-center flex border-y-[0.5px] py-2"><NuxtLink class="font-serif text-[16px] font-medium">Home</NuxtLink></li>
        <li class="items-center justify-center flex border-y-[0.5px] py-2"><NuxtLink class="font-serif text-[16px] font-medium">About US</NuxtLink></li>
        <li class="items-center justify-center flex border-y-[0.5px] py-2"><NuxtLink class="font-serif text-[16px] font-medium">Details</NuxtLink></li>
        <li class="items-center justify-center flex border-y-[0.5px] py-2"><NuxtLink class="font-serif text-[16px] font-medium">Contact</NuxtLink></li>
      </ul>
    </div>

    <div class="md:flex sm:block">
      <div class="flex bg-[#ddd] p-1 px-2 rounded-[20px] md:w-[280px] sm:w-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="25" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16Zm0-2q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/></svg>
        <input type="text" placeholder="Find a creator" class="bg-[#ddd] outline-none">
      </div>
      <span class="md:block hidden sm font-semibold p-1 mx-4 hover:border-black cursor-pointer "><h2 class="py-1 hover:border-black hover:border-b-2">Login</h2></span>
      <button class="bg-red-600 py-2 px-3 border-red-600 border-[2px] font-semibold rounded-[18px] text-white hover:bg-white hover:text-black hover:border-red-600 md:block hidden sm">Start a paid membership</button>
    </div>
  </header>
</template>

<script>
export default{
  data(){
    return{
      active: false
    }
  },
  mounted(){
    const menu = document.getElementById('menu_act')
    menu.addEventListener("click",this.toggleMenu)
  },
  methods:{
    toggleMenu(){
      const show = document.getElementById('menu-top')
      if(!this.active){
        show.classList.remove('hidden')
        this.active=true
      }else{
        show.classList.add('hidden')
        this.active=false
      }
    }
  }
}
</script>
