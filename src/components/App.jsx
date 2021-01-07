import React from "react";
import Emoji from "./Emoji";
//import emojipedia from "../emojipedia";
import emojies from "../object";

function createEmoji(emojiTerm){
  return (<Emoji
  key={emojiTerm.index}
  emoji={emojiTerm.emoji}
  name={emojiTerm.description}
  meaning={emojiTerm.category}
  />);
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojies.map(createEmoji)}
      </dl>
    </div>
  );
}

export default App;
