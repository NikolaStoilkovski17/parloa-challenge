import React from "react";
import { Header } from "../../components/Header";
import { FiltersContainer } from "../FiltersContainer";
import { CustomersContainer } from "../CustomersContainer";

export const HomePageContainer = () => {
  return (
    <div className="wrapper">
      <Header />
      <FiltersContainer />
      <CustomersContainer />
    </div>
  );
};
