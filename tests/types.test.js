const chai = require('chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;

describe('Cases from app.js', () => {
  describe('apples', () => {
    const apples = cases.apples;
    it('should be an array', () => {
      expect(apples).to.be.an('array'); 
    });
    it('should have length of 4', () => {
      expect(apples.length).to.be.equal(4);
    });
    it("should contain 'Red Delicious'", () => {
      expect(apples.includes('Red Delicious')).to.be.true;
    });
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    it('should have prop favBand equal to `Beastie Boys`', () => {
      const favBand = cases.Ben.favBand;
      assert.typeOf(favBand, 'string');
      expect(favBand).to.equal(
        'Beastie Boys',
        'Bens favorite band is the Beastie Boys'
      );
    });
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    it('should have prop favFood equal to `Pizza`', () => {
      const favFood = cases.Sean.favFood;
      assert.typeOf(favFood, 'string');
      expect(favFood).to.equal('Pizza', "Sean's favorite food is Pizza");
    });
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    it('should have prop favBook not equal to `Harry Potter`', () => {
      const favBook = cases.Ryan.favBook;
      assert.typeOf(favBook, 'string');
      expect(favBook).to.not.equal(
        'Harry Porrter',
        "Ryan's favorite book is not Harry Potter"
      );
    });
  });

  describe('Austen', () => {
    const Austen = cases.Austen;
    it('should be an object', () => {
      expect(Austen).to.be.an('object');
    });
    it("Austen's favorite color should not equal 'Gold'", () => {
      expect(Austen.favColor).not.to.be.equal('Gold');
    });
  });

  describe('Ivan', () => {
    it('should be an object', () => {
      const Ivan = cases.Ivan;
      expect(Ivan).to.be.an('object');
    });
    if('should have prop favActivity equal to `Rock Climbing`');
    const favActivity = cases.Ivan.favActivity;
    assert.typeOf(favActivity, 'string');
    expect(favActivity).to.equal(
      'Rock Climbing',
      "Ivan's favorite activity is Rock Climbing"
    );
  });
});
