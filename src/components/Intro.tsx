import React, { useState } from "react";
import Typed from "react-typed";

const Intro = () => {
  const [type2, setType2] = useState(false);
  const [type3, setType3] = useState(false);

  return (
    <>
      <div
        className="mockup-code mt-5"
        style={{ backgroundColor: "#112240", color: "#f57dff" }}
      >
        <pre data-prefix="$" style={{ color: "#64ffda" }}>
          <code>
            <Typed
              strings={["Hello there !"]}
              typeSpeed={70}
              onComplete={() => setType2(true)}
            />
          </code>
        </pre>
        <pre data-prefix=">" style={{ color: "#f57dff" }}>
          <code>
            {type2 && (
              <Typed
                strings={["My name is Nurbala ..."]}
                typeSpeed={70}
                onComplete={() => setType3(true)}
              />
            )}
          </code>
        </pre>
        <pre data-prefix="₼" className="text-warning">
          <code>
            {type3 && (
              <Typed
                strings={[
                  "I'm software engineer and senior computer engineering student.",
                ]}
                typeSpeed={70}
              />
            )}
          </code>
        </pre>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <label className="swap swap-flip text-9xl">
          <input type="checkbox" />

          <div className="swap-on">😈</div>
          <div className="swap-off">😇</div>
        </label>
      </div>
    </>
  );
};

export default Intro;
