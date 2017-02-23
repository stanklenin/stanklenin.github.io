           
            var el = document.querySelectorAll("article .catalog-item-buy");
            var show = document.querySelector(".modal-content-buy");
            var close = show.querySelector(".modal-content-close");
            var goOn = show.querySelector(".modal-content-continue");
            var overlay = document.querySelector(".modal-overlay");
            
            for (var i = 0; i < el.length; i++) {
                 
                    el[i].addEventListener("click", function(zz) {
                        zz.preventDefault();
                        show.classList.add("modal-content-buy-show");
                        overlay.classList.add("modal-overlay-show");
                    });
                
            };
            close.addEventListener("click", function(event) {
                event.preventDefault();
                show.classList.remove("modal-content-buy-show");
                overlay.classList.remove("modal-overlay-show");
            });
            
            goOn.addEventListener("click", function(event) {
                event.preventDefault();
                show.classList.remove("modal-content-buy-show");
                overlay.classList.remove("modal-overlay-show");
            });

            var link = document.querySelector(".about-contact-btn");
            
            var popup = document.querySelector(".modal-content");
            var overlay = document.querySelector(".modal-overlay");
            var close = popup.querySelector(".modal-content-close");
            
            var submit = popup.querySelector(".feedback-form-send");
            var login = popup.querySelector("[name=feedback-name]");
            var mail = popup.querySelector("[name=feedback-mail]");
            var storage = localStorage.getItem("login");
            
            link.addEventListener("click", function(event) {
                event.preventDefault();
                popup.classList.add("modal-content-show");
                overlay.classList.add("modal-overlay-show");
                login.focus();
            
            if (storage) {
                
                login.value = storage;
                mail.focus();
            } else {
                login.focus();
            }
            });
            
            close.addEventListener("click", function(event) {
                event.preventDefault();
                popup.classList.remove("modal-content-show");
                overlay.classList.remove("modal-overlay-show");
                popup.classList.remove("modal-error");
            });

            submit.addEventListener("click", function(event) {
                if (!login.value || !mail.value) {
                    event.preventDefault();
                    popup.classList.add("modal-error");
                } else {
                    localStorage.setItem("login", login.value);
                }
            });
            
            var mapOpen = document.querySelector(".about-contact-map");
            
            var mapPopup = document.querySelector (".modal-content-map");
            var overlay = document.querySelector(".modal-overlay");
            var mapClose = mapPopup.querySelector(".modal-content-close");
            
            mapOpen.addEventListener("click", function(mapevent) {
                mapevent.preventDefault();
                mapPopup.classList.add("modal-content-map-show");
                overlay.classList.add("modal-overlay-show");
            });

            mapClose.addEventListener("click", function(mapevent) {
                mapevent.preventDefault();
                mapPopup.classList.remove("modal-content-map-show");
                overlay.classList.remove("modal-overlay-show");
            });
            
            