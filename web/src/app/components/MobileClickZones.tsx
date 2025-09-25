type MobileClickZonesProps = {
  onPrev: () => void;
  onNext: () => void;
}

export const MobileClickZones = ({ onPrev, onNext }: MobileClickZonesProps) => {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-1/2 h-full md:hidden"
        onClick={onPrev}
      />
      <div
        className="absolute top-0 right-0 w-1/2 h-full md:hidden"
        onClick={onNext}
      />
    </>
  )
}