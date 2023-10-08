var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
       delay:3000,
       disableOnInteraction:false
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,  
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });