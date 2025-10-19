let data = [];

function create_timmer() {
    
  const container = document.querySelector(".table");
  const div = document.createElement("div");
  const setTime = document.createElement("p");
  setTime.textContent = "Time Left:";
  setTime.style.backgroundColor = "#34344A";
  div.appendChild(setTime);

  const h3 = document.createElement("h3");
  h3.style.backgroundColor = "#34344A";
  const hours = Number(document.querySelector("#hours").value);
  const minutes = Number(document.querySelector("#minutes").value);
  const seconds = Number(document.querySelector("#seconds").value);
if(hours>0 || minutes>0 || seconds>0){
  let timerObj = { hours, minutes, seconds };
  data.push(timerObj);

  if (data.length > 0) {
    let para = document.querySelector(".text");
    para.style.display = "none";
  }

  div.appendChild(h3);

  const button = document.createElement("button");
  button.textContent = "Delete";

  div.appendChild(button);
  container.appendChild(div);

  div.classList.add("set_time1");
  button.classList.add("set_button1");
    
  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

 

   const audio = new Audio("./sound.mp3");
      audio.loop = true;

      
  let intervalId = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(intervalId);
      h3.textContent = "Timer Is Up !";
      div.style.backgroundColor = "yellow";
      setTime.style.display= "none";
      h3.style.backgroundColor = "yellow";
      h3.style.color = "black";
      button.style.backgroundColor = "black";
      button.style.color = "white";
      button.textContent = "Stop";
      div.style.display = "flex";
      div.style.justifyContent = "space-between";
      div.style.alignitems = "center";
      div.style.paddingLeft = "50%";
      div.style.paddingRight = "10%"
    
  
       audio.play();
      return;
    }
    
    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;

    h3.textContent = `${h.toString().padStart(2, "0")} : ${m
      .toString()
      .padStart(2, "0")} : ${s.toString().padStart(2, "0")}`;

    totalSeconds--;
  }, 1000);

  button.addEventListener("click", () => {
    clearInterval(intervalId); 
    container.removeChild(div); 
    audio.pause();             
    audio.currentTime = 0;
   
    data = data.filter((item) => item !== timerObj);

    if (data.length === 0) {
      document.querySelector(".text").style.display = "block";
    }

    console.log("Remaining data:", data);
  });

}


}
