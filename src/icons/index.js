import Vue from "vue";
import svgicons from "./svgicons"

Vue.component('svg-icon',svgicons)


/**
 * 解析svg代码
 * require.context: 读取指定目录的所有文件
 * param: 目录 是否遍历子目录  遍历文件规则
 */

// const req = require.context('./svg',false,/\.svg$/)
// const requireAll = reuqireContext => {
//     return reuqireContext.keys().map(requireContext)
// }
// requireAll(req)