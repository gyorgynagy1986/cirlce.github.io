// CURSOR                
                
              
              const photoWork = document.querySelector(".forefect");    
              const cursorMove = document.querySelector(".cursor"); 

                    photoWork.addEventListener("mousemove" , cursor);



                    function cursor(e) {
                    
                    cursorMove.style.top = e.pageY + 'px';
                    cursorMove.style.left = e.pageX + 'px';
                }
                        
                photoWork.addEventListener("mouseleave", () => {
                    cursorMove.classList.remove("cursor-addclass");
                    cursorMove.classList.add("cursor");

                            
                        });
                      
                photoWork.addEventListener("mouseover", () => {
                    cursorMove.classList.add("cursor-addclass");
                    cursorMove.classList.add("cursor");

                        });

//swiper review

const swiper = new Swiper('.swiper-container', {
      
        slidesPerView: 1,
        spaceBetween: 130,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-left',
          prevEl: '.swiper-button-right',
        },
      });

      