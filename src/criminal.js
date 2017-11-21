import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Criminal extends Component {


processForm() {
  localStorage.setItem("complete3", '0');
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  var errorDetected = 0;
  var continueLink = document.getElementById("continue");
  var infoMessage = document.getElementById("infoMessage");
  var dateTest = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  infoMessage.style.visibility = 'visible';

  var commited = document.getElementById("commited").value;
  var offenseDate = document.getElementById("offenseDate").value;
  var offenseLevel = document.getElementById("offenseLevel").value;
  var offense = document.getElementById("offense").value;

  var offenseDate2 = document.getElementById("offenseDate2").value;
  var offenseLevel2 = document.getElementById("offenseLevel2").value;
  var offense2 = document.getElementById("offense2").value;

  var offenseDate3 = document.getElementById("offenseDate3").value;
  var offenseLevel3 = document.getElementById("offenseLevel3").value;
  var offense3 = document.getElementById("offense3").value;

  var offenseDate4 = document.getElementById("offenseDate4").value;
  var offenseLevel4 = document.getElementById("offenseLevel4").value;
  var offense4 = document.getElementById("offense4").value;

  var offenseDate5 = document.getElementById("offenseDate5").value;
  var offenseLevel5 = document.getElementById("offenseLevel5").value;
  var offense5 = document.getElementById("offense5").value;

  var offenseDate6 = document.getElementById("offenseDate6").value;
  var offenseLevel6 = document.getElementById("offenseLevel6").value;
  var offense6 = document.getElementById("offense6").value;

  localStorage.setItem("commited", commited);
  localStorage.setItem("offenseDate", offenseDate);
  localStorage.setItem("offenseLevel", offenseLevel);
  localStorage.setItem("offense", offense);

  localStorage.setItem("offenseDate2", offenseDate2);
  localStorage.setItem("offenseLevel2", offenseLevel2);
  localStorage.setItem("offense2", offense2);

  localStorage.setItem("offenseDate3", offenseDate3);
  localStorage.setItem("offenseLevel3", offenseLevel3);
  localStorage.setItem("offense3", offense3);

  localStorage.setItem("offenseDate4", offenseDate4);
  localStorage.setItem("offenseLevel4", offenseLevel4);
  localStorage.setItem("offense4", offense4);

  localStorage.setItem("offenseDate5", offenseDate5);
  localStorage.setItem("offenseLevel5", offenseLevel5);
  localStorage.setItem("offense5", offense5);

  localStorage.setItem("offenseDate6", offenseDate6);
  localStorage.setItem("offenseLevel6", offenseLevel6);
  localStorage.setItem("offense6", offense6);



if(document.getElementById("commited").value === "Yes"){

if(document.getElementById("offenseDate").value==="" || !dateTest.test(document.getElementById("offenseDate").value)){
  var errorDetected = 1;

  document.getElementById("offsenseDateLabel").innerHTML = "Offense Date: *Required Information"
  document.getElementById("offsenseDateLabel").style.color = "red";
}else{
  document.getElementById("offsenseDateLabel").innerHTML = "Offense Date:"
  document.getElementById("offsenseDateLabel").style.color = "black";

}

if(document.getElementById("offenseLevel").value==="--"){
  var errorDetected = 1;

  document.getElementById("offenseLevelLabel").innerHTML = "Misdemeanor/Felony *Required Information"
  document.getElementById("offenseLevelLabel").style.color = "red";
}else{
  document.getElementById("offenseLevelLabel").innerHTML = "Misdemeanor/Felony"
  document.getElementById("offenseLevelLabel").style.color = "black";

}

if(document.getElementById("offense").value==="" || document.getElementById("offense").value===" "){
  var errorDetected = 1;

  document.getElementById("offsenseLabel").innerHTML = "Offense: *Required Information"
  document.getElementById("offsenseLabel").style.color = "red";
}else{
  document.getElementById("offsenseLabel").innerHTML = "Offense:"
  document.getElementById("offsenseLabel").style.color = "black";

}


}else{

  document.getElementById("offsenseLabel").innerHTML = "Offense:"
  document.getElementById("offsenseLabel").style.color = "black";
  document.getElementById("offenseLevelLabel").innerHTML = "Misdemeanor/Felony"
  document.getElementById("offenseLevelLabel").style.color = "black";
  document.getElementById("offsenseDateLabel").innerHTML = "Offense Date:"
  document.getElementById("offsenseDateLabel").style.color = "black";

}



  if(document.getElementById("offenseDate2").value == ""){

    document.getElementById("offsenseDateLabel2").innerHTML = "Offense Date:"

    document.getElementById("offsenseDateLabel2").style.color = "black";

  }

  if(document.getElementById("offenseDate3").value == ""){

    document.getElementById("offsenseDateLabel3").innerHTML = "Offense Date:"

    document.getElementById("offsenseDateLabel3").style.color = "black";

  }

  if(document.getElementById("offenseDate4").value == ""){

    document.getElementById("offsenseDateLabel4").innerHTML = "Offense Date:"

    document.getElementById("offsenseDateLabel4").style.color = "black";

  }

  if(document.getElementById("offenseDate5").value == ""){

    document.getElementById("offsenseDateLabel5").innerHTML = "Offense Date:"

    document.getElementById("offsenseDateLabel5").style.color = "black";

  }

  if(document.getElementById("offenseDate6").value == ""){

    document.getElementById("offsenseDateLabel6").innerHTML = "Offense Date:"

    document.getElementById("offsenseDateLabel6").style.color = "black";

  }



  if(document.getElementById("offenseDate").value !== ""){

  if (!dateTest.test(document.getElementById("offenseDate").value)) {

    errorDetected = 1;

    document.getElementById("offsenseDateLabel").innerHTML = "Offense Date: *Invalid Date"

    document.getElementById("offsenseDateLabel").style.color = "red";



  }
  else{

    document.getElementById("offsenseDateLabel").innerHTML = "Offense Date:"

    document.getElementById("offsenseDateLabel").style.color = "black";

  }

}

if(document.getElementById("offenseDate2").value !== ""){

if (!dateTest.test(document.getElementById("offenseDate2").value)) {

  errorDetected = 1;

  document.getElementById("offsenseDateLabel2").innerHTML = "Offense Date: *Invalid Date"

  document.getElementById("offsenseDateLabel2").style.color = "red";



}
else{

  document.getElementById("offsenseDateLabel2").innerHTML = "Offense Date:"

  document.getElementById("offsenseDateLabel2").style.color = "black";

}

}

if(document.getElementById("offenseDate3").value !== ""){

if (!dateTest.test(document.getElementById("offenseDate3").value)) {

  errorDetected = 1;

  document.getElementById("offsenseDateLabel3").innerHTML = "Offense Date: *Invalid Date"

  document.getElementById("offsenseDateLabel3").style.color = "red";



}
else{

  document.getElementById("offsenseDateLabel3").innerHTML = "Offense Date:"

  document.getElementById("offsenseDateLabel3").style.color = "black";

}

}

if(document.getElementById("offenseDate4").value !== ""){

if (!dateTest.test(document.getElementById("offenseDate4").value)) {

  errorDetected = 1;

  document.getElementById("offsenseDateLabel4").innerHTML = "Offense Date: *Invalid Date"

  document.getElementById("offsenseDateLabel4").style.color = "red";



}
else{

  document.getElementById("offsenseDateLabel4").innerHTML = "Offense Date:"

  document.getElementById("offsenseDateLabel4").style.color = "black";

}

}

if(document.getElementById("offenseDate5").value !== ""){

if (!dateTest.test(document.getElementById("offenseDate5").value)) {

  errorDetected = 1;

  document.getElementById("offsenseDateLabel5").innerHTML = "Offense Date: *Invalid Date"

  document.getElementById("offsenseDateLabel5").style.color = "red";



}
else{

  document.getElementById("offsenseDateLabel5").innerHTML = "Offense Date:"

  document.getElementById("offsenseDateLabel5").style.color = "black";

}

}

if(document.getElementById("offenseDate6").value !== ""){

if (!dateTest.test(document.getElementById("offenseDate6").value)) {

  errorDetected = 1;

  document.getElementById("offsenseDateLabel6").innerHTML = "Offense Date: *Invalid Date"

  document.getElementById("offsenseDateLabel6").style.color = "red";



}
else{

  document.getElementById("offsenseDateLabel6").innerHTML = "Offense Date:"

  document.getElementById("offsenseDateLabel6").style.color = "black";

}

}





  if (errorDetected == 0){

    var complete = '1';
    localStorage.setItem("complete3", complete);

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

  if(localStorage.getItem("complete3") == '1') {
  document.getElementById("continue").style.visibility = 'visible';
    }
  if(localStorage.getItem("commited") !== null) {
    this.refs.commited.value = localStorage.getItem("commited");
    }

    if(localStorage.getItem("offenseDate") !== null) {
      this.refs.offenseDate.value = localStorage.getItem("offenseDate");
      }

      if(localStorage.getItem("offenseLevel") !== null) {
        this.refs.offenseLevel.value = localStorage.getItem("offenseLevel");
        }

        if(localStorage.getItem("offense") !== null) {
          this.refs.offense.value = localStorage.getItem("offense");
          }


            if(localStorage.getItem("offenseDate2") !== null) {
              this.refs.offenseDate2.value = localStorage.getItem("offenseDate2");
              }

              if(localStorage.getItem("offenseLevel2") !== null) {
                this.refs.offenseLevel2.value = localStorage.getItem("offenseLevel2");
                }

                if(localStorage.getItem("offense2") !== null) {
                  this.refs.offense2.value = localStorage.getItem("offense2");
                  }


                    if(localStorage.getItem("offenseDate3") !== null) {
                      this.refs.offenseDate3.value = localStorage.getItem("offenseDate3");
                      }

                      if(localStorage.getItem("offenseLevel3") !== null) {
                        this.refs.offenseLevel3.value = localStorage.getItem("offenseLevel3");
                        }

                        if(localStorage.getItem("offense3") !== null) {
                          this.refs.offense3.value = localStorage.getItem("offense3");
                          }


                            if(localStorage.getItem("offenseDate4") !== null) {
                              this.refs.offenseDate4.value = localStorage.getItem("offenseDate4");
                              }

                              if(localStorage.getItem("offenseLevel4") !== null) {
                                this.refs.offenseLevel4.value = localStorage.getItem("offenseLevel4");
                                }

                                if(localStorage.getItem("offense4") !== null) {
                                  this.refs.offense4.value = localStorage.getItem("offense4");
                                  }

                                    if(localStorage.getItem("offenseDate5") !== null) {
                                      this.refs.offenseDate5.value = localStorage.getItem("offenseDate5");
                                      }

                                      if(localStorage.getItem("offenseLevel5") !== null) {
                                        this.refs.offenseLevel5.value = localStorage.getItem("offenseLevel5");
                                        }

                                        if(localStorage.getItem("offense5") !== null) {
                                          this.refs.offense5.value = localStorage.getItem("offense5");
                                          }


                                            if(localStorage.getItem("offenseDate6") !== null) {
                                              this.refs.offenseDate6.value = localStorage.getItem("offenseDate6");
                                              }

                                              if(localStorage.getItem("offenseLevel6") !== null) {
                                                this.refs.offenseLevel6.value = localStorage.getItem("offenseLevel6");
                                                }

                                                if(localStorage.getItem("offense6") !== null) {
                                                  this.refs.offense6.value = localStorage.getItem("offense6");
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
      <h3>Criminal History</h3><h6>(Fill out fields that apply to you)</h6>
    </div>

    <div className="col-md-3">
    </div>

  </div>

  <div className="row slight-smaller-bottom-buffer">

    <div className="col-md-3" id="previous">

      <Link to='/JobRelated' className="btn btn-primary">Previous</Link>

    </div>

    <div className="col-md-6">

      <div className="label label-danger text-center" id="infoMessage" style={{color: "red", visibility: "hidden"}}>There was a problem with some of the data you entered. Please make the requried corrections below before continuing. <i className="fa fa-exclamation-circle" aria-hidden="true"></i></div>

    </div>


    <div className="col-md-3 text-right" id="continue" style={{visibility: "hidden"}}>

      <Link to='/EducationHistory' className="btn btn-success">Continue</Link>

    </div>


  </div>

  <div className="row">

    <div className="col-md-4">
    </div>

    <div className="col-md-4">

      <div className="form-group text-center">

        <label for="commited" id="commitedLabel" >Have you been convicted of a criminal offense within the past 10 years?</label>

        <select className="form-control" id="commited" name="commited" ref="commited">
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>

      </div>

    </div>

    <div className="col-md-4">
    </div>

  </div>

  <div className="row slight-smaller-bottom-buffer">

    <div className="col-md-12 text-center">
      If yes please list all criminal convictions within the past 10 years.
    </div>



  </div>

  <div className='card bg-light medium-bottom-buffer '>
    <div class="card-body">

      <div className="row">

        <div className="col-md-4">

          <div className="form-group">

            <label for="offenseDate" id="offsenseDateLabel">Offense Date:</label>

            <input type="text" className="form-control" id="offenseDate" ref="offenseDate" placeholder="mm/dd/yyyy"></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="offenseLevel" id="offenseLevelLabel" >Misdemeanor/Felony</label>

            <select className="form-control" id="offenseLevel" name="offenseLevel" ref="offenseLevel">
              <option value="--">--</option>
              <option value="Misdemeanor">Misdemeanor</option>
              <option value="Felony">Felony</option>
            </select>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="offense" id="offsenseLabel">Offense:</label>

            <input type="text" className="form-control" id="offense" ref="offense"></input>

          </div>

        </div>

      </div>

      <div className="row">

        <div className="col-md-4">

          <div className="form-group">

            <label for="offenseDate2" id="offsenseDateLabel2">Offense Date:</label>

            <input type="text" className="form-control" id="offenseDate2" ref="offenseDate2" placeholder="mm/dd/yyyy"></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="offenseLevel2" id="offenseLevelLabel2" >Misdemeanor/Felony</label>

            <select className="form-control" id="offenseLevel2" name="offenseLevel2" ref="offenseLevel2">
              <option value="--">--</option>
              <option value="Misdemeanor">Misdemeanor</option>
              <option value="Felony">Felony</option>
            </select>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="offense2" id="offsenseLabel2">Offense:</label>

            <input type="text" className="form-control" id="offense2" ref="offense2"></input>

          </div>

        </div>

      </div>

      <div className="row">

        <div className="col-md-4">

          <div className="form-group">

            <label for="offenseDate3" id="offsenseDateLabel3">Offense Date:</label>

            <input type="text" className="form-control" id="offenseDate3" ref="offenseDate3" placeholder="mm/dd/yyyy"></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="offenseLevel3" id="offenseLevelLabel3" >Misdemeanor/Felony</label>

            <select className="form-control" id="offenseLevel3" name="offenseLevel3" ref="offenseLevel3">
              <option value="--">--</option>
              <option value="Misdemeanor">Misdemeanor</option>
              <option value="Felony">Felony</option>
            </select>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="offense3" id="offsenseLabel3">Offense:</label>

            <input type="text" className="form-control" id="offense3" ref="offense3"></input>

          </div>

        </div>

      </div>

      <div className="row">

        <div className="col-md-4">

          <div className="form-group">

            <label for="offenseDate4" id="offsenseDateLabel4">Offense Date:</label>

            <input type="text" className="form-control" id="offenseDate4" ref="offenseDate4" placeholder="mm/dd/yyyy"></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="offenseLevel4" id="offenseLevelLabel4" >Misdemeanor/Felony</label>

            <select className="form-control" id="offenseLevel4" name="offenseLevel4" ref="offenseLevel4">
              <option value="--">--</option>
              <option value="Misdemeanor">Misdemeanor</option>
              <option value="Felony">Felony</option>
            </select>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="offense4" id="offsenseLabel4">Offense:</label>

            <input type="text" className="form-control" id="offense4" ref="offense4"></input>

          </div>

        </div>

      </div>

      <div className="row">

        <div className="col-md-4">

          <div className="form-group">

            <label for="offenseDat5" id="offsenseDateLabel5">Offense Date:</label>

            <input type="text" className="form-control" id="offenseDate5" ref="offenseDate5" placeholder="mm/dd/yyyy"></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="offenseLevel5" id="offenseLevelLabel5" >Misdemeanor/Felony</label>

            <select className="form-control" id="offenseLevel5" name="offenseLevel5" ref="offenseLevel5">
              <option value="--">--</option>
              <option value="Misdemeanor">Misdemeanor</option>
              <option value="Felony">Felony</option>
            </select>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="offense5" id="offsenseLabel5">Offense:</label>

            <input type="text" className="form-control" id="offense5" ref="offense5"></input>

          </div>

        </div>

      </div>

      <div className="row">

        <div className="col-md-4">

          <div className="form-group">

            <label for="offenseDate6" id="offsenseDateLabel6">Offense Date:</label>

            <input type="text" className="form-control" id="offenseDate6" ref="offenseDate6" placeholder="mm/dd/yyyy"></input>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="offenseLevel6" id="offenseLevelLabel6" >Misdemeanor/Felony</label>

            <select className="form-control" id="offenseLevel6" name="offenseLevel6" ref="offenseLevel6">
              <option value="--">--</option>
              <option value="Misdemeanor">Misdemeanor</option>
              <option value="Felony">Felony</option>
            </select>

          </div>

        </div>

        <div className="col-md-4">

          <div className="form-group">

            <label for="offense6" id="offsenseLabel6">Offense:</label>

            <input type="text" className="form-control" id="offense6" ref="offense6"></input>

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

export default Criminal;
