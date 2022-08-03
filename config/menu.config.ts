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
      { title: '颜色', key: 'docs/color', isActive: false },
      { title: '从wash-painting升级', key: 'main/w2m', isActive: false },
    ]
  },

  {
    title: '基础组件', key: 'docs/components/base/button', isActive: false, children: [
      { title: '按钮', key: 'docs/components/base/button', isActive: false },
      { title: '输入框', key: 'docs/components/base/input', isActive: false },
      { title: '单选框', key: 'docs/components/base/radio', isActive: false },
      { title: '复选框', key: 'docs/components/base/checkbox', isActive: false },
      { title: '选择框', key: 'docs/components/base/select', isActive: false },
      { title: '日期选择框', key: 'docs/components/base/datePicker', isActive: false },
      { title: '列表', key: 'docs/components/base/list', isActive: false },
    ]
  },
  {
    title: '模版组件', key: 'docs/components/template/form', isActive: false, children: [
      { title: '表单', key: 'docs/components/template/form', isActive: false },
      { title: '列表', key: 'docs/components/template/table', isActive: false },
      { title: '分页', key: 'docs/components/template/pagination', isActive: false },
      { title: '宣纸布局', key: 'docs/components/template/rice-paper', isActive: false },
    ]
  },
  {
    title: '消息组件', key: 'docs/components/message/dialog', isActive: false, children: [
      { title: '弹窗', key: 'docs/components/message/dialog', isActive: false },
      { title: '抽屉', key: 'docs/components/message/drawer', isActive: false },
      { title: '提示', key: 'docs/components/message/message', isActive: false },
      { title: '气泡卡片', key: 'docs/components/message/popover', isActive: false },
      { title: '悬浮提示', key: 'docs/components/message/tooltip', isActive: false },
      { title: '确认框', key: 'docs/components/message/confirm', isActive: false }
    ]
  },
  {
    title: '其他组件', key: 'docs/components/other/upload', isActive: false, children: [
      { title: '文件上传', key: 'docs/components/other/upload', isActive: false },
      { title: '控制台打印', key: 'docs/components/other/printer', isActive: false },
      { title: '分割线', key: 'docs/components/other/divider', isActive: false },
      { title: '进度条', key: 'docs/components/other/progress', isActive: false },
      { title: '边框', key: 'docs/components/other/border', isActive: false },
    ]
  }
]
