<script setup>
  import logo from "../../src/assets/images/logo.gif";
  import GifImage from "../../src/components/GifImage.vue";
  import skewersLogo from "../../src/assets/images/skewers.svg";
  import graduateLogo from "../../src/assets/images/graduate.svg";
  import mnemonistLogo from "../../src/assets/images/mnemonist.svg";
  import mvLogo from "../../src/assets/images/mv.svg";
  import rabbit from "../../src/assets/images/rabbit.svg";
  import poster from "../../src/assets/images/poster.svg";

  import { ref } from 'vue';
  import Loading from '../components/Loading.vue';

  const showLoading = ref(true);

  function handleAnimationComplete() {
    showLoading.value = false;
  }
</script>

<template>
  <Loading v-if="showLoading" @animationComplete="handleAnimationComplete" />
  <div class="text-white p-4 font-concielian bg-black h-screen flex flex-col">
    <div class="flex flex-col items-center justify-between flex-grow">
      <div class="flex flex-row justify-between w-full px-2">
        <p>MAIL. ken523220@gmail.com</p>
        <p>NAME. /Tang-Zhen/Ken</p>
        <p>Telephone. (886)922706064</p>
      </div>
      <GifImage class="w-6/12 py-12" :src="logo" alt="logo" />
      <div class="flex flex-row w-screen justify-between px-10">
        <div class="flex flex-col items-center text-center w-40 p-4">
          <img :src="skewersLogo" alt="skewers project" />
          <p class="pt-4">
            Skewers
            <br />
            project
          </p>
        </div>
        <div class="flex flex-col items-center text-center w-40 p-4">
          <img :src="graduateLogo" alt="graduation project" />
          <p class="pt-4">
            Graduation
            <br />
            project
          </p>
        </div>
        <div class="flex flex-col items-center text-center w-40 p-4">
          <img :src="mnemonistLogo" alt="mnemonist" />
          <p class="pt-4">Mnemonist</p>
        </div>
        <div class="flex flex-col items-center text-center w-40 p-4">
          <img :src="mvLogo" alt="mv project" />
          <p class="pt-4">
            MV
            <br />
            project
          </p>
        </div>
        <div class="flex flex-col items-center text-center w-40 p-4">
          <img :src="rabbit" alt="rabbit" />
          <p class="pt-4">RABBIT</p>
        </div>
        <div class="flex flex-col items-center text-center w-40 p-4">
          <img :src="poster" alt="poster visual" />
          <p class="pt-4">
            Poster
            <br />
            Visual
          </p>
        </div>
      </div>

    </div>
  </div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
  @font-face {
    font-family: 'Concielian';
    src: url('../src/assets/fonts/Concielian.woff2') format('woff2');
  }

  body {
    font-family: 'Concielian', sans-serif;
  }
</style>