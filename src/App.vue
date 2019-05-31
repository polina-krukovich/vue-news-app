<template>
  <div id="app">
    <Header/>
    <Navbar/>
    <NewsList/>
    <ButtonLoadMore v-if="haveArticles"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList';
import ButtonLoadMore from './components/ButtomLoadMore';
import Footer from './components/Footer';
import store from './store';

export default {
  name: 'app',
  components: {
    Header,
    Navbar,
    NewsList,
    ButtonLoadMore,
    Footer
  },
  computed: {
    haveArticles() {
      return store.state.articles.length === 5;
    }
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(to bottom, #0c0c0c, #1c1c1c, #202020, #1c1c1c, #0c0c0c);
    min-height: 100vh;
    position: relative;
  }

  #app {
    display: flex;
    flex-direction: column;
  }

</style>
