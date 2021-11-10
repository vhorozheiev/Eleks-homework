import { Chance } from "chance";
import * as fs from 'fs/promises';

let chance = new Chance();
let student = {
    name: chance.first({
        nationality: "en"
    }),
    surname: chance.last({
        nationality: "en"
    }),
    rate: Math.round(Math.random() * 100) + 1
};

let obj = JSON.stringify(student);
console.log(obj);
fs.writeFile("object.txt", obj, (err) => {
    if (err) throw err;
    console.log("the file has been saved");
});
console.log(`name: ${student.name} + surname: ${student.surname} + rate: ${student.rate}`);