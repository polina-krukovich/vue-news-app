<template>
    <div class="btn-load-more-container">
        <button class="btn-load-more" @click.prevent="next">Load More</button>
    </div>
</template>

<script>
    import store from '../store';

    export default {
        name: 'ButtonLoadMore',
        methods: {
            next() {
                store.dispatch('next');
            }
        }
    }
</script>

<style scoped>
    .btn-load-more-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 0 100px 0;
    }
    .btn-load-more {
        max-width: 200px;
        width: 200px;
        background: #227377;
        padding: 20px;
        border: none;
        border-radius: 5px;
        color: white;
        font-family: inherit;
        font-size: 18px;
        box-shadow: 0 14px 10px -10px #000;
        animation-name: jumping;
        animation-timing-function: ease;
        transition: 0.3s;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        transform-origin: bottom;
        outline: none;
    }
    .btn-load-more:hover {
        background: #329397;
    }

    @-webkit-keyframes jumping {
        0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.9)   translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-40px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-5px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }
    }
</style>
