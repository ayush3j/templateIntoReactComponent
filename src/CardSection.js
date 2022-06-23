import React from "react";
import Card from "./Card";


const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <Card title="cricket" myText="T20 world cup coming soon" buttonText="dekhlo"/>
          </div>
          <div className="col-4">
            <Card title="football" myText="fifa world cup coming soon" buttonText="sochlo"/>
          </div>
          <div className="col-4">
            <Card title="ludo" myText="lets play" buttonText="cheating"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
