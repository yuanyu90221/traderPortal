const webpack = require('webpack')
module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'CoolBitX Technology',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Trader Portal' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
            { rel:'stylesheet', href: 'css/reset.css', type: 'text/css'},
            { rel:'stylesheet', href: 'css/style_pc.css', type: 'text/css', media:'only screen and (min-width:581px)'},
            { rel:'stylesheet', href: 'css/style_m.css', type: 'text/css', media:'only screen and (max-width:581px)'},
            { rel:'stylesheet', href: 'http://fonts.googleapis.com/css?family=Open+Sans:600,400,300', type:'text/css'}
        ]
    },
    css: [
        'bootstrap/dist/css/bootstrap.css',
        '@/scss/index.scss'
    ],
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#3B8070' },
    /**
     * plugins
     */
    plugins: ['~plugins/vuetify', '~plugins/boostrap.js'],
    build: {
        vendor: ['jquery', 'bootstrap'],
        plugins: [
            // set shortcut as global for bootstrap
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ]
    },
    render: {
        bundleRender: {
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type)
            }
        }
    }
}