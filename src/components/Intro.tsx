import React, { useEffect, useState } from "react";
import Typed from "react-typed";

const Intro = () => {
  const [type2, setType2] = useState(false);
  const [type3, setType3] = useState(false);
  const [type4, setType4] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="">
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
        {windowWidth >= 1300 ? (
          <pre data-prefix="₼" className="text-warning">
            <code>
              {type3 && (
                <Typed
                  strings={[
                    "I'm software engineer and senior computer engineering student.",
                  ]}
                  typeSpeed={45}
                />
              )}
            </code>
          </pre>
        ) : (
          <>
            <pre data-prefix="₼" className="text-warning">
              <code>
                {type3 && (
                  <Typed
                    strings={["I'm software engineer and"]}
                    typeSpeed={50}
                    onComplete={() => setType4(true)}
                  />
                )}
              </code>
            </pre>
            <pre data-prefix="  " className="text-warning">
              <code>
                {type4 && (
                  <Typed strings={["senior CompEng student."]} typeSpeed={50} />
                )}
              </code>
            </pre>
          </>
        )}
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

          <div className="swap-on">🐐</div>
          <div className="swap-off">😇</div>
        </label>
      </div>
    </section>
  );
};

export default Intro;
