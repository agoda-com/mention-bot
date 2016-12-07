var octo = require('@octopusdeploy/gulp-octo');
var gulp = require("gulp");

gulp.task('publish', function () { // ['build']
	var apiKey = process.argv[4];
	var host = process.argv[6];
	console.log(host);
	console.log(apiKey);
  // return gulp.src(['**/*', '!gulpfile.js'])
      // .pipe(octo.pack())
      // .pipe(octo.push({apiKey: '%OctopusAPIKey%', host: '%OctopusHost%'}));
  return gulp.src(['**/*', '!gulpfile.js'])
      .pipe(octo.pack())
      .pipe(octo.push({apiKey: apiKey, host: host}));
});