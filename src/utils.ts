import type { ByteBuf } from "@takumi-rs/wasm";
import aMinusBuffer from "./components/OpenGraphImage/a-minus.webp?arraybuffer";
import aMinusUrl from "./components/OpenGraphImage/a-minus.webp?url";
import aPlusBuffer from "./components/OpenGraphImage/a-plus.webp?arraybuffer";
import aPlusUrl from "./components/OpenGraphImage/a-plus.webp?url";
import bMinusBuffer from "./components/OpenGraphImage/b-minus.webp?arraybuffer";
import bMinusUrl from "./components/OpenGraphImage/b-minus.webp?url";
import bPlusBuffer from "./components/OpenGraphImage/b-plus.webp?arraybuffer";
import bPlusUrl from "./components/OpenGraphImage/b-plus.webp?url";
import cMinusBuffer from "./components/OpenGraphImage/c-minus.webp?arraybuffer";
import cMinusUrl from "./components/OpenGraphImage/c-minus.webp?url";
import cPlusBuffer from "./components/OpenGraphImage/c-plus.webp?arraybuffer";
import cPlusUrl from "./components/OpenGraphImage/c-plus.webp?url";

let fetchedResources: Promise<Map<string, ByteBuf>>;
export async function prepareResources() {
  fetchedResources ??= Promise.resolve(new Map<string, ByteBuf>());
  fetchedResources.then((map) => {
    map.set(aPlusUrl, aPlusBuffer);
    map.set(aMinusUrl, aMinusBuffer);
    map.set(bPlusUrl, bPlusBuffer);
    map.set(bMinusUrl, bMinusBuffer);
    map.set(cPlusUrl, cPlusBuffer);
    map.set(cMinusUrl, cMinusBuffer);
  });

  return fetchedResources;
}
