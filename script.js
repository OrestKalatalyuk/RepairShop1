document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('scrollToRepair').addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById('repair').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('scrollToTradeIn').addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById('tradein').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('scrollToContacts').addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('scrollToWarranty').addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById('warranty').scrollIntoView({ behavior: 'smooth' });
    });
}); 






    document.addEventListener("DOMContentLoaded", function() {
    var video = document.querySelector(".video");
    var container = document.querySelector(".video-container");
    video.volume = 0; // Встановлюємо гучність на мінімум, щоб відсутній був звук

    video.addEventListener("loadeddata", function() {
        container.style.backgroundImage = "url('img/production_id_3866849 (2160p).mp4')";
        video.style.display = "none";
    });
    });



document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu__toggle');
    var menuItems = document.querySelectorAll('.menu__item');
    var headerImgIcon = document.querySelectorAll('.header-img_icon p, .header-img_icon2 p');

    // бургер меню
    function closeMenu() {
        menuToggle.checked = false;
    }

   
    menuItems.forEach(function(item) {
        item.addEventListener('click', closeMenu);
    });


    headerImgIcon.forEach(function(item) {
        item.addEventListener('click', closeMenu);
    });
});


// контактна форма
function showContactForm() {
    var contactContainer = document.getElementById("contactContainer");
    var callButton = document.querySelector(".call__button");

    contactContainer.style.display = "block";


    
    
    contactContainer.scrollIntoView({ behavior: 'smooth' });
}



function scrollToFoarm() {
    var targetElement = document.getElementById('foarm');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }