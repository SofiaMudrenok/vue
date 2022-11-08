<template>
  <div class="home">
    <LessonsShedule
      style="margin-left: 10px; margin-top: 10px"
    ></LessonsShedule>
  </div>
</template>

<script>
import LessonsShedule from "@/components/LessonsShedule.vue";
export default {
  name: "HomeView",
  components: {
    LessonsShedule,
  },
};
</script>
