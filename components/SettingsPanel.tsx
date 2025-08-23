import React, { useEffect, useState } from 'react';

type Props = {
  visible: boolean;           // controls whether panel should be shown
  onClose: () => void;        // call to hide panel (overlay click or X)
};

const SettingsPanel: React.FC<Props> = ({ visible, onClose }) => {
  // Render during fade-out even when visible=false
  const [render, setRender] = useState(false);
  // true when we should be showing the "hidden" styles (opacity-0)
  const [fadeOut, setFadeOut] = useState(true);

  useEffect(() => {
    if (visible) {
      setRender(true);      // mount
      // next tick flip fade so we animate from 0 -> 100
      requestAnimationFrame(() => setFadeOut(false));
    } else {
      // start fade to 0, then unmount after the transition
      setFadeOut(true);
      const t = setTimeout(() => setRender(false), 500); // keep in sync w/ duration-500
      return () => clearTimeout(t);
    }
  }, [visible]);

  if (!render) return null;

  return (
    <>
      {/* Overlay (click to close) */}
      <button
        aria-label="Close settings"
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black bg-opacity-60 transition-opacity duration-500
          ${fadeOut ? 'opacity-0' : 'opacity-100'}
        `}
      />

      {/* Close X (top-right) */}
      <button
        onClick={onClose}
        aria-label="Close"
        className={`
          fixed right-4 top-4 z-50 h-9 w-9 rounded-full bg-white text-black
          flex items-center justify-center text-lg font-semibold shadow
          transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}
          hover:scale-[1.03] active:scale-95
        `}
      >
        ×
      </button>

      {/* Bottom settings bar */}
      <div
        className={`
          fixed bottom-0 left-0 w-full z-50 bg-navy text-white
          px-6 py-4 transition-opacity duration-500
          ${fadeOut ? 'opacity-0' : 'opacity-100'}
        `}
      >
        <div className="flex justify-evenly items-center flex-wrap gap-4">
          {/* Sliders column */}
          <div className="flex flex-col gap-4">
            {['Voices', 'Music', 'Sound Effects'].map((label) => (
              <label key={label} className="flex items-center gap-3">
                <span className="min-w-28">{label}</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-56 accent-beige"
                />
              </label>
            ))}
          </div>

          {/* Enlarge toggle button + label (kept as a single flex row) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="w-5 h-5 rounded-full border-2 border-beige bg-beige"
              aria-pressed="false"
              title="Toggle enlarge by hover"
            />
            <span className="text-base">Enlarge Panels By Hover</span>
          </div>

          {/* Arrow button (points to the right) */}
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-beige text-black text-lg flex items-center justify-center"
            aria-label="Next"
            title="Next"
          >
            →
          </button>
        </div>
      </div>
    </>
  );
};

export default SettingsPanel;
