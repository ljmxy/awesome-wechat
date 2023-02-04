module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@modules': './src/modules',
          '@constants': './src/constants',
          '@interfaces': './src/interfaces',
          '@theme': './src/theme',
          '@redux': './src/redux',
          '@src': './src',
        },
      },
    ],
  ],
};
