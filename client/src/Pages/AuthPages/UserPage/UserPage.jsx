import React from "react";
import { useState, useEffect } from "react";
import Mentee from "../../../Components/Dashboard/Mentee/Mentee";
import Mentor from "../../../Components/Dashboard/Mentor/Mentor";

export default function UserPage() {
  // const [storedata, setStoredata] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("ConnectDot", JSON.stringify(storedata));
  // }, [storedata]);
  const params = window.location.href.split("?")[1];
  var page;
  if (params) {
    page = params.split("&")[1].split("=")[1];
  } else {
    page = "dashboard";
  }
  const localData = localStorage.getItem("ConnectDot");
  if (!localData) {
    window.location.href = "/login";
  }
  var obj = JSON.parse(localData);
  var type = obj["type"];
  if (!type) {
    type = params.split("&")[0].split("=")[1];
  }
  return (
    <>
      {type === "mentee" && (
        <>
          <Mentee page={page} />
        </>
      )}
      {type === "mentor" && (
        <>
          <Mentor page={page} />
        </>
      )}
    </>
  );
}
