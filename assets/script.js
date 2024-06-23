const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/*Variables*/
const dots = document.querySelector(".dots");
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const title = document.querySelector("#banner p");
let indexUser = 0;

const displayDots =()=>{
	dots.innerHTML = '' //On vérifie d'abord que la div est vide
	for(let i = 0; i<slides.length;i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if(indexUser===i){
			dot.classList.add("dot_selected")
		}

	}
}

displayDots()

const tabDots = document.querySelectorAll(".dots .dot");

const handleArrowRightClick = ()=>{
	if (tabDots.length > 0){
		tabDots[indexUser].classList.remove("dot_selected") //Si une classe est séléctionnée on la déselectionne
		indexUser++;//On incrémente indexUser
		if(indexUser >= slides.length){
			indexUser=0
		}
		tabDots[indexUser].classList.add("dot_selected")
		bannerImg.src = "./assets/images/slideshow/"+slides[indexUser].image 
		console.log(slides[indexUser].image)
		title.innerHTML = slides[indexUser].tagLine


	}else{
		console.error("erreur pas de slide")
		
	}
}
arrow_right.addEventListener("click",handleArrowRightClick)

const handleArrowLeftClick = ()=>{
	if (tabDots.length > 0){
		tabDots[indexUser].classList.remove("dot_selected") //Si une classe est séléctionnée on la déselectionne
		indexUser--;//On décrémente indexUser
		if(indexUser < 0) {
			indexUser= slides.length - 1 //Si indexUser devient inférieur à 0, on le remet à la dernière diapositive
		}
		tabDots[indexUser].classList.add("dot_selected")
		bannerImg.src = "./assets/images/slideshow/"+slides[indexUser].image 
		console.log(slides[indexUser].image)
		title.innerHTML = slides[indexUser].tagLine


	}else{
		console.error("erreur pas de slide")
		
	}
}
arrow_left.addEventListener("click",handleArrowLeftClick)
