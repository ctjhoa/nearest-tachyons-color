var tachyonsColors = {
	'black': '#000',
	'near-black': '#111',
	'dark-gray': '#333',
	'mid-gray': '#555',
	'gray': '#777',
	'silver': '#999',
	'light-silver': '#aaa',
	'moon-gray': '#ccc',
	'light-gray': '#eee',
	'near-white': '#f4f4f4',
	'white': '#fff',
	'dark-red': '#e7040f',
	'red': '#ff4136',
	'light-red': '#ff725c',
	'orange': '#ff6300',
	'gold': '#ffb700',
	'yellow': '#ffd700',
	'light-yellow': '#fbf1a9',
	'purple': '#5e2ca5',
	'light-purple': '#a463f2',
	'dark-pink': '#d5008f',
	'hot-pink': '#ff41b4',
	'pink': '#ff80cc',
	'light-pink': '#ffa3d7',
	'dark-green': '#137752',
	'green': '#19a974',
	'light-green': '#9eebcf',
	'navy': '#001b44',
	'dark-blue': '#00449e',
	'blue': '#357edd',
	'light-blue': '#96ccff',
	'lightest-blue': '#cdecff',
	'washed-blue': '#f6fffe',
	'washed-green': '#e8fdf5',
	'washed-yellow': '#fffceb',
	'washed-red': '#ffdfdf'
};

var nearestColor = require('nearest-color').from(tachyonsColors);

process.argv.splice(process.execArgv.length + 2).forEach(function (val) {
	if (!val.startsWith('#')) { 
		throw 'Bad arguments';
	}

	console.log('raw: ' + val);
	console.log('tachyons: ', nearestColor(val));
	console.log('\n')
});

