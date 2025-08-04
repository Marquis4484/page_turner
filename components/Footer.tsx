// components/Footer.tsx
import React from 'react';

type Props = {
  hidden: boolean;
};

const Footer: React.FC<Props> = ({ hidden }) => {
  return (
    <footer
      className={`fixed bottom-0 left-0 w-full z-50 bg-navy text-white transition-transform duration-500 ${
        hidden ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="text-center py-3" style={{ fontSize: '30px' }}>
        Page
      </div>
    </footer>
  );
};

export default Footer;
