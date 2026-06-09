
import React from "react";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

export default function RootNavigator({
  isAuthenticated,
}) {

  return isAuthenticated
    ? <AppNavigator />
    : <AuthNavigator />;
}
