/**
 * @Description: 代码高亮模块
 * @Author: 阿怪
 * @Date: 2022/3/21 10:16 PM
 * @Version v1.0.0
 *
 * 公司的业务千篇一律，复杂的代码好几百行。
 */
import Prism from 'prismjs';
import 'prismjs/components/prism-haml.js'
import 'prismjs/components/prism-typescript.js'
import 'prismjs/components/prism-scss.js'

export const resetCode = (code: string) => {
  const templateList = code.split('<template>'); // 为了获取最前面的<template>
  const [preTemplate, ...endTemplate] = templateList;
  const data = endTemplate.join('<template>');
  const leftTemplateList = data.split('</template>');
  const leftTemplateListTemp = leftTemplateList.concat(); // 备份
  const leftTemplateListPre = leftTemplateListTemp.splice(-1, 1); //后面</template>前的内容

  const left = leftTemplateListPre.join('</template>');
  const template = leftTemplateListTemp.join('</template>');

  let temp = code;
  Prism.languages['vue'] = {
    ...Prism.languages.haml,
    ...Prism.languages.typescript,
    ...Prism.languages.scss,
  }
  temp = Prism.highlight(code, Prism.languages.vue, 'vue');
  return `<pre class="language-vue"><code ref="element">${temp}</code></pre>`;
}
