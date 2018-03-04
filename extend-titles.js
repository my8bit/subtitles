const serie = video.subtitles[0].src.split('/')[6];
const title = document.title;

const githubLatestSubtitles = 'https://raw.githubusercontent.com/my8bit/Subtitle-translations-for-series-on-NPO/master';
video.subtitles.push({
    "label": "English",
    "default": false,
    "language": "en",
    "src": `${githubLatestSubtitles}/${encodeURIComponent(title)}/en_US/${serie}.vtt`
});

