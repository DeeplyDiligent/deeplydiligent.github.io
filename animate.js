$(document).ready(function(){
  // Add smooth scrolling to all links
    $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
    });
    
    function typeWriter(text, n, loc) {
      if (n < (text.length)) {
        $(loc).html(text.substring(0, n+1)+" _");
        n++;
        setTimeout(function() {
          typeWriter(text, n,loc)
        }, 70);
      }
        else{
            $(loc).html(text);
            return true;
        }
    }


    var text = '"Throw me into the wolves and I will return leading the pack."';
    var text2 = "- Seneca"


    var a = typeWriter(text, 0,".twr"); 
    setTimeout(function() {
        typeWriter(text2, 0,".tw2")
        }, 5200 ); 
});