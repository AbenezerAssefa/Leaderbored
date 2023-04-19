import './style.css';
import {getData ,postData} from "./modules/get-post";
import Leaderboard from './modules/leaderboard';


const scores = document.querySelector(".scores");//scoreList
const submitBtn = document.querySelector("#submitBtn");
const name = document.querySelector("#name");//nameInput
const score = document.querySelector("#score");//scoreInput
const refreshBtn = document.querySelector("#refreshBtn");


submitBtn.addEventListener("click", (e) => {
      const list = new Leaderboard(name.value, score.value);
      e.preventDefault();
      postData(list);
      scores.innerHTML = "";
      name.value = "";
      score.value = "";
      setTimeout(getData, 500);
  });


  refreshBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    scores.innerHTML = "";
    getData();
  });
  

  window.addEventListener("DOMContentLoaded", getData);

  document.querySelectorAll('input[type="number"]').forEach(input => {
    input.oninput = () =>{
      if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
    }
  });