var slider_images = tns({
  container: '.app__screens',
  items: 1,
  slideBy: 'page',
  mode: "carousel",
  nav: false,
  speed: 200,
  controls: false,
  loop: true,
});

var slider_text = tns({
  container: '.text__slider',
  items: 1,
  slideBy: 'page',
  mode: "carousel",
  nav: false,
  speed: 200,
  controls: false,
  loop: true,
});

document.getElementById('arrow_left').addEventListener("click", function() {
  slider_images.goTo('next');
  slider_text.goTo('next');
});

document.getElementById('arrow_input').addEventListener("click", function() {
  if (document.getElementById("mail").value.length == 0) {

  } else {
    document.querySelector(".preorder__text--sent").classList.add("visible");
  }
});


window.onscroll = function() {
  onScroll()
};

window.ondragstart = function() {
  return false;
}


function onScroll() {
  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    document.querySelector(".components__text--lines--base--line").classList.add("componets--animations");
    document.querySelector(".components__text--lines--recorder--line").classList.add("componets--animations");
    setTimeout(function() {
      document.querySelector(".components__text--lines--recorder--paragraph").classList.add("componets--display");
      document.querySelector(".components__text--lines--base--paragraph").classList.add("componets--display");
    }, 600);
  } else {}
}

$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});
