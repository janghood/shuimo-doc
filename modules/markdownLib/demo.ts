/**
 * @Description: md的demo处理方法
 * @Author: 阿怪
 * @Date: 2022/3/5 1:31 AM
 * @Version v1.0.0
 *
 * 公司的业务千篇一律，复杂的代码好几百行。
 */
import * as fs from 'fs';

const searchValue = /:::\s*demo\s+([\\/.\w-]+)/g;
const insertSearchValue = /<p>:::\s*demo\s+([\\/.\w-]+)<\/p>/g;
const pathTransform = (str: string) => {
  const demoPathOnlyLetters = str.replace(/[^a-zA-Z\d]/g, '');
  return `Demo${demoPathOnlyLetters}`;
}

export default function demo() {
  const importMap = new Map();
  importMap.set('PrismCode', "import PrismCode from '/components/code/PrismCode.vue'")
  
  const resetCode = (code: string) => {
    const templateList = code.split('<template>'); // 为了获取最前面的<template>
    const [preTemplate, ...endTemplate] = templateList;
    const data = endTemplate.join('<template>');
    const leftTemplateList = data.split('</template>');
    const leftTemplateListTemp = leftTemplateList.concat(); // 备份
    const leftTemplateListPre = leftTemplateListTemp.splice(-1, 1); //后面</template>前的内容
    
    const left = leftTemplateListPre.join('</template>');
    const template = leftTemplateListTemp.join('</template>');
    
    let temp = code;
    temp = temp.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\{/g, '&#123;')
      .replace(/\}/g, '&#125;')
      .replace(/\'/g, '&#39;')
      .replace(/\"/g, '&quot;');
    return `<div class="code-div">
      <PrismCode type="html" languageType="html" :code="&#x60;${temp}&#x60;"/>
    </div>`;
  }

  /**
   * 用于在md中查找 :::demo [component_name]/[demo_name] 的方法
   * @param code
   */
  const findDemo = (code: string) => {
    code.replace(searchValue, (demoStr: string, relativeDemoPath: string) => {
      const demoDefName = pathTransform(relativeDemoPath);
      importMap.set(demoDefName, `import ${demoDefName} from '/demos/${relativeDemoPath}.vue'`)
      return '';
    });
  }

  /**
   * 用于在md转vue后添加导入的方法
   * @param code
   */
  const insertImport = (code: string) => {
    // 添加组件
    const withComponentCode = code.replace(
      insertSearchValue,
      (demoStr: string, relativeDemoPath: string) => {
        const demoDefName = pathTransform(relativeDemoPath);
        const demoData = fs.readFileSync(`${__dirname}/../../demos/${relativeDemoPath}.vue`, 'utf-8')
        if (importMap.has(demoDefName)) {
          return `<${demoDefName} /> ${resetCode(demoData)}`;
        }
        return '';
      })
    console.log(withComponentCode)
    const importComponents = Array(...importMap.values()).join('\n');
    // 往setup里添加import
    return withComponentCode.replace('<script setup>', `<script setup>\n${importComponents}`);
  }


  return {
    findDemo,
    insertImport
  }

}
