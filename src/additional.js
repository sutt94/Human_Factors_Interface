import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Additional extends Component {

  processForm() {
    var errorDetected = 0;
    localStorage.setItem("complete7", '0');
    var continueLink = document.getElementById("continue");
    var infoMessage = document.getElementById("infoMessage");
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    infoMessage.style.visibility = 'visible';
    var additional = document.getElementById("additional").value;
    localStorage.setItem("additional", additional);

    if (errorDetected == 0){

      var complete = '1';
      localStorage.setItem("complete7", complete);

      document.getElementById("infoMessage").innerHTML = "Your information has been saved. Press continue to move on to the next phase of the application " + "<i class='fa fa-check-circle-o' aria-hidden='true'></i>"

        document.getElementById("infoMessage").style.color = "green";

        continueLink.style.visibility = 'visible';


    }

  }

  componentDidMount () {

    if(localStorage.getItem("complete7") == '1') {
    document.getElementById("continue").style.visibility = 'visible';
      }

    if(localStorage.getItem("additional") !== null) {
      this.refs.additional.value = localStorage.getItem("additional");
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

  <div className="row text-center">



    <div className="col-md-12 text-center small-top-buffer">
      <h3>Provide any additional skills, experiences, and other important information that supports your application that has not been listed elsewhere in this application.(Optional)</h3>
    </div>



  </div>

  <div className="row slight-smaller-bottom-buffer">

    <div className="col-md-3" id="previous">

      <Link to='/References' className="btn btn-primary">Previous</Link>

    </div>

    <div className="col-md-6">

      <div className="label label-danger text-center" id="infoMessage" style={{color: "red", visibility: "hidden"}}>There was a problem with some of the data you entered. Please make the requried corrections below before continuing. <i className="fa fa-exclamation-circle" aria-hidden="true"></i></div>

    </div>


    <div className="col-md-3 text-right" id="continue">

      <Link to='/Waiver' className="btn btn-success">Continue</Link>

    </div>


  </div>

  <div className='card bg-light medium-bottom-buffer '>
    <div class="card-body">

  <div className="row medium-bottom-buffer">
    <div className="col-md-12">
      <div className="form-group">
        <textarea class="form-control" rows="20" id="additional" ref="additional"></textarea>
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

export default Additional;
