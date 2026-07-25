"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateOnViewProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  delay?: number;
}

export default function AnimateOnView({
  children,
  className = "",
  animationClass = "animate-fade-in-up",
  delay = 0,
}: AnimateOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? animationClass : "opacity-0 translate-y-6"}`}
      style={{
        animationFillMode: "forwards",
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
