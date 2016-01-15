const assert = require('assert');

const holidayCn = require('..').default;


describe('ilunar', function() {
  describe('#solar2Lunar()', function () {
    it('debug: chinese holiday list', function () {

      assert.equal(holidayCn(new Date('2018-01-01'))[0], '元旦');
      assert.equal(holidayCn(new Date('2018-02-15'))[0], '除夕');
      assert.equal(holidayCn(new Date('2018-02-16'))[0], '春节');
      assert.equal(holidayCn(new Date('2018-03-02'))[0], '元宵');
      assert.equal(holidayCn(new Date('2018-03-08'))[0], '妇女');
      assert.equal(holidayCn(new Date('2018-04-05'))[0], '清明');
      assert.equal(holidayCn(new Date('2018-05-01'))[0], '劳动');
      assert.equal(holidayCn(new Date('2018-05-04'))[0], '青年');
      assert.equal(holidayCn(new Date('2018-06-01'))[0], '儿童');
      assert.equal(holidayCn(new Date('2018-06-18'))[0], '端午');
      assert.equal(holidayCn(new Date('2018-08-01'))[0], '建军');
      assert.equal(holidayCn(new Date('2018-09-10'))[0], '教师');
      assert.equal(holidayCn(new Date('2018-09-24'))[0], '中秋');
      assert.equal(holidayCn(new Date('2018-10-01'))[0], '国庆');
      assert.equal(holidayCn(new Date('2018-10-17'))[0], '重阳');
      assert.equal(holidayCn(new Date('2015-08-20'))[0], '七夕');
      assert.equal(holidayCn(new Date('2018-11-11')).length, 0);
      assert.equal(holidayCn(new Date('2018-12-25'))[0], '圣诞');
      assert.equal(holidayCn(new Date('2016-02-07'))[0], '除夕');

    });

  });
});

