# Internal API Design for Blog Post Creation

## Objective
To expose an internal HTTP API that allows for the programmatic creation of new blog posts, triggering the existing Hexo build and deployment process, without exposing this functionality on the public-facing blog server.

## Architectural Decision
A separate, internal-only Express.js server will be created to handle blog post creation requests. This server will run on a dedicated port and will not be part of the public production deployment.

## API Endpoint

*   **URL:** `POST /api/posts`
*   **Description:** Creates a new blog post and triggers the deployment process.
*   **Access:** This endpoint will only be accessible from `localhost` or an internal network, depending on how the server is deployed and secured at the operating system/network level (e.g., firewall rules).

## Request

*   **Headers:** No specific authentication headers (like `X-API-Key`) are required for this internal API, as network-level security (e.g., binding to `localhost`, firewall rules) is assumed to protect it.
*   **Body:** A JSON object containing the title and content of the new post.
    ```json
    {
      "title": "My New Post Title",
      "content": "This is the content of my new blog post in Markdown."
    }
    ```

## Responses

*   **Success (`200 OK`):**
    ```json
    {
      "message": "Post created and deployment process started successfully.",
      "post_filename": "My-New-Post-Title.md"
    }
    ```
*   **Errors:**
    *   `400 Bad Request`: If the `title` or `content` is missing from the request body.
    *   `500 Internal Server Error`: If there is an error during file creation, script execution, or any other internal server issue.

## Implementation Plan

1.  **Create `internal-api.js`:** A new file will be created in the project root (`./internal-api.js`). This file will set up a new Express.js application.
2.  **Define `POST /api/posts` Endpoint:** Inside `internal-api.js`, an Express route will be defined for `POST /api/posts`.
    *   It will use `express.json()` middleware to parse incoming JSON request bodies.
    *   It will validate the presence of `title` and `content` in the request body.
    *   It will construct a filename from the `title` (e.g., converting "My New Post Title" to "My-New-Post-Title.md").
    *   It will write the provided `content` to a new Markdown file within the `hexo/source/_posts/` directory.
    *   It will execute the `save_and_upload.sh` script using Node.js's `child_process.exec`. This script handles the Git commit, Hexo generation, and remote deployment.
    *   It will return appropriate success or error responses.
3.  **Update `package.json`:** A new script will be added to `package.json` to easily start this internal API server:
    ```json
    "scripts": {
      "internal-api": "node internal-api.js",
      // ... existing scripts
    }
    ```
4.  **Running the Server:** The server will be started manually by running `npm run internal-api` when needed. It will listen on a specified port (e.g., `4000`).