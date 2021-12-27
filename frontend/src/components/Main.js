import axios from "axios";
import { React, useEffect } from "react";

const Main = () => {
  return (
    <>
      <div className="Jumbo">
        <div className="Jumbo-description"></div>
      </div>

      <div className="Youtuber">
        <div className="tiles">
          <ul>
            <li>유튜버1</li>
            <li>유튜버2</li>
            <li>유튜버3</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
