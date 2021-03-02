module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.svg/,
        use: [ '@svgr/webpack', 'url-loader']
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [ 'url-loader' ]
      }
    );
    return config;
  }
}
