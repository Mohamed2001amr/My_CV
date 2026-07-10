import { useEffect, useRef, useState } from 'react';

const VARIANTS = {
  'fade-up': 'reveal-fade-up',
  'fade-down': 'reveal-fade-down',
  'fade-left': 'reveal-fade-left',
  'fade-right': 'reveal-fade-right',
  zoom: 'reveal-zoom',
  blur: 'reveal-blur',
  popup: 'reveal-popup',
};

export default function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 700,
  className = '',
  as: Tag = 'div',
  once = true,
  threshold = 0.12,
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${VARIANTS[variant] || VARIANTS['fade-up']} ${
        visible ? 'reveal-visible' : ''
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
