/**
 * 格式化过去某一时间到现在的时长
 * @param {时间戳} time 
 */
export function timeAgo(time: number) {
  let pasted = new Date(time).getTime();
  const between = (Date.now() - pasted) / 1000;
  if (between < 60) {
    return '刚刚';
  } else if (between < 3600) {
    return Math.round(between / 60) + '分钟前'
  } else if (between < 86400) {
    return Math.round(between / 3600) + '小时前'
  } else {
    return Math.round(between / 86400) + '天前'
  }
};

/**
 * 几天前
 * @param time yyyy-MM-dd
 */
export function daysAgo(time: string) {
  
}