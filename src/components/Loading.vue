<template>
    <div class="fixed inset-0 h-screen w-screen overflow-hidden z-50 orbitron-900" >
        <div class="fixed inset-0 bg-white z-50 flex justify-center items-center" ref="loading">
            <div class="counter font-black fixed -bottom-8 right-12 [font-size:10rem]" ref="counter">0</div>
        </div>
        <div class="absolute inset-0 bg-black z-40" ref="black"></div>
        <div class="absolute inset-0 bg-white z-10" ref="white2"></div>
        <div class="absolute inset-0 z-10 flex justify-center items-center text-center overflow-hidden" ref="white3">
            <div class="absolute top-0 left-0 bottom-0 bg-white z-20 w-1/2" ref="leftDoor"></div>
            <div class="absolute top-0 right-0 bottom-0 bg-white z-20 w-1/2" ref="rightDoor"></div>
            <div class="font-semibold overflow-hidden [font-size:3rem] flex z-30">
                <div ref="welcomeText" class="leading-[0.7] pt-6">Welcome</div>
                <div ref="restText" class="leading-[0.8] pt-6">&nbspto the wonder of 3D</div>
            </div>
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
const leftDoor = ref(null);
const rightDoor = ref(null);
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
            emit('animationComplete', tl);
        }
    });

    // 數字從 0 到 100
    tl.to(counter.value, {
        delay: 0.2,
        duration: 1,
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
        y: 100,
        duration: 0.5,
        ease: "back.out(1)",
        stagger: 0.04
    },"-=0.5");

    tl.from(restText.value.querySelectorAll('div'), {
        y: 100,
        duration: 0.5,
        ease: "back.out(1)",
        stagger: 0.04
    },"-=0.5" );
    
    //字消失
    tl.to([...welcomeText.value.querySelectorAll('div'), ...restText.value.querySelectorAll('div')], {
        delay: 0.5,
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
    },);

 
    // 開門
    tl.to(leftDoor.value, {
        delay: 0.25,
        duration: 1,
        x: '-100%',
        ease: "power3.inOut"
    }, );

    tl.to(rightDoor.value, {
        delay: 0.25,
        duration: 1,
        x: '100%',
        ease: "power3.inOut"
    }, "-=1.25");


});

</script>

<style scoped>

</style>