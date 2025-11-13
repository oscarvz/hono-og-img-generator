import type { ByteBuf } from "@takumi-rs/wasm";
import aMinusBuffer from "./components/OpenGraphImage/a-minus.png?arraybuffer";
import aMinusUrl from "./components/OpenGraphImage/a-minus.png?url";
import aPlusBuffer from "./components/OpenGraphImage/a-plus.png?arraybuffer";
import aPlusUrl from "./components/OpenGraphImage/a-plus.png?url";
import bMinusBuffer from "./components/OpenGraphImage/b-minus.png?arraybuffer";
import bMinusUrl from "./components/OpenGraphImage/b-minus.png?url";
import bPlusBuffer from "./components/OpenGraphImage/b-plus.png?arraybuffer";
import bPlusUrl from "./components/OpenGraphImage/b-plus.png?url";
import cMinusBuffer from "./components/OpenGraphImage/c-minus.png?arraybuffer";
import cMinusUrl from "./components/OpenGraphImage/c-minus.png?url";
import cPlusBuffer from "./components/OpenGraphImage/c-plus.png?arraybuffer";
import cPlusUrl from "./components/OpenGraphImage/c-plus.png?url";

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
