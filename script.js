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
  const randomcolors = document.getElementById("random_btn");
  const section = document.getElementById("color_section");

  colorred.addEventListener("click", function () {
    section.removeAttribute("class");
    section.classList.add("rouge");
  });
  colorblue.addEventListener("click", function () {
    section.removeAttribute("class");
    section.classList.add("bleu");
  });
  colororange.addEventListener("click", function () {
    section.removeAttribute("class");
    section.classList.add("orange");
  });
  colorpurple.addEventListener("click", function () {
    section.removeAttribute("class");
    section.classList.add("violet");
  });
  colorgreen.addEventListener("click", function () {
    section.removeAttribute("class");
    section.classList.add("vert");
  });
  colorbrown.addEventListener("click", function () {
    section.removeAttribute("class");
    section.classList.add("marron");
  });
  coloryellow.addEventListener("click", function () {
    section.removeAttribute("class");
    section.classList.add("jaune");
  });
  colorpink.addEventListener("click", function () {
    section.removeAttribute("class");
    section.classList.add("rose");
  });
  colorblack.addEventListener("click", function () {
    section.removeAttribute("class");
    section.classList.add("noir");
  });
  colorgrey.addEventListener("click", function () {
    section.removeAttribute("class");
    section.classList.add("gris");
  });

  // ------
  const reset_btn = document.getElementById("reset_btn");
  reset_btn.addEventListener("click", function () {
    section.removeAttribute("class");
    section.removeAttribute("style", "background-color:");
  });

  const select_rouge = document.getElementById("rouge_input");
  const select_vert = document.getElementById("vert_input");
  const select_bleu = document.getElementById("bleu_input");

  let rgb_rouge = 0;
  let rgb_vert = 0;
  let rgb_bleu = 0;

  select_rouge.addEventListener("input", function () {
    rgb_rouge = select_rouge.value;
    section.setAttribute(
      "style",
      "background-color:" +
        " rgba(" +
        rgb_rouge +
        "," +
        rgb_vert +
        "," +
        rgb_bleu +
        ")"
    );

    console.log("rouge value " + select_rouge.value + "variable " + rgb_rouge);
  });

  select_vert.addEventListener("input", function () {
    rgb_vert = select_vert.value;
    section.setAttribute(
      "style",
      "background-color:" +
        " rgba(" +
        rgb_rouge +
        "," +
        rgb_vert +
        "," +
        rgb_bleu +
        ")"
    );
    console.log("vert value " + select_vert.value);
  });

  select_bleu.addEventListener("input", function () {
    rgb_bleu = select_bleu.value;
    section.setAttribute(
      "style",
      "background-color:" +
        " rgba(" +
        rgb_rouge +
        "," +
        rgb_vert +
        "," +
        rgb_bleu +
        ")"
    );
    console.log("bleu value " + select_bleu.value);
  });
});
