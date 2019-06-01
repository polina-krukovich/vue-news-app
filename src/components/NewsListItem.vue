<template>
    <div class="news__item">
        <div class="news__item__img-box">
            <img class="news__item__img-box__img"
                 :src="articleInfo.urlToImage"
                 v-if="articleInfo.urlToImage">
            <i class="news__item__img-box__icon fas fa-camera-retro"
               v-else></i>
            <div class="news__item__img-box__overlay">
                <div class="news__item__img-box__overlay__content">
                    {{ getDate }}
                </div>
            </div>
        </div>
        <div class="news__item__info-box">
            <a class="news__item__info-box__title"
               :href="articleInfo.url">
                {{articleInfo.title}}
            </a>
            <p class="news__item__info-box__desc">
                {{articleInfo.description}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NewsListItem',
        props: {
            articleInfo: Object
        },
        computed: {
            getDate() {
                return this.articleInfo.publishedAt.slice(0, 10).split('-').reverse().join('-')
            }
        }
    }
</script>

<style scoped>

    .news__item {
        width: 100%;
        max-width: 540px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 25px 0;
        box-shadow: 0 0 14px #000;
    }
    .news__item__img-box {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .news__item__img-box__img {
        width: 100%;
    }
    .news__item__img-box__icon {
        font-size: 56px;
        color: #999;
        padding: 70px 120px;
    }
    .news__item__img-box__overlay {
        width: 100%;
        height: 0;
        position: absolute;
        bottom: 0;
        background: rgba(4, 4, 4, 0.7);
        transition: 0.2s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .news__item__img-box__overlay__content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ddd;
        font-size: 16px;
        font-weight: bold;
    }
    .news__item__img-box:hover .news__item__img-box__overlay {
        height: 60px;
    }
    .news__item__info-box {
        width: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #151515;
        overflow: hidden;
    }
    .news__item__info-box__title {
        margin-bottom: 10px;
        color: #227377;
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
        transition: 0.1s;
    }
    .news__item__info-box__title:hover {
        color: #44d3d7;
    }
    .news__item__info-box__desc {
        font-size: 16px;
        color: #ddd;
    }

    @media screen and (min-width: 980px) {

        .news__item {
            flex-direction: row;
            width: fit-content;
            max-width: none;
            box-shadow: none;
        }
        .news__item__img-box {
            width: 300px;
            box-shadow: 0 0 14px #000;
        }
        .news__item__img-box__img {
            max-width: 300px;
            min-width: 300px;
            min-height: 200px;
        }
        .news__item__info-box {
            width: 500px;
            min-height: 200px;
            margin-top: 0;
            margin-left: 40px;
            border-left: 5px solid #227377;
            box-shadow: 0 0 14px #000;
        }
    }
</style>
