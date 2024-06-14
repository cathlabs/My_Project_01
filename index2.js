const btn_lila = document.querySelector('.btn_1_theme');
const btn_grey = document.querySelector('.btn_2_theme');
const btn_peach = document.querySelector('.btn_3_theme');
const body = document.querySelector('body')
const img_global = document.querySelector('.img_global');
const icon_logo_pg2 = document.querySelector('#icon_logo_pg2');
const icon_burger = document.querySelector('.icon_burger');
const icon_logo2 = document.querySelector('.icon_logo2');
const btn_burger = document.querySelector('.btn_burger');
const display_navBar = document.querySelector('.display_navBar')
const scrisul = document.querySelectorAll('.scrisul');
const btn_dsp_minus = document.querySelector('.btn_dsp_minus')
const btn_minus = document.querySelector('.btn_minus')
//btn



btn_lila.addEventListener('click', () => {
    document.documentElement.style.setProperty('--container-bg-color', '#4e86f7b5');
    document.documentElement.style.setProperty('--container-demo', '#7a41e39e');
    document.documentElement.style.setProperty('--schrift', 'white');
    document.documentElement.style.setProperty('--color_header', '#955EF8');
    body.style.background = 'linear-gradient(rgba(255, 255, 255, 0.769), rgba(255, 255, 255, 0.689)), url("https://images.unsplash.com/photo-1656998019079-a7f9182c12be?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundAttachment = 'fixed'
    body.style.backgroundPosition= 'center';
    body.style.height= '100vh';
    icon_logo_pg2.src = 'icon2/logo2.svg';
    icon_logo2.src = 'icon2/logo2.svg';
    icon_burger.src = 'icon2/burger_menu2.svg';
    btn_minus.src = 'icon2/minus-bl.png';
    scrisul.forEach(scris => scris.style.color = '#4e86f7b5') 

});

btn_grey.addEventListener('click', () => {
    document.documentElement.style.setProperty('--container-bg-color', 'rgba(188, 188, 188, 0.704)');
    document.documentElement.style.setProperty('--container-demo', '#FFB11A');
    document.documentElement.style.setProperty('--schrift', 'black');
    document.documentElement.style.setProperty('--color_header', 'black');
    body.style.background = 'linear-gradient(rgba(255, 255, 255, 0.769),rgba(255, 255, 255, 0.689)), url("https://images.unsplash.com/photo-1634207284450-f6ad4451b94f?q=80&w=3580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundAttachment = 'fixed'
    body.style.backgroundPosition= 'center';
    body.style.height= '100vh';
    icon_logo_pg2.src = 'icon2/logo.svg';
    icon_logo2.src = 'icon2/logo.svg';
    btn_minus.src = 'icon2/minus_g.png';
    icon_burger.src = 'icon2/burger_menu.svg';
    scrisul.forEach(scris => scris.style.color = 'black')
});

btn_peach.addEventListener('click', () => {
    document.documentElement.style.setProperty('--container-bg-color', '#fbe7e7c9');
    document.documentElement.style.setProperty('--container-demo', '#dfddf0ca');
    document.documentElement.style.setProperty('--schrift', 'black');
    document.documentElement.style.setProperty('--color_header', 'black');
    body.style.background = 'linear-gradient(rgba(255, 255, 255, 0.769),rgba(255, 255, 255, 0.689)), url("https://images.unsplash.com/photo-1618004912476-29818d81ae2e?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundAttachment = 'fixed'
    body.style.backgroundPosition= 'center';
    body.style.height= '100vh';
    icon_logo_pg2.src = 'icon2/logo3.svg';
    icon_logo2.src = 'icon2/logo3.svg';
    icon_burger.src = 'icon2/burger_menu3.svg';
    btn_minus.src = 'icon2/minus-b.png';
    scrisul.forEach(scris => scris.style.color = 'black')
});

btn_burger.addEventListener('click', ()=> {
    display_navBar.style.display='block';
    display_navBar.style.justifyContent= "center";
    btn_burger.style.display = 'none';
    btn_dsp_minus.style.display = 'block';
    body.addEventListener('keydown', (e)=>{
        if(e.key === "Escape"){
            display_navBar.style.display = 'none';
            btn_burger.style.display = 'block';
            btn_dsp_minus.style.display = 'none';
        }
    })
})

btn_dsp_minus.addEventListener('click', () => {
    display_navBar.style.display = 'none';
    btn_burger.style.display = 'block';
    btn_dsp_minus.style.display = 'none';
});
