// 瀑布队列，记录每一列长度，初始化为0
class WaterfulQueue {
  constructor() {
    this.queue = [];
    this.height = 0;
  }
  addHeight(height) {
    this.queue.push(height);
    this.height += height;
  }
  getHeight() {
    return this.height;
  }
}

// 瀑布流n个数据，k列
class Waterful {
  constructor(k) {
    this.k = k;
    this.queueList = [];
    for (let i = 0; i < k; i++) {
      this.queueList[i] = new WaterfulQueue();
    }
  }
  addItems(n) {
    // 正序排序，每次取出最大的元素
    const orderlyData = _.sortBy(n, obj => -obj.height);
    for (let i = 0; i < orderlyData.length; i++) {
      const minIndex = this.getminQueue();
      this.queueList[minIndex].addHeight(orderlyData[i].height);
    }
  }
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
}

const data = [
  { id: 1, color: '#333333', height: 120 },
  { id: 2, color: '#233232', height: 10 },
  { id: 3, color: '#111111', height: 60 },
  { id: 4, color: '#212155', height: 20 },
  { id: 5, color: '#389099', height: 10 },
  { id: 6, color: '#888888', height: 1 },
  { id: 7, color: '#888888', height: 100 },
  { id: 6, color: '#888888', height: 50 },
  { id: 6, color: '#888888', height: 40 },
  { id: 6, color: '#888888', height: 100 },
  { id: 6, color: '#888888', height: 10 },
];
const waterfall = new Waterful(4);
waterfall.addItems(data);
console.log(waterfall);

export default Waterful;
