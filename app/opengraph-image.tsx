import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Ulashilganda ko'rinadigan rasm: faqat logo, shuning uchun uchala til uchun
// bir xil. Logo fayli almashganda bu rasm ham o'zi yangilanadi.
// Sahifalarga app/[lang]/layout.tsx dagi metadata orqali ulanadi.
export const alt = "Daqiq";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO_WIDTH = 520;
const LOGO_ASPECT_RATIO = 373 / 162;

export default async function OpenGraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/brand/daqiqdark.png"),
    "base64",
  );

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#140c22",
        backgroundImage:
          "radial-gradient(circle at 78% 12%, rgba(124, 58, 237, 0.55), transparent 55%), radial-gradient(circle at 6% 96%, rgba(109, 40, 217, 0.4), transparent 50%)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse faqat <img> ni tushunadi */}
      <img
        src={`data:image/png;base64,${logo}`}
        alt=""
        width={LOGO_WIDTH}
        height={Math.round(LOGO_WIDTH / LOGO_ASPECT_RATIO)}
      />
    </div>,
    size,
  );
}
