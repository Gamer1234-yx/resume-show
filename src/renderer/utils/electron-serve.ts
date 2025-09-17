// 判断是electron 环境 还是浏览器环境
export const isElectron = (): boolean => {
  return typeof window !== 'undefined' && window.process && window.process.type === 'renderer'
}
