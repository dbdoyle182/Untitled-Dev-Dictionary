import React from "react";
import "./TermRelevant.css";
import { Link } from "react-router-dom";

const TermRelevant = props => (
  <div className="termRelevant">
    <h4>Relevant Terms</h4>
    <div className="flex-relevant">
    {props.relevant1 && (
      <button>
        <Link
          className="relevantLink"
          to={"/term/" + props.relevant1}
          replace
        >
          {props.relevant1} ►
        </Link>
      </button>
    )}
    {props.relevant2 && (
      <button>
        <Link
          className="relevantLink"
          to={"/term/" + props.relevant2}
          replace
        >
          {props.relevant2} ►
        </Link>
      </button>
    )}
    </div>
  </div>
);

export default TermRelevant;
