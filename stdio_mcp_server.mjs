#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "typescriptjobs",
  boardId: "typescriptjobs-official",
  domain: "typescriptjobs.net",
  npmName: "zc-typescriptjobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
