// ======== MENU SHOW Y HIDDEN ===========
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// ===== MENU SHOW ======
//  Validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// ===== MENU HIDDEN ======
//  Validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ========== ACCORDION SKILLS ===================
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

// =========== QUALIFICATION TABS ==================
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


//====== SERVICES MODAL =========
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button')
modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

//====== PORTFOLIO SWIPER ==========
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    mousewheel: true,
    keyboard: true
});

//====== TESTIMONIAL SWIPER ==========
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
});


// ============ SCROLL SECTIONS ACTIVE LINK ====================
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ========== SHOW SCROLL TOP (box shadow to nav )==========
function scrollHeader() {
    const nav = document.getElementById('header')
    //when the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ===============    SHOW SCROLL UP (scroll up button show)================
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

// ==================== DARK LIGHT THEME ==============
// localStorage.clear()
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//We validate if the user previously choose a topic
if (selectedTheme) {
    console.log("SELECTED ICON LAST ::" + selectedIcon)
    // If the validation is fulfilled ,  we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



// =========== Code for change HUE COLOR ================
const colorPicker = document.getElementById('color-picker')
const colorPickerBg = document.getElementById('color-picker-bg')

//get previously saved color hsl first value
const selectedColorHue = localStorage.getItem('selected-color-hue')
const selectedColorSaturation = localStorage.getItem('selected-color-saturation')
const selectedColorLightness = localStorage.getItem('selected-color-lightness')

const selectedBgColorHue = localStorage.getItem('selected-bg-color-hue')

//if color hue value exists color change or default color
if (selectedColorHue) {
    document.documentElement.style.setProperty('--hue-color', selectedColorHue);
    // console.log(selectedColorHue)
    // console.log(selectedColorSaturation)
    // console.log(selectedColorLightness)
    hexValue = calcHslToRgbAndHex(selectedColorHue,selectedColorSaturation,selectedColorLightness).hex
    colorPicker.value = '#'+hexValue.toUpperCase()
}
//if bg color hue value exists or default bg color
if(selectedBgColorHue){
    document.documentElement.style.setProperty('--body-hue-color', selectedBgColorHue);
}

function setThemeColor(color) {
    document.documentElement.style.setProperty('--hue-color', color.h);
    // save the selected color to local storage
    // EVIDE HUE vum  , pinne HEX value colorPicker nteyum maatram save cheythaal mathi pakse Pinneedu vere idangalil upayogikkaan 
    // ulla roopathilaanu ithu ingane kodukkunnadhe   hsl to rgb , hsl to rgb then to hex , rgb to hsl and hex
    localStorage.setItem('selected-color-hue', color.h);
    localStorage.setItem('selected-color-saturation', color.s + '%');
    localStorage.setItem('selected-color-lightness', color.l + '%');
    console.log("Color value H :" + color.h + "   S :" + color.s + "   L :" + color.l + " saved to local storage")
    //console.log(calcHslToRgbAndHex(color.h, color.s, color.l))
    //console.log(calcRgbToHslAndHex(87,224,96))
}
function setBgColorHue(color){
    document.documentElement.style.setProperty('--body-hue-color', color.h);
}

// colorPicker.addEventListener('input', getColor)
// function getColor() {
//     console.log(colorPicker.value)
//     let color = HexToHSL(colorPicker.value)
//     console.log('hsl(' + color.h + ', ' + color.s + '%, ' + color.l + '%)')
//     setThemeColor(color)
// }
        //or
colorPicker.addEventListener('input', (e) => getColor(e.target))
function getColor(input) {
    // console.log(input.value)
    let color = HexToHSL(input.value)
    // console.log('hsl(' + color.h + ', ' + color.s + '%, ' + color.l + '%)')
    setThemeColor(color)
}

colorPickerBg.addEventListener('input' , (e) => getBgColor(e.target))
function getBgColor(input) {
    let color = HexToHSL(input.value)
    setBgColorHue(color)
}

//====== convert # hex value to hsl
function HexToHSL(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);

    return { h, s, l };
}

function HexToRGB(hex){
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    return { r , g , b };
}
// console.log(HexToRGB('#2fc3ff')) //  #2fc3ff -> rgb(47, 195, 255)

// HSL to RGB
function calcHslToRgbAndHex(h, s, l) {
    if (h == "") h = 0;
    if (s == "") s = 0;
    if (l == "") l = 0;
    h = parseFloat(h);
    s = parseFloat(s);
    l = parseFloat(l);
    if (h < 0) h = 0;
    if (s < 0) s = 0;
    if (l < 0) l = 0;
    if (h >= 360) h = 359;
    if (s > 100) s = 100;
    if (l > 100) l = 100;
    s /= 100;
    l /= 100;
    C = (1 - Math.abs(2 * l - 1)) * s;
    hh = h / 60;
    X = C * (1 - Math.abs(hh % 2 - 1));
    r = g = b = 0;
    if (hh >= 0 && hh < 1) {
        r = C;
        g = X;
    }
    else if (hh >= 1 && hh < 2) {
        r = X;
        g = C;
    }
    else if (hh >= 2 && hh < 3) {
        g = C;
        b = X;
    }
    else if (hh >= 3 && hh < 4) {
        g = X;
        b = C;
    }
    else if (hh >= 4 && hh < 5) {
        r = X;
        b = C;
    }
    else {
        r = C;
        b = X;
    }
    m = l - C / 2;
    r += m;
    g += m;
    b += m;
    r *= 255.0;
    g *= 255.0;
    b *= 255.0;
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);
    hex = r * 65536 + g * 256 + b;
    hex = hex.toString(16, 6);
    len = hex.length;
    if (len < 6)
        for (i = 0; i < 6 - len; i++)
            hex = '0' + hex;

    // console.log("HSL color: hsl(" + h + "," + s + "," + l + ")")
    // console.log("HEX VALUE of color: #" + hex)
    // console.log("RGB VALUE of color: rgb(" + r + "," + g + "," + b + ")")
    return { r , g , b , hex };
}

function calcRgbToHslAndHex(r, g, b) {
    if (r == "") r = 0;
    if (g == "") g = 0;
    if (b == "") b = 0;
    r = parseFloat(r);
    g = parseFloat(g);
    b = parseFloat(b);
    if (r < 0) r = 0;
    if (g < 0) g = 0;
    if (b < 0) b = 0;
    if (r > 255) r = 255;
    if (g > 255) g = 255;
    if (b > 255) b = 255;
    hex = r * 65536 + g * 256 + b;
    hex = hex.toString(16, 6);
    len = hex.length;
    if (len < 6)
        for (i = 0; i < 6 - len; i++)
            hex = '0' + hex;
    r /= 255;
    g /= 255;
    b /= 255;
    M = Math.max(r, g, b);
    m = Math.min(r, g, b);
    d = M - m;
    if (d == 0) h = 0;
    else if (M == r) h = ((g - b) / d) % 6;
    else if (M == g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
    l = (M + m) / 2;
    if (d == 0)
        s = 0;
    else
        s = d / (1 - Math.abs(2 * l - 1));
    s *= 100;
    l *= 100;

    // console.log("RGB color: rgb(" + r + "," + g + "," + b + ")")
    // console.log("HSL VALUE of color: hsl(" + h + "," + s + "," + l + ")")
    // console.log("HEX VALUE of color: #" + hex)
   return { h , s , l , hex };
}