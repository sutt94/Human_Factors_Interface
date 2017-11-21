import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class JobRelated extends Component {


processForm() {
  localStorage.setItem("complete2", '0');
  localStorage.setItem("complete22", '0');
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  var errorDetected = 0;
  var zipTest = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  var emailTest = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var phoneTest = /^\d{10}$/;
  var continueLink = document.getElementById("continue");
  var infoMessage = document.getElementById("infoMessage");
  var dateTest = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  infoMessage.style.visibility = 'visible';

  var emergencyfirstName = document.getElementById("emergencyfirstName").value;
  var emergencymiddleName = document.getElementById("emergencymiddleName").value;
  var emergencylastName = document.getElementById("emergencylastName").value;
  var emergencystreet = document.getElementById("emergencystreet").value;
  var emergencycity = document.getElementById("emergencycity").value;
  var emergencystate = document.getElementById("emergencystate").value;
  var emergencyzip = document.getElementById("emergencyzip").value;
  var emergencyphone = document.getElementById("emergencyphone").value;
  var emergencyemail = document.getElementById("emergencyemail").value;
  var emergencyrelationship = document.getElementById("emergencyrelationship").value;
  var license = document.getElementById("license").value;
  var licenseNumber = document.getElementById("licenseNumber").value;
  var issueState = document.getElementById("issueState").value;
  var expiration = document.getElementById("expiration").value;
  var accidents = document.getElementById("accidents").value;
  var citations = document.getElementById("citations").value;
  var dui = document.getElementById("dui").value;
  var distracted = document.getElementById("distracted").value;
  var vehicle = document.getElementById("vehicle").value;
  var insurance = document.getElementById("insurance").value;
  var willing = document.getElementById("willing").value;
  var all = document.getElementById("all").checked;
  var monday = document.getElementById("monday").checked;
  var tuesday = document.getElementById("tuesday").checked;
  var wednesday = document.getElementById("wednesday").checked;
  var thursday = document.getElementById("thursday").checked;
  var friday = document.getElementById("friday").checked;
  var saturday = document.getElementById("saturday").checked;
  var sunday = document.getElementById("sunday").checked;
  var hoursAvailable = document.getElementById("hoursAvailable").value;
  var nights = document.getElementById("nights").value;
  var dateAvailable = document.getElementById("dateAvailable").value;
  var fired = document.getElementById("fired").value;

  localStorage.setItem("emergencyfirstName", emergencyfirstName);
  localStorage.setItem("emergencymiddleName", emergencymiddleName);
  localStorage.setItem("emergencylastName", emergencylastName);
  localStorage.setItem("emergencystreet", emergencystreet);
  localStorage.setItem("emergencycity", emergencycity);
  localStorage.setItem("emergencystate", emergencystate);
  localStorage.setItem("emergencyzip", emergencyzip);
  localStorage.setItem("emergencyphone", emergencyphone);
  localStorage.setItem("emergencyemail", emergencyemail);
  localStorage.setItem("emergencyrelationship", emergencyrelationship);
  localStorage.setItem("license", license);
  localStorage.setItem("licenseNumber", licenseNumber);
  localStorage.setItem("issueState", issueState);
  localStorage.setItem("expiration", expiration);
  localStorage.setItem("accidents", accidents);
  localStorage.setItem("citations", citations);
  localStorage.setItem("dui", dui);
  localStorage.setItem("distracted", distracted);
  localStorage.setItem("vehicle", vehicle);
  localStorage.setItem("insurance", insurance);
  localStorage.setItem("willing", willing);
  localStorage.setItem("all", all);
  localStorage.setItem("monday", monday);
  localStorage.setItem("tuesday", tuesday);
  localStorage.setItem("wednesday", wednesday);
  localStorage.setItem("thursday", thursday);
  localStorage.setItem("friday", friday);
  localStorage.setItem("saturday", saturday);
  localStorage.setItem("sunday", sunday);
  localStorage.setItem("hoursAvailable", hoursAvailable);
  localStorage.setItem("nights", nights);
  localStorage.setItem("dateAvailable", dateAvailable);
  localStorage.setItem("fired", fired);

  if(all === false && monday === false && tuesday === false && wednesday === false && thursday === false && friday === false && saturday === false && sunday === false){
    errorDetected = 1;
    document.getElementById("availableDaysLabel").innerHTML = "Days Available for Work: *Required Information"

    document.getElementById("availableDaysLabel").style.color = "red";
  }else{

    document.getElementById("availableDaysLabel").innerHTML = "Days Available for Work:"

      document.getElementById("availableDaysLabel").style.color = "black";

  }

  if (document.getElementById("emergencyfirstName").value == "" || document.getElementById("emergencyfirstName").value == " ") {

    errorDetected = 1;

    document.getElementById("emergencyfirstNameLabel").innerHTML = "First Name: *Required Information"

    document.getElementById("emergencyfirstNameLabel").style.color = "red";

  }
  else{

    document.getElementById("emergencyfirstNameLabel").innerHTML = "First Name:"

      document.getElementById("emergencyfirstNameLabel").style.color = "black";

  }

  if (document.getElementById("emergencymiddleName").value == "" || document.getElementById("emergencymiddleName").value == " ") {

    errorDetected = 1;

    document.getElementById("emergencymiddleNameLabel").innerHTML = "Middle Name: *Required Information"

    document.getElementById("emergencymiddleNameLabel").style.color = "red";

  }
  else{

    document.getElementById("emergencymiddleNameLabel").innerHTML = "Middle Name:"

      document.getElementById("emergencymiddleNameLabel").style.color = "black";



  }

  if (document.getElementById("emergencylastName").value == "" || document.getElementById("emergencylastName").value == " ") {

    errorDetected = 1;

    document.getElementById("emergencylastNameLabel").innerHTML = "Last Name: *Required Information"

    document.getElementById("emergencylastNameLabel").style.color = "red";



  }
  else{

    document.getElementById("emergencylastNameLabel").innerHTML = "Last Name:"

    document.getElementById("emergencylastNameLabel").style.color = "black";

  }

  if (document.getElementById("emergencystreet").value == "" || document.getElementById("emergencystreet").value == " ") {

    errorDetected = 1;

    document.getElementById("emergencystreetLabel").innerHTML = "Street: *Required Information"

    document.getElementById("emergencystreetLabel").style.color = "red";



  }
  else{

    document.getElementById("emergencystreetLabel").innerHTML = "Street:"

    document.getElementById("emergencystreetLabel").style.color = "black";

  }

  if (document.getElementById("emergencycity").value == "" || document.getElementById("emergencycity").value == " ") {

    errorDetected = 1;

    document.getElementById("emergencycityLabel").innerHTML = "City: *Required Information"

    document.getElementById("emergencycityLabel").style.color = "red";



  }
  else{

    document.getElementById("emergencycityLabel").innerHTML = "City:"

    document.getElementById("emergencycityLabel").style.color = "black";

  }

  if (document.getElementById("emergencyzip").value == "" || !zipTest.test(document.getElementById("emergencyzip").value)) {

    errorDetected = 1;

    document.getElementById("emergencyzipLabel").innerHTML = "ZIP Code (5 Digits) *Invalid ZIP"

    document.getElementById("emergencyzipLabel").style.color = "red";



  }
  else{

    document.getElementById("emergencyzipLabel").innerHTML = "ZIP Code (5 Digits)"

    document.getElementById("emergencyzipLabel").style.color = "black";

  }

  if (document.getElementById("emergencyrelationship").value == "" || document.getElementById("emergencyrelationship").value == " ") {

    errorDetected = 1;

    document.getElementById("emergencyrelationshipLabel").innerHTML = "Relationship: *Required Field"

    document.getElementById("emergencyrelationshipLabel").style.color = "red";



  }
  else{

    document.getElementById("emergencyrelationshipLabel").innerHTML = "SSN:"

    document.getElementById("emergencyrelationshipLabel").style.color = "black";

  }

  if (document.getElementById("emergencyphone").value == "" || !phoneTest.test(document.getElementById("emergencyphone").value)) {

    errorDetected = 1;

    document.getElementById("emergencyphoneLabel").innerHTML = "Phone: *Invalid Phone"

    document.getElementById("emergencyphoneLabel").style.color = "red";



  }
  else{

    document.getElementById("emergencyphoneLabel").innerHTML = "Phone:"

    document.getElementById("emergencyphoneLabel").style.color = "black";

  }

  if (document.getElementById("emergencyemail").value == "" || !emailTest.test(document.getElementById("emergencyemail").value)) {

    errorDetected = 1;

    document.getElementById("emergencyemailLabel").innerHTML = "Email: *Invalid Email"

    document.getElementById("emergencyemailLabel").style.color = "red";



  }
  else{

    document.getElementById("emergencyemailLabel").innerHTML = "Email:"

    document.getElementById("emergencyemailLabel").style.color = "black";

  }

  if (document.getElementById("dateAvailable").value == "" || !dateTest.test(document.getElementById("dateAvailable").value)) {

    errorDetected = 1;

    document.getElementById("dateAvailableLabel").innerHTML = "Date Available: *Invalid Date"

    document.getElementById("dateAvailableLabel").style.color = "red";



  }
  else{

    document.getElementById("dateAvailableLabel").innerHTML = "Date Available:"

    document.getElementById("dateAvailableLabel").style.color = "black";

  }

  if (document.getElementById("expiration").value == "" || !dateTest.test(document.getElementById("expiration").value)) {

    errorDetected = 1;

    document.getElementById("expirationLabel").innerHTML = "Expiration Date: *Invalid Date"

    document.getElementById("expirationLabel").style.color = "red";



  }
  else{

    document.getElementById("expirationLabel").innerHTML = "Expiration Date:"

    document.getElementById("expirationLabel").style.color = "black";

  }

  if (document.getElementById("licenseNumber").value == "" || document.getElementById("licenseNumber").value == " ") {

    errorDetected = 1;

    document.getElementById("licenseNumberLabel").innerHTML = "License Number: *Required Field"

    document.getElementById("licenseNumberLabel").style.color = "red";



  }
  else{

    document.getElementById("licenseNumberLabel").innerHTML = "License Number:"

    document.getElementById("licenseNumberLabel").style.color = "black";

  }






  if (errorDetected == 0){

    var complete = '1';
    localStorage.setItem("complete2", complete);

    document.getElementById("infoMessage").innerHTML = "Your information has been saved. Press continue to move on to the next phase of the application " + "<i class='fa fa-check-circle-o' aria-hidden='true'></i>"

      document.getElementById("infoMessage").style.color = "green";

      continueLink.style.visibility = 'visible';


  }

  else if (errorDetected == 1){

    document.getElementById("infoMessage").innerHTML = "There was a problem with some of the data you entered. Please make the required corrections below before continuing " + "<i class='fa fa-exclamation-circle' aria-hidden='true'>"

      document.getElementById("infoMessage").style.color = "red";

      continueLink.style.visibility = 'hidden';

  }





}

processForm2() {
  localStorage.setItem("complete2", '0');
  localStorage.setItem("complete22", '0');
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  var errorDetected = 0;
  var continueLink = document.getElementById("continue");
  var infoMessage = document.getElementById("infoMessage");
  var dateTest = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  var zipTest = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  var emailTest = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var phoneTest = /^\d{10}$/;
  infoMessage.style.visibility = 'visible';

  var emergencyfirstName = document.getElementById("emergencyfirstName").value;
  var emergencymiddleName = document.getElementById("emergencymiddleName").value;
  var emergencylastName = document.getElementById("emergencylastName").value;
  var emergencystreet = document.getElementById("emergencystreet").value;
  var emergencycity = document.getElementById("emergencycity").value;
  var emergencystate = document.getElementById("emergencystate").value;
  var emergencyzip = document.getElementById("emergencyzip").value;
  var emergencyphone = document.getElementById("emergencyphone").value;
  var emergencyemail = document.getElementById("emergencyemail").value;
  var emergencyrelationship = document.getElementById("emergencyrelationship").value;
  var all = document.getElementById("all").checked;
  var monday = document.getElementById("monday").checked;
  var tuesday = document.getElementById("tuesday").checked;
  var wednesday = document.getElementById("wednesday").checked;
  var thursday = document.getElementById("thursday").checked;
  var friday = document.getElementById("friday").checked;
  var saturday = document.getElementById("saturday").checked;
  var sunday = document.getElementById("sunday").checked;
  var hoursAvailable = document.getElementById("hoursAvailable").value;
  var nights = document.getElementById("nights").value;
  var dateAvailable = document.getElementById("dateAvailable").value;
  var fired = document.getElementById("fired").value;

  localStorage.setItem("emergencyfirstName", emergencyfirstName);
  localStorage.setItem("emergencymiddleName", emergencymiddleName);
  localStorage.setItem("emergencylastName", emergencylastName);
  localStorage.setItem("emergencystreet", emergencystreet);
  localStorage.setItem("emergencycity", emergencycity);
  localStorage.setItem("emergencystate", emergencystate);
  localStorage.setItem("emergencyzip", emergencyzip);
  localStorage.setItem("emergencyphone", emergencyphone);
  localStorage.setItem("emergencyemail", emergencyemail);
  localStorage.setItem("emergencyrelationship", emergencyrelationship);
  localStorage.setItem("all", all);
  localStorage.setItem("monday", monday);
  localStorage.setItem("tuesday", tuesday);
  localStorage.setItem("wednesday", wednesday);
  localStorage.setItem("thursday", thursday);
  localStorage.setItem("friday", friday);
  localStorage.setItem("saturday", saturday);
  localStorage.setItem("sunday", sunday);
  localStorage.setItem("hoursAvailable", hoursAvailable);
  localStorage.setItem("nights", nights);
  localStorage.setItem("dateAvailable", dateAvailable);
  localStorage.setItem("fired", fired);


  if(all === false && monday === false && tuesday === false && wednesday === false && thursday === false && friday === false && saturday === false && sunday === false){
    errorDetected = 1;
    document.getElementById("availableDaysLabel").innerHTML = "Days Available for Work: *Required Information"

    document.getElementById("availableDaysLabel").style.color = "red";
  }else{

    document.getElementById("availableDaysLabel").innerHTML = "Days Available for Work:"

      document.getElementById("availableDaysLabel").style.color = "black";

  }

  if (document.getElementById("emergencyfirstName").value == "" || document.getElementById("emergencyfirstName").value == " ") {

    errorDetected = 1;

    document.getElementById("emergencyfirstNameLabel").innerHTML = "First Name: *Required Information"

    document.getElementById("emergencyfirstNameLabel").style.color = "red";

  }
  else{

    document.getElementById("emergencyfirstNameLabel").innerHTML = "First Name:"

      document.getElementById("emergencyfirstNameLabel").style.color = "black";

  }

  if (document.getElementById("emergencymiddleName").value == "" || document.getElementById("emergencymiddleName").value == " ") {

    errorDetected = 1;

    document.getElementById("emergencymiddleNameLabel").innerHTML = "Middle Name: *Required Information"

    document.getElementById("emergencymiddleNameLabel").style.color = "red";

  }
  else{

    document.getElementById("emergencymiddleNameLabel").innerHTML = "Middle Name:"

      document.getElementById("emergencymiddleNameLabel").style.color = "black";



  }

  if (document.getElementById("emergencylastName").value == "" || document.getElementById("emergencylastName").value == " ") {

    errorDetected = 1;

    document.getElementById("emergencylastNameLabel").innerHTML = "Last Name: *Required Information"

    document.getElementById("emergencylastNameLabel").style.color = "red";



  }
  else{

    document.getElementById("emergencylastNameLabel").innerHTML = "Last Name:"

    document.getElementById("emergencylastNameLabel").style.color = "black";

  }

  if (document.getElementById("emergencystreet").value == "" || document.getElementById("emergencystreet").value == " ") {

    errorDetected = 1;

    document.getElementById("emergencystreetLabel").innerHTML = "Street: *Required Information"

    document.getElementById("emergencystreetLabel").style.color = "red";



  }
  else{

    document.getElementById("emergencystreetLabel").innerHTML = "Street:"

    document.getElementById("emergencystreetLabel").style.color = "black";

  }

  if (document.getElementById("emergencycity").value == "" || document.getElementById("emergencycity").value == " ") {

    errorDetected = 1;

    document.getElementById("emergencycityLabel").innerHTML = "City: *Required Information"

    document.getElementById("emergencycityLabel").style.color = "red";



  }
  else{

    document.getElementById("emergencycityLabel").innerHTML = "City:"

    document.getElementById("emergencycityLabel").style.color = "black";

  }

  if (document.getElementById("emergencyzip").value == "" || !zipTest.test(document.getElementById("emergencyzip").value)) {

    errorDetected = 1;

    document.getElementById("emergencyzipLabel").innerHTML = "ZIP Code (5 Digits) *Invalid ZIP"

    document.getElementById("emergencyzipLabel").style.color = "red";



  }
  else{

    document.getElementById("emergencyzipLabel").innerHTML = "ZIP Code (5 Digits)"

    document.getElementById("emergencyzipLabel").style.color = "black";

  }

  if (document.getElementById("emergencyrelationship").value == "" || document.getElementById("emergencyrelationship").value == " ") {

    errorDetected = 1;

    document.getElementById("emergencyrelationshipLabel").innerHTML = "Relationship: *Required Field"

    document.getElementById("emergencyrelationshipLabel").style.color = "red";



  }
  else{

    document.getElementById("emergencyrelationshipLabel").innerHTML = "SSN:"

    document.getElementById("emergencyrelationshipLabel").style.color = "black";

  }

  if (document.getElementById("emergencyphone").value == "" || !phoneTest.test(document.getElementById("emergencyphone").value)) {

    errorDetected = 1;

    document.getElementById("emergencyphoneLabel").innerHTML = "Phone: *Invalid Phone"

    document.getElementById("emergencyphoneLabel").style.color = "red";



  }
  else{

    document.getElementById("emergencyphoneLabel").innerHTML = "Phone:"

    document.getElementById("emergencyphoneLabel").style.color = "black";

  }

  if (document.getElementById("emergencyemail").value == "" || !emailTest.test(document.getElementById("emergencyemail").value)) {

    errorDetected = 1;

    document.getElementById("emergencyemailLabel").innerHTML = "Email: *Invalid Email"

    document.getElementById("emergencyemailLabel").style.color = "red";



  }
  else{

    document.getElementById("emergencyemailLabel").innerHTML = "Email:"

    document.getElementById("emergencyemailLabel").style.color = "black";

  }


  if (errorDetected == 0){

    document.getElementById("infoMessage").innerHTML = "Your information has been saved. Press continue below to continue to the next phase of the application " + "<i class='fa fa-check-circle-o' aria-hidden='true'></i>"

      document.getElementById("infoMessage").style.color = "green";

      continueLink.style.visibility = 'visible';


  }

  if (document.getElementById("dateAvailable").value == "" || !dateTest.test(document.getElementById("dateAvailable").value)) {


    localStorage.setItem("complete2", complete);

    errorDetected = 1;

    document.getElementById("dateAvailableLabel").innerHTML = "Date Available: *Invalid Date"

    document.getElementById("dateAvailableLabel").style.color = "red";



  }
  else{

    document.getElementById("dateAvailableLabel").innerHTML = "Date Available:"

    document.getElementById("dateAvailableLabel").style.color = "black";

  }






  if (errorDetected == 0){

    var complete = '1';
    localStorage.setItem("complete22", complete);

    document.getElementById("infoMessage").innerHTML = "Your information has been saved. Press continue to move on to the next phase of the application " + "<i class='fa fa-check-circle-o' aria-hidden='true'></i>"

      document.getElementById("infoMessage").style.color = "green";

      continueLink.style.visibility = 'visible';


  }

  else if (errorDetected == 1){

    document.getElementById("infoMessage").innerHTML = "There was a problem with some of the data you entered. Please make the required corrections below before continuing " + "<i class='fa fa-exclamation-circle' aria-hidden='true'>"

      document.getElementById("infoMessage").style.color = "red";

      continueLink.style.visibility = 'hidden';

  }
}


componentDidMount () {

  var license = document.getElementById("license");
  var licenseNumber = document.getElementById("licenseNumber");
  var issueState = document.getElementById("issueState");
  var expiration = document.getElementById("expiration");
  var accidents = document.getElementById("accidents");
  var citations = document.getElementById("citations");
  var dui = document.getElementById("dui");
  var distracted = document.getElementById("distracted");
  var vehicle = document.getElementById("vehicle");
  var insurance = document.getElementById("insurance");
  var willing = document.getElementById("willing");

  if(localStorage.getItem("position") == "Driver"){

    localStorage.setItem("complete22", '0');

  }else{
    localStorage.setItem("complete2", '0');

  }


  if(localStorage.getItem("complete22") == '1') {
  document.getElementById("continue").style.visibility = 'visible';
    }

  if(localStorage.getItem("complete2") == '1') {
  document.getElementById("continue").style.visibility = 'visible';
    }
  if(localStorage.getItem("emergencyfirstName") !== null) {
    this.refs.emergencyfirstName.value = localStorage.getItem("emergencyfirstName");
    }

    if(localStorage.getItem("emergencymiddleName") !== null) {
      this.refs.emergencymiddleName.value = localStorage.getItem("emergencymiddleName");
      }

      if(localStorage.getItem("emergencylastName") !== null) {
        this.refs.emergencylastName.value = localStorage.getItem("emergencylastName");
        }

        if(localStorage.getItem("emergencystreet") !== null) {
          this.refs.emergencystreet.value = localStorage.getItem("emergencystreet");
          }

          if(localStorage.getItem("emergencycity") !== null) {
            this.refs.emergencycity.value = localStorage.getItem("emergencycity");
            }

            if(localStorage.getItem("emergencystate") !== null) {
              this.refs.emergencystate.value = localStorage.getItem("emergencystate");
              }

              if(localStorage.getItem("emergencyzip") !== null) {
                this.refs.emergencyzip.value = localStorage.getItem("emergencyzip");
                }

                    if(localStorage.getItem("emergencyphone") !== null) {
                      this.refs.emergencyphone.value = localStorage.getItem("emergencyphone");
                      }

                      if(localStorage.getItem("emergencyemail") !== null) {
                        this.refs.emergencyemail.value = localStorage.getItem("emergencyemail");
                        }

                        if(localStorage.getItem("emergencyrelationship") !== null) {
                          this.refs.emergencyrelationship.value = localStorage.getItem("emergencyrelationship");
                          }

                          if(localStorage.getItem("emergencyzip") !== null) {
                            this.refs.emergencyzip.value = localStorage.getItem("emergencyzip");
                            }

                                if(localStorage.getItem("hoursAvailable") !== null) {
                                  this.refs.hoursAvailable.value = localStorage.getItem("hoursAvailable");
                                  }

                                  if(localStorage.getItem("nights") !== null) {
                                    this.refs.nights.value = localStorage.getItem("nights");
                                    }

                                    if(localStorage.getItem("dateAvailable") !== null) {
                                      this.refs.dateAvailable.value = localStorage.getItem("dateAvailable");
                                      }
                                      if(localStorage.getItem("fired") !== null) {
                                        this.refs.fired.value = localStorage.getItem("fired");
                                        }


                            if(license !== null ){

                              if(localStorage.getItem("license") !== null) {
                                this.refs.license.value = localStorage.getItem("license");
                                }

                              }

                              if(licenseNumber !== null ){
                                if(localStorage.getItem("licenseNumber") !== null && this.refs.licenseNumber.value !== null) {
                                  this.refs.licenseNumber.value = localStorage.getItem("licenseNumber");
                                  }
                                }

                                if(issueState !== null ){
                                  if(localStorage.getItem("issueState") !== null && this.refs.issueState.value !== null) {
                                    this.refs.issueState.value = localStorage.getItem("issueState");
                                    }
                                  }

                                  if(expiration !== null ){
                                    if(localStorage.getItem("expiration") !== null && this.refs.expiration.value !== null) {
                                      this.refs.expiration.value = localStorage.getItem("expiration");
                                      }
                                    }


                                    if(accidents !== null ){
                                      if(localStorage.getItem("accidents") !== null && this.refs.accidents.value !== null) {
                                        this.refs.accidents.value = localStorage.getItem("accidents");
                                        }
                                      }

                                      if(citations !== null ){
                                        if(localStorage.getItem("citations") !== null && this.refs.citations.value !== null) {
                                          this.refs.citations.value = localStorage.getItem("citations");
                                          }
                                        }

                                        if(dui !== null ){
                                          if(localStorage.getItem("dui") !== null && this.refs.dui.value !== null) {
                                            this.refs.dui.value = localStorage.getItem("dui");
                                            }
                                          }

                                          if(distracted !== null ){
                                            if(localStorage.getItem("distracted") !== null && this.refs.distracted.value !== null) {
                                              this.refs.distracted.value = localStorage.getItem("distracted");
                                              }
                                            }
                                            if(vehicle !== null ){
                                              if(localStorage.getItem("vehicle") !== null && this.refs.vehicle.value !== null) {
                                                this.refs.vehicle.value = localStorage.getItem("vehicle");
                                                }
                                              }

                                              if(insurance !== null ){
                                                if(localStorage.getItem("insurance") !== null && this.refs.insurance.value !== null) {
                                                  this.refs.insurance.value = localStorage.getItem("insurance");
                                                  }
                                                }

                                                if(willing !== null ){
                                                  if(localStorage.getItem("willing") !== null && this.refs.willing.value !== null) {
                                                    this.refs.willing.value = localStorage.getItem("willing");
                                                    }
                                                  }

                                                  if(localStorage.getItem("all") === "true") {
                                                    this.refs.all.checked = true;
                                                  }
                                                  if(localStorage.getItem("monday") === "true") {
                                                    this.refs.monday.checked = true;
                                                  }
                                                  if(localStorage.getItem("tuesday") === "true") {
                                                    this.refs.tuesday.checked = true;
                                                  }
                                                  if(localStorage.getItem("wednesday") === "true") {
                                                    this.refs.wednesday.checked = true;
                                                  }
                                                  if(localStorage.getItem("thursday") === "true") {
                                                    this.refs.thursday.checked = true;
                                                  }
                                                  if(localStorage.getItem("friday") === "true") {
                                                    this.refs.friday.checked = true;
                                                  }
                                                  if(localStorage.getItem("saturday") === "true") {
                                                    this.refs.saturday.checked = true;
                                                  }
                                                  if(localStorage.getItem("sunday") === "true") {
                                                    this.refs.sunday.checked = true;
                                                  }






}

render() {
 if(localStorage.getItem("position") == "Driver"){
  return(

    <div className="container">

      <div className="jumbotron text-center small-bottom-buffer">

        <h1>UNFinished Busines</h1>

        <h4>Application For Employment</h4>

        <div className="top-buffer">

          <h6>Please fill out the information below and click save to store your information. If there are no issues with your data you will be able to continue to the next phase of the application.</h6>


        </div>

      </div>

      <div className="row">

        <div className="col-md-3">
        </div>

        <div className="col-md-6 text-center small-top-buffer">
          <h3>Driver Information</h3><h6>(All Fields Required For Driver Position)</h6>
        </div>

        <div className="col-md-3">
        </div>

      </div>

      <div className="row slight-smaller-bottom-buffer">

        <div className="col-md-3" id="previous">

          <Link to='/' className="btn btn-primary">Previous</Link>

        </div>

        <div className="col-md-6">

          <div className="label label-danger text-center" id="infoMessage" style={{color: "red", visibility: "hidden"}}>There was a problem with some of the data you entered. Please make the requried corrections below before continuing. <i className="fa fa-exclamation-circle" aria-hidden="true"></i></div>

        </div>


        <div className="col-md-3 text-right" id="continue" style={{visibility: "hidden"}}>

          <Link to='/CriminalHistory' className="btn btn-success">Continue</Link>

        </div>


      </div>

      <div className='card bg-light medium-bottom-buffer '>
        <div class="card-body">

          <div className="row medium-bottom-buffer">

            <div className="col-md-3">

              <div className="form-group">

                <label for="license" id="licenseLabel" >Do you have a driver's license?</label>

                <select className="form-control" id="license" name="license" ref="license">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>

              </div>

            </div>

            <div className="col-md-4">

              <div className="form-group">

                <label for="licenseNumber" id="licenseNumberLabel">Driver's License Number:</label>

                <input type="text" className="form-control" id="licenseNumber" ref="licenseNumber" required></input>

              </div>

            </div>

            <div className="col-md-2">

              <div className="form-group">

                <label for="issueState" id="issueStateLabel" >State Of Issue:</label>

                <select className="form-control" id="issueState" name="issueState" ref="issueState">
                  <option value="AK">Alaska</option>
                  <option value="AL">Alabama</option>
                  <option value="AR">Arkansas</option>
                  <option value="AZ">Arizona</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DC">District of Columbia</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="IA">Iowa</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MD">Maryland</option>
                  <option value="ME">Maine</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MO">Missouri</option>
                  <option value="MS">Mississippi</option>
                  <option value="MT">Montana</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="NE">Nebraska</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NV">Nevada</option>
                  <option value="NY">New York</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VA">Virginia</option>
                  <option value="VT">Vermont</option>
                  <option value="WA">Washington</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WV">West Virginia</option>
                  <option value="WY">Wyoming</option>
                </select>

              </div>

            </div>

            <div className="col-md-3">

              <div className="form-group">

                <label for="expiration" id="expirationLabel">Expiration Date:</label>

                <input type="text" className="form-control" id="expiration" ref="expiration" placeholder="mm/dd/yyyy" required></input>

              </div>

            </div>

          </div>

          <div className="row">

            <div className="col-md-3">

              <div className="form-group">

                <label for="accidents" id="accidentsLabel" >How many traffic accidents have you had in the past 3 years?</label>

                <select className="form-control" id="accidents" name="accidents" ref="accidents">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="More than 3">More than 3</option>
                </select>

              </div>

            </div>

            <div className="col-md-3">

              <div className="form-group">

                <label for="citations" id="citationsLabel" >How many traffic citations have you had in the past 3 years?</label>

                <select className="form-control" id="citations" name="citations" ref="citations">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="More than 3">More than 3</option>
                </select>

              </div>

            </div>

            <div className="col-md-3">

              <div className="form-group">

                <label for="dui" id="duiLabel" >Have you ever been convicted of drinking and driving?</label>

                <select className="form-control" id="dui" name="dui" ref="dui">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>

              </div>

            </div>

            <div className="col-md-3">

              <div className="form-group">

                <label for="distracted" id="distractedLabel" >Have you ever been convicted of distracted driving?</label>

                <select className="form-control" id="distracted" name="distracted" ref="distracted">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>

              </div>

            </div>




          </div>

          <div className="row">

            <div className="col-md-3">

              <div className="form-group">

                <label for="vehicle" id="vehicleLabel" >Do you own a vehicle?</label>

                <select className="form-control" id="vehicle" name="vehicle" ref="vehicle">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>

              </div>

            </div>

            <div className="col-md-3">

              <div className="form-group">

                <label for="insurance" id="insuranceLabel" >Do you have car insurance?</label>

                <select className="form-control" id="insurance" name="insurance" ref="insurance">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>

              </div>

            </div>

            <div className="col-md-6">

              <div className="form-group">

                <label for="willing" id="willingLabel" >Are you willing to drive your own vehicle as part of your duties?</label>

                <select className="form-control" id="willing" name="willing" ref="willing">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>

              </div>

            </div>

          </div>

        </div>
      </div>

      <div className="row medium-bottom-buffer">

        <div className="col-md-3">
        </div>

        <div className="col-md-6 text-center header-spacing">
          <h3>Schedule Availability</h3><h6>(All Fields Required)</h6>
        </div>

        <div className="col-md-3">
        </div>

      </div>

      <div className='card bg-light medium-bottom-buffer '>
        <div class="card-body">

          <div className="row smaller-bottom-buffer">


            <div className="col-md-5">

              <label for="availableDays" id="availableDaysLabel" >Days Available for Work:</label>
              <br/>

              <div className="form-check-inline" id="availableDays">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" id="all" ref="all" />
                  All
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="monday" id="monday" ref="monday" />
                  Monday
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="tuesday" id="tuesday" ref="tuesday" />
                  Tuesday
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="wednesday" id="wednesday" ref="wednesday" />
                  Wednesday
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="thursday"  id="thursday" ref="thursday"/>
                  Thursday
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="friday" id="friday" ref="friday" />
                  Friday
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="saturday" id="saturday" ref="saturday" />
                  Saturday
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="sunday" id="sunday" ref="sunday" />
                  Sunday
                </label>
              </div>

            </div>

            <div className="col-md-3">

              <div className="form-group">

                <label for="hoursAvailable" id="hoursAvailableLabel" >Weekly Hours Available</label>

                <select className="form-control" id="hoursAvailable" name="hoursAvailable" ref="hoursAvailable">
                  <option value="0-10">0-10</option>
                  <option value="11-20">11-20</option>
                  <option value="21-30">21-30</option>
                  <option value="31-40">31-40</option>
                  <option value="40+">40+</option>
                </select>

              </div>

            </div>

            <div className="col-md-4">

              <div className="form-group">

                <label for="nights" id="nightsLabel" >Can you work nights?</label>

                <select className="form-control" id="nights" name="nights" ref="nights">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>

              </div>

            </div>






          </div>

          <div className="row">

            <div className="col-md-4">

              <div className="form-group">

                <label for="dateAvailable" id="dateAvailableLabel">Date Available for Work:</label>

                <input type="text" className="form-control" id="dateAvailable" ref="dateAvailable" placeholder="mm/dd/yyyy" required></input>

              </div>


            </div>

            <div className="col-md-3 offset-md-1">

              <div className="form-group">

                <label for="fired" id="firedLabel" >Have you been fired from a job?</label>

                <select className="form-control" id="fired" name="fired" ref="fired">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>

              </div>

            </div>



          </div>
        </div>
      </div>

      <div className="row header-spacing">

        <div className="col-md-3">
        </div>

        <div className="col-md-6 text-center">
          <h3>Emergency Contact Information</h3><h6>Who should we contact in case of an emergency?(All Fields Required)</h6>
        </div>

        <div className="col-md-3">
        </div>

      </div>

      <div className='card bg-light medium-bottom-buffer '>
        <div class="card-body">


          <div className="row top-buffer medium-bottom-buffer">

            <div className="col-md-4">

              <div className="form-group">

                <label for="emergencyfirstName" id="emergencyfirstNameLabel">First Name:</label>

                <input type="text" className="form-control" id="emergencyfirstName" ref="emergencyfirstName" required></input>

              </div>

            </div>

            <div className="col-md-4">

              <div className="form-group">

                <label for="emergencymiddleName" id="emergencymiddleNameLabel">Middle Name:</label>

                <input type="text" className="form-control" id="emergencymiddleName" ref="emergencymiddleName"></input>

              </div>

            </div>

            <div className="col-md-4">

              <div className="form-group">

                <label for="emergencylastName" id="emergencylastNameLabel">Last Name:</label>

                <input type="text" className="form-control" id="emergencylastName" ref="emergencylastName"></input>

              </div>

            </div>

          </div>


          <div className="row medium-bottom-buffer">

            <div className="col-md-6">

              <div className="form-group">

                <label for="emergencystreet" id="emergencystreetLabel">Street:</label>

                <input type="text" className="form-control" id="emergencystreet" ref="emergencystreet"></input>

              </div>


            </div>

            <div className="col-md-3">

              <div className="form-group">

                <label for="emergencycity" id="emergencycityLabel">City:</label>

                <input type="text" className="form-control" id="emergencycity" ref="emergencycity"></input>

              </div>


            </div>

            <div className="col-md-3">

              <div className="form-group">

                <label for="emergencystate" id="emergencystateLabel" >State:</label>

                <select className="form-control" id="emergencystate" name="emergencystate" ref="emergencystate">
                  <option value="AK">Alaska</option>
                  <option value="AL">Alabama</option>
                  <option value="AR">Arkansas</option>
                  <option value="AZ">Arizona</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DC">District of Columbia</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="IA">Iowa</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MD">Maryland</option>
                  <option value="ME">Maine</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MO">Missouri</option>
                  <option value="MS">Mississippi</option>
                  <option value="MT">Montana</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="NE">Nebraska</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NV">Nevada</option>
                  <option value="NY">New York</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VA">Virginia</option>
                  <option value="VT">Vermont</option>
                  <option value="WA">Washington</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WV">West Virginia</option>
                  <option value="WY">Wyoming</option>
                </select>

              </div>

            </div>


          </div>



          <div className="row medium-bottom-buffer">

            <div className="col-md-3">

              <div className="form-group">

                <label for="emergencyzip" id="emergencyzipLabel">ZIP Code (5 Digits)</label>

                <input type="text" className="form-control" id="emergencyzip" ref="emergencyzip" pattern="[0-9]{5}" title="Five digit zip code" placeholder="#####" />

              </div>

            </div>


            <div className="col-md-3">

              <div className="form-group">


                <label className="control-label" for="emergencyrelationship" id="emergencyrelationshipLabel">Relationship:</label>

                <input type="email" class="form-control" id="emergencyrelationship" ref="emergencyrelationship"></input>


              </div>

            </div>

            <div className="col-md-3">

              <div className="form-group">


                <label className="control-label" for="emergencyphone" id="emergencyphoneLabel">Phone Number:</label>

                <input type="email" class="form-control" id="emergencyphone" ref="emergencyphone" placeholder="##########" maxlength="10"></input>


              </div>

            </div>

            <div className="col-md-3">

              <div className="form-group">


                <label className="control-label" for="emergencyemail" id="emergencyemailLabel">Email:</label>

                <input type="email" class="form-control" id="emergencyemail" ref="emergencyemail" placeholder="example@example.com"></input>


              </div>

            </div>

          </div>

        </div>
      </div>



      <div className="row bottom-buffer">

        <div className="col-md-4">
        </div>

        <div className="col-md-4 text-center">

          <button type="button" className="btn btn-primary" onClick={this.processForm}>Save Information</button>

        </div>

        <div className="col-md-4">
        </div>

      </div>

    </div>
  )

}

else{
  return(

    <div className="container">

      <div className="jumbotron text-center small-bottom-buffer">

        <h1>UNFinished Busines</h1>

        <h4>Application For Employment</h4>

        <div className="top-buffer">

          <h6>Please fill out the information below and click save to store your information. If there are no issues with your data you will be able to continue to the next phase of the application.</h6>


        </div>

      </div>



      <div className="row medium-bottom-buffer">

        <div className="col-md-3">
        </div>

        <div className="col-md-6 text-center small-top-buffer smaller-bottom-buffer">
          <h3>Schedule Availability</h3><h6>(All Fields Required)</h6>
        </div>

        <div className="col-md-3">
        </div>

      </div>



      <div className="row slight-smaller-bottom-buffer">

        <div className="col-md-3" id="previous">

          <Link to='/' className="btn btn-primary">Previous</Link>

        </div>

        <div className="col-md-6">

          <div className="label label-danger text-center" id="infoMessage" style={{color: "red", visibility: "hidden"}}>There was a problem with some of the data you entered. Please make the requried corrections below before continuing. <i className="fa fa-exclamation-circle" aria-hidden="true"></i></div>

        </div>


        <div className="col-md-3 text-right" id="continue" style={{visibility: "hidden"}}>

          <Link to='/CriminalHistory' className="btn btn-success" onClick={this.formComplete}>Continue</Link>

        </div>


      </div>

      <div className='card bg-light medium-bottom-buffer '>
        <div class="card-body">


          <div className="row smaller-bottom-buffer">


            <div className="col-md-5">

              <label for="availableDays" id="availableDaysLabel" >Days Available for Work:</label>
              <br/>

              <div className="form-check-inline" id="availableDays">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" id="all" ref="all" />
                  All
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="monday" id="monday" ref="monday" />
                  Monday
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="tuesday" id="tuesday" ref="tuesday" />
                  Tuesday
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="wednesday" id="wednesday" ref="wednesday" />
                  Wednesday
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="thursday"  id="thursday" ref="thursday"/>
                  Thursday
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="friday" id="friday" ref="friday" />
                  Friday
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="saturday" id="saturday" ref="saturday" />
                  Saturday
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="sunday" id="sunday" ref="sunday" />
                  Sunday
                </label>
              </div>

            </div>

            <div className="col-md-3">

              <div className="form-group">

                <label for="hoursAvailable" id="hoursAvailableLabel" >Weekly Hours Available</label>

                <select className="form-control" id="hoursAvailable" name="hoursAvailable" ref="hoursAvailable">
                  <option value="0-10">0-10</option>
                  <option value="11-20">11-20</option>
                  <option value="21-30">21-30</option>
                  <option value="31-40">31-40</option>
                  <option value="40+">40+</option>
                </select>

              </div>

            </div>

            <div className="col-md-4">

              <div className="form-group">

                <label for="nights" id="nightsLabel" >Can you work nights?</label>

                <select className="form-control" id="nights" name="nights" ref="nights">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>

              </div>

            </div>






          </div>

          <div className="row">

            <div className="col-md-4">

              <div className="form-group">

                <label for="dateAvailable" id="dateAvailableLabel">Date Available for Work:</label>

                <input type="text" className="form-control" id="dateAvailable" ref="dateAvailable" placeholder="mm/dd/yyyy" required></input>

              </div>


            </div>

            <div className="col-md-3 offset-md-1">

              <div className="form-group">

                <label for="fired" id="firedLabel" >Have you been fired from a job?</label>

                <select className="form-control" id="fired" name="fired" ref="fired">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>

              </div>

            </div>



          </div>

        </div>
      </div>

      <div className="row">

        <div className="col-md-3">
        </div>

        <div className="col-md-6 text-center header-spacing">
          <h3>Emergency Contact Information</h3><h6>Who should we contact in case of an emergency?(All Fields Required)</h6>
        </div>

        <div className="col-md-3">
        </div>

      </div>

      <div className='card bg-light medium-bottom-buffer '>
        <div class="card-body">


          <div className="row top-buffer medium-bottom-buffer">

            <div className="col-md-4">

              <div className="form-group">

                <label for="emergencyfirstName" id="emergencyfirstNameLabel">First Name:</label>

                <input type="text" className="form-control" id="emergencyfirstName" ref="emergencyfirstName" required></input>

              </div>

            </div>

            <div className="col-md-4">

              <div className="form-group">

                <label for="emergencymiddleName" id="emergencymiddleNameLabel">Middle Name:</label>

                <input type="text" className="form-control" id="emergencymiddleName" ref="emergencymiddleName"></input>

              </div>

            </div>

            <div className="col-md-4">

              <div className="form-group">

                <label for="emergencylastName" id="emergencylastNameLabel">Last Name:</label>

                <input type="text" className="form-control" id="emergencylastName" ref="emergencylastName"></input>

              </div>

            </div>

          </div>


          <div className="row medium-bottom-buffer">

            <div className="col-md-6">

              <div className="form-group">

                <label for="emergencystreet" id="emergencystreetLabel">Street:</label>

                <input type="text" className="form-control" id="emergencystreet" ref="emergencystreet"></input>

              </div>


            </div>

            <div className="col-md-3">

              <div className="form-group">

                <label for="emergencycity" id="emergencycityLabel">City:</label>

                <input type="text" className="form-control" id="emergencycity" ref="emergencycity"></input>

              </div>


            </div>

            <div className="col-md-3">

              <div className="form-group">

                <label for="emergencystate" id="emergencystateLabel" >State:</label>

                <select className="form-control" id="emergencystate" name="emergencystate" ref="emergencystate">
                  <option value="AK">Alaska</option>
                  <option value="AL">Alabama</option>
                  <option value="AR">Arkansas</option>
                  <option value="AZ">Arizona</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DC">District of Columbia</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="IA">Iowa</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MD">Maryland</option>
                  <option value="ME">Maine</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MO">Missouri</option>
                  <option value="MS">Mississippi</option>
                  <option value="MT">Montana</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="NE">Nebraska</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NV">Nevada</option>
                  <option value="NY">New York</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VA">Virginia</option>
                  <option value="VT">Vermont</option>
                  <option value="WA">Washington</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WV">West Virginia</option>
                  <option value="WY">Wyoming</option>
                </select>

              </div>

            </div>


          </div>



          <div className="row medium-bottom-buffer">

            <div className="col-md-3">

              <div className="form-group">

                <label for="emergencyzip" id="emergencyzipLabel">ZIP Code (5 Digits)</label>

                <input type="text" className="form-control" id="emergencyzip" ref="emergencyzip" pattern="[0-9]{5}" title="Five digit zip code" placeholder="#####" />

              </div>

            </div>


            <div className="col-md-3">

              <div className="form-group">


                <label className="control-label" for="emergencyrelationship" id="emergencyrelationshipLabel">Relationship:</label>

                <input type="email" class="form-control" id="emergencyrelationship" ref="emergencyrelationship"></input>


              </div>

            </div>

            <div className="col-md-3">

              <div className="form-group">


                <label className="control-label" for="emergencyphone" id="emergencyphoneLabel">Phone Number:</label>

                <input type="email" class="form-control" id="emergencyphone" ref="emergencyphone" placeholder="##########" maxlength="10"></input>


              </div>

            </div>

            <div className="col-md-3">

              <div className="form-group">


                <label className="control-label" for="emergencyemail" id="emergencyemailLabel">Email:</label>

                <input type="email" class="form-control" id="emergencyemail" ref="emergencyemail" placeholder="example@example.com"></input>


              </div>

            </div>

          </div>

        </div>
      </div>



      <div className="row bottom-buffer">

        <div className="col-md-4">
        </div>

        <div className="col-md-4 text-center">

          <button type="button" className="btn btn-primary" onClick={this.processForm2}>Save Information</button>

        </div>

        <div className="col-md-4">
        </div>

      </div>



    </div>

  )


}

}

}

export default JobRelated;
