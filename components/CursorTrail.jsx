import { useEffect, useRef } from "react";

const CursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const historySize = 12;
    const trailLength = 800;

    const trailImage = new Image();
    trailImage.src = "https://i.imgur.com/JvN5CLh.png";

    const historyX = Array(historySize).fill(0);
    const historyY = Array(historySize).fill(0);

    let mouse = { x: 0, y: 0 };

    const clipInput = (k, arr) => {
      if (k < 0) k = 0;
      if (k > arr.length - 1) k = arr.length - 1;
      return arr[k];
    };

    const getTangent = (k, factor, arr) => {
      return (factor * (clipInput(k + 1, arr) - clipInput(k - 1, arr))) / 2;
    };

    const cubicInterpolation = (arr, t, tangentFactor = 1) => {
      const k = Math.floor(t);
      const m = [getTangent(k, tangentFactor, arr), getTangent(k + 1, tangentFactor, arr)];
      const p = [clipInput(k, arr), clipInput(k + 1, arr)];
      t -= k;
      const t2 = t * t;
      const t3 = t2 * t;
      return (
        (2 * t3 - 3 * t2 + 1) * p[0] +
        (t3 - 2 * t2 + t) * m[0] +
        (-2 * t3 + 3 * t2) * p[1] +
        (t3 - t2) * m[1]
      );
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update history
      historyX.pop();
      historyX.unshift(mouse.x);
      historyY.pop();
      historyY.unshift(mouse.y);

      for (let i = 0; i < trailLength; i++) {
        const t = (i / trailLength) * historySize;
        const x = cubicInterpolation(historyX, t);
        const y = cubicInterpolation(historyY, t);

        ctx.globalAlpha = 1 - i / trailLength;
        ctx.drawImage(trailImage, x - 20, y - 20, 10, 10);
      }

      requestAnimationFrame(animate);
    };

    animate();

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 0, mixBlendMode: "difference" }}
    />
  );
};

export default CursorTrail;
