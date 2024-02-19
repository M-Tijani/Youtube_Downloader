const ytdl = require("yt-dl");

const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const outputFormat = "mp4";

const download = ytdl(videoUrl, { format: outputFormat });

download.pipe(fs.createWriteStream("video.mp4"));

console.log("Downloading video...");

download.on("finish", () => {
  console.log("Download complete!");
});

download.on("error", (err) => {
  console.error("Error downloading video:", err);
});
