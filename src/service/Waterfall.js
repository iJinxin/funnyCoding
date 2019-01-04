/**
 * 使用优先级队列解决“最小差”瀑布流问题
 * 把所有图片按高度排序，每一列为一个分组，也是优先级队列里的一个元素，优先级由分组总高度决定
 * 每次把当前最高图片放置在优先级最高(最矮)的分组中，重置优先级
 * repeat
 */

// 瀑布分组，记录每一列长度，初始化为0
class WaterfallQueue {
  constructor(queueId) {
    this.queue = [];
    this.height = 0;
    this.queueId = queueId;
  }
  addImg(img) {
    // 使用插入排序，保证每次生成数据插入后的顺序。
    const index = _.sortedIndexBy(this.queue, img, o => o.index);
    this.queue.splice(index, 0, img);
    this.height += img.height;
  }
}

// 优先级队列，每个WaterfallQueue实例作为一个元素
// 瀑布流n个数据，k列
// totalCount记录瀑布流中元素总数
class Waterfall {
  constructor(k) {
    this.totalCount = 0;
    this.queueList = [];
    for (let i = 0; i < k; i++) {
      this.queueList[i] = new WaterfallQueue(i);
    }
  }
  addItems(n) {
    // 正序排序，每次取出最大的元素
    const orderlyData = _.sortBy(n, obj => -obj.height);
    for (let i = 0; i < orderlyData.length; i++) {
      const minIndex = this.getminQueue();
      this.queueList[minIndex].addImg(orderlyData[i]);
      this.totalCount++;
    }
  }
  // 获取最优先队列
  getminQueue() {
    let min = this.queueList[0].height;
    let index = 0;
    for (let i = 0; i < this.queueList.length; i++) {
      if (this.queueList[i].height < min) {
        min = this.queueList[i].height;
        index = i;
      }
    }
    return index;
  }
  // 重置，队列清空
  resetQueue() {
    this.totalCount = 0;
    for (let i = 0; i < this.queueList.length; i++) {
      this.queueList[i].height = 0;
      this.queueList[i].queue = [];
    }
  }
}

export default Waterfall;
