/*eslint-env es6*/
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  plugins: [
    new ESLintPlugin({
      extensions: ["ts", "html"],
      lintDirtyModulesOnly: false,
      emitWarning: true,
      emitError: true,
      failOnWarning: false,
      failOnError: true,
    }),
    new StylelintPlugin({
      extensions: ["css", "scss", "sass", "less"],
      emitWarning: true,
      emitError: true,
      failOnWarning: false,
      failOnError: true,
      allowEmptyInput: true,
    }),
  ],
};
