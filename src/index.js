import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistStore } from "redux-persist";
import { configureStore } from "./app/store";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = configureStore();

const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate loading={<div>...Loading</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
