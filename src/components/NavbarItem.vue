<template>
    <button class="nav__item"
            @click.prevent="loadSourceArticles">
        {{ sourceName }}
    </button>
</template>

<script>
    export default {
        name: 'NavbarItem',
        props: {
            sourceName: String,
            sourceID: String
        },
        methods: {
            loadSourceArticles() {
                this.$store.dispatch('loadSourceArticles', this.sourceID);
            }
        }
    }
</script>

<style scoped>
    .nav__item {
        min-width: 200px;
        display: block;
        padding: 10px 10px;
        margin: 10px 5px;
        background: transparent;
        color: #ddd;
        font-family: inherit;
        font-size: 16px;
        text-align: center;
        border: 1px solid #227377;
        border-radius: 5px;
        transition: 0.2s ease;
        box-shadow: 0 10px 8px -8px #000;
        overflow: auto;
        outline: none;
    }
    .nav__item:hover {
        transform: translateY(-7px);
        color: #44d3d7;
        border-color: #44d3d7;

    }

    @media screen and (min-width: 980px) {

    }
</style>
