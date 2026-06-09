
import {
  useState
}
from "react";

export const useFilters =
() => {

  const [
    filters,
    setFilters
  ] = useState({});

  return {

    filters,

    setFilters,
  };
};
