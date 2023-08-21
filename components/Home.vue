<template>
  <div class="w-full pt-5">
    <h1 class="text-black text-center text-[35px] font-medium">Create on your teams</h1>
    <div class="items-center justify-center flex mt-3 mb-6">
      <button class="bg-red-600 border-red-600 border-[1.5px] py-2 px-8 text-white rounded-[20px]">Get Start</button>
    </div>

    <!-- All Pictures-->
    <div v-for="i in 3" v-bind:key="i">
      <div class="w-full mt-3 flex flex-wrap md:flex-row sm:flex-row px-2 sm:mb-3">
        <div class="md:w-[13.8%] mr-[4px] rounded-md h-auto w-[31%] mb-2 sm">
          <img src="../public/row-01.jpg" class="rounded-md md:h-[143px] w-full h-[140px] object-fill sm" alt="">
        </div>
        <div class="md:w-[13.8%] mx-[4px] rounded-md h-auto w-[31%] mb-2 sm">
          <img src="../public/row-02.jpg" class="rounded-md md:h-[143px] w-full h-[140px] object-fill sm" alt="">
        </div>
        <div class="md:w-[13.8%] mx-[4px] rounded-md h-auto w-[31%] sm">
          <img src="../public/row-03.jpg" class="rounded-md md:h-[143px] w-full h-[140px] object-fill sm" alt="">
        </div>
        <div class="md:w-[13.8%] mx-[4px] rounded-md h-auto w-[31%] sm">
          <img src="../public/row-04.png" class="rounded-md md:h-[143px] w-full h-[140px] object-fill sm" alt="">
        </div>
        <div class="md:w-[13.8%] mx-[4px] rounded-md h-auto w-[31%] mb-2 sm">
          <img src="../public/row-05.jpg" class="rounded-md md:h-[143px] w-full h-[140px] object-fill sm" alt="">
        </div>
        <div class="md:w-[13.8%] mx-[4px] rounded-md h-auto w-[31%] mb-2 sm">
          <img src="../public/row-06.jpg" class="rounded-md md:h-[143px] w-full h-[140px] object-fill sm" alt="">
        </div>
        <div class="md:w-[13.8%] ml-[4px] rounded-md h-auto w-[31%] mb-2 sm">
          <img src="../public/row-07.png" class="rounded-md md:h-[143px] w-full h-[140px] object-fill sm" alt="">
        </div>
      </div>
    </div>
    <!--End All Pictures-->
    <!--  Mid -->
    <div class="w-[100%] mt-6">
      <h1 class="text-center font-bold text-[45px] text-black">Search over 260,000 creators on Patreon</h1>
      <div class="items-center md:mt-2 justify-center mx-auto flex  flex-wrap px-2 md:flex-row sm:flex-col">
         <div class=" md:w-[600px] flex bg-[#ddd] p-1 px-4 rounded-[20px] w-full mt-5 sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="md:mr-2" width="25" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16Zm0-2q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/></svg>
          <input type="text" placeholder="Find a creator" class="bg-[#ddd] font-medium text-[20px] outline-none w-full ">
        </div>
      <button class=" md:w-auto border-red-600 bg-red-600 md:mt-0 border-[1.5px] md:ml-6 rounded-[60px] md:py-2 md:px-4 text-white font-medium text-[16px] py-3 mt-4 w-[40%] sm">Search</button>
      </div>
    </div>

    <div class="w-[100%] mt-20">
      <h1 class="text-center font-bold text-[55px] text-black">What is Patreon?</h1>
      <p class="text-center text-black">
        Patreon gives creators the tools they need to reliably reach their fans, strengthen <br>
         their communities and build sustainable businesses.
      </p>
    </div>

    <div class="mb-10 w-[80%] mt-20 mx-auto flex flex-wrap md:flex-row sm:flex-col md:justify-between">
      <div class="md:w-[45%] items-center justify-center flex h-auto">
        <div class="bg-white mb-4 sm">
          <img src="../public/md-1.png" class="w-full border-[#ddd] border-[1.5px] rounded-[15px]" alt="">
          <h1 class="text-center font-bold text-[30px] mt-3">Create your space</h1>
          <p class="text-center mt-1">
            Build your creative home outside of social media. Fans can join your community to access the work they love directly from you.
          </p>
        </div>
      </div>
      <div class="md:w-[45%]">
        <div class="bg-white mb-4 sm">
          <img src="../public/md-2.png" class="w-full border-[#ddd] border-[1.5px] rounded-[15px]" alt="">
          <h1 class="text-center font-bold text-[30px] mt-3">Reach your fans directly</h1>
          <p class="text-center mt-1">
            Use a suite of publishing tools to share any media directly to your fans. No algorithms. No ads. When you share it, they see it.
          </p>
        </div>
      </div>
    </div>


<!--jh-->

     <div class="mb-10 w-[80%] mt-20 mx-auto flex flex-wrap md:flex-row sm:flex-col md:justify-between">
      <div class="md:w-[45%] items-center justify-center flex h-auto">
        <div class="bg-white mb-4 sm">
          <img src="../public/md-4.png" class="w-full border-[#ddd] border-[1.5px] rounded-[15px]" alt="">
          <h1 class="text-center font-bold text-[30px] mt-3">Create your space</h1>
          <p class="text-center mt-1">
            Build your creative home outside of social media. Fans can join your community to access the work they love directly from you.
          </p>
        </div>
      </div>
      <div class="md:w-[45%]">
        <div class="bg-white mb-4 sm">
          <img src="../public/md-4.png" class="w-full border-[#ddd] border-[1.5px] rounded-[15px]" alt="">
          <h1 class="text-center font-bold text-[30px] mt-3">Reach your fans directly</h1>
          <p class="text-center mt-1">
            Use a suite of publishing tools to share any media directly to your fans. No algorithms. No ads. When you share it, they see it.
          </p>
        </div>
      </div>
    </div>

<!--hh-->
    <div class="w-[100%] mt-20">
      <h1 class="text-center font-bold text-[55px] text-black">Who uses Patreon?</h1>
      <p class="text-center text-black">
        Hundreds of thousands of video creators, podcasters, writers, gamers, musicians <br>
        and more are achieving creative and financial freedom doing what they love on <br>
        Patreon.
      </p>
    </div>

    <div class="mt-4 md:flex bg-[#ddd] md:w-[40%] mx-auto rounded-[20px] md:px-2 md:py-1 sm:py-0 sm:px-1 w-[100%] hidden sm">
        <button class="text-red-600 rounded-[15px] mr-1 md:px-3 md:py-1 sm:py-0 sm:px-2 bg-white">Video Creators</button>
        <button class="text-black rounded-[15px] md:px-3 py-1 mx-1 hover:bg-white ">Podcasters</button>
        <button class="text-black rounded-[15px] md:px-3 py-1 mx-1 hover:bg-white ">Visual Actists</button>
        <button class="text-black rounded-[15px] px-3 py-1 mx-1 hover:bg-white">Musicains</button>
        <button class="text-red-600 rounded-[15px] px-3 py-1 ml-1 hover:bg-white">Others</button>
    </div>
     <div class="md:hidden items-center justify-center flex flex-wrap md:flex-row sm:flex-col sm:block px-1 mt-3 sm">
        <button class="text-white rounded-[15px] mr-1 md:px-3 md:py-1  bg-red-600 px-2 py-1 mb-2 sm">Video Creators</button>
        <button class="text-black rounded-[15px] md:px-3 md:py-1 mx-1 hover:bg-red-600 hover:text-white px-2 py-1 mb-2 sm">Podcasters</button>
        <button class="text-black rounded-[15px] md:px-3 md:py-1 mx-1 hover:bg-red-600 hover:text-white px-2 py-1 mb-2 sm">Visual Actists</button>
        <button class="text-black rounded-[15px] md:px-3 md:py-1 mx-1 hover:bg-red-600 hover:text-white px-2 py-1 mb-2 sm">Musicains</button>
        <button class="text-black rounded-[15px] md:px-3 md:py-1 ml-1 hover:bg-red-600 hover:text-white p-1 px-2 py-1 mb-2 sm">Others</button>
    </div>

    <div class="mt-6 w-[80%] mx-auto flex flex-wrap md:flex-row sm:flex-col">
      <div class="h-auto md:w-[19.5%] mr-1 w-[48%] sm">
        <img src="../public/ud-1.png" alt="">
      </div>
      <div class="h-auto md:w-[19.5%] mx-1 w-[48%] sm">
        <img src="../public/ud-2.png" alt="">
      </div>
      <div class="h-auto md:w-[19.5%] mx-1 w-[48%] sm">
        <img src="../public/ud-3.png" alt="">
      </div>
      <div class="h-auto md:w-[19.5%] ml-1 w-[48%] sm">
        <img src="../public/ud-4.png" alt="">
      </div>
       <div class="h-auto md:w-[19.5%] ml-1 w-[48%] sm">
        <img src="../public/ud-5.png" alt="">
      </div>
    </div>


    <!--hh-->
    <div class="w-[100%] mt-20 mb-6 sm">
      <h1 class="text-center font-bold text-[55px] text-black">How creators make it their own</h1>
      <p class="text-center text-black">
        See how creators are using Patreon to strengthen their <br>
        communities, own their fan relationships and grow their <br>
        businesses.
      </p>
    </div>

    <div class="w-[80%] mx-auto flex flex-wrap md:flex-row sm:flex-col  items-center justify-center ">
      <div class="md:w-[30%] md:mr-6 mb-5 sm">
        <img src="../public/bov-3.png" class="w-full rounded-[10px]" alt="">
        <h1 class="font-bold text-[20px] mt-1">
          How illustrator Ross Tran makes a living making art and teaching design courses
        </h1>
        <NuxtLink class="border-black border-b-[1.5px] cursor-pointer hover:text-red-600">Read more...</NuxtLink>
      </div>
       <div class="md:w-[30%] md:mx-6 mb-5 sm">
        <img src="../public/bov-3.png" class="w-full rounded-[10px]" alt="">
        <h1 class="font-bold text-[20px] mt-1">
          How illustrator Ross Tran makes a living making art and teaching design courses
        </h1>
        <NuxtLink class="border-black border-b-[1.5px] cursor-pointer hover:text-red-600">Read more...</NuxtLink>
      </div>
       <div class="md:w-[30%] md:ml-6 mb-5 sm">
        <img src="../public/bov-3.png" class="w-full rounded-[10px]" alt="">
        <h1 class="font-bold text-[20px] mt-1">
          How illustrator Ross Tran makes a living making art and teaching design courses
        </h1>
        <NuxtLink class="border-black border-b-[1.5px] cursor-pointer hover:text-red-600">Read more...</NuxtLink>
      </div>
    </div>

    <div class="w-[100%] bg-[#ddd] h-[250px] py-5 ">
        <h1 class="text-center font-bold text-[45px] text-black">Take ownership of your creativity</h1>
        <div class="items-center justify-center flex py-4">
          <button class="bg-red-600 py-2 px-3 border-red-600 border-[1.5px] font-semibold rounded-[18px] text-white hover:bg-white hover:text-black hover:border-red-600 md:block ">Start a paid membership</button>
        </div>
    </div>

  </div>
</template>