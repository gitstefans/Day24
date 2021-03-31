import React, { Component } from 'react';

class App extends Component {
  
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  }
  getMyStorage = () => {
    //var ca = document.cookie.split('=');
    //let myCookieData = ca[1];
    let myCookieData = document.cookie.split('=')[1];
    let myLocalStorageData = localStorage.getItem('Paragon');
    let mySessionStorageData = sessionStorage.getItem('frontend');
    console.log(myCookieData);
    console.log(myLocalStorageData);
    console.log(mySessionStorageData);
    return { myCookieData, myLocalStorageData, mySessionStorageData }
  }
  render() { 
    return ( 
      <div className="App">
        <button onClick={this.setMyStorage}>Set Cookie</button>
        <button onClick={this.getMyStorage}>Get Cookie</button>
      </div>
     );
  }
}
 
export default App;