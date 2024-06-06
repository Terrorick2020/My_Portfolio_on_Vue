<template>
    <div class="blocks-conteiner">
        <div class="blocks">
            <div>
                <h2>Тренируйтесь дома</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                <span>
                    <a href="#">Более</a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
                </span>
            </div>
            <div>
                <img src="../assets/info-1.png" alt="">
            </div>
        </div>
        <div class="blocks">
            <div>
                <img src="../assets/info-2.png" alt="">
            </div>
            <div>
                <h2>Получите еще
                    больше полезного
                    контента</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                <span>
                    <a href="#">Более</a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
                </span>
            </div>
        </div>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
.blocks-conteiner {
    margin-top: 50px;

    .blocks {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 1100px) {
            flex-direction: column;

            &:first-of-type {
                flex-direction: column-reverse;
            }
        }

        > div {
            padding: 50px;

            @media (min-width: 900px) {
                width: 50%;
            }

            h2 {
                margin-bottom: 30px;
                font-size: 2.2em;
            }

            p {
                color: #9B9A97;
                max-width: 450px;
                margin-bottom: 20px;
            }

            span {
                cursor: pointer;

                a {
                    color: #0070C9;
                }

                svg {
                    margin-left: 15px;
                    width: 20px;
                    height: 20px;
                
                    path {
                        fill: #FAFAF9;
                    }
                }
            }

            img {
                max-width: 95%;

                @media (max-width: 1100px) { margin-top: 30px; }
            }
        }
    }
}
</style>