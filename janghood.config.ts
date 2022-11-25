/**
 * @description janghood配置文件
 * @author 阿怪
 * @date 2022/4/12 12:55 AM
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { defineJhConfig } from '@janghood/config';


export default defineJhConfig({
  apiExtractor: {
    include: ['node_modules/shuimo-ui/lib/**/*.d.ts'],
    exclude: ['**/dependents/**/*.d.ts', '**/types/**/*.d.ts', '**/basic/**/*.d.ts'],
    document: {
      markdown: {
        output: 'apis',
        replace: 'node_modules/shuimo-ui/lib/',
        active: true
      }
    }
  },
  lint: {
    eslint: {
      nuxt: true,
      include: ['**/*.{vue,ts,tsx,d.ts}'],
      exclude: ['**/assets/**', '**/basic/**', '**/node_modules/**'],
    },
    commitlint: true
  }
});
