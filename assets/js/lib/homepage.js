document.addEventListener('DOMContentLoaded',function() {
    const splideKeyPublications=new Splide('.splide-key-publications',{
    type: 'loop',
    perPage: 3,
    perMove: 1,
    rewind: true,
  })
  splideKeyPublications&&splideKeyPublications.mount()
  tippy('.sdg-one', {
    content: "<h3>1.3</h3> End hunger and ensure access to safe, nutritious and sufficient food<p> Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substantial coverage of the poor and the vulnerable. </p> <h3>1.a</h3> <p> Ensure significant mobilization of resources from a variety of sources, including through enhanced development cooperation, in order to provide adequate and predictable means for developing countries, in particular least developed countries, to implement programmes and policies to end poverty in all its dimensions.</p>",
    allowHTML: true,
    animation: 'scale',
    theme: 'bspffa',
  })
  tippy('.sdg-three', {
    content: "<h3>3.8</h3> End hunger and ensure access to safe, nutritious and sufficient food<p> Achieve universal health coverage, including financial risk protection, access to quality essential health-care services and access to safe, effective, quality and affordable essential medicines and vaccines for all. </p>",
    allowHTML: true,
    animation: 'scale',
    theme: 'bspffa',
  })
  tippy('.sdg-two', {
    content: "<h3>2.1</h3><p>End hunger and ensure access to safe, nutritious and sufficient food</p>",
    allowHTML: true,
    animation: 'scale',
    theme: 'bspffa',
  })
  tippy('.sdg-five', {
    content: "<h3>5.4</h3><p>Recognize and value unpaid care and domestic work through the provision of public services, infrastructure and social protection policies, and the promotion of shared responsibility within the household and the family as nationally appropriate</p>",
    allowHTML: true,
    animation: 'scale',
    theme: 'bspffa',
  })
  tippy('.sdg-eight', {
    content: "<h3>8.5</h3><p>Achieve full and productive employment and decent work for all women and men, including for young people and persons with disabilities, and equal pay for work of equal value</p>",
    allowHTML: true,
    animation: 'scale',
    theme: 'bspffa',
  })
  tippy('.sdg-ten', {
    content: "<h3>10.4</h3><p>Adopt policies, especially fiscal, wage, and social protection policies, and progressively achieve greater equality</p>",
    allowHTML: true,
    animation: 'scale',
    theme: 'bspffa',
  })
  tippy('.sdg-thirteen', {
    content: "<h3>13.3</h3> <p>Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning</p>",
    allowHTML: true,
    animation: 'scale',
    theme: 'bspffa',
  })
  tippy('.sdg-sixteen', {
    content: "<h3>16.6</h3> <p>Develop effective, accountable and transparent institutions at all levels</p>",
    allowHTML: true,
    animation: 'scale',
    theme: 'bspffa',
  })
})

