function getId(id){
    return document.getElementById(id)
}

cssRoot = document.querySelector(':root');
menu1 = getId('menu1');
mode1 = getId('mode1');
cross1 = getId('cross1');
sidediv = getId('sidediv');

svgMenu = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`
svgSun = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
svgMoon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
svgCross = `<svg onclick="exitNav()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
svgCross2 = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`

$('#sidenav').hide();
menu1.innerHTML = svgMenu;
mode1.innerHTML = svgSun;
cross1.innerHTML = svgCross;

modeStat = localStorage.getItem("modeStat");

if(modeStat == (undefined || null)){
    localStorage.setItem("modeStat", 1);
    modeStat = 1;
}

mode1.addEventListener("click", modeF)

arrClr = [
    ['transP1', 'ededed30', '3d3d3d30'],
    ['white1', 'f8f9fa', '212529'],
    ['white2', 'e9ecef', '343a40'],
    ['dark1', '212529', 'f8f9fa'],
    ['dark2', 'a7a7a7', 'a7a7a7'],
    ['dark3', '343a40', 'e9ecef'],
    ['dark4', '495057', 'dee2e6'],
    ['blue1', '4169E1', '6495ED'],
    ['blue2', '4169E130'],
    ['green1', '32CD32', '3fd170'],
    ['green2', '32CD3230'],
    ['red1', 'FF4433'],
    ['red2', 'FF443330'],
    ['circle0', '9e9e9e'],
    ['circle1', '00ff00']
];

function modeF(){
    if (modeStat==1){
        n1 = 2;
        mode1.innerHTML=svgMoon;
        localStorage.setItem("modeStat", 0);
        modeStat=0;
    } else {
        n1 = 1;
        mode1.innerHTML=svgSun;
        localStorage.setItem("modeStat", 1);
        modeStat=1;
    }
    for (j=0; j<arrClr.length; j++){
        if (arrClr[j][n1]==(undefined || null)){
            clrCode = arrClr[j][1];
        } else {clrCode = arrClr[j][n1]}
        cssRoot.style.setProperty('--'+arrClr[j][0], '#'+clrCode);
    }
}

function modeCh(){
    cssRoot.style.setProperty('--sec1', '0s');
    if (modeStat==1){
        n1 = 1;
        mode1.innerHTML=svgSun;
    } else {
        n1 = 2;
        mode1.innerHTML=svgMoon;
    }
    for (j=0; j<arrClr.length; j++){
        if (arrClr[j][n1]==(undefined || null)){
            clrCode = arrClr[j][1];
        } else {clrCode = arrClr[j][n1]}
        cssRoot.style.setProperty('--'+arrClr[j][0], '#'+clrCode);
    }
    setTimeout(() => {
        cssRoot.style.setProperty('--sec1', '.6s');
    }, 100);
}

function sidenavF(){
    $('#cross1').show()
    $('#menu1').hide();
    $('#sidenav').show();
    $('#sidediv').fadeIn(100);
    sidediv.style.margin = '0';
}

function exitNav(){
    $('#cross1').hide()
    $('#menu1').show();
    $('#sidenav').fadeOut();
    $('#sidediv').fadeOut();
    sidediv.style.margin = '0 0 0 -100vw';
}

modeCh();