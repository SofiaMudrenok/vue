<template>
  <div>
    <label>Назва<input type="text" v-model="name" /></label>
    <label>Години<input type="text" v-model="hours" /></label>
    <label>Викладач<input type="text" v-model="lecturer" /></label>
    <label>Рейтинг<input type="text" v-model="rank" /></label>
    <button @click="add">save</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "AddForm",
  data() {
    return {
      name: null,
      hours: null,
      lecturer: null,
      rank: null,
    };
  },
  methods: {
    ...mapActions(["addLesson"]),
    add() {
      this.addLesson({
        name: this.name,
        hours: this.hours,
        lecturer: this.lecturer,
        rank: this.rank,
      });
      this.name = null;
      this.hours = null;
      this.lecturer = null;
      this.rank = null;
    },
  },
};
</script>

<style>
div {
  display: grid;
}
button {
  margin: 15px;
  display: flex;
  width: 70px;
}

label {
  width: 450px;
  font-size: 1.1rem;
}
</style>
