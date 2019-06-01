<template>
    <header class="header">
        <img class="header__logo"
             src="../assets/logo_newspoint.png"
             @click="loadTopArticles">
        <Search/>
    </header>
</template>

<script>
    import Search from './Search';

    export default {
        name: 'Header',
        components: {
            Search
        },
        methods: {
            loadTopArticles() {
                this.$store.dispatch('loadTopArticles');
            }
        }
    }
</script>

<style scoped>
    .header {
        height: 100vh;
        background: url("https://images.unsplash.com/photo-1475257026007-0753d5429e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")
                    no-repeat
                    center
                    center
                    fixed;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .header__logo {
        width: 300px;
        height: 300px;
    }

    @media screen and (min-width: 980px) {
        .header {
            height: 500px;
        }
    }
</style>
