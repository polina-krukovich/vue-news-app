<template>
    <button class="btn_load-more"
            @click.prevent="next">
        Load More
    </button>
</template>

<script>

    export default {
        name: 'ButtonLoadMore',
        methods: {
            next() {
                this.$store.dispatch('next');
            }
        }
    }
</script>

<style scoped>
    .btn_load-more {
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
    .btn_load-more:hover {
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
