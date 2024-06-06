<template>
    <nav class="nav">
        <span class="nav__logo"><router-link class="link__item" to="/">WORKOUT</router-link></span>
        <ul class="nav__links" v-if="screenWidth > 1024">
            <li><router-link class="link__item" to="/exercises">УПРАЖНЕНИЯ</router-link></li>
            <li><router-link class="link__item" to="/training">ТРЕНИРОВКИ</router-link></li>
            <li><router-link class="link__item" to="/tarrifs">ЦЕНЫ</router-link></li>
            <li><router-link class="link__item" to="/home">ПРО НАС</router-link></li>
        </ul>
        <button v-else @click="showMenu" class="btnMenu">   
            <svg v-if="iconMenuType" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
            </svg>
        </button>
        <ul v-if="screenWidth <= 1024 && mobileMenu" class="nav__links--mobile">
            <li><router-link class="link__item" to="/exercises">УПРАЖНЕНИЯ</router-link></li>
            <li><router-link class="link__item" to="/training">ТРЕНИРОВКИ</router-link></li>
            <li><router-link class="link__item" to="/tarrifs">ЦЕНЫ</router-link></li>
            <li><router-link class="link__item" to="#">ПРО НАС</router-link></li>
        </ul>

    </nav>
</template>

<script>
export default {
    data() {
        return {
            screenWidth: screen.width,
            mobileMenu: false,
            iconMenuType: true,
        }
    },
    mounted() {
        this.onScreenResize();
    },
    methods: {
        onScreenResize() {
            window.addEventListener("resize", () => {
                this.screenWidth = screen.width;
            })
        },
        showMenu() {
            this.mobileMenu = !this.mobileMenu;
            this.iconMenuType = !this.iconMenuType;
        }
    }
}
</script>

<style lang="scss" scoped>
.nav {
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    flex-wrap: wrap;

    .nav__logo {
        font-size: 1.8em;
        text-transform: uppercase;
    };

    .nav__links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        text-transform: uppercase;
        width: 450px;

        .link__item {

            > a {
                cursor: pointer !important;
            };
        };
    };

    .btnMenu {
        widows: 40px;
        height: 40px;
        outline: none;
        background: #000000;
        border: 0;

        svg {
            width: 100%;
            height: 100%;

            path {
                fill: rgb(147, 147, 147);
            };
        };
    };

    .nav__links--mobile {
        list-style: none;
        text-align: center;
        width: 100%;

        li {
            margin-top: 25px;
        };
    };

};
</style>