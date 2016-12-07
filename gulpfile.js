var octo = require('@octopusdeploy/gulp-octo');
var gulp = require("gulp");

gulp.task('publish', function () { // ['build']
  return gulp.src(['**/*', '!gulpfile.js'])
      .pipe(octo.pack())
      .pipe(octo.push({apiKey: '%OctopusAPIKey%', host: '%OctopusHost%'}));
});