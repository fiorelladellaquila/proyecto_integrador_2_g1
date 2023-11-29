import BookingComponent from "@/components/booking/template/BookingComponent";
import { NextPage } from "next";
import * as React from "react";

interface Props {
    result: any;
  }

const Shifts: NextPage<Props> = ({ result }: any) => {
  return <BookingComponent result={result} />;
};

export default Shifts;
