const express= require('express');
var expect  = require("chai").expect;
//import { expect } from 'chai';
var request = require("request");


describe("API End-point Testing", function() {

  //Testing No 1

  describe("Get all parcels of 1 user", function() {
    
    var url = "http://localhost:8080/API/v1/users/bobobuya/parcels";

    //console.log(url);

    var result={ 
        "bobobuya":{
           "order1":{
               "Id":"id111",
               "Info":"Laptop1",
             "Weight":"97",
             "Receiver":"Hariyali",
             "Phone": "4521369877",
             "Departure":"Kn12",
             "Destination": "Kn13",
             "Location":"Kn14",
             "Price": "123",
             "Status":"Delivered"
           },
           "order2":{
               "Id":"id121",
               "Info":"Dic",
             "Weight":"7",
             "Receiver":"Kate",
             "Phone": "3554322454",
             "Departure":"Kn12",
             "Destination": "Kn13",
             "Location":"Kn14",
             "Price": "12",
             "Status":"Cancelled"
           }
        }
    };


    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        //console.log(response.statusCode);
        done();
      });
    });

    it("returns the expected result", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal(JSON.stringify(result));
        done();
      });
    });

  });

  // Testing No 2
  describe("Get all parcels of All users", function() {

    var url = "http://localhost:8080/API/v1/parcels";

    var result={
      "bobobuya":{
             "order1":{
               "Id":"id111",
               "Info":"Laptop1",
             "Weight":"97",
             "Receiver":"Hariyali",
             "Phone": "4521369877",
             "Departure":"Kn12",
             "Destination": "Kn13",
             "Location":"Kn14",
             "Price": "123",
             "Status":"Delivered"
           },
           "order2":{
               "Id":"id121",
               "Info":"Dic",
             "Weight":"7",
             "Receiver":"Kate",
             "Phone": "3554322454",
             "Departure":"Kn12",
             "Destination": "Kn13",
             "Location":"Kn14",
             "Price": "12",
             "Status":"Cancelled"
           }
    },

    "hariyalibuya":{
             "order3":{
               "Id":"id131",
               "Info":"Laptyfyuguhp1",
             "Weight":"97",
             "Receiver":"Hanriyali",
             "Phone": "4525669877",
             "Departure":"Kn12",
             "Destination": "Kn013",
             "Location":"Kn014",
             "Price": "1293",
             "Status":"Delivered"
           },
           "order4":{
               "Id":"id141",
               "Info":"Digoutc",
             "Weight":"47",
             "Receiver":"Kattte",
             "Phone": "3554322454",
             "Departure":"Kn012",
             "Destination": "Kn13",
             "Location":"Kn194",
             "Price": "120",
             "Status":"In Progress"
           }
    
  } 


};

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the expected result", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal(JSON.stringify(result));
        done();
      });
    });

  });

  //Testing no 3

  describe("Get 1 parcels of 1 user", function() {

    var url = "http://localhost:8080/API/v1/parcels/id111";

    var result={ 
           "order1":{
               "Id":"id111",
               "Info":"Laptop1",
             "Weight":"97",
             "Receiver":"Hariyali",
             "Phone": "4521369877",
             "Departure":"Kn12",
             "Destination": "Kn13",
             "Location":"Kn14",
             "Price": "123",
             "Status":"Delivered"
           }
    };

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the expected result", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal(JSON.stringify(result));
        done();
      });
    });

  });

});
