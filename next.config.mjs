/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
  domains: ['localhost'],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    config.plugins.push(new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }))
    
    return config;
  }
};

export default nextConfig;
