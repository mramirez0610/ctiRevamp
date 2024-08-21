export default {
  webpack: (cfg) => {
    // Existing loader for .md files
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });

    // New loader for .mdx files
    cfg.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        "@mdx-js/loader",
      ],
    });

    return cfg;
  },
};
