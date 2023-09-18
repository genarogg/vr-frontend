import React from "react";
import Icono from "../../../../../nano/Icono";
import A from "../../../../../nano/A";


const RedesLogin = () => {
  const Btn = ({ icono, fn }) => {
    return (
      <li>
        <button
          type="button"
          onClick={() => {
            fn();
          }}
        >
          <A to="#">
            <Icono css={icono} />
            <span></span>
          </A>
        </button>
      </li>
    );
  };
  return (
    <div className="redesSocialesAnimadas">
      <ul>
        <Btn icono="icon-google googleHover" fn={() => {}} />
        <Btn icono="icon-facebook facebookHover" fn={() => {}} />
        <Btn icono="icon-twitter twitterHover" fn={() => {}} />
        <Btn icono="icon-github-circle githubHover" fn={() => {}} />
      </ul>
    </div>
  );
};

export default RedesLogin;
