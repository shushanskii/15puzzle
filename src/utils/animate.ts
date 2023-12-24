export function animate(
  timing: (timeFraction: number) => number,
  draw: (progress: number) => void,
  duration: number
): void {
  const start = performance.now()

  requestAnimationFrame(function animate(time) {
    // TimeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration
    if (timeFraction > 1) timeFraction = 1

    // Вычисление текущего состояния анимации
    const progress = timing(timeFraction)

    draw(progress) // Отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate)
    }
  })
}
