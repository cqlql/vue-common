interface Point {
  pageX: number
  pageY: number
}

export interface DragOptions {
  elem: HTMLElement
  onDown?(e: TouchEvent | MouseEvent): void | boolean
  onStart(e: TouchEvent | MouseEvent, point: Point): void
  onMove(e: TouchEvent | MouseEvent, point: Point): void
  onEnd(): void
}

export interface MouseDragOptions {
  elem: HTMLElement
  onDown?(e: MouseEvent): void | boolean
  onStart(e: MouseEvent): void
  onMove(e: MouseEvent): void
  onEnd(): void
}
export interface TouchDragOptions {
  elem: HTMLElement
  onDown?(e: TouchEvent): void | boolean
  onStart(e: TouchEvent): void
  onMove(e: TouchEvent): void
  onEnd(): void
}
