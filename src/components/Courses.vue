<template>
    <div>
        <div  class="heading">
            <h2>Популярные Тренировки</h2>
            <a href="#">ПОСМОТРЕТЬ БОЛЬШЕ</a>
        </div>
        <div class="courses">
            <div class="coursess__item" v-for="el in courses" :key="el.title">
                <img :src="'../assets/' + el.img" :alt="el.title">
                <h2>{{ el.title }}</h2>
                <p>{{ el.cl }}</p>
                <div class="time">{{ el.time }}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    created() {
        this.courses = this.data;
    },
    data() {
        return {
            courses: []
        }
    }
}
</script>

<style lang="scss" scoped>
.heading {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 30px;

    @media (max-width: 1024px) {
        margin-top: 70px;
    }

    h2 {
        font-size: 2.1em;
    };

    a {
        font-size: 0.8em;

        @media (max-width: 465px) {
            margin-top: 20px;
        }
    }
};

.courses {
    margin-bottom: 150px;
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 950px) {
        justify-content: space-between;
    }

    @media (max-width: 950px) {
        justify-content: center;
        flex-direction: column;
    }


    .coursess__item {
        margin-top: 70px;
        cursor: pointer;
        position: relative;
        overflow: hidden;

        @media (max-width: 950px) and (min-width: 440px){
            width: 373px;
            margin-left: auto;
            margin-right: auto;
        };

        @media (max-width: 440px){
            width: 100%;
        };

        img {
            opacity: 0.8;
            transition: all 500ms ease;

            @media (max-width: 440px){
                width: 100%;
            };

            &:hover {
                opacity: 1;
                transform: scale(1.1);
            };
        };

        h2 {
            font-size: 2.5em;
            margin-left: 10px;
            position: relative;
            bottom: 35px;
        };
        
        p {
            color: #ababab;
            margin-left: 10px;
            position: relative;
            bottom: 35px;
        };

        .time {
            position: absolute;
            right: 0;
            bottom: 55px;
            background: black;
            border-top-left-radius: 5px;
            padding-left: 8px;
            padding-top: 5px;
            text-align: end;
        };
    };
};
</style>