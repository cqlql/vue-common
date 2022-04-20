export default class Turntable {
  init(params: { el: Element; complete: () => void; count?: number }): void

  start(): void
  stop(index: number): void
}
