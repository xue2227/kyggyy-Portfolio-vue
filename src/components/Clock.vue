<template>
    <div class="clock bg-black text-white border border-white pr-2">
        <div class="time">
            <div class="relative period number pl-2">{{ period }}
                <div class="absolute inset-0 w-[170%] h-10/12 bg-white z-20 mix-blend-difference pointer-events-none"></div>
            </div>
            <div class="colon w-7"></div>
            <div class="digit number">{{ hours }}</div>
            <div class="colon number bold">:</div>
            <div class="digit number">{{ minutes }}</div>
            <div class="colon number bold">:</div>
            <div class="digit number">{{ seconds }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const period = ref('');
const hours = ref('');
const minutes = ref('');
const seconds = ref('');

function updateClock() {
    const now = new Date();
    const hrs = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();

    period.value = hrs >= 12 ? 'p.m.' : 'a.m.';
    const formattedHours = hrs % 12 === 0 ? 12 : hrs % 12;
    hours.value = String(formattedHours).padStart(2, '0');
    minutes.value = String(mins).padStart(2, '0');
    seconds.value = String(secs).padStart(2, '0');
}

onMounted(() => {
    updateClock();
    const interval = setInterval(updateClock, 1000);
    onUnmounted(() => clearInterval(interval));
});
</script>

<style scoped>
.clock {
    font-family: 'Orbitron', monospace;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
}

.time {
    display: flex;
    align-items: center;
}

.number {
    display: inline-block;
    width: 2ch;
    /* 確保每個字符的寬度固定 */
    text-align: center;
}

.bracket {
    font-family: 'Orbitron', monospace;
}

.bold {
    font-weight: bold;
    /* 加粗冒號 */
}
</style>