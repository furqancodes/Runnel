import React, { useEffect, useState, useRef } from "react";

const GooleAuth = () => {
  const { isSignedIn, setIsSignedIn } = useState(null);
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
          // auth.current.isSignedIn.listen()
        });
    });
  }, [setIsSignedIn]);
  return <div>Sign in by GOOGLE !</div>;
};
export default GooleAuth;
//
