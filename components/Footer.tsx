// // components/Footer.tsx
// import React from 'react';

// type Props = {
//   hidden: boolean;
// };

// const Footer: React.FC<Props> = ({ hidden }) => {
//   return (
//     <footer
//       className={`fixed bottom-0 left-0 w-full z-50 bg-navy text-white transition-transform duration-500 ${
//         hidden ? 'translate-y-full' : 'translate-y-0'
//       }`}
//     >
//       <div className="text-center py-3" style={{ fontSize: '30px' }}>
//         Page
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React, { useEffect, useMemo, useState } from "react";

// type Props = {
//   hidden: boolean;
// };

// // ---- CONFIG ----
// const IMAGE_COUNT = 36; // ← set to the number of files in /public/blue_beettle
// const IMG_W = 640; // uniform render width
// const IMG_H = 900; // uniform render height
// // Optional file naming pattern like 01.png, 02.png… (change if yours differ)
// const imageFiles = Array.from({ length: IMAGE_COUNT }, (_, i) => {
//   const n = String(i + 1).padStart(2, "0");
//   return `/images/blue_beetle/${n}.png`;
// });
// // ----------------

// const Footer: React.FC<Props> = ({ hidden }) => {
//   const [index, setIndex] = useState(0);

//   const isFirst = index === 0;
//   const isLast = index === imageFiles.length - 1;
//   const src = imageFiles[index];
//   const name = useMemo(
//     () =>
//       src
//         .split("/")
//         .pop()!
//         .replace(/\.[^.]+$/, ""), // file name w/o extension
//     [src]
//   );

//   const goPrev = () => !isFirst && setIndex((i) => i - 1);
//   const goNext = () => !isLast && setIndex((i) => i + 1);

//   // Broadcast the current image for the page to render (keeps Footer API simple)
//   useEffect(() => {
//     window.dispatchEvent(
//       new CustomEvent("carousel:image-change", {
//         detail: { index, src, name, width: IMG_W, height: IMG_H },
//       })
//     );
//   }, [index, src, name]);

//   return (
//     <footer
//       className={`fixed bottom-0 left-0 w-full z-50 bg-navy text-white transition-transform duration-500 ${
//         hidden ? "translate-y-full" : "translate-y-0"
//       }`}
//     >
//       <div className="max-w-5xl mx-auto px-6 py-3">
//         <div className="flex items-center justify-between">
//           {/* Left Arrow */}
//           <button
//             type="button"
//             onClick={goPrev}
//             aria-label="Previous image"
//             className={`h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-2xl transition-opacity duration-300 ${
//               isFirst ? "opacity-0 pointer-events-none" : "opacity-100"
//             }`}
//           >
//             &#8249;
//           </button>

//           {/* Current image name */}
//           <div className="text-center select-none">
//             <span className="text-lg font-medium tracking-wide">{name}</span>
//           </div>

//           {/* Right Arrow */}
//           <button
//             type="button"
//             onClick={goNext}
//             aria-label="Next image"
//             className={`h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-2xl transition-opacity duration-300 ${
//               isLast ? "opacity-0 pointer-events-none" : "opacity-100"
//             }`}
//           >
//             &#8250;
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

type Props = {
  hidden: boolean;
  title: string; // current image name from Home
  canPrev: boolean; // Home decides if we can go left
  canNext: boolean; // Home decides if we can go right
  onPrev: () => void; // wired to left arrow
  onNext: () => void; // wired to right arrow
};

const Footer: React.FC<Props> = ({
  hidden,
  title,
  canPrev,
  canNext,
  onPrev,
  onNext,
}) => {
  return (
    <footer
      className={`fixed bottom-0 left-0 w-full z-50 bg-navy text-white transition-transform duration-500 ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous image"
            className={`h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-2xl transition-opacity duration-300 ${
              canPrev ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            &#8249;
          </button>

          {/* Dynamic title */}
          <div className="text-center select-none">
            <span className="text-lg font-medium tracking-wide">{title}</span>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={onNext}
            aria-label="Next image"
            className={`h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-2xl transition-opacity duration-300 ${
              canNext ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            &#8250;
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
