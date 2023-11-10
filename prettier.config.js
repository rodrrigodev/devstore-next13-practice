module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        plugins: ['prettier-plugin-tailwindcss'],
      },
    },
  ],
}
