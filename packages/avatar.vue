<script>
export default {
  name: 'OneAvatar',

  props: {
    size: {
      type: [Number, String],
      validator (val) {
        if (typeof val === 'string') {
          return ['large', 'medium', 'small'].includes(val)
        }
        return typeof val === 'number'
      }
    },
    shape: {
      type: String,
      default: 'circle',
      validator (val) {
        return ['circle', 'square'].includes(val)
      }
    },
    icon: String,
    src: String,
    alt: String,
    srcSet: String,
    error: Function,
    fit: {
      type: String,
      default: 'cover'
    }
  },

  data () {
    return {
      isImageExist: true
    }
  },

  computed: {
    avatarClass () {
      const { size, icon, shape } = this
      const classList = ['el-avatar']

      if (size && typeof size === 'string') {
        classList.push(`el-avatar--${size}`)
      }

      if (icon) {
        classList.push('el-avatar--icon')
      }

      if (shape) {
        classList.push(`el-avatar--${shape}`)
      }

      return classList.join(' ')
    }
  },

  methods: {
    handleError () {
      const { error } = this
      console.log(this)
      const errorFlag = error ? error() : undefined
      console.log(errorFlag)
      if (errorFlag !== false) {
        console.log('img is not exist')
        this.isImageExist = false
      }
    },
    renderAvatar () {
      const { icon, src, alt, isImageExist, srcSet, fit } = this

      if (isImageExist && src) {
        console.log('exist')
        return <img
          src={src}
          onError={this.handleError}
          alt={alt}
          srcSet={srcSet}
          style={{ 'object-fit': fit }}/>
      }

      if (icon) {
        return (<i class={icon} />)
      }

      return this.$slots.default
    }
  },

  render () {
    const { avatarClass, size } = this

    const sizeStyle = typeof size === 'number' ? {
      height: `${size}px`,
      width: `${size}px`,
      lineHeight: `${size}px`
    } : {}

    return (
      <span class={ avatarClass } style={ sizeStyle }>
        {
          this.renderAvatar()
        }
      </span>
    )
  }

}
</script>
<style lang="scss">
@import "./style-scss/mixins.scss";
@import "./style-scss/var.scss";
@import "./style-scss/icon.scss";

@include b(avatar) {
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  color: $--avatar-font-color;
  background: $--avatar-background-color;
  width: $--avatar-large-size;
  height: $--avatar-large-size;
  line-height: $--avatar-large-size;
  font-size: $--avatar-text-font-size;

  >img {
    display: block;
    height: 100%;
    vertical-align: middle;
  }

  @include m(circle) {
    border-radius: 50%;
  }

  @include m(square) {
    border-radius: $--avatar-border-radius;
  }

  @include m(icon) {
    font-size: $--avatar-icon-font-size;
  }

  @include m(large) {
    width: $--avatar-large-size;
    height: $--avatar-large-size;
    line-height: $--avatar-large-size;
  }

  @include m(medium) {
    width: $--avatar-medium-size;
    height: $--avatar-medium-size;
    line-height: $--avatar-medium-size;
  }

  @include m(small) {
    width: $--avatar-small-size;
    height: $--avatar-small-size;
    line-height: $--avatar-small-size;
  }
}
</style>
