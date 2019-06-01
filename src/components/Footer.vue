<template>
    <footer class="footer">
        <span class="footer__text">
            © Copyright
        </span>
        <a class="footer__link"
           href="https://newsapi.org/">
            NewsAPI
        </a>

    </footer>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style scoped>
    .footer {
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
    .footer__link {
        text-decoration: none;
        color: #999;
    }
    .footer__link:hover{
        color: #90ffff;
    }
    .footer__text {
        color: white;
        margin-right: 10px;
    }

</style>
