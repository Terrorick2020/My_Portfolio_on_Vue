<template>
    <div>
        <Nav />
        <Head />
        <Courses :data="courses" />
        <Features />
        <Videos />
        <Footer />
    </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Head from './components/Head.vue';
import Courses from './components/Courses.vue';
import Features from './components/Features.vue';
import Videos from './components/Videos.vue';
import Footer from  './components/Footer.vue';

export default {
    components: { Nav, Head, Courses, Features, Videos, Footer },
    data() {
        return {
            courses: [
                {'title': 'Кардио', 'cl': '250 калорий', 'time': '58:24', 'img': 'cardio.png'},
                {'title': 'Растяжка', 'cl': '250 калорий', 'time': '58:24', 'img': 'stretching.png'},
                {'title': 'Йога', 'cl': '250 калорий', 'time': '58:24', 'img': 'yoga.png'},
                {'title': 'Бег', 'cl': '250 калорий', 'time': '58:24', 'img': 'running.png'},
                {'title': 'Гантели', 'cl': '250 калорий', 'time': '58:24', 'img': 'dumbbells.png'},
                {'title': 'На улице', 'cl': '250 калорий', 'time': '58:24', 'img': 'on_the_street.png'}
            ]
        }
    }
}
</script>

<style></style>