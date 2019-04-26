<template>
  <div id="app">
    <div class="shop">
      <p>ジュエオブインディアに行こう！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
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
}

.shop {
  font-size: 3rem;
  font-weight: bolder;

  @media (max-width: 700px) {
    font-size: 5vw;
  }
}
</style>
