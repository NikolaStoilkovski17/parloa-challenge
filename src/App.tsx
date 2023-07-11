import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { ContextProvider } from "./context/GlobalState";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePageContainer } from "./containers/HomePageContainer";
import { CreateCustomerContainer } from "./containers/CreateCustomerContainer";

import "./App.css";

function App() {
  return (
    <ContextProvider>
      <StyledEngineProvider injectFirst>
        <Router>
          <Routes>
            <Route path="/" element={<HomePageContainer />} />
            <Route
              path="/create-customer/:id"
              element={<CreateCustomerContainer mode="create" />}
            />
            <Route
              path="/edit-customer/:id"
              element={<CreateCustomerContainer mode="edit" />}
            />
          </Routes>
        </Router>
      </StyledEngineProvider>
    </ContextProvider>
  );
}

export default App;
