import { calculator } from "../app.js";
import { expect } from "chai";

describe("function call 'calculator'", function () {
  //incorrect data
  describe("incorrect input data", function () {
    it("write incorrect first number like some string", function () {
      expect(() => calculator("asd", 3, "-")).to.throw(Error);
    });
  });
  describe("incorrect input data", function () {
    it("write incorrect second number like some string", function () {
      expect(() => calculator(4, "ada", "-")).to.throw(Error);
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
      expect(() => calculator("2", "+")).to.throw(Error);
    });
  });
  describe("incorrect input data", function () {
    it("enter wrong operation", function () {
      expect(() => calculator(3, 4, "%")).to.throw(Error);
    });
  });
  //expected wrong results
  describe("incorrect input data", function () {
    it("expected wrong result in additional", function () {
      expect(calculator(3, 3, "+")).to.equal(7);
    });
  });
  describe("incorrect input data", function () {
    it("expected wrong result in multiply", function () {
      expect(calculator(3, 3, "*")).to.equal(8);
    });
  });
  describe("incorrect input data", function () {
    it("expected wrong result in division", function () {
      expect(calculator(3, 3, "/")).to.equal(5);
    });
  });
  describe("incorrect input data", function () {
    it("expected wrong result in subtract", function () {
      expect(calculator(3, 3, "-")).to.equal(-1);
    });
  });
  //division by zero
  describe("division by 0", function () {
    it("write second number - 0 in division operation", function () {
      expect(() => calculator(10, 0, "/")).to.throw(Error);
    });
  });
});
