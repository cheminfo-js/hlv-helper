export default {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    file: 'lib/index.js',
  },
  external: [
    'ml-matrix',
    'ml-confusion-matrix',
    'ml-array-mean',
    'ml-cross-validation',
  ],
};
