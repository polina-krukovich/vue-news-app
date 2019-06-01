<template>
    <div class="search-box">
        <input class="search-box__input"
               type="text"
               placeholder="Search news ..."
               v-model="searchValue"
               @keydown="checkKey">
        <button class="search-box__btn"
                @click.prevent="loadSearchArticles">
            <i class="fas fa-search"></i>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data() {
            return {
                searchValue: ""
            }
        },
        methods: {
            loadSearchArticles() {
                this.$store.dispatch('loadSearchArticles', this.searchValue);
                this.searchValue = "";
            },
            checkKey(e) {
                if (e.keyCode === 13){
                    this.loadSearchArticles();
                }
            }
        }
    }
</script>

<style scoped>
    .search-box {
        display: flex;
        flex-direction: row;
        border-radius: 25px;
        border: 2px solid #999;
        overflow: hidden;
        box-shadow: 0 0 14px #000;
    }

    .search-box__btn, .search-box__input {
        font-size: 20px;
        font-family: inherit;
        padding: 15px;
        background: #1c1c1c;
        color: #999;
        border: none;
        outline: none;
    }
    .search-box__btn:hover {
        color: white;
    }
    .search-box__input {
        width: 180px;
        transition: 0.4s ease-in-out;
    }
    .search-box__input:focus {
        width: 400px;
    }

</style>
