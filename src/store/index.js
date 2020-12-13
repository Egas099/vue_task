import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
    ],
    defaultItems: [
      {
        name: 'Chai',
        price: '18.00',
        units: '39',
        discontinued: false,
      },
      {
        name: 'Chang',
        price: '34.00',
        units: '46',
        discontinued: false,
      },
      {
        name: 'Ikura',
        price: '31.00',
        units: '31',
        discontinued: false,
      },
      {
        name: 'Tofu',
        price: '14.00',
        units: '5',
        discontinued: true,
      },
      {
        name: 'Chef Anton\'s Gumbo Mix',
        price: '74.00',
        units: '56',
        discontinued: true,
      },
      {
        name: 'Genen Shouyu',
        price: '33.00',
        units: '86',
        discontinued: true,
      },
      {
        name: 'Northwoods Cranberry Sauce',
        price: '35.00',
        units: '74',
        discontinued: true,
      },
      {
        name: 'Teatime Chocolate Biscuits',
        price: '25.00',
        units: '16',
        discontinued: true,
      },
    ],
  },
  mutations: {
    addItem(state, newItem) {
      state.items.splice(state.items.length, 0, newItem);
      this.dispatch('saveItems');
    },
    deleteItem(state, index) {
      state.items.splice(index, 1);
      this.dispatch('saveItems');
    },
    changeItem(state, data) {
      state.items[data.index] = data.item;
      this.dispatch('saveItems');
    },
    loadItems(state, _items) {
      state.items = _items;
    },
  },
  actions: {
    loadData() {
      let itemsImp = {};
      const data = localStorage.getItem('items');
      if (data) {
        try {
          itemsImp = JSON.parse(data);
        } catch (e) {
          localStorage.removeItem('items');
        }
        this.commit('loadItems', itemsImp);
      } else {
        this.dispatch('loadDefault');
      }
    },
    saveItems() {
      const parsed = JSON.stringify(this.state.items);
      localStorage.setItem('items', parsed);
    },
    loadDefault() {
      this.commit('loadItems', this.state.defaultItems);
      this.dispatch('saveItems');
      this.dispatch('loadData');
    },
  },
  modules: {
  },
});
