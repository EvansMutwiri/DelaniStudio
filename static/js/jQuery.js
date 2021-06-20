$(document).ready(function () {
  $(".design-description").hide();
  $(".design-pop").on("click", function () {
    $(".design-description").show();
    $(".design-pop").toggle();
  });
  $(".design-description").on("click", function () {
    $(".design-pop").show();
    $(".design-description").hide();
  });
});

$(document).ready(function () {
  $(".product-dev").hide();
  $(".dev-image").on("click", function () {
    $(".product-dev").show();
    $(".dev-image").toggle();
  });
  $(".product-dev").on("click", function () {
    $(".dev-image").show();
    $(".product-dev").hide();
  });
});

$(document).ready(function () {
  $(".product-man").hide();
  $(".prod-man").on("click", function () {
    $(".product-man").show();
    $(".prod-man").toggle();
  });
  $(".product-man").on("click", function () {
    $(".prod-man").show();
    $(".product-man").hide();
  });
});