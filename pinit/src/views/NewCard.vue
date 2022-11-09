<template>
  <div class="body">
  <div style="justify-content: center" class="center">
    <form @submit.prevent="savecard">
      <div class="inputbox">
        <input v-model="card_id" />
        <span>ID картки</span>
      </div>
      <div class="inputbox">
        <input v-model="bank" required />
        <span>Назва банку</span>
      </div>
      <div class="inputbox">
        <input v-model="creditNumber" required />
        <span>Номер карти(xxxx-xxxx-xxxx-xxxx)</span>
      </div>
      <div class="inputbox">
        <input v-model="cvv" required />
        <span>CVV</span>
      </div>
      <div class="inputbox">
        <input v-model="date" required />
        <span>Дата закінчення терміну дії (мм/рр)</span>
      </div>
    </form>
  </div></div>
    <div class="save" @click="savecard()">
        <font-awesome-icon icon="fa-solid fa-check" size="2x" />
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
      Fstore.collection('cards')
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
<style>
.body {
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.delete {
  position: fixed;
  bottom: 0px;
  right: 0px;
  padding: 20px;
}
.save {
  position: fixed;
  bottom: 0px;
  right: 40px;
  padding: 20px;
}
.center {
  width: 350px;
  position: relative;
  padding: 50px 50px;
  background: #fff;
  border-radius: 10px;
}
.center .inputbox {
  position: relative;
  width: 300px;
  height: 50px;
  margin-bottom: 50px;
}
.center .inputbox input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid #000;
  outline: none;
  background: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2em;
}
.center .inputbox:last-child {
  margin-bottom: 0;
}
.center .inputbox span {
  position: absolute;
  top: 14px;
  left: 20px;
  font-size: 1em;
  transition: 0.6s;
  font-family: sans-serif;
}
.center .inputbox input:focus ~ span,
.center .inputbox input:valid ~ span {
  transform: translateX(-13px) translateY(-35px);
  font-size: 1em;
}
</style>