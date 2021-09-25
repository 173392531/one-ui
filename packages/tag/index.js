import OneTag from './src/tag'

/* istanbul ignore next */
OneTag.install = function (Vue) {
  Vue.component(OneTag.name, OneTag)
}

export default OneTag
