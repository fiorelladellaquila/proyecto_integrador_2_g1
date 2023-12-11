import BookingComponent from "@/components/booking/template/BookingComponent";
import store from "@/redux/store";
import { NextPage } from "next";
import React from "react";
import { Provider } from "react-redux";

interface Props {
  result: any;
}

const Shifts: NextPage<Props> = ({ result }: any) => {
  return (
  <>
  {/* <Provider store={store}> */}
  <BookingComponent result={result} />;
  {/* </Provider> */}
  
  </>
 
  )};

export default Shifts;
