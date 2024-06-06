import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "./MainPage.vue";
import TarrifsPage from "./TarrifsPage.vue";
import ExercisesPage from "./ExercisesPage.vue";
import TrainingPage from "./TrainingPage.vue";



export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/home', component: MainPage, alias: '/'},
        {path: '/tarrifs', component: TarrifsPage},
        {path: '/training', component: ExercisesPage},
        {path: '/exercises', component: TrainingPage},
    ]
});