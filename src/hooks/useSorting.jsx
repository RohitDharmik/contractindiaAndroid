
import {
  useState
}
from "react";

export const useSorting =
() => {

  const [
    sort,
    setSort
  ] = useState(null);

  return {

    sort,

    setSort,
  };
};
