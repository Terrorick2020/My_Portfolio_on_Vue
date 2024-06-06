<template>
    <div class="tarrifs-container">
        <h3>Тарифы</h3>
        <div class="tarrifs">
            <div>
                <h4>Бесплатно</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Quis nostrud exercitation ullamco</li>
                    <li>Exercitation ullamco</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Excepteur sint occaecat excepteur sint occaecat</li>
                    <li>Sed ut perspiciatis unde omnis</li>
                </ul>
                <span>
                    <a href="#">Больше</a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
                </span>
            </div>
            <div>
                <h4>Плюс+</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Quis nostrud exercitation ullamco</li>
                    <li>Exercitation ullamco</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Excepteur sint occaecat excepteur sint occaecat</li>
                    <li>Sed ut perspiciatis unde omnis</li>
                    <li>Exercitation ullamco</li>
                    <li>Lorem ipsum dolor sit amet</li>
                </ul>
                <button>Присоединиться</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.tarrifs-container {
    margin-top: 50px;

    h3 {
        margin: 70px 0;
        font-size: 3em;
        font-weight: 400;
    }

    .tarrifs {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 150px;

        > div {

            background: #232532;
            color: rgba(239, 237, 232, 0.65);
            padding: 50px 5%;

            @media (min-width: 1100px) {
                width: 40%;
            }

            @media (max-width: 1100px) and (min-width: 750px) {
                width: 45%;
            }

            @media (max-width: 750px) {
                margin-bottom: 50px;
            }


            &:last-of-type {
                background: #323443;
            }

            h4 {
                color: white;
                text-align: center;
                font-size: 2em;
                margin-bottom: 30px;
            }

            ul {
                margin: 20px 30px;
            }
            
            span {
                cursor: pointer;

                a {
                    color: #0070C9;
                }
    
                svg {
                    margin-left: 7px;
                    width: 20px;
                    height: 20px;
                    transition: all 0.5s ease;
                
                    path {
                        fill: #FAFAF9;
                    }
                }

                &:hover {

                    svg {
                        margin-left: 10px;
                    }
                }
            }

            button {
                background: #0070C9;
                border: 0;
                border-radius: 10px;
                color: #fff;
                cursor: pointer;
                padding: 5px 7px;
                transition: all 0.5s ease;

                &:hover {
                    columns: #c2c2c2;
                    transform: scale(1.05) translateX(5px) translateY(-3px);
                    background: #0081ea;
                }
            }
        }
    }
}
</style>