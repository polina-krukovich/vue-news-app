<template>
    <div class="container">
        <span class="text">© Copyright </span>
        <a class="link" href="https://newsapi.org/"> NewsAPI</a>

    </div>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style scoped>
    .container {
        background: #000000cc;
        padding: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .link {
        text-decoration: none;
        color: #999;
    }

    .link:hover{
        color: #90ffff;
    }

    .text {
        color: white;
        margin-right: 10px;
    }

</style>
