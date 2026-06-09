
export const required = (
  value
) => {

  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return "Required";
  }

  return true;
};

export const email = (
  value
) => {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    .test(value)
    ? true
    : "Invalid Email";
};

export const mobile = (
  value
) => {

  return /^[0-9]{10}$/
    .test(value)
    ? true
    : "Invalid Mobile";
};
