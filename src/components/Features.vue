<template>
    <div>
        <div class="features">
            <div class="features__heading">
                <img src="../assets/yellow_marer_img.svg" alt="marker">
                <h3>Тренировки Специально Для тебя</h3>
            </div>
            <p>Откройте для себя индивидуальные тренерские сессии от фитнес-компании Workout! Наша команда профессиональных тренеров готова помочь вам достичь ваших личных целей, создавая персонализированные программы тренировок, которые подходят именно вам. Начните свой путь к здоровью и успеху уже сегодня!</p>
            <button>Начать</button>
        </div>
        <div class="pictures">
            <div>
                <img src="../assets/trener-Samanta.png" alt="Саманта">
                <h4>Саманта Вильям</h4>
                <p>Тренер</p>
            </div>
            <div class="middle">
                <img src="../assets/trener-Alina.png" alt="Алина">
                <h4>Алина Реймонд</h4>
                <p>Тренер</p>
            </div>
            <div class="big">
                <img src="../assets/trener-Jonatan.png" alt="Джонатан">
                <h4>Джонатан Вайз</h4>
                <p>Тренер</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.features {
    width: 1500px;
    background: #191919;
    position: relative;

    @media (min-width: 1380px) {
        margin-left: 391px;
    };

    @media (max-width: 1380px) and (min-width: 1100px) {
        margin-left: 191px;
    };

    @media (min-width: 1100px) {
        padding: 100px 5% 220px 15%;
    };

    @media (max-width: 1100px) {
        padding: 50px;
    };

    p {
        color: rgb(171, 171, 171);
        line-height: 170%;

        @media (min-width: 1100px) {
            margin-left: 150px;
            width: 600px !important;
        };

        @media (min-width: 560px) {
            font-size: 1.3em;
            width: 400px;
        };

        @media (max-width: 560px) {
            font-size: 0.9em;
            width: 200px;
        };
    };

    button {
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

        @media (min-width: 1100px) {
            margin-left: 150px;
        };

        &:hover {
            transform: translateY(-5px) translateX(3px);
        };
    };

    .features__heading {
        @media (min-width: 1100px) {
            position: absolute;
            top: 0px;
            left: -220px;
        };

        h3 {
            @media (min-width: 1100px) {
                position: relative;
                top: -110px;
            };

            @media (min-width: 560px) {
                font-size: 4.5em;
                width: 500px;
            };

            @media (max-width: 560px) {
                font-size: 2.3em;
                width: 300px;
            };
        };

        img {

            @media (min-width: 1100px) {
                position: relative;
                top: 330px;
                left: -50px;
            };
        };
    };
};

.pictures {
    margin-bottom: 150px;
    display: flex;

    @media(min-width: 1380px) {
        padding-left: 70px;
    };

    @media(max-width: 1380px) and (min-width: 1100px){
        position: relative;
        left: -127px;
    };

    @media(max-width: 1100px) {
        flex-wrap: wrap;
        justify-content: space-between;
    }

    > div {
        @media(min-width: 1100px) {
            position: relative;
        }

        @media(max-width: 1100px) {
            margin-top: 100px;
        }

        > img {

            @media (max-width: 620px) {
                width: 290px;
            };
        };

        &.middle {
            top: 321px;
        };

        &.big {
            top: -193px;


            h4, p {
                margin-left: 20px;
            };
        };

        h4 {
            font-weight: 400;
        };

        p {
            color: #ababab;
            font-size: 0.9em;
        };
    };
};
</style>