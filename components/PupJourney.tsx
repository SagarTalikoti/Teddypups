'use client';

import React, { useEffect, useRef } from 'react';

// --- GEOMETRY & POSE CONSTANTS (AUTHENTIC MODULE 1063) ---
const PIVOT = {
  root: [150, 228],
  body: [196, 206],
  head: [212, 100],
  fn: [186, 194],
  ff: [168, 192],
  bn: [110, 194],
  bf: [94, 192],
  tail: [84, 150],
  earL: [174, 82],
  earR: [250, 82],
};

const D = { x: 150, y: 228 };
const DEFAULT_BOX = [48, 30, 288, 236];

const POSE_BOXES: Record<string, number[]> = {
  sit: [50, 26, 284, 234],
  peek: [148, 34, 280, 163],
  snug: [148, 40, 280, 163],
  bow: [58, 56, 292, 236],
};

function getBox(pose: string) {
  return POSE_BOXES[pose] ?? DEFAULT_BOX;
}

const BASE_POSE = {
  bodyRot: 0,
  bodyX: 0,
  bodyY: 0,
  stretch: 1,
  headX: 0,
  headY: 0,
  headRot: 0,
  earL: 0,
  earR: 0,
  tail: 0,
  fn: 0,
  ff: 0,
  bn: 0,
  bf: 0,
  sit: 0,
  eyes: 1,
  happy: 0,
  tongue: 0,
  mouth: 0,
  front: 0,
};

const POSES: Record<string, typeof BASE_POSE> = {
  stand: BASE_POSE,
  walk: { ...BASE_POSE, tail: -6, tongue: 1 },
  sit: { ...BASE_POSE, bodyRot: -24, bodyY: -2, headX: -10, headY: -6, tail: 34, sit: 1, tongue: 1 },
  peek: { ...BASE_POSE, headY: 4, earL: -6, earR: 6, tail: -20, front: 1, tongue: 1 },
  snug: { ...BASE_POSE, headY: 9, headRot: 4, earL: 3, earR: -3, tail: -20, front: 1, tongue: 0 },
  lie: { ...BASE_POSE, bodyRot: -5, bodyY: 22, headX: 12, headY: 40, headRot: 3, fn: -84, ff: -80, sit: 1, tail: 58, tongue: 0 },
  sleep: { ...BASE_POSE, bodyRot: -5, bodyY: 22, headX: 14, headY: 44, headRot: -8, fn: -84, ff: -80, sit: 1, tail: 64, eyes: 0, earL: 4, earR: -4 },
  settle: { ...BASE_POSE, bodyRot: -5, bodyY: 22, headX: 10, headY: 16, fn: -84, ff: -80, sit: 1, tail: 40, tongue: 1 },
  hop: { ...BASE_POSE, bodyRot: -9, stretch: 1.06, headY: -6, fn: -42, ff: -32, bn: 40, bf: 30, earL: -26, earR: 26, tail: -24, tongue: 1 },
  sniff: { ...BASE_POSE, bodyRot: 7, headX: 16, headY: 32, headRot: 9, tail: -14, fn: 6, ff: 4 },
  bow: { ...BASE_POSE, bodyRot: 15, bodyY: 2, headX: 14, headY: 30, fn: -58, ff: -52, tail: -32, happy: 1, tongue: 1 },
  beg: { ...BASE_POSE, bodyRot: -36, bodyY: -6, headX: -18, headY: -18, sit: 1, fn: -70, ff: -64, tail: 30, happy: 1, tongue: 1 },
};

function round2(v: number) {
  return Math.round(100 * v) / 100;
}

function rotStr(deg: number, [cx, cy]: number[]) {
  return `rotate(${round2(deg)} ${cx} ${cy})`;
}

// Function F: computes all SVG component transforms from pose & motion
function computeSvgTransforms(pose: typeof BASE_POSE, m = { phase: 0, stride: 0, time: 0, wag: 0.35, gazeX: 0, gazeY: 0, blink: 0, ear: 0 }) {
  const sinP = Math.sin(m.phase);
  const sinPOpp = Math.sin(m.phase + Math.PI);
  const strideAmp = 20 + 10 * m.stride;
  const p = (1 - Math.cos(2 * m.phase)) / 2;
  const isMoving = +(m.stride > 0.01);
  const idleBob = Math.sin(1.4 * m.time) * (1 - isMoving);
  const bodyY = pose.bodyY - p * (2.5 + 4 * m.stride) * isMoving + 0.3 * idleBob;
  const bodyRot = pose.bodyRot + 1.6 * Math.sin(m.phase) * isMoving;
  const counterRot = -pose.bodyRot;
  const wagAmp = 5 + 17 * m.wag;
  const wagFreq = 1.2 + 2.6 * m.wag;
  const tailRot = pose.tail + Math.sin(m.time * wagFreq * Math.PI * 2) * wagAmp;
  const headBob = -((1 - Math.cos(2 * m.phase - 0.7)) / 2) * (2 + 3 * m.stride) * isMoving + 0.35 * idleBob;

  return {
    body: `translate(${round2(pose.bodyX)} ${round2(bodyY)}) ${rotStr(bodyRot, PIVOT.body)} translate(${PIVOT.body[0]} 0) scale(${round2(pose.stretch)} 1) translate(${-PIVOT.body[0]} 0)`,
    fn: `translate(${PIVOT.fn[0]} ${PIVOT.fn[1]}) rotate(${round2(pose.fn + counterRot + sinP * strideAmp * isMoving)})`,
    ff: `translate(${PIVOT.ff[0]} ${PIVOT.ff[1]}) rotate(${round2(pose.ff + counterRot + sinPOpp * strideAmp * isMoving)})`,
    bn: `translate(${PIVOT.bn[0]} ${PIVOT.bn[1]}) rotate(${round2(pose.bn + sinPOpp * strideAmp * isMoving)})`,
    bf: `translate(${PIVOT.bf[0]} ${PIVOT.bf[1]}) rotate(${round2(pose.bf + sinP * strideAmp * isMoving)})`,
    tail: rotStr(tailRot, PIVOT.tail),
    haunch: `translate(0 ${round2(-0.06 * pose.bodyRot)})`,
    head: `translate(${round2(pose.headX)} ${round2(pose.headY + headBob)}) ${rotStr(pose.headRot + 1.4 * Math.sin(m.phase) * isMoving, PIVOT.head)}`,
    earL: rotStr(pose.earL + m.ear + 4 * Math.sin(2 * m.phase) * isMoving, PIVOT.earL),
    earR: rotStr(pose.earR - m.ear - 4 * Math.sin(2 * m.phase) * isMoving, PIVOT.earR),
    eyes: `translate(${round2(3.4 * m.gazeX)} ${round2(2.6 * m.gazeY)})`,
    blink: `translate(0 ${round2(98 * m.blink * 0.92)}) scale(1 ${round2(1 - 0.92 * m.blink)})`,
    openEyes: round2(Math.max(0, pose.eyes - pose.happy)),
    happyEyes: round2(Math.min(pose.happy, pose.eyes)),
    shutEyes: round2(1 - pose.eyes),
    tongue: round2(pose.tongue * (1 - pose.mouth)),
    mouth: round2(pose.mouth),
    backLegs: round2(1 - pose.sit),
    haunchOpacity: round2(pose.sit * (1 - pose.front)),
    side: round2(1 - pose.front),
    ledge: round2(pose.front),
    shadow: `translate(${round2(0.6 * pose.bodyX)} 0) scale(${round2(1 - 0.05 * p * isMoving)} 1)`,
    shadowOpacity: round2(0.12 * (1 - pose.front)),
  };
}

const PROP_MAPPINGS: [string, string, string][] = [
  ['root', 'transform', 'root'],
  ['shadow', 'transform', 'shadow'],
  ['shadow', 'opacity', 'shadowOpacity'],
  ['body', 'transform', 'body'],
  ['body', 'opacity', 'side'],
  ['bf', 'transform', 'bf'],
  ['bf', 'opacity', 'backLegs'],
  ['bn', 'transform', 'bn'],
  ['bn', 'opacity', 'backLegs'],
  ['ff', 'transform', 'ff'],
  ['fn', 'transform', 'fn'],
  ['tail', 'transform', 'tail'],
  ['haunch', 'transform', 'haunch'],
  ['haunch', 'opacity', 'haunchOpacity'],
  ['head', 'transform', 'head'],
  ['earL', 'transform', 'earL'],
  ['earR', 'transform', 'earR'],
  ['eyes', 'transform', 'eyes'],
  ['open', 'opacity', 'openEyes'],
  ['blink', 'transform', 'blink'],
  ['happy', 'opacity', 'happyEyes'],
  ['shut', 'opacity', 'shutEyes'],
  ['tongue', 'opacity', 'tongue'],
  ['mouth', 'opacity', 'mouth'],
  ['ledge', 'opacity', 'ledge'],
];

function expDecay(e: number, t: number) {
  return 1 - Math.exp(-e / t);
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

function smoothstep(e: number) {
  const c = clamp(e, 0, 1);
  return c * c * (3 - 2 * c);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// Authentic PupActorController class from Module 89681
class PupActorController {
  svg: SVGSVGElement;
  els = new Map<string, SVGElement>();
  written = new Map<string, string>();
  pose = { ...BASE_POSE };
  target = { ...BASE_POSE };
  m = {
    phase: 0,
    stride: 0,
    time: 0,
    wag: 0.35,
    gazeX: 0,
    gazeY: 0,
    blink: 0,
    ear: 0,
  };
  facing = 1;
  facingTarget = 1;
  strideTarget = 0;
  wagTarget = 0.35;
  gazeTarget = { x: 0, y: 0 };
  tilt = 0;
  tiltTarget = 0;
  earV = 0;
  nextBlink = 1.2;
  blinkAt = -1;
  woofUntil = 0;
  bounce = 0;
  bounceV = 0;
  offset = 0;
  offsetTarget = 0;
  pet = 0;
  petTarget = 0;
  turn = 0.07;
  lean = 0;

  constructor(svg: SVGSVGElement, initialPose = 'peek', facing = 1) {
    this.svg = svg;
    svg.querySelectorAll<SVGElement>('[data-p]').forEach((el) => {
      if (el.dataset.p) this.els.set(el.dataset.p, el);
    });
    this.pose = { ...(POSES[initialPose] || BASE_POSE) };
    this.target = this.pose;
    this.facing = facing;
    this.facingTarget = facing;
  }

  setPose(nameOrPose: string | typeof BASE_POSE) {
    this.target = typeof nameOrPose === 'string' ? POSES[nameOrPose] || BASE_POSE : nameOrPose;
  }

  jump(poseName: string, facing?: number) {
    this.pose = { ...(POSES[poseName] || BASE_POSE) };
    this.target = this.pose;
    if (facing !== undefined) this.facing = this.facingTarget = facing;
  }

  face(dir: number, turnSpeed = 0.07) {
    this.facingTarget = dir;
    this.turn = turnSpeed;
  }

  get facingDir() {
    return this.facingTarget;
  }

  stride(v: number) {
    this.strideTarget = clamp(v, 0, 1);
  }

  advance(px: number) {
    this.m.phase += (px / 46) * Math.PI;
  }

  walkedTo(px: number) {
    this.m.phase = (px / 46) * Math.PI;
  }

  wag(v: number) {
    this.wagTarget = clamp(v, 0, 1);
  }

  cock(deg: number) {
    this.tiltTarget = deg;
  }

  lookAt(target: { x: number; y: number } | null) {
    if (!target) {
      this.gazeTarget = { x: 0, y: 0 };
      return;
    }
    const rect = this.svg.getBoundingClientRect();
    const anchorX = this.facingTarget > 0 ? 212 : 300 - 212;
    const eyeX = rect.left + (anchorX / 300) * rect.width;
    const eyeY = rect.top + (98 / 240) * rect.height;
    const dx = target.x - eyeX;
    const dy = target.y - eyeY;
    const dist = Math.hypot(dx, dy) || 1;
    const mag = Math.min(1, dist / 160);
    this.gazeTarget = {
      x: (dx / dist) * mag * this.facingTarget,
      y: (dy / dist) * mag,
    };
  }

  woof(timeSec: number) {
    this.woofUntil = timeSec + 0.34;
    this.bounceV = -150;
    this.earV += 260;
  }

  jolt(power = 1) {
    this.earV += 220 * power;
  }

  hop(power = 1) {
    this.bounceV = -230 * power;
    this.earV += 200 * power;
  }

  yawn(timeSec: number, dur = 0.9) {
    this.woofUntil = timeSec + dur;
  }

  dash(offset: number) {
    this.offsetTarget = offset;
  }

  petting(active: boolean) {
    this.petTarget = active ? 1 : 0;
  }

  reset() {
    this.offsetTarget = 0;
    this.tiltTarget = 0;
    this.petTarget = 0;
  }

  tick(delta: number, nowSec: number) {
    const dt = Math.min(delta, 0.05);
    const m = this.m;
    m.time = nowSec;

    // Pose blend
    const blendFactor = expDecay(dt, 0.16);
    const pKeys = Object.keys(BASE_POSE) as (keyof typeof BASE_POSE)[];
    for (const k of pKeys) {
      this.pose[k] = this.pose[k] + (this.target[k] - this.pose[k]) * blendFactor;
    }

    this.facing += (this.facingTarget - this.facing) * expDecay(dt, this.turn);
    m.stride += (this.strideTarget - m.stride) * expDecay(dt, 0.12);
    if (m.stride < 0.012 && this.strideTarget === 0) m.stride = 0;
    m.wag += (this.wagTarget - m.wag) * expDecay(dt, 0.4);
    m.gazeX += (this.gazeTarget.x - m.gazeX) * expDecay(dt, 0.07);
    m.gazeY += (this.gazeTarget.y - m.gazeY) * expDecay(dt, 0.07);
    const isSnug = this.target === POSES.snug;
    const gazeTilt = isSnug ? 0 : 1.8 * m.gazeX;
    this.tilt += (this.tiltTarget + gazeTilt - this.tilt) * expDecay(dt, 0.18);

    // Damped spring ears
    this.earV += (-150 * m.ear - 10 * this.earV) * dt;
    m.ear = clamp(m.ear + this.earV * dt, -28, 28);

    // Damped spring bounce
    this.bounceV += (-260 * this.bounce - 16 * this.bounceV) * dt;
    this.bounce += this.bounceV * dt;

    // Offset dash
    const prevOffset = this.offset;
    this.offset += (this.offsetTarget - this.offset) * expDecay(dt, 0.2);
    if (Math.abs(this.offsetTarget - this.offset) < 0.05) this.offset = this.offsetTarget;
    const diffOffset = Math.abs(this.offset - prevOffset);
    if (diffOffset) this.advance(diffOffset);
    const offsetStride = dt > 0 ? Math.min(1, diffOffset / dt / 180) : 0;

    // Petting & eye blinks
    this.pet += (this.petTarget - this.pet) * expDecay(dt, 0.15);
    if (nowSec > this.nextBlink && this.pose.eyes > 0.6) {
      this.blinkAt = nowSec;
      this.nextBlink = nowSec + 2.2 + 3.8 * Math.random();
      if (Math.random() < 0.18) this.nextBlink = nowSec + 0.32;
    }
    const blinkPhase = (nowSec - this.blinkAt) / 0.15;
    m.blink = blinkPhase >= 0 && blinkPhase <= 1 ? Math.sin(blinkPhase * Math.PI) : 0;

    const currentPose = {
      ...this.pose,
      headRot: this.pose.headRot + this.tilt,
      bodyRot: this.pose.bodyRot + this.lean,
      bodyY: this.pose.bodyY + this.bounce,
      headY: this.pose.headY + 1.15 * this.bounce,
      mouth: nowSec < this.woofUntil ? 1 : this.pose.mouth,
      happy: Math.max(this.pose.happy, this.pet),
    };

    const tf = computeSvgTransforms(currentPose, offsetStride > m.stride ? { ...m, stride: offsetStride } : m);
    const facingSign = Math.abs(this.facing) < 0.02 ? 0.02 * Math.sign(this.facing || 1) : this.facing;
    const rootTransform = `translate(${this.offset.toFixed(1)} 0) translate(150 0) scale(${facingSign.toFixed(3)} 1) translate(-150 0)`;

    for (const [part, attr, prop] of PROP_MAPPINGS) {
      const el = this.els.get(part);
      if (!el) continue;
      const val = prop === 'root' ? rootTransform : String((tf as Record<string, any>)[prop]);
      const key = `${part}:${attr}`;
      if (this.written.get(key) !== val) {
        el.setAttribute(attr, val);
        this.written.set(key, val);
      }
    }
  }
}

// --- STOP & TRAJECTORY TRACKING ENGINE (AUTHENTIC MODULE 91360) ---
interface StopTrack {
  kind: 'page' | 'pin' | 'screen';
  top: number;
  from?: number;
  to?: number;
}

interface StopInfo {
  el: HTMLElement;
  scene: HTMLElement | null;
  pose: string;
  facing: number;
  act: string;
  behind: boolean;
  lane: boolean;
  x: number;
  track: StopTrack;
  s: number; // Scale
  box: number[];
  sink: number;
  looks: HTMLElement[];
  trackEl: HTMLElement | null;
}

function softMax(e: number, t: number, a: number) {
  const s = (e - t) / a;
  return s > 20 ? e : t + a * Math.log1p(Math.exp(s));
}

function softMin(e: number, t: number, a: number) {
  return -softMax(-e, -t, a);
}

function clampToSafe(x: number, y: number, s: number, box: number[], safe: { left: number; top: number; right: number; bottom: number }, l = 8) {
  const r = (D.x - box[0]) * s;
  const i = (box[2] - D.x) * s;
  const o = (D.y - box[1]) * s;
  const c = (box[3] - D.y) * s;
  let outX = x;
  if (safe.right - safe.left > r + i) {
    outX = softMin(softMax(x, safe.left + r, l), safe.right - i, l);
  } else {
    outX = (safe.left + safe.right) / 2 - (i - r) / 2;
  }
  const outY = safe.bottom - safe.top > o + c ? softMin(softMax(y, safe.top + o, l), safe.bottom - c, l) : safe.bottom - c;
  return { x: outX, y: outY };
}

function evalBezier(p0: { x: number; y: number }, c1: { x: number; y: number }, c2: { x: number; y: number }, p1: { x: number; y: number }, n: number) {
  const l = 1 - n;
  const r = l * l * l;
  const i = 3 * l * l * n;
  const o = 3 * l * n * n;
  const d = n * n * n;
  return {
    x: r * p0.x + i * c1.x + o * c2.x + d * p1.x,
    y: r * p0.y + i * c1.y + o * c2.y + d * p1.y,
  };
}

function getTrackAnchor(st: StopInfo, scrollY: number) {
  if (st.act === 'basket' && st.el.getClientRects().length > 0) {
    const bRect = st.el.getBoundingClientRect();
    return {
      x: bRect.left + D.x * st.s,
      y: bRect.top + D.y * st.s,
    };
  }
  let trackY = 0;
  if (st.track.kind === 'page') {
    trackY = st.track.top - scrollY;
  } else if (st.track.kind === 'screen') {
    trackY = st.track.top;
  } else {
    const from = st.track.from ?? 0;
    const to = st.track.to ?? 0;
    if (scrollY < from) {
      trackY = st.track.top - (scrollY - from);
    } else if (scrollY > to) {
      trackY = st.track.top - (scrollY - to);
    } else {
      trackY = st.track.top;
    }
  }
  return {
    x: st.x + D.x * st.s,
    y: trackY + D.y * st.s,
  };
}

function findInterval(holds: [number, number][], scrollY: number) {
  if (!holds.length || scrollY <= holds[0][1]) return { k: 0, t: 0 };
  for (let a = 0; a < holds.length - 1; a++) {
    const s = holds[a][1];
    const n = holds[a + 1][0];
    if (scrollY < n) return { k: a, t: clamp((scrollY - s) / Math.max(1, n - s), 0, 1) };
    if (scrollY <= holds[a + 1][1]) return { k: a + 1, t: 0 };
  }
  return { k: holds.length - 1, t: 0 };
}

function computeTrack(el: HTMLElement, rect: DOMRect): StopTrack {
  let stickyParent: HTMLElement | null = null;
  for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
    if (window.getComputedStyle(p).position === 'sticky') {
      stickyParent = p;
      break;
    }
  }

  if (!stickyParent) {
    return {
      kind: 'page',
      top: rect.top + window.scrollY,
    };
  }

  const stickyTop = parseFloat(window.getComputedStyle(stickyParent).top) || 0;
  const relOffset = rect.top - stickyParent.getBoundingClientRect().top;
  const savedPos = stickyParent.style.position;
  stickyParent.style.position = 'relative';
  const stickyRect = stickyParent.getBoundingClientRect();
  const parent = stickyParent.parentElement;
  const parentBottom = parent
    ? parent.getBoundingClientRect().bottom - (parseFloat(window.getComputedStyle(parent).paddingBottom) || 0)
    : stickyRect.bottom;
  stickyParent.style.position = savedPos;

  const from = stickyRect.top + window.scrollY - stickyTop;
  const to = parentBottom + window.scrollY - stickyRect.height - stickyTop;

  if (to <= from) {
    return {
      kind: 'page',
      top: stickyRect.top + window.scrollY + relOffset,
    };
  }

  return {
    kind: 'pin',
    top: stickyTop + relOffset,
    from,
    to,
  };
}

// Evaluates the continuous mascot coordinates, scale, and motion state
function evaluateMascot(
  stops: StopInfo[],
  holds: [number, number][],
  scrollY: number,
  safe: { left: number; top: number; right: number; bottom: number },
  blend: number
) {
  const { k: pIdx, t: prog } = findInterval(holds, scrollY);

  if (prog <= 0 || pIdx >= stops.length - 1) {
    const current = stops[pIdx];
    const pt = getTrackAnchor(current, scrollY);
    const bounded = current.act === 'basket' ? pt : clampToSafe(pt.x, pt.y, current.s, current.box, safe);
    return {
      x: bounded.x,
      y: bounded.y,
      s: current.s,
      front: !current.behind,
      airborne: false,
      k: pIdx,
      t: 0,
      walked: 0,
    };
  }

  const r = stops[pIdx];
  const i = stops[pIdx + 1];
  const enterNext = holds[pIdx + 1][0];
  const leaveCurr = holds[pIdx][1];
  const span = Math.max(1, enterNext - leaveCurr);
  const v = clamp((scrollY - leaveCurr) / span, 0, 1);

  const kPt = getTrackAnchor(r, leaveCurr);
  const nextPt = getTrackAnchor(i, enterNext);

  // Compute Bezier control points
  const dx = nextPt.x - kPt.x;
  const safeW = safe.right - safe.left;
  const lead = Math.max(0.45 * Math.abs(dx), 0);
  const dir = dx >= 0 ? 1 : -1;
  let c1 = { x: kPt.x + dir * lead, y: kPt.y };
  let c2 = { x: nextPt.x - dir * lead, y: nextPt.y };
  const minSpread = 0.14 * safeW;

  if (Math.abs(dx) < minSpread) {
    const lateralShift = ((kPt.x + nextPt.x) / 2 < (safe.left + safe.right) / 2 ? 1 : -1) * (minSpread - Math.abs(dx)) * 0.9;
    c1 = { x: c1.x + lateralShift, y: lerp(kPt.y, nextPt.y, 0.2) };
    c2 = { x: c2.x + lateralShift, y: lerp(kPt.y, nextPt.y, 0.8) };
  }

  const clampPt = (pt: { x: number; y: number }) => ({
    x: Math.min(safe.right, Math.max(safe.left, pt.x)),
    y: Math.min(safe.bottom, Math.max(safe.top, pt.y)),
  });

  const bezCurve = {
    p0: { x: kPt.x, y: kPt.y - r.sink * r.s },
    c1: clampPt(c1),
    c2: clampPt(c2),
    p1: { x: nextPt.x, y: nextPt.y - i.sink * i.s },
  };

  // Quintic smoothstep easing
  const wQuintic = v * v * v * (v * (6 * v - 15) + 10);
  const bezPos = evalBezier(bezCurve.p0, bezCurve.c1, bezCurve.c2, bezCurve.p1, wQuintic);
  const scaleInterp = lerp(r.s, i.s, smoothstep(clamp(v / 0.65, 0, 1)));

  // Blend departed/destination track anchors during active page scroll
  const R = Math.min(0.3, Math.max(0.06, blend / span));
  const S = 1 - clamp(v / R, 0, 1);
  const T = clamp((v - (1 - R)) / R, 0, 1);
  const currAnchor = getTrackAnchor(r, scrollY);
  const nextAnchor = getTrackAnchor(i, scrollY);

  let posY = bezPos.y + S * (currAnchor.y - kPt.y) + T * (nextAnchor.y - nextPt.y);
  let posX = bezPos.x;

  // Authentic ledge sink rise-and-settle
  posY += r.sink * r.s * (1 - clamp(v / 0.22, 0, 1)) + i.sink * i.s * clamp((v - 0.78) / 0.22, 0, 1);

  let airborne = false;
  if (r.behind && v < 0.36) {
    posY -= Math.sin((v / 0.36) * Math.PI) * Math.min(64 * r.s, 72);
    airborne = v < 0.32;
  }
  if (i.behind && v > 0.68) {
    posY -= Math.sin(((v - 0.68) / 0.32) * Math.PI) * Math.min(56 * i.s, 60);
    airborne = true;
  }
  if (r.sink && v < 0.2) {
    airborne = true;
  }

  const front = !(r.behind && v < 0.12 || i.behind && v > 0.92);
  const bounded = clampToSafe(posX, posY, scaleInterp, v < 0.5 ? r.box : i.box, safe);

  // Compute walked path distance
  let walkedDist = 0;
  let prevPt = bezCurve.p0;
  const numSteps = Math.max(1, Math.ceil(32 * clamp(wQuintic, 0, 1)));
  for (let s = 1; s <= numSteps; s++) {
    const stepPt = evalBezier(bezCurve.p0, bezCurve.c1, bezCurve.c2, bezCurve.p1, (s / numSteps) * clamp(wQuintic, 0, 1));
    walkedDist += Math.hypot(stepPt.x - prevPt.x, stepPt.y - prevPt.y);
    prevPt = stepPt;
  }

  return {
    x: bounded.x,
    y: bounded.y,
    s: scaleInterp,
    front,
    airborne,
    k: pIdx,
    t: v,
    walked: walkedDist,
  };
}

// --- DIRECT SVG PUPPET COMPONENT (EXACT MODULE 55334) ---
function SvgPuppet({ pose = 'peek', facing = 'right', label }: { pose?: string; facing?: string; label?: string }) {
  const initialPose = POSES[pose] || BASE_POSE;
  const tf = computeSvgTransforms(initialPose);
  const rootFlip = facing === 'left' ? 'translate(300 0) scale(-1 1)' : undefined;

  return (
    <svg
      viewBox="0 0 300 240"
      style={{ overflow: 'visible' }}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={!label || undefined}
      focusable="false"
    >
      <g data-p="root" transform={rootFlip}>
        {/* Shadow */}
        <ellipse
          data-p="shadow"
          cx="150"
          cy="230"
          rx="92"
          ry="7"
          fill="#2a170e"
          opacity={tf.shadowOpacity}
          transform={tf.shadow}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />

        {/* Body */}
        <g data-p="body" transform={tf.body} opacity={tf.side}>
          {/* Back Far Leg */}
          <g data-p="bf" transform={tf.bf} opacity={tf.backLegs}>
            <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
            <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>

          {/* Front Far Leg */}
          <g data-p="ff" transform={tf.ff}>
            <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
            <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>

          {/* Tail */}
          <g data-p="tail" transform={tf.tail}>
            <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
          </g>

          {/* Back Near Leg */}
          <g data-p="bn" transform={tf.bn} opacity={tf.backLegs}>
            <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z" fill="#f2be6b" />
            <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>

          {/* Torso & Chest */}
          <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />

          {/* Front Near Leg */}
          <g data-p="fn" transform={tf.fn}>
            <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
            <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
        </g>

        {/* Haunches (Sitting) */}
        <g data-p="haunch" opacity={tf.haunchOpacity} transform={tf.haunch}>
          <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
        </g>

        {/* Head */}
        <g data-p="head" transform={tf.head}>
          <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
          <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform={tf.earL} />
          <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform={tf.earR} />
          <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
          <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
          <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />

          {/* Gaze & Eyes */}
          <g data-p="eyes" transform={tf.eyes}>
            <g data-p="open" opacity={tf.openEyes}>
              <g data-p="blink" transform={tf.blink}>
                <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                <circle cx="196.6" cy="94.6" r="2.7" fill="#fff" />
                <circle cx="232.6" cy="94.6" r="2.7" fill="#fff" />
                <circle cx="192" cy="101.2" r="1.2" fill="#fff" />
                <circle cx="228" cy="101.2" r="1.2" fill="#fff" />
              </g>
            </g>
          </g>

          <path data-p="happy" d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity={tf.happyEyes} />
          <path data-p="shut" d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity={tf.shutEyes} />
          <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
          <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          <path data-p="tongue" d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" opacity={tf.tongue} />
          <g data-p="mouth" opacity={tf.mouth}>
            <path d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z" fill="#6b2a1c" stroke="#2a170e" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z" fill="#e98c8c" />
          </g>
        </g>

        {/* Ledge Paws (Peek & Snug) */}
        <g data-p="ledge" opacity={tf.ledge}>
          <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
        </g>
      </g>
    </svg>
  );
}

// --- MAIN PUPJOURNEY RECONSTRUCTED COMPONENT ---
export function PupJourney() {
  const layerRef = useRef<HTMLDivElement>(null);
  const actorRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLSpanElement>(null);
  const bubbleAtRef = useRef<HTMLSpanElement>(null);
  const printsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const doc = document.documentElement;
    const actorEl = actorRef.current;
    const bodyEl = bodyRef.current;
    const layerEl = layerRef.current;
    const bubbleEl = bubbleRef.current;
    const bubbleAtEl = bubbleAtRef.current;
    const printsEl = printsRef.current;
    if (!actorEl || !bodyEl || !layerEl || !bubbleEl || !bubbleAtEl || !printsEl) return;

    const svg = bodyEl.querySelector('svg');
    if (!svg) return;

    const controller = new PupActorController(svg, 'peek', 1);

    let stops: StopInfo[] = [];
    let holds: [number, number][] = [];
    let pawPrints: SVGElement[] = Array.from(printsEl.querySelectorAll('svg'));
    let nextPrintIdx = 0;
    let lastDropDist = 0;
    let lastPos: { x: number; y: number } | null = null;
    let lastScrollY = window.scrollY;
    let lastScrollTimestamp = performance.now() / 1000;
    let scrollVelocity = 0;
    let lastTrackLeft: number | null = null;
    let lastTrackMoveTime = 0;
    let bubbleUntil = 0;
    let currentStopIdx = -1;
    let lastInteractionTime = performance.now() / 1000;
    let nextBasketIdle = 0;
    let cueTarget: { el: HTMLElement; until: number } | null = null;
    let pointerTarget: { x: number; y: number; t: number } | null = null;
    let peekabooPlayed = false;
    let scheduledCues: [number, () => void][] = [];

    const onScroll = () => {
      if (window.scrollY !== lastScrollY) {
        lastScrollTimestamp = performance.now() / 1000;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Say speech bubble
    const say = (text: string, durationSec = 1.6) => {
      if (!bubbleEl) return;
      bubbleEl.textContent = text;
      bubbleEl.dataset.show = 'true';
      bubbleUntil = performance.now() / 1000 + durationSec;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') {
        pointerTarget = { x: e.clientX, y: e.clientY, t: performance.now() / 1000 };
      }
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const handleClick = () => {
      const now = performance.now() / 1000;
      const isBasket = currentStopIdx !== -1 && stops[currentStopIdx]?.act === 'basket';

      if (isBasket) {
        const basketReplies = ['snug as a bug!', 'home sweet home', 'zzzz...', 'woof!'];
        const text = basketReplies[Math.floor(Math.random() * basketReplies.length)];
        controller.wag(0.6);
        controller.jolt(0.6);
        say(text, 1.6);
        return;
      }

      const replies = [
        { woof: true, say: 'woof!' },
        { hop: true, say: 'wheee!' },
        { love: true, say: 'I like you!' },
        { sneeze: true, say: 'achoo!' },
        { woof: true, say: 'boing!' },
      ];
      const choice = replies[Math.floor(Math.random() * replies.length)];
      if (choice.woof) {
        controller.woof(now);
        controller.wag(1);
      } else if (choice.hop) {
        controller.hop(1.3);
      } else if (choice.love) {
        controller.wag(1);
        controller.hop(0.6);
      } else if (choice.sneeze) {
        controller.jolt(1.4);
        controller.cock(-8);
        setTimeout(() => controller.cock(0), 800);
      }
      say(choice.say, 1.5);
    };
    actorEl.addEventListener('click', handleClick);
    actorEl.style.cursor = 'pointer';

    const handleMouseEnter = () => {
      controller.petting(true);
      controller.wag(1);
    };
    const handleMouseLeave = () => {
      controller.petting(false);
      const isBasket = currentStopIdx !== -1 && stops[currentStopIdx]?.act === 'basket';
      controller.wag(isBasket ? 0.2 : 0.6);
    };
    actorEl.addEventListener('mouseenter', handleMouseEnter);
    actorEl.addEventListener('mouseleave', handleMouseLeave);

    const handlePupCue = (e: Event) => {
      const custom = e as CustomEvent<{ look?: HTMLElement; secs?: number; say?: string }>;
      const now = performance.now() / 1000;
      if (custom.detail?.look) {
        cueTarget = {
          el: custom.detail.look,
          until: now + (custom.detail.secs || 0.9),
        };
      }
      if (custom.detail?.say) {
        say(custom.detail.say, custom.detail.secs || 1.6);
      }
    };
    window.addEventListener('pup:cue', handlePupCue);

    let currentLayout: {
      lane: boolean;
      stops: StopInfo[];
      holds: [number, number][];
      blend: number;
    } | null = null;

    const scanStops = () => {
      const isMobile = window.matchMedia('(max-width: 767px), (pointer: coarse) and (max-height: 519px)').matches;
      const clientWidth = doc.clientWidth;
      const screenH = window.innerHeight;
      const headerEl = document.getElementById('site-header');
      const headerH = headerEl?.offsetHeight ?? 76;
      const whatsappBar = document.querySelector('[data-whatsapp-bar]');
      const whatsappBarH = whatsappBar?.getClientRects().length ? whatsappBar.getBoundingClientRect().height : 0;

      const safe = {
        left: 10,
        top: headerH + 10,
        right: clientWidth - 10,
        bottom: screenH - 10 - whatsappBarH,
      };

      const computedStops: StopInfo[] = [];
      const rawHolds: [number, number][] = [];

      const processStop = (el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        const pose = el.dataset.pose || 'sit';
        const act = el.dataset.act ?? '';
        const ratio = rect.width / 300;
        const scale = act === 'basket' || isMobile ? ratio : 1.12 * ratio;
        const anchor = pose === 'peek' ? { x: D.x, y: 159 } : D;
        const track = computeTrack(el, rect);

        if (track.kind !== 'screen') {
          track.top += anchor.y * (ratio - scale);
        }

        const anchorX = rect.left + anchor.x * (ratio - scale);
        const scene = el.closest<HTMLElement>('[data-pup-scene]');
        const trackEl = act === 'treadmill' ? scene?.querySelector<HTMLElement>('[data-treadmill]') ?? null : null;
        const looks = scene ? Array.from(scene.querySelectorAll<HTMLElement>('[data-pup-look]')) : [];

        const stopInfo: StopInfo = {
          el,
          scene,
          pose,
          facing: el.dataset.facing === 'left' ? -1 : 1,
          act,
          behind: el.dataset.behind === 'true',
          lane: el.dataset.lane === 'true',
          x: anchorX,
          track,
          s: scale,
          box: getBox(pose),
          sink: 0,
          looks,
          trackEl,
        };

        computedStops.push(stopInfo);

        let holdRange: [number, number];
        if (track.kind === 'pin') {
          holdRange = [track.from!, track.to!];
        } else {
          const sTop = track.top;
          const nTop = sTop + stopInfo.box[1] * stopInfo.s;
          const lTop = sTop + stopInfo.box[3] * stopInfo.s;
          const rMid = (nTop + lTop) / 2;
          const viewHeight = safe.bottom - safe.top;
          const ratios = isMobile ? [0.6, 0.86] : [0.42, 0.78];
          let oHold = rMid - (safe.top + ratios[1] * viewHeight);
          let dHold = rMid - (safe.top + ratios[0] * viewHeight);
          oHold = Math.max(oHold, lTop - safe.bottom);
          dHold = Math.min(dHold, nTop - safe.top);
          if (oHold > dHold) {
            oHold = dHold = rMid - (safe.top + viewHeight / 2);
          }
          holdRange = [oHold, dHold];
        }

        if (!isMobile && scene && track.kind === 'page' && act !== 'basket' && act !== 'peekaboo') {
          const viewHeight = safe.bottom - safe.top;
          const sceneTop = scene.getBoundingClientRect().top + window.scrollY - safe.top + 0.08 * viewHeight;
          const stopBottom = track.top + stopInfo.box[3] * stopInfo.s - safe.bottom;
          if (holdRange[1] > sceneTop) {
            const sTarget = Math.max(sceneTop, stopBottom + 0.12 * viewHeight);
            holdRange = [Math.max(stopBottom, sTarget - Math.max(holdRange[1] - holdRange[0], 0.2 * viewHeight)), sTarget];
          }
        }

        rawHolds.push(holdRange);
      };

      const allStops = Array.from(document.querySelectorAll<HTMLElement>('[data-pup-stop]')).filter(
        (el) => el.getClientRects().length > 0
      );

      if (isMobile) {
        const laneStops = allStops.filter((el) => el.dataset.lane === 'true');
        const firstStop = laneStops[0];
        const lastStop = laneStops.length > 1 ? laneStops[laneStops.length - 1] : undefined;
        if (firstStop) processStop(firstStop);

        const heroScene = computedStops[0]?.scene ?? null;
        const mainScenes = Array.from(document.querySelectorAll<HTMLElement>('#main [data-pup-scene]')).filter(
          (el) => el !== heroScene && el.getClientRects().length > 0
        );

        const mobileScale = Math.min(0.62, Math.max(0.5, clientWidth / 650));
        const peekBox = getBox('peek');
        const sinkOffset = D.y - 159; // 69px

        mainScenes.forEach((sceneEl, idx) => {
          const isEven = idx % 2 === 0;
          const xPos = isEven ? safe.left + 2 - peekBox[0] * mobileScale : safe.right - 2 - peekBox[2] * mobileScale;

          computedStops.push({
            el: sceneEl,
            scene: sceneEl,
            pose: 'peek',
            facing: isEven ? 1 : -1,
            act: 'lane',
            behind: false,
            lane: true,
            x: xPos,
            track: {
              kind: 'screen',
              top: 0,
            },
            s: mobileScale,
            box: peekBox,
            sink: sinkOffset,
            looks: [],
            trackEl: null,
          });

          const rect = sceneEl.getBoundingClientRect();
          const iHold = rect.top + window.scrollY - 0.42 * screenH;
          const pHold = rect.bottom + window.scrollY - 0.58 * screenH;
          rawHolds.push(iHold <= pHold ? [iHold, pHold] : [(iHold + pHold) / 2, (iHold + pHold) / 2]);
        });

        if (lastStop) processStop(lastStop);
      } else {
        allStops.forEach(processStop);
      }

      if (computedStops.length < 2) {
        doc.removeAttribute('data-pup');
        layerEl.hidden = true;
        currentLayout = null;
        return;
      }

      doc.dataset.pup = 'live';
      layerEl.hidden = false;

      const maxScroll = doc.scrollHeight - screenH;
      const minGaps = computedStops.slice(1).map((curr, idx) => {
        const prev = computedStops[idx];
        const l = (0.78 - 0.42) * screenH;
        const r = (isMobile ? 0.32 : 0.5) * screenH;
        const dist = Math.hypot(Math.abs(curr.x + D.x * curr.s - (prev.x + D.x * prev.s)), l);
        return Math.min(1.4 * screenH, Math.max(r, 1.15 * dist));
      });

      const holds: [number, number][] = rawHolds.map(([from, to]) =>
        from <= to ? [from, to] : [(from + to) / 2, (from + to) / 2]
      );
      holds[0][0] = -Infinity;
      const lastH = holds[holds.length - 1];
      lastH[1] = Infinity;
      lastH[0] = Math.min(lastH[0], maxScroll - 1);

      for (let i = 0; i < holds.length - 1; i++) {
        const curr = holds[i];
        const next = holds[i + 1];
        if (next[0] < curr[1]) {
          const mid = (curr[1] + next[0]) / 2;
          curr[1] = Math.max(curr[0], mid);
          next[0] = Math.min(next[1], mid);
          if (next[0] < curr[1]) next[0] = curr[1];
        }
        const gap = minGaps[i] ?? 0;
        let deficit = gap - (next[0] - curr[1]);
        if (deficit > 0) {
          const trimCurr = Math.min(deficit / 2, curr[1] - curr[0]);
          const expandNext = Math.min(deficit / 2, next[1] - next[0]);
          curr[1] -= trimCurr;
          next[0] += expandNext;
          deficit -= trimCurr + expandNext;
          const trimNextRem = Math.min(deficit, next[1] - next[0]);
          next[0] += trimNextRem;
          deficit -= trimNextRem;
          if (deficit > 0) {
            curr[1] -= Math.min(deficit, curr[1] - curr[0]);
          }
        }
      }

      for (const h of holds) {
        if (h[1] < h[0]) h[1] = h[0];
      }

      stops = computedStops;
      currentLayout = {
        lane: isMobile,
        stops: computedStops,
        holds,
        blend: 0.12 * screenH,
      };

      (window as any).__stops = stops;
      (window as any).__holds = holds;
    };

    scanStops();
    window.addEventListener('resize', scanStops, { passive: true });
    window.addEventListener('load', scanStops, { passive: true });

    let resizeTimer: any = null;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(scanStops, 80);
    });
    if (document.body) resizeObserver.observe(document.body);
    document.fonts?.ready?.then(scanStops);
    // Main animation loop
    let lastTime = performance.now();
    let animId: number;

    let smoothX = 0;
    let smoothY = 0;
    let smoothS = 0;
    let isInitialized = false;
    let idleTimer = 0;
    let lastDocHeight = doc.scrollHeight;

    const tick = () => {
      const nowMs = performance.now();
      const nowSec = nowMs / 1000;
      const dt = Math.min(0.05, (nowMs - lastTime) / 1000);
      lastTime = nowMs;

      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      scrollVelocity = lerp(scrollVelocity, scrollDelta, 0.2);

      const currentDocHeight = doc.scrollHeight;
      if (Math.abs(currentDocHeight - lastDocHeight) > 15) {
        lastDocHeight = currentDocHeight;
        scanStops();
      }

      if (nowSec > bubbleUntil && bubbleEl.dataset.show === 'true') {
        bubbleEl.dataset.show = 'false';
      }

      if (currentLayout && currentLayout.stops.length >= 2 && currentLayout.holds.length >= 2) {
        const getBarTop = () => {
          const bar = document.querySelector('[data-whatsapp-bar]');
          if (bar && bar.getClientRects().length > 0) {
            const r = bar.getBoundingClientRect();
            if (r.height) return r.top;
          }
          return window.innerHeight - 6;
        };

        if (currentLayout.lane) {
          const barTop = getBarTop();
          for (const st of currentLayout.stops) {
            if (st.track.kind === 'screen') {
              st.track.top = barTop - 159 * st.s;
            }
          }
        }

        const barTop = getBarTop();
        const safeBounds = currentLayout.lane
          ? {
              left: 10,
              top: (document.getElementById('site-header')?.offsetHeight ?? 76) + 10,
              right: doc.clientWidth - 10,
              bottom: barTop + 40,
            }
          : {
              left: 10,
              top: (document.getElementById('site-header')?.offsetHeight ?? 76) + 10,
              right: doc.clientWidth - 10,
              bottom: window.innerHeight - 10,
            };

        const state = evaluateMascot(currentLayout.stops, currentLayout.holds, currentScrollY, safeBounds, currentLayout.blend);

        // Continuous exponential position smoothing
        if (!isInitialized) {
          smoothX = state.x;
          smoothY = state.y;
          smoothS = state.s;
          isInitialized = true;
        } else {
          const posDecay = expDecay(dt, 0.09);
          smoothX += (state.x - smoothX) * posDecay;
          smoothY += (state.y - smoothY) * posDecay;
          smoothS += (state.s - smoothS) * expDecay(dt, 0.12);
        }

        // True frame distance traveled
        const frameDist = lastPos ? Math.hypot(smoothX - lastPos.x, smoothY - lastPos.y) : 0;
        if (frameDist > 0.15) {
          idleTimer = 0;
        } else {
          idleTimer += dt;
        }

        // Idle thinking box "coming?" when scroll pauses for 2.6s (anywhere except hero & basket)
        const isAtBasket = state.t === 0 && stops[state.k]?.act === 'basket';
        const isAtHero = state.k === 0 && state.t === 0;
        if (!isAtBasket && !isAtHero) {
          if (idleTimer > 2.6 && idleTimer - dt <= 2.6) {
            say('coming?', 1.5);
            controller.cock(10);
            setTimeout(() => controller.cock(0), 1000);
          }
        }

        // Directional facing: update facing based on smoothed displacement only while traveling
        if (state.t > 0 && lastPos && frameDist > 0.3) {
          const dx = smoothX - lastPos.x;
          const dy = smoothY - lastPos.y;
          if (Math.abs(dx) > 0.4 && Math.abs(dx) > 0.3 * Math.abs(dy)) {
            controller.face(dx > 0 ? 1 : -1, 0.08);
          }
        }

        // Process any scheduled peekaboo / stop animation cues
        while (scheduledCues.length > 0 && nowSec >= scheduledCues[0][0]) {
          const item = scheduledCues.shift();
          item?.[1]();
        }

        // Cancel pending peekaboo cues if user scrolls away
        if (Math.abs(scrollDelta) > 1 && scheduledCues.length > 0) {
          scheduledCues = [];
        }

        // Hero Peekaboo Sequence
        if (!peekabooPlayed && state.k === 0 && state.t === 0) {
          peekabooPlayed = true;
          const friendEls = Array.from(document.querySelectorAll<HTMLElement>('[data-pup-friend]'));
          const firstFriend = friendEls[0];
          const lastFriend = friendEls[friendEls.length - 1];

          scheduledCues = [
            [nowSec + 0.1, () => controller.setPose({ ...POSES.peek, headY: 24 })],
            [nowSec + 0.7, () => {
              controller.setPose('peek');
              controller.jolt(1.2);
              say('peekaboo!', 1.6);
            }],
            [nowSec + 1.5, () => {
              if (firstFriend) {
                cueTarget = { el: firstFriend, until: nowSec + 0.8 };
              }
            }],
            [nowSec + 2.3, () => {
              if (lastFriend) {
                cueTarget = { el: lastFriend, until: nowSec + 0.8 };
              }
            }],
            [nowSec + 3.1, () => {
              cueTarget = null;
              controller.wag(1);
            }],
          ];
        }

        // Update stop status & transitions
        if (state.t === 0) {
          // Docked at stop!
          const st = stops[state.k];
          controller.face(st.facing, 0.14);
          if (currentStopIdx !== state.k) {
            currentStopIdx = state.k;
            controller.reset();
            controller.setPose(st.pose);
            controller.face(st.facing, 0.14);
            controller.stride(0);
            controller.wag(st.act === 'basket' ? 0.2 : 0.7);
            controller.jolt(0.4);
          }

          // Treadmill synchronization in Meet section
          if (st.trackEl) {
            const trackLeft = st.trackEl.getBoundingClientRect().left;
            if (lastTrackLeft !== null) {
              const diff = trackLeft - lastTrackLeft;
              controller.walkedTo(-trackLeft / smoothS);
              if (Math.abs(diff) > 0.12) {
                lastTrackMoveTime = nowSec;
                controller.setPose('walk');
                controller.stride(1);
                controller.face(diff < 0 ? 1 : -1, 0.08);
              } else if (nowSec - lastTrackMoveTime > 0.25) {
                controller.setPose('stand');
                controller.stride(0);
              }
            }
            lastTrackLeft = trackLeft;
          } else {
            lastTrackLeft = null;
          }

          if (st.act === 'tilt') {
            controller.cock(Math.sin(0.9 * nowSec) > 0.35 ? 13 : -0.35 > Math.sin(0.9 * nowSec) ? -10 : 0);
          } else if (st.act === 'basket') {
            controller.wag(0.2);
            controller.stride(0);
            controller.setPose('snug');
            layerEl.dataset.front = 'false';
            if (nowSec > nextBasketIdle) {
              nextBasketIdle = nowSec + 4.5 + 3 * Math.random();
              if (Math.random() < 0.7) {
                controller.jolt(0.55);
              } else {
                controller.yawn(nowSec, 0.7);
              }
            }
          }
        } else {
          // Traveling along trajectory between stops
          if (currentStopIdx !== -1) {
            currentStopIdx = -1;
            controller.reset();
          }

          if (state.airborne) {
            controller.setPose('hop');
            controller.stride(0);
          } else if (idleTimer > 0.28) {
            controller.setPose('stand');
            controller.stride(0);
          } else {
            controller.setPose('walk');
            controller.stride(1);
            controller.advance(frameDist / Math.max(0.05, smoothS));
          }

          // Dropping paw prints along the smoothed trail
          if (lastPos && !state.airborne && pawPrints.length > 0) {
            lastDropDist += frameDist;
            if (lastDropDist > 34 * smoothS) {
              lastDropDist = 0;
              const printEl = pawPrints[nextPrintIdx % pawPrints.length];
              nextPrintIdx++;

              const angle = Math.atan2(smoothY - lastPos.y + scrollDelta, smoothX - lastPos.x) + Math.PI / 2;
              const printSize = 14 * Math.max(0.75, 1.5 * smoothS);

              printEl.style.transform = `translate(${(smoothX - printSize / 2).toFixed(1)}px, ${(smoothY + currentScrollY - printSize / 2).toFixed(1)}px) rotate(${angle.toFixed(3)}rad)`;
              printEl.style.width = `${printSize.toFixed(1)}px`;
              printEl.style.height = `${printSize.toFixed(1)}px`;

              printEl.animate(
                [
                  { opacity: 0 },
                  { opacity: 0.45, offset: 0.08 },
                  { opacity: 0.45, offset: 0.5 },
                  { opacity: 0 },
                ],
                { duration: 2600, easing: 'ease-out' }
              );
            }
          }
        }

        // Section visual status
        stops.forEach((st, idx) => {
          if (st.scene) {
            const isHere = state.t === 0 && idx === state.k;
            const isVisited = idx <= state.k || (idx === state.k + 1 && state.t > 0.92);
            if (st.scene.dataset.here !== String(isHere)) st.scene.dataset.here = String(isHere);
            if (st.scene.dataset.visited !== String(isVisited)) st.scene.dataset.visited = String(isVisited);
          }
        });

        // Gaze tracking priority: cue (opening doors / peekaboo) > pointer mouse move > null
        if (cueTarget && cueTarget.until > nowSec) {
          const r = cueTarget.el.getBoundingClientRect();
          controller.lookAt({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
        } else if (!isAtBasket && pointerTarget && nowSec - pointerTarget.t < 2.5) {
          controller.lookAt(pointerTarget);
        } else {
          controller.lookAt(null);
        }

        // Apply smoothed transform to actor
        actorEl.style.transform = `translate3d(${(smoothX - D.x * smoothS).toFixed(2)}px, ${(smoothY - D.y * smoothS).toFixed(2)}px, 0)`;
        bodyEl.style.transform = `scale(${smoothS.toFixed(4)})`;
        layerEl.dataset.front = String(state.front);

        // Position speech bubble above puppy's head
        if (bubbleEl.dataset.show === 'true') {
          if (nowSec > bubbleUntil) {
            bubbleEl.dataset.show = 'false';
          } else {
            const bubbleX = (controller.facingDir > 0 ? 214 : 300 - 214) * smoothS;
            bubbleAtEl.style.transform = `translate(${bubbleX.toFixed(1)}px, ${(30 * smoothS).toFixed(1)}px)`;
          }
        }

        lastPos = { x: smoothX, y: smoothY };

        (window as any).__pupDebug = {
          currentScrollY,
          state,
          smoothX,
          smoothY,
          smoothS,
          actorTransform: actorEl.style.transform,
          bodyScale: bodyEl.style.transform,
        };
      }

      controller.tick(dt, nowSec);
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      doc.removeAttribute('data-pup');
      resizeObserver.disconnect();
      clearTimeout(resizeTimer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pup:cue', handlePupCue);
      window.removeEventListener('resize', scanStops);
      window.removeEventListener('load', scanStops);
      actorEl.removeEventListener('click', handleClick);
      window.removeEventListener('pointermove', handlePointerMove);
      actorEl.removeEventListener('mouseenter', handleMouseEnter);
      actorEl.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Dynamic 24 Paw Prints Layer */}
      <div
        aria-hidden="true"
        ref={printsRef}
        className="pup-prints"
        style={{ pointerEvents: 'none' }}
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <svg key={i} viewBox="0 0 64 64" aria-hidden="true">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
        ))}
      </div>

      {/* Viewport Pinned Pup Actor Layer */}
      <div
        aria-hidden="true"
        ref={layerRef}
        className="pup-layer"
        data-front="false"
        style={{ pointerEvents: 'none' }}
      >
        <div ref={actorRef} className="pup-actor" style={{ willChange: 'transform', pointerEvents: 'none' }}>
          <div
            ref={bodyRef}
            className="pup-actor__body cursor-pointer"
            style={{ pointerEvents: 'none' }}
          >
            <SvgPuppet pose="peek" label="Teddy, your companion puppy" />
          </div>

          {/* Interactive Speech Bubble */}
          <span ref={bubbleAtRef} className="pup-bubble-at">
            <span
              ref={bubbleRef}
              className="pup-bubble"
              data-show="false"
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default PupJourney;
