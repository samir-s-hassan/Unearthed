import { defineConfig } from "vite";

export default defineConfig({
  // Configuration for building the project
  build: {
    // Output directory for the build files
    outDir: "../server/public", // Places build files in the public folder of the server
    // Whether to empty the output directory before building
    emptyOutDir: true, // Ensures the output directory is cleared before each build
  },
  // Configuration for the development server
  server: {
    // Proxy configuration to redirect API calls during development
    proxy: {
      // Redirect requests starting with '/gifts' to the backend server
      "/gifts": {
        target: "http://localhost:3001", // The backend server where API requests are forwarded
      },
    },
  },
});
