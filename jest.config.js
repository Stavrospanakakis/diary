module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: { '\\.ts$': ['ts-jest'] },
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
		'.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mock.js',
	},
	testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
	transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
	globals: {
		'ts-jest': {
			tsConfig: {
				// allow js in typescript
				allowJs: true,
			},
		},
	},
	testURL: 'http://localhost',
	setupFiles: ['<rootDir>/loadershim.js'],
}
