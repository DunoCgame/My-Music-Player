	
function ClearCanvas(){
		
	Toca_discos.width=Toca_discos.width;
	ctx.clearRect(0, 0, Toca_discos.width, Toca_discos.height);

}	

function Fondo(){
	ctx.save();
	ctx.fillStyle = "#994d00";
	ctx.fillRect(0,0,Toca_discos.width,Toca_discos.height);
	ctx.restore();	
	
	ctx.save();
	ctx.fillStyle = "#663300";
	ctx.fillRect(10,5,Toca_discos.width-20,Toca_discos.height-20);
	ctx.restore();
}

function Disco(){
	
	Rote+=1;

	// Create gradient
	var grd = ctx.createRadialGradient(75,50,5,90,60,100);
	grd.addColorStop(1, "black");
	grd.addColorStop(0, "white");

	/**disco principal**/
	ctx.save();
	ctx.translate(Toca_discos.width/2,70);
	ctx.rotate(Rote * Math.PI / 180);
	ctx.beginPath();
	ctx.fillStyle = grd;
	ctx.arc(0, 0, 60, 0, 2 * Math.PI);
	ctx.fill();

	/**disco interno**/
	ctx.beginPath();
	ctx.fillStyle = "green";
	ctx.arc(0, 0, 20, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle = "grey";
	ctx.arc(0, 0, 2, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();

	ctx.restore();

	
	
}
// setInterval(function(){
function Braso(){
	
 if(State_Animation==true){
	
	if(Frame!=7){
			Frame+=1;
	}
	
 }
 else{
	 
	 if(Frame==7){
			Frame-=1;
	}
	 
 }
	
	switch(Frame){
		
		case 1:
			
			ctx.save();
			ctx.translate(280,67);
			ctx.rotate(45 * Math.PI / 180);
			ctx.fillStyle = "grey";
			ctx.fillRect(0, 0, 4, 60);

			ctx.fillStyle = "blue";
			ctx.fillRect(-1,0,6,8);

			ctx.restore();
		break;
				
		case 2:

			ctx.save();
			ctx.translate(268,58);
			ctx.rotate(30 * Math.PI / 180);
			ctx.fillStyle = "grey";
			ctx.fillRect(0, 0, 4, 60);

			ctx.fillStyle = "blue";
			ctx.fillRect(-1,0,6,8);
			ctx.restore();		
		break;
		
		case 3:

				ctx.save();
				ctx.translate(255,53);
				ctx.rotate(15 * Math.PI / 180);
				ctx.fillStyle = "grey";
				ctx.fillRect(0, 0, 4, 60);
					
				ctx.fillStyle = "blue";
				ctx.fillRect(-1,0,6,8);
				ctx.restore();
		break;
		
		case 4:
		

			ctx.save();
			ctx.translate(241,52);
			ctx.rotate(1 * Math.PI / 180);
			ctx.fillStyle = "grey";
			ctx.fillRect(0, 0, 4, 60);
			ctx.fillStyle = "blue";
			ctx.fillRect(-1,0,6,8);
			
			ctx.restore();
		break;
		
		case 5:

			ctx.save();
			ctx.translate(225,54);
			ctx.rotate(-16 * Math.PI / 180);
			ctx.fillStyle = "grey";
			ctx.fillRect(0, 0, 4, 60);
			ctx.fillStyle = "blue";
			ctx.fillRect(-1,0,6,8);
			ctx.restore();
		
		break;	



	case 6:

			ctx.save();
			ctx.translate(212,60);
			ctx.rotate(-30* Math.PI / 180);
			ctx.fillStyle = "grey";
			ctx.fillRect(0, 0, 4, 60);

			ctx.fillStyle = "blue";
			ctx.fillRect(-1,0,6,8);
			ctx.restore();
		break;	



		case 7:

			ctx.save();
			ctx.translate(200,70);
			ctx.rotate(-45 * Math.PI / 180);
			ctx.fillStyle ="grey";
			ctx.fillRect(0, 0, 4, 60);

			ctx.fillStyle = "blue";
			ctx.fillRect(-1,0,6,8);

			ctx.restore();
		
		
		break;
			default:
				console.log("error");
		
		
		
		
	}
	
			ctx.save();
			ctx.translate(240,110);
			ctx.beginPath();
			ctx.fillStyle = "grey";
			ctx.arc(0, 0, 4, 0, 2 * Math.PI);
			ctx.fill();
			ctx.stroke();
			ctx.restore();
	
	
	
	
}


function Main(){
	
	
	 ClearCanvas();
	 Fondo();
	 Disco();
	 Braso();
	 
	 if(State_Animation==true){
	  // Action = requestAnimationFrame(Main);
	  PlayAnimation();
	 }
}
Main();

