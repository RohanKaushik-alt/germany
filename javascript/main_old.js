function checkvalue(val) {
  if (val === "Others") {
    document.getElementById("howhearinp").style.width = "100%";
    document.getElementById("howhearinp").style.padding = ".375rem .75rem";
    document.getElementById("howhearinp").style.height = "100%";
    document.getElementById("howhearinp").style.opacity = "1";
    document.getElementById("howhearinp").style.float = "none";
    document.getElementById("howhearinp").setAttribute("required", "");
  } else {
    document.getElementById("howhearinp").style.width = "0";
    document.getElementById("howhearinp").style.padding = "0";
    document.getElementById("howhearinp").style.height = "0";
    document.getElementById("howhearinp").style.opacity = "0";
    document.getElementById("howhearinp").style.float = "right";
    document.getElementById("howhearinp").removeAttribute("required");
  }
}

function checkvalue2(val) {
  if (val === "Others") {
    document.getElementById("indother").style.width = "100%";
    document.getElementById("indother").style.padding = ".375rem .75rem";
    document.getElementById("indother").style.height = "100%";
    document.getElementById("indother").style.opacity = "1";
    document.getElementById("indother").style.float = "none";
    document.getElementById("indother").setAttribute("required", "");
  } else {
    document.getElementById("indother").style.width = "0";
    document.getElementById("indother").style.padding = "0";
    document.getElementById("indother").style.height = "0";
    document.getElementById("indother").style.opacity = "0";
    document.getElementById("indother").style.float = "right";
    document.getElementById("indother").removeAttribute("required");
  }
}

function checkvaluerec(val) {
  if (val.value === "Others") {
    document.getElementById("howhearother").style.width = "100%";
    // document.getElementById("howhearother").style.padding = ".375rem .75rem";
    document.getElementById("howhearother").style.height = "100%";
    document.getElementById("howhearother").style.opacity = "1";
    document.getElementById("howhearother").style.float = "none";
    document
      .querySelector("#howhearother #how-hear-other")
      .setAttribute("required", "");
  } else {
    document.getElementById("howhearother").style.width = "0";
    // document.getElementById("howhearother").style.padding = "0";
    document.getElementById("howhearother").style.height = "0";
    document.getElementById("howhearother").style.opacity = "0";
    document.getElementById("howhearother").style.float = "right";
    document
      .querySelector("#howhearother #how-hear-other")
      .removeAttribute("required");
  }
}

$(document).ready(function () {
  $("input:radio[name=Exp]").change(function () {
    if (this.value == "No") {
      document.getElementById("indother").style.width = "0";
      document.getElementById("indother").style.padding = "0";
      document.getElementById("indother").style.height = "0";
      document.getElementById("indother").style.opacity = "0";
      document.getElementById("indother").style.float = "right";
      document.getElementById("indother").removeAttribute("required");
    }
    if (this.value == "Yes") {
      if (document.getElementById("secinp") == "Others") {
        document.getElementById("indother").style.width = "100%";
        document.getElementById("indother").style.padding = ".375rem .75rem";
        document.getElementById("indother").style.height = "100%";
        document.getElementById("indother").style.opacity = "1";
        document.getElementById("indother").style.float = "none";
        document.getElementById("indother").setAttribute("required", "");
      }
    }
  });
});

$(document).ready(function () {
  $("input:radio[name=Exp]").change(function () {
    if (this.value == "Yes") {
      document.getElementById("expinp").style.width = "100%";
      document.getElementById("expinp").style.height = "100%";
      document.getElementById("expinp").style.padding = ".375rem .75rem";
      document.getElementById("expinp").style.opacity = "1";
      document.getElementById("expinp").style.float = "none";
      document.getElementById("expinp").setAttribute("required", "");
    } else if (this.value == "No") {
      document.getElementById("expinp").style.height = "0";
      document.getElementById("expinp").style.width = "0";
      document.getElementById("expinp").style.padding = "0";
      document.getElementById("expinp").style.opacity = "0";
      document.getElementById("expinp").style.float = "right";
      document.getElementById("expinp").removeAttribute("required");
    }
  });
});

$(document).ready(function () {
  $("input:radio[name=Exp]").change(function () {
    if (this.value == "Yes") {
      document.getElementById("expinp2").style.width = "100%";
      document.getElementById("expinp2").style.height = "100%";
      document.getElementById("expinp2").style.padding = ".375rem .75rem";
      document.getElementById("expinp2").style.opacity = "1";
      document.getElementById("expinp2").style.float = "none";
      document.getElementById("expinp2").setAttribute("required", "");
    } else if (this.value == "No") {
      document.getElementById("expinp2").style.height = "0";
      document.getElementById("expinp2").style.width = "0";
      document.getElementById("expinp2").style.padding = "0";
      document.getElementById("expinp2").style.opacity = "0";
      document.getElementById("expinp2").style.float = "right";
      document.getElementById("expinp2").removeAttribute("required");
    }
  });
});

$(document).ready(function () {
  $("input:radio[name=Exp]").change(function () {
    if (this.value == "Yes") {
      document.getElementById("expinplabel").style.width = "100%";
      document.getElementById("expinplabel").style.height = "100%";
      document.getElementById("expinplabel").style.opacity = "1";
      document.getElementById("expinplabel").style.float = "none";
      document.getElementById("expinplabel").style.marginTop = "1rem";
    } else if (this.value == "No") {
      document.getElementById("expinplabel").style.height = "0";
      document.getElementById("expinplabel").style.width = "0";
      document.getElementById("expinplabel").style.padding = "0";
      document.getElementById("expinplabel").style.opacity = "0";
      document.getElementById("expinplabel").style.float = "right";
    }
  });
});

$(document).ready(function () {
  $("input:radio[name=Exp]").change(function () {
    if (this.value == "Yes") {
      document.getElementById("jobinp").style.width = "100%";
      document.getElementById("jobinp").style.height = "100%";
      document.getElementById("jobinp").style.padding = ".375rem .75rem";
      document.getElementById("jobinp").style.opacity = "1";
      document.getElementById("jobinp").style.float = "none";
      document.getElementById("jobinp").setAttribute("required", "");
    } else if (this.value == "No") {
      document.getElementById("jobinp").style.width = "0";
      document.getElementById("jobinp").style.height = "0";
      document.getElementById("jobinp").style.padding = "0";
      document.getElementById("jobinp").style.opacity = "0";
      document.getElementById("jobinp").style.float = "right";
      document.getElementById("jobinp").removeAttribute("required");
    }
  });
});

$(document).ready(function () {
  $("input:radio[name=Exp]").change(function () {
    if (this.value == "Yes") {
      document.getElementById("secinp").style.width = "100%";
      document.getElementById("secinp").style.height = "100%";
      document.getElementById("secinp").style.opacity = "1";
      document.getElementById("secinp").style.padding = ".375rem .75rem";
      document.getElementById("secinp").style.float = "none";
      document.getElementById("secinp").setAttribute("required", "");
    } else if (this.value == "No") {
      document.getElementById("secinp").style.width = "0";
      document.getElementById("secinp").style.height = "0";
      document.getElementById("secinp").style.padding = "0";
      document.getElementById("secinp").style.opacity = "0";
      document.getElementById("secinp").style.float = "right";
      document.getElementById("secinp").removeAttribute("required");
    }
  });
});

$(document).ready(function () {
  $("input:radio[name=Exp]").change(function () {
    if (this.value == "Yes") {
      document.getElementById("secinplabel").style.width = "100%";
      document.getElementById("secinplabel").style.height = "100%";
      document.getElementById("secinplabel").style.opacity = "1";
      document.getElementById("secinplabel").style.float = "none";
    } else if (this.value == "No") {
      document.getElementById("secinplabel").style.width = "0";
      document.getElementById("secinplabel").style.height = "0";
      document.getElementById("secinplabel").style.padding = "0";
      document.getElementById("secinplabel").style.opacity = "0";
      document.getElementById("secinplabel").style.float = "right";
    }
  });
});
$(document).ready(function () {
  $("input:radio[name=registered]").change(function () {
    if (this.value == "Yes") {
      document.getElementById("regInpLabel").style.width = "100%";
      document.getElementById("regInpLabel").style.height = "100%";
      document.getElementById("regInpLabel").style.opacity = "1";
      document.getElementById("regInpLabel").style.float = "none";
    } else if (this.value == "No") {
      document.getElementById("regInpLabel").style.width = "0";
      document.getElementById("regInpLabel").style.height = "0";
      document.getElementById("regInpLabel").style.padding = "0";
      document.getElementById("regInpLabel").style.opacity = "0";
      document.getElementById("regInpLabel").style.float = "right";
    }
  });
});
$(document).ready(function () {
  $("input:radio[name=registered]").change(function () {
    if (this.value == "Yes") {
      document.getElementById("regYes").style.width = "100%";
      document.getElementById("regYes").style.height = "100%";
      document.getElementById("regYes").style.opacity = "1";
      document.getElementById("regYes").style.float = "none";
      document.getElementById("regYes").style.padding = ".375rem .75rem";
      document.getElementById("regYes").setAttribute("required", "");
    } else if (this.value == "No") {
      document.getElementById("regYes").style.width = "0";
      document.getElementById("regYes").style.height = "0";
      document.getElementById("regYes").style.padding = "0";
      document.getElementById("regYes").style.opacity = "0";
      document.getElementById("regYes").style.float = "right";
      document.getElementById("regYes").removeAttribute("required");
    }
  });
});

function checkvalue3(val) {
  if (val === "Other") {
    document.getElementById("milcityextra1").style.width = "100%";
    document.getElementById("milcityextra1").style.height = "100%";
    document.getElementById("milcityextra1").style.opacity = "1";
    document.getElementById("milcityextra1").style.float = "none";
    document.getElementById("milcityextra1").style.padding = "0 15px";
    document.getElementById("rel1").required = "true";
    document.getElementById("milcityextra2").style.width = "100%";
    document.getElementById("milcityextra2").style.height = "100%";
    document.getElementById("milcityextra2").style.opacity = "1";
    document.getElementById("milcityextra2").style.padding = "0 15px";
    document.getElementById("rel2").required = "true";
    document.getElementById("miltext").required = "true";
    document.getElementById("milcityextra2").style.float = "none";
  } else {
    document.getElementById("milcityextra1").style.width = "0";
    document.getElementById("milcityextra1").style.height = "0";
    document.getElementById("milcityextra1").style.padding = "0";
    document.getElementById("milcityextra1").style.opacity = "0";
    document.getElementById("milcityextra1").style.float = "right";
    document.getElementById("milcityextra2").style.width = "0";
    document.getElementById("milcityextra2").style.height = "0";
    document.getElementById("milcityextra2").style.padding = "0";
    document.getElementById("milcityextra2").style.opacity = "0";
    document.getElementById("milcityextra2").style.float = "right";
  }
}

const hideandshow = (e) => {
  console.log(e);
  const sht = document.getElementById("sourceht");
  const sto = document.getElementById("sourceto");
  const htd = document.getElementById("hire");
  const dp = document.getElementById("direct");
  const cth = document.getElementById("contract");
  const sta = document.getElementById("staffing");

  if (e.id === "shtid") {
    sht.style.display = "block";
    sto.style.display = "none";
    htd.style.display = "none";
    dp.style.display = "none";
    cth.style.display = "none";
    sta.style.display = "none";
    sht.scrollIntoView();
  } else if (e.id === "stoid") {
    sto.style.display = "block";
    sht.style.display = "none";
    htd.style.display = "none";
    dp.style.display = "none";
    cth.style.display = "none";
    sta.style.display = "none";
    sto.scrollIntoView();
  } else if (e.id === "htdid") {
    htd.style.display = "block";
    sht.style.display = "none";
    sto.style.display = "none";
    dp.style.display = "none";
    cth.style.display = "none";
    sta.style.display = "none";
    htd.scrollIntoView();
  } else if (e.id === "dpid") {
    dp.style.display = "block";
    sht.style.display = "none";
    sto.style.display = "none";
    htd.style.display = "none";
    cth.style.display = "none";
    sta.style.display = "none";
    dp.scrollIntoView();
  } else if (e.id === "cthid") {
    cth.style.display = "block";
    sht.style.display = "none";
    sto.style.display = "none";
    htd.style.display = "none";
    dp.style.display = "none";
    sta.style.display = "none";
    cth.scrollIntoView();
  } else if (e.id === "staid") {
    sta.style.display = "block";
    sht.style.display = "none";
    sto.style.display = "none";
    htd.style.display = "none";
    dp.style.display = "none";
    cth.style.display = "none";
    sta.scrollIntoView();
  }
};
