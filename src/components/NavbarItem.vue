<template>
    <button class="item" @click.prevent="loadSourceArticles">{{ sourceName }}</button>
</template>

<script>
    import store from '../store';
    export default {
        name: 'NavbarItem',
        props: {
            sourceName: String,
            sourceID: String
        },
        methods: {
            loadSourceArticles() {
                store.dispatch('loadSourceArticles', this.sourceID);
            }
        }
    }
</script>

<style scoped>
    .item {
        min-width: 250px;
        display: block;
        padding: 15px 0;
        margin: 10px 5px;
        background: transparent;
        color: white;
        font-family: inherit;
        font-size: 16px;
        text-align: center;
        border: 1px solid #44d3d7;
        border-radius: 5px;
        transition: 0.2s ease;
        box-shadow: 0 14px 10px -10px #000;
        outline: none;
    }
    .item:hover {
        transform: translateY(-7px);
        color: #90ffff;
    }
</style>
