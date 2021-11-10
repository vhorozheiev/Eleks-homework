import { Chance } from "chance";
import * as fs from "fs/promises";

let chance = new Chance();

let student = {
  name: chance.first({
    nationality: "en",
  }),
  surname: chance.last({
    nationality: "en",
  }),
  rate: Math.round(Math.random() * 100) + 1,
};

let obj = JSON.stringify(student);
fs.writeFile("student.txt", obj, (err) => {
  if (err) throw err;
  console.log("the file has been saved");
});
