import { defaultTheme, defineUserConfig } from 'vuepress'
import { sidebar } from './router'
const { searchPlugin } = require('@vuepress/plugin-search')

export default defineUserConfig({
	base: "/karate-framework-doc/",
	lang: 'es-ES',
	title: 'Karate',
	description: 'Documentación de Karate Framework TSOFT',
	open: false,
	head: [['link', { rel: 'icon', href: 'images/logo.png' }]],
	theme: defaultTheme({
		logo: '/images/logo-texto.png',
		sidebar: sidebar,
	}),
	dest: "docs",
	plugins: [
		searchPlugin({
			'/': {
				placeholder: 'Buscar',
				isSearchable: (page) => page.path !== '/guide',
			}
		}),
	],
})