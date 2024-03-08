const { Command } = require('commander');
const {exec} = require('child_process');
const program = new Command();
program
  .name('Youtube Audio Extractor')
  .description('Extract Youtube video audio from url')
  .argument('<url>', 'Youtube video url')
  .option('-f, --format <format>', 'the audio format to convert to', 'wav')
  .action((url, options) => {
    const command = `./bin/yt-dlp ${url} -x --audio-format ${options.format} -o "storage/%(title)s.%(ext)s"`
    exec(command, (err, stdout, stderr) => {
      if (err) return console.log(stderr);
      let [,fileName] = stdout.match(/\[ExtractAudio\] Destination: (storage\/.*)/);
      exec(`open ./storage/`)
    });
  })
  .parse();
