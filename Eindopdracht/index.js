document.getElementById('changer').onchange = function() {
  console.log(this.value);

  document.getElementById('show').innerHTML = '';

  if(this.value == 1){
    document.getElementById('other').innerHTML = '<input placeholder="x" id="rectX" type="text" class="form-control"><input placeholder="y" id="rectY" type="text" class="form-control mt-2">';
  }

  if(this.value == 2){
    document.getElementById('other').innerHTML = '<input placeholder="x" id="cX" type="text" class="form-control"><input placeholder="y" id="cY" type="text" class="form-control mt-2"><input placeholder="radius" id="cR" type="text" class="form-control mt-2">';
  }

  if(this.value == 3){
    document.getElementById('other').innerHTML = '<input placeholder="cX" id="cX" type="text" class="form-control"><input placeholder="cY" id="cY" type="text" class="form-control mt-2"><input placeholder="rX" id="rX" type="text" class="form-control mt-2"><input placeholder="rY" id="rY" type="text" class="form-control mt-2">';
  }

  if(this.value == 4){
    document.getElementById('other').innerHTML = '<input placeholder="x1" id="x1" type="text" class="form-control"><input placeholder="y1" id="y1" type="text" class="form-control mt-2"><input placeholder="x2" id="x2" type="text" class="form-control mt-2"><input placeholder="y2" id="y2" type="text" class="form-control mt-2">';
  }

  if(this.value == 5){
    document.getElementById('other').innerHTML = '<input id="points" type="text" placeholder="100,50 200,20 50 etc." class="form-control">';
  }

  if(this.value == 6){
    document.getElementById('other').innerHTML = '<input id="points" type="text" placeholder="100,50 200,20 50 etc." class="form-control">';
  }

}

document.getElementById('other').onchange = function() {
  var changeValue = document.getElementById('changer').value;

  if(changeValue == 1){
    var rectX = document.getElementById('rectX').value;
    var rectY = document.getElementById('rectY').value;

    if(rectX !== '' && rectY !== ''){
      document.getElementById('show').innerHTML = '<rect width="'+rectX+'" height="'+rectY+'" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />';
    }
  }

  if(changeValue == 2){
    var cX = document.getElementById('cX').value;
    var cY = document.getElementById('cY').value;
    var cR = document.getElementById('cR').value;

    if(rectX !== '' && rectY !== ''){
      document.getElementById('show').innerHTML = '<circle cx="'+cX+'" cy="'+cY+'" r="'+cR+'" stroke="black" stroke-width="3" fill="red" />';
    }
  }

  if(changeValue == 3){
    var cX = document.getElementById('cX').value;
    var cY = document.getElementById('cY').value;
    var rX = document.getElementById('rX').value;
    var rY = document.getElementById('rY').value;

    if(rectX !== '' && rectY !== ''){
      document.getElementById('show').innerHTML = '<ellipse cx="'+cX+'" cy="'+cY+'" rx="'+rX+'" ry="'+rY+'"style="fill:yellow;stroke:purple;stroke-width:2" />';
    }
  }

  if(changeValue == 4){
    var x1 = document.getElementById('x1').value;
    var y1 = document.getElementById('y1').value;
    var x2 = document.getElementById('x2').value;
    var y2 = document.getElementById('y2').value;

    if(rectX !== '' && rectY !== ''){
      document.getElementById('show').innerHTML = '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" style="stroke:rgb(255,0,0);stroke-width:2" />';
    }
  }

  if(changeValue == 5){
    var points = document.getElementById('points').value;

    if(rectX !== '' && rectY !== ''){
      document.getElementById('show').innerHTML = '<polygon points="'+points+'" style="fill:lime;stroke:purple;stroke-width:1" />';
    }
  }

  if(changeValue == 6){
    var points = document.getElementById('points').value;

    if(rectX !== '' && rectY !== ''){
      document.getElementById('show').innerHTML = '<polyline points="'+points+'"style="fill:none;stroke:black;stroke-width:3" />';
    }
  }
}
