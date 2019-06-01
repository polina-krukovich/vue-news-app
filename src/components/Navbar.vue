<template>
    <nav class="nav">
        <NavbarItem v-for="source in sources"
                    :key="source.id"
                    :sourceName="source.name"
                    :sourceID="source.id"/>
    </nav>
</template>

<script>
    import NavbarItem from './NavbarItem';

    export default {
        name: 'Navbar',
        components: {
            NavbarItem
        },
        computed: {
            sources() {
                return this.$store.state.sources;
            },
        }
    }
</script>

<style scoped>
    .nav {
        display: flex;
        flex-direction: row;
        overflow: scroll;
    }
    .nav::-webkit-scrollbar {
        height: 0;
        width: 0;
    }

</style>
