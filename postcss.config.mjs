/*const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;*/

// postcss.config.mjs
const postcssConfig = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default postcssConfig;