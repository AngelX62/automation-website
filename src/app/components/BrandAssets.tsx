import { motion } from "motion/react";
import { Logo } from "./Logo";

export function BrandAssets() {
  const downloadPNG = (svgId: string, filename: string) => {
    const svgElement = document.getElementById(svgId);
    if (!svgElement) return;

    const clonedSvg = svgElement.cloneNode(true) as SVGSVGElement;
    clonedSvg.setAttribute("width", "1024");
    clonedSvg.setAttribute("height", "1024");
    clonedSvg.setAttribute("stroke", "#1A1A1A");

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(clonedSvg);

    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.fillStyle = "#F9F8F6";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, 1024, 1024);

      const pngUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = pngUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    img.src = url;
  };

  return (
    <div className="min-h-[80vh] w-full">
      <section className="container mx-auto px-6 pt-24 pb-32 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 max-w-3xl"
        >
          <span className="mb-6 block text-sm font-medium uppercase tracking-widest text-[#4A5D4E]">Brand Assets</span>
          <h1 className="mb-8 text-4xl font-medium tracking-tighter leading-[1] md:text-6xl">Logo Exports</h1>
          <p className="text-xl font-light leading-relaxed text-[#1A1A1A]/70">
            High-resolution brand marks for Avenarc. Click the download buttons below to export them as 1024x1024 PNG
            files.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="group relative flex flex-col items-center justify-center border border-[#E5E3DB] bg-white p-12">
            <div className="mb-12">
              <Logo id="logo-structural" variant="structural" className="h-48 w-48 text-[#1A1A1A]" />
            </div>
            <div className="flex w-full flex-col items-center gap-4">
              <h3 className="text-lg font-medium tracking-tight">Structural Monogram</h3>
              <button
                onClick={() => downloadPNG("logo-structural", "avenarc-structural-logo.png")}
                className="w-full bg-[#1A1A1A] px-6 py-3 text-center text-xs font-medium uppercase tracking-widest text-[#F9F8F6] transition-colors hover:bg-[#4A5D4E]"
              >
                Download PNG
              </button>
            </div>
          </div>

          <div className="group relative flex flex-col items-center justify-center border border-[#E5E3DB] bg-white p-12">
            <div className="mb-12">
              <Logo id="logo-folded" variant="folded" className="h-48 w-48 text-[#1A1A1A]" />
            </div>
            <div className="flex w-full flex-col items-center gap-4">
              <h3 className="text-lg font-medium tracking-tight">Folded Steel</h3>
              <button
                onClick={() => downloadPNG("logo-folded", "avenarc-folded-logo.png")}
                className="w-full bg-[#1A1A1A] px-6 py-3 text-center text-xs font-medium uppercase tracking-widest text-[#F9F8F6] transition-colors hover:bg-[#4A5D4E]"
              >
                Download PNG
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
