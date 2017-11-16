import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Experience extends Component {


processForm() {
  localStorage.setItem("complete5", '0');
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  var continueLink = document.getElementById("continue");
  var infoMessage = document.getElementById("infoMessage");
  infoMessage.style.visibility = 'visible';
  var dateTest = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  var emailTest = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var phoneTest = /^\d{10}$/;
  var errorDetected = 0;

  var employerName = document.getElementById("employerName").value;
  var employerAddress = document.getElementById("employerAddress").value;
  var employerPhone = document.getElementById("employerPhone").value;
  var employerEmail = document.getElementById("employerEmail").value;
  var supervisor = document.getElementById("supervisor").value;
  var title = document.getElementById("title").value;
  var startDate = document.getElementById("startDate").value;
  var endDate = document.getElementById("endDate").value;
  var startSalary = document.getElementById("startSalary").value;
  var endSalary = document.getElementById("endSalary").value;
  var leave = document.getElementById("leave").value;
  var contact = document.getElementById("contact").value;
  var duties = document.getElementById("duties").value;

  localStorage.setItem("employerName", employerName);
  localStorage.setItem("employerAddress", employerAddress);
  localStorage.setItem("employerPhone", employerPhone);
  localStorage.setItem("employerEmail", employerEmail);
  localStorage.setItem("supervisor", supervisor);
  localStorage.setItem("startDate", startDate);
  localStorage.setItem("endDate", endDate);
  localStorage.setItem("startSalary", startSalary);
  localStorage.setItem("endSalary", endSalary);
  localStorage.setItem("leave", leave);
  localStorage.setItem("contact", contact);
  localStorage.setItem("duties", duties);
  localStorage.setItem("title", title);


  var employerName2 = document.getElementById("employerName2").value;
  var employerAddress2 = document.getElementById("employerAddress2").value;
  var employerPhone2 = document.getElementById("employerPhone2").value;
  var employerEmail2 = document.getElementById("employerEmail2").value;
  var supervisor2 = document.getElementById("supervisor2").value;
  var title2 = document.getElementById("title2").value;
  var startDate2 = document.getElementById("startDate2").value;
  var endDate2 = document.getElementById("endDate2").value;
  var startSalary2 = document.getElementById("startSalary2").value;
  var endSalary2 = document.getElementById("endSalary2").value;
  var leave2 = document.getElementById("leave2").value;
  var contact2 = document.getElementById("contact2").value;
  var duties2 = document.getElementById("duties2").value;

  localStorage.setItem("employerName2", employerName2);
  localStorage.setItem("employerAddress2", employerAddress2);
  localStorage.setItem("employerPhone2", employerPhone2);
  localStorage.setItem("employerEmail2", employerEmail2);
  localStorage.setItem("supervisor2", supervisor2);
  localStorage.setItem("startDate2", startDate2);
  localStorage.setItem("endDate2", endDate2);
  localStorage.setItem("startSalary2", startSalary2);
  localStorage.setItem("endSalary2", endSalary2);
  localStorage.setItem("leave2", leave2);
  localStorage.setItem("contact2", contact2);
  localStorage.setItem("duties2", duties2);
  localStorage.setItem("title2", title2);

  var employerName3 = document.getElementById("employerName3").value;
  var employerAddress3 = document.getElementById("employerAddress3").value;
  var employerPhone3 = document.getElementById("employerPhone3").value;
  var employerEmail3 = document.getElementById("employerEmail3").value;
  var supervisor3 = document.getElementById("supervisor3").value;
  var title3 = document.getElementById("title3").value;
  var startDate3 = document.getElementById("startDate3").value;
  var endDate3 = document.getElementById("endDate3").value;
  var startSalary3 = document.getElementById("startSalary3").value;
  var endSalary3 = document.getElementById("endSalary3").value;
  var leave3 = document.getElementById("leave3").value;
  var contact3 = document.getElementById("contact3").value;
  var duties3 = document.getElementById("duties3").value;

  localStorage.setItem("employerName3", employerName3);
  localStorage.setItem("employerAddress3", employerAddress3);
  localStorage.setItem("employerPhone3", employerPhone3);
  localStorage.setItem("employerEmail3", employerEmail3);
  localStorage.setItem("supervisor3", supervisor3);
  localStorage.setItem("startDate3", startDate3);
  localStorage.setItem("endDate3", endDate3);
  localStorage.setItem("startSalary3", startSalary3);
  localStorage.setItem("endSalary3", endSalary3);
  localStorage.setItem("leave3", leave3);
  localStorage.setItem("contact3", contact3);
  localStorage.setItem("duties3", duties3);
  localStorage.setItem("title3", title3);



  if(document.getElementById("startDate").value == ""){

    document.getElementById("startDateLabel").innerHTML = "Start Date:"

    document.getElementById("startDateLabel").style.color = "black";

  }

  if(document.getElementById("startDate").value !== ""){

  if (!dateTest.test(document.getElementById("startDate").value)) {

    errorDetected = 1;

    document.getElementById("startDateLabel").innerHTML = "Start Date: *Invalid Date"

    document.getElementById("startDateLabel").style.color = "red";

  }else{

    document.getElementById("startDateLabel").innerHTML = "Start Date:"

    document.getElementById("startDateLabel").style.color = "black";

  }

  }

  if(document.getElementById("endDate").value == ""){

    document.getElementById("endDateLabel").innerHTML = "End Date:"

    document.getElementById("endDateLabel").style.color = "black";

  }

  if(document.getElementById("endDate").value !== ""){

  if (!dateTest.test(document.getElementById("endDate").value)) {

    errorDetected = 1;

    document.getElementById("endDateLabel").innerHTML = "End Date: *Invalid Date"

    document.getElementById("endDateLabel").style.color = "red";

  }else{

    document.getElementById("endDateLabel").innerHTML = "End Date:"

    document.getElementById("endDateLabel").style.color = "black";

  }

  }

  if(document.getElementById("employerPhone").value == ""){

    document.getElementById("employerPhoneLabel").innerHTML = "Phone Number:"

    document.getElementById("employerPhoneLabel").style.color = "black";

  }

  if(document.getElementById("employerPhone").value !== ""){

  if (!phoneTest.test(document.getElementById("employerPhone").value)) {

    errorDetected = 1;

    document.getElementById("employerPhoneLabel").innerHTML = "Phone Number: *Invalid phone"

    document.getElementById("employerPhoneLabel").style.color = "red";

  }else{

    document.getElementById("employerPhoneLabel").innerHTML = "Phone Number:"

    document.getElementById("employerPhoneLabel").style.color = "black";

  }

  }

  if(document.getElementById("employerEmail").value == ""){

    document.getElementById("employerEmailLabel").innerHTML = "Email:"

    document.getElementById("employerEmailLabel").style.color = "black";

  }

  if(document.getElementById("employerEmail").value !== ""){

  if (!emailTest.test(document.getElementById("employerEmail").value)) {

    errorDetected = 1;

    document.getElementById("employerEmailLabel").innerHTML = "Email: *Invalid Email"

    document.getElementById("employerEmailLabel").style.color = "red";

  }else{

    document.getElementById("employerEmailLabel").innerHTML = "Email:"

    document.getElementById("employerEmailLabel").style.color = "black";

  }

  }






  if(document.getElementById("startDate2").value == ""){

    document.getElementById("startDateLabel2").innerHTML = "Start Date:"

    document.getElementById("startDateLabel2").style.color = "black";

  }

  if(document.getElementById("startDate2").value !== ""){

  if (!dateTest.test(document.getElementById("startDate2").value)) {

    errorDetected = 1;

    document.getElementById("startDateLabel2").innerHTML = "Start Date: *Invalid Date"

    document.getElementById("startDateLabel2").style.color = "red";

  }else{

    document.getElementById("startDateLabel2").innerHTML = "Start Date:"

    document.getElementById("startDateLabel2").style.color = "black";

  }

  }

  if(document.getElementById("endDate2").value == ""){

    document.getElementById("endDateLabel2").innerHTML = "End Date:"

    document.getElementById("endDateLabel2").style.color = "black";

  }

  if(document.getElementById("endDate2").value !== ""){

  if (!dateTest.test(document.getElementById("endDate2").value)) {

    errorDetected = 1;

    document.getElementById("endDateLabel2").innerHTML = "End Date: *Invalid Date"

    document.getElementById("endDateLabel2").style.color = "red";

  }else{

    document.getElementById("endDateLabel2").innerHTML = "End Date:"

    document.getElementById("endDateLabel2").style.color = "black";

  }

  }

  if(document.getElementById("employerPhone2").value == ""){

    document.getElementById("employerPhoneLabel2").innerHTML = "Phone Number:"

    document.getElementById("employerPhoneLabel2").style.color = "black";

  }

  if(document.getElementById("employerPhone2").value !== ""){

  if (!phoneTest.test(document.getElementById("employerPhone2").value)) {

    errorDetected = 1;

    document.getElementById("employerPhoneLabel2").innerHTML = "Phone Number: *Invalid phone"

    document.getElementById("employerPhoneLabel2").style.color = "red";

  }else{

    document.getElementById("employerPhoneLabel2").innerHTML = "Phone Number:"

    document.getElementById("employerPhoneLabel2").style.color = "black";

  }

  }

  if(document.getElementById("employerEmail2").value == ""){

    document.getElementById("employerEmailLabel2").innerHTML = "Email:"

    document.getElementById("employerEmailLabel2").style.color = "black";

  }

  if(document.getElementById("employerEmail2").value !== ""){

  if (!emailTest.test(document.getElementById("employerEmail2").value)) {

    errorDetected = 1;

    document.getElementById("employerEmailLabel2").innerHTML = "Email: *Invalid Email"

    document.getElementById("employerEmailLabel2").style.color = "red";

  }else{

    document.getElementById("employerEmailLabel2").innerHTML = "Email:"

    document.getElementById("employerEmailLabel2").style.color = "black";

  }

  }



  if(document.getElementById("startDate3").value == ""){

    document.getElementById("startDateLabel3").innerHTML = "Start Date:"

    document.getElementById("startDateLabel3").style.color = "black";

  }

  if(document.getElementById("startDate3").value !== ""){

  if (!dateTest.test(document.getElementById("startDate3").value)) {

    errorDetected = 1;

    document.getElementById("startDateLabel3").innerHTML = "Start Date: *Invalid Date"

    document.getElementById("startDateLabel3").style.color = "red";

  }else{

    document.getElementById("startDateLabel3").innerHTML = "Start Date:"

    document.getElementById("startDateLabel3").style.color = "black";

  }

  }

  if(document.getElementById("endDate3").value == ""){

    document.getElementById("endDateLabel3").innerHTML = "End Date:"

    document.getElementById("endDateLabel3").style.color = "black";

  }

  if(document.getElementById("endDate3").value !== ""){

  if (!dateTest.test(document.getElementById("endDate3").value)) {

    errorDetected = 1;

    document.getElementById("endDateLabel3").innerHTML = "End Date: *Invalid Date"

    document.getElementById("endDateLabel3").style.color = "red";

  }else{

    document.getElementById("endDateLabel3").innerHTML = "End Date:"

    document.getElementById("endDateLabel3").style.color = "black";

  }

  }

  if(document.getElementById("employerPhone3").value == ""){

    document.getElementById("employerPhoneLabel3").innerHTML = "Phone Number:"

    document.getElementById("employerPhoneLabel3").style.color = "black";

  }

  if(document.getElementById("employerPhone3").value !== ""){

  if (!phoneTest.test(document.getElementById("employerPhone3").value)) {

    errorDetected = 1;

    document.getElementById("employerPhoneLabel3").innerHTML = "Phone Number: *Invalid phone"

    document.getElementById("employerPhoneLabel3").style.color = "red";

  }else{

    document.getElementById("employerPhoneLabel3").innerHTML = "Phone Number:"

    document.getElementById("employerPhoneLabel3").style.color = "black";

  }

  }

  if(document.getElementById("employerEmail3").value == ""){

    document.getElementById("employerEmailLabel3").innerHTML = "Email:"

    document.getElementById("employerEmailLabel3").style.color = "black";

  }

  if(document.getElementById("employerEmail3").value !== ""){

  if (!emailTest.test(document.getElementById("employerEmail3").value)) {

    errorDetected = 1;

    document.getElementById("employerEmailLabel3").innerHTML = "Email: *Invalid Email"

    document.getElementById("employerEmailLabel3").style.color = "red";

  }else{

    document.getElementById("employerEmailLabel3").innerHTML = "Email:"

    document.getElementById("employerEmailLabel3").style.color = "black";

  }

  }





  if (errorDetected == 0){

    var complete = '1';
    localStorage.setItem("complete5", complete);

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

  if(localStorage.getItem("complete5") == '1') {
  document.getElementById("continue").style.visibility = 'visible';
    }

  if(localStorage.getItem("employerName") !== null) {
    this.refs.employerName.value = localStorage.getItem("employerName");
    }

    if(localStorage.getItem("employerAddress") !== null) {
      this.refs.employerAddress.value = localStorage.getItem("employerAddress");
      }

      if(localStorage.getItem("employerPhone") !== null) {
        this.refs.employerPhone.value = localStorage.getItem("employerPhone");
        }

        if(localStorage.getItem("employerEmail") !== null) {
          this.refs.employerEmail.value = localStorage.getItem("employerEmail");
          }


            if(localStorage.getItem("supervisor") !== null) {
              this.refs.supervisor.value = localStorage.getItem("supervisor");
              }

              if(localStorage.getItem("startDate") !== null) {
                this.refs.startDate.value = localStorage.getItem("startDate");
                }

                if(localStorage.getItem("endDate") !== null) {
                  this.refs.endDate.value = localStorage.getItem("endDate");
                  }


                    if(localStorage.getItem("startSalary") !== null) {
                      this.refs.startSalary.value = localStorage.getItem("startSalary");
                      }

                      if(localStorage.getItem("endSalary") !== null) {
                        this.refs.endSalary.value = localStorage.getItem("endSalary");
                        }

                        if(localStorage.getItem("leave") !== null) {
                          this.refs.leave.value = localStorage.getItem("leave");
                          }


                            if(localStorage.getItem("contact") !== null) {
                              this.refs.contact.value = localStorage.getItem("contact");
                              }

                              if(localStorage.getItem("duties") !== null) {
                                this.refs.duties.value = localStorage.getItem("duties");
                                }

                                if(localStorage.getItem("title") !== null) {
                                  this.refs.title.value = localStorage.getItem("title");
                                  }


                                  if(localStorage.getItem("employerName2") !== null) {
                                    this.refs.employerName2.value = localStorage.getItem("employerName2");
                                    }

                                    if(localStorage.getItem("employerAddress2") !== null) {
                                      this.refs.employerAddress2.value = localStorage.getItem("employerAddress2");
                                      }

                                      if(localStorage.getItem("employerPhone2") !== null) {
                                        this.refs.employerPhone2.value = localStorage.getItem("employerPhone2");
                                        }

                                        if(localStorage.getItem("employerEmail2") !== null) {
                                          this.refs.employerEmail2.value = localStorage.getItem("employerEmail2");
                                          }


                                            if(localStorage.getItem("supervisor2") !== null) {
                                              this.refs.supervisor2.value = localStorage.getItem("supervisor2");
                                              }

                                              if(localStorage.getItem("startDate2") !== null) {
                                                this.refs.startDate2.value = localStorage.getItem("startDate2");
                                                }

                                                if(localStorage.getItem("endDate2") !== null) {
                                                  this.refs.endDate2.value = localStorage.getItem("endDate2");
                                                  }


                                                    if(localStorage.getItem("startSalary2") !== null) {
                                                      this.refs.startSalary2.value = localStorage.getItem("startSalary2");
                                                      }

                                                      if(localStorage.getItem("endSalary2") !== null) {
                                                        this.refs.endSalary2.value = localStorage.getItem("endSalary2");
                                                        }

                                                        if(localStorage.getItem("leave2") !== null) {
                                                          this.refs.leave2.value = localStorage.getItem("leave2");
                                                          }


                                                            if(localStorage.getItem("contact2") !== null) {
                                                              this.refs.contact2.value = localStorage.getItem("contact2");
                                                              }

                                                              if(localStorage.getItem("duties2") !== null) {
                                                                this.refs.duties2.value = localStorage.getItem("duties2");
                                                                }

                                                                if(localStorage.getItem("title2") !== null) {
                                                                  this.refs.title2.value = localStorage.getItem("title2");
                                                                  }





                                                                  if(localStorage.getItem("employerName3") !== null) {
                                                                    this.refs.employerName3.value = localStorage.getItem("employerName3");
                                                                    }

                                                                    if(localStorage.getItem("employerAddress3") !== null) {
                                                                      this.refs.employerAddress3.value = localStorage.getItem("employerAddress3");
                                                                      }

                                                                      if(localStorage.getItem("employerPhone3") !== null) {
                                                                        this.refs.employerPhone3.value = localStorage.getItem("employerPhone3");
                                                                        }

                                                                        if(localStorage.getItem("employerEmail3") !== null) {
                                                                          this.refs.employerEmail3.value = localStorage.getItem("employerEmail3");
                                                                          }


                                                                            if(localStorage.getItem("supervisor3") !== null) {
                                                                              this.refs.supervisor3.value = localStorage.getItem("supervisor3");
                                                                              }

                                                                              if(localStorage.getItem("startDate3") !== null) {
                                                                                this.refs.startDate3.value = localStorage.getItem("startDate3");
                                                                                }

                                                                                if(localStorage.getItem("endDate3") !== null) {
                                                                                  this.refs.endDate3.value = localStorage.getItem("endDate3");
                                                                                  }


                                                                                    if(localStorage.getItem("startSalary3") !== null) {
                                                                                      this.refs.startSalary3.value = localStorage.getItem("startSalary3");
                                                                                      }

                                                                                      if(localStorage.getItem("endSalary3") !== null) {
                                                                                        this.refs.endSalary3.value = localStorage.getItem("endSalary3");
                                                                                        }

                                                                                        if(localStorage.getItem("leave3") !== null) {
                                                                                          this.refs.leave3.value = localStorage.getItem("leave3");
                                                                                          }


                                                                                            if(localStorage.getItem("contact3") !== null) {
                                                                                              this.refs.contact3.value = localStorage.getItem("contact3");
                                                                                              }

                                                                                              if(localStorage.getItem("duties3") !== null) {
                                                                                                this.refs.duties3.value = localStorage.getItem("duties3");
                                                                                                }

                                                                                                if(localStorage.getItem("title3") !== null) {
                                                                                                  this.refs.title3.value = localStorage.getItem("title3");
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

    <div className="col-md-3">
    </div>

    <div className="col-md-6 text-center small-top-buffer">
      <h3>Work Experience</h3><h6>Provide information on past employers.(Fill out fields that apply to you)</h6>
    </div>

    <div className="col-md-3">
    </div>

  </div>

  <div className="row slight-smaller-bottom-buffer">

    <div className="col-md-3" id="previous">

      <Link to='/EducationHistory' className="btn btn-primary">Previous</Link>

    </div>

    <div className="col-md-6">

      <div className="label label-danger text-center" id="infoMessage" style={{color: "red", visibility: "hidden"}}>There was a problem with some of the data you entered. Please make the requried corrections below before continuing. <i className="fa fa-exclamation-circle" aria-hidden="true"></i></div>

    </div>


    <div className="col-md-3 text-right" id="continue" style={{visibility: "hidden"}}>

      <Link to='/References' className="btn btn-success">Continue</Link>

    </div>


  </div>

  <div className='card bg-light medium-bottom-buffer '>
    <div class="card-body">

      <div className="row">

        <div className="col-md-3">

          <div className="form-group">

            <label for="employerName" id="employerNameLabel">Employer Name:</label>

            <input type="text" className="form-control" id="employerName" ref="employerName" required></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="employerAddress" id="employerAddressLabel">Address:</label>

            <input type="text" className="form-control" id="employerAddress" ref="employerAddress"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="employerPhone" id="employerPhoneLabel">Phone Number:</label>

            <input type="text" className="form-control" id="employerPhone" ref="employerPhone" placeholder="##########"></input>

          </div>

        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="employerEmail" id="employerEmailLabel">Email:</label>

            <input type="text" className="form-control" id="employerEmail" ref="employerEmail" placeholder="example@example.com"></input>

          </div>

        </div>

      </div>

      <div className="row">

        <div className="col-md-2">

          <div className="form-group">

            <label for="supervisor" id="supervisorLabel">Last Supervisor:</label>

            <input type="text" className="form-control" id="supervisor" ref="supervisor"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="title" id="titleLabel">Last Title:</label>

            <input type="text" className="form-control" id="title" ref="title"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="startDate" id="startDateLabel">Start Date:</label>

            <input type="text" className="form-control" id="startDate" ref="startDate" placeholder="mm/dd/yyyy"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="endDate" id="endDateLabel">End Date:</label>

            <input type="text" className="form-control" id="endDate" ref="endDate" placeholder="mm/dd/yyyy"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="startSalary" id="startSalaryLabel">Starting Salary:</label>

            <input type="text" className="form-control" id="startSalary" ref="startSalary"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="endSalary" id="endSalaryLabel">End Salary:</label>

            <input type="text" className="form-control" id="endSalary" ref="endSalary"></input>

          </div>

        </div>



      </div>

      <div className="row">

        <div className="col-md-8">

          <div className="form-group">

            <label for="leave" id="leaveLabel">Reason for leaving:</label>

            <input type="text" className="form-control" id="leave" ref="leave"></input>

          </div>

        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="contact" id="contactLabel" >May we contact this employer?</label>

            <select className="form-control" id="contact" name="contact" ref="contact">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>

          </div>

        </div>

      </div>



      <div className="row medium-bottom-buffer">
        <div className="col-md-12">
          <div className="form-group">
            <label for="duties">List duties performed, skills used, and advancements and promotions earned:</label>
            <textarea class="form-control" rows="5" id="duties" ref="duties"></textarea>
          </div>

        </div>
      </div>

    </div>
  </div>



  <div className='card bg-light medium-bottom-buffer '>
    <div class="card-body">
      <div className="row">

        <div className="col-md-3">

          <div className="form-group">

            <label for="employerName2" id="employerNameLabel2">Employer Name:</label>

            <input type="text" className="form-control" id="employerName2" ref="employerName2" required></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="employerAddress2" id="employerAddressLabel2">Address:</label>

            <input type="text" className="form-control" id="employerAddress2" ref="employerAddress2"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="employerPhone2" id="employerPhoneLabel2">Phone Number:</label>

            <input type="text" className="form-control" id="employerPhone2" ref="employerPhone2" placeholder="##########"></input>

          </div>

        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="employerEmail2" id="employerEmailLabel2">Email:</label>

            <input type="text" className="form-control" id="employerEmail2" ref="employerEmail2" placeholder="example@example.com"></input>

          </div>

        </div>

      </div>

      <div className="row">

        <div className="col-md-2">

          <div className="form-group">

            <label for="supervisor2" id="supervisorLabel2">Last Supervisor:</label>

            <input type="text" className="form-control" id="supervisor2" ref="supervisor2"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="title2" id="titleLabel2">Last Title:</label>

            <input type="text" className="form-control" id="title2" ref="title2"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="startDate2" id="startDateLabel2">Start Date:</label>

            <input type="text" className="form-control" id="startDate2" ref="startDate2" placeholder="mm/dd/yyyy"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="endDate2" id="endDateLabel2">End Date:</label>

            <input type="text" className="form-control" id="endDate2" ref="endDate2" placeholder="mm/dd/yyyy"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="startSalary2" id="startSalaryLabel2">Starting Salary:</label>

            <input type="text" className="form-control" id="startSalary2" ref="startSalary2"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="endSalary2" id="endSalaryLabel2">End Salary:</label>

            <input type="text" className="form-control" id="endSalary2" ref="endSalary2"></input>

          </div>

        </div>



      </div>

      <div className="row">

        <div className="col-md-8">

          <div className="form-group">

            <label for="leave2" id="leaveLabel2">Reason for leaving:</label>

            <input type="text" className="form-control" id="leave2" ref="leave2"></input>

          </div>

        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="contact2" id="contactLabel2" >May we contact this employer?</label>

            <select className="form-control" id="contact2" name="contact2" ref="contact2">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>

          </div>

        </div>

      </div>

      <div className="row medium-bottom-buffer">
        <div className="col-md-12">
          <div className="form-group">
            <label for="duties2">List duties performed, skills used, and advancements and promotions earned:</label>
            <textarea class="form-control" rows="5" id="duties2" ref="duties2"></textarea>
          </div>

        </div>
      </div>

    </div>
  </div>


  <div className='card bg-light medium-bottom-buffer '>
    <div class="card-body">

      <div className="row">

        <div className="col-md-3">

          <div className="form-group">

            <label for="employerName3" id="employerNameLabel3">Employer Name:</label>

            <input type="text" className="form-control" id="employerName3" ref="employerName3" required></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="employerAddress3" id="employerAddressLabel3">Address:</label>

            <input type="text" className="form-control" id="employerAddress3" ref="employerAddress3"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="employerPhone3" id="employerPhoneLabel3">Phone Number:</label>

            <input type="text" className="form-control" id="employerPhone3" ref="employerPhone3" placeholder="##########"></input>

          </div>

        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="employerEmail3" id="employerEmailLabel3">Email:</label>

            <input type="text" className="form-control" id="employerEmail3" ref="employerEmail3" placeholder="example@example.com"></input>

          </div>

        </div>

      </div>

      <div className="row">

        <div className="col-md-2">

          <div className="form-group">

            <label for="supervisor3" id="supervisorLabel3">Last Supervisor:</label>

            <input type="text" className="form-control" id="supervisor3" ref="supervisor3"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="title3" id="titleLabel3">Last Title:</label>

            <input type="text" className="form-control" id="title3" ref="title3"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="startDate3" id="startDateLabel3">Start Date:</label>

            <input type="text" className="form-control" id="startDate3" ref="startDate3" placeholder="mm/dd/yyyy"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="endDate3" id="endDateLabel3">End Date:</label>

            <input type="text" className="form-control" id="endDate3" ref="endDate3" placeholder="mm/dd/yyyy"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="startSalary3" id="startSalaryLabel3">Starting Salary:</label>

            <input type="text" className="form-control" id="startSalary3" ref="startSalary3"></input>

          </div>

        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="endSalary3" id="endSalaryLabel3">End Salary:</label>

            <input type="text" className="form-control" id="endSalary3" ref="endSalary3"></input>

          </div>

        </div>



      </div>

      <div className="row">

        <div className="col-md-8">

          <div className="form-group">

            <label for="leave3" id="leaveLabel3">Reason for leaving:</label>

            <input type="text" className="form-control" id="leave3" ref="leave3"></input>

          </div>

        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="contact3" id="contactLabel3" >May we contact this employer?</label>

            <select className="form-control" id="contact3" name="contact3" ref="contact3">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>

          </div>

        </div>

      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label for="duties3">List duties performed, skills used, and advancements and promotions earned:</label>
            <textarea class="form-control" rows="5" id="duties3" ref="duties3"></textarea>
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

export default Experience;
