// funnyCoding module service
import Mock from 'mockjs'
/**
 * mock初始化弹幕数据
 * @param n 弹幕数量 intiger
 */
const initBarrages = (n) => {
  if (n <= 0) return
  const barrages = []
  for (let i=0;i<n;i++) {
    barrages.push(Mock.mock({
      id: '@increment',
      timestamp: +Mock.Random.date('T'),
      color: '@color',
      font: '@integer(14, 30)',
      speed: '@float(0.5, 3.5, 1, 1)',
      time: '@float(1, 132)',
      value: '@csentence(2, 20)'
    }))
  }
  return barrages
}
export default {
  queryBarrages: config => {
    const body = {
      code: 200,
      data: initBarrages(200),
      message: '操作成功'
    }
    return body
  },
  addBarrage: config => {
    const body = {
      code: 200,
      data: null,
      message: '操作成功'
    }
    return body
  }
}