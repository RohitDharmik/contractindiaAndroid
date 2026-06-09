
import React from "react";

export default function GuestGuard({
  isAuthenticated,
  children,
}) {

  if (isAuthenticated) {
    return null;
  }

  return children;
}
