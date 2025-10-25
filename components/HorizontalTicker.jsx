"use client"

export default function HorizontalTicker({ width = "100%", height = "300px", duration = 15 }) {
  const images = [
    "https://i.pinimg.com/736x/5f/a7/b6/5fa7b67fe7110363f9ae290d0b26c3d9.jpg",
    "https://i.pinimg.com/736x/22/0f/f8/220ff890b5f33abfcc4a78e4a724fe4e.jpg",
    "https://i.pinimg.com/736x/18/84/3d/18843d0bf89e525e71c014df0fa598f6.jpg",
    "https://i.pinimg.com/736x/fe/e7/ec/fee7ec015f37ae0d4f3720642ab62f0f.jpg",
    "https://i.pinimg.com/736x/4c/5a/64/4c5a6486a909e658cb9a5edfb0a10560.jpg",
    "https://i.pinimg.com/736x/3d/e0/69/3de069a53ed026bb2d707945e022907e.jpg",
    "https://i.pinimg.com/1200x/fb/78/79/fb787909767b73255307affea8ec7d3a.jpg",
  ]

  return (
    <div className="flex justify-center items-center" style={{ width, height }}>
      <div className="relative overflow-hidden w-full h-full">
        <div
          className="absolute flex flex-row items-center"
          style={{
            width: "max-content",
            height: "100%",
            animation: `marqueeX ${duration}s linear infinite`,
          }}
        >
          {/* Original set */}
          {images.map((src, idx) => (
            <div key={idx} className="w-[330px] h-[30vh] m-2 overflow-hidden">
              <img src={src} alt={`img-${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}

          {/* Duplicate set */}
          {images.map((src, idx) => (
            <div key={`dup-${idx}`} className="w-[330px] h-[30vh] m-2 overflow-hidden">
              <img src={src} alt={`dup-img-${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <div className="hidden">
        <style jsx>{`
          @keyframes marqueeX {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </div>
  )
}