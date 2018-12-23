
function putX(id){
	document.querySelector('#'+id).style.backgroundImage="url('X.png')";
	
}


function put0(id){
	document.querySelector('#'+id).style.backgroundImage="url('0.png')";
}


function reset(){
	var i,j;
	selector=0;
	winner=undefined;
	document.getElementById("text-top").style.color='white';
	document.getElementById("text-top").innerHTML='Player<br><br>';
	document.getElementById("text-bottom").textContent=player[selector];
	document.querySelector(".board").style.display='block';

	for(i=0;i<3;i++)
	{
		for(j=0;j<3;j++)
		{
			board[i][j]=undefined;
			document.querySelector('#'+'s'+i+j).style.backgroundImage="url()";
		}
	}
}


function diagcross(){
	
	if((typeof board[0][0]!== 'undefined') &&(typeof board[1][1]!== 'undefined') && (typeof board[2][2]!== 'undefined'))
	{
		if(board[0][0]==='x' && board[1][1]==='x' && board[2][2]==='x')
		{
			winner='X';
			return;
		}
		else if(board[0][0]==='y' && board[1][1]==='y' && board[2][2]==='y')
		{
			winner='O';
			return;
				
		}
	}
	if((typeof board[0][2]!== 'undefined') &&(typeof board[1][1]!== 'undefined') && (typeof board[2][0]!== 'undefined'))
	{
		if(board[0][2]==='x' && board[1][1]==='x' && board[2][0]==='x')
		{

			winner='X';
			return;
			
		}
		else if(board[0][2]==='y' && board[1][1]==='y' && board[2][0]==='y')
		{
			winner='O';
			return;
		}
	}
}

function vertical(){
	if((typeof board[0][0]!== 'undefined') &&(typeof board[1][0]!== 'undefined') && (typeof board[2][0]!== 'undefined'))
	{
		if(board[0][0]==='x' && board[1][0]==='x' && board[2][0]==='x')
		{
			winner='X';
			return;
		}
		else if(board[0][0]==='y' && board[1][0]==='y' && board[2][0]==='y')
		{
			winner='O';
			return;

		}
	}
	if((typeof board[0][1]!== 'undefined') &&(typeof board[1][1]!== 'undefined') && (typeof board[2][1]!== 'undefined'))
	{
		if(board[0][1]==='x' && board[1][1]==='x' && board[2][1]==='x')
		{
			winner='X';
			return;
		}
		else if(board[0][1]==='y' && board[1][1]==='y' && board[2][1]==='y')
		{
			winner='O';
			return;

		}
	}
	if((typeof board[0][2]!== 'undefined') &&(typeof board[1][2]!== 'undefined') && (typeof board[2][2]!== 'undefined'))
	{
		if(board[0][2]==='x' && board[1][2]==='x' && board[2][2]==='x')
		{
			winner='X';
			return;
		}
		else if(board[0][2]==='y' && board[1][2]==='y' && board[2][2]==='y')
		{
			winner='O';
			return;

		}
	}
}


function horizontal(){
	if((typeof board[0][0]!== 'undefined') &&(typeof board[0][1]!== 'undefined') && (typeof board[0][2]!== 'undefined'))
	{
		if(board[0][0]==='x' && board[0][1]==='x' && board[0][2]==='x')
		{
			winner='X';
			return;
		}
		else if(board[0][0]==='y' && board[0][1]==='y' && board[0][2]==='y')
		{
			winner='O';
			return;

		}
	}
	if((typeof board[1][0]!== 'undefined') &&(typeof board[1][1]!== 'undefined') && (typeof board[1][2]!== 'undefined'))
	{
		if(board[1][0]==='x' && board[1][1]==='x' && board[1][2]==='x')
		{
			winner='X';
			return;
		}
		else if(board[1][0]==='y' && board[1][1]==='y' && board[1][2]==='y')
		{
			winner='O';
			return;

		}
	}
	if((typeof board[2][0]!== 'undefined') &&(typeof board[2][1]!== 'undefined') && (typeof board[2][2]!== 'undefined'))
	{
		if(board[2][0]==='x' && board[2][1]==='x' && board[2][2]==='x')
		{
			winner='X';
			return;
		}
		else if(board[2][0]==='y' && board[2][1]==='y' && board[2][2]==='y')
		{
			winner='O';
			return;
		}
	}
}
var board = new Array(3);
for (var i = 0; i < board.length; i++) {
  board[i] = new Array(3);
}

var player,end,selector,winner;
player=['X','O']; 
selector=0;
window.onload=function(){
	
}
function logic(id,i,j){
	if(board[i][j]!==undefined)
	{
		return;
	}
	if(selector===0){
		putX(id);
		board[i][j]='x';
	}
	else if(selector===1){
		put0(id);
		board[i][j]='y';
	}
	selector=(selector+1)%2;
	diagcross();
	vertical();
	horizontal();
	if(winner===undefined){
		document.getElementById("text-top").innerHTML='Player<br><br>';
		document.getElementById("text-bottom").textContent=player[selector];
	}
	else{
		document.getElementById("text-top").style.color='yellow';
		document.getElementById("text-top").innerHTML='Winner!<br><br>';
		document.getElementById("text-bottom").textContent=winner;
		document.querySelector(".board").style.display='none';
		
	}

	
}


var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
var colorIndices = [0,1,2,3];
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
  		 background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);
