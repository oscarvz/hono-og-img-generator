import type { ByteBuf } from "@takumi-rs/wasm";
import aMinusBuffer from "./components/OpenGraphImage/a-minus.png?arraybuffer";
import aMinusUrl from "./components/OpenGraphImage/a-minus.png?url";
import aPlusBuffer from "./components/OpenGraphImage/a-plus.png?arraybuffer";
import aPlusUrl from "./components/OpenGraphImage/a-plus.png?url";

let fetchedResources: Promise<Map<string, ByteBuf>>;
export async function prepareResources() {
  fetchedResources ??= Promise.resolve(new Map<string, ByteBuf>());
  fetchedResources.then((map) => {
    map.set(aPlusUrl, aPlusBuffer);
    map.set(aMinusUrl, aMinusBuffer);
  });

  return fetchedResources;
}
