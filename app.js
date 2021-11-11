import { Chance } from "chance";
import * as fs from "fs";
let chance = new Chance();
const path = "student.txt";

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

/*check if file student.txt exists or not
if file exists - delete it */

//TODO fix async await
try {
  let exists = fs.existsSync(path);
  if (!exists) {
    //write string to file student.txt
    fs.writeFile(path, obj, (err) => {
      if (err) throw err;
      console.log(`The file ${path} has been saved!`);
    });
    //read string from file student.txt
    fs.readFile(path, (err, data) => {
      if (err) throw err;
      let obj = JSON.parse(data);
      obj.name = "jonh";
      obj.surname = "doe";
      obj.course = 3;
      console.log(JSON.stringify(obj));
    });
    fs.appendFile(path, obj, (err) => {
      if (err) throw err;
      console.log(`new string has been added to ${path}`);
    });
  } else {
    console.log(`the file ${path} is already exists`);
    fs.readFile(path, (err, data) => {
      if (data.length === 0) {
        //TO DO
        /* add some solution if file is exists but it is empty*/
        console.log("need write data");
      } else if (data.length != 0) {
        console.log(`this file ${path} is not empty`);
        fs.unlink(path, (err) => {
          if (err) throw err;
          console.log(`file ${path} has been deleted`);
        });
      } else throw err;
    });
  }
} catch (error) {
  console.log(error);
}
