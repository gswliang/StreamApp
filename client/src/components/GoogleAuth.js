import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = () => {
  const auth = useRef();
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  const googleAuth = () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "119929337606-e0kf8uo8e4vumbk75lkhe6uh0f2gp1c3.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.current.isSignedIn.get());
          //Listen user's signed in or out
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  };

  useEffect(() => {
    googleAuth();
  }, []);

  const onSignIn = () => {
    auth.current.signIn();
  };

  const onSignOut = () => {
    auth.current.signOut();
  };

  const onAuthChange = (isUserSignedIn) => {
    const userId = auth.current.currentUser.get().getId();
    if (isUserSignedIn) {
      dispatch(signIn(userId));
    } else {
      dispatch(signOut());
    }
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button className="ui red google button" onClick={onSignOut}>
          <i className="google icon" />
          Sign out
        </button>
      );
    }
    return (
      <button className="ui primary google button" onClick={onSignIn}>
        <i className="google icon" />
        Sign in with Google
      </button>
    );
  };

  return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
