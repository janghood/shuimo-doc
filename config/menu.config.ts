/**
 * @Description:
 * @Author: 阿怪
 * @Date: 2022/3/6 1:20 AM
 * @Version v1.0.0
 *
 * 公司的业务千篇一律，复杂的代码好几百行。
 */
import type { MenuTypeArr } from "@higuaifan/wash-painting-ui";


export const menu: MenuTypeArr = [
  { title: '首页', key: 'main', isActive: true },
  { title: '颜色', key: 'docs/color', isActive: false },
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
    ]
  }
]
