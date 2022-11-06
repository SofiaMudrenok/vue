<template>
  <div class="main-wallet">
    <div v-for="card in cards" :key="card.id" class="card-box">
      <Card :card="card" />
    </div>
    <div class="add">
      <router-link to="/new">
      <font-awesome-icon icon="fa-solid fa-circle-plus" size="4x" />
    </router-link>
    </div>
  </div>
  <div></div>
</template>
<script>
import Fstore from "@/fireconf/firebase";
import { mapGetters } from "vuex";
import Card from "@/components/Card.vue";
export default {
  name: "WalletView",
  components: {
    Card,
  },
  data() {
    return {
      cards: [],
    };
  },
  computed: {
    ...mapGetters(["getCards"]),
  },
  created() {
    Fstore.collection("cards")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data);
          const data = {
            id: doc.id,
            card_id: doc.data().card_id,
            bank: doc.data().bank,
            creditNumber: doc.data().creditNumber,
            cvv: doc.data().cvv,
            date: doc.data().date,
          };
          this.cards.push(data);
        });
      });
  },
};
</script>
<style>
.main-wallet {
  padding: 20px 200px 0 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.card-box {
  padding: 8px;
}
.add {
  position: fixed;
  bottom: 0px;
  right: 0px;
  padding: 20px;
}
</style>
