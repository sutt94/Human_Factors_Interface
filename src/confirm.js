import React, { Component } from 'react';


class Confirm extends Component {

render(){
  return (
    <div className="container">
      <div className="col-md-2">
      </div>
      <div className="col-md-8">
        <h4 style={{color: "green"}}>Your application has been succesfully submitted <i class="fa fa-check-circle-o" aria-hidden="true"></i></h4>
      </div>

      <div className="col-md-2">
      </div>
    </div>
  )
}

}
export default Confirm;
