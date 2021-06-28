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
    werr () {
      console.log('iserrrr')
    },
    fn () {
      this.visible = true
    }
  }
}
</script>
<template>
  <div id="app" class="wrapper">
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

    <div class="avatar">
      <one-avatar shape="square" :size="100" fit="fill" :src="require('./assets/girl2.png')"></one-avatar>
      <one-avatar shape="circle" :size="100" fit="fill" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></one-avatar>
    </div>
    <div class="badge">
      <one-badge :value="12" class="item">
        <one-button size="small" type="danger">评论</one-button>
      </one-badge>
      <one-badge :value="3" class="item">
        <one-button size="small" type="primary">回复</one-button>
      </one-badge>
      <one-badge :value="1" class="item" type="primary">
        <one-button size="small">评论</one-button>
      </one-badge>
      <one-badge :value="2" class="item" type="warning">
        <one-button size="small">回复</one-button>
      </one-badge>
      <one-badge is-dot class="item">
        <one-button class="share-button" icon="share" type="primary"></one-button>
      </one-badge>
    </div>
    <div class="backtop">
      <one-backtop target=".wrapper" :visibility-height="100">
      </one-backtop>
      <one-backtop target=".wrapper" :bottom="100">
        <div
          style="{
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0,0,0, .12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
          }"
        >
          UP
        </div>
      </one-backtop>
    </div>
    <div class="breadcrumb">
      <one-breadcrumb separator-class="el-icon-arrow-right">
        <one-breadcrumb-item :to="{ path: '/' }">首页</one-breadcrumb-item>
        <one-breadcrumb-item>活动管理</one-breadcrumb-item>
        <one-breadcrumb-item>活动列表</one-breadcrumb-item>
        <one-breadcrumb-item>活动详情</one-breadcrumb-item>
      </one-breadcrumb>
    </div>
    <div class="card">
      <one-card shadow="hover">
        卡片：鼠标悬浮时显示
      </one-card>
    </div>
    <div class="collapse">
      <one-collapse accordion>
        <one-collapse-item>
          <template slot="title">
            一致性 Consistency<i class="header-icon el-icon-info"></i>
          </template>
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </one-collapse-item>
        <one-collapse-item title="反馈 Feedback">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </one-collapse-item>
        <one-collapse-item title="效率 Efficiency">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </one-collapse-item>
        <one-collapse-item title="可控 Controllability">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </one-collapse-item>
      </one-collapse>
    </div>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
    <p>sss</p>
  </div>
</template>

<style lang="scss">
*{
  // margin:0;
  // padding:5px;
  // overflow-y:hidden;
  // overflow: hidden;
  // margin-top: 5px;
}
.row{
  display: flex;
  justify-content: space-between;
}
.avatar{
  // width: 100px;
  // height: 100px;
  border: 1px solid greenyellow;
}
.wrapper {
  height: 97vh;
  border: 4px solid red;
  // margin-top: 5px;
  // height: 1000px;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: scroll;
}
.badge{
  display: flex;
  justify-content: space-between;
  margin: 20px;
}
</style>
