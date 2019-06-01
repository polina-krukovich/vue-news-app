<template>
    <div class="news">
        <NewsListItem v-for="(article, index) in articles"
                      :key="index"
                      :articleInfo="article"/>
        <p class="news-list__msg_no-results"
           v-if="articles.length === 0">No results :(</p>
    </div>
</template>

<script>
    import NewsListItem from './NewsListItem';

    export default {
        name: 'NewsList',
        components: {
            NewsListItem
        },
        computed: {
            articles() {
                return this.$store.state.articles;
            }
        },
        beforeMount: function () {
            this.$store.dispatch('loadTopArticles');
        }
    }
</script>

<style scoped>
    .news {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 50px;
    }
    .news-list__msg_no-results {
        color: #999;
        font-size: 26px;
        font-weight: bold;
    }
</style>
