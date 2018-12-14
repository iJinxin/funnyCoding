import DICTS from './dicts';

const filters = {};

/**
 * 词典查询
 * 根据api字段查询需要显示中文
 * example {{ value | dict('LIVE_STATUS') }}
 */
filters.dict = (value, option) => {
  if (!option || typeof option !== 'string') {
    return value;
  }
  const targetArray = DICTS[option];
  let result = '';
  if (targetArray === undefined || !Array.isArray(targetArray)) {
    // console.error(`${option}未定义或类型错误`);
    return value;
  }
  targetArray.forEach((item) => {
    if (item.id === value) {
      result = item.name;
    }
  });
  return result;
};

const jfFilters = {
  install: (Vue) => {
    Object.keys(filters).forEach((key) => {
      Vue.filter(key, filters[key]);
    });
  },
};

export default jfFilters;
