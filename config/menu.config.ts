/**
 * @Description:
 * @Author: 阿怪
 * @Date: 2022/3/6 1:20 AM
 * @Version v1.0.0
 *
 * 公司的业务千篇一律，复杂的代码好几百行。
 */
import type { MenuTypeArr } from "shuimo-ui";


export const menu: MenuTypeArr = [
  {
    title: '首页', key: 'main', isActive: true, children: [
      { title: '快速开始', key: 'main/quickStart', isActive: false },
      { title: '颜色', key: 'color', isActive: false },
      { title: '从wash-painting升级', key: 'w2m', isActive: false },
    ]
  },

  {
    title: '基础组件', key: 'button', isActive: false, children: [
      { title: '按钮', key: 'button', isActive: false },
      { title: '输入框', key: 'input', isActive: false },
      { title: '单选框', key: 'radio', isActive: false },
      { title: '复选框', key: 'checkbox', isActive: false },
      { title: '选择框', key: 'select', isActive: false },
      { title: '日期选择框', key: 'datePicker', isActive: false },
      { title: '列表', key: 'list', isActive: false },
      { title: '开关', key: 'switch', isActive: false },
      { title: '标签', key: 'tag', isActive: false },
    ]
  },
  {
    title: '模版组件', key: 'form', isActive: false, children: [
      { title: '表单', key: 'form', isActive: false },
      { title: '列表', key: 'table', isActive: false },
      { title: '分页', key: 'pagination', isActive: false },
      { title: '宣纸布局', key: 'rice-paper', isActive: false },
    ]
  },
  {
    title: '消息组件', key: 'dialog', isActive: false, children: [
      { title: '弹窗', key: 'dialog', isActive: false },
      { title: '抽屉', key: 'drawer', isActive: false },
      { title: '提示', key: 'message', isActive: false },
      { title: '气泡卡片', key: 'popover', isActive: false },
      { title: '悬浮提示', key: 'tooltip', isActive: false },
      { title: '确认框', key: 'confirm', isActive: false }
    ]
  },
  {
    title: '其他组件', key: 'upload', isActive: false, children: [
      { title: '文件上传', key: 'upload', isActive: false },
      { title: '控制台打印', key: 'printer', isActive: false },
      { title: '分割线', key: 'divider', isActive: false },
      { title: '进度条', key: 'progress', isActive: false },
      { title: '边框', key: 'border', isActive: false },
      { title: '滚动条', key: 'scroll', isActive: false },
      { title: '加载', key: 'loading', isActive: false },
    ]
  }
]
