/**
 * Generates organic sketchbook curves, masks, washes, and doodles
 * matching the authentic TeddyPups reference algorithm (module 85125).
 */

const p = (n: number) => n.toFixed(2);

function genPoints(
  rng: () => number,
  radius: number,
  variance: number,
  steps = 40,
  startAngle = 0,
  totalAngle = 2 * Math.PI
): [number, number][] {
  const phases = [6.28 * rng(), 6.28 * rng(), 6.28 * rng()];
  const aspect = 1 + (rng() - 0.5) * 0.05;
  const pts: [number, number][] = [];

  for (let i = 0; i < steps; i++) {
    const angle =
      startAngle +
      (i / (totalAngle >= 2 * Math.PI ? steps : steps - 1)) * totalAngle;
    const r =
      radius +
      variance *
        (0.55 * Math.sin(2 * angle + phases[0]) +
          0.3 * Math.sin(3 * angle + phases[1]) +
          0.15 * Math.sin(5 * angle + phases[2]));
    pts.push([
      50 + Math.cos(angle) * r * aspect,
      50 + (Math.sin(angle) * r) / aspect,
    ]);
  }
  return pts;
}

function smoothPath(pts: [number, number][], close = true): string {
  const len = pts.length;
  const getPt = (idx: number) =>
    pts[close ? (idx + len) % len : Math.min(len - 1, Math.max(0, idx))];

  let d = `M${p(pts[0][0])} ${p(pts[0][1])}`;
  const count = close ? len : len - 1;

  for (let i = 0; i < count; i++) {
    const p0 = getPt(i - 1);
    const p1 = getPt(i);
    const p2 = getPt(i + 1);
    const p3 = getPt(i + 2);

    const cp1: [number, number] = [
      p1[0] + (p2[0] - p0[0]) / 6,
      p1[1] + (p2[1] - p0[1]) / 6,
    ];
    const cp2: [number, number] = [
      p2[0] - (p3[0] - p1[0]) / 6,
      p2[1] - (p3[1] - p1[1]) / 6,
    ];

    d += `C${p(cp1[0])} ${p(cp1[1])} ${p(cp2[0])} ${p(cp2[1])} ${p(p2[0])} ${p(
      p2[1]
    )}`;
  }
  return close ? `${d}Z` : d;
}

const WASH_COLORS = ['#f2be6b', '#f9cdbf', '#bfddf5', '#fbe3b4', '#e8c39a'];
const DOODLE_INKS = ['#c2622b', '#a24a1a', '#2a170e', '#d4893f'];
const DOODLE_KINDS = ['sparkle', 'heart', 'dashes', 'swirl', 'dots', 'paw'] as const;

export type DoodleKind = (typeof DOODLE_KINDS)[number];

export interface DoodleItem {
  kind: DoodleKind;
  x: number;
  y: number;
  rot: number;
  size: number;
  ink: string;
}

export interface SketchShape {
  mask: string;
  outline: string;
  retrace: string;
  wash: {
    d: string;
    dx: number;
    dy: number;
    color: string;
  };
  tilt: number;
  doodles: DoodleItem[];
}

function makeRng(seedStr: string): () => number {
  let h = 0x811c9dc5;
  for (let i = 0; i < seedStr.length; i++) {
    h = Math.imul(h ^ seedStr.charCodeAt(i), 0x01000193);
  }
  let a = h >>> 0;
  return () => {
    let t = (a = (a + 0x6d2b79f5) >>> 0);
    t = Math.imul(t ^ (t >>> 15), 1 | t);
    return (
      (((t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ (t >>> 14)) >>> 0) /
      0x100000000
    );
  };
}

export function computeSketchShape(slug: string): SketchShape {
  const rng = makeRng(slug);
  const mask = smoothPath(genPoints(rng, 45.5, 2.6), true);
  const outline = smoothPath(genPoints(rng, 47.8, 3.1), true);
  const startAng = rng() * Math.PI * 2;
  const retrace = smoothPath(
    genPoints(rng, 49, 3.4, 30, startAng, Math.PI * (1.15 + 0.5 * rng())),
    false
  );
  const wash = {
    d: smoothPath(genPoints(rng, 46.5, 3.6), true),
    dx: (rng() - 0.5) * 9,
    dy: 3 + 4 * rng(),
    color: WASH_COLORS[Math.floor(rng() * WASH_COLORS.length)],
  };
  const tilt = (rng() - 0.5) * 5;

  const doodleSectorPairs = [
    [0.86, 1.08],
    [1.16, 1.42],
    [-0.08, 0.16],
  ]
    .map((pair) => ({ z: pair, k: rng() }))
    .sort((a, b) => a.k - b.k)
    .map((item) => item.z);

  const doodleCount = 2 + Math.floor(2 * rng());
  const doodles: DoodleItem[] = [];
  const chosenKinds = new Set<string>();

  for (let i = 0; i < doodleCount; i++) {
    let kind = DOODLE_KINDS[Math.floor(rng() * DOODLE_KINDS.length)];
    if (chosenKinds.has(kind)) {
      kind = DOODLE_KINDS.find((k) => !chosenKinds.has(k)) || kind;
    }
    chosenKinds.add(kind);

    const [s, e] = doodleSectorPairs[i] || [0.86, 1.08];
    const angle = Math.PI * (s + rng() * (e - s));
    const dist = 55 + 4 * rng();

    doodles.push({
      kind,
      x: 50 + Math.cos(angle) * dist,
      y: 50 + Math.sin(angle) * dist,
      rot: (rng() - 0.5) * 50,
      size: 0.85 + 0.35 * rng(),
      ink: DOODLE_INKS[Math.floor(rng() * DOODLE_INKS.length)],
    });
  }

  return { mask, outline, retrace, wash, tilt, doodles };
}

export function createSvgMaskUrl(pathD: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="${pathD}" fill="#000"/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
