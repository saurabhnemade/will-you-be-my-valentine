import { useState, useEffect } from "react";

console.log("Valentine App Script running... ❤️");

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev.slice(-20),
        {
          id: Date.now(),
          left: Math.random() * 100,
          duration: 5 + Math.random() * 10,
          size: 10 + Math.random() * 20,
        },
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart absolute bottom-0 text-red-400"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

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
      "Are you sure? 🥺",
      "What if I asked really nicely? 🌹",
      "Pretty please? ✨",
      "PLEASE POOKIE! 🧸",
      "But :*( 💔",
      "I am going to die! 😵",
      "OK ur talking to my ghost 👻",
      "With a chocolate rice cake on top 🍫",
      "please babe? 🎀",
      "What about a matcha frostie? 🍵",
      ":(((( 😿",
      "PRETTY PLEASE 🙏",
      "Are you really really sure????? 🧐",
      "No :( ⛔",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center p-4 overflow-hidden">
      <FloatingHearts />

      <div className={`z-10 bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-2xl flex flex-col items-center w-full transition-all duration-300 ${noCount > 10 ? 'max-w-none h-full justify-center' : 'max-w-lg'}`}>
        {yesPressed ? (
          <div className="flex flex-col items-center animate-bounce">
            <img
              className="w-64 h-64 object-contain"
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="Cute bear kissing"
            />
            <div className="my-6 text-4xl md:text-6xl font-bold font-pacifico text-pink-600 drop-shadow-lg text-center">
              WOOOOOO!!! I love you pookie!! ❤️
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center w-full">
            <img
              className="h-[200px] drop-shadow-2xl animate-pulse"
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              alt="Requesting bear"
            />
            <h1 className="my-8 text-4xl md:text-5xl font-pacifico text-center text-pink-700 drop-shadow-md">
              Will you be my Valentine Rucha?
            </h1>
            <div className={`flex flex-wrap items-center justify-center gap-4 ${noCount > 5 ? 'flex-col' : ''}`}>
              <button
                className="rounded-full bg-green-500 px-8 py-4 font-bold text-white shadow-2xl hover:bg-green-600 active:scale-95 transition-all duration-200 z-20"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button
                onClick={handleNoClick}
                className="rounded-full bg-red-500 px-6 py-4 font-bold text-white shadow-lg hover:bg-red-600 active:scale-95 transition-all duration-200 whitespace-nowrap"
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
