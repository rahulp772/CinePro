$(document).ready(function () {
  // var declaration
  var counter = -290;
  let tran = -290;
  let title1 = $("#title1");
  let title2 = $("#title2");
  let title3 = $("#title3");

  //  ----------------- timer function for slider -------------------------
  function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function () {
      if (timerObj) {
        clearInterval(timerObj);
        timerObj = null;
      }
      return this;
    };

    // start timer using current settings (if it's not already running)
    this.start = function () {
      if (!timerObj) {
        this.stop();
        timerObj = setInterval(fn, t);
      }
      return this;
    };

    // start with new or original interval, stop current interval
    this.reset = function (newT = t) {
      t = newT;
      return this.stop().start();
    };
  }

  // --------  Slider Dots Functions ------------------------------------
  $(".dot").click((x) => {
    for (let i = 0; i < $(".dot").length; i++) {
      $(".dot")[i].classList.remove("active");
      timer.stop();
      setTimeout(() => {
        timer.start();
      }, 5000);
    }
    x.currentTarget.classList.toggle("active");
    if (x.currentTarget.id == 1) {
      $("#translate").css({ "-webkit-transform": `translate(0px)` });
      $("#slider .cover").attr(
        "style",
        `background-image: url('${$("#one").attr("src")}')`
      );
      title1.removeClass("hide");
      title2.addClass("hide");
      title3.addClass("hide");
      counter = -290;
    }
    if (x.currentTarget.id == 2) {
      $("#translate").css({ "-webkit-transform": `translate(-290px)` });
      $("#slider .cover").attr(
        "style",
        `background-image: url('${$("#two").attr("src")}')`
      );
      title1.addClass("hide");
      title2.removeClass("hide");
      title3.addClass("hide");
      counter = -580;
    }
    if (x.currentTarget.id == 3) {
      $("#translate").css({ "-webkit-transform": `translate(-580px)` });
      $("#slider .cover").attr(
        "style",
        `background-image: url('${$("#three").attr("src")}')`
      );
      title1.addClass("hide");
      title2.addClass("hide");
      title3.removeClass("hide");
      counter = 0;
    }
  });

  // ------------- Blur background on slider  -----------------------------------
  $("#slider .cover").attr(
    "style",
    `background-image: url('${$("#one").attr("src")}')`
  );
  title1.removeClass("hide");

  //  ---------------  Slider Function -----------------------------------------
  function slide() {
    $("#translate").css({ "-webkit-transform": `translate(${counter}px)` });
    counter = counter + tran;
    if (counter == -290) {
      $("#slider .cover").attr(
        "style",
        `background-image: url('${$("#one").attr("src")}')`
      );
      $(".dot")[0].classList.add("active");
      $(".dot")[1].classList.remove("active");
      $(".dot")[2].classList.remove("active");
      title1.removeClass("hide");
      title2.addClass("hide");
      title3.addClass("hide");
    }
    if (counter == -580) {
      $("#slider .cover").attr(
        "style",
        `background-image: url('${$("#two").attr("src")}')`
      );
      $(".dot")[0].classList.remove("active");
      $(".dot")[1].classList.add("active");
      $(".dot")[2].classList.remove("active");
      title1.addClass("hide");
      title2.removeClass("hide");
      title3.addClass("hide");
    }
    if (counter == -870) {
      $("#slider .cover").attr(
        "style",
        `background-image: url('${$("#three").attr("src")}')`
      );
      $(".dot")[0].classList.remove("active");
      $(".dot")[1].classList.remove("active");
      $(".dot")[2].classList.add("active");
      title1.addClass("hide");
      title2.addClass("hide");
      title3.removeClass("hide");
      counter = 0;
    }
  }

  if ($("#slider")) {
    var timer = new Timer(slide, 5000);
  }

  });
