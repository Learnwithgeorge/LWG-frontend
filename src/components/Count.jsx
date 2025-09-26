import React, { useEffect, useState, useRef } from "react";

export default function Count({ num, text, duration = 3000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const target = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let start = 0;
          const end = parseInt(num);
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * (end - start) + start));

            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [num, duration, hasAnimated]);

  return (
    <div ref={ref} className="lg:w-[190px] text-center">
      <p className="lg:text-[60px] text-xl font-medium bg-gradient-to-b from-[#123B6B] to-[#2373D1] bg-clip-text text-transparent">
        {count}+
      </p>
      <p className="lg:text-lg text-[8px] font-medium lg:h-[60px]">{text}</p>
    </div>
  );
}
