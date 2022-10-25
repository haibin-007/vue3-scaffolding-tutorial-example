module.exports = {
  presets: [
    [
      "@babel/preset-env", // ES
      {
        targets: {
          browsers: ["> 0.25%", "not dead"],
        },
      },
    ],
    // [
    //   "@babel/preset-typescript", // TS
    // ],
  ],
};
