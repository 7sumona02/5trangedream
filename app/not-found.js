"use client"
import { useEffect, useState } from "react";
import SmoothFadeLayout from "@/components/SmoothFadePageTransition"
import { Pixelify_Sans } from 'next/font/google'

const ps = Pixelify_Sans({
  weight: '400',
  subsets: ['latin'],
})

const Error = () => {
  const [pixels, setPixels] = useState([]);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const text = "404";
    const pixelSize = 40;

    // Large canvas for detail
    canvas.width = 2000;
    canvas.height = 1000;
    ctx.font = `1200px ${ps.className}`;
    ctx.fillStyle = "#dddedf";
    ctx.textBaseline = "top";

    // Measure text width to center
    const textMetrics = ctx.measureText(text);
    const textWidth = textMetrics.width;
    const textX = (canvas.width - textWidth) / 2; // center horizontally

    ctx.fillText(text, textX, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pxArr = [];

    for (let y = 0; y < canvas.height; y += pixelSize) {
      for (let x = 0; x < canvas.width; x += pixelSize) {
        const idx = (y * canvas.width + x) * 4;
        const alpha = imageData.data[idx + 3];
        if (alpha > 128) {
          const offsetX = (Math.random() - 0.5) * 1000;
          const offsetY = (Math.random() - 0.5) * 1000;
          pxArr.push({ x, y, offsetX, offsetY, size: pixelSize });
        }
      }
    }

    setPixels(pxArr);
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#5652f5] overflow-hidden relative selection:text-black selection:bg-[#dddedf]">
      <SmoothFadeLayout className="absolute inset-0 flex justify-center items-center">
        <div className="relative w-[1000px] h-[500px]">
          {pixels.map((pixel, idx) => (
            <div
              key={idx}
              className="absolute bg-[#dddedf]"
              style={{
                left: pixel.x / 2,  // scale down canvas
                top: pixel.y / 2,
                width: `${pixel.size}px`,
                height: `${pixel.size}px`,
                transform: `translate(${pixel.offsetX}px, ${pixel.offsetY}px)`,
                opacity: 0,
                animation: `pixelAnim 0.5s forwards`,
                animationDelay: `${Math.random() * 1.5}s`,
              }}
            ></div>
          ))}
        </div>
      </SmoothFadeLayout>

      <style jsx>{`
        @keyframes pixelAnim {
          0% {
          transform: translate(var(--offset-x), var(--offset-y));
            opacity: 1;
          }
          100% {
            transform: translate(0, 0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Error;
