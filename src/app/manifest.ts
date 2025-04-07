import type { MetadataRoute } from "next";
import icons from "./icons";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mnexia – Word Memory App",
    short_name: "Mnexia",
    description:
      "Capture, review, and recall words you discover in books, videos, or conversations.",
    start_url: "/",
    display: "standalone",
    theme_color: "#000000",
    background_color: "#000000",
    orientation: "portrait",
    lang: "en-US",
    icons,
    shortcuts: [
      {
        name: "My words",
        short_name: "Words",
        description: "List of words you've discovered",
        url: "/words",
      },
    ],
  };
}
