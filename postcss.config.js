module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 20 version', 'Explorer >= 8', 'Android >= 2'],
            cascade: false
        })
    ]
}