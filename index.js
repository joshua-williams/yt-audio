#!/usr/bin/env node
const path = require('path');
const { Command } = require('commander');
const {exec} = require('child_process');
const program = new Command();
program
  .name('Youtube Audio Extractor')
  .description('Extract Youtube video audio from url')
  .argument('<url>', 'Youtube video url')
  .option('-f, --format <format>', 'the audio format to convert to', 'wav')
  .action((url, options) => {
    const audioPath = path.join(__dirname, 'yt-audio')
    const binPath = path.join(__dirname, 'bin/yt-dlp')
    const command = `${binPath} ${url} -x --audio-format ${options.format} -o "${audioPath}/%(title)s.%(ext)s"`
    exec(command, (err, stdout, stderr) => {
      if (err) return console.log(stderr);
      console.log(stdout)
      const [, fileName] = stdout.match(/\[ExtractAudio\] Destination: (.*)/);
      exec(`open ${path.join(__dirname, 'yt-audio')}`)
    });
  })
  .parse();
