import React from "react";

/*
  This component allows you to identify with any user ID you would like
*/

const identifyUser = () => {
  const newId = document.getElementById('input-id-field');

  window.localStorage.setItem("currentUser", newId.value); // sets new ID to persist across refresh
  window.Appcues.identify(newId.value); // identifies user with new value
  window.mixpanel.identify(newId.value); 
  newId.value = ''; // resets text input field

  window.Appcues.track('clicked login')
  
}

window.Appcues.track(identifyUser);
export default function AppcuesIdentifier() {

    return (
        <div>
          <h2>Enter your test user ID</h2>
            <input id="input-id-field" type="text"/>
            <button onClick={identifyUser}>Log in</button>
        </div>
    )
}