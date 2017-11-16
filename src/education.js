import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Education extends Component {


processForm() {
  localStorage.setItem("complete4", '0');
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  var errorDetected = 0;
  var continueLink = document.getElementById("continue");
  var infoMessage = document.getElementById("infoMessage");
  infoMessage.style.visibility = 'visible';
  var dateTest = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

  var highestDegree = document.getElementById("highestDegree").value;
  localStorage.setItem("highestDegree", highestDegree);

  var schoolType = document.getElementById("schoolType").value;
  var schoolName = document.getElementById("schoolName").value;
  var schoolState = document.getElementById("schoolState").value;
  var graduationDate = document.getElementById("graduationDate").value;
  var degree = document.getElementById("degree").value;


  localStorage.setItem("schoolType", schoolType);
  localStorage.setItem("schoolName", schoolName);
  localStorage.setItem("schoolState", schoolState);
  localStorage.setItem("graduationDate", graduationDate);
  localStorage.setItem("degree", degree);

  var schoolType2 = document.getElementById("schoolType2").value;
  var schoolName2 = document.getElementById("schoolName2").value;
  var schoolState2 = document.getElementById("schoolState2").value;
  var graduationDate2 = document.getElementById("graduationDate2").value;
  var degree2 = document.getElementById("degree2").value;


  localStorage.setItem("schoolType2", schoolType2);
  localStorage.setItem("schoolName2", schoolName2);
  localStorage.setItem("schoolState2", schoolState2);
  localStorage.setItem("graduationDate2", graduationDate2);
  localStorage.setItem("degree2", degree2);

  var schoolType3 = document.getElementById("schoolType3").value;
  var schoolName3 = document.getElementById("schoolName3").value;
  var schoolState3 = document.getElementById("schoolState3").value;
  var graduationDate3 = document.getElementById("graduationDate3").value;
  var degree3 = document.getElementById("degree3").value;


  localStorage.setItem("schoolType3", schoolType3);
  localStorage.setItem("schoolName3", schoolName3);
  localStorage.setItem("schoolState3", schoolState3);
  localStorage.setItem("graduationDate3", graduationDate3);
  localStorage.setItem("degree3", degree3);

  var schoolType4 = document.getElementById("schoolType4").value;
  var schoolName4 = document.getElementById("schoolName4").value;
  var schoolState4 = document.getElementById("schoolState4").value;
  var graduationDate4 = document.getElementById("graduationDate4").value;
  var degree4 = document.getElementById("degree4").value;


  localStorage.setItem("schoolType4", schoolType4);
  localStorage.setItem("schoolName4", schoolName4);
  localStorage.setItem("schoolState4", schoolState4);
  localStorage.setItem("graduationDate4", graduationDate4);
  localStorage.setItem("degree4", degree4);

  var schoolType5 = document.getElementById("schoolType5").value;
  var schoolName5 = document.getElementById("schoolName5").value;
  var schoolState5 = document.getElementById("schoolState5").value;
  var graduationDate5 = document.getElementById("graduationDate5").value;
  var degree5 = document.getElementById("degree5").value;


  localStorage.setItem("schoolType5", schoolType5);
  localStorage.setItem("schoolName5", schoolName5);
  localStorage.setItem("schoolState5", schoolState5);
  localStorage.setItem("graduationDate5", graduationDate5);
  localStorage.setItem("degree5", degree5);

  var schoolType6 = document.getElementById("schoolType6").value;
  var schoolName6 = document.getElementById("schoolName6").value;
  var schoolState6 = document.getElementById("schoolState6").value;
  var graduationDate6 = document.getElementById("graduationDate6").value;
  var degree6 = document.getElementById("degree6").value;


  localStorage.setItem("schoolType6", schoolType6);
  localStorage.setItem("schoolName6", schoolName6);
  localStorage.setItem("schoolState6", schoolState6);
  localStorage.setItem("graduationDate6", graduationDate6);
  localStorage.setItem("degree6", degree6);


  if(document.getElementById("graduationDate").value == ""){

    document.getElementById("graduationDateLabel").innerHTML = "Graduation Date:"

    document.getElementById("graduationDateLabel").style.color = "black";

  }

  if(document.getElementById("graduationDate").value !== ""){

  if (!dateTest.test(document.getElementById("graduationDate").value)) {

    errorDetected = 1;

    document.getElementById("graduationDateLabel").innerHTML = "Graduation Date: *Invalid Date"

    document.getElementById("graduationDateLabel").style.color = "red";

  }else{

    document.getElementById("graduationDateLabel").innerHTML = "Graduation Date:"

    document.getElementById("graduationDateLabel").style.color = "black";

  }

}

if(document.getElementById("graduationDate2").value == ""){

  document.getElementById("graduationDateLabel2").innerHTML = "Graduation Date:"

  document.getElementById("graduationDateLabel2").style.color = "black";

}

if(document.getElementById("graduationDate2").value !== ""){

if (!dateTest.test(document.getElementById("graduationDate2").value)) {

  errorDetected = 1;

  document.getElementById("graduationDateLabel2").innerHTML = "Graduation Date: *Invalid Date"

  document.getElementById("graduationDateLabel2").style.color = "red";

}else{

  document.getElementById("graduationDateLabel2").innerHTML = "Graduation Date:"

  document.getElementById("graduationDateLabel2").style.color = "black";

}

}

if(document.getElementById("graduationDate3").value == ""){

  document.getElementById("graduationDateLabel3").innerHTML = "Graduation Date:"

  document.getElementById("graduationDateLabel3").style.color = "black";

}

if(document.getElementById("graduationDate3").value !== ""){

if (!dateTest.test(document.getElementById("graduationDate3").value)) {

  errorDetected = 1;

  document.getElementById("graduationDateLabel3").innerHTML = "Graduation Date: *Invalid Date"

  document.getElementById("graduationDateLabel3").style.color = "red";

}else{

  document.getElementById("graduationDateLabel3").innerHTML = "Graduation Date:"

  document.getElementById("graduationDateLabel3").style.color = "black";

}

}

if(document.getElementById("graduationDate4").value == ""){

  document.getElementById("graduationDateLabel4").innerHTML = "Graduation Date:"

  document.getElementById("graduationDateLabel4").style.color = "black";

}

if(document.getElementById("graduationDate4").value !== ""){

if (!dateTest.test(document.getElementById("graduationDate4").value)) {

  errorDetected = 1;

  document.getElementById("graduationDateLabel4").innerHTML = "Graduation Date: *Invalid Date"

  document.getElementById("graduationDateLabel4").style.color = "red";

}else{

  document.getElementById("graduationDateLabel4").innerHTML = "Graduation Date:"

  document.getElementById("graduationDateLabel4").style.color = "black";

}

}

if(document.getElementById("graduationDate5").value == ""){

  document.getElementById("graduationDateLabel5").innerHTML = "Graduation Date:"

  document.getElementById("graduationDateLabel5").style.color = "black";

}

if(document.getElementById("graduationDate5").value !== ""){

if (!dateTest.test(document.getElementById("graduationDate5").value)) {

  errorDetected = 1;

  document.getElementById("graduationDateLabel5").innerHTML = "Graduation Date: *Invalid Date"

  document.getElementById("graduationDateLabel5").style.color = "red";

}else{

  document.getElementById("graduationDateLabel5").innerHTML = "Graduation Date:"

  document.getElementById("graduationDateLabel5").style.color = "black";

}

}

if(document.getElementById("graduationDate6").value == ""){

  document.getElementById("graduationDateLabel6").innerHTML = "Graduation Date:"

  document.getElementById("graduationDateLabel6").style.color = "black";

}

if(document.getElementById("graduationDate6").value !== ""){

if (!dateTest.test(document.getElementById("graduationDate6").value)) {

  errorDetected = 1;

  document.getElementById("graduationDateLabel6").innerHTML = "Graduation Date: *Invalid Date"

  document.getElementById("graduationDateLabel6").style.color = "red";

}else{

  document.getElementById("graduationDateLabel6").innerHTML = "Graduation Date:"

  document.getElementById("graduationDateLabel6").style.color = "black";

}

}



  if (errorDetected == 0){

    var complete = '1';
    localStorage.setItem("complete4", complete);

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


componentDidMount() {

  if(localStorage.getItem("complete4") == '1') {
  document.getElementById("continue").style.visibility = 'visible';
    }

  if(localStorage.getItem("highestDegree") !== null) {
    this.refs.highestDegree.value = localStorage.getItem("highestDegree");
    }

    if(localStorage.getItem("schoolType") !== null) {
      this.refs.schoolType.value = localStorage.getItem("schoolType");
      }

      if(localStorage.getItem("schoolName") !== null) {
        this.refs.schoolName.value = localStorage.getItem("schoolName");
        }

        if(localStorage.getItem("schoolState") !== null) {
          this.refs.schoolState.value = localStorage.getItem("schoolState");
          }


            if(localStorage.getItem("graduationDate") !== null) {
              this.refs.graduationDate.value = localStorage.getItem("graduationDate");
              }

              if(localStorage.getItem("degree") !== null) {
                this.refs.degree.value = localStorage.getItem("degree");
                }


                  if(localStorage.getItem("schoolType2") !== null) {
                    this.refs.schoolType2.value = localStorage.getItem("schoolType2");
                    }

                    if(localStorage.getItem("schoolName2") !== null) {
                      this.refs.schoolName2.value = localStorage.getItem("schoolName2");
                      }

                      if(localStorage.getItem("schoolState2") !== null) {
                        this.refs.schoolState2.value = localStorage.getItem("schoolState2");
                        }


                          if(localStorage.getItem("graduationDate2") !== null) {
                            this.refs.graduationDate2.value = localStorage.getItem("graduationDate2");
                            }

                            if(localStorage.getItem("degree2") !== null) {
                              this.refs.degree2.value = localStorage.getItem("degree2");
                              }


                              if(localStorage.getItem("schoolType3") !== null) {
                                this.refs.schoolType3.value = localStorage.getItem("schoolType3");
                                }

                                if(localStorage.getItem("schoolName3") !== null) {
                                  this.refs.schoolName3.value = localStorage.getItem("schoolName3");
                                  }

                                  if(localStorage.getItem("schoolState3") !== null) {
                                    this.refs.schoolState3.value = localStorage.getItem("schoolState3");
                                    }


                                      if(localStorage.getItem("graduationDate3") !== null) {
                                        this.refs.graduationDate3.value = localStorage.getItem("graduationDate3");
                                        }

                                        if(localStorage.getItem("degree3") !== null) {
                                          this.refs.degree3.value = localStorage.getItem("degree3");
                                          }


                                          if(localStorage.getItem("schoolType4") !== null) {
                                            this.refs.schoolType4.value = localStorage.getItem("schoolType4");
                                            }

                                            if(localStorage.getItem("schoolName4") !== null) {
                                              this.refs.schoolName4.value = localStorage.getItem("schoolName4");
                                              }

                                              if(localStorage.getItem("schoolState4") !== null) {
                                                this.refs.schoolState4.value = localStorage.getItem("schoolState4");
                                                }


                                                  if(localStorage.getItem("graduationDate4") !== null) {
                                                    this.refs.graduationDate4.value = localStorage.getItem("graduationDate4");
                                                    }

                                                    if(localStorage.getItem("degree4") !== null) {
                                                      this.refs.degree4.value = localStorage.getItem("degree4");
                                                      }



                                                      if(localStorage.getItem("schoolType5") !== null) {
                                                        this.refs.schoolType5.value = localStorage.getItem("schoolType5");
                                                        }

                                                        if(localStorage.getItem("schoolName5") !== null) {
                                                          this.refs.schoolName5.value = localStorage.getItem("schoolName5");
                                                          }

                                                          if(localStorage.getItem("schoolState5") !== null) {
                                                            this.refs.schoolState5.value = localStorage.getItem("schoolState5");
                                                            }


                                                              if(localStorage.getItem("graduationDate5") !== null) {
                                                                this.refs.graduationDate5.value = localStorage.getItem("graduationDate5");
                                                                }

                                                                if(localStorage.getItem("degree5") !== null) {
                                                                  this.refs.degree5.value = localStorage.getItem("degree5");
                                                                  }


                                                                  if(localStorage.getItem("schoolType6") !== null) {
                                                                    this.refs.schoolType6.value = localStorage.getItem("schoolType6");
                                                                    }

                                                                    if(localStorage.getItem("schoolName6") !== null) {
                                                                      this.refs.schoolName6.value = localStorage.getItem("schoolName6");
                                                                      }

                                                                      if(localStorage.getItem("schoolState6") !== null) {
                                                                        this.refs.schoolState6.value = localStorage.getItem("schoolState6");
                                                                        }


                                                                          if(localStorage.getItem("graduationDate6") !== null) {
                                                                            this.refs.graduationDate6.value = localStorage.getItem("graduationDate6");
                                                                            }

                                                                            if(localStorage.getItem("degree6") !== null) {
                                                                              this.refs.degree6.value = localStorage.getItem("degree6");
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
      <h3>Education</h3><h6>Please list all schooling history.(Fill out fields that apply to you)</h6>
    </div>

    <div className="col-md-3">
    </div>

  </div>

  <div className="row slight-smaller-bottom-buffer">

    <div className="col-md-3" id="previous">

      <Link to='/CriminalHistory' className="btn btn-primary">Previous</Link>

    </div>

    <div className="col-md-6">

      <div className="label label-danger text-center" id="infoMessage" style={{color: "red", visibility: "hidden"}}>There was a problem with some of the data you entered. Please make the requried corrections below before continuing. <i className="fa fa-exclamation-circle" aria-hidden="true"></i></div>

    </div>


    <div className="col-md-3 text-right" id="continue" style={{visibility: "hidden"}}>

      <Link to='/WorkHistory' className="btn btn-success">Continue</Link>

    </div>


  </div>

  <div className="row">

    <div className="col-md-4 ">
    </div>

    <div className="col-md-4 text-center">

      <div className="form-group">

        <label for="highestDegree" id="highestDegreeLabel" >What is the highest diploma/degree/certificate you have earned? </label>

        <select className="form-control" id="highestDegree" name="highestDegree" ref="highestDegree">
          <option value="none">none</option>
          <option value="High School Diploma">High School Diploma</option>
          <option value="Associates Degree">Associates Degree</option>
          <option value="Bachelors Degree">Bachelors Degree</option>
          <option value="Masters Degree">Masters Degree</option>
          <option value="PHD">PHD</option>
        </select>

      </div>

    </div>

    <div className="col-md-4">
    </div>

  </div>

  <div className='card bg-light medium-bottom-buffer '>
    <div class="card-body">

      <div className="row">

        <div className="col-md-2">

          <div className="form-group">

            <label for="schoolType" id="schoolTypeLabel" >School Type:</label>

            <select className="form-control" id="schoolType" name="schoolType" ref="schoolType">
              <option value="--">--</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
              <option value="Professional">Professional</option>
            </select>

          </div>

        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="schoolName" id="schoolNameLabel">School Name:</label>

            <input type="text" className="form-control" id="schoolName" ref="schoolName"></input>

          </div>


        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="schoolState" id="schoolStateLabel" >State:</label>

            <select className="form-control" id="schoolState" name="schoolState" ref="schoolState">
              <option value="--">--</option>
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

        <div className="col-md-2">

          <div className="form-group">

            <label for="graduationDate" id="graduationDateLabel">Graduation Date:</label>

            <input type="text" className="form-control" id="graduationDate" ref="graduationDate" placeholder="mm/dd/yyyy"></input>

          </div>


        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="degree" id="degreeLabel">Degree/Certificate:</label>

            <input type="text" className="form-control" id="degree" ref="degree"></input>

          </div>


        </div>


      </div>


      <div className="row">

        <div className="col-md-2">

          <div className="form-group">

            <label for="schoolType2" id="schoolTypeLabel2" >School Type:</label>

            <select className="form-control" id="schoolType2" name="schoolType2" ref="schoolType2">
              <option value="--">--</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
              <option value="Professional">Professional</option>
            </select>

          </div>

        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="schoolName2" id="schoolNameLabel2">School Name:</label>

            <input type="text" className="form-control" id="schoolName2" ref="schoolName2"></input>

          </div>


        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="schoolState2" id="schoolStateLabel2" >State:</label>

            <select className="form-control" id="schoolState2" name="schoolState2" ref="schoolState2">
              <option value="--">--</option>
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

        <div className="col-md-2">

          <div className="form-group">

            <label for="graduationDate2" id="graduationDateLabel2">Graduation Date:</label>

            <input type="text" className="form-control" id="graduationDate2" ref="graduationDate2" placeholder="mm/dd/yyyy"></input>

          </div>


        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="degree2" id="degreeLabel2">Degree/Certificate:</label>

            <input type="text" className="form-control" id="degree2" ref="degree2"></input>

          </div>


        </div>


      </div>

      <div className="row">

        <div className="col-md-2">

          <div className="form-group">

            <label for="schoolType3" id="schoolTypeLabel3" >School Type:</label>

            <select className="form-control" id="schoolType3" name="schoolType3" ref="schoolType3">
              <option value="--">--</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
              <option value="Professional">Professional</option>
            </select>

          </div>

        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="schoolName3" id="schoolNameLabel3">School Name:</label>

            <input type="text" className="form-control" id="schoolName3" ref="schoolName3"></input>

          </div>


        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="schoolState3" id="schoolStateLabel3" >State:</label>

            <select className="form-control" id="schoolState3" name="schoolState3" ref="schoolState3">
              <option value="--">--</option>
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

        <div className="col-md-2">

          <div className="form-group">

            <label for="graduationDate3" id="graduationDateLabel3">Graduation Date:</label>

            <input type="text" className="form-control" id="graduationDate3" ref="graduationDate3" placeholder="mm/dd/yyyy"></input>

          </div>


        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="degree3" id="degreeLabel3">Degree/Certificate:</label>

            <input type="text" className="form-control" id="degree3" ref="degree3"></input>

          </div>


        </div>


      </div>

      <div className="row">

        <div className="col-md-2">

          <div className="form-group">

            <label for="schoolType4" id="schoolTypeLabel4" >School Type:</label>

            <select className="form-control" id="schoolType4" name="schoolType4" ref="schoolType4">
              <option value="--">--</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
              <option value="Professional">Professional</option>
            </select>

          </div>

        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="schoolName4" id="schoolNameLabel4">School Name:</label>

            <input type="text" className="form-control" id="schoolName4" ref="schoolName4"></input>

          </div>


        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="schoolState4" id="schoolStateLabel4" >State:</label>

            <select className="form-control" id="schoolState4" name="schoolState4" ref="schoolState4">
              <option value="--">--</option>
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

        <div className="col-md-2">

          <div className="form-group">

            <label for="graduationDate4" id="graduationDateLabel4">Graduation Date:</label>

            <input type="text" className="form-control" id="graduationDate4" ref="graduationDate4" placeholder="mm/dd/yyyy"></input>

          </div>


        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="degree4" id="degreeLabel4">Degree/Certificate:</label>

            <input type="text" className="form-control" id="degree4" ref="degree4"></input>

          </div>


        </div>


      </div>

      <div className="row">

        <div className="col-md-2">

          <div className="form-group">

            <label for="schoolType5" id="schoolTypeLabel5" >School Type:</label>

            <select className="form-control" id="schoolType5" name="schoolType5" ref="schoolType5">
              <option value="--">--</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
              <option value="Professional">Professional</option>
            </select>

          </div>

        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="schoolName5" id="schoolNameLabel5">School Name:</label>

            <input type="text" className="form-control" id="schoolName5" ref="schoolName5"></input>

          </div>


        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="schoolState5" id="schoolStateLabel5" >State:</label>

            <select className="form-control" id="schoolState5" name="schoolState5" ref="schoolState5">
              <option value="--">--</option>
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

        <div className="col-md-2">

          <div className="form-group">

            <label for="graduationDate5" id="graduationDateLabel5">Graduation Date:</label>

            <input type="text" className="form-control" id="graduationDate5" ref="graduationDate5" placeholder="mm/dd/yyyy"></input>

          </div>


        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="degree5" id="degreeLabel5">Degree/Certificate:</label>

            <input type="text" className="form-control" id="degree5" ref="degree5"></input>

          </div>


        </div>


      </div>

      <div className="row">

        <div className="col-md-2">

          <div className="form-group">

            <label for="schoolType6" id="schoolTypeLabel6" >School Type:</label>

            <select className="form-control" id="schoolType6" name="schoolType6" ref="schoolType6">
              <option value="--">--</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
              <option value="Professional">Professional</option>
            </select>

          </div>

        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="schoolName6" id="schoolNameLabel6">School Name:</label>

            <input type="text" className="form-control" id="schoolName6" ref="schoolName6"></input>

          </div>


        </div>

        <div className="col-md-2">

          <div className="form-group">

            <label for="schoolState6" id="schoolStateLabel6" >State:</label>

            <select className="form-control" id="schoolState6" name="schoolState6" ref="schoolState6">
              <option value="--">--</option>
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

        <div className="col-md-2">

          <div className="form-group">

            <label for="graduationDate6" id="graduationDateLabel6">Graduation Date:</label>

            <input type="text" className="form-control" id="graduationDate6" ref="graduationDate6" placeholder="mm/dd/yyyy"></input>

          </div>


        </div>

        <div className="col-md-3">

          <div className="form-group">

            <label for="degree6" id="degreeLabel6">Degree/Certificate:</label>

            <input type="text" className="form-control" id="degree6" ref="degree6"></input>

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

export default Education;
