# Phonetic

I cannot seem to memorize the [Phonetic Alphabet](https://en.wikipedia.org/wiki/NATO_phonetic_alphabet).
So I created this small webapp to help me read aloud long strings of alpha
numeric charaters while on the phone.

## Requirements

* Git
* npm
* Node.js

## Setup

```
git clone git@github.com:ipstatic/phonetic.git
cd phonetic
npm install
bower install
```

## Building

Running `gulp` in the cloned directory will automatically erase the build
directory and compile/minify CSS, minify JS and copy the index.html files to
the build directory.

## Deploying

Just copy the contents of the build directory to any web server or S3.
