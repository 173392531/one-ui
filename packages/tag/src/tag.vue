<script>
export default {
  name: 'OneTag',
  props: {
    text: String,
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String,
    effect: {
      type: String,
      default: 'light',
      validator (val) {
        return ['dark', 'light', 'plain'].indexOf(val) !== -1
      }
    }
  },
  methods: {
    handleClose (event) {
      event.stopPropagation()
      this.$emit('close', event)
    },
    handleClick (event) {
      this.$emit('click', event)
    }
  },
  computed: {
    tagSize () {
      return this.size || (this.$ELEMENT || {}).size
    }
  },
  render (h) {
    const { type, tagSize, hit, effect } = this
    const classes = [
      'el-tag',
      type ? `el-tag--${type}` : '',
      tagSize ? `el-tag--${tagSize}` : '',
      effect ? `el-tag--${effect}` : '',
      hit && 'is-hit'
    ]
    const tagEl = (
      <span
        class={ classes }
        style={{ backgroundColor: this.color }}
        on-click={ this.handleClick }>
        { this.$slots.default }
        {
          this.closable && <i class="el-tag__close el-icon-close" on-click={ this.handleClose }></i>
        }
      </span>
    )

    return this.disableTransitions ? tagEl : <transition name="el-zoom-in-center">{ tagEl }</transition>
  }
}
</script>
<style lang="scss">
@import "../../style-scss/mixins.scss";
@import "../../style-scss/var.scss";

@mixin genTheme($backgroundColorWeight, $borderColorWeight, $fontColorWeight, $hoverColorWeight) {
  background-color: mix($--tag-primary-color, $--color-white, $backgroundColorWeight);
  border-color: mix($--tag-primary-color, $--color-white, $borderColorWeight);
  color: mix($--tag-primary-color, $--color-white, $fontColorWeight);

  @include when(hit) {
    border-color: $--tag-primary-color;
  }

  .el-tag__close {
    color: mix($--tag-primary-color, $--color-white, $fontColorWeight);
    &:hover {
      color: $--color-white;
      background-color: mix($--tag-primary-color, $--color-white, $hoverColorWeight);
    }
  }

  &.el-tag--info {
    background-color: mix($--tag-info-color, $--color-white, $backgroundColorWeight);
    border-color: mix($--tag-info-color, $--color-white, $borderColorWeight);
    color: mix($--tag-info-color, $--color-white, $fontColorWeight);

    @include when(hit) {
      border-color: $--tag-info-color;
    }

    .el-tag__close {
      color: mix($--tag-info-color, $--color-white, $fontColorWeight);
      &:hover {
        color: $--color-white;
        background-color: mix($--tag-info-color, $--color-white, $hoverColorWeight);
      }
    }
  }

  &.el-tag--success {
    background-color: mix($--tag-success-color, $--color-white, $backgroundColorWeight);
    border-color: mix($--tag-success-color, $--color-white, $borderColorWeight);
    color: mix($--tag-success-color, $--color-white, $fontColorWeight);

    @include when(hit) {
      border-color: $--tag-success-color;
    }

    .el-tag__close {
      color: mix($--tag-success-color, $--color-white, $fontColorWeight);
      &:hover {
        color: $--color-white;
        background-color: mix($--tag-success-color, $--color-white, $hoverColorWeight);
      }
    }
  }

  &.el-tag--warning {
    background-color: mix($--tag-warning-color, $--color-white, $backgroundColorWeight);
    border-color: mix($--tag-warning-color, $--color-white, $borderColorWeight);
    color: mix($--tag-warning-color, $--color-white, $fontColorWeight);

    @include when(hit) {
      border-color: $--tag-warning-color;
    }

    .el-tag__close {
      color: mix($--tag-warning-color, $--color-white, $fontColorWeight);
      &:hover {
        color: $--color-white;
        background-color: mix($--tag-warning-color, $--color-white, $hoverColorWeight);
      }
    }
  }

  &.el-tag--danger {
    background-color: mix($--tag-danger-color, $--color-white, $backgroundColorWeight);
    border-color: mix($--tag-danger-color, $--color-white, $borderColorWeight);
    color: mix($--tag-danger-color, $--color-white, $fontColorWeight);

    @include when(hit) {
      border-color: $--tag-danger-color;
    }

    .el-tag__close {
      color: mix($--tag-danger-color, $--color-white, $fontColorWeight);
      &:hover {
        color: $--color-white;
        background-color: mix($--tag-danger-color, $--color-white, $hoverColorWeight);
      }
    }
  }
}

@include b(tag) {
  @include genTheme(10%, 20%, 100%, 100%);
  display: inline-block;
  height: 32px;
  padding: $--tag-padding;
  line-height: 30px;
  font-size: $--tag-font-size;
  color: $--tag-primary-color;
  border-width: 1px;
  border-style: solid;
  border-radius: $--tag-border-radius;
  box-sizing: border-box;
  white-space: nowrap;

  .el-icon-close {
    border-radius: 50%;
    text-align: center;
    position: relative;
    cursor: pointer;
    font-size: 12px;
    height: 16px;
    width: 16px;
    line-height: 16px;
    vertical-align: middle;
    top: -1px;
    right: -5px;

    &::before {
      display: block;
    }
  }

  @include m(dark) {
    @include genTheme(100%, 100%, 0, 80%);
  }

  @include m(plain) {
    @include genTheme(0, 40%, 100%, 100%);
  }

  @include m(medium) {
    height: 28px;
    line-height: 26px;

    .el-icon-close {
      transform: scale(.8);
    }
  }

  @include m(small) {
    height: 24px;
    padding: 0 8px;
    line-height: 22px;

    .el-icon-close {
      transform: scale(.8);
    }
  }

  @include m(mini) {
    height: 20px;
    padding: 0 5px;
    line-height: 19px;

    .el-icon-close {
      margin-left: -3px;
      transform: scale(.7);
    }
  }
}

.demo-block.demo-tag {
  .el-tag + .el-tag {
    margin-left: 10px;
  }

  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }

  .tag-group {
    display: flex;
    align-items: center;

    &__title {
      width: 45px;
      font-size: 14px;
      color: #606266;
    }

    &+.tag-group  {
      margin-top: 10px;
    }
  }
}
.el-zoom-in-center-enter-active,
.el-zoom-in-center-leave-active {
  transition: all .3s cubic-bezier(.55,0,.1,1);
}
.el-zoom-in-center-enter,
.el-zoom-in-center-leave-active {
  opacity: 0;
  transform: scaleX(0);
}
</style>
