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

let StatePlayStop=false;

var currentTime = Reproductor.currentTime;
var duration = Reproductor.duration;

let ButtonPlayStop = document.getElementById("Play");
let NuteSound = document.getElementById("Nute");
let ButtonPrev = document.getElementById("Prev");
let ButtonNext = document.getElementById("Next");
let LabelVolume = document.getElementById("VolumenLabel");
var Volume = document.getElementById("Volumen");

let SelectMusics= document.getElementById("SelectMusic");
