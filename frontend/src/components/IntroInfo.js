import { forwardRef } from "react";
const IntroInfo = ({ placeIntro }) => {
  console.log(placeIntro);
  return (
    <div className="default-intro-container">
      {placeIntro ? (
        <div className="place-intro-box">
          <div className="place-intro-title">
            <h1>{placeIntro.place_name}</h1>
          </div>
          <div className=""></div>
        </div>
      ) : (
        <div className="default-intro-box">
          <div className="default-intro-title">
            <h1>음식점을 Click!</h1>
          </div>
        </div>
      )}
      {/* <div className="default-intro-box">
        <div className="default-intro-title">
          <h1>DEFAULT PAGE</h1>
        </div>
        <div className=""></div>
  </div>*/}
    </div>
  );
};

export default IntroInfo;
