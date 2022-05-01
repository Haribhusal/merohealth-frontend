import React from "react";

const KeyFeatures = ({ keyfeature }) => {
  return (
    <div className="keyfeatureswrapper">
      <div className="title my-3">
        <strong>Key Features</strong>
      </div>
      {keyfeature ? (
        <ul className="keyfeatures">
          {keyfeature?.features.map((feat, index) => (
            <li key={index}>
              <i className="las la-check"></i> {feat}
            </li>
          ))}
        </ul>
      ) : (
        "No Data Available"
      )}
    </div>
  );
};

export default KeyFeatures;
