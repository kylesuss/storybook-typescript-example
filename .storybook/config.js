import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.ts(x)
configure(require.context("../src", true, /\.stories\.ts(x)$/), module);
