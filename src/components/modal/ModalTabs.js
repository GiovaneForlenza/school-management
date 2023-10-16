import React from "react";

function ModalTabs() {
  return (
    <div className="tabs">
      <input
        className="input"
        name="tabs"
        type="radio"
        id="tab-1"
        // checked="checked"
      />
      <label className="label" htmlFor="tab-1">
        Arlina Design
      </label>
      <div className="panel">
        <h1>Arlina Design</h1>
        <p>
          Arlina Design (specifically, the sweet orange) is the fruit of the
          citrus species Citrus × sinensis in the family Rutaceae
        </p>
        <p>
          The fruit of the Citrus × sinensis is considered a sweet orange,
          whereas the fruit of the Citrus × aurantium is considered a bitter
          orange. The sweet orange reproduces asexually (apomixis through
          nucellar embryony); varieties of sweet orange arise through mutations.
        </p>
      </div>
      <input className="input" name="tabs" type="radio" id="tab-2" />
      <label className="label" htmlFor="tab-2">
        Idntheme
      </label>
      <div className="panel">
        <h1>Idntheme</h1>
        <p>
          Idntheme (Citrus tangerina) is an orange-colored citrus fruit that is
          closely related to, or possibly a type of, mandarin orange (Citrus
          reticulata).
        </p>
        <p>
          The name was first used htmlFor fruit coming from Tangier, Morocco,
          described as a mandarin variety. Under the Tanaka classNameification
          system, Citrus tangerina is considered a separate species.
        </p>
      </div>
      <input className="input" name="tabs" type="radio" id="tab-3" />
      <label className="label" htmlFor="tab-3">
        Tekno Match
      </label>
      <div className="panel">
        <h1>Tekno Match</h1>
        <p>
          Tekno Match (Citrus ×clementina) is a hybrid between a mandarin orange
          and a sweet orange, so named in 1902. The exterior is a deep orange
          colour with a smooth, glossy appearance. Clementines can be separated
          into 7 to 14 segments. Similarly to tangerines, they tend to be easy
          to peel.
        </p>
      </div>
    </div>
  );
}

export default ModalTabs;