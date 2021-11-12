import { calculator } from "../app.js";
import { expect } from "chai";

describe("function call 'calculator'", function () {
  describe("addition operation", function () {
    it("2 + 2 = 4 ", function () {
      expect(calculator(2, 2, "+")).to.be.equal(4);
    });
  });
  describe("multiply operation", function () {
    it("2 * 3 = 6 ", function () {
      expect(calculator(2, 3, "*")).to.be.equal(6);
    });
  });
  describe("division operation", function () {
    it("10 / 5 = 2 ", function () {
      expect(calculator(10, 5, "/")).to.be.equal(2);
    });
  });
  describe("division by 0", function () {
    it("10 / 0 ", function () {
      expect(calculator(10, 0, "/")).to.be.equal(error);
    });
  });
  describe("subtract operation", function () {
    it("8 - 3 = 5 ", function () {
      expect(calculator(8, 3, "-")).to.be.equal(5);
    });
  });
  describe("incorrect input data", function () {
    it("write string like a firstNum", function () {
      expect(calculator("asd", 3, "-")).to.evantualy.throw(error);
    });
  });
  
});
