import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./D1.css";

const D1 = () => {
  return (
    <>
      <div className="container text-center justify-content-center align-items-center mt-10">
        <h2 className="display-2  mt-10 ev ">
          Every idea needs a <strong className="font-weight-bold b">Medium</strong>
        </h2>
      </div>
      {/* New Animation Class started */}
      <div className="border-top border-bottom border-dark container-fluied d-flex flex-md-row flex-column">
        <div className="col-md-6 col-sm-12 para justify-content-centre d-flex justify-content-center ">
          <p className="  text-centre">
            The best ideas can change who we are. Medium is where those ideas
            take shape, take off, and spark powerful conversations. We’re an
            open platform where over 100 million readers come to find insightful
            and dynamic thinking. Here, expert and undiscovered voices alike
            dive into the heart of any topic and bring new ideas to the surface.
            Our purpose is to spread these ideas and deepen understanding of the
            world. We’re creating a new model for digital publishing. One that
            supports nuance, complexity, and vital storytelling without giving
            in to the incentives of advertising. It’s an environment that’s open
            to everyone but promotes substance and authenticity. And it’s where
            deeper connections forged between readers and writers can lead to
            discovery and growth. Together with millions of collaborators, we’re
            building a trusted and vibrant ecosystem fueled by important ideas
            and the people who think about them.
          </p>
        </div>
        <div className="border-left border-dark  bl col-md-6 col-sm-6">
          <img className=""
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default D1;
