interface MainHeaderProps {
  small: string;
  big: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ small, big }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-Ttext uppercase  tracking-wide text-lg font-semibold border-l-4 px-3 border-Ttext">
        {small}
      </h3>
      <h2 className="md:text-4xl capitalize text-3xl font-bold text-Mbg leading-tight">
        {big}
      </h2>
    </div>
  );
};

export default MainHeader;
