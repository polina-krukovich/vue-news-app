<template>
    <div class="item">
        <div class="image-box">
            <img class="image" :src="articleInfo.urlToImage" v-if="articleInfo.urlToImage">
            <i class="fas fa-camera-retro" v-else></i>
            <div class="overlay">
                <div class="overlay-content">
                    {{articleInfo.publishedAt.slice(0, 10).split('-').reverse().join('-')}}
                </div>
            </div>
        </div>
        <div class="info-box">
            <a class="title" :href="articleInfo.url">{{articleInfo.title}}</a>
            <div class="desc">{{articleInfo.description}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NewsListItem',
        props: {
            articleInfo: Object
        }
    }
</script>

<style scoped>

    .item {
        display: flex;
        flex-direction: row;
        margin-bottom: 50px;
        justify-content: center;
        align-items: center;

    }
    .image-box {
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .image {
        max-width: 300px;
        min-width: 300px;
        min-height: 200px;
        box-shadow: 0 0 18px #000;
    }
    .fa-camera-retro {
        font-size: 56px;
        color: #999999;
        padding: 70px 120px;
        box-shadow: -5px 5px 14px #000;
    }
    .overlay {
        width: 100%;
        height: 0;
        position: absolute;
        bottom: 0;
        background: #1c1c1cdd;
        color: #ddd;
        transition: 0.5s ease;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .image-box:hover .overlay {
        height: 60px;
    }
    .overlay-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .info-box {
        width: 500px;
        height: 200px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 40px;
        background: #00000055;
        color: white;
        font-size: 16px;
        overflow: hidden;
        border-left: 5px solid #44d3d7;
        box-shadow: 5px 5px 14px #000;
    }

    .title {
        color: #44d3d7;
        font-size: 20px;
        text-decoration: none;
    }
    .title:hover {
        color: #90ffff;
    }
</style>
