<template>
    <div>
        <h2>Не знаете с чего начать?</h2>
        <p>Программы предлагают ежедневные рекомендации в интерактивном календаре</p>
        <div class="blocks" :style="'left: ' + left + 'px'">
            <div class="item">
                <h3>Видео тренировки</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>\
                </svg>
            </div>
            <div class="item">
                <h3>Программа курса</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>\
                </svg>
            </div>
            <div class="item">
                <h3>Тарифы</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>\
                </svg>
            </div>
            <div class="item">
                <h3>Полный доступ</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>\
                </svg>
            </div>
        </div>
        <div class="arrows">
            <svg @click="movBlock('prev')" v-if="left != 0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3V304h96c17.7 0 32-14.3 32-32V240c0-17.7-14.3-32-32-32H256V150.3c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"/>
            </svg>
            <svg @click="movBlock('next')" v-if="left != -987" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z"/>
            </svg>
        </div>
    </div>
</template>

<script>
import { warn } from 'vue';

export default {
    data() {
        return {
            left: 0
        }
    },
    methods: {
        movBlock(direction) {
            let add = 329;

            if(direction == 'prev')
                this.left += add;
            else if(direction == 'next')
                this.left -= add;
        }
    }
}
</script>

<style lang="scss" scoped>
h2 {
    margin-top: 40px;
    font-size: 2.4em;
}

p {
    margin-top: 15px;
    color: rgb(155, 154, 151);
}

svg {
    width: 30px;
    height: 30px;
    fill: white;
    cursor: pointer;
}

.blocks {
    display: flex;
    margin-top: 30px;
    width: 2500px;
    position: relative;
    transition: left 0.5s ease;

    .item {
        background: rgb(50, 52, 67);
        padding: 30px 25px;
        border-radius: 12px;
        width: 304px;
        height: 190px;
        transition: all 0.5s ease;
        cursor: pointer;

        &:hover {
            transform: scale(1.05) translateX(6px) translateY(-3px);
        }

        &:not(:last-of-type) {
            margin-right: 25px;
        }

        p {
            color: rgb(155, 154, 151);
        }

        svg {
            float: right;
            font-size: 1.2em;
            position: relative;
            bottom: 20px;
            right:-10px;
        }
    }
}

.arrows {
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;

    svg {
        width: 60px;
        height: 60px;
        transition: all 0.5s ease;

        &:hover {
            transform: scale(1.1) translateX(5px) translateY(-3px);
        }
    }
}
</style>