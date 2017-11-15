import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class references extends Component {

processForm() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  var errorDetected = 0;




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

      <Link to='/JobRelated' className="btn btn-success">Continue</Link>

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
