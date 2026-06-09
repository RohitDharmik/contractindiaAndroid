import RootNavigator
from "./src/navigation/RootNavigator";

import { Providers }
from "./src/app/providers";

export default function App() {
  return (
    <Providers>
      <RootNavigator />
    </Providers>
  );
}