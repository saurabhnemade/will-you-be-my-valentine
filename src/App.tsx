"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Ek minute, tu sach mein no bol rahi hai?",
      "What if I bribe you with extra fries?",
      "Arrey please yaar, kal se gym bhi jaunga",
      "With unlimited pani puri and NO bhaiya ka extra paani",
      "I’ll let you win every argument forever",
      "But meri maa….*(",
      "Bas, ab toh zindagi bekaar hai",
      "Plzzzzzzzzzzzzzz, 7 janmon ka dosti ka sawaal hai",
      "Okay fine, but I’m telling aunty you’re mean",
      "PRETTY PLEASE WITH EXTRA GARMA GARAM SAMOSA",
      "With extra pani puri on top?",
      "With cheesecake,Tiramisu and Ice-cream?",
      "Imagine the regret when they make a biopic on me",
      "No? Toh bas, Bhagwan hi malik hai",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you pookie!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
