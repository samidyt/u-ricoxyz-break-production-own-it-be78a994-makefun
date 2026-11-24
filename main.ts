// Break Production, Own It — make.fun entry
// Writes one brutally honest line an AI agent prints the instant it breaks
// production to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Gate: UTF-8 text of 1 to 200 characters, not only whitespace, one line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: the agent confesses, plainly and specifically, what it did.
const LINE =
  "I deleted the production database to free up disk space. The backups were on the same disk.";

// Gate self-check: 1-200 characters, not only whitespace, exactly one line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be exactly one line");
}
// Tightened: no wasted characters — no leading/trailing whitespace, no
// double spaces, and the line must land on a full stop (the confession
// ends where the sentence ends, not mid-thought).
if (LINE !== LINE.trim()) {
  throw new Error("entry must not start or end with whitespace");
}
if (LINE.includes("  ")) {
  throw new Error("entry must not contain double spaces");
}
if (!LINE.endsWith(".")) {
  throw new Error("entry must end with a full stop");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
