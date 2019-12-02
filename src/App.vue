<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app {
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
