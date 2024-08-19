<template>
    <div class="fixed inset-0 bg-white z-50 flex justify-center items-center" ref="loading">
        <div class="counter font-black fixed bottom-6 right-6 text-9xl" ref="counter">0</div>
    </div>
    <div class="absolute inset-0 bg-black z-40" ref="black"></div>
    <div class="absolute inset-0 bg-white z-30" ref="white"></div>
    <div class="absolute inset-0 bg-black z-20" ref="black2"></div>
    <div class="absolute inset-0 bg-white z-10" ref="white2"></div>
    <div class="absolute inset-0 bg-white z-10" ref="white3"></div>
</template>

<script setup>
import { onMounted, ref, defineEmits } from 'vue';
import { gsap } from 'gsap';

const loading = ref(null);
const counter = ref(null);
const black = ref(null);
const black2 = ref(null);
const white = ref(null);
const white2 = ref(null);
const white3 = ref(null);

const emit = defineEmits(['animationComplete']);

onMounted(() => {
    const tl = gsap.timeline({
        onComplete: () => {
            emit('animationComplete');
        }
    });

    // 數字從 0 到 100
    tl.to(counter.value, {
        duration: 1.5,
        innerText: 100,
        snap: { innerText: 1 },
        ease: "none",
        onUpdate: function () {
            counter.value.innerText = Math.round(counter.value.innerText);
        }
    });

    // 組件往上移出
    tl.to([loading.value, black.value, white.value, black2.value, white2.value, white3.value], {
        delay: 0.5,
        duration: 1,
        y: "-100vh",
        ease: "power4.inOut",
        stagger: 0.3
    });
});
</script>

<style scoped></style>