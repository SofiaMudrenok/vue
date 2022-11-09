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
    </div>
  </div>
  <div>
    <div class="delete" @click="deleteCard()">
      <font-awesome-icon icon="fa-solid fa-trash" size="2x" />
    </div>
    <div class="save" @click="savecard()">
      <font-awesome-icon icon="fa-solid fa-check" size="2x" />
    </div>
  </div>
</template>
<script>
import Fstore from "@/fireconf/firebase";
export default {
  name: "edit-card",
  data() {
    return {
      card_id: null,
      date: null,
      bank: null,
      cvv: null,
      creditNumber: null,
    };
  },
  beforeRouteEnter (to, from, next) {
    Fstore.collection('cards').where('card_id', '==', to.params.card_id).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next(vm => {
            vm.card_id = doc.data().card_id
            vm.date = doc.data().date
            vm.bank = doc.data().bank
            vm.cvv = doc.data().cvv
            vm.creditNumber = doc.data().creditNumber
          })
        })
      })
    },
  watch: {
      '$route': 'fetchData'
    },
  methods: {
    savecard() {
      Fstore.collection("cards")
        .where("card_id", "==", this.$route.params.card_id)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref
              .update({
                card_id: this.card_id,
                date: this.date,
                bank: this.bank,
                cvv: this.cvv,
                creditNumber: this.creditNumber,
              })
              .then(() => {
                this.$router.push({ name: "wallet" });
              });
          });
        });
    },
    deleteCard() {
      if (confirm("Ви впевнені?")) {
        Fstore.collection("cards")
          .where("card_id", "==", this.card.card_id)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete();
            });
          });
      }
    },
  },
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
