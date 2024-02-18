function getId(id){
    return document.getElementById(id)
}

all1 = document.querySelectorAll('*');
menu1 = getId('menu1');
mode1 = getId('mode1');
cross1 = getId('cross1');
sidediv = getId('sidediv');

modeStat=1;

svgMenu = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`
svgSun = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
svgMoon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
svgCross = `<svg onclick="exitNav()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`

$('#sidenav').hide();
menu1.innerHTML = svgMenu;
mode1.innerHTML = svgSun;
cross1.innerHTML = svgCross;

getId("form1").addEventListener("submit", event=>{
    event.preventDefault();
    getId('listHold').innerHTML += `${getId('web1').value}<br>`;
    getId('web1').value = '';
});

mode1.addEventListener("click", modeF)

arrClr = ['white1', 'white2', 'dark1', 'dark2', 'dark3', 'dark4'];
arrHex1 = ['fff', 'e3e3e3', '0a0908', 'a7a7a7', '161616', '292929'];
arrHex2 = ['0a0908', '292929', 'fff', 'a7a7a7', 'f1f1f1', 'fafafa'];

function modeF(){
    if (modeStat==1){
        arrHex = arrHex2;
        mode1.innerHTML=svgMoon;
        modeStat=0;
    } else {
        arrHex = arrHex1;
        mode1.innerHTML=svgSun;
        modeStat=1;
    }
    for (i=0; i<all1.length; i++){
        for (j=0; j<arrClr.length; j++){
            all1[i].style.setProperty('--'+arrClr[j], '#'+arrHex[j]);
        }
    }
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

exitNav()