/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

   
    

};



function onError(error){
  console.log(error);  
}



function openCageApi(lat, long){
    var http = new XMLHttpRequest();
    const url = 'https://api.opencagedata.com/geocode/v1/json?q=' +lat+  '+' + long + '&key=74a85fafab3e47938c689c28036470a1';
    http.open("GET", url);
    http.send();
    http.onreadystatechange = (e) => {
            var response = http.responseText;
            var responseJSON = JSON.parse(response); 
            console.log(responseJSON);
            console.log(response);

            var country = responseJSON.results[0].components.country;
            document.getElementById('country').innerHTML = country;
    }
}

function getConvertionToUsd(){

    var amount = window.prompt("Enter your amount to convert to US Dollars: ");
    amount = parseFloat(amount);
    
    const url = 'http://www.apilayer.net/api/convert';
    http.open("GET", url);
    http.send();
    http.onreadystatechange = (e) => {
            var response = http.responseText;
            var responseJSON = JSON.parse('http://www.apilayer.net/api/live?access_key=1ce3a4d3fd79b463e5ad8f9dcd3b6b89'); 
            console.log(responseJSON);
            console.log(response);

           /* {
                "success":true,
                "terms":"https:\/\/currencylayer.com\/terms",
                "privacy":"https:\/\/currencylayer.com\/privacy",
                "timestamp":1571414946,
                "source":"USD",
                "quotes":{
                  "USDUSD":1,
                  "USDAUD":1.460655,
                  "USDCAD":1.31325,
                  "USDPLN":3.84105,
                  "USDMXN":19.147102
                }
              } */

            var usd=1.460655; 
            var totalUsd = amount*usd;

            console.log("Your total money is " + totalUsd);
    }
}

function getConvertionToCad(){

    var amount = window.prompt("Enter your amount to convert to Canadian Dollar: ");
    amount = parseFloat(amount);
    
    const url = 'http://www.apilayer.net/api/convert';
    http.open("GET", url);
    http.send();
    http.onreadystatechange = (e) => {
            var response = http.responseText;
            var responseJSON = JSON.parse(response); 
            console.log(responseJSON);
            console.log(response);

            // Got answer back from the server but were not able to print the information after user inputs information.

           /* {
                "success":true,
                "terms":"https:\/\/currencylayer.com\/terms",
                "privacy":"https:\/\/currencylayer.com\/privacy",
                "timestamp":1571414946,
                "source":"USD",
                "quotes":{
                  "USDUSD":1,
                  "USDAUD":1.460655,
                  "USDCAD":1.31325,
                  "USDPLN":3.84105,
                  "USDMXN":19.147102
                }
              } */

            var cad=1.31325; 
            var totalCad = amount*cad;

            console.log("Your total money is " + totalCad);
    }
}
