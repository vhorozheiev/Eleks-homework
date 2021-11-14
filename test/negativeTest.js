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
  describe("incorrect input data", function () {
    it("write second number like a string - '2' + 2 = 4", function () {
      expect(calculator(2, "2", "+")).to.be.equal(4);
    });
  });

  describe("incorrect input data", function () {
    it("enter just a one number", function () {
      expect(() => calculator("2", "+")).to.throw();
    });
  });
  //division by zero
  describe("division by 0", function () {
    it("write second number - 0 in division operation", function () {
      expect(() => calculator(10, 0, "/")).to.throw();
    });
  });
});
