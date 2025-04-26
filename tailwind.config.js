module.exports = {
  content: ["./*.html", "./**/*.{js,ts,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        'tic-tac-toe': "linear-gradient(319deg, rgba(15, 27, 47, 1), rgba(159, 162, 173, 1) 100%), url('../images/pattern-tic-tac-toe.svg')",
      },
    },
  },
  plugins: [

  ],
}