import React, { Component } from "react";

class Project4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //custom functions
  setCookie = (name, value, days) => {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  render() {
    return (
      <>
        <h3>
          PROJECT 4 - Check inspect tab for cookies, local storage and session
          storage.
        </h3>
        {/*code for local storage*/}
        {localStorage.setItem("lastname", "Smith")}
        {console.log(localStorage.getItem("lastname"))}
        {/*code for session storage*/}
        {(sessionStorage.fname = "Caesar")}
        {console.log(sessionStorage.getItem("fname"))}
        {/*code for cookies storage*/}
        {this.setCookie("user_email", "bobthegreat@gmail.com", 30)}
        <h3>-------------------------------------------------------------</h3>
      </>
    );
  }
}

export default Project4;
