import { forwardRef } from "react";
const IntroInfo = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="default-intro-container">
      <div className="default-intro-box">
        <div className="default-intro-title">
          <h1>DEFAULT PAGE</h1>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
});

export default IntroInfo;
