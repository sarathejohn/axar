import React from "react";
import Images from "../../../assets/img";

function TestimonialCard() {
  return (
    <div className="card w-full glass">
      <figure className="h-48">
        <img src={Images.person1} alt="car!" className=""/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Life hack</h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
