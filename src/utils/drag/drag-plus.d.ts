interface DragOptions {
  elem: HTMLElement;
  onDown?(e: TouchEvent | MouseEvent): void;
  onStart?(e: TouchEvent | MouseEvent): void;
  onMove(args: { lx: number; ly: number; e: TouchEvent | MouseEvent }): void;
  onEnd?(): void;
}

declare function dragPlus(options: DragOptions): void;

export default dragPlus;
