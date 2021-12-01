var indexValue = 0;
        function slideShow(){
          setTimeout(slideShow, 2500);
          var x;
          const img = document.getElementsByClassName("imgs");
          for(x = 0; x < img.length; x++){
            img[x].style.display = "none";
          }
          indexValue++;
          if(indexValue > img.length){indexValue = 1}
          img[indexValue -1].style.display = "block";
        }
        slideShow();

        ScrollReveal().reveal('.reveal', {
            delay: 600,
            distance: '50px',
            duration: 600,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            interval: 0,
            opacity: 0,
            origin: 'top',
        })

        ScrollReveal().reveal('.cards', {
            delay: 600,
            distance: '50px',
            duration: 600,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            interval: 0,
            opacity: 0,
            origin: 'right'
        })

        ScrollReveal().reveal('.icons', {
            delay: 600,
            distance: '50px',
            duration: 600,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            interval: 0,
            opacity: 0,
            origin: 'bottom'
        })