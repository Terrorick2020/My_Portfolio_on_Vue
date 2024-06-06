<template>
    <div class="head-tarrifs">
        <div class="head-tarrifs__lead">
            <div>
                <h1>Cardio<br>Exercise</h1>
                <p>Огромный выбор материалов о здоровье и фитнесе, полезных рецептов и историй преображения, которые помогут вам привести себя в форму и оставаться в форме!</p>
                <div class="lead__buttons">
                    <button>Присоединяйтесь</button>
                </div>
            </div>
            <div>
                <img src="../assets/lead_trrifs.png" alt="Workout">
                <div class="lead__info">
                    <div class="lead__info__km">
                        <div>
                            <img src="../assets/running-stick-figure-man.png" alt="small ranning man">
                        </div>
                        <div>
                            <span>4,95</span>
                            km
                        </div>
                    </div>
                    <div class="lead__info__wo">
                            <img src="../assets/white_rectungle.png" alt="small ranning man">
                    </div>
                    <div class="lead__info__fv">
                        <span>500+</span><br>
                        Бесплатных видео
                    </div>
                </div>
            </div>
            <img src="../assets/brends.png" alt="brends">
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.head-tarrifs {
    margin-top: 140px;

    @media(min-width: 1024px) {
        overflow: hidden;
        height: 800px;
    };

    @media (max-width: 1024px) and (min-width: 375px) {
        margin-bottom: 270px;
    };

    @media(max-width: 375px) {
        margin-bottom: 210px;
    };

    .head-tarrifs__lead {
        margin-top: 20px;
        display: flex;
        position: relative;

        h1 {
            word-spacing: -2px;

            @media(min-width: 1500px) {
                font-size: 11em;
                line-height: 160px;
            };

            @media(max-width: 1500px) and (min-width: 1300px) {
                font-size: 10em;
                line-height: 140px;
            };

            @media(max-width: 1300px) and (min-width: 650px) {
                font-size: 8.5em;
                line-height: 130px;
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

            @media(min-width: 1500px) {
                font-size: 1.2em;
            };

            @media (min-width: 650px) {
                width: 600px;
            };
        };

        .lead__buttons > button {
            background: rgb(230, 83, 60);
            padding: 20px;
            width: 234px;
            font-weight: 600;
            font-size: 1.05em;
            color: #fff;
            border: 0;
            cursor: pointer;
            border-radius: 10px;
            margin-top: 30px;
            transition: transform 500ms ease;

            &:hover {
                transform: translateY(-5px) translateX(3px);
            };
        };

        > div:last-of-type {

            @media(max-width: 1024px) {
                display: none;
            };

            img:first-of-type {
                position: relative;

                @media(min-width: 1500px) {
                    bottom: -80px;
                    left: -75px;
                };

                @media(max-width: 1500px) and (min-width: 1300px) {
                    transform: scale(0.85);
                    bottom: -35px;
                    left: -90px;
                };

                @media(max-width: 1300px) and (min-width: 1024px) {
                    transform: scale(0.75);
                    bottom: -25px;
                    left: -140px;
                };
            };

            .lead__info {
                position: absolute;
                top: 0;
                right: 0;

                @keyframes pulse {
                    to {
                        transform: scale(0.95);
                    };
                    from {
                        transform: scale(1.05);
                    }; 
                };

                .lead__info__km {
                    position: relative;
                    width: 183px;
                    height: 111px;
                    background: rgb(239, 137, 100);
                    border-radius: 20px;
                    animation: pulse infinite ease-in-out 1.5s alternate;

                    @media(min-width: 1350px) {
                        top: 56px;
                        right: 153px;
                    };

                    @media(max-width: 1350px) {
                        display: none;
                    };

                    > div:first-of-type {
                        position: relative;
                        background:rgba(255, 255, 255, 0.352);
                        width: 20px;
                        height: 20px;
                        top: 18px;
                        left: 18px;
                        border-radius: 50%;

                        img {
                            position: absolute;
                            top: 2px;
                            left: 1px;
                        };
                    };

                    > div:last-of-type {
                        position: absolute;
                        bottom: 10px;
                        right: 20px;
                        color: rgba(239, 237, 232, 0.65);

                        span {
                            font-size: 2.8em;
                            font-weight: 600;
                            color: #fff;
                        };
                    };
                    
                };

                .lead__info__wo {
                    position: relative;
                    height: 96px;
                    background: #303030;
                    border-radius: 20px;
                    padding: 10px;
                    animation: pulse infinite ease-in-out 1.5s alternate;
                    animation-delay: 1.5s;

                    @media(min-width: 1500px) {
                        top: 340px;
                        right: 570px;
                    };

                    @media(max-width: 1500px) and (min-width: 1350px) {
                        top: 100px;
                        right: 40px;
                    };

                    @media(max-width: 1350px) {
                        display: none;
                    };

                    img {
                        position: absolute;
                        top: 20px;
                        left: 25px;
                    };
                };

                .lead__info__fv {
                    position: relative;
                    width: 193px;
                    height: 98px;
                    background: #7A29DC;
                    border-radius: 20px;
                    padding: 10px 22px;
                    text-align: start;
                    color: rgb(198, 168, 228);
                    animation: pulse infinite ease-in-out 1.5s alternate;

                    @media(min-width: 1350px) {
                        top: 335px;
                        right: 95px;
                    };

                    @media(max-width: 1350px) {
                        display: none;
                    };


                    > span {
                        color: white;
                        font-size: 2em;
                    };
                };
            };
        };

        img:last-of-type {
            position: absolute;

            @media(min-width: 1500px) {
                transform: scale(1);
                bottom: 60px;
                left: 10px;
            };

            @media(max-width: 1500px) and (min-width: 1300px) {
                transform: scale(0.8);
                bottom: 116px;
                left: -50px;
            };

            @media(max-width: 1300px) and (min-width: 1024px) {
                transform: scale(0.6);
                bottom: 146px;
                left: -120px;
            };

            @media(max-width: 1024px) and (min-width: 375px) {
                transform: scale(0.56);
                bottom: -70px;
                left: -130px;
            };

            @media (max-width: 375px) {
                display: none;
            };
        };
    };
}
</style>