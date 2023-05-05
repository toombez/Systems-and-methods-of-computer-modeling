import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
    dts: true,
    bundle: true,
    format: ['esm', 'cjs'],
    target: 'node16',
    splitting: true,
    minify: !options.watch,
    clean: !options.watch,
}))
