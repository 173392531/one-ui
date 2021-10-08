// 整个包的入口
// 统一导出
// 导出颜色选择器组件
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'
import Alert from './alert'
import Avatar from './avatar.vue'
import BackTop from './backtop.vue'
import Badge from './badge.vue'
import Breadcrumb from './breadcrumb.vue'
import BreadcrumbItem from './breadcrumb-item.vue'
import Card from './card.vue'
import './fonts/iconfont.css'
import Message from './topMsg/index'
import Rate from './rate/index'
import Select from './Select.vue'
import Tag from './tag/index'
import Tree from './tree/tree.vue'
import OkrTree from './tree/OkrTree.vue'
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem,
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Message,
  Rate,
  Select,
  Tag,
  Tree,
  OkrTree
]
// 定义install方法
const install = function (Vue) {
  // 注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 导出install方法
export default {
  install
}
