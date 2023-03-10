{
    test: /\.css$/;
    use: [
      isProductionBuild ? MiniCssExtractPlugin.loader : "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: "[name]_[local]_[hash:base64]",
          sourceMap: true,
          minimize: true
        }
      }
    ]
  }