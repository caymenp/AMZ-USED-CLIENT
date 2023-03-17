import React, { useState } from "react";
import emptyTable from "../util/media/Empty Cart.png";

export const EmptyTable = (openModal) => {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "0",
          margin: "0",
        }}
      >
        <img
          style={{
            maxWidth: "100%",
            height: "auto",
            padding: "0",
            margin: "0",
          }}
          src={emptyTable}
          alt="Empty Table"
          onClick={openModal}
        />
      </div>
    );
  }, 1500);
};
