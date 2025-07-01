const checkReplace = document.querySelector(".replace-me");

setTimeout(() => {
  if (checkReplace !== null) {
    const replace = new ReplaceMe(checkReplace, {
      animation: "animated fadeIn",
      speed: 1500,
      separator: ",",
      loopCount: "infinite",
      autoRun: true,
    });
  }
}, 3000);

const heroSectionEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(heroSectionEl);