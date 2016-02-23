
var target = document.getElementsByTagName('body')[0];

for (var i = 0; i < 63; i++){
  var div = document.createElement('div');
  div.style.float = 'left';
  div.style.width = '11.1%';
  div.style.paddingBottom = '11.1%';
  if (i % 2 ===0){
    div.style.backgroundColor = 'black';
  }else {
    div.style.backgroundColor = 'red';
  }
  target.appendChild(div);
}




//if (i % 2===0){
//backgroundColor = "red";
//} else {
document.getElementById('div').style.backgroundColor = "black";
