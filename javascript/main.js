// Include header and footer
$(function () {
  $("#header").load("shared/header.html");
  $("#footer").load("shared/footer.html");
});



$(document).ready(function () {
  $("input:radio[name=AreYouUnemployed]").change(function () {
    if (this.value == "Yes") {
      document.getElementById("periodOfUnemploymentSelect").style.width = "100%";
      document.getElementById("periodOfUnemploymentSelect").style.height = "100%";
      document.getElementById("periodOfUnemploymentSelect").style.opacity = "1";
      document.getElementById("periodOfUnemploymentSelect").style.float = "none";
      document.getElementById("periodOfUnemploymentSelect").style.padding = ".375rem .75rem";
      document.getElementById("periodOfUnemploymentSelect").setAttribute("required", "");
    } else if (this.value == "No") {
      document.getElementById("periodOfUnemploymentSelect").style.width = "0";
      document.getElementById("periodOfUnemploymentSelect").style.height = "0";
      document.getElementById("periodOfUnemploymentSelect").style.padding = "0";
      document.getElementById("periodOfUnemploymentSelect").style.opacity = "0";
      document.getElementById("periodOfUnemploymentSelect").style.float = "right";
      document.getElementById("periodOfUnemploymentSelect").removeAttribute("required");
    }
  });
});


$(document).ready(function () {
  $("input:radio[name=AreYouUnemployed]").change(function () {
    if (this.value == "Yes") {
      document.getElementById("periodOfUnemployment").style.width = "100%";
      document.getElementById("periodOfUnemployment").style.height = "100%";
      document.getElementById("periodOfUnemployment").style.opacity = "1";
      document.getElementById("periodOfUnemployment").style.float = "none";
    } else if (this.value == "No") {
      document.getElementById("periodOfUnemployment").style.width = "0";
      document.getElementById("periodOfUnemployment").style.height = "0";
      document.getElementById("periodOfUnemployment").style.padding = "0";
      document.getElementById("periodOfUnemployment").style.opacity = "0";
      document.getElementById("periodOfUnemployment").style.float = "right";
    }
  });
});



$(document).ready(function () {
  $("input:radio[name=AreYouRegisteredInJobCentre]").change(function () {
    if (this.value == "Yes") {
      document.getElementById("PleaseMentionYourJobLocationSelect").style.width = "100%";
      document.getElementById("PleaseMentionYourJobLocationSelect").style.height = "100%";
      document.getElementById("PleaseMentionYourJobLocationSelect").style.opacity = "1";
      document.getElementById("PleaseMentionYourJobLocationSelect").style.float = "none";
      document.getElementById("PleaseMentionYourJobLocationSelect").style.padding = ".375rem .75rem";
      document.getElementById("PleaseMentionYourJobLocationSelect").setAttribute("required", "");
    } else if (this.value == "No") {
      document.getElementById("PleaseMentionYourJobLocationSelect").style.width = "0";
      document.getElementById("PleaseMentionYourJobLocationSelect").style.height = "0";
      document.getElementById("PleaseMentionYourJobLocationSelect").style.padding = "0";
      document.getElementById("PleaseMentionYourJobLocationSelect").style.opacity = "0";
      document.getElementById("PleaseMentionYourJobLocationSelect").style.float = "right";
      document.getElementById("PleaseMentionYourJobLocationSelect").removeAttribute("required");
    }
  });
});


$(document).ready(function () {
  $("input:radio[name=AreYouRegisteredInJobCentre]").change(function () {
    if (this.value == "Yes") {
      document.getElementById("PleaseMentionYourJobLocation").style.width = "100%";
      document.getElementById("PleaseMentionYourJobLocation").style.height = "100%";
      document.getElementById("PleaseMentionYourJobLocation").style.opacity = "1";
      document.getElementById("PleaseMentionYourJobLocation").style.float = "none";
    } else if (this.value == "No") {
      document.getElementById("PleaseMentionYourJobLocation").style.width = "0";
      document.getElementById("PleaseMentionYourJobLocation").style.height = "0";
      document.getElementById("PleaseMentionYourJobLocation").style.padding = "0";
      document.getElementById("PleaseMentionYourJobLocation").style.opacity = "0";
      document.getElementById("PleaseMentionYourJobLocation").style.float = "right";
    }
  });
});


$(document).ready(function () {
  $("input:radio[name=AreYouRegisteredInEmploymentCentre]").change(function () {
    if (this.value == "Yes") {
      document.getElementById("pleaseMentionYourEmploymentCentreSelect").style.width = "100%";
      document.getElementById("pleaseMentionYourEmploymentCentreSelect").style.height = "100%";
      document.getElementById("pleaseMentionYourEmploymentCentreSelect").style.opacity = "1";
      document.getElementById("pleaseMentionYourEmploymentCentreSelect").style.float = "none";
      document.getElementById("pleaseMentionYourEmploymentCentreSelect").style.padding = ".375rem .75rem";
      document.getElementById("pleaseMentionYourEmploymentCentreSelect").setAttribute("required", "");
    } else if (this.value == "No") {
      document.getElementById("pleaseMentionYourEmploymentCentreSelect").style.width = "0";
      document.getElementById("pleaseMentionYourEmploymentCentreSelect").style.height = "0";
      document.getElementById("pleaseMentionYourEmploymentCentreSelect").style.padding = "0";
      document.getElementById("pleaseMentionYourEmploymentCentreSelect").style.opacity = "0";
      document.getElementById("pleaseMentionYourEmploymentCentreSelect").style.float = "right";
      document.getElementById("pleaseMentionYourEmploymentCentreSelect").removeAttribute("required");
    }
  });
});


$(document).ready(function () {
  $("input:radio[name=AreYouRegisteredInEmploymentCentre]").change(function () {
    if (this.value == "Yes") {
      document.getElementById("pleaseMentionYourEmploymentCentre").style.width = "100%";
      document.getElementById("pleaseMentionYourEmploymentCentre").style.height = "100%";
      document.getElementById("pleaseMentionYourEmploymentCentre").style.opacity = "1";
      document.getElementById("pleaseMentionYourEmploymentCentre").style.float = "none";
    } else if (this.value == "No") {
      document.getElementById("pleaseMentionYourEmploymentCentre").style.width = "0";
      document.getElementById("pleaseMentionYourEmploymentCentre").style.height = "0";
      document.getElementById("pleaseMentionYourEmploymentCentre").style.padding = "0";
      document.getElementById("pleaseMentionYourEmploymentCentre").style.opacity = "0";
      document.getElementById("pleaseMentionYourEmploymentCentre").style.float = "right";
    }
  });
});


document.addEventListener(
  "DOMContentLoaded",
  function () {
    var div = document.getElementById("hireBtn");

    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
      div.innerHTML = this.response;
    };

    xhr.open("GET", "shared/applyNow.html", true);
    xhr.send();
  },
  false
);