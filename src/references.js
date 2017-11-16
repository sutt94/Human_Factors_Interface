import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class References extends Component {


processForm() {
  localStorage.setItem("complete6", '0');
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  var errorDetected = 0;
  var continueLink = document.getElementById("continue");
  var infoMessage = document.getElementById("infoMessage");
  var emailTest = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var phoneTest = /^\d{10}$/;
  infoMessage.style.visibility = 'visible';

  var referenceName = document.getElementById("referenceName").value;
  var referenceTitle = document.getElementById("referenceTitle").value;
  var referenceCompany = document.getElementById("referenceCompany").value;
  var referenceAddress = document.getElementById("referenceAddress").value;
  var referencePhone = document.getElementById("referencePhone").value;
  var referenceEmail = document.getElementById("referenceEmail").value;

  localStorage.setItem("referenceName", referenceName);
  localStorage.setItem("referenceTitle", referenceTitle);
  localStorage.setItem("referenceCompany", referenceCompany);
  localStorage.setItem("referenceAddress", referenceAddress);
  localStorage.setItem("referencePhone", referencePhone);
  localStorage.setItem("referenceEmail", referenceEmail);



  var referenceName2 = document.getElementById("referenceName2").value;
  var referenceTitle2 = document.getElementById("referenceTitle2").value;
  var referenceCompany2 = document.getElementById("referenceCompany2").value;
  var referenceAddress2 = document.getElementById("referenceAddress2").value;
  var referencePhone2 = document.getElementById("referencePhone2").value;
  var referenceEmail2 = document.getElementById("referenceEmail2").value;

  localStorage.setItem("referenceName2", referenceName2);
  localStorage.setItem("referenceTitle2", referenceTitle2);
  localStorage.setItem("referenceCompany2", referenceCompany2);
  localStorage.setItem("referenceAddress2", referenceAddress2);
  localStorage.setItem("referencePhone2", referencePhone2);
  localStorage.setItem("referenceEmail2", referenceEmail2);


  var referenceName3 = document.getElementById("referenceName3").value;
  var referenceTitle3 = document.getElementById("referenceTitle3").value;
  var referenceCompany3 = document.getElementById("referenceCompany3").value;
  var referenceAddress3 = document.getElementById("referenceAddress3").value;
  var referencePhone3 = document.getElementById("referencePhone3").value;
  var referenceEmail3 = document.getElementById("referenceEmail3").value;

  localStorage.setItem("referenceName3", referenceName3);
  localStorage.setItem("referenceTitle3", referenceTitle3);
  localStorage.setItem("referenceCompany3", referenceCompany3);
  localStorage.setItem("referenceAddress3", referenceAddress3);
  localStorage.setItem("referencePhone3", referencePhone3);
  localStorage.setItem("referenceEmail3", referenceEmail3);



  var referenceName4 = document.getElementById("referenceName4").value;
  var referenceTitle4 = document.getElementById("referenceTitle4").value;
  var referenceCompany4 = document.getElementById("referenceCompany4").value;
  var referenceAddress4 = document.getElementById("referenceAddress4").value;
  var referencePhone4 = document.getElementById("referencePhone4").value;
  var referenceEmail4 = document.getElementById("referenceEmail4").value;

  localStorage.setItem("referenceName4", referenceName4);
  localStorage.setItem("referenceTitle4", referenceTitle4);
  localStorage.setItem("referenceCompany4", referenceCompany4);
  localStorage.setItem("referenceAddress4", referenceAddress4);
  localStorage.setItem("referencePhone4", referencePhone4);
  localStorage.setItem("referenceEmail4", referenceEmail4);




  if (document.getElementById("referenceName").value == "" || document.getElementById("referenceName").value == " ") {

    errorDetected = 1;

    document.getElementById("referenceNameLabel").innerHTML = "Name: *Required Information"

    document.getElementById("referenceNameLabel").style.color = "red";

  }
  else{

    document.getElementById("referenceNameLabel").innerHTML = "Name:"

      document.getElementById("referenceNameLabel").style.color = "black";

  }

  if (document.getElementById("referenceTitle").value == "" || document.getElementById("referenceTitle").value == " ") {

    errorDetected = 1;

    document.getElementById("referenceTitleLabel").innerHTML = "Title: *Required Information"

    document.getElementById("referenceTitleLabel").style.color = "red";

  }
  else{

    document.getElementById("referenceTitleLabel").innerHTML = "Title:"

      document.getElementById("referenceTitleLabel").style.color = "black";

  }

  if (document.getElementById("referenceCompany").value == "" || document.getElementById("referenceCompany").value == " ") {

    errorDetected = 1;

    document.getElementById("referenceCompanyLabel").innerHTML = "Company: *Required Information"

    document.getElementById("referenceCompanyLabel").style.color = "red";

  }
  else{

    document.getElementById("referenceCompanyLabel").innerHTML = "Company:"

      document.getElementById("referenceCompanyLabel").style.color = "black";

  }

  if (document.getElementById("referenceAddress").value == "" || document.getElementById("referenceAddress").value == " ") {

    errorDetected = 1;

    document.getElementById("referenceAddressLabel").innerHTML = "Address: *Required Information"

    document.getElementById("referenceAddressLabel").style.color = "red";

  }
  else{

    document.getElementById("referenceAddressLabel").innerHTML = "Address:"

      document.getElementById("referenceAddressLabel").style.color = "black";

  }




  if (document.getElementById("referenceEmail").value == "" || !emailTest.test(document.getElementById("referenceEmail").value)) {

    errorDetected = 1;

    document.getElementById("referenceEmailLabel").innerHTML = "Email: *Invalid Email"

    document.getElementById("referenceEmailLabel").style.color = "red";



  }
  else{

    document.getElementById("referenceEmailLabel").innerHTML = "Email:"

    document.getElementById("referenceEmailLabel").style.color = "black";

  }


  if (document.getElementById("referencePhone").value == "" || !phoneTest.test(document.getElementById("referencePhone").value)) {

    errorDetected = 1;

    document.getElementById("referencePhoneLabel").innerHTML = "Phone: *Invalid Phone"

    document.getElementById("referencePhoneLabel").style.color = "red";



  }
  else{

    document.getElementById("referencePhoneLabel").innerHTML = "Phone:"

    document.getElementById("referencePhoneLabel").style.color = "black";

  }










  if (document.getElementById("referenceName2").value == "" || document.getElementById("referenceName2").value == " ") {

    errorDetected = 1;

    document.getElementById("referenceNameLabel2").innerHTML = "Name: *Required Information"

    document.getElementById("referenceNameLabel2").style.color = "red";

  }
  else{

    document.getElementById("referenceNameLabel2").innerHTML = "Name:"

      document.getElementById("referenceNameLabel2").style.color = "black";

  }

  if (document.getElementById("referenceTitle2").value == "" || document.getElementById("referenceTitle2").value == " ") {

    errorDetected = 1;

    document.getElementById("referenceTitleLabel2").innerHTML = "Title: *Required Information"

    document.getElementById("referenceTitleLabel2").style.color = "red";

  }
  else{

    document.getElementById("referenceTitleLabel2").innerHTML = "Title:"

      document.getElementById("referenceTitleLabel2").style.color = "black";

  }

  if (document.getElementById("referenceCompany2").value == "" || document.getElementById("referenceCompany").value == " ") {

    errorDetected = 1;

    document.getElementById("referenceCompanyLabel2").innerHTML = "Company: *Required Information"

    document.getElementById("referenceCompanyLabel2").style.color = "red";

  }
  else{

    document.getElementById("referenceCompanyLabel2").innerHTML = "Company:"

      document.getElementById("referenceCompanyLabel2").style.color = "black";

  }

  if (document.getElementById("referenceAddress2").value == "" || document.getElementById("referenceAddress").value == " ") {

    errorDetected = 1;

    document.getElementById("referenceAddressLabel2").innerHTML = "Address: *Required Information"

    document.getElementById("referenceAddressLabel2").style.color = "red";

  }
  else{

    document.getElementById("referenceAddressLabel2").innerHTML = "Address:"

      document.getElementById("referenceAddressLabel2").style.color = "black";

  }




  if (document.getElementById("referenceEmail2").value == "" || !emailTest.test(document.getElementById("referenceEmail").value)) {

    errorDetected = 1;

    document.getElementById("referenceEmailLabel2").innerHTML = "Email: *Invalid Email"

    document.getElementById("referenceEmailLabel2").style.color = "red";



  }
  else{

    document.getElementById("referenceEmailLabel2").innerHTML = "Email:"

    document.getElementById("referenceEmailLabel2").style.color = "black";

  }


  if (document.getElementById("referencePhone2").value == "" || !phoneTest.test(document.getElementById("referencePhone").value)) {

    errorDetected = 1;

    document.getElementById("referencePhoneLabel2").innerHTML = "Phone: *Invalid Phone"

    document.getElementById("referencePhoneLabel2").style.color = "red";



  }
  else{

    document.getElementById("referencePhoneLabel2").innerHTML = "Phone:"

    document.getElementById("referencePhoneLabel2").style.color = "black";

  }










  if (document.getElementById("referenceName3").value == "" || document.getElementById("referenceName3").value == " ") {

    errorDetected = 1;

    document.getElementById("referenceNameLabel3").innerHTML = "Name: *Required Information"

    document.getElementById("referenceNameLabel3").style.color = "red";

  }
  else{

    document.getElementById("referenceNameLabel3").innerHTML = "Name:"

      document.getElementById("referenceNameLabel3").style.color = "black";

  }

  if (document.getElementById("referenceTitle3").value == "" || document.getElementById("referenceTitle3").value == " ") {

    errorDetected = 1;

    document.getElementById("referenceTitleLabel3").innerHTML = "Title: *Required Information"

    document.getElementById("referenceTitleLabel3").style.color = "red";

  }
  else{

    document.getElementById("referenceTitleLabel3").innerHTML = "Title:"

      document.getElementById("referenceTitleLabel3").style.color = "black";

  }

  if (document.getElementById("referenceCompany3").value == "" || document.getElementById("referenceCompany").value == " ") {

    errorDetected = 1;

    document.getElementById("referenceCompanyLabel3").innerHTML = "Company: *Required Information"

    document.getElementById("referenceCompanyLabel3").style.color = "red";

  }
  else{

    document.getElementById("referenceCompanyLabel3").innerHTML = "Company:"

      document.getElementById("referenceCompanyLabel3").style.color = "black";

  }

  if (document.getElementById("referenceAddress3").value == "" || document.getElementById("referenceAddress").value == " ") {

    errorDetected = 1;

    document.getElementById("referenceAddressLabel3").innerHTML = "Address: *Required Information"

    document.getElementById("referenceAddressLabel3").style.color = "red";

  }
  else{

    document.getElementById("referenceAddressLabel3").innerHTML = "Address:"

      document.getElementById("referenceAddressLabel3").style.color = "black";

  }




  if (document.getElementById("referenceEmail3").value == "" || !emailTest.test(document.getElementById("referenceEmail").value)) {

    errorDetected = 1;

    document.getElementById("referenceEmailLabel3").innerHTML = "Email: *Invalid Email"

    document.getElementById("referenceEmailLabel3").style.color = "red";



  }
  else{

    document.getElementById("referenceEmailLabel3").innerHTML = "Email:"

    document.getElementById("referenceEmailLabel3").style.color = "black";

  }


  if (document.getElementById("referencePhone3").value == "" || !phoneTest.test(document.getElementById("referencePhone").value)) {

    errorDetected = 1;

    document.getElementById("referencePhoneLabel3").innerHTML = "Phone: *Invalid Phone"

    document.getElementById("referencePhoneLabel3").style.color = "red";



  }
  else{

    document.getElementById("referencePhoneLabel3").innerHTML = "Phone:"

    document.getElementById("referencePhoneLabel3").style.color = "black";

  }











  if (document.getElementById("referenceName4").value == "" || document.getElementById("referenceName4").value == " ") {

    errorDetected = 1;

    document.getElementById("referenceNameLabel4").innerHTML = "Name: *Required Information"

    document.getElementById("referenceNameLabel4").style.color = "red";

  }
  else{

    document.getElementById("referenceNameLabel4").innerHTML = "Name:"

      document.getElementById("referenceNameLabel4").style.color = "black";

  }

  if (document.getElementById("referenceTitle4").value == "" || document.getElementById("referenceTitle4").value == " ") {

    errorDetected = 1;

    document.getElementById("referenceTitleLabel4").innerHTML = "Title: *Required Information"

    document.getElementById("referenceTitleLabel4").style.color = "red";

  }
  else{

    document.getElementById("referenceTitleLabel4").innerHTML = "Title:"

      document.getElementById("referenceTitleLabel4").style.color = "black";

  }

  if (document.getElementById("referenceCompany4").value == "" || document.getElementById("referenceCompany").value == " ") {

    errorDetected = 1;

    document.getElementById("referenceCompanyLabel4").innerHTML = "Company: *Required Information"

    document.getElementById("referenceCompanyLabel4").style.color = "red";

  }
  else{

    document.getElementById("referenceCompanyLabel4").innerHTML = "Company:"

      document.getElementById("referenceCompanyLabel4").style.color = "black";

  }

  if (document.getElementById("referenceAddress4").value == "" || document.getElementById("referenceAddress").value == " ") {

    errorDetected = 1;

    document.getElementById("referenceAddressLabel4").innerHTML = "Address: *Required Information"

    document.getElementById("referenceAddressLabel4").style.color = "red";

  }
  else{

    document.getElementById("referenceAddressLabel4").innerHTML = "Address:"

      document.getElementById("referenceAddressLabel4").style.color = "black";

  }




  if (document.getElementById("referenceEmail4").value == "" || !emailTest.test(document.getElementById("referenceEmail").value)) {

    errorDetected = 1;

    document.getElementById("referenceEmailLabel4").innerHTML = "Email: *Invalid Email"

    document.getElementById("referenceEmailLabel4").style.color = "red";



  }
  else{

    document.getElementById("referenceEmailLabel4").innerHTML = "Email:"

    document.getElementById("referenceEmailLabel4").style.color = "black";

  }


  if (document.getElementById("referencePhone4").value == "" || !phoneTest.test(document.getElementById("referencePhone").value)) {

    errorDetected = 1;

    document.getElementById("referencePhoneLabel4").innerHTML = "Phone: *Invalid Phone"

    document.getElementById("referencePhoneLabel4").style.color = "red";



  }
  else{

    document.getElementById("referencePhoneLabel4").innerHTML = "Phone:"

    document.getElementById("referencePhoneLabel4").style.color = "black";

  }

















  if (errorDetected == 0){

    var complete = '1';
    localStorage.setItem("complete6", complete);

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

  if(localStorage.getItem("complete6") == '1') {
  document.getElementById("continue").style.visibility = 'visible';
    }

  if(localStorage.getItem("referenceName") !== null) {
    this.refs.referenceName.value = localStorage.getItem("referenceName");
    }

    if(localStorage.getItem("referenceTitle") !== null) {
      this.refs.referenceTitle.value = localStorage.getItem("referenceTitle");
      }

      if(localStorage.getItem("referenceCompany") !== null) {
        this.refs.referenceCompany.value = localStorage.getItem("referenceCompany");
        }

        if(localStorage.getItem("referenceAddress") !== null) {
          this.refs.referenceAddress.value = localStorage.getItem("referenceAddress");
          }

          if(localStorage.getItem("referencePhone") !== null) {
            this.refs.referencePhone.value = localStorage.getItem("referencePhone");
            }

            if(localStorage.getItem("referenceEmail") !== null) {
              this.refs.referenceEmail.value = localStorage.getItem("referenceEmail");
              }




              if(localStorage.getItem("referenceName2") !== null) {
                this.refs.referenceName2.value = localStorage.getItem("referenceName2");
                }

                if(localStorage.getItem("referenceTitle2") !== null) {
                  this.refs.referenceTitle2.value = localStorage.getItem("referenceTitle2");
                  }

                  if(localStorage.getItem("referenceCompany2") !== null) {
                    this.refs.referenceCompany2.value = localStorage.getItem("referenceCompany2");
                    }

                    if(localStorage.getItem("referenceAddress2") !== null) {
                      this.refs.referenceAddress2.value = localStorage.getItem("referenceAddress2");
                      }

                      if(localStorage.getItem("referencePhone2") !== null) {
                        this.refs.referencePhone2.value = localStorage.getItem("referencePhone2");
                        }

                        if(localStorage.getItem("referenceEmail2") !== null) {
                          this.refs.referenceEmail2.value = localStorage.getItem("referenceEmail2");
                          }






                          if(localStorage.getItem("referenceName3") !== null) {
                            this.refs.referenceName3.value = localStorage.getItem("referenceName3");
                            }

                            if(localStorage.getItem("referenceTitle3") !== null) {
                              this.refs.referenceTitle3.value = localStorage.getItem("referenceTitle3");
                              }

                              if(localStorage.getItem("referenceCompany3") !== null) {
                                this.refs.referenceCompany3.value = localStorage.getItem("referenceCompany3");
                                }

                                if(localStorage.getItem("referenceAddress3") !== null) {
                                  this.refs.referenceAddress3.value = localStorage.getItem("referenceAddress3");
                                  }

                                  if(localStorage.getItem("referencePhone3") !== null) {
                                    this.refs.referencePhone3.value = localStorage.getItem("referencePhone3");
                                    }

                                    if(localStorage.getItem("referenceEmail3") !== null) {
                                      this.refs.referenceEmail3.value = localStorage.getItem("referenceEmail3");
                                      }




                                      if(localStorage.getItem("referenceName4") !== null) {
                                        this.refs.referenceName4.value = localStorage.getItem("referenceName4");
                                        }

                                        if(localStorage.getItem("referenceTitle4") !== null) {
                                          this.refs.referenceTitle4.value = localStorage.getItem("referenceTitle4");
                                          }

                                          if(localStorage.getItem("referenceCompany4") !== null) {
                                            this.refs.referenceCompany4.value = localStorage.getItem("referenceCompany4");
                                            }

                                            if(localStorage.getItem("referenceAddress4") !== null) {
                                              this.refs.referenceAddress4.value = localStorage.getItem("referenceAddress4");
                                              }

                                              if(localStorage.getItem("referencePhone4") !== null) {
                                                this.refs.referencePhone4.value = localStorage.getItem("referencePhone4");
                                                }

                                                if(localStorage.getItem("referenceEmail4") !== null) {
                                                  this.refs.referenceEmail4.value = localStorage.getItem("referenceEmail4");
                                                  }

}


render() {

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

    <div className="col-md-2">
    </div>

    <div className="col-md-8 text-center small-top-buffer">
      <h3>References</h3><h6>Please provide four references other than family members.(All Fields Required.)</h6>
    </div>

    <div className="col-md-2">
    </div>

  </div>

  <div className="row slight-smaller-bottom-buffer">

    <div className="col-md-3" id="previous">

      <Link to='/WorkHistory' className="btn btn-primary">Previous</Link>

    </div>

    <div className="col-md-6">

      <div className="label label-danger text-center" id="infoMessage" style={{color: "red", visibility: "hidden"}}>There was a problem with some of the data you entered. Please make the requried corrections below before continuing. <i className="fa fa-exclamation-circle" aria-hidden="true"></i></div>

    </div>


    <div className="col-md-3 text-right" id="continue" style={{visibility: "hidden"}}>

      <Link to='/Additional' className="btn btn-success">Continue</Link>

    </div>


  </div>

  <div className='card bg-light medium-bottom-buffer '>
    <div class="card-body">

      <div className="row top-buffer medium-bottom-buffer ">

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceName" id="referenceNameLabel">Name:</label>

            <input type="text" className="form-control" id="referenceName" ref="referenceName" required></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceTitle" id="referenceTitleLabel">Title:</label>

            <input type="text" className="form-control" id="referenceTitle" ref="referenceTitle"></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceCompany" id="referenceCompanyLabel">Company:</label>

            <input type="text" className="form-control" id="referenceCompany" ref="referenceCompany"></input>

          </div>

        </div>

      </div>

      <div className="row top-buffer medium-bottom-buffer">

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceAddress" id="referenceAddressLabel">Address:</label>

            <input type="text" className="form-control" id="referenceAddress" ref="referenceAddress" required></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="referencePhone" id="referencePhoneLabel">Phone:</label>

            <input type="text" className="form-control" id="referencePhone" ref="referencePhone" placeholder="##########"></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceEmail" id="referenceEmailLabel">Email:</label>

            <input type="text" className="form-control" id="referenceEmail" ref="referenceEmail" placeholder="test@test.com"></input>

          </div>

        </div>

      </div>



    </div>

  </div>







  <div className='card bg-light medium-bottom-buffer'>
    <div class="card-body">

      <div className="row top-buffer medium-bottom-buffer ">

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceName2" id="referenceNameLabel2">Name:</label>

            <input type="text" className="form-control" id="referenceName2" ref="referenceName2" required></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceTitle2" id="referenceTitleLabel2">Title:</label>

            <input type="text" className="form-control" id="referenceTitle2" ref="referenceTitle2"></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceCompany2" id="referenceCompanyLabel2">Company:</label>

            <input type="text" className="form-control" id="referenceCompany2" ref="referenceCompany2"></input>

          </div>

        </div>

      </div>

      <div className="row top-buffer medium-bottom-buffer">

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceAddress2" id="referenceAddressLabel2">Address:</label>

            <input type="text" className="form-control" id="referenceAddress2" ref="referenceAddress2" required></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="referencePhone2" id="referencePhoneLabel2">Phone:</label>

            <input type="text" className="form-control" id="referencePhone2" ref="referencePhone2" placeholder="##########"></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceEmail2" id="referenceEmailLabel2">Email:</label>

            <input type="text" className="form-control" id="referenceEmail2" ref="referenceEmail2" placeholder="test@test.com"></input>

          </div>

        </div>

      </div>



    </div>

  </div>







  <div className='card bg-light medium-bottom-buffer'>
    <div class="card-body">

      <div className="row top-buffer medium-bottom-buffer ">

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceName3" id="referenceNameLabel3">Name:</label>

            <input type="text" className="form-control" id="referenceName3" ref="referenceName3" required></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceTitle3" id="referenceTitleLabel3">Title:</label>

            <input type="text" className="form-control" id="referenceTitle3" ref="referenceTitle3"></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceCompany3" id="referenceCompanyLabel3">Company:</label>

            <input type="text" className="form-control" id="referenceCompany3" ref="referenceCompany3"></input>

          </div>

        </div>

      </div>

      <div className="row top-buffer medium-bottom-buffer">

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceAddress3" id="referenceAddressLabel3">Address:</label>

            <input type="text" className="form-control" id="referenceAddress3" ref="referenceAddress3" required></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="referencePhone3" id="referencePhoneLabel3">Phone:</label>

            <input type="text" className="form-control" id="referencePhone3" ref="referencePhone3" placeholder="##########"></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceEmail3" id="referenceEmailLabel3">Email:</label>

            <input type="text" className="form-control" id="referenceEmail3" ref="referenceEmail3" placeholder="test@test.com"></input>

          </div>

        </div>

      </div>



    </div>

  </div>








  <div className='card bg-light'>
    <div class="card-body">

      <div className="row top-buffer medium-bottom-buffer ">

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceName4" id="referenceNameLabel4">Name:</label>

            <input type="text" className="form-control" id="referenceName4" ref="referenceName4" required></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceTitle4" id="referenceTitleLabel4">Title:</label>

            <input type="text" className="form-control" id="referenceTitle4" ref="referenceTitle4"></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceCompany4" id="referenceCompanyLabel4">Company:</label>

            <input type="text" className="form-control" id="referenceCompany4" ref="referenceCompany4"></input>

          </div>

        </div>

      </div>

      <div className="row top-buffer medium-bottom-buffer">

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceAddress4" id="referenceAddressLabel4">Address:</label>

            <input type="text" className="form-control" id="referenceAddress4" ref="referenceAddress4" required></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="referencePhone4" id="referencePhoneLabel4">Phone:</label>

            <input type="text" className="form-control" id="referencePhone4" ref="referencePhone4" placeholder="##########"></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="referenceEmail4" id="referenceEmailLabel4">Email:</label>

            <input type="text" className="form-control" id="referenceEmail4" ref="referenceEmail4" placeholder="test@test.com"></input>

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

}

export default References;
