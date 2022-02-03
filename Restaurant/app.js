const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');
let curSlide = 0;
const maxSlide = slides.length;

//Sliding Functions
slides.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
  s.style.backgroundImage = `url(images/pic${i + 1}.jpg)`;
})

const goToSlide = function(slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - curSlide)}%)`
  })
}
goToSlide(0);

//Next Slide
const nextSlide = function() {
  if (curSlide === maxSlide - 1) {
  curSlide = 0;
 } else {
  curSlide++
 }

goToSlide(curSlide);
};

//Previous Slide
const prevSlide = function() {
  if(curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
  curSlide--;
  }
  goToSlide(curSlide);
}

//Event Listeners
btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', prevSlide);





function initMap() {
  let options = {
    zoom: 8,
    //This is where the map will be centered
    center: {lat: 42.3601, lng: -71.0589}
  }
  let map = new google.maps.Map(document.getElementById('map'), options);

  //Add Marker Function
  function addMarker(props) {
    let marker = new google.maps.Marker({
      // This is where the marker will be placed
      position: props.coords,
      map: map
    });
  }

  addMarker({coords: {lat: 42.3601, lng: -71.0589}});
}

