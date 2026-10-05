import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    button: './src/Button.tsx',
    menu: './src/BoardMenu.tsx',
    'load-popover': './src/loadPopover.ts',
  },
  platform: 'neutral',
  fixedExtension: false,
  dts: false,
})
