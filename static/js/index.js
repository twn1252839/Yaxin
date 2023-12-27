const height = window.innerHeight

window.addEventListener('load', adaptation);
window.addEventListener('resize', adaptation);
window.addEventListener('scroll', handleScroll)

document.addEventListener("DOMContentLoaded", function (event) {
  $('form#contact-form').submit(submitForm);
});

function adaptation() {
  let deviceWidth = document.documentElement.clientWidth;
  let scale = deviceWidth / 1920;

  // document.documentElement.style.zoom = scale;
}

function handleScroll() {
  animationHeading1()
  animationHeading2()
  animationHeader()
  animationTitle()
  animationSubtitle()
  animationLine1()
  animationLine2()
}

function animationHeading1() {
  const heading1 = document.querySelectorAll('.heading1')

  heading1.forEach(item => {
    const elTop = item.getBoundingClientRect().top;
    const elVisible = 50

    if (elTop < window.innerHeight - elVisible) {
      item.style.opacity = 1
      item.style.transform = 'scaleY(1)'
    } else {
      item.style.opacity = 0;
      item.style.transform = "scaleY(3.5)";
    }
  })
}

function animationHeading2() {
  const heading2 = document.querySelectorAll('.heading2')

  heading2.forEach(item => {
    const elTop = item.getBoundingClientRect().top;
    const elVisible = 50

    if (elTop < window.innerHeight - elVisible) {
      item.style.opacity = 1
      item.style.transform = 'scaleY(1)'
    } else {
      item.style.opacity = 0;
      item.style.transform = "scaleY(3.5)";
    }
  })
}

function animationHeader() {
  const headerLeft = document.querySelectorAll('.header-left')
  const headerRight = document.querySelectorAll('.header-right')

  headerLeft.forEach(item => {
    const elTop = item.getBoundingClientRect().top;
    const elVisible = 50

    // if(elTop < window.innerHeight - elVisible) {
    //   item.style.opacity = 1
    //   item.style.transform = 'translateX(0%)'
    // } else {
    //   item.style.opacity = 0;
    //   item.style.transform = "translateX(-2rem)";
    // }
  })

  headerRight.forEach(item => {
    const elTop = item.getBoundingClientRect().top;
    const elVisible = 50

    // if(elTop < window.innerHeight - elVisible) {
    //   item.style.opacity = 1
    //   item.style.transform = 'translateX(0%)'
    // } else {
    //   item.style.opacity = 0;
    //   item.style.transform = "translateX(2rem)";
    // }
  })
}

function animationTitle() {
  const title = document.querySelectorAll('.title')

  title.forEach(item => {
    const elTop = item.getBoundingClientRect().top;
    const elVisible = 50

    if (elTop < window.innerHeight - elVisible) {
      item.style.opacity = 1
      item.style.transform = 'translateY(0%)'
    } else {
      item.style.opacity = 0;
      item.style.transform = "translateY(-2rem)";
    }
  })
}

function animationSubtitle() {

}

function animationLine1() {
  const line1 = document.querySelectorAll('.line1')

  line1.forEach(item => {
    const elTop = item.getBoundingClientRect().top;
    const elVisible = 50

    if (elTop < window.innerHeight - elVisible) {
      item.style.opacity = 1
      item.style.transform = 'translateY(0%)'
    } else {
      item.style.opacity = 0;
      item.style.transform = "translateY(1rem)";
    }
  })
}

function animationLine2() {
  const line2 = document.querySelectorAll('.line2')

  line2.forEach(item => {
    const elTop = item.getBoundingClientRect().top;
    const elVisible = 50

    if (elTop < window.innerHeight - elVisible) {
      item.style.opacity = 1
      item.style.transform = 'translateY(0%)'
    } else {
      item.style.opacity = 0;
      item.style.transform = "translateY(1rem)";
    }
  })
}

function submitForm(event) {
  event.preventDefault();
  $('form#contact-form button').attr('disabled', true);
  $.ajax('https://script.google.com/macros/s/AKfycbw4otTolnOIaXTolbsl9WgAE-eH_xlIP19tlhWqQw7BPxKRkIs1O5qW20b88TZSC3-S/exec', {
    dataType: 'json',
    data: {
      project: 'yeashinyizhi',
      data: $('form#contact-form').serializeArray()
    },
  }).done(result => {
    if (result.success) {
      alert('送出成功，感謝您的填寫。');
      $('form#contact-form').trigger('reset');
    } else {
      alert('送出失敗，請稍後再試。若問題持續發生請聯繫客服。');
    }
  }).fail(result => {
    alert('送出失敗，請稍後再試。若問題持續發生請聯繫客服。');
  }).always(() => {
    $('form#contact-form button').attr('disabled', false);
  })
}
