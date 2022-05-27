const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ex\..+/i,
      use: 'raw-loader',
    });

    return config;
  }
});
