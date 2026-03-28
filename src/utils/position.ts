export const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(value, max));

export const getPosition = (angle: number, radius: number, dotSize: number) => {
  const rad = (angle * Math.PI) / 180;
  const x = radius + radius * Math.cos(rad) - dotSize / 2;
  const y = radius + radius * Math.sin(rad) - dotSize / 2;
  return { left: x, top: y, dotSize };
};
