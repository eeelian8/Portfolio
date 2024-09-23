const instagramLogo = document.getElementById("Instagram")
const linkedinLogo = document.getElementById("Linkedin")
const githubLogo = document.getElementById("Github")

function clickRedes(nombre){
    if(nombre == "Instagram"){
        window.open("https://www.instagram.com/eeelian8/", "_blank");
    }else if(nombre == "Github"){
        window.open("https://github.com/eeelian8", "_blank");
    }else{
        window.open("https://www.linkedin.com/in/elian-leguizamon-72651a213/", "_blank");
    }
}

instagramLogo.addEventListener("click", ()=>{clickRedes("Instagram")})
githubLogo.addEventListener("click", ()=>{clickRedes("Github")})
linkedinLogo.addEventListener("click", ()=>{clickRedes("Linkedin")})

const buttonEnviar = document.getElementById("btnAceptar")
buttonEnviar.addEventListener("click", ()=>{alert("Enviado correctamente")})