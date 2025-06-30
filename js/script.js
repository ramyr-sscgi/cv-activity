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

addEventListener("DOMContentLoaded", checkReplace);
