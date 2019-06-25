import numeral from "numeral";
import "./index.css";

/* eslint-disable no-console */
// debugger;
const courseValue = numeral(1000).format("$0,0.00");

console.log(`I would pay ${courseValue} dollars for this course!!`);
