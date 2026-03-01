import { defineConfig } from 'unocss';

export default defineConfig({
  shortcuts: [
    {
      'btn': 'border-none uppercase text-center font-700 cursor-pointer',
      'nav-link': 'px-4 py-2 rounded hover:bg-lime-6 active:bg-lime-7 transition',
      'scale': 'hover:scale-110 will-change-transform'
    },
    [/^btn-(.*)$/, ([,c]) => `bg-${c}-500 text-${c}-100 hover:bg-${c}-600 py-2 px-4 transition`],
  ]
});