import { useEffect, useState } from 'react';

type Props = {
  visible: boolean;
};

const SettingsPanel: React.FC<Props> = ({ visible }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!visible) {
      setIsFading(true);
      const timer = setTimeout(() => setIsFading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-navy z-50 text-white px-6 py-4 transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex justify-evenly items-center flex-wrap gap-4">
        {/* Sliders Column */}
        <div className="flex flex-col gap-4">
          {['Voices', 'Music', 'Sound Effects'].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <span>{label}</span>
              <input type="range" min="0" max="100" className="w-40 accent-beige" />
            </div>
          ))}
        </div>

        {/* Enlarge Toggle */}
        <div className="flex items-center gap-2">
          <button className="w-5 h-5 rounded-full border-2 border-beige bg-beige flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full" />
          </button>
          <span>Enlarge Panels By Hover</span>
        </div>

        {/* Arrow Button */}
        <button className="w-10 h-10 bg-beige rounded-full text-black text-lg flex items-center justify-center">
          →
        </button>
      </div>
    </div>
  );
};

export default SettingsPanel;
