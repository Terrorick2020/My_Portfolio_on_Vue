<template>
    <div class="head">
        <div class="head__promotion">
            <span>NEW</span> Новая интенсивная тренировка 
        </div>
        <div class="head__lead">
            <div>
                <h1>Cardio<br>Exercise</h1>
                <p>Компания Workout предлагает инновационные комплексы для фитнеса, направленные на улучшение сердечно-сосудистой системы и общую физическую пригодность.</p>
                <div class="lead__buttons">
                    <button>Начать</button>
                    <button>Детальнее</button>
                </div>
            </div>
            <div>
                <img src="../assets/lead.png" alt="Workout">
                <div class="lead__info">
                    <div class="lead__info__time">
                        <span>{{ showTime }}</span>
                        ВРЕМЯ
                    </div>
                    <div class="lead__info__cl">
                        <span>{{ caloriesCount }}</span>
                        КАЛОРИИ
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showTime: '30:00',
            timerCount: 30 * 60,
            caloriesCount: 1285
        }
    },
    watch: {
        timerCount: {
            handler() {
                setTimeout(() => {
                    if(this.timerCount <=0) return;

                    this.timerCount--;
                    const minutes = Math.floor(this.timerCount / 60);
                    const seconds = this.timerCount - (minutes * 60);
                    let txtSeconds = 0;
                    if(seconds >= 0 && seconds < 10)
                        txtSeconds = "0" + seconds; 
                    else
                        txtSeconds = seconds;
                    this.showTime = minutes + ':' + txtSeconds;
                }, 1000);
            },
            immediate: true
        },
        caloriesCount: {
            handler() {
                setTimeout(() => {
                    if(this.caloriesCount <=0) return;
                    this.caloriesCount--;
                }, 1400);
            },
            immediate: true
        }
    }
}
</script>

<style lang="scss" scoped>
.head {
    margin-top: 140px;

    @media(min-width: 1024px) {
        overflow: hidden;
        height: 800px;
    };
    

    @keyframes pulse {
        to {
            transform: scale(0.95);
        };
        from {
            transform: scale(1);
        }; 
    };

    .head__promotion {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 200px;
        padding: 10px 5px;
        color: rgb(209, 209, 209);
        animation: pulse infinite ease-in-out 1.5s alternate;

        @media(min-width: 450px) {
            width: 350px;
        };

        @media(max-width: 450px) {
            widows: 280p;
            font-size: 0.85em;
        };

        span {
            background: rgb(34, 173, 117);
            text-align: center;
            border-radius: 200px;
            padding: 6px 10px;
            margin-right: 10px;
            font-weight: 600;
        };
    };

    .head__lead {
        margin-top: 20px;
        display: flex;
        position: relative;

        h1 {
            word-spacing: -2px;

            @media(min-width: 1500px) {
                font-size: 12em;
                line-height: 170px;
            };

            @media(max-width: 1500px) and (min-width: 1300px) {
                font-size: 11em;
                line-height: 160px;
            };

            @media(max-width: 1300px) and (min-width: 650px) {
                font-size: 8.5em;
                line-height: 150px;
            };

            @media(max-width: 650px) and (min-width: 450px) {
                font-size: 5.5em;
                line-height: 110px;
            };

            @media(max-width: 450px) {
                font-size: 4em;
                line-height: 90px;
            };
        };

        p {
            color: #868686;
            margin: 20px 0;
            margin-right: 15px;

            @media (min-width: 650px) {
                width: 600px;
            };
        };

        .lead__buttons > button {
            background: #25AB75;
            padding: 20px;
            width: 160px;
            font-weight: 600;
            font-size: 1.05em;
            color: #fff;
            border: 0;
            cursor: pointer;
            border-radius: 10px;
            margin-top: 30px;
            transition: transform 500ms ease;

            &:first-of-type {
                margin-right: 35px;
            }

            &:last-of-type {
                background: rgba(255, 255, 255, 0.1);
                margin-bottom: 20px;
            };

            &:hover {
                transform: translateY(-5px) translateX(3px);
            };
        };

        > div:last-of-type {

            @media(max-width: 1024px) {
                display: none;
            };

            img {
                position: relative;

                @media(min-width: 1500px) {
                    bottom: 255px;
                    right: 270px;
                };

                @media(max-width: 1500px) and (min-width: 1300px) {
                    transform: scale(0.85);
                    bottom: 320px;
                    right: 295px;
                };

                @media(max-width: 1300px) and (min-width: 1024px) {
                    transform: scale(0.7);
                    bottom: 330px;
                    right: 345px;
                };
            };

            .lead__info {
                position: absolute;
                top: 0;
                right: 0;

                @mixin infoblock($color) {
                    background: #191919;
                    border-radius: 20px;
                    padding: 20px 30px;
                    width: 150px;
                    font-size: 0.7em;
                    margin-bottom: 25px;
                    text-align: start;
                
                    & span {
                        color: $color;
                        font-size: 3em;
                        font-weight: 600;
                    };
                };

                .lead__info__time {
                    @include infoblock(rgb(255, 230, 66));
                };

                .lead__info__cl {
                    @include infoblock(rgb(251, 19, 81));
                };
            };
        };
    };
}
</style>