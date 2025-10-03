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
            &#8250;  {/* arrow placeholder  */}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
