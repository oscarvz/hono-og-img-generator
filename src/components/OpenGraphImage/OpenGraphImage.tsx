import aMinus from "./a-minus.png?url";
import aPlus from "./a-plus.png?url";
import { FpLogo } from "./FpLogo";

type OpenGraphImageProps = {
  serverName: string;
  createdAt: Date;
  score: "A+" | "A-" | "B+" | "B-" | "C+" | "C-";
};

export function OpenGraphImage({
  serverName,
  createdAt,
  score,
}: OpenGraphImageProps) {
  const createdAtString = createdAt.toLocaleDateString();

  // We have to do some funky positioning here to keep things consistent
  return (
    <div tw="bg-black w-full h-full relative">
      <img
        src={score === "A+" ? aPlus : aMinus}
        alt={score}
        tw="absolute inset-0"
        // mx-auto utility doesn't work here, so we have to use inline style
        style={{ margin: "0 auto" }}
      />

      <div tw="absolute -top-64 left-11">
        <FpLogo width={12} />
      </div>

      <h1 tw="text-5xl font-medium text-white font-mono leading-none absolute left-11 top-16">
        Rating your chomps
      </h1>

      <h2 tw="text-4xl font-medium text-white font-mono leading-none absolute left-11 bottom-12">
        {serverName}
      </h2>

      <div tw="absolute bottom-6 left-11">
        <h3 tw="text-xl font-normal leading-none text-white/60 m-0 p-0">
          Created on {createdAtString}
        </h3>
      </div>

      <span tw="text-4xl font-normal text-white/60 font-mono leading-none absolute bottom-10 right-11">
        placedog.net
      </span>
    </div>
  );
}
