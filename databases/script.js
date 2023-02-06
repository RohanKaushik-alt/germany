// Getting JSON data
// var ContactNotFormatted = [];
var AwsNotFormatted = [];
var cloudNotFormatted = [];
// var WebinarNotFormatted = [];
$(document).ready(function () {
  // $.getJSON("contact_us.json", function (json) {
  //   ContactNotFormatted = json;
  // });
  $.getJSON("aws.json", function (json) {
    AwsNotFormatted = json;
  });
  $.getJSON("cloud_Computing.json", function (json) {
    cloudNotFormatted = json;
  });
  // $.getJSON("webinar.json", function (json) {
  //   WebinarNotFormatted = json;
  // });
});

//Commmon functions
function convertToCSV(objArray) {
  var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
  var str = "";
  for (var i = 0; i < array.length; i++) {
    var line = "";
    for (var index in array[i]) {
      if (line != "") line += ",";
      line += array[i][index];
    }
    str += line + "\r\n";
  }
  return str;
}

function exportCSVFile(headers, items, fileTitle) {
  if (headers) {
    items.unshift(headers);
  }
  var jsonObject = JSON.stringify(items);
  var csv = this.convertToCSV(jsonObject);
  var exportedFilenmae = fileTitle + ".csv" || "export.csv";
  var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, exportedFilenmae);
  } else {
    var link = document.createElement("a");
    if (link.download !== undefined) {
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", exportedFilenmae);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

//Downloading contact data
// function download_contact() {
//   var headers = {
//     Name: "Name",
//     Email: "Email",
//     Phone: "Phone",
//     Message: "Message",
//     HowIHeard: "How I Heard",
//     DateTime: "Date & Time",
//   };

//   var itemsFormatted = [];

//   ContactNotFormatted.forEach((item) => {
//     itemsFormatted.push({
//       Name: item.Name.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
//       Email: item.Email.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
//       Phone: `${
//         '="' +
//         item.Phone.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " ") +
//         '"'
//       }`,
//       Message: item.Message.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
//       HowIHeard: item.HowIHeard.replace(/,/g, ";").replace(
//         /(?:\r\n|\r|\n)/g,
//         ""
//       ),
//       DateTime: `${
//         '="' +
//         item.DateTime.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " ") +
//         '"'
//       }`,
//     });
//   });

//   let date = new Date();
//   let fileDate = date.toLocaleString();

//   var fileTitle = "PrimedTalent_Contact_data_" + fileDate;

//   exportCSVFile(headers, itemsFormatted, fileTitle);
// }

//Downloading AWS data
function download_aws() {
  var headers = {
    Name: "Name",
    Email: "Email",
    Phone: "Phone",
    City: "City",
    Date: "Date",
    Experience: "Experience",
    Message: "Message",
    How: "How I Heard",
    DateTime: "Date & Time",
    AreYouUnemployedValue: "Are You Unemployed ",
    AreYouRegisteredInJobCentreValue: "Are You Registered In Job Centre",
    AreYouRegisteredInEmploymentCentreValue: "Are You Registered In Employment Centre",
  };

  var itemsFormatted = [];

  AwsNotFormatted.forEach((item) => {
    itemsFormatted.push({
      Name: item.Name.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
      Email: item.Email.replace(/(?:\r\n|\r|\n)/g, " "),
      Phone: `${'="' +
        item.Phone.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " ") +
        '"'
        }`,
      City: `${'="' +
        item.City.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " ") +
        '"'
        }`,
      Date: `${'="' +
        item.Date.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " ") +
        '"'
        }`,
      Experience: item.Experience.replace(/,/g, ";").replace(
        /(?:\r\n|\r|\n)/g,
        ""
      ),
      Message: item.Message.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
      How: item.How.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
      DateTime: `${'="' +
        item.DateTime.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " ") +
        '"'
        }`,

      AreYouUnemployedValue: item.AreYouUnemployedValue.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
      AreYouRegisteredInJobCentreValue: item.AreYouRegisteredInJobCentreValue.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
      AreYouRegisteredInEmploymentCentreValue: item.AreYouRegisteredInEmploymentCentreValue.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),

    });
  });

  let date = new Date();
  let fileDate = date.toLocaleString();
  var fileTitle = "PrimedTalentGermany_AWS_data_" + fileDate;

  exportCSVFile(headers, itemsFormatted, fileTitle);
}

function DownloadCloudComputing() {
  var headers = {

    Name: "Name",
    Email: "Email",
    Phone: "Phone",
    Location: "Location",
    SelectCourse: "SelectCourse",
    Message: "Message",
  };

  var itemsFormatted = [];

  cloudNotFormatted.forEach((item) => {
    itemsFormatted.push({
      Name: item.Name.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
      Email: item.Email.replace(/(?:\r\n|\r|\n)/g, " "),
      Phone: `${'="' +
        item.Phone.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " ") +
        '"'
        }`,
      Location: `${'="' +
        item.Location.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " ") +
        '"'
        }`,
      SelectCourse: `${'="' +
        item.SelectCourse.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " ") +
        '"'
        }`,
      Message: item.Message.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),


    });
  });

  let date = new Date();
  let fileDate = date.toLocaleString();
  var fileTitle = "PrimedTalentGermany_CLOUD_COMPUTING_data_" + fileDate;

  exportCSVFile(headers, itemsFormatted, fileTitle);
}

//Downloading contact data
// function download_contact() {
//   var headers = {
//     Name: "Name",
//     Email: "Email",
//     Phone: "Phone",
//     Message: "Message",
//     HowIHeard: "How I Heard",
//     DateTime: "Date & Time",
//   };

//   var itemsFormatted = [];

//   cloudNotFormatted.forEach((item) => {
//     itemsFormatted.push({
//       Name: item.Name.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
//       Email: item.Email.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
//       Phone: `${
//         '="' +
//         item.Phone.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " ") +
//         '"'
//       }`,
//       Message: item.Message.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
//       HowIHeard: item.HowIHeard.replace(/,/g, ";").replace(
//         /(?:\r\n|\r|\n)/g,
//         " "
//       ),
//       DateTime: `${
//         '="' +
//         item.DateTime.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " ") +
//         '"'
//       }`,
//     });
//   });

//   let date = new Date();
//   let fileDate = date.toLocaleString();

//   var fileTitle = "primetalend.de_data_" + fileDate;

//   exportCSVFile(headers, itemsFormatted, fileTitle);
// }

//Downloading Staffing expertise data
// function download_staffing() {
//   var headers = {
//     Name: "Name",
//     Email: "Email",
//     Phone: "Phone",
//     Company: "Company",
//     NoOfEmp: "No of emp",
//     HowHear: "How I Heard",
//     DateTime: "Date & Time",
//   };

//   var itemsFormatted = [];

//   StaffingNotFormatted.forEach((item) => {
//     itemsFormatted.push({
//       Name: item.Name.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
//       Email: item.Email.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
//       Phone: `${
//         '="' +
//         item.Phone.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " ") +
//         '"'
//       }`,
//       Company: item.Company.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
//       NoOfEmp: `${
//         '="' +
//         item.NoOfEmp.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " ") +
//         '"'
//       }`,
//       HowHear: item.HowHear.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
//       DateTime: `${
//         '="' +
//         item.DateTime.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " ") +
//         '"'
//       }`,
//     });
//   });

//   let date = new Date();
//   let fileDate = date.toLocaleString();

//   var fileTitle = "PrimedTalent_Staffing_Expertise_data_" + fileDate;

//   exportCSVFile(headers, itemsFormatted, fileTitle);
// }

//Downloading Webinar data
// function download_webinar() {
//   var headers = {
//     Name: "Name",
//     Email: "Email",
//     Phone: "Phone",
//     LinkedIN: "LinkedIN URL",
//     DateTime: "Date & Time",
//   };

//   var itemsFormatted = [];

//   WebinarNotFormatted.forEach((item) => {
//     itemsFormatted.push({
//       Name: item.Name.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
//       Email: item.Email.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " "),
//       Phone: `${
//         '="' +
//         item.Phone.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " ") +
//         '"'
//       }`,
//       LinkedIN: `${
//         '="' +
//         item.LinkedIN.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " ") +
//         '"'
//       }`,
//       DateTime: `${
//         '="' +
//         item.DateTime.replace(/,/g, ";").replace(/(?:\r\n|\r|\n)/g, " ") +
//         '"'
//       }`,
//     });
//   });

//   let date = new Date();
//   let fileDate = date.toLocaleString();

//   var fileTitle = "PrimedTalent_Webinar_data_" + fileDate;

//   exportCSVFile(headers, itemsFormatted, fileTitle);
// }

//Toggle tables

// function toggleContact() {
//   $("#content").toggle();
//   $("#symbol").toggleClass("fa-eye-slash fa-eye");
// }
function toggleAWS() {
  $("#content2").toggle();
  $("#symbol2").toggleClass("fa-eye-slash fa-eye");
}

function toggleCloudComputing() {
  $("#content3").toggle();
  $("#symbol3").toggleClass("fa-eye-slash fa-eye");
}
// function toggleStaffing() {
//   $("#content3").toggle();
//   $("#symbol3").toggleClass("fa-eye-slash fa-eye");
// }
// function toggleWebinar() {
//   $("#content4").toggle();
//   $("#symbol4").toggleClass("fa-eye-slash fa-eye");
// }
