ButtonPlayStop.addEventListener("click", Play);
ButtonPrev.addEventListener("click", Prev);
ButtonNext.addEventListener("click", Next);
NuteSound.addEventListener("click", Nute);
SelectMusics.addEventListener("click", Select_Music);

Volume.addEventListener("change",function(e){	
	
					Reproductor.volume =  e.currentTarget.value;
					// LabelVolume.innerHTML = e.currentTarget.value*100+"%";
					
					if((e.currentTarget.value*100)>=50){
						
						LabelVolume.className="icon-volume-high";
					}
					if((e.currentTarget.value*100)==50){
						
						LabelVolume.className="icon-volume-medium";
					}
					if((e.currentTarget.value*100)<50){
						
						LabelVolume.className="icon-volume-medium";
					}
					if((e.currentTarget.value*100)==0){
						
						LabelVolume.className="icon-volume-mute2";
					}
					
					
	
			},true);

Reproductor.addEventListener("timeupdate", function(){

		currentTime = Reproductor.currentTime;
		duration = Reproductor.duration;

		document.getElementById("time-progress").innerHTML= timeToMinute(currentTime) +" | "+timeToMinute(duration);

	});

function Play(){
				
		if(!StatePlayStop){
					Reproductor.pause();
					StopAnimation();					
					StatePlayStop=true;		
					ButtonPlayStop.classList.remove("icon-pause2");
					ButtonPlayStop.classList.add("icon-play3");
			
				
				}else{					
				Reproductor.play();
				PlayAnimation();							
				StatePlayStop=false;
				ButtonPlayStop.classList.remove("icon-play3");
				ButtonPlayStop.classList.add("icon-pause2");
				
				}
		
		
	
	}
	
function Pause(){
		Reproductor.pause();
						StopAnimation();
		
	}


let PosLast = 0;
let PosNow = 0;

PosNow = Pos_in_list;


	
function Prev(){
	
	
		if(Pos_in_list!=0){
		
			Pos_in_list-=1;
			Reproductor.src = obtenido[Pos_in_list];
			document.getElementById("time-progress").innerHTML = timeToMinute(Reproductor.currentTime) +" | "+timeToMinute(Reproductor.duration);
			document.getElementById("TitleMusic").innerHTML =  window.path().parse(obtenido[Pos_in_list]).name; 
			
			
					Reproductor.pause();
				StopAnimation();	
				StatePlayStop=true;			
				ButtonPlayStop.classList.remove("icon-pause2");
				ButtonPlayStop.classList.add("icon-play3");

				Reproductor.play();
				PlayAnimation();
							
				StatePlayStop=false;				
				ButtonPlayStop.classList.remove("icon-play3");
				ButtonPlayStop.classList.add("icon-pause2");
			
			 	PosLast = PosNow;
				PosNow = Pos_in_list;
				
					
								   
			document.getElementsByClassName("List-Item")[PosLast].classList.remove("active-music");
			document.getElementsByClassName("List-Item")[PosNow].classList.add("active-music");	
			 
				


		}
	}


	
function Next(){
	

		 if(Pos_in_list<obtenido.length-1){
			
			Pos_in_list+=1;

			Reproductor.src = obtenido[Pos_in_list];
			document.getElementById("time-progress").innerHTML = timeToMinute(Reproductor.currentTime) +" | "+timeToMinute(Reproductor.duration);
			document.getElementById("TitleMusic").innerHTML =  window.path().parse(obtenido[Pos_in_list]).name; 
		
		
				Reproductor.pause();
				StopAnimation();	
				StatePlayStop=true;			
				ButtonPlayStop.classList.remove("icon-pause2");
				ButtonPlayStop.classList.add("icon-play3");

				Reproductor.play();
				PlayAnimation();
							
				StatePlayStop=false;				
				ButtonPlayStop.classList.remove("icon-play3");
				ButtonPlayStop.classList.add("icon-pause2");

			
			 
			 
			 	PosLast = PosNow;
				PosNow = Pos_in_list;
				
					
								   
			document.getElementsByClassName("List-Item")[PosLast].classList.remove("active-music");
			document.getElementsByClassName("List-Item")[PosNow].classList.add("active-music");	
			 
					
					
			}
	
	
	
	}
	
function Nute(){
		
		if(!Nute_music){
			
			Nute_music=true;
			Reproductor.muted=Nute_music;
			
			NuteSound.classList.remove("icon-volume-high");
			NuteSound.classList.add("icon-volume-mute");
			
		}
		else{
			
			
			Nute_music=false;
			Reproductor.muted=Nute_music;
			
			
			NuteSound.classList.remove("icon-volume-mute");
			NuteSound.classList.add("icon-volume-high");
	
			}		
	}
	
function timeToMinute(times){
    var result = '00:00:00';
    var hour,minute,second
    if (times > 0) {
      hour = Math.floor(times / 3600);
      if (hour < 10) {
        hour = "0"+hour;
      }
      minute = Math.floor((times - 3600 * hour) / 60);
      if (minute < 10) {
        minute = "0"+minute;
      }
 
      second = Math.floor((times - 3600 * hour - 60 * minute) % 60);
      if (second < 10) {
        second = "0"+second;
      }
      if (hour == '00') {
	      result = minute+':'+second;
      } else if (minute == '00'){
    	  result = hour+':'+minute+':'+second;
      } else {
    	  result = second;
      }
    }
    // console.log("result",result);
    return result;  
  
}

function PlayAnimation(){
		Action = requestAnimationFrame(Main);
		State_Animation=true;
		
	}

function StopAnimation(){
		cancelAnimationFrame(Action);
		State_Animation=false;
		

	}

function Open_Foulder_Music(){
	
var  options = {
		title:'Select Foulder The Music',
		filters:[
				 {
				  name:'Music', 
				  extensions:[
							'WAV',
							'AIFF',
							'AU',
							'FLAC',
							'MPEG-4',
							'Shorten',
							'TTA',
							'ATRAC',
							'Apple Lossless',
							'MP3',
							'Vorbis',
							'AAC',
							'WMA',
							'Opus',
							'OGG',
							'DSD',
							'MQA'
							]
						}
					],	
		properties:['openFile', 'openDirectory', 'multiSelections','showHiddenFiles','promptToCreate']		
	}
	
const response = window.dialog().showOpenDialog(null,options).then(result => {
	
					SearchMusic(result.filePaths);
					
				})
				.catch(err => {
					// console.log(err)
				});
		


  
  
	
}

function Select_Music(){
	  
var  options = {
		title:'Select Music',
		filters:[
				 {
				  name:'Music', 
				  extensions:[
							'WAV',
							'AIFF',
							'AU',
							'FLAC',
							'MPEG-4',
							'Shorten',
							'TTA',
							'ATRAC',
							'Apple Lossless',
							'MP3',
							'Vorbis',
							'AAC',
							'WMA',
							'Opus',
							'OGG',
							'DSD',
							'MQA'
							]
						}
					],	
		buttonLabel:'Select',
		properties:['openFile', 'multiSelections','showHiddenFiles','promptToCreate']		
	}
	
const response = window.dialog().showOpenDialog(null,options).then(result => {

				CreatePlayList(result.filePaths);			  
				
				obtenido = result.filePaths;
				
				// console.log(obtenido);
				
				})
				.catch(err => {
					console.log(err)
				});
}

function CreatePlayList(data){
	
	Reset_Containner("List-Music");
	
	obtenido = [];
	obtenido = data;
	
	let ItemMusic;
	
	data.forEach((file, index) => {					

		ItemMusic = document.createElement("div");
		ItemMusic.className="List-Item";
		ItemMusic.addEventListener("click", function(){ 
					
			Reproductor.src = file;
			document.getElementById("time-progress").innerHTML = timeToMinute(Reproductor.currentTime) +" | "+timeToMinute(Reproductor.duration);
			document.getElementById("TitleMusic").innerHTML =  window.path().parse(file).name; 

			Pos_in_list = index;
				
				PosNow = Pos_in_list;
				
				
				Reproductor.pause();
				StopAnimation();	
				StatePlayStop=true;			
				ButtonPlayStop.classList.remove("icon-pause2");
				ButtonPlayStop.classList.add("icon-play3");

				Reproductor.play();
				PlayAnimation();
							
				StatePlayStop=false;				
				ButtonPlayStop.classList.remove("icon-play3");
				ButtonPlayStop.classList.add("icon-pause2");
			
			
			
			
	
		});
		
	let ListMusic = document.getElementById("List-Music");
		ListMusic.appendChild(ItemMusic);


/*****************/	
	let Ico = document.createElement("span");
		Ico.class="PlayListText";
		Ico.id="IcoPlayListText";
		Ico.innerHTML=index+".";
		Ico.style.color="white";
		Ico.style.fontSize="16px";
		
	let Containner1 = document.getElementsByClassName("List-Item")[index]
		Containner1.appendChild(Ico);
/*****************/		
	let NameMusic = document.createElement("label");
		NameMusic.class="PlayListText";
		let NameRedut = window.path().parse(file).name.substring(0,28);
		NameMusic.innerHTML = NameRedut;
		NameMusic.style.color="white";
		NameMusic.style.fontSize="16px";
	let Containner2 = document.getElementsByClassName("List-Item")[index]
		Containner2.appendChild(NameMusic);
/*****************/	

					 });
					 
			ReproducirPrimero(ItemMusic);		 
			
			ItemActive();

}

function Reset_Containner(id){

	var cell2 = document.getElementById(id);
			if (cell2.hasChildNodes()){
					while (cell2.childNodes.length >= 1){
					cell2.removeChild( cell2.firstChild );
							}//while
				}					

	}

function ReproducirPrimero(obj){

		Reproductor.src = obtenido[0];
		console.log(obtenido[0]);
		document.getElementById("time-progress").innerHTML = timeToMinute(Reproductor.currentTime) +" | "+timeToMinute(Reproductor.duration);
		document.getElementById("TitleMusic").innerHTML =  window.path().parse(obtenido[0]).name; 

		Reproductor.play();
		PlayAnimation();

		StatePlayStop=false;

		document.getElementsByClassName("List-Item")[0].classList.add("active-music");
		ButtonPlayStop.classList.remove("icon-play3");
		ButtonPlayStop.classList.add("icon-pause2");

	
}

function ItemActive(){	
	var item = document.getElementsByClassName("List-Item");			
	for(var i = 0; i < item.length; i++){
		  item[i].addEventListener("click", function(){
				var current = document.getElementsByClassName("active-music");
				current[0].className = current[0].className.replace("active-music", "");
				this.className += " active-music";
		  });
	}
}

	 












//Code not uses	 
		// selectAnterior=index;
			 
			// for(let a=0; a<ItemMusic.length; a++){
				
				// ItemMusic.classList.remove("active-music");
							
			// }
			
			// ItemMusic.classList.add("active-music");







// var initial_url = 'http://www.mymainsite.com/path/path/needthispath/somepath';
// var url = initial_url
						// .split('\')
						// .join('/');

// console.log(url);

// var str = "Visit Microsoft!";
// var res = str.replace("Microsoft", "W3Schools");

// console.log(res);

// document.getElementById("B").addEventListener("click", function(){
	// // console.log("play");
// PlayAnimation();

// });
// document.getElementById("A").addEventListener("click", function(){
	// // console.log("pause");
	// StopAnimation();

// });


// document.getElementById("A").addEventListener("click", function(){
	// console.log("pause");
	// State_Animation=false;
	// document.getElementById("label").innerHTML=State_Animation;


// });

// document.getElementById("B").addEventListener("click", function(){
	// console.log("play");
	// State_Animation=true;
	// document.getElementById("label").innerHTML=State_Animation;


// });





// },30);






// let rad = 25*Math.PI/180;

	// ctx.rotate(rad);


	
// document.getElementById("duration").innerHTML=Reproductor.currentTime+"|"+Reproductor.duration;
		// document.getElementById("seek").value=Reproductor.currentTime;
			// document.getElementById("seek").innerHTML=Reproductor.duration);
			// document.getElementById("seek").innerHTML=);
		
	
	// function Volumen(ev){
		
	// console.log(VolumeValue.value);
	// console.log(Reproductor.volume);
		
		// Reproductor.volume = ev.currentTarget.value;	
		 // // reproductor.volume = ev.currentTarget.value;	
	// }
	
// myaudio.play(); - This will play the music.
// myaudio.pause(); - This will stop the music.
// myaudio.duration; - Returns the length of the music track.
// myaudio.currentTime = 0; - This will rewind the audio to the beginning.
// myaudio.loop = true; - This will make the audio track loop.
// myaudio.muted = true; - This will mute the track
// myaudio.volume - This will mute the track
// myaudio.auto-reproducción
// myaudio.lazo
// myaudio.precarga
// myaudio.src