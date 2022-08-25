import { defaultTheme, defineUserConfig } from 'vuepress'
import { sidebar } from './router'
const { searchPlugin } = require('@vuepress/plugin-search')

export default defineUserConfig({
	base: "/karate-framework-doc-niubiz/",
	lang: 'es-ES',
	title: 'Karate',
	description: 'Documentación de Karate Framework',
	open: false,
	head: [
		['link', { rel: 'icon', href: '/karate-framework-doc-niubiz/images/favicon.png' }],
		['link', { rel: "stylesheet", href: '/karate-framework-doc-niubiz/styles/index.css'}]
	],
	theme: defaultTheme({
		logo: '/images/logo-texto.png',
		sidebar: sidebar,
		logoDark: '/images/logo_white.png',
    	colorMode: 'light'
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