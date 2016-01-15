import Lunar from 'ilunar';

const solar2Lunar = Lunar.solar2Lunar;

const SOLAR_HOLIDAYS = {
  '0101': '元旦',
  '0214': '情人',
  '0308': '妇女',
  '0312': '植树',
  '0401': '愚人',
  '0501': '劳动',
  '0504': '青年',
  '0601': '儿童',
  '0701': '建党',
  '0801': '建军',
  '0910': '教师',
  '1001': '国庆',
  '1225': '圣诞',
};

const LUNAR_HOLIDAYS = {
  '0101': '春节',
  '0115': '元宵',
  '0505': '端午',
  '0707': '七夕',
  '0815': '中秋',
  '0909': '重阳',
  '1208': '腊八',
};

const _format = num => num >= 0 && num < 10 ? '0' + num : '' + num;

/**
 * `清明节`的具体日期并不明确，阳历日期的规律：
    - 2010 & 2011年是4月5日，2012 & 2013年是4月4日，2014 & 2015年又回到4月5日；
    - ['4-5','4-5','4-4','4-4','4-5','4-5','4-4','4-4','4-5' ... ]。
 */
const _qingming = date => {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();

  if (m !== 4 || (d !== 4 && d !== 5)) { return false; }

  return (((y - 2000)/2 )%2 ? 5 : 4) === d;
};

/**
 * `除夕`的判断，`春节`的前一天。
 */
const _chuxi = date => {
  const nextDate = new Date(date);
  nextDate.setDate(date.getDate() + 1);
  const lDate = solar2Lunar(nextDate).lunar;
  return '0101' === (_format(lDate.month) + _format(lDate.date));
};

const holidayCn = (date, solar=true, lunar=true) => {
  let ret = [];
  if (lunar) {
    const lDate = solar2Lunar(date).lunar;
    const l = LUNAR_HOLIDAYS[_format(lDate.month) + _format(lDate.date)];
    if (l) {
      ret.push(l);
    }
    if (_qingming(date)) {
      ret.push('清明');
    }
    if (_chuxi(date)) {
      ret.push('除夕');
    }
  }
  if (solar) {
    const s = SOLAR_HOLIDAYS[_format(date.getMonth() + 1) + _format(date.getDate())];
    if (s) {
      ret.push(s);
    }
  }
  return ret;
};

export default holidayCn;
