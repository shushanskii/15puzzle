export function animate(
  timing: (timeFraction: number) => number,
  draw: (progress: number) => void,
  callback: (...args: any[]) => void,
  duration: number
): void {
  const start = performance.now()

  requestAnimationFrame(function animate(time: number): void {
    let timeFraction = (time - start) / duration
    if (timeFraction > 1) timeFraction = 1

    const progress = timing(timeFraction)

    draw(progress)

    if (timeFraction < 1) {
      requestAnimationFrame(animate)
    }

    if (timeFraction >= 1) {
      callback.call({}, 'olololo')
    }
  })
}
