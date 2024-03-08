### Dependencies
ffmpeg is required in order to extract audio.
It can be installed with homebrew

```Bash
brew update
brew upgrade
brew install ffmpeg
```
### Installation
```Bash
# download repository
git clone https://github.com/joshua-williams/yt-audio.git

# change to application directory
cd yt-audio

# install globally
npm install -g
```

### Extract Audio From Youtube Video 
To extract the audio from a youtube video url run `yt-audio` command.

Example:

`yt-audio "https://www.youtube.com/watch?v=X3odW4nqfY4"`. 

The default format is wave but you can also pass the following supported formats

`yt-audio "https://www.youtube.com/watch?v=X3odW4nqfY4" --format mp3`. 

### Audio Formats 
* aac
* alac
* flac
* m4a
* mp3
* opus
* vorbis 
* wav
