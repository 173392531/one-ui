<script>
// import oneButton from '../packages/button.vue'
// import oneDialog from '../packages/dialog.vue'
export default {
  name: 'App',
  data () {
    // 存放数据
    return {
      visible: false,
      input: 'shq',
      active: false
    }
  },
  components: {
    // oneButton,
    // oneDialog
  },
  methods: {
    fn () {
      this.visible = true
    }
  }
}
</script>
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
      <one-button @click="fn">打开对话框</one-button>
      <one-dialog width="20%" height="200px" title="shabi" :visible.sync="visible">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <template v-slot:footer>
          <one-button type="danger">确定</one-button>
          <one-button>取消</one-button>
        </template>
      </one-dialog>
    </div>

    <div class="input">
      <one-input placeholder="请输入" v-model="input" clearable></one-input>
      <one-input placeholder="请输入" type="password" v-model="input" showPassword></one-input>
    </div>

    <div class="switch">
      <one-switch v-model="active" active-color="yellowgreen" inactive-color="pink"></one-switch>
      <one-switch></one-switch>
    </div>

    <div class="alert">
      <one-alert title="这是标题" type="success" show-icon center></one-alert>
      <one-alert title="这是二标题" close-text="知道了" show-icon></one-alert>
      <one-alert effect="dark" title="这是三标题" type="success" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"></one-alert>
    </div>
  </div>
</template>

<style lang="scss">
.row{
  display: flex;
  justify-content: space-between;
}
</style>
