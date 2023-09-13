// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
    plugins: [
        // eslint-disable-next-line no-undef
        require('flowbite/plugin')
  ]
}

