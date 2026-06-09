
import { useThemeStore }
from "../store/themeStore";

import { lightTheme }
from "../theme/lightTheme";

import { darkTheme }
from "../theme/darkTheme";

export const useTheme = () => {

  const darkMode =
    useThemeStore(
      state=>state.darkMode
    );

  return darkMode
    ? darkTheme
    : lightTheme;
};
