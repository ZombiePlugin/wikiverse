import React from "react";
import { Page } from "./Page";

export const PagesList = ({ pages, handleClick }) => {
  return (
    <>
      {pages.map((page, idx) => {
        return (
          <button onClick={() => handleClick(page.slug)}>
            <Page page={page} key={idx} />
          </button>
        );
      })}
    </>
  );
};
