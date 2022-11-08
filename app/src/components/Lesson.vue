<template>
  <tr>
    <td>{{ item.name }}</td>
    <td>{{ item.hours }}</td>
    <td>{{ item.lecturer }}</td>
    <td>{{ item.rank }}</td>
    <button style="width: 200px" @click="Delete">Delete</button>
  </tr>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "LessonComp",
  methods: {
    ...mapActions(["deletelesson"]),
    Delete() {
      this.deletelesson(this.item);
    },
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style lang=""></style>
