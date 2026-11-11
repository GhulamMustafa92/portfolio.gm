import React from 'react'

export default function P() {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <ShapeGrid
    shape="hexagon"
    direction="none"
    lineColor="#2a2734"
    hoverColor="#2d5ad4"
    hoverFillColor="#2dd4bf"
    fillOpacity={0.15}
    cellSize={40}
    speed={0.35}
    tiltX={0}
    tiltY={0}
    rainbow={false}
    lineWidth={1}
    radius={2}
    trail={0.9}
    glow={0.35}
    twinkle={0}
    fade={1}
    clickCascade
    intro
/>
</div>
  )
}