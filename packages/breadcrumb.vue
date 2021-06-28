<template>
  <div class="el-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'OneBreadcrumb',

  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: {
      type: String,
      default: ''
    }
  },

  provide () {
    return {
      elBreadcrumb: this
    }
  },

  mounted () {
    const items = this.$el.querySelectorAll('.el-breadcrumb__item')
    if (items.length) {
      items[items.length - 1].setAttribute('aria-current', 'page')
    }
  }
}
</script>
<style lang="scss">
@import "./style-scss/utils.scss";
@import "./style-scss/mixins.scss";
@import "./style-scss/var.scss";

@include b(breadcrumb) {
  font-size: 14px;
  line-height: 1;
  @include utils-clearfix;

  @include e(separator) {
    margin: 0 9px;
    font-weight: bold;
    color: $--color-text-placeholder;

    &[class*=icon] {
      margin: 0 6px;
      font-weight: normal;
    }
  }

  @include e(item) {
    float: left;

    @include e(inner) {
      color: $--color-text-regular;

      &.is-link, & a {
        font-weight: bold;
        text-decoration: none;
        transition: $--color-transition-base;
        color: $--color-text-primary;

        &:hover {
          color: $--color-primary;
          cursor: pointer;
        }
      }
    }

    &:last-child {
      .el-breadcrumb__inner,
      .el-breadcrumb__inner a {
        &, &:hover {
          font-weight: normal;
          color: $--color-text-regular;
          cursor: text;
        }
      }

      .el-breadcrumb__separator {
        display: none;
      }
    }
  }
}

</style>
