<script setup>
import logo from "../../src/assets/images/logo.gif";
import GifImage from "../../src/components/GifImage.vue";
import Marquee from "../../src/components/Marquee.vue";
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Loading from '../components/Loading.vue';
import Clock from "../components/Clock.vue";
import { gsap } from 'gsap';

const showLoading = ref(true);
const home = ref(null);
const instagram = ref(null);
const behance = ref(null);


function handleAnimationComplete(tl) {
  showLoading.value = false;
  setTimeout(() => {
    document.documentElement.style.height = 'auto';
    document.documentElement.overflow = "hidden";
  }, 500); //延遲多久開放滾動，請設定home組件載入tl的總時間
  if (tl) {
   
  }
}



function addMagnetEffect(element) {
  const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
  const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = element.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.5;
    const y = (clientY - (top + height / 2)) * 0.5;
    xTo(x);
    yTo(y);
  };

  const mouseLeave = () => {
    gsap.to(element, { x: 0, duration: 0.5 });
    gsap.to(element, { y: 0, duration: 0.5 });
    xTo(0);
    yTo(0);
  };

  element.addEventListener("mousemove", mouseMove);
  element.addEventListener("mouseleave", mouseLeave);

  return () => {
    element.removeEventListener("mousemove", mouseMove);
    element.removeEventListener("mouseleave", mouseLeave);
  };
}

function addHoverEffect(element) {
  const hover = () => {
    gsap.to(element, {
      backgroundColor: "#ffffff",
      color: "#000000",
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const leave = () => {
    gsap.to(element, {
      backgroundColor: "#000000",
      color: "#ffffff",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  element.addEventListener("mouseenter", hover);
  element.addEventListener("mouseleave", leave);

  return () => {
    element.removeEventListener("mouseenter", hover);
    element.removeEventListener("mouseleave", leave);
  };
}

onMounted(() => {
  const removeInstagramMagnetEffect = addMagnetEffect(instagram.value);
  const removeBehanceMagnetEffect = addMagnetEffect(behance.value);

  const removeInstagramHoverEffect = addHoverEffect(instagram.value);
  const removeBehanceHoverEffect = addHoverEffect(behance.value);

  onBeforeUnmount(() => {
    removeInstagramMagnetEffect();
    removeBehanceMagnetEffect();
    removeInstagramHoverEffect();
    removeBehanceHoverEffect();
  });
});

</script>

<template>

  <Loading v-if="showLoading" @animationComplete="handleAnimationComplete" />
  <div ref="home" class="text-white p-8 pb-0  bg-black h-[200vh] flex flex-col">
    <div class="h-screen flex flex-col overflow-visible">
      <div class="flex flex-col items-center justify-start flex-grow ">
        <div class="flex flex-row justify-between items-center w-full px-2">
          <Clock />
          <div class="flex-grow text-center text-xl absolute left-1/2 transform -translate-x-1/2 font-black"> Tang-Zhen</div>
          <div class="orbitron-500 flex space-x-4 py-1 z-20 text-lg">
            <div ref="instagram" class="border border-white px-2 cursor-pointer">INSTAGRAM</div>
            <div ref="behance" class="border border-white px-2 cursor-pointer">BEHANCE</div>
            <div ref="menu" class="border border-white bg-white px-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 24" fill="none"
                stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-align-justify">
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            </div>
          </div>

        </div>
        <div class="flex justify-center items-center w-10/12 mt-8 relative mx-auto text-xl orbitron-400">
          <div class="flex flex-col items-end ml-24 w-[20rem]">
            <div class="h-[36px] w-[36px]"></div>
            <h1 class="text-right whitespace-nowrap ">
              Located <br />In <br />
              Taiwan
            </h1>
          </div>
          <GifImage class="w-8/12 z-0 flex-grow mx-4" :src="logo" alt="logo" />
          <div class="flex flex-col items-start mr-24 w-[20rem] ">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="6 6 20 20" fill="none"
              stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-arrow-down-right">
              <path d="m7 7 10 10" />
              <path d="M17 7v10H7" />
            </svg>
            <h1 class="text-left">
              Freelance <br />
              Graphics & 3D Designer
            </h1>
          </div>
        </div>
        <div>
          <Marquee text="Squeeze Imagination into Graphics." class="top-[48rem] h-[20vh] " />
          <div
            class="absolute bg-[#ffffff] z-20 w-full h-20 top-[54rem] left-0 mix-blend-difference pointer-events-none ">
          </div>
        </div>
      </div>
    </div>


  </div>
  <div class="w-full bg-red-500 h-[100vh] "></div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');

@font-face {
  font-family: 'Orbitron';
  font-weight: 900;
  src: url('https://fonts.gstatic.com/s/orbitron/v15/yMJMMIlzdpvBhQQL_RMoKQ.woff2') format('woff2');
}

.orbitron-400 {
  font-family: "Orbitron", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

body {
  font-family: 'Orbitron', sans-serif;
  overflow: hidden;
  height: 100%;
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.overlay {
  mix-blend-mode: difference;
  pointer-events: none;
  opacity: 1;
}

::selection {
  background: white;
  color: black;
}

.magnet {
  display: inline-block;
  transition: transform 0.3s ease-out;
}
</style>