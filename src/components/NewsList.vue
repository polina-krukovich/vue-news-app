<template>
    <div class="container">
        <NewsListItem v-for="article in articles"
                      :articleInfo="article"/>
        <p class="msg-no-results"
           v-if="articles.length === 0">No results :(</p>
    </div>
</template>

<script>
    import store from '../store';
    import NewsListItem from './NewsListItem';

    export default {
        name: 'NewsList',
        components: {
            NewsListItem
        },
        computed: {
            articles() {
                return store.state.articles;
            }
        },
        beforeMount: function () {
            store.dispatch('loadTopArticles');
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 50px;
    }
    .msg-no-results {
        color: #999;
        font-size: 26px;
        font-weight: bold;
    }
</style>
