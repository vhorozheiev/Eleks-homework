import { Chance } from "chance";
import * as fs from "fs/promises";
//instance of chance
let chance = new Chance();

//create object with some properties
let student = {
  name: chance.first({
    nationality: "en",
  }),
  surname: chance.last({
    nationality: "en",
  }),
  rate: Math.round(Math.random() * 100) + 1,
};

//save string from object
let obj = JSON.stringify(student);
//write this string to file.txt
fs.writeFile("student.txt", obj, (err) => {
  if (err) throw err;
  console.log("the file has been saved");
});
