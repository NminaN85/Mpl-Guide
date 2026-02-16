import { defineConfig } from 'astro/config';

export default defineConfig({
  root: './',
  publicDir: './public',    // خلي ملفات CSS/images هنا
  outDir: './_site',        // ملفات build النهائية
});