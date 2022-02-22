document.addEventListener('DOMContentLoaded',function() {
    const splideKeyPublications=new Splide('.splide-key-publications',{
    type: 'loop',
    perPage: 3,
    perMove: 1,
    rewind: true,
  });
  splideKeyPublications&&splideKeyPublications.mount();
})