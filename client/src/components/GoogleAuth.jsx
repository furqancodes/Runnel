import React, { useEffect, useState, useRef } from "react";

const GooleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const auth = useRef("");
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "937706485769-lfug9r25jtkoandkcosn3dqa5lcu1oo3.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChnage);
        });
    });
  });
  const onAuthChnage = () => {
    setIsSignedIn(auth.current.isSignedIn.get());
  };
  const signInDecider = () => {
    if (isSignedIn === null) {
      return null;
    }
    if (isSignedIn) {
      return (
        <button
          className="ui red google button"
          onClick={() => {
            auth.current.signOut();
          }}
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          className="ui blue google button"
          onClick={() => {
            auth.current.signIn();
          }}
        >
          <i className="google icon" />
          Sign in
        </button>
      );
    }
  };
  return <div>{signInDecider()}</div>;
};
export default GooleAuth;
//
