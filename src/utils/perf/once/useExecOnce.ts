

export default function useExecOnce() {
  let ieExec = false;
  return function (cb: () => void) {
    if (ieExec) return;
    ieExec = true;

    cb();
  };
}
