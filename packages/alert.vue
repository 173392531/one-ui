<template>
  <transition name="el-alert-fade">
    <div
      class="el-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      v-show="visible"
      role="alert"
    >
      <i class="el-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
      <div class="el-alert__content">
        <span class="el-alert__title" :class="[ isBoldTitle ]" v-if="title || $slots.title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="el-alert__description" v-if="$slots.default && !description"><slot></slot></p>
        <p class="el-alert__description" v-if="description && !$slots.default">{{ description }}</p>
        <i class="el-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
const TYPE_CLASSES_MAP = {
  success: 'el-icon-success',
  warning: 'el-icon-warning',
  error: 'el-icon-error'
}
export default {
  name: 'OneAlert',

  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    },
    showIcon: Boolean,
    center: Boolean,
    effect: {
      type: String,
      default: 'light',
      validator: function (value) {
        return ['light', 'dark'].indexOf(value) !== -1
      }
    }
  },

  data () {
    return {
      visible: true
    }
  },

  methods: {
    close () {
      this.visible = false
      this.$emit('close')
    }
  },

  computed: {
    typeClass () {
      return `el-alert--${this.type}`
    },

    iconClass () {
      return TYPE_CLASSES_MAP[this.type] || 'el-icon-info'
    },

    isBigIcon () {
      return this.description || this.$slots.default ? 'is-big' : ''
    },

    isBoldTitle () {
      return this.description || this.$slots.default ? 'is-bold' : ''
    }
  }
}
</script>
<style lang=scss>
@import "./style-scss/mixins";
@import "./style-scss/var";
@import "./style-scss/icon.scss";

@include b(alert) {
  width: 100%;
  padding: $--alert-padding;
  margin: 0;
  box-sizing: border-box;
  border-radius: $--alert-border-radius;
  position: relative;
  background-color: $--color-white;
  overflow: hidden;
  opacity: 1;
  display: flex;
  align-items: center;
  transition: opacity .2s;

  @include when(light) {
    .el-alert__closebtn {
      color: $--color-text-placeholder;
    }
  }

  @include when(dark) {
    .el-alert__closebtn {
      color: $--color-white;
    }
    .el-alert__description {
      color: $--color-white;
    }
  }

  @include when(center) {
    justify-content: center;
  }

  @include m(success) {
    &.is-light {
      background-color: $--alert-success-color;
      color: $--color-success;

      .el-alert__description {
        color: $--color-success;
      }
    }

    &.is-dark {
      background-color: $--color-success;
      color: $--color-white;
    }
  }

  @include m(info) {
    &.is-light {
      background-color: $--alert-info-color;
      color: $--color-info;
    }

    &.is-dark {
      background-color: $--color-info;
      color: $--color-white;
    }

    .el-alert__description {
      color: $--color-info;
    }
  }

  @include m(warning) {
    &.is-light {
      background-color: $--alert-warning-color;
      color: $--color-warning;

      .el-alert__description {
        color: $--color-warning;
      }
    }

    &.is-dark {
      background-color: $--color-warning;
      color: $--color-white;
    }
  }

  @include m(error) {
    &.is-light {
      background-color: $--alert-danger-color;
      color: $--color-danger;

      .el-alert__description {
        color: $--color-danger;
      }
    }

    &.is-dark {
      background-color: $--color-danger;
      color: $--color-white;
    }
  }

  @include e(content) {
    display: table-cell;
    padding: 0 8px;
  }

  @include e(icon) {
    font-size: $--alert-icon-size;
    width: $--alert-icon-size;
    @include when(big) {
      font-size: $--alert-icon-large-size;
      width: $--alert-icon-large-size;
    }
  }

  @include e(title) {
    font-size: $--alert-title-font-size;
    line-height: 18px;
    @include when(bold) {
      font-weight: bold;
    }
  }

  & .el-alert__description {
    font-size: $--alert-description-font-size;
    margin: 5px 0 0 0;
  }

  @include e(closebtn) {
    font-size: $--alert-close-font-size;
    opacity: 1;
    position: absolute;
    top: 12px;
    right: 15px;
    cursor: pointer;

    @include when(customed) {
      font-style: normal;
      font-size: $--alert-close-customed-font-size;
      top: 9px;
    }
  }
}

.el-alert-fade-enter,
.el-alert-fade-leave-active {
  opacity: 0;
}
.demo-block.demo-alert .el-alert {
  margin: 20px 0 0;
}

.demo-block.demo-alert .el-alert:first-child {
  margin: 0;
}
</style>
