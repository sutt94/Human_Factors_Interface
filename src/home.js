import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

class Home extends Component {

  processForm() {

    document.body.scrollTop = document.documentElement.scrollTop = 0;
    var errorDetected = 0;
    var continueLink = document.getElementById("continue");
    var infoMessage = document.getElementById("infoMessage");
    var zipTest = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    var emailTest = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var ssnTest = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;
    var phoneTest = /^\d{10}$/;

    infoMessage.style.visibility = 'visible';
    continueLink.style.visibility = 'visible';

    var firstName = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;
    var lastName = document.getElementById("lastName").value;
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var ssn = document.getElementById("ssn").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var position = document.getElementById("position").value;
    var salary = document.getElementById("salary").value;
    var military = document.getElementById("military").value;


    localStorage.setItem("firstName", firstName);
    localStorage.setItem("middleName", middleName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("street", street);
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
    localStorage.setItem("zip", zip);
    localStorage.setItem("ssn", ssn);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("age", age);
    localStorage.setItem("position", position);
    localStorage.setItem("salary", salary);
    localStorage.setItem("military", military);


    if (document.getElementById("firstName").value == "" || document.getElementById("firstName").value == " ") {

      errorDetected = 1;

      document.getElementById("firstNameLabel").innerHTML = "First Name: *Required Information"

      document.getElementById("firstNameLabel").style.color = "red";

    }
    else{

      document.getElementById("firstNameLabel").innerHTML = "First Name:"

        document.getElementById("firstNameLabel").style.color = "black";

    }

    if (document.getElementById("middleName").value == "" || document.getElementById("middleName").value == " ") {

      errorDetected = 1;

      document.getElementById("middleNameLabel").innerHTML = "Middle Name: *Required Information"

      document.getElementById("middleNameLabel").style.color = "red";

    }
    else{

      document.getElementById("middleNameLabel").innerHTML = "Middle Name:"

        document.getElementById("middleNameLabel").style.color = "black";



    }

    if (document.getElementById("lastName").value == "" || document.getElementById("lastName").value == " ") {

      errorDetected = 1;

      document.getElementById("lastNameLabel").innerHTML = "Last Name: *Required Information"

      document.getElementById("lastNameLabel").style.color = "red";



    }
    else{

      document.getElementById("lastNameLabel").innerHTML = "Last Name:"

      document.getElementById("lastNameLabel").style.color = "black";

    }

    if (document.getElementById("street").value == "" || document.getElementById("street").value == " ") {

      errorDetected = 1;

      document.getElementById("streetLabel").innerHTML = "Street: *Required Information"

      document.getElementById("streetLabel").style.color = "red";



    }
    else{

      document.getElementById("streetLabel").innerHTML = "Street:"

      document.getElementById("streetLabel").style.color = "black";

    }

    if (document.getElementById("city").value == "" || document.getElementById("city").value == " ") {

      errorDetected = 1;

      document.getElementById("cityLabel").innerHTML = "City: *Required Information"

      document.getElementById("cityLabel").style.color = "red";



    }
    else{

      document.getElementById("cityLabel").innerHTML = "City:"

      document.getElementById("cityLabel").style.color = "black";

    }

    if (document.getElementById("zip").value == "" || !zipTest.test(document.getElementById("zip").value)) {

      errorDetected = 1;

      document.getElementById("zipLabel").innerHTML = "ZIP Code (5 Digits) *Invalid ZIP"

      document.getElementById("zipLabel").style.color = "red";



    }
    else{

      document.getElementById("zipLabel").innerHTML = "ZIP Code (5 Digits)"

      document.getElementById("zipLabel").style.color = "black";

    }

    if (document.getElementById("ssn").value == "" || !ssnTest.test(document.getElementById("ssn").value)) {

      errorDetected = 1;

      document.getElementById("ssnLabel").innerHTML = "SSN *Invalid SSN"

      document.getElementById("ssnLabel").style.color = "red";



    }
    else{

      document.getElementById("ssnLabel").innerHTML = "SSN:"

      document.getElementById("ssnLabel").style.color = "black";

    }

    if (document.getElementById("phone").value == "" || !phoneTest.test(document.getElementById("phone").value)) {

      errorDetected = 1;

      document.getElementById("phoneLabel").innerHTML = "Phone: *Invalid Phone"

      document.getElementById("phoneLabel").style.color = "red";



    }
    else{

      document.getElementById("phoneLabel").innerHTML = "Phone:"

      document.getElementById("phoneLabel").style.color = "black";

    }

    if (document.getElementById("email").value == "" || !emailTest.test(document.getElementById("email").value)) {

      errorDetected = 1;

      document.getElementById("emailLabel").innerHTML = "Email: *Invalid Email"

      document.getElementById("emailLabel").style.color = "red";



    }
    else{

      document.getElementById("emailLabel").innerHTML = "Email:"

      document.getElementById("emailLabel").style.color = "black";

    }

    if (document.getElementById("age").value == "No") {

      errorDetected = 1;

      document.getElementById("ageLabel").innerHTML = "*Must be at least 18"

      document.getElementById("ageLabel").style.color = "red";



    }
    else{

      document.getElementById("ageLabel").innerHTML = "Are you 18 or older?"

      document.getElementById("ageLabel").style.color = "black";

    }

    if (errorDetected == 0){

      document.getElementById("infoMessage").innerHTML = "Your information has been saved. Press continue below to continue to the next phase of the application " + "<i class='fa fa-check-circle-o' aria-hidden='true'></i>"

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

    if(localStorage.getItem("firstName") !== null) {
      this.refs.firstName.value = localStorage.getItem("firstName");
      }

      if(localStorage.getItem("middleName") !== null) {
        this.refs.middleName.value = localStorage.getItem("middleName");
        }

        if(localStorage.getItem("lastName") !== null) {
          this.refs.lastName.value = localStorage.getItem("lastName");
          }

          if(localStorage.getItem("street") !== null) {
            this.refs.street.value = localStorage.getItem("street");
            }

            if(localStorage.getItem("city") !== null) {
              this.refs.city.value = localStorage.getItem("city");
              }

              if(localStorage.getItem("state") !== null) {
                this.refs.state.value = localStorage.getItem("state");
                }

                if(localStorage.getItem("zip") !== null) {
                  this.refs.zip.value = localStorage.getItem("zip");
                  }
                  if(localStorage.getItem("firstName") !== null) {
                    this.refs.firstName.value = localStorage.getItem("firstName");
                    }

                    if(localStorage.getItem("ssn") !== null) {
                      this.refs.ssn.value = localStorage.getItem("ssn");
                      }

                      if(localStorage.getItem("phone") !== null) {
                        this.refs.phone.value = localStorage.getItem("phone");
                        }

                        if(localStorage.getItem("email") !== null) {
                          this.refs.email.value = localStorage.getItem("email");
                          }

                          if(localStorage.getItem("age") !== null) {
                            this.refs.age.value = localStorage.getItem("age");
                            }

                            if(localStorage.getItem("position") !== null) {
                              this.refs.position.value = localStorage.getItem("position");
                              }

                              if(localStorage.getItem("salary") !== null) {
                                this.refs.salary.value = localStorage.getItem("salary");
                                }
                                if(localStorage.getItem("military") !== null) {
                                  this.refs.military.value = localStorage.getItem("military");
                                  }
    }

render() {





return (



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
          <h3>Personal Information</h3><h6>(All Fields Required)</h6>
        </div>

        <div className="col-md-3">
        </div>

      </div>


      <div className="row">

        <div className="col-md-3">
        </div>

        <div className="col-md-6">

          <div className="label label-danger text-center" id="infoMessage" style={{color: "red", visibility: "hidden"}}>There was a problem with some of the data you entered. Please make the requried corrections below before continuing. <i className="fa fa-exclamation-circle" aria-hidden="true"></i></div>

        </div>


        <div className="col-md-3" id="continue" style={{visibility: "hidden"}}>

          <Link to='/JobRelated' className="btn btn-success">Continue</Link>

        </div>


      </div>


      <div className="row top-buffer medium-bottom-buffer">

        <div className="col-md-4">

          <div className="form-group">

            <label for="firstName" id="firstNameLabel">First Name:</label>

            <input type="text" className="form-control" id="firstName" ref="firstName" required></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="middleName" id="middleNameLabel">Middle Name:</label>

            <input type="text" className="form-control" id="middleName" ref="middleName"></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="lastName" id="lastNameLabel">Last Name:</label>

            <input type="text" className="form-control" id="lastName" ref="lastName"></input>

          </div>

        </div>

      </div>


      <div className="row medium-bottom-buffer">

        <div className="col-md-6">

          <div className="form-group">

            <label for="street" id="streetLabel">Street:</label>

            <input type="text" className="form-control" id="street" ref="street"></input>

          </div>


        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="city" id="cityLabel">City:</label>

            <input type="text" className="form-control" id="city" ref="city"></input>

          </div>


        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="state" id="stateLabel" >State:</label>

            <select className="form-control" id="state" name="state" ref="state">
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

            <label for="zip" id="zipLabel">ZIP Code (5 Digits)</label>

            <input type="text" className="form-control" id="zip" ref="zip" pattern="[0-9]{5}" title="Five digit zip code" placeholder="#####" />

          </div>

        </div>


        <div className="col-md-3">

          <div className="form-group">


            <label className="control-label" for="ssn" id="ssnLabel">SSN:</label>

            <input type="email" class="form-control" id="ssn" ref="ssn" placeholder="###-##-####" maxlength="12"></input>


          </div>

        </div>

        <div className="col-md-3">

          <div className="form-group">


            <label className="control-label" for="phone" id="phoneLabel">Phone Number:</label>

            <input type="email" class="form-control" id="phone" ref="phone" placeholder="##########" maxlength="10"></input>


          </div>

        </div>

        <div className="col-md-3">

          <div className="form-group">


            <label className="control-label" for="email" id="emailLabel">Email:</label>

            <input type="email" class="form-control" id="email" ref="email" placeholder="example@example.com"></input>


          </div>

        </div>

      </div>

      <div className="row medium-bottom-buffer">

        <div className="col-md-2">

          <div className="form-group">

            <label for="age" id="ageLabel" >Are you 18 or older?</label>

            <select className="form-control" id="age" name="age" ref="age">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>

          </div>

        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="position" id="positionLabel" >Desired Position:</label>

            <select className="form-control" id="position" name="position" ref="position">
              <option value="Developer">Developer</option>
              <option value="Driver">Driver</option>
              <option value="Analyst">Analyst</option>
            </select>

          </div>

        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="salary" id="salaryLabel" >Desired Salary:</label>

            <select className="form-control" id="salary" name="salary" ref="salary">
              <option value="Other">Other</option>
              <option value="$31,000-$40,000">$31,000-$40,000</option>
              <option value="$41,000-$50,000">$41,000-$50,000</option>
              <option value="$51,000-$60,000">$51,000-$60,000</option>
              <option value="$61,000-$70,000">$61,000-$70,000</option>
              <option value="$71,000-$80,000">$71,000-$80,000</option>
              <option value="$81,000-$90,000">$81,000-$90,000</option>
              <option value="$91,000-$100,000">$91,000-$100,000</option>
            </select>

          </div>

        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="military" id="militaryLabel" >Have you served in the military?</label>

            <select className="form-control" id="military" name="military" ref="military">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>

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

export default Home;
