// ---------------------------------mobile menu-----------------------------------------------
(() => {
    const refs = {
        openMenuBtn: document.querySelector('[data-menu-open]'),
        closeMenuBtn: document.querySelector('[data-menu-close]'),
        menu: document.querySelector('[data-menu]'),
        linkOrder: document.querySelector("[data-link-order]"),
        linkAbout: document.querySelector("[data-link-about]"),
        linkResults: document.querySelector("[data-link-results]"),
    };
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    refs.linkOrder.addEventListener('click', closeMenuOnClick);
    refs.linkAbout.addEventListener('click', closeMenuOnClick);
    refs.linkResults.addEventListener('click', closeMenuOnClick);
  
    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
        document.body.classList.toggle('no-scroll');
    }
    function closeMenuOnClick() {
        refs.menu.classList.add('is-hidden');
        document.body.classList.remove('no-scroll');
    }
})();

// ---------------------------------timer-------------------------------------
const timerElement = document.querySelector('.timer');

if (timerElement) {
  let timeInSeconds = 2 * 60 * 60;

  function updateTimer() {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timeInSeconds--;
    if (timeInSeconds < 0) {
      clearInterval(timerInterval);
      timerElement.textContent = 'Час минув!';
    }
  }

  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
}

// --------------------------------tel mask-------------------------------------------
const telInput = document.getElementById('user-phone');
const countryCode = '+38(0'

const subscribeOnEvents = (input, code) => {
  input.addEventListener('focus', (event) => {
    const isNoValue = !event.target.value;
    if (isNoValue) event.target.value = code;
  });

  input.addEventListener('blur', (event) => {
    if (event.target.value === code) event.target.value = '';
  });

  input.addEventListener('input', (event) => {
    const valueLength = event.target.value.length;
    const countryCodeModified = valueLength < code.length;
    if(countryCodeModified) event.target.value = code;
  });

  input.addEventListener('input', (event) => {
    let x = event.target.value.replace(/\D/g, '')
      .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);

    event.target.value = `${code}${x[2]}`
      + ( x[3] ? `)${x[3]}` : '' )
      + ( x[4] ? `-${x[4]}` : '' )
      + ( x[5] ? `-${x[5]}` : '' );
  });
}
subscribeOnEvents(telInput, countryCode);

// --------------------------------data--------------------------------------------------

function zero_first_format(value){
        if (value < 10){
            value='0'+value;
        }
        return value;
    }
    function date_time(){
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();

        return day+"."+month+"."+year;
    }
document.querySelector('.form-data').innerHTML = date_time();

// -------------------------------smooth scroll------------------------------------------------
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// -------------------------------scroll to top------------------------------------------------
const scrollBtn = document.querySelector('.scroll-top-btn');

window.onscroll = () => {
    if (window.scrollY > 700) {
        scrollBtn.classList.remove('show-btn_hide');
    } else if (window.scrollY < 700) {
        scrollBtn.classList.add('show-btn_hide');
    }
}

scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}