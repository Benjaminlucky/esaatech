import React from "react";

function InnerPageHero({
  backgroundImage,
  title,
  highlightText,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}) {
  return (
    <div
      className="pageContainer w-full min-h-screen bg-[#020814] text-white bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="pageWrapper w-full min-h-screen mx-auto bg-[#020814]/90">
        <div className="sectionContainer max-w-11/12 lg:px-12 mx-auto min-h-screen flex flex-col">
          <div className="pageHero flex flex-col min-h-screen items-center justify-center text-center">
            <div className="pageHeroContent py-8 sm:w-11/12 lg:max-w-6/12 mx-auto">
              <h1 className="text-2xl lg:text-5xl font-bold mb-2 leading-tight text-center">
                {highlightText && (
                  <span className="text-orange-500">{highlightText}: </span>
                )}
                {title}
              </h1>
              {description && <p className="description">{description}</p>}

              <div className="buttons mt-16 w-full mx-auto flex flex-col md:flex-col lg:flex-row sm:flex-row items-center gap-4 justify-center">
                {primaryButtonText && (
                  <button className="primaryButton" onClick={onPrimaryClick}>
                    {primaryButtonText}
                  </button>
                )}
                {secondaryButtonText && (
                  <button
                    className="secondaryButton"
                    onClick={onSecondaryClick}
                  >
                    {secondaryButtonText}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnerPageHero;
