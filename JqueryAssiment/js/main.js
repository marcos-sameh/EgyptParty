$(document).ready(function () {
  $(".open-menu").click(function () {
    $(this).toggleClass("open-menu-active");
    $(".side-menu").toggleClass("side-menu-active");
  });

  $(".contact-div:first-of-type").css("display", "block");
  $("h3").click(function () {
    $(".contact-div").slideUp(500);
    $(this).next(".contact-div").slideDown(500);
    $(".contact-div").not($(this).next(".contact-div")).slideUp(500);
  });

  let countDoenDate = new Date("2023-10-25").getTime();

  let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiffrenec = countDoenDate - dateNow;

    // get time units
    let days = Math.floor(dateDiffrenec / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (dateDiffrenec % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minuts = Math.floor((dateDiffrenec % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiffrenec % (1000 * 60)) / 1000);

    let day = (document.getElementById("days").innerHTML =
      days < 10 ? `0${days} DAYS` : days + " DAYS");
    let hour = (document.getElementById("hours").innerHTML =
      hours < 10 ? `0${hours} Hr` : hours + " Hr");
    let minut = (document.getElementById("minuts").innerHTML =
      minuts < 10 ? `0${minuts} M` : minuts + " M");
    let second = (document.getElementById("seconds").innerHTML =
      seconds < 10 ? `0${seconds} S` : seconds + " S");
    if (dateDiffrenec < 0) {
      clearInterval();
    }
  }, 1000);

  var maxLength = $("textarea").attr("maxlength");

  $("#message").html(
    '<span class="text-main">' + maxLength + "</span> Characyer Reamining"
  );
  $("textarea").keyup(function () {
    let textLength = $(this).val().length;
    let remaincharater = maxLength - textLength;

    $("#message").html(
      '<span class="text-main">' +
        remaincharater +
        "</span> Characyer Reamining"
    );
  });

  $(".btnUp").click(function () {
    $("body").animate({ scrollTop: 0 }, 5000);
  });
});

$(window).scroll(function () {
  let windowScroll = $(window).scrollTop();

  let sectionOffset = $("#contact").offset().top;
  if (windowScroll > sectionOffset - 70) {
    $("#nav").removeClass("bg-transparent");
    $("#nav").addClass("bg-main");

    $(".btnUp").addClass("d-block");
  } else {
    $("#nav").removeClass("bg-main");

    $("#nav").addClass("bg-transparent");

    $(".btnUp").removeClass("d-block");
  }
});
