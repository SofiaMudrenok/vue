import { createStore } from "vuex";

export default createStore({
  state: {
    lessons: [
      {
        id: 1,
        name: "Англійська",
        hours: 30,
        lecturer: "Викладач 1",
        rank: 5,
      },
      {
        id: 2,
        name: "Програмування",
        hours: 54,
        lecturer: "Викладач 2",
        rank: 4,
      },
      {
        id: 3,
        name: "Математика",
        hours: 34,
        lecturer: "Викладач 3",
        rank: 2,
      },
    ],
  },
  getters: {
    getLessons: (state) => state.lessons,
  },
  mutations: {
    delete(state, { id }) {
      this.state.lessons = state.lessons.filter((item) => item.id !== id);
    },
    add(state, item) {
      state.lessons.push({
        ...item,
        id: Date.now(),
      });
    },
  },
  actions: {
    deletelesson({ commit }, item) {
      commit("delete", item);
    },
    addLesson({ commit }, item) {
      commit("add", item);
    },
  },
});
