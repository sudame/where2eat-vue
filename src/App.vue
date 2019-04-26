<template>
  <div id="app">
    <div>
      <h1>where2eat</h1>
    </div>
    <div class="spacer space-1"></div>
    <div class="shop">
      <p v-if="this.shopList.length > 0">{{this.currentShop.name}}に行こう！</p>
      <button @click="changeShop()">CHANGE!</button>
    </div>
    <div>
      <div>
        <input v-model="shopName" type="text" placeholder="追加するお店の名前">
      </div>
      <button @click="update()" class="submit">送信</button>
    </div>
    <div class="spacer space-1"></div>
  </div>
</template>

<script>
import firebase from "./assets/js/firebase.js";
import _ from "lodash";

export default {
  name: "app",
  mounted() {
    firebase
      .firestore()
      .collection("test-data")
      .onSnapshot(qsnap => {
        this.shopList = [];
        qsnap.forEach(snap => {
          this.shopList[this.shopList.length] = snap.data();
        });
        this.changeShop();
      });
  },
  data() {
    return {
      shopList: [],
      currentShop: {},
      shopName: ""
    };
  },
  methods: {
    update() {
      console.log("#");
      firebase
        .firestore()
        .collection("test-data")
        .add({
          name: this.shopName
        })
        .then(() => {
          this.shopName = "";
        });
    },
    changeShop() {
      const _shopList = this.shopList.concat();
      this.currentShop = _shopList[_.random(0, _shopList.length - 1)];
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: "Noto Sans JP", sans-serif;
}
</style>

<style <style lang="scss" scoped>
#app {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.shop {
  font-size: 3rem;
  font-weight: bolder;
  margin-bottom: 5rem;

  p {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 700px) {
    font-size: 5vw;
  }
}

button {
  margin: 0.5rem auto;
  display: block;
  border: 1px solid grey;
  height: 2rem;
  width: 5rem;
}

input[type="text"] {
  display: block;
  margin: 0, 5rem;
  padding: 0.5rem;
  border: 1px solid grey;
  height: 2rem;
  width: 15rem;
  line-height: 1.5rem;
  text-align: center;
}

.submit {
  background-color: #f99;
  border: none;
  font-weight: 900;
}

.spacer {
  &.space-1 {
    flex: 1;
  }
}

h1 {
  width: 100vw;
  line-height: 1;
  margin: 0;
  padding: 1rem 0;
  border-bottom: 1px solid grey;
}
</style>
