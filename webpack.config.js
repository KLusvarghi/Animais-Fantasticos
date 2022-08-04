const path = require("path"); // importando um pacote para caminhos

module.exports = {
  entry: "./js/script.js", // arquivo de entrada
  output: {
    // arquivo de saido
    path: path.resolve(__dirname, "./"), // caminho absoluto até esta pasta
    // sendo esse metodo "resolve", agrupando diversos caminhos em um nome só
    filename: "main.js", // nome da pasta
  },
  module: {
    rules: [
      // lista com diferentes regras, e cada regra é um objeto diferente
      {
        test: /\.js$/, // para quais arquivos essa regras serã otestadas, usando uma expressão regular, para arquivos com extenção js "/\.js$"
        exclude: /node_modules/, // excluindo o que estiver dentro de "node_modules"
        use: {
          // aqui diz o que ele vai usar
          loader: "babel-loader",
          options: {
            // opções do babel-loader
            presets: ["@babel/preset-env"], // que foi o que instalamos
            plugins: ["@babel/plugin-transform-runtime"], // o plugin que instalamos tbm
          },
        },
      },
    ],
  },
};
