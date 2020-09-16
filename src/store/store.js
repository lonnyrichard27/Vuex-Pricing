import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      { name: "Jersey", price: 8000 },
      { name: "Shorts", price: 2000 },
      { name: "Cap", price: 5000 },
      { name: "Jogegers", price: 6000 }
    ]
  },
  getters: {
    saleProducts: (state) => {
      var saleProducts = state.products.map((product) => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2
        };
      });
      return saleProducts;
    }
  },
  mutations: {
    reducePrice: (state) => {
      state.products.forEach((product) => {
        product.price = product.price - 1;
      });
    }
  },
  actions: {
    reducePrice: (context) => {
      setTimeout(() => {
        context.commit("reducePrice");
      }, 2000);
    }
  }
});
