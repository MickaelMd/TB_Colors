document.addEventListener("DOMContentLoaded", function () {
  const colorred = document.getElementById("rouge_btn");
  const colorblue = document.getElementById("bleu_btn");
  const colororange = document.getElementById("orange_btn");
  const colorpurple = document.getElementById("violet_btn");
  const colorgreen = document.getElementById("vert_btn");
  const colorbrown = document.getElementById("marron_btn");
  const coloryellow = document.getElementById("jaune_btn");
  const colorpink = document.getElementById("rose_btn");
  const colorblack = document.getElementById("noir_btn");
  const colorgrey = document.getElementById("gris_btn");
  const section = document.getElementById("color_section");

  colorred.addEventListener("click", function () {
    section.classList.add("rouge");
  });
  colorblue.addEventListener("click", function () {
    section.classList.add("bleu");
  });
  colororange.addEventListener("click", function () {
    section.classList.add("orange");
  });
  colorpurple.addEventListener("click", function () {
    section.classList.add("violet");
  });
  colorgreen.addEventListener("click", function () {
    section.classList.add("vert");
  });
  colorbrown.addEventListener("click", function () {
    section.classList.add("marron");
  });
  coloryellow.addEventListener("click", function () {
    section.classList.add("jaune");
  });
  colorpink.addEventListener("click", function () {
    section.classList.add("rose");
  });
  colorblack.addEventListener("click", function () {
    section.classList.add("noir");
  });
  colorgrey.addEventListener("click", function () {
    section.classList.add("gris");
  });
});
