import express from "express";
import path from "path";
import { title } from "process";
import { fileURLToPath } from "url";
import youtubed1 from "yt-dlp-exec";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// get a video info
app.post("/video-info", async (req, res) => {
    const {url} = req.body;

    if(!url) {
        return res.status(400).json({ error: "URL required "});
    }

    try{
        const info = await youtubed1(url, {
            dumpSingleJson: true,
            noWarnings: true,
            noCallHome: true,
        });

        // Extract formate
        const formate = info.formats
        .filter(f => f.ext === "mp4" && f.height)
        .map(f => ({
            quality: `${f.height}p`,
            url: f.url
        }));

        res.json({
            title: info.title,
            thumbnail: info.thumbnail,
            formats
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch video info "});
    }
});

app.listen(POST, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})