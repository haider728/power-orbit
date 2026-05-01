'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const data = [
  { title: "Card 1", color: "#111" },
  { title: "Card 2", color: "#222" },
  { title: "Card 3", color: "#333" }
];

export default function ParallaxCards() {

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container}>

      {data.map((item, i) => {

        const targetScale = 1 - ((data.length - i) * 0.05);
        const scale = useTransform(scrollYProgress, [i * 0.25, 1], [1, targetScale]);

        return (
          <div key={i} style={{ height: '100vh', position: 'relative' }}>

            <motion.div
              style={{
                scale,
                backgroundColor: item.color,
                position: 'sticky',
                top: 0,
                height: '80vh',
                width: '80%',
                margin: 'auto',
                borderRadius: '20px',
                top: `calc(-5vh + ${i * 25}px)`
              }}
            >
              <h2 style={{ padding: '20px' }}>{item.title}</h2>
            </motion.div>

          </div>
        );
      })}

    </section>
  );
}