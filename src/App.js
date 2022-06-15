
import React from 'react';
import { AppUI } from './AppUI/AppUI';

import { GeneralContextProvider } from './Context/GeneralContext';

function App() {

  return (
    <GeneralContextProvider>
      <AppUI />
    </GeneralContextProvider>
    
  );
}

export default App;
