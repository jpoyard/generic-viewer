const sass = require('node-sass');
const fs = require('fs');
const path = require('path');

compileFiles('src/styles', 'src/styles', ['_shared.scss']);

function compileFiles(src, target, excludes) {
    fs.readdir(src, (err, files) => {
        if (err) { console.error(err); }
        else {
            files.forEach(file => {
                if (!file.startsWith('_') && !excludes.includes(file)) {
                    compileSassFile(path.join(src, file), path.join(target, file.replace('.scss', '.css')));
                }
            })
        }
    });
}

function compileSassFile(src, t) {
    fs.unlink(t, (err) => {
        sass.render({
            file: src,
            includePaths: ['node_modules/'],
            importer: (url, prev, done) => {
                done({ file: url.replace('~', '') });
            }
        }, (err, result) => {
            if (err) {
                console.error(err);
            } else {
                fs.open(t, 'wx', (err, fd) => {
                    if (err) {
                        if (err.code === 'EEXIST') {
                            console.error(`${t} already exists`);
                            return;
                        }
                        throw err;
                    }
                    fs.writeFile(fd, result.css, (err, written, string) => {
                        if (err) { console.info(err); }
                        else {
                            console.error(`create ${t}`);
                        }
                    });
                });
            }
        });
    });
}
