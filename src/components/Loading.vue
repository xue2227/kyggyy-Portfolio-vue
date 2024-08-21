<template>
    <div class="fixed inset-0 bg-white z-50 flex justify-center items-center" ref="loading">
        <div class="counter font-black fixed -bottom-8 right-12 [font-size:10rem]" ref="counter">0</div>
    </div>
    <div class="absolute inset-0 bg-black z-40" ref="black"></div>
    <div class="absolute inset-0 bg-white z-10" ref="white2"></div>
    <div class="absolute inset-0 bg-white z-10 flex justify-center items-center text-center leading-[ " ref="white3">
        <div class="font-semibold overflow-hidden [font-size:3rem] flex ">
            <div ref="welcomeText" class="leading-[0.7] pt-6">Welcom ,</div>
            <div ref="restText" class="leading-[0.7] pt-6">&nbsp;to the wonder of 3D</div>
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref, defineEmits } from 'vue';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

const loading = ref(null);
const counter = ref(null);
const black = ref(null);
const white2 = ref(null);
const white3 = ref(null);
const welcomeText = ref(null);
const restText = ref(null);

const emit = defineEmits(['animationComplete']);

gsap.registerPlugin(CustomEase);
onMounted(() => {
    const splitText = (element) => {
        const text = element.innerText;
        element.innerText = '';
        text.split('').forEach(char => {
          const div = document.createElement('div');
          div.innerHTML = char === ' ' ? '&nbsp;' : char;
          div.classList.add('inline-block');
          element.appendChild(div);
        });
      };

      splitText(welcomeText.value);
      splitText(restText.value);

    const tl = gsap.timeline({
        onComplete: () => {
            emit('animationComplete');
        }
    });

    // 數字從 0 到 100
    tl.to(counter.value, {
        delay: 0.2,
        duration: 1.8,
        innerText: 100,
        snap: { innerText: 1 },
        ease: CustomEase.create("custom", "M0,0 C0,0 -0.01,-0.021 0.11,0.026 0.423,0.155 0.373,0.636 0.417,0.656 0.487,0.687 0.67,0.677 0.716,0.697 0.933,0.788 1,1 1,1 "), onUpdate: function () {
            counter.value.innerText = Math.round(counter.value.innerText);
        }
    });

    // 組件往上移出
    tl.to([loading.value, black.value, white2.value], {
        delay: 0.5,
        duration: 1,
        y: "-100vh",
        ease: "power4.inOut",
        stagger: 0.3
    },);

    tl.from(welcomeText.value.querySelectorAll('div'), {
        delay: -0.45,
        y: 100,
        duration: 0.5,
        ease: "back.out(1)",
        stagger: 0.025
    },);

    tl.from(restText.value.querySelectorAll('div'), {
        delay: 0.1,
        y: 100,
        duration: 0.5,
        ease: "back.out(1)",
        stagger: 0.025
    });

 
    tl.to([white3.value], {
        delay: 0.5,
        duration: 1,
        y: "-100vh",
        ease: "power4.inOut",
    });


});
</script>

<style scoped></style>