module.exports = {
    staticFileGlobs: [
        'dist/**.html',
        'dist/**.js',
        'dist/**.css',
        'dist/**.ico',
        'dist/assets/images/*',
        'dist/assets/icons/*'
    ],
    root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [/^(?!\/__).*/],
    runtimeCaching: [{
        urlPattern: /node-hnapi\.herokuapp\.com/,
        handler: 'networkFirst'
    }]
};