import copy from 'rollup-plugin-copy';
import json from 'rollup-plugin-json'
import { minify } from 'uglify-es';
import uglify from 'rollup-plugin-uglify';

export default {
  name: 'videojsIma',
  input: 'src/ima-plugin.js',
  output: {
    file: 'dist/videojs.ima.min.js',
    format: 'umd'
  },
  external: ['video.js', 'videojs-contrib-ads'],
  globals: {
    'video.js': 'videojs'
  },
  plugins: [
    json(),
    uglify({}, minify),
    copy({
      "src/css/videojs.ima.css": "dist/videojs.ima.css"
    })
  ]
};
