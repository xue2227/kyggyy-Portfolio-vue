<template>
    <div ref="marqueeContainer"
        class="absolute left-0 right-0 overflow-hidden whitespace-nowrap  text-white border-y-2 border-white h-auto">
        <div ref="marqueeContent1" class="inline-block text-[12rem]/[1] orbitron-500 ">
            {{ "&nbsp;"+upperCaseText }}
        </div>
        <div ref="marqueeContent2" class="inline-block text-[12rem]/[1] orbitron-500">
            {{ "&nbsp;"+upperCaseText }} 
        </div>
    </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'Marquee',
    props: {
        text: {
            type: String,
            required: true,
        },
        speed: {
            type: Number,
            default: 0.04, // 默認速度
        },
    },
    data() {
        return {
            upperCaseText: '',
            xPercent: 0,
            scrollSpeed: 0,
        };
    },
    mounted() {
        this.upperCaseText = this.text.toUpperCase(); // 將 text 轉換為大寫

        this.$nextTick(() => {
            gsap.to({}, {
                scrollTrigger: {
                    trigger: document.documentElement,
                    scrub: 0.25,
                    start: 0,
                    end: window.innerHeight,
                    onUpdate: (self) => {
                        this.scrollSpeed = self.getVelocity() / 10000; // 根據滾動速度調整
                    }
                }
            });

            this.animate();
        });
    },
    methods: {
        animate() {
            this.xPercent -= this.speed + this.scrollSpeed;
            if (this.xPercent < -100) {
                this.xPercent = 0;
            }
            gsap.set(this.$refs.marqueeContent1, { xPercent: this.xPercent });
            gsap.set(this.$refs.marqueeContent2, { xPercent: this.xPercent });
            requestAnimationFrame(this.animate);
        }
    },
};
</script>

<style scoped>
</style>