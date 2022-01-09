export default class Animation {
  start(exec: (p: number) => void, time: number, complete: () => void): void
  stop(): void
  easing: any
}
