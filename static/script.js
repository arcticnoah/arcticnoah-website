// -== Cookie Stuff ==-

// Check whether to show the cookie banner
if (localStorage.getItem("thirdPartyCookiesAgreed") != "true" && localStorage.getItem("cookiesDialogShow") != "false") {
  $(".cookie-banner").delay(500).fadeIn();
};

$(".cookie-close").click(function() {
  $(".cookie-banner").fadeOut();
});

$(".cookie-agree").click(function() {
  $(".cookie-banner").fadeOut();
  localStorage.setItem("thirdPartyCookiesAgreed","true");
  localStorage.setItem("cookiesDialogShow","false");
  document.getElementById("toggle-cookies").text = "Disable third party cookies";
});

$(".cookie-disagree").click(function() {
  $(".cookie-banner").fadeOut();
  localStorage.setItem("thirdPartyCookiesAgreed","false");
  localStorage.setItem("cookiesDialogShow","false");
});

// Update cookie toggle button text in the footer
if (localStorage.getItem("thirdPartyCookiesAgreed") == "true") {
  document.getElementById("toggle-cookies").text = "Disable third party cookies";
} else {
  document.getElementById("toggle-cookies").text = "Enable third party cookies";
}

// Toggle third party cookie agreed state
function toggleThirdPartyCookies() {
  if (localStorage.getItem("thirdPartyCookiesAgreed") == "true") {
    localStorage.setItem("thirdPartyCookiesAgreed","false");
    localStorage.setItem("cookiesDialogShow","false");
    document.getElementById("toggle-cookies").text = "Enable third party cookies";
  } else {
    localStorage.setItem("thirdPartyCookiesAgreed","true");
    localStorage.setItem("cookiesDialogShow","false");
    document.getElementById("toggle-cookies").text = "Disable third party cookies";
  }
}