// botao abrir
let btnMenu = document.getElementById ('btn-menu')
let menu = document.getElementById("menu-mobile");

// adicionou um evento na variavel, evento click
btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});