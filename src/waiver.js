import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Waiver extends Component {


    processForm() {
      var errorDetected = 0;
      localStorage.setItem("complete8", '0');
      var continueLink = document.getElementById("continue");
      var infoMessage = document.getElementById("infoMessage");
      var dateTest = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      infoMessage.style.visibility = 'visible';
      var signature = document.getElementById("signature").value;
      localStorage.setItem("signature", signature);
      var date = document.getElementById("date").value;
      localStorage.setItem("date", date);


      if (document.getElementById("signature").value == "" || document.getElementById("signature").value == " ") {

        errorDetected = 1;

        document.getElementById("signatureLabel").innerHTML = "Signature: *Signature Required"

        document.getElementById("signatureLabel").style.color = "red";

      }
      else{

        document.getElementById("signatureLabel").innerHTML = "Signature:"

          document.getElementById("signatureLabel").style.color = "black";



      }

      if (!dateTest.test(document.getElementById("date").value)) {

        errorDetected = 1;

        document.getElementById("dateLabel").innerHTML = "Date: *Invalid Date"

        document.getElementById("dateLabel").style.color = "red";



      }
      else{

        document.getElementById("dateLabel").innerHTML = "Date:"

        document.getElementById("dateLabel").style.color = "black";

      }




      if (errorDetected == 0){

        var complete = '1';
        localStorage.setItem("complete8", complete);

        document.getElementById("infoMessage").innerHTML = "Your information has been saved. Press submit to complete your application. " + "<i class='fa fa-check-circle-o' aria-hidden='true'></i>"

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

    if(localStorage.getItem("complete8") == '1') {
    document.getElementById("continue").style.visibility = 'visible';
      }

    if(localStorage.getItem("signature") !== null) {
      this.refs.signature.value = localStorage.getItem("signature");
      }

      if(localStorage.getItem("date") !== null) {
        this.refs.date.value = localStorage.getItem("date");
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
      <h3>Application Aknowledgement and Waiver</h3>
      <h3>Please read carefully and sign</h3>
    </div>

    <div className="col-md-2">
    </div>

  </div>

  <div className="row slight-smaller-bottom-buffer">

    <div className="col-md-3" id="previous">

      <Link to='/Additional' className="btn btn-primary">Previous</Link>

    </div>

    <div className="col-md-6">

      <div className="label label-danger text-center" id="infoMessage" style={{color: "red", visibility: "hidden"}}>You must sign the application. <i className="fa fa-exclamation-circle" aria-hidden="true"></i></div>

    </div>


    <div className="col-md-3 text-right" id="continue" style={{visibility: "hidden"}}>

      <Link to='/Confirm' className="btn btn-success">Submit Application</Link>

    </div>


  </div>

  <div className='card bg-light medium-bottom-buffer '>
    <div class="card-body">
      <div className="row">


        <div className="col-md-12">

          <h6>IN EXCHANGE FOR THE CONSIDERATION OF MY JOB APPLICATION BY UNFINISHED BUSINESS, I AGREE THAT: NEITHER THE ACCEPTANCE OF THIS APPLICATION NOR THE SUBSEQUENT ENTRY INTO ANY TYPE OF EMPLOYMENT RELATIONSHIP, EITHER IN THE POSITION APPLIED FOR OR ANY OTHER POSITION, AND REGARDLESS OF THE CONTENTS OF EMPLOYEE HANDBOOKS, PERSONNEL MANUALS, BENEFIT PLANS, POLICY STATEMENTS, AND THE LIKE AS THEY MAY EXIST FROM TIME TO TIME, OR OTHER UNFINISHED BUSINESS PRACTICES, SHALL SERVE TO CREATE AN ACTUAL OR IMPLIED CONTRACT OF EMPLOYMENT, OR TO CONFER ANY RIGHT TO REMAIN AN EMPLOYEE OF UNFINISHED BUSINESS, OR OTHERWISE TO CHANGE IN ANY RESPECT THE EMPLOYMENT-AT-WILL RELATIONSHIP BETWEEN IT AND THE UNDERSIGNED, AND THAT RELATIONSHIP CANNOT BE ALTERED EXCEPT BY A WRITTEN INSTRUMENT SIGNED BY THE PRESIDENT /GENERAL MANAGER OF UNFINISHED BUSINESS. BOTH THE UNDERSIGNED AND UNFINISHED BUSINESS MAY END THE EMPLOYMENT RELATIONSHIP AT ANY TIME, WITHOUT SPECIFIED NOTICE OR REASON. IF EMPLOYED, I UNDERSTAND THAT UNFINISHED BUSINESS MAY UNILATERALLY CHANGE OR REVISE THEIR BENEFITS, POLICIES AND PROCEDURES AND SUCH CHANGES MAY INCLUDE REDUCTION IN BENEFITS. </h6>
          <br/>
          <h6>I AUTHORIZE INVESTIGATION OF ALL STATEMENTS CONTAINED IN THIS APPLICATION. I UNDERSTAND THAT THE
            MISREPRESENTATION OR OMISSION OF FACTS CALLED FOR IS CAUSE FOR DISMISSAL AT ANY TIME WITHOUT ANY
            PREVIOUS NOTICE. I HEREBY GIVE UNFINISHED BUSINESS PERMISSION TO CONTACT SCHOOLS, PREVIOUS EMPLOYERS
            (UNLESS OTHERWISE INDICATED), REFERENCES, AND OTHERS, AND HEREBY RELEASE UNFINISHED BUSINESS FROM ANY
          LIABILITY AS A RESULT OF SUCH CONTACT.</h6>
          <br/>
          <h6>I ALSO UNDERSTAND THAT (1) UNFINISHED BUSINESS HAS A DRUG AND ALCOHOL POLICY THAT PROVIDES FOR PREEMPLOYMENT TESTING AS WELL AS TESTING AFTER EMPLOYMENT; (2) CONSENT TO AND COMPLIANCE WITH SUCH POLICY IS A CONDITION OF MY EMPLOYMENT; AND (3) CONTINUED EMPLOYMENT IS BASED ON THE SUCCESSFUL PASSING OF TESTING UNDER SUCH POLICY.  I UNDERSTAND THAT IF I AM EXTENDED AN OFFER OF EMPLOYMENT IT MAY BE CONDITIONED UPON MY SUCCESSFULLY PASSING A COMPLETE PRE-EMPLOYMENT PHYSICAL EXAMINATION. </h6>
          <br/>
          <h6>I FURTHER UNDERSTAND THAT MY EMPLOYMENT WITH UNFINISHED BUSINESS SHALL BE PROBATIONARY FOR A PERIOD OF SIXTY (60) DAYS, AND FURTHER THAT AT ANY TIME DURING THE PROBATIONARY PERIOD OR THEREAFTER, MY EMPLOYMENT RELATION WITH UNFINISHED BUSINESS IS TERMINABLE AT WILL FOR ANY REASON BY EITHER PARTY. </h6>






        </div>

      </div>
    </div>
</div>

  <div className="row">

    <div className="col-md-4">
    </div>

    <div className="col-md-5">

      <div className="form-group">

        <label for="signature" id="signatureLabel">Signature:</label>

        <input type="text" className="form-control" id="signature" ref="signature"></input>

      </div>


    </div>

    <div className="col-md-3">

      <div className="form-group">

        <label for="date" id="dateLabel">Date:</label>

        <input type="text" className="form-control" id="date" ref="date" placeholder="mm/dd/yyyy"></input>

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

export default Waiver;
