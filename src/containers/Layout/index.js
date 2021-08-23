import { Box } from "@material-ui/core";
import React from "react";
import Header from "../Header";

export default function Layout(props) {
  return (
    <>
      <Header />
      <Box height="104px"></Box>
      {props.children}
    </>
  );
}
