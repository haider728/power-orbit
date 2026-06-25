/**
 * One-time / on-demand optimizer for key static assets.
 * Run: node scripts/optimize-static-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "public");

const jobs = [
  {
    input: "assets/images/resources/logo-1.gif",
    outputs: [
      { file: "assets/images/resources/logo-1.webp", width: 560 },
      { file: "assets/images/resources/logo-1.png", width: 560 },
    ],
  },
  {
    input: "assets/images/resources/footer-logo.gif",
    outputs: [{ file: "assets/images/resources/footer-logo.webp", width: 640 }],
  },
  {
    input: "images/eagl.png",
    outputs: [{ file: "images/eagl.webp", width: 1240 }],
  },
  {
    input: "images/smart sense.png",
    outputs: [{ file: "images/smart-sense.webp", width: 1240 }],
  },
  {
    input: "images/apps.png",
    outputs: [{ file: "images/apps.webp", width: 1240 }],
  },
  {
    input: "images/choose.png",
    outputs: [{ file: "images/choose.webp", width: 1340 }],
  },
];

async function run() {
  for (const job of jobs) {
    const inputPath = path.join(root, job.input);
    if (!fs.existsSync(inputPath)) {
      console.warn(`skip (missing): ${job.input}`);
      continue;
    }

    for (const out of job.outputs) {
      const outputPath = path.join(root, out.file);
      const pipeline = sharp(inputPath).resize({ width: out.width, withoutEnlargement: true });

      if (out.file.endsWith(".webp")) {
        await pipeline.webp({ quality: 82 }).toFile(outputPath);
      } else {
        await pipeline.png({ compressionLevel: 9 }).toFile(outputPath);
      }
      const stat = fs.statSync(outputPath);
      console.log(`wrote ${out.file} (${Math.round(stat.size / 1024)} KB)`);
    }
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
