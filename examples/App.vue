<template>
  <div id="app">
    <!-- <button></button> -->
    <div class="row">
      <one-button type="info">按钮</one-button>
      <one-button type="success" plain> 按钮</one-button>
      <one-button type="danger" round>按钮</one-button>
      <one-button type="warning" circle>按钮</one-button>
      <one-button type="primary" icon="message">按钮</one-button>
    </div>
    <div class="dialog">
      <one-button @click="this.visible=true">打开对话框</one-button>
      <one-dialog title="shabi"></one-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      visible: false
    }
  },
  components: {}
}
</script>

<style lang="scss">
.row{
  display: flex;
  justify-content: space-between;
}
</style>
