const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.INTERNAL_API_PORT || 4000;

// Middleware to parse JSON bodies
app.use(express.json({ limit: '1000mb' }));

// Helper function to create a slug from a title
const createSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters
        .replace(/[\s_-]+/g, '-')    // Replace spaces and underscores with single dash
        .replace(/^-+|-+$/g, '');     // Remove dashes from start and end
};

// POST endpoint to create a new blog post
app.post('/api/posts', async (req, res) => {
    const { title, content } = req.body;
    console.log(content)

    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required.' });
    }

    const slug = createSlug(title);
    const filename = `${slug}.md`;
    const postPath = path.join(__dirname, 'hexo', 'source', '_posts', filename);

    const postContent = `${content}`;

    try {
        // Write the new post file
        fs.writeFileSync(postPath, postContent);
        console.log(`New post created: ${postPath}`);

        // Execute the save_and_upload.sh script
        exec('bash save_and_upload.sh', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                // Attempt to remove the partially created post file
                fs.unlink(postPath, (unlinkError) => {
                    if (unlinkError) console.error(`Error deleting post file after failed deployment: ${unlinkError}`);
                });
                return res.status(500).json({ error: 'Failed to deploy post.', details: stderr });
            }
            console.log(`Deployment script output: ${stdout}`);
            res.status(200).json({
                message: 'Post created and deployment process started successfully.',
                post_filename: filename
            });
        });

    } catch (writeError) {
        console.error(`Error writing post file: ${writeError}`);
        res.status(500).json({ error: 'Failed to create post file.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Internal API server listening on port ${port}`);
});
