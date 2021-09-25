<template>
<div class="selectWrap">
  <div class="select-wrapper">
    <div class="select" @click = "triggerOption">
      <div class="select-content">{{selectContent.text}}</div>
      <!-- <div class="triangle-wrapper">
        <div id="triangle-down"></div>
      </div> -->
    </div>
    <div class="option-wrapper" style="display: none;">
        <!-- 渲染父组件传来的值 -->
      <div :class="{'option-chose':item.text===selectContent.text}" class="option-item" v-for = "(item,index) in subject" :key="index" @mouseout="out($event)" @mouseover="move($event)" @click = "choose(item)">{{item.text}}</div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'OneSelect',
  props: {
    selectWidth: {
      type: Number,
      default: 100
    },
    //   接受父组件传过来的值
    subject: {
      type: Array
    },
    selectContent: {
      type: Object,
      default: function () {
        return { value: 0, text: '请选择' }
      }
    }
  },
  mounted () {
    document.querySelector('.selectWrap').style.width = this.selectWidth + 'px'
  },
  computed: {
    optionWrapper () {
      return document.querySelector('.option-wrapper')
    },
    selectCon () {
      return document.querySelector('.select-content')
    },
    subjectList () {
      return document.getElementsByClassName('option-item')
    }
  },
  methods: {
    move (event) {
      for (var item of this.subjectList) {
        item.classList.remove('hover')
      }
      event.currentTarget.classList.add('hover')
    },
    out (event) {
      event.currentTarget.classList.remove('hover')
    },
    triggerOption () {
      if (this.optionWrapper.style.display === 'none') {
        this.optionWrapper.style.display = 'block'
      } else {
        this.optionWrapper.style.display = 'none'
      }
      for (var item of this.subjectList) {
        if (item.innerHTML === this.selectContent.text) {
          item.classList.add('hover')
        } else {
          item.classList.remove('hover')
        }
      }
    },
    choose (item, value) {
      console.log('!', item, value)
      this.selectContent.text = item.text
      this.optionWrapper.style.display = 'none'
      this.$emit('changeSelect', this.selectContent.text, this.selectContent.value)
    }
  }
}
</script>
<style lang="scss">
  .select{
    position: relative;
    overflow: hidden;
    // padding-right: 10px;
    min-width: 220px;
    width: 100%;
    height: 30px;
    line-height: 20px;
    border: 1px solid #000;
    cursor: pointer;
    font-size: 13px;
    border: 2px solid royalblue;
    border-radius: 4px;
    &:hover{
      border: 2px solid red;
    }
    transition: all .4s;
  }
  .select-content{
    text-align: left;
    // vertical-align: middle;
    // margin: 6px;
    line-height: 30px;
    margin-left: 4px;
    font-size: 15px;
  }
  .triangle-wrapper{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 20px;
    background-color: #fff;
    cursor: default;
  }
  #triangle-down{
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 6px solid #000;
  }
  .option-wrapper{
    position: relative;
    overflow: hidden;
    min-width: 220px;
    width: 100%;
    border-right: 2px solid rgb(24, 212, 197);
    border-bottom: 2px solid rgb(24, 212, 197);
    border-left: 2px solid rgb(24, 212, 197);
    border-radius: 4px;
    .hover{
        cursor: pointer;
        background-color: rgb(11, 121, 165);
        color:#fff !important;
    }
  }
  .option-item{
    min-width: 220px;
    border-radius: 4px;
    // padding-top: 6px;
    height: 30px;
    padding-left: 4px;
    box-sizing: border-box;
    line-height: 30px;
    // padding-right: 10px;
    text-align: left;
    cursor: default;
  }
  .option-chose{
    color: rgb(196, 24, 67);
    font-weight: 500;
  }
</style>
