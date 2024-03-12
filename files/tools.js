function getId(id){
    return document.getElementById(id)
}

cssRoot = document.querySelector(':root');
menu1 = getId('menu1');
mode1 = getId('mode1');
cross1 = getId('cross1');
sidediv = getId('sidediv');

svgMenu = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`
svgSun = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
svgMoon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
svgCross = `<svg onclick="exitNav()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
svgCross2 = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`

$('#sidenav').hide();
menu1.innerHTML = svgMenu;
mode1.innerHTML = svgSun;
cross1.innerHTML = svgCross;

modeStat = localStorage.getItem("modeStat");

if(modeStat == null || modeStat == undefined){
    localStorage.setItem("modeStat", 1);
    modeStat = 1;
}

mode1.addEventListener("click", modeF)

arrClr = ['transP1', 'white1', 'white2', 'dark1', 'dark2', 'dark3', 'dark4'];
arrHex1 = ['ededed30', 'f8f9fa', 'e9ecef', '212529', 'a7a7a7', '343a40', '495057'];
arrHex2 = ['3d3d3d30', '212529', '343a40', 'f8f9fa', 'a7a7a7', 'e9ecef', 'dee2e6'];

function modeF(){
    if (modeStat==1){
        arrHex = arrHex2;
        mode1.innerHTML=svgMoon;
        localStorage.setItem("modeStat", 0);
        modeStat=0;
    } else {
        arrHex = arrHex1;
        mode1.innerHTML=svgSun;
        localStorage.setItem("modeStat", 1);
        modeStat=1;
    }
    for (j=0; j<arrClr.length; j++){
        cssRoot.style.setProperty('--'+arrClr[j], '#'+arrHex[j]);
    }
}

function modeCh(){
    cssRoot.style.setProperty('--sec1', '0s');
    if (modeStat==1){
        arrHex = arrHex1;
        mode1.innerHTML=svgSun;
    } else {
        arrHex = arrHex2;
        mode1.innerHTML=svgMoon;
    }
    for (j=0; j<arrClr.length; j++){
        cssRoot.style.setProperty('--'+arrClr[j], '#'+arrHex[j]);
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