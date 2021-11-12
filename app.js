/* Do in separate branch:
1. Create student object and set ‘name’, ‘surname’ and ‘rate:
- Name and surname generate using randomstring
- Rate generate using Math, in range 1-100
2. Use JSON.stringify() method to make student a JSON string and write it into file (not existed)
3. Read previous string from file and convert to object
4. Make some change to object and append it as new line to existed file */

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
if file exists, but file is empty - write strings to file
if file isn't empty - delete file */

async function writeFile(path, obj) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(path, obj, function (error) {
      if (error) reject(error);
      else {
        console.log(`file ${path} has been wrote`);
        resolve();
      }
    });
  });
}

async function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, function (error, data) {
      if (error) {
        reject(error);
      } else {
        console.log(`file ${path} has been read`);
        resolve(data);
      }
    });
  });
}

async function modifiedFile(data) {
  let obj = JSON.parse(data);
  obj.name = "jonh";
  obj.surname = "doe";
  obj.rate = 100;
  obj.course = 3;
  console.log(`object ${data} has been modified`);
  return JSON.stringify(obj);
}
async function appendFile(path, obj) {
  return new Promise(function (resolve, reject) {
    fs.appendFile(path, obj, function (error) {
      if (error) reject(error);
      else {
        console.log(`new string has been added to ${path}`);
        resolve(obj);
      }
    });
  });
}

async function deleteFile(path) {
  return new Promise(function (resolve, reject) {
    fs.unlink(path, (error) => {
      if (error) reject(error);
      else {
        resolve(console.log(`file ${path} has been deleted`));
      }
    });
  });
}

try {
  if (!fs.existsSync(path)) {
    await writeFile(path, obj);
    let read = await readFile(path);
    let modifiedObject = await modifiedFile(read);
    await appendFile(path, modifiedObject);
  } else {
    console.log(`the file ${path} is already exists`);
    let read = await readFile(path);
    if (read.length == 0) {
      await writeFile(path, obj);
      let read = await readFile(path);
      let modifiedObject = await modifiedFile(read);
      await appendFile(path, modifiedObject);
    } else if (read.length != 0) {
      console.log(`this file ${path} is not empty`);
      await deleteFile(path);
    } else throw error;
  }
} catch (error) {
  console.log(error);
}
