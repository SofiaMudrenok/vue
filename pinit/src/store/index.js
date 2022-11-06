import { createStore } from "vuex";

export default createStore({
  state: {
    cards: [
      {
        id: 1,
        creditNumber: "4141-4149-0000-4421",
        cardLabel: "Monobank",
        cvv: 223,
        date: "10/24",
      },
      {
        id: 2,
        creditNumber: "4141-4149-8888-4421",
        cardLabel: "Monobank",
        cvv: 753,
        date: "09/27",
      },
    ],
  },
  getters: {
    getCards:(state)=>state.cards
  },
  mutations: {},
  actions: {},
  modules: {},
});
