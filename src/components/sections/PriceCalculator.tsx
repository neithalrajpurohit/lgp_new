"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PriceCalculator() {
  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(4);
  const [type, setType] = useState("upvc");

  const calculate = () => {
    const area = width * height;
    const rate = type === "upvc" ? 1800 : 1200;
    return (area * rate).toLocaleString("en-IN");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-brand-gray p-8 rounded-lg border border-white/10 max-w-md mx-auto"
    >
      <h3 className="font-serif text-2xl mb-6 text-brand-gold">
        UPVC Price Estimator
      </h3>

      <div className="space-y-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Window Width (ft)
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full accent-brand-gold h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right font-bold text-brand-gold">{width} ft</div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Window Height (ft)
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full accent-brand-gold h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right font-bold text-brand-gold">
            {height} ft
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Material Type
          </label>
          <div className="flex gap-4">
            <button
              onClick={() => setType("upvc")}
              className={`flex-1 py-3 rounded border ${type === "upvc" ? "bg-brand-gold text-black border-brand-gold" : "border-white/20 text-gray-400"}`}
            >
              UPVC
            </button>
            <button
              onClick={() => setType("aluminium")}
              className={`flex-1 py-3 rounded border ${type === "aluminium" ? "bg-brand-gold text-black border-brand-gold" : "border-white/20 text-gray-400"}`}
            >
              Aluminium
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10">
          <div className="text-sm text-gray-400 mb-1">Estimated Price</div>
          <div className="text-3xl font-bold text-white">{calculate()} ₹</div>
          <p className="text-xs text-gray-500 mt-2">
            *Final price subject to site measurement
          </p>
        </div>

        <button className="w-full bg-brand-gold text-black font-bold py-4 rounded hover:bg-white transition-colors">
          Book Free Site Visit
        </button>
      </div>
    </motion.div>
  );
}
