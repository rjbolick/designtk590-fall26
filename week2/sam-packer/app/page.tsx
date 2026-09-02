"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const RICKROLL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const SANDSTORM = "https://www.youtube.com/watch?v=y6120QOlsfU";

/* links that actually go somewhere, mostly to 1997 */
const LINKZ: { label: string; href: string; blink?: boolean }[] = [
  { label: "💿 MY MP3 COLLECTION 💿", href: "https://freemusicarchive.org/", blink: true },
  { label: "👽 ALIENZ R REAL 👽", href: "https://www.seti.org/" },
  { label: "🐉 DRAGON PICTURES 🐉", href: "https://commons.wikimedia.org/wiki/Category:Dragons" },
  { label: "🎮 CHEAT CODEZ 4 DOOM 🎮", href: "https://archive.org/details/softwarelibrary_msdos_games" },
  { label: "🚫 NO FRAMES VERSION 🚫", href: RICKROLL, blink: true },
  { label: "📼 MY WEBCAM (OFFLINE) 📼", href: "https://www.cl.cam.ac.uk/coffee/coffee.html" },
  { label: "🖼️ COOL GIFS I FOUND 🖼️", href: "https://gifcities.org/" },
  { label: "🧙 WIZARD FACTS 🧙", href: "https://en.wikipedia.org/wiki/Merlin" },
  { label: "💰 GET RICH QUICK 💰", href: "https://zombo.com/", blink: true },
  { label: "🏀 SPACE JAM (OFFICIAL) 🏀", href: "https://www.spacejam.com/1996/" },
  { label: "🌐 SURF THE OLD WEB 🌐", href: "https://theoldnet.com/" },
  { label: "🐹 HAMPSTER DANCE 🐹", href: "https://www.hampsterdance.com/" },
  { label: "🎨 CAMERON'S WORLD 🎨", href: "https://www.cameronsworld.net/" },
  { label: "⏳ THE WAYBACK MACHINE ⏳", href: "https://web.archive.org/" },
  { label: "🎵 WHAT SONG IS THIS?? 🎵", href: SANDSTORM, blink: true },
  { label: "🚗 BUY A CAR (LOUD SITE) 🚗", href: "https://www.lingscars.com/" },
  { label: "🏛️ THE VERY FIRST WEBSITE 🏛️", href: "http://info.cern.ch/hypertext/WWW/TheProject.html" },
  { label: "💵 BILLIONAIRE HOMEPAGE 💵", href: "https://www.berkshirehathaway.com/" },
];

const LINK_ROWS = Array.from({ length: Math.ceil(LINKZ.length / 3) }, (_, i) =>
  LINKZ.slice(i * 3, i * 3 + 3),
);

const TRAIL_EMOJI = ["💀", "🔥", "✨", "☠️", "💥", "🌈", "👽"];

const POPUP_ADS = [
  {
    title: "⚠️ SYSTEM ALERT",
    body: "CONGRATULATIONS!!! U R THE 1,000,000th VISITOR!!!",
    cta: "CLAIM UR FREE IMAC",
  },
  {
    title: "💰 FREE MONEY.EXE",
    body: "MAKE $$$$ FROM HOME STUFFING ENVELOPES ON THE INFORMATION SUPERHIGHWAY",
    cta: "TELL ME MORE",
  },
  {
    title: "🔥 HOT SINGLES",
    body: "HOT SINGLES IN UR AREA CODE R WAITING 2 CHAT ON IRC!!",
    cta: "CONNECT 2 CHATROOM",
  },
  {
    title: "🎧 NAME THAT TUNE",
    body: "IS THIS SANDSTORM?? CLICK 2 IDENTIFY THE SONG PLAYING ON THIS PAGE",
    cta: "IDENTIFY SONG",
  },
  {
    title: "🖥️ DOWNLOAD MORE RAM",
    body: "UR COMPUTER IS RUNNING SLOW!!! DOWNLOAD 64MB OF RAM FOR FREE!!",
    cta: "DOWNLOAD RAM.ZIP",
  },
  {
    title: "☠️ VIRUS DETECTED",
    body: "42 VIRUSES FOUND ON UR HARD DRIVE (C:\\). ACT NOW!!!",
    cta: "SCAN MY COMPUTER",
  },
];

const STARTER_ENTRIES = [
  {
    name: "xX_DarkLord420_Xx",
    message: "SICK SITE DUDE!!! check out my page its got dragons",
    date: "11/03/1998",
  },
  {
    name: "l33t_hax0r_99",
    message: "yo what song is this?????? shazam wont pick it up",
    date: "11/17/1998",
  },
  {
    name: "Mom",
    message: "Sam honey the computer is making the loud noise again. Love, Mom",
    date: "12/24/1998",
  },
  {
    name: "webmaster@geocities",
    message: "u have exceeded ur 15MB of free hosting. please delete some gifs.",
    date: "01/09/1999",
  },
];

/* closing an ad in 1998 was never that easy */
function scheduleRevenge(spawn: () => void) {
  if (Math.random() < 0.6) setTimeout(spawn, 250);
}

type Popup = {
  id: number;
  ad: (typeof POPUP_ADS)[number];
  x: number;
  y: number;
};

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [hits, setHits] = useState(9147);
  const [clock, setClock] = useState("");
  const [popups, setPopups] = useState<Popup[]>([]);
  const [playing, setPlaying] = useState(false);
  const [entries, setEntries] = useState(STARTER_ENTRIES);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [dodges, setDodges] = useState(0);
  const [dodgeStyle, setDodgeStyle] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const popupId = useRef(0);
  const audioEl = useRef<HTMLAudioElement | null>(null);

  const spawnPopup = useCallback(() => {
    setPopups((current) => {
      if (current.length >= 6) return current;
      const ad = POPUP_ADS[Math.floor(Math.random() * POPUP_ADS.length)];
      return [
        ...current,
        {
          id: popupId.current++,
          ad,
          x: Math.random() * Math.max(window.innerWidth - 340, 0),
          y: Math.random() * Math.max(window.innerHeight - 220, 0),
        },
      ];
    });
  }, []);

  const closePopup = (id: number) => {
    setPopups((current) => current.filter((p) => p.id !== id));
    scheduleRevenge(spawnPopup);
  };

  useEffect(() => {
    if (!entered) return;
    const tick = setInterval(() => {
      setHits((h) => h + Math.floor(Math.random() * 4));
      setClock(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(tick);
  }, [entered]);

  useEffect(() => {
    if (!entered) return;
    const first = setTimeout(spawnPopup, 3000);
    const more = setInterval(spawnPopup, 12000);
    return () => {
      clearTimeout(first);
      clearInterval(more);
    };
  }, [entered, spawnPopup]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const sparkle = document.createElement("span");
      sparkle.textContent =
        TRAIL_EMOJI[Math.floor(Math.random() * TRAIL_EMOJI.length)];
      sparkle.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;pointer-events:none;font-size:24px;z-index:9999;transition:all .8s linear;`;
      document.body.appendChild(sparkle);
      requestAnimationFrame(() => {
        sparkle.style.opacity = "0";
        sparkle.style.transform = "translateY(60px) rotate(540deg) scale(2)";
      });
      setTimeout(() => sparkle.remove(), 800);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const startMusic = () => {
    audioEl.current?.play().catch(() => setPlaying(false));
  };

  const toggleMusic = () => {
    const el = audioEl.current;
    if (!el) return;
    if (el.paused) {
      startMusic();
    } else {
      el.pause();
    }
  };

  const signGuestbook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setEntries((current) => [
      {
        name: name.trim(),
        message: message.trim(),
        date: new Date().toLocaleDateString(),
      },
      ...current,
    ]);
    setName("");
    setMessage("");
    setHits((h) => h + 1000);
  };

  const dodge = () => {
    setDodges((d) => d + 1);
    setDodgeStyle({
      x: (Math.random() - 0.5) * 500,
      y: (Math.random() - 0.5) * 220,
    });
  };

  const stereo = (
    <audio
      ref={audioEl}
      src="/background_music.mp3"
      loop
      preload="auto"
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
    />
  );

  if (!entered) {
    return (
      <div className="splash">
        {stereo}
        <p style={{ fontSize: 90 }}>
          <span className="spin">💀</span>
          <span className="flame">🔥</span>
          <span className="spin">💀</span>
        </p>
        <h1 className="wordart wobble">ENTER IF U DARE</h1>
        <button
          className="enter-btn"
          type="button"
          onClick={() => {
            setEntered(true);
            startMusic();
          }}
        >
          &gt;&gt;&gt; CLICK HERE 2 ENTER &lt;&lt;&lt;
        </button>
        <p className="comic blink" style={{ fontSize: 22, color: "#ff0000" }}>
          WARNING: X-TREME GRAPHICS &amp; AUTOPLAYING SANDSTORM.MID AHEAD
        </p>
        <a
          className="courier"
          href={RICKROLL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 16 }}
        >
          (low bandwidth text-only version)
        </a>
      </div>
    );
  }

  return (
    <div>
      {stereo}
      {popups.map((popup) => (
        <div key={popup.id} className="popup" style={{ left: popup.x, top: popup.y }}>
          <div className="popup-title">
            <span>{popup.ad.title}</span>
            <button type="button" onClick={() => closePopup(popup.id)}>
              X
            </button>
          </div>
          <div className="popup-body">
            <p>{popup.ad.body}</p>
            <p>
              <a href={RICKROLL} target="_blank" rel="noopener noreferrer">
                [ {popup.ad.cta} ]
              </a>
            </p>
          </div>
        </div>
      ))}

      <div className="marquee-box">
        <div className="marquee-inner impact">
          ☠️🔥 WELCOME 2 SAM&apos;S X-TREME CYBER ZONE!!! U R VISITOR #{hits} 🔥☠️
          &nbsp;&nbsp; NO SCRIPT KIDDIEZ ALLOWED &nbsp;&nbsp; 💀💀💀
        </div>
      </div>

      <div className="construction">
        🚧🚧 UNDER CONSTRUCTION 🚧🚧 PARDON OUR DUST 🚧🚧 SINCE 1997 🚧🚧
      </div>

      <center>
        <h1 className="wordart wobble">SAM&apos;S HOMEPAGE</h1>
        <p className="papyrus rainbow-text blink" style={{ fontSize: 34 }}>
          *~*~* U HAVE ENTERED THE ZONE *~*~*
        </p>
        <p style={{ fontSize: 70 }}>
          <span className="spin">💀</span>
          <span className="flame">🔥</span>
          <span className="spin">☠️</span>
          <span className="flame">🔥</span>
          <span className="spin">💀</span>
        </p>
      </center>

      <hr className="awful" />

      <div className="bevel">
        <h2 className="impact rainbow-text" style={{ fontSize: 44 }}>
          &gt;&gt;&gt; ABOUT THIS SITE &lt;&lt;&lt;
        </h2>
        <p className="comic" style={{ fontSize: 22, lineHeight: 1.8 }}>
          HI!!!! my name is SAM and this is MY corner of the WORLD WIDE WEB!!!
          <span className="blink"> 🆕NEW🆕 </span>
          i made this site in <b className="courier">NOTEPAD.EXE</b> with{" "}
          <span className="rainbow-text">100% HAND CODED HTML</span> (no
          dreamweaver LOL). please <span className="wobble">SIGN MY GUESTBOOK</span>{" "}
          and email me at{" "}
          <a href="mailto:xX_sam_Xx@hotmail.com">xX_sam_Xx@hotmail.com</a> !!!!!!
        </p>
        <center>
          <button className="guestbook-btn" type="button" onClick={toggleMusic}>
            {playing
              ? "⏹️ STOP THE MUSIC (COWARD)"
              : "🎵 PLAY MIDI: darude_sandstorm_FINAL_v3.mid 🎵"}
          </button>
          <p className="papyrus" style={{ fontSize: 22 }}>
            {playing ? (
              <span className="blink">
                🎶 NOW PLAYING: DARUDE - SANDSTORM 🎶 TURN UR SPEAKERS UP 🎶
              </span>
            ) : (
              "🎵 sound card required (SoundBlaster 16 recommended) 🎵"
            )}
          </p>
        </center>
      </div>

      <div className="marquee-box">
        <div className="marquee-inner reverse comic">
          🌈 BEST VIEWED IN NETSCAPE NAVIGATOR 4.0 AT 800x600 🌈 IF IT LOOKS
          WEIRD GET A BETTER COMPUTER 🌈 SOUNDTRACK: DARUDE - SANDSTORM 🌈
        </div>
      </div>

      <div className="bevel huespin">
        <center>
          <h2 className="impact" style={{ fontSize: 40, color: "#00ff00" }}>
            ⚡ VISITOR COUNTER ⚡
          </h2>
          <div className="counter">{String(hits).padStart(8, "0")}</div>
          <p className="courier" style={{ fontSize: 20 }}>
            PEOPLE HAVE BEEN X-TREME SINCE 08/14/1997
          </p>
          <p className="comic blink" style={{ fontSize: 24, color: "#ff0000" }}>
            🕐 UR LOCAL TIME IZ: {clock || "LOADING........."} 🕐
          </p>
        </center>
      </div>

      <hr className="awful" />

      <div className="bevel">
        <center>
          <h2 className="impact rainbow-text" style={{ fontSize: 40 }}>
            ✍️ SIGN MY GUESTBOOK ✍️
          </h2>
        </center>
        <form className="gb-form" onSubmit={signGuestbook}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="UR SCREEN NAME (AOL ONLY)"
            maxLength={40}
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="SAY SOMETHING X-TREME..."
            rows={3}
            maxLength={280}
          />
          <button className="guestbook-btn" type="submit">
            📮 SUBMIT 2 THE WORLD WIDE WEB 📮
          </button>
        </form>
        <div style={{ maxWidth: 640, margin: "20px auto 0" }}>
          {entries.map((entry, i) => (
            <div className="gb-entry" key={`${entry.name}-${i}`}>
              <b>{entry.name}</b> <small>[{entry.date}]</small>
              <br />
              {entry.message}
            </div>
          ))}
        </div>
        <p className="tiny-legal" style={{ textAlign: "center" }}>
          Guestbook entries are stored on a 3.5&quot; floppy disk and will be lost
          when you refresh.
        </p>
      </div>

      <div className="bevel">
        <h2 className="papyrus rainbow-text" style={{ fontSize: 40 }}>
          🔗 MY AWESOME LINKZ 🔗
        </h2>
        <table className="webring">
          <tbody>
            {LINK_ROWS.map((row, i) => (
              <tr key={i}>
                {row.map((link) => (
                  <td key={link.href + link.label} className={link.blink ? "blink" : undefined}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="comic" style={{ fontSize: 20 }}>
          &lt;&lt; PREV |{" "}
          <a href={RICKROLL} target="_blank" rel="noopener noreferrer">
            RANDOM SITE
          </a>{" "}
          | NEXT &gt;&gt; ~ member of the{" "}
          <b className="rainbow-text">SKULL FIRE WEBRING</b> ~
        </p>
      </div>

      <center style={{ height: 190, position: "relative", overflow: "hidden" }}>
        <button
          className="guestbook-btn"
          type="button"
          onMouseEnter={dodge}
          onClick={spawnPopup}
          style={{
            transform: `translate(${dodgeStyle.x}px, ${dodgeStyle.y}px)`,
            transition: "transform .12s ease-out",
          }}
        >
          🚫 DO NOT CLICK THIS BUTTON 🚫
        </button>
        {dodges > 4 && (
          <p className="comic blink" style={{ fontSize: 22, color: "#00ff00" }}>
            HA HA U CANT CATCH ME ({dodges} TRIES)
          </p>
        )}
      </center>

      <div className="marquee-box">
        <div className="marquee-inner papyrus">
          💀🔥 SKULL FIRE 🔥💀 SKULL FIRE 🔥💀 SKULL FIRE 🔥💀 SKULL FIRE 🔥💀
        </div>
      </div>

      <center style={{ padding: "30px 10px" }}>
        <p style={{ fontSize: 60 }}>
          <span className="flame">🔥</span>
          <span className="wobble">💀</span>
          <span className="flame">🔥</span>
        </p>
        <p className="courier" style={{ fontSize: 18, color: "#00ff00" }}>
          © 1997-1999 SAM. ALL RIGHTZ RESERVED. DO NOT STEAL MY GRAPHICS!!!!!
        </p>
        <p className="tiny-legal">
          This page is optimized for a 28.8k modem. Please allow 4-6 minutes for
          images to load. Sam is not responsible for any seizures, monitor
          damage, or loss of employment resulting from viewing this page.
        </p>
      </center>
    </div>
  );
}
