/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#the-excuse").innerHTML = generatorExcuse();
  console.log("Need a buttom for random excuses?");
};

let generatorExcuse = () => {
  let subject = [
    "Trump",
    "The police",
    "Lucía Belén",
    "A bear",
    "The pape",
    "A hobbit"
  ];
  let action = [
    "destroy my",
    "burn my",
    "poo on my",
    "stole my",
    "Throw away my"
  ];
  let possession = ["tv", "cat", "money", "car"];
  let where = [
    "on the street",
    "at the beach",
    "in front of my house",
    "at my village"
  ];
  let surpriseSentence = [
    ", so incredible!",
    ", can you believe it?",
    ", no way!",
    ", what a bad luck!"
  ];

  let subjIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let possIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);
  let surprIndex = Math.floor(Math.random() * surpriseSentence.length);

  return (
    subject[subjIndex] +
    " " +
    action[actIndex] +
    " " +
    possession[possIndex] +
    " " +
    where[whereIndex] +
    " " +
    surpriseSentence[surprIndex]
  );
};
