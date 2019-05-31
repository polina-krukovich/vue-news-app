<template>
    <div class="search-container">
        <input class="input-search"
               type="text"
               name="search"
               placeholder="Search news ..."
               v-model="searchValue"
               @keydown="checkKey">
        <button class="btn-search"
                @click.prevent="loadSearchArticles">
            <i class="fas fa-search"></i>
        </button>
    </div>
</template>

<script>
    import store from '../store';

    export default {
        name: 'Search',
        data() {
            return {
                searchValue: ""
            }
        },
        methods: {
            loadSearchArticles() {
                store.dispatch('loadSearchArticles', this.searchValue);
            },
            checkKey(e) {
                if (e.keyCode === 13){
                    this.loadSearchArticles();
                    this.searchValue = "";
                }
            }
        }
    }
</script>

<style scoped>
    .search-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 20px;
        box-shadow: 0 0 15px #000;
    }

    .btn-search {
        font-size: 20px;
        font-family: inherit;
        padding: 10px;
        border: 1px solid #999;
        border-left: none;
        outline: none;
        background: #1c1c1c;
        color: #999;
        border-bottom-right-radius: 20px;
        border-top-right-radius: 20px;
    }

    .btn-search:hover {
        color: white;
    }

    .input-search {
        width: 300px;
        font-size: 20px;
        font-family: inherit;
        padding: 10px;
        border: 1px solid #999;
        border-right: none;
        outline: none;
        background: #1c1c1c;
        color: white;
        border-bottom-left-radius: 20px;
        border-top-left-radius: 20px;
    }


</style>
