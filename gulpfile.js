var octo = require('@octopusdeploy/gulp-octo');
var gulp = require("gulp");

gulp.task('publish', function () { // ['build']
	var apiKey = process.argv[7];
	var host = process.argv[9];

	for(var i = 0;i<process.argv.length;i++){
		console.log(i+": "+process.argv[i]);
	}
  // return gulp.src(['**/*', '!gulpfile.js'])
      // .pipe(octo.pack())
      // .pipe(octo.push({apiKey: '%OctopusAPIKey%', host: '%OctopusHost%'}));
  return gulp.src(['**/*', '!gulpfile.js'])
      .pipe(octo.pack())
      .pipe(octo.push({apiKey: apiKey, host: host}));
});