import Vue from 'vue'
import Vuex from 'vuex'
import {sourcesRequest, topNewsRequest, sourceNewsRequest, searchNewsRequest} from './api/NewsAPI';

Vue.use(Vuex);

const
    TOP = 'top',
    SOURCE = 'source',
    SEARCH = 'search',
    SET_DISPLAY = 'setDisplay',
    SET_SOURCE = 'setSource',
    SET_SEARCH = 'setSearch',
    RESET_PAGE = 'resetPage',
    INCREMENT_PAGE = 'incrementPage',
    SET_SOURCES = 'setSources',
    SET_ARTICLES = 'setArticles';


export default new Vuex.Store({
  state: {
    display: 'top',
    page: 1,
    source: "",
    search: "",
    articles: [],
    sources: []
  },

  mutations: {
    [SET_DISPLAY](state, value) {
      state.display = value;
    },

    [SET_SOURCE](state, value) {
      state.source = value;
    },

    [SET_SEARCH](state, value) {
      state.search = value;
    },

    [RESET_PAGE](state) {
      state.page = 1;
    },

    [INCREMENT_PAGE](state) {
      state.page++;
    },

    [SET_SOURCES](state, value) {
      state.sources = value;
    },

    [SET_ARTICLES](state, value) {
      state.articles = value;
    }
  },

  actions: {
    loadSources(context) {
      fetch(sourcesRequest())
          .then(data => data.json())
          .then(data => {
            context.commit(SET_SOURCES, data.sources)
          });
    },

    loadTopArticles(context) {
      context.commit(SET_DISPLAY, TOP);
      context.commit(RESET_PAGE);
      fetch(topNewsRequest(context.state.page))
          .then(data => data.json())
          .then(data => {
            context.commit(SET_ARTICLES, data.articles)
          });
    },

    loadSourceArticles(context, source) {
      context.commit(SET_DISPLAY, SOURCE);
      context.commit(RESET_PAGE);
      context.commit(SET_SOURCE, source);
      fetch(sourceNewsRequest(source, context.state.page))
          .then(data => data.json())
          .then(data => {
            context.commit(SET_ARTICLES, data.articles)
          });
    },

    loadSearchArticles(context, search) {
      context.commit(SET_DISPLAY, SEARCH);
      context.commit(RESET_PAGE);
      context.commit(SET_SEARCH, search)
      fetch(searchNewsRequest(search, context.state.page))
          .then(data => data.json())
          .then(data => {
            context.commit(SET_ARTICLES, data.articles)
          });
    },

    next(context) {
      context.commit(INCREMENT_PAGE);
      let req;
      if (context.state.display === TOP) {
        req = fetch(topNewsRequest(context.state.page));
      }
      if (context.state.display === SOURCE) {
        req = fetch(sourceNewsRequest(context.state.source, context.state.page));
      }
      if (context.state.display === SEARCH) {
        req = fetch(searchNewsRequest(context.state.search, context.state.page));
      }
      req.then(data => data.json())
          .then(data => {
            context.commit(SET_ARTICLES, data.articles)
          });
    },


  }
})
