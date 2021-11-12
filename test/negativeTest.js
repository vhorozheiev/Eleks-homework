import { calculator } from "../app.js";
import { expect } from "chai";

describe("function call 'calculator'", function () {
  //incorrect data
  describe("incorrect input data", function () {
    it("write incorrect first number like some string", function () {
      expect(() => calculator("asd", 3, "-")).to.throw();
    });
  });

  describe("incorrect input data", function () {
    it("write incorrect second number like some string", function () {
      expect(() => calculator(4, "ada", "-")).to.throw();
    });
  });

  describe("incorrect input data", function () {
    it("write first number like a string - '2' + 2 = 4", function () {
      expect(calculator("2", 2, "+")).to.be.equal(4);
    });
  });
  //division by zero
  describe("division by 0", function () {
    it("write second number - 0 in division operation", function () {
      expect(() => calculator(10, 0, "/")).to.throw();
    });
  });
  //incorrect result

  //addition
  describe("addition operation", function () {
    it("2 + 2 = 4 ", function () {
      expect(calculator(2, 2, "+")).to.be.equal(5);
    });
  });
  //multiply
  describe("multiply operation", function () {
    it("2 * 3 = 6 ", function () {
      expect(calculator(2, 3, "*")).to.be.equal(10);
    });
  });
  //division
  describe("division operation", function () {
    it("10 / 5 = 2 ", function () {
      expect(calculator(10, 5, "/")).to.be.equal(3);
    });
  });
   //subtract
   describe("subtract operation", function () {
    it("8 - 3 = 5 ", function () {
      expect(calculator(8, 3, "-")).to.be.equal(6);
    });
  });
});
