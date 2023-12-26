import { debounceCreate, debounceSingle } from '@/utils/perf/debounce';
import { test, vi, expect } from 'vitest';
test('防抖', async function () {
  const cart = {
    getApples: () => 42,
  };
  const buySpy = vi.spyOn(cart, 'getApples');
  const debounce = debounceCreate();
  await new Promise((resolve) => {
    debounce(() => cart.getApples(), 100);
    debounce(() => cart.getApples(), 100);
    debounce(() => cart.getApples(), 100);

    debounceSingle(() => cart.getApples(), 100);
    debounceSingle(() => cart.getApples(), 100);
    debounceSingle(() => cart.getApples(), 100);

    setTimeout(resolve, 1000);
  });

  expect(buySpy).toHaveBeenCalledTimes(2);
});
