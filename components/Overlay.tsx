type Props = {
  onClick: () => void;
  fadeOut: boolean;
};

const Overlay: React.FC<Props> = ({ onClick, fadeOut }) => {
  return (
    <div
      onClick={onClick}
      className={`fixed inset-0 z-40 bg-black bg-opacity-60 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    />
  );
};

export default Overlay;
