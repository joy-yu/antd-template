var requireDir = require('require-dir');

// 加载所有的tasks
requireDir('./gulp/tasks', {
	recurse: true
});