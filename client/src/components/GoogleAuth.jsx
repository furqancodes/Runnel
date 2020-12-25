import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const GooleAuth = ({ isSignedIn, signOut, signIn }) => {
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
          onAuthChnage(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChnage);
        });
    });
    // eslint-disable-next-line
  }, []);
  const onAuthChnage = (isSignedInu) => {
    if (isSignedInu) {
      signIn(auth.current.currentUser.get().getId());
    } else {
      signOut();
    }
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
const mapStateToProps = (state) => {
  console.log(state.auth.isSignedIn);
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GooleAuth);
//
