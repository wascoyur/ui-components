import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

// https://vitejs.dev/config/

const projectRootDir = path.resolve(__dirname);
const srcFiles = fs.readdirSync(path.join(projectRootDir, "src"));

const srcFolders = srcFiles.filter((fileName: string) => {
  const fileStat = fs.statSync(path.join(projectRootDir, "src", fileName));
  return fileStat.isDirectory();
});
const alias = srcFolders.reduce((acc, folderName) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  acc[folderName] = path.join(projectRootDir, "src", folderName);
  return acc;
}, {});
export default defineConfig({
  resolve: {
    alias,
  },
  plugins: [react()],
});
