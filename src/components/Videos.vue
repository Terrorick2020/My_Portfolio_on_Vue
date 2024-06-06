<template>
    <div class="videos">
        <div class="video" @click="videos[0] =  !videos[0]">
            <p class="number">01</p>
            <div class="info">
                <h4>Упражнения дома</h4>
                <p>15 видео</p>
            </div>
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
            </div>
            <div class="video__open" v-if="videos[0]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor molestias velit amet quibusdam quo iure eos corporis ipsa! Tempore non nostrum consectetur perferendis accusamus consequuntur animi numquam magni placeat facere.
            </div>
        </div>
        <div class="video" @click="videos[1] =  !videos[1]">
            <p class="number">02</p>
            <div class="info">
                <h4>Оставайтесь в форме</h4>
                <p>48 видео</p>
            </div>
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
            </div>
            <div class="video__open" v-if="videos[1]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor molestias velit amet quibusdam quo iure eos corporis ipsa! Tempore non nostrum consectetur perferendis accusamus consequuntur animi numquam magni placeat facere.
            </div>
        </div>
        <div class="video" @click="videos[2] =  !videos[2]">
            <p class="number">03</p>
            <div class="info">
                <h4>Интенсив</h4>
                <p>25 видео</p>
            </div>
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
            </div>
            <div class="video__open" v-if="videos[2]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor molestias velit amet quibusdam quo iure eos corporis ipsa! Tempore non nostrum consectetur perferendis accusamus consequuntur animi numquam magni placeat facere.
            </div>
        </div>
        <div class="video" @click="videos[3] =  !videos[3]">
            <p class="number">04</p>
            <div class="info">
                <h4>Простые упражнения</h4>
                <p>35 видео</p>
            </div>
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
            </div>
            <div class="video__open" v-if="videos[3]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor molestias velit amet quibusdam quo iure eos corporis ipsa! Tempore non nostrum consectetur perferendis accusamus consequuntur animi numquam magni placeat facere.
            </div>
        </div>
        <div class="video" @click="videos[4] =  !videos[4]">
            <p class="number">05</p>
            <div class="info">
                <h4>Сжигание калорий</h4>
                <p>35 видео</p>
            </div>
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
            </div>
            <div class="video__open" v-if="videos[4]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor molestias velit amet quibusdam quo iure eos corporis ipsa! Tempore non nostrum consectetur perferendis accusamus consequuntur animi numquam magni placeat facere.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            videos: [false, false, false, false, false]
        }
    }
}
</script>

<style lang="scss" scoped>
.videos {
    margin-top: 250px;

    .video {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px 0;
        cursor: pointer;
        flex-wrap: wrap;
    
        &:not(:last-of-type) {
            border-bottom: 0.5px solid #666666;
        };

        &:hover {
            background: #1d1d1d;
            transition: all 500ms ease;
            transform: scale(1.1);

            svg {
                transform: rotate(90deg);
            };
        };

        .number {
            color: #575757;
            font-weight: 600;
            font-size: 1.2em;

            @media(min-width: 490px) {
                margin-left: 10px;
            };

            @media(max-width: 490) and (min-width: 390px) {
                margin-left: 5px;
            };
        };

        .info {

            @media(min-width: 650px) {
                width: 450px;
            };

            @media(max-width: 650px) and (min-width: 490px){
                margin-left: 20px;
                width: 300px;
            };

            @media(max-width: 490) and (min-width: 390px){
                margin-left: 10px;
                width: 200px;
            };

            @media(max-width: 390px) {
                margin-right: 10px;
                width: auto;
            };

            h4 {
                font-weight: 400;

                @media(min-width: 690px) {
                    font-size: 2.5em;
                };

                @media(max-width: 690px) and (min-width: 490px) {
                    font-size: 1.5em;
                };

                @media(max-width: 490px) {
                    font-size: 1em;
                };
            };

            p {
                color: #898989;
                margin-top: 10px;
            };
        };

        .icon {
            margin-right: 20px;
            transition: all 500ms ease;

            svg {
                width: 25px;
                height: 25px; 
                transition: all 500ms ease;

                path {
                    fill: #FFFFFF;
                };
            };
        };

        .video__open {
            margin: 30px 50px;
            width: 100%;

        };
    };
};
</style>