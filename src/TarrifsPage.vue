<template>
    <div>
        <Nav />
        <HeadTarrifs />
        <HowTo />
        <Info />
        <Tarrifs />
        <Footer />
    </div>
</template>

<script>
import Nav from './components/Nav.vue';
import HeadTarrifs from './components/HeadTarrifs.vue';
import Footer from  './components/Footer.vue';
import HowTo from './components/HowTo.vue';
import Info from './components/Info.vue';
import Tarrifs from './components/Tarrifs.vue';

export default {
    components: { Nav, HeadTarrifs, HowTo, Info, Tarrifs, Footer }
    }
</script>

<style lang="scss">
$mainColor: #000000;
$textColor: #fff;
$additionColor: #25ab75;

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400;1,600&display=swap');


::selection {
    background: $additionColor;
};

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
};

body {
    background: $mainColor;
    color: $textColor;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1em;
};

a {
    text-decoration: none;
    color: #ababab;

    &:hover {
        color: #c7c7c7;
    };
};

.wrapper {
    overflow: hidden;
};

.container {
    @media(min-width: 1500px) {
        width: 1300px;
        margin: 0 auto;
    };

    @media(max-width: 1500px) and (min-width: 900px) {
        width: 80%;
        margin: 0 10%;
    };

    @media(max-width: 900px) {
        width: 90%;
        margin: 0 5%;
    };
}
</style>