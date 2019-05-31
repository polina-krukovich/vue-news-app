<template>
    <div class="container">
        <NavbarItem v-for="source in sources"
                    :key="source.id"
                    :sourceName="source.name"
                    :sourceID="source.id"/>
    </div>
</template>

<script>
    import store from '../store';
    import NavbarItem from './NavbarItem';

    export default {
        name: 'Navbar',
        components: {
            NavbarItem
        },
        computed: {
            sources() {
                return store.state.sources;
            },
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: row;
        overflow: scroll;
    }
    .container::-webkit-scrollbar {
        height: 0;
        width: 0;
    }

</style>
