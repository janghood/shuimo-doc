/**
 * @Description:
 * @Author: 阿怪
 * @Date: 2022/3/6 1:20 AM
 * @Version v1.0.0
 *
 * 公司的业务千篇一律，复杂的代码好几百行。
 */
import { MenuTypeArr } from "@higuaifan/wash-painting-ui";


export const menu:MenuTypeArr = [
  { title: '首页', key: 'main', isActive: true },
  {
    title: '基础组件', key: 'docs/components/base/button', isActive: false, children: [
      { title: '按钮', key: 'docs/components/base/button', isActive: true },
      { title: '输入框', key: 'docs/components/base/input', isActive: true },
    ]
  }
]
