//Step1 Create and send an XMLHttpRequest to an API url (some suggestions listed below)
var req = new XMLHttpRequest();
req.open('GET','http://open-notify.org/Open-Notify-API/ISS-Location-Now/', true);
req.send();
console.log('response: ', req.response);
}

//Step2:Implement an onload function for the XMLHttpRequest that turns the JSON response into a Javascript object
req.onload  = function('GET','http://open-notify.org/Open-Notify-API/ISS-Location-Now/', true); {
   var jsonResponse = req.response;
   // do something with jsonResponse
};
req.send(null);
}

//step3 Use AJAX to display the data from the response on the HTML page
$.ajax({
  url: "http://open-notify.org/Open-Notify-API/ISS-Location-Now/",
  headers: {
    "Authorization" : "Bearer NN_6xxxxx"
  }
}).done(function(data) {
  $('#monitor_data').append(JSON.stringify(data))
});
