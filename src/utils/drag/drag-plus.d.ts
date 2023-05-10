interface DragOptions {
  elem: HTMLElement;
  onDown?(e: TouchEvent | MouseEvent): void;
  onStart?(e: TouchEvent | MouseEvent): void;
  onMove(args: {
    lx: number;
    ly: number;
    mx: number;
    my: number;
    e: TouchEvent | MouseEvent;
  }): void;
  onEnd?(): void;
  getCurrentXY(): { x: number; y: number };
}

declare function dragPlus(options: DragOptions): () => void;

export default dragPlus;
