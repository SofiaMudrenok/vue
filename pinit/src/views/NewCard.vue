<template>
  <div class="about" style="justify-content: center">
    <Card />
    <form @submit.prevent="add">
      <div>
        <label></label>
        <input v-model="card_id" />
      </div>
      <div>
        <label>Назва банку</label>
        <input v-model="bank" required />
      </div>
      <div>
        <label>Номер карти</label>
        <input v-model="creditNumber" required />
      </div>
      <div>
        <label>CVV</label>
        <input v-model="cvv" required />
      </div>
      <div>
        <label>Дата закінчення терміну дії (мм/рр)</label>
        <input v-model="date" required />
      </div>
    </form>
    <div class="save" @click="savecard()">
        <font-awesome-icon icon="fa-solid fa-check" size="2x" />
      </div>
  </div>
</template>
<script>
import Fstore from "@/fireconf/firebase";
export default {
  data() {
    return {
      card_id: null,
      data: null,
      bank: null,
      cvv: null,
      creditNumber: null,
    };
  },
  methods: {
    savecard() {
      Fstore.collection("cards")
        .add({
          card_id: this.card_id,
          data: this.data,
          bank: this.bank,
          cvv: this.cvv,
          creditNumber: this.creditNumber,
        })
        .then((docRef) => {
          console.log("Card added: ", docRef.id);
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Error adding employee: ", error);
        });
    },
      }
};
</script>
