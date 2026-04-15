import * as React from "react";
import {
  BufferAttribute,
  BufferGeometry,
  Color,
  Fog,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  SRGBColorSpace,
  WebGLRenderer,
} from "three";

import { cn } from "./utils";

type DottedSurfaceProps = React.ComponentProps<"div"> & {
  variant?: "default" | "immersive";
};

type SurfaceTier = "mobile" | "tablet" | "desktop";

type SurfaceConfig = {
  amountX: number;
  amountY: number;
  separation: number;
  amplitude: number;
  pointSize: number;
  opacity: number;
  waveX: number;
  waveY: number;
  speed: number;
  cameraY: number;
  cameraZ: number;
  cameraFov: number;
  lookAtY: number | null;
  rotationX: number;
  offsetY: number;
  fogNear: number;
  fogFar: number;
};

const getSurfaceTier = (width: number): SurfaceTier => {
  if (width < 640) {
    return "mobile";
  }

  if (width < 1024) {
    return "tablet";
  }

  return "desktop";
};

const getSurfaceConfig = (
  width: number,
  variant: "default" | "immersive",
): SurfaceConfig => {
  const tier = getSurfaceTier(width);

  if (variant === "immersive") {
    if (tier === "mobile") {
      return {
        amountX: 26,
        amountY: 40,
        separation: 120,
        amplitude: 36,
        pointSize: 5.5,
        opacity: 0.8,
        waveX: 0.3,
        waveY: 0.5,
        speed: 0.08,
        cameraY: 220,
        cameraZ: 920,
        cameraFov: 60,
        lookAtY: -60,
        rotationX: 0,
        offsetY: 0,
        fogNear: 1500,
        fogFar: 7000,
      };
    }

    if (tier === "tablet") {
      return {
        amountX: 34,
        amountY: 52,
        separation: 135,
        amplitude: 42,
        pointSize: 6.5,
        opacity: 0.8,
        waveX: 0.3,
        waveY: 0.5,
        speed: 0.09,
        cameraY: 280,
        cameraZ: 1080,
        cameraFov: 60,
        lookAtY: -48,
        rotationX: 0,
        offsetY: 0,
        fogNear: 1800,
        fogFar: 8500,
      };
    }

    return {
      amountX: 40,
      amountY: 60,
      separation: 150,
      amplitude: 50,
      pointSize: 7,
      opacity: 0.8,
      waveX: 0.3,
      waveY: 0.5,
      speed: 0.1,
      cameraY: 320,
      cameraZ: 1220,
      cameraFov: 60,
      lookAtY: -42,
      rotationX: 0,
      offsetY: 0,
      fogNear: 2000,
      fogFar: 10000,
    };
  }

  if (tier === "mobile") {
    return {
      amountX: 20,
      amountY: 30,
      separation: 118,
      amplitude: 20,
      pointSize: 5,
      opacity: 0.48,
      waveX: 0.32,
      waveY: 0.46,
      speed: 0.05,
      cameraY: 280,
      cameraZ: 900,
      cameraFov: 50,
      lookAtY: 0,
      rotationX: -0.58,
      offsetY: -68,
      fogNear: 900,
      fogFar: 2800,
    };
  }

  if (tier === "tablet") {
    return {
      amountX: 26,
      amountY: 38,
      separation: 128,
      amplitude: 28,
      pointSize: 5.5,
      opacity: 0.54,
      waveX: 0.3,
      waveY: 0.44,
      speed: 0.06,
      cameraY: 320,
      cameraZ: 1040,
      cameraFov: 50,
      lookAtY: 0,
      rotationX: -0.54,
      offsetY: -82,
      fogNear: 900,
      fogFar: 2800,
    };
  }

  return {
    amountX: 34,
    amountY: 52,
    separation: 136,
    amplitude: 36,
    pointSize: 6.4,
    opacity: 0.6,
    waveX: 0.28,
    waveY: 0.42,
    speed: 0.07,
    cameraY: 360,
    cameraZ: 1220,
    cameraFov: 50,
    lookAtY: 0,
    rotationX: -0.5,
    offsetY: -96,
    fogNear: 900,
    fogFar: 2800,
  };
};

const readCssVariable = (name: string, fallback: string) => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();

  return value || fallback;
};

const supportsWebGl = () => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl"),
    );
  } catch {
    return false;
  }
};

export function DottedSurface({
  className,
  variant = "default",
  ...props
}: DottedSurfaceProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !supportsWebGl()) {
      return;
    }

    const creme = new Color(
      readCssVariable("--color-brand-creme", "#F2F3F4"),
    );
    const dark = new Color(
      readCssVariable("--color-brand-dark", "#030305"),
    );

    let destroyed = false;
    let animationFrame = 0;
    let resizeObserver: ResizeObserver | null = null;
    let scene: Scene | null = null;
    let camera: PerspectiveCamera | null = null;
    let renderer: WebGLRenderer | null = null;
    let geometry: BufferGeometry | null = null;
    let material: PointsMaterial | null = null;
    let points: Points | null = null;
    let config: SurfaceConfig | null = null;
    let tier: SurfaceTier | null = null;
    let count = 0;

    const disposeScene = () => {
      if (points) {
        points.geometry.dispose();
        if (Array.isArray(points.material)) {
          points.material.forEach((item) => item.dispose());
        } else {
          points.material.dispose();
        }
      }

      if (renderer) {
        renderer.dispose();
        const canvas = renderer.domElement;
        if (canvas.parentNode === container) {
          container.removeChild(canvas);
        }
      }

      scene = null;
      camera = null;
      renderer = null;
      geometry = null;
      material = null;
      points = null;
      config = null;
      tier = null;
    };

    const buildSurface = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (!width || !height) {
        return;
      }

      disposeScene();

      try {
        tier = getSurfaceTier(width);
        config = getSurfaceConfig(width, variant);

        const fogColor = variant === "immersive" ? new Color(0xffffff) : dark;

        scene = new Scene();
        scene.fog = new Fog(
          fogColor.getHex(),
          config.fogNear,
          config.fogFar,
        );

        camera = new PerspectiveCamera(
          config.cameraFov,
          width / height,
          1,
          6000,
        );
        camera.position.set(0, config.cameraY, config.cameraZ);
        if (config.lookAtY !== null) {
          camera.lookAt(0, config.lookAtY, 0);
        } else {
          camera.rotation.set(0, 0, 0);
        }

        renderer = new WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
        renderer.setSize(width, height, false);
        renderer.setClearColor(scene.fog.color, 0);
        renderer.outputColorSpace = SRGBColorSpace;
        renderer.domElement.setAttribute("aria-hidden", "true");
        renderer.domElement.className = "h-full w-full";

        geometry = new BufferGeometry();

        const totalPoints = config.amountX * config.amountY;
        const positions = new Float32Array(totalPoints * 3);
        const colors = new Float32Array(totalPoints * 3);

        let index = 0;
        for (let ix = 0; ix < config.amountX; ix += 1) {
          for (let iy = 0; iy < config.amountY; iy += 1) {
            const x =
              ix * config.separation -
              (config.amountX * config.separation) / 2;
            const z =
              iy * config.separation -
              (config.amountY * config.separation) / 2;
            const pointIndex = index * 3;
            const blendY = iy / Math.max(config.amountY - 1, 1);
            const pointColor =
              variant === "immersive"
                ? new Color(1, 1, 1)
                : creme.clone().lerp(new Color(0.29, 0.36, 0.31), blendY * 0.18);

            positions[pointIndex] = x;
            positions[pointIndex + 1] = 0;
            positions[pointIndex + 2] = z;

            colors[pointIndex] = pointColor.r;
            colors[pointIndex + 1] = pointColor.g;
            colors[pointIndex + 2] = pointColor.b;

            index += 1;
          }
        }

        geometry.setAttribute(
          "position",
          new BufferAttribute(positions, 3),
        );
        geometry.setAttribute("color", new BufferAttribute(colors, 3));

        material = new PointsMaterial({
          size: config.pointSize,
          vertexColors: true,
          transparent: true,
          opacity: config.opacity,
          sizeAttenuation: true,
          depthWrite: false,
        });

        points = new Points(geometry, material);
        points.rotation.x = config.rotationX;
        points.position.y = config.offsetY;

        scene.add(points);
        container.appendChild(renderer.domElement);
      } catch {
        disposeScene();
      }
    };

    const resizeSurface = () => {
      if (!container) {
        return;
      }

      const width = container.clientWidth;
      const height = container.clientHeight;

      if (!width || !height) {
        return;
      }

      const nextTier = getSurfaceTier(width);
      if (!renderer || !camera || !config || nextTier !== tier) {
        buildSurface();
        return;
      }

      camera.aspect = width / height;
      camera.position.set(0, config.cameraY, config.cameraZ);
      if (config.lookAtY !== null) {
        camera.lookAt(0, config.lookAtY, 0);
      } else {
        camera.rotation.set(0, 0, 0);
      }
      camera.updateProjectionMatrix();

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setSize(width, height, false);
    };

    const animate = () => {
      if (destroyed) {
        return;
      }

      animationFrame = window.requestAnimationFrame(animate);

      if (!geometry || !renderer || !scene || !camera || !config) {
        return;
      }

      const positions = geometry.attributes.position.array as Float32Array;

      let pointIndex = 0;
      for (let ix = 0; ix < config.amountX; ix += 1) {
        for (let iy = 0; iy < config.amountY; iy += 1) {
          const index = pointIndex * 3;
          positions[index + 1] =
            Math.sin((ix + count) * config.waveX) * config.amplitude +
            Math.cos((iy + count) * config.waveY) * (config.amplitude * 0.55);
          pointIndex += 1;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      count += config.speed;
    };

    buildSurface();

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => {
        resizeSurface();
      });
      resizeObserver.observe(container);
    } else {
      window.addEventListener("resize", resizeSurface);
    }

    animate();

    return () => {
      destroyed = true;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", resizeSurface);
      disposeScene();
    };
  }, [variant]);

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      {...props}
    />
  );
}
