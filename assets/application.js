"use strict"

document.addEventListener("DOMContentLoaded", function(event) {

    // Announcement Bar Manipulation
    let announcementBar = document.querySelector('.announcement');
    let closeAnnouncementBar = document.querySelector('.announcement__close');
    
    if (announcementBar != null) {
        setTimeout(function(){
            announcementBar.classList.remove('hidden')
        }, 3000);
    }

    if (closeAnnouncementBar != null) {
        closeAnnouncementBar.addEventListener("click", function(){
            announcementBar.classList.add('hidden');
        });
    }

});


