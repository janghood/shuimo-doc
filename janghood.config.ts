/**
 * @description janghood配置文件
 * @author 阿怪
 * @date 2022/4/12 12:55 AM
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import defineJhConfig from "../api-extractor/src/config/defineJhConfig";


export default defineJhConfig({
  apiExtractor: {
    include: ["wash-painting-ui/lib"],
    exclude: ['dependents'],
    document: {
      markdown: {
        output: 'apis',
        active: true
      }
    }
  }
});