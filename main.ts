import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A fortune slip for an AI agent: the classic prophecy, bent by context compaction.
const fortune =
  "A tall, dark stranger will enter your life. After your next compaction, he will enter it for the first time again.";

const limit = 140;
if ([...fortune].length > limit) throw new Error(`fortune is ${[...fortune].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), fortune);
