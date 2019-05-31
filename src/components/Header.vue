<template>
    <div class="container">
        <img class="logo" @click="loadTopArticles" src="../assets/logo_transparent.png">
        <div class="search-box">
            <Search/>
        </div>
    </div>
</template>

<script>
    import Search from './Search';
    import store from '../store';

    export default {
        name: 'Header',
        components: {
            Search
        },
        methods: {
            loadTopArticles() {
                store.dispatch('loadTopArticles');
            }
        }
    }
</script>

<style scoped>
    .container {
        height: auto;
        background: url("https://images.unsplash.com/photo-1475257026007-0753d5429e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")
                    no-repeat
                    center
                    center
                    fixed;
        background-size: cover;
        display: flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .logo {
        width: 350px;
        height: 350px;
    }

    .search-box {
        position: absolute;
        top: 50%;
        left: 60%;
    }
</style>
