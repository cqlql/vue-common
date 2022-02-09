export default class Animation {
  start(
    exec: (p: number) => void,
    duration?: number,
    complete?: () => void,
  ): void
  stop(): void
  easing: any
}
