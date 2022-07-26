let count = 0;
function changeTheme(){
  if(count == 0){
    document.getElementById('mode').src = "images/light1.png";
  }
  else if (count == 1) {
    document.getElementById('mode').src = "images/dark1.png";
    count = -1;
  }
  count++;
  let htmlElems = document.getElementsByClassName('theme');
  for(let i = 0; i < htmlElems.length; i++){
    if(count == 0){
      htmlElems[i].style.color = "#030f04";
      htmlElems[i].style.backgroundColor = "lightgrey";
    }
    else if (count == 1){
      htmlElems[i].style.color = "grey";
      htmlElems[i].style.backgroundColor = "#030f04";
    }
  }
  let x = document.getElementsByClassName('services');
  for(let i = 0; i < x.length; i++){
    if(count == 0){
      x[i].style.border = "thin solid #030f04";
    }
    else if (count == 1){
      x[i].style.border = "thin solid grey";
    }
  }
  let y = document.getElementsByClassName('form');
  for(let i = 0; i < y.length; i++){
    if(count == 0){
      y[i].style.border = "thin solid #030f04";
    }
    else if (count == 1){
      y[i].style.border = "thin solid grey";
    }
  }
}
