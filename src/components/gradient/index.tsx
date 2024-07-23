export interface OpacityDivsProps {
  color: string;
  className?: string;
}

const OpacityDivs = ({ color, className = "" }: OpacityDivsProps) => {
  const opacities = [1, 0.75, 0.5, 0.25];

  if (!color) return <></>;

  return (
    <div className={`${className} w-full grid grid-cols-4`}>
      {opacities.map((opacity, index) => (
        <div
          key={index}
          className="h-3.5"
          style={{
            flex: 1,
            backgroundColor: color,
            opacity: opacity,
          }}
        />
      ))}
    </div>
  );
};

export default OpacityDivs;
