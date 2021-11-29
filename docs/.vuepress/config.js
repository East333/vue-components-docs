module.exports = {
    base: process.env.NODE_ENV === 'development' ? '' : '/vue-components-docs/',
    title: "@qducc/vue-components",
    description: "描述",
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "/logo.svg"
            }
        ]
    ],
    themeConfig: {
        logo: "/logo.svg",
        lastUpdated: "最后更新时间",
        displayAllHeaders: true,
        sidebar: [
            'pages/install',
            'pages/wch-modal-form',
            'pages/wch-upload-single-image',
            // 'pages/wch-excel-import-auto'
        ],
        nav: [
            {
                text: "首页",
                link: "/"
            },
            {
                text: "组件地址",
                link: "https://www.npmjs.com/package/@qducc/vue-components"
            },
        ]
    },
    plugins: ['fulltext-search'],
}