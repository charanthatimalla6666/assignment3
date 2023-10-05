import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      {emojipedia.map((each) => {
        const { emoji, name, meaning } = each;
        return <Entry myemoji={emoji} myname={name} mymeaning={meaning} />;
      })}
    </div>
  );
}

export default App;
