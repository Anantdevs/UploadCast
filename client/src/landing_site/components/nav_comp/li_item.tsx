import { useRef } from "react";

interface Props {
  index: number;
  item: string;
  setPosition: (position: {
    width: number;
    opacity: number;
    left: number;
  }) => void;
}

function Litem({ index, item, setPosition }: Props) {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width: width + 15,
          opacity: 1,
          left: ref.current.offsetLeft - 8,
        });
      }}
      key={index}
      className={`text-md capitalize font-semibold cursor-pointer block relative z-10 text-white mix-blend-difference `}
    >
      {item}
    </li>
  );
}

export default Litem;
