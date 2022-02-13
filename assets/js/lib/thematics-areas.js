document.addEventListener('DOMContentLoaded',function() {
    const thumbnails = new Splide('#thumbnail-slider',{
        gap: 2,
        rewind: true,
        pagination: false,
        isNavigation: true,
        focus: 'left',

    })

    const multimediasplide = new Splide('.splide__multimedia',{
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: false,
        heightRatio: 0.5625,
        cover: true,
        video: {
            loop: true,
        },
    })

    multimediasplide.sync(thumbnails)
    multimediasplide.mount(window.splide.Extensions)
    thumbnails.mount()
});