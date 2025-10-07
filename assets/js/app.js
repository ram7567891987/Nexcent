$(function() { // Run this function when the DOM is fully loaded

    let header = $("#header"), // Select the element with id 'header'
          scrollOffset = $(window).scrollTop(); // Get the current vertical scroll position

          // Fixed Header
          checkScroll(scrollOffset); // Call checkScroll to set header state on page load

     $(window).on("scroll", function() { // When the user scrolls the window

          scrollOffset = $(this).scrollTop(); // Update scrollOffset with new scroll position

          checkScroll(scrollOffset); // Check if header should be fixed or not

     });

     function checkScroll(scrollOffset) { // Function to add/remove 'fixed' class to header

          if (scrollOffset >= 1) { // If the page is scrolled down at least 1px
                header.addClass("fixed"); // Add 'fixed' class to header
          } else {
                header.removeClass("fixed") // Remove 'fixed' class if at the top
          }
     }

     // Smooth Scroll

     $("[data-scroll]").on("click", function(event) { // When any element with 'data-scroll' is clicked
          event.preventDefault(); // Prevent default link behavior

          let $this = $(this), // Store the clicked element
                blockId = $(this).data('scroll'), // Get the value of 'data-scroll' attribute
                blockOffset = $(blockId).offset().top; // Get the vertical position of the target block

                $("#nav a").removeClass("active") // Remove 'active' class from all nav links
                $this.addClass("active"); // Add 'active' class to the clicked link

                $("html, body").animate({
                     scrollTop: blockOffset // Animate scroll to the target block

                }, 500); // Animation duration is 500ms

     });

});
