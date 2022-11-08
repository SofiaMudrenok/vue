<template>
  <div>
    <h2>Сортувати</h2>
    <select v-model="filter" class="form-select">
      <option value="name">Назва</option>
      <option value="hours">Години</option>
      <option value="lecturer">Викладач</option>
      <option value="rank">Рейтинг</option>
    </select>
  </div>
  <table>
    <tr>
      <td>Назва</td>
      <td>Години</td>
      <td>Викладач</td>
      <td>Рейтинг</td>
    </tr>
    <Lesson v-for="item in filtered" :key="item.id" :item="item"></Lesson>
  </table>
</template>
<script>
import { mapGetters } from "vuex";
import Lesson from "./Lesson.vue";
export default {
  name: "shedule-comp",
  data() {
    return {
      filter: "",
    };
  },
  components: {
    Lesson,
  },
  methods: {
    sortNumbers(item1, item2) {
      if (parseInt(item1[this.filter]) > parseInt(item2[this.filter])) {
        return 1;
      }
      if (parseInt(item1[this.filter]) === parseInt(item2[this.filter])) {
        return 0;
      }
      return -1;
    },
    sortText(item1, item2) {
      if (item1[this.filter] > item2[this.filter]) {
        return 1;
      }
      if (item1[this.filter] === item2[this.filter]) {
        return 0;
      }
      return -1;
    },
  },
  computed: {
    ...mapGetters(["getLessons"]),
    filtered() {
      let list = [...this.getLessons];
      if (this.filter) {
        switch (this.filter) {
          case "name":
            list = list.sort(this.sortText);
            break;
          case "hours": {
            list = list.sort(this.sortNumbers);
            break;
          }
          case "lecturer": {
            list = list.sort(this.sortText);
            break;
          }
          case "rank": {
            list = list.sort(this.sortNumbers);
            break;
          }
        }
      }
      return list;
    },
  },
};
</script>
<style>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
table {
  width: 600px;
}
.form-select {
  width: 300px;
  margin-bottom: 15px;
}
</style>
