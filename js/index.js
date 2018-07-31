function toggleNav() {
    $("nav").toggleClass("togglednav");
    $(".navlink").toggleClass("animated");
    $(".navlink").toggleClass("slideInLeft");
}

function toggleTeamNav() {
    toggleNav();
    $("body").toggleClass("toggledteam");
}
