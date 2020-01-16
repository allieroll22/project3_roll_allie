
  $(document).on(
    {
      mouseenter: function() {
        var gifImage = $(this).find("img"),
          gifImageSrc = gifImage.data("gif-image");
        gifImage.attr("src", gifImageSrc);
      },
      mouseleave: function() {
        var gifImage = $(this).find("img"),
          coverSrc = gifImage.data("image");
        gifImage.attr("src", coverSrc);
      }
    },
    "[data-gif-trigger]"
  );
