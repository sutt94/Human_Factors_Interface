import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class JobRelated extends Component {

processForm() {
  var dateTest = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
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

      <div className="row">

        <div className="col-md-3" id="previous">

          <Link to='/' className="btn btn-primary">Previous</Link>

        </div>

        <div className="col-md-6">

          <div className="label label-danger text-center" id="infoMessage" style={{color: "red", visibility: "hidden"}}>There was a problem with some of the data you entered. Please make the requried corrections below before continuing. <i className="fa fa-exclamation-circle" aria-hidden="true"></i></div>

        </div>


        <div className="col-md-3" id="continue" style={{visibility: "hidden"}}>

          <Link to='/JobRelated' className="btn btn-success">Continue</Link>

        </div>


      </div>


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

            <label for="state" id="issueState" >State Of Issue:</label>

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
  )

}

else{
  return(

    <div>HOIIII</div>

  )


}

}

}

export default JobRelated;
