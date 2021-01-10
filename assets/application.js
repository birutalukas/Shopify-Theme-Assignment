"use strict"

document.addEventListener("DOMContentLoaded", function(event) {

    // Announcement Bar Manipulation
    let announcementBar = document.querySelector('.announcement');
    let closeAnnouncementBar = document.querySelector('.announcement__close');

    setTimeout(function(){
        announcementBar.classList.remove('hidden')
    }, 3000);

    closeAnnouncementBar.addEventListener("click", function(){
        announcementBar.classList.add('hidden');
    })
});


