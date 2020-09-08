
/*animasi ketik*/
const textwrite = function(txtwrite, words, wait = 3000) {
		this.txtwrite = txtwrite;
		this.words = words;
		this.txt = "";
		this.index = 0;
		this.type();
		this.wait = parseInt(wait, 0);
		this.ideleting = false;
	} 
	
	
	textwrite.prototype.type = function() {
		
		const test = this.index % this.words.length;
		const fulltxt = this.words[test];

		if(this.ideleting) {
			this.txt = fulltxt.substring(0, this.txt.length -1);
		}else{
			this.txt = fulltxt.substring(0, this.txt.length +1);
		} 

		this.txtwrite.innerHTML = '<span>'+ this.txt +'<p>|</p></span>';
		
		let setint = 400;
		if(this.ideleting ) {
			setint /= 2;
		} 
		
		
		if(!this.ideleting && this.txt === fulltxt) {
			setint = this.wait;
			
			this.ideleting = true;
			
		}else if( this.ideleting && this.txt === "") {
			this.ideleting = false;
			
			this.index++;
			
			setint = 1000;
		} 
		
		
		setTimeout(() => this.type(), setint);
		
	} 
	
	
	
	document.addEventListener("DOMContentLoaded", init);
	
	function init() {
		const txtwrite = document.querySelector("section.satu h1");
		const words = JSON.parse(txtwrite.getAttribute("data-words"));
		const wait = txtwrite.getAttribute("data-wait");
		
		
		new textwrite(txtwrite, words, wait );
		
		const txtwrite2 = document.querySelector("#dear");
		const words2 = JSON.parse(txtwrite2.getAttribute("data-words"));
		const wait2 = txtwrite2.getAttribute("data-wait");
		
		new textwrite(txtwrite2, words2, wait2);
	} 

//hujan
const div = document.querySelector("section.dua");
let count = 30;
let o = 0;
while( o < count) {
	const i = document.createElement("i");
	let left = Math.floor(Math.random() * window.innerWidth );
	let duration = Math.random() + 0.15;
	let h = Math.random() * 100;
	
	i.style.left = left + "px";
	i.style.width = "2px";
	i.style.height = h + "px";
	i.style.animationDuration = duration + "s";
	
	
	div.appendChild(i);
	o++;
	
} 


const jumbo = document.querySelector("section.satu");
let i = 0;

while( i < 50) {
	const el = document.createElement("div");
	el.className = "bintang";
	const width = Math.floor(Math.random() * innerWidth);
	const height = Math.floor(Math.random() * innerHeight);
	const size = Math.random() * 2;
	const duration = Math.random() * 10;
	
	
	el.style.left = width +"px";
	el.style.top = height +"px";
	el.style.width = 5+size +"px";
	el.style.height = 5+size +"px";
	el.style.animationDuration = 5+duration+"s";
	el.style.animationDelay = duration+"s";
	
	jumbo.appendChild(el);
	i++;
} 


const huruf = document.getElementById("text");
const kata = huruf.getElementsByTagName("span");

var bp = 0;

function rotator() {
	kata[bp].style.display = "none";
	bp = ( bp + 1 ) % kata.length;
	kata[bp].style.display = "initial";
} 

setInterval(rotator, 1000);

const deg = 6;
const mn = document.querySelector("#mn");
const hr = document.querySelector("#hr");
const sc = document.querySelector("#sc");

setInterval(() => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;
	hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
	mn.style.transform = `rotateZ(${mm}deg)`;
	sc.style.transform = `rotateZ(${ss}deg)`;
});




const forputri = document.querySelector("#forputri");
const ptombol = document.querySelector("#ptombol");

const boxputri = document.querySelector("#boxputri");

ptombol.addEventListener("click", function(e) {
	e.preventDefault();
	
	var kamu = forputri.value;
	if(kamu === "sayangkuputrinadia" ) {
		boxputri.style.display = "block";
		
	}else{
		alert("Kode Yang kamu Masukan Salahh");
	
	} 
	forputri.value = "";
});