const btn_lila = document.querySelector('.btn_1_theme');
const btn_grey = document.querySelector('.btn_2_theme');
const btn_peach = document.querySelector('.btn_3_theme');
const body = document.body;
const image_header = document.querySelector('#theMan');
const img_global = document.querySelector('.img_global');
const security_man0 = document.querySelector('.security_man0')
const security_man = document.querySelector('.security_man')
const icon_logo = document.querySelector('#icon_logo');
const icon_burger = document.querySelector('.icon_burger');
const icon_logo2 = document.querySelector('.icon_logo2');
const btn_burger = document.querySelector('.btn_burger');
const display_navBar = document.querySelector('.display_navBar')
const scrisul = document.querySelectorAll('.scrisul');
const btn_dsp_minus = document.querySelector('.btn_dsp_minus')
const btn_minus = document.querySelector('.btn_minus')
const templ_canva = document.querySelectorAll('.templ_canva')

const slider1 = document.querySelector('.slider');
const btn_left = document.getElementById('slider_btn_left')
const btn_right = document.getElementById('slider_btn_right');



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
    image_header.src="illustrations/THE2.svg";
    img_global.src = 'illustrations/black2.svg';
    security_man0.src ='illustrations/gr_2.svg'
    security_man.src ='illustrations/gr_22.svg'
    icon_logo.src = 'icons/logo2.svg';
    icon_logo2.src = 'icons/logo2.svg';
    icon_burger.src = 'icons/burger_menu2.svg';
    btn_minus.src = 'icons/minus-bl.png';
    scrisul.forEach(scris => scris.style.color = '#4e86f7b5')

    const images = ['1.avif', '2.avif','3.avif','4.avif','5.avif','6.avif'];
    let sliderNr = 0;

    slider1.style.backgroundImage = `url(images/blue/1.avif)`
    btn_left.addEventListener('click', ()=>{
        if(sliderNr < images.length -1){
            sliderNr++;
        } else {
            sliderNr = 0;
        }
        slider1.style.backgroundImage = `url(images/blue/${images[sliderNr]})`;
    })
    btn_right.addEventListener('click', ()=>{
        if(sliderNr > 0){
            sliderNr--;
        } else {
            sliderNr = images.length-1
        }
        slider1.style.backgroundImage = `url(images/blue/${images[sliderNr]})`;
    })

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
    image_header.src="illustrations/THE1.svg"
    img_global.src = 'illustrations/black.svg';
    security_man0.src ='illustrations/gr_1.svg'
    security_man.src ='illustrations/gr_11.svg'
    icon_logo.src = 'icons/logo.svg';
    icon_logo2.src = 'icons/logo.svg';
    btn_minus.src = 'icons/minus_g.png';
    icon_burger.src = 'icons/burger_menu.svg';
    scrisul.forEach(scris => scris.style.color = 'black')
    const images = ['1.avif', '2.avif','3.avif','4.avif','5.avif','6.avif'];
    let sliderNr = 0;

    slider1.style.backgroundImage = `url(images/grey/1.avif)`
    btn_left.addEventListener('click', ()=>{
        if(sliderNr < images.length -1){
            sliderNr++;
        } else {
            sliderNr = 0;
        }
        slider1.style.backgroundImage = `url(images/grey/${images[sliderNr]})`;
    })
    btn_right.addEventListener('click', ()=>{
        if(sliderNr > 0){
            sliderNr--;
        } else {
            sliderNr = images.length-1
        }
        slider1.style.backgroundImage = `url(images/grey/${images[sliderNr]})`;
    })

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
    image_header.src="illustrations/THE3.svg"
    img_global.src = 'illustrations/black3.svg';
    security_man0.src ='illustrations/gr_3.svg'
    security_man.src ='illustrations/gr_33.svg'
    icon_logo.src = 'icons/logo3.svg';
    icon_logo2.src = 'icons/logo3.svg';
    icon_burger.src = 'icons/burger_menu3.svg';
    btn_minus.src = 'icons/minus-b.png';
    scrisul.forEach(scris => scris.style.color = 'black')

    const images = ['1.avif', '2.avif','3.avif','4.avif','5.avif','6.avif'];
    let sliderNr = 0;

    slider1.style.backgroundImage = `url(images/1.avif)`
    btn_left.addEventListener('click', ()=>{
        if(sliderNr < images.length -1){
            sliderNr++;
        } else {
            sliderNr = 0;
        }
        slider1.style.backgroundImage = `url(images/${images[sliderNr]})`;
    })
    btn_right.addEventListener('click', ()=>{
        if(sliderNr > 0){
            sliderNr--;
        } else {
            sliderNr = images.length-1
        }
        slider1.style.backgroundImage = `url(images/${images[sliderNr]})`;
    })
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


const images = ['1.avif', '2.avif','3.avif','4.avif','5.avif','6.avif'];
let sliderNr = 0;

slider1.style.backgroundImage = `url(images/grey/1.avif)`
btn_left.addEventListener('click', ()=>{
    if(sliderNr < images.length -1){
        sliderNr++;
    } else {
        sliderNr = 0;
    }
    slider1.style.backgroundImage = `url(images/grey/${images[sliderNr]})`;
})
btn_right.addEventListener('click', ()=>{
    if(sliderNr > 0){
        sliderNr--;
    } else {
        sliderNr = images.length-1
    }
    slider1.style.backgroundImage = `url(images/grey/${images[sliderNr]})`;
})




templ_canva.forEach((element) => {
    element.addEventListener('click', () => {
        window.open("https://www.canva.com/templates/", "_blank");
    });
});


//register

const registerForm = document.getElementById('register_form');
const send_btn = document.querySelector('.send_btn');
const register_error = document.getElementById('register_error');
const register_success = document.getElementById('register_succed');

send_btn.addEventListener('click', (e) => {
    e.preventDefault();
    let name = registerForm.name.value;
    let email = registerForm.email.value;
    let phone = registerForm.phone.value;
    let password = registerForm.password.value;

    if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {
        showErrors(register_error, "Name is invalid");
        return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        showErrors(register_error, 'Enter a valid email');
        return;
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/.test(password)) {
        showErrors(register_error, 'Password is invalid');
        return;
    }

    if (!/^\+373\d{8}$/.test(phone)) {
        showErrors(register_error, 'Enter a valid MD phone number');
        return;
    }

    showSuccess("Registration succesful!")

    setTimeout(() => {
        window.location.reload();
    }, 2000);
});

function showErrors(el, message) {
    el.style.display = 'block';
    el.innerHTML = `<span>${message}</span>`;
}

function showSuccess(message) {
    register_error.style.display = 'none';
    register_success.style.display = 'block';
    register_success.innerHTML = `<span>${message}</span>`;
}
