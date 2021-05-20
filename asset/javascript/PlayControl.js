// https://www.programmerclick.com/article/6786138472/

const Reproductor = document.getElementById("reproductor");
const Toca_discos = document.getElementById("Tocadiscos");
const ctx = Toca_discos.getContext("2d");

let Rote = 0;
let Frame = 1;
let State_Animation=false;
let Nute_music = false;

const Music_Select = [];
var Action;	

var Numimg=0;

let Pos_in_list = 0;
var obtenido = [];

let ButtonPlayStop = document.getElementById("Play");
ButtonPlayStop.addEventListener("click", Play);

document.getElementById("Prev").addEventListener("click", Prev);
document.getElementById("Next").addEventListener("click", Next);

let NuteSound = document.getElementById("Nute")
	NuteSound.addEventListener("click", Nute);

let LabelVolume = document.getElementById("VolumenLabel");

var Volume = document.getElementById("Volumen").addEventListener("change",function(e){	
	
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
						
// window.onload=function(){

	// LabelVolume.innerHTML = 50+"%";
	
	// document.getElementById("time-progress").innerHTML = "00:00:00" +" | "+"00:00:00";

// }
		 
Reproductor.addEventListener("timeupdate", function(){

		var currentTime = Reproductor.currentTime;
		var duration = Reproductor.duration;

		document.getElementById("time-progress").innerHTML= timeToMinute(currentTime) +" | "+timeToMinute(duration);

	});


let StatePlayStop=false;

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
	
	function Prev(){
		if(Pos_in_list!=0){
		
			Pos_in_list-=1;
			Reproductor.src = obtenido[Pos_in_list];
			document.getElementById("time-progress").innerHTML = " -- | -- ";
			document.getElementById("time-progress").innerHTML = timeToMinute(Reproductor.currentTime) +" | "+timeToMinute(Reproductor.duration);
			document.getElementById("TitleMusic").innerHTML =  window.path().parse(obtenido[Pos_in_list]).name; 
			Pause();
			Play();
		
		}
	}

	function Next(){
		
		if(Pos_in_list<obtenido.length){
			
			Pos_in_list+=1;
			Reproductor.src = obtenido[Pos_in_list];
			document.getElementById("time-progress").innerHTML = " -- | -- ";
			document.getElementById("time-progress").innerHTML = timeToMinute(Reproductor.currentTime) +" | "+timeToMinute(Reproductor.duration);
			document.getElementById("TitleMusic").innerHTML =  window.path().parse(obtenido[Pos_in_list]).name; 
			Pause();
			Play();
		
			
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


document.getElementById("SelectMusic").addEventListener("click", function(){


Select_Music();
	
});


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
			 
			 // console.log(result.canceled) //si se cansela 
			  // console.log(result.filePaths) // url
			  
				// console.log(result)

				CreatePlayList(result.filePaths);			  
				
				obtenido = result.filePaths;
				
				})
				.catch(err => {
					console.log(err)
				});
		


  
  
	
}

var selectAnterior = 0;

function CreatePlayList(data){
	
	
	Reset_Containner("List-Music");
	
	
	obtenido = [];
	obtenido = data;
	
	
	data.forEach((file, index) => {					


	let ItemMusic = document.createElement("div");
		ItemMusic.className="List-Item";
		ItemMusic.addEventListener("click", function(){ 
					
		Reproductor.src = file;
		document.getElementById("time-progress").innerHTML = " -- | -- ";
		document.getElementById("time-progress").innerHTML = timeToMinute(Reproductor.currentTime) +" | "+timeToMinute(Reproductor.duration);
		document.getElementById("TitleMusic").innerHTML =  window.path().parse(file).name; 
		Pause();
		Play();

	         // selectAnterior=index;
			 
			// for(let a=0; a<ItemMusic.length; a++){
				
				// ItemMusic.classList.remove("active-music");
				
				
			// }
			  
			
			
			// ItemMusic.classList.add("active-music");
			  
		Pos_in_list = index;

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
	// let TimeMusic = document.createElement("span");
		// TimeMusic.class="PlayListText";
		// TimeMusic.innerHTML=timeToMinute(Reproductor.duration);
		// TimeMusic.style.color="white";
		// TimeMusic.style.fontSize="16px";
	// let Containner3 = document.getElementsByClassName("List-Item")[index]
		// Containner3.appendChild(TimeMusic);
				
				// console.log(Reproductor.duration);
				
					 });

}

function Reset_Containner(id){

	var cell2 = document.getElementById(id);
			if (cell2.hasChildNodes()){
					while (cell2.childNodes.length >= 1){
					cell2.removeChild( cell2.firstChild );
							}//while
				}					

	}














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