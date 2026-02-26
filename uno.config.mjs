import { defineConfig } from 'unocss';

export default defineConfig({
  shortcuts: [
    {
      'btn': 'border-none uppercase text-center font-700 cursor-pointer',
      'scale': 'hover:scale-110 will-change-transform'
    },
    [/^btn-(.*)$/, ([,c]) => `bg-${c}-500 text-${c}-100 hover:bg-${c}-600 py-2 px-4 transition`],
  ]
});