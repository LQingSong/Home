import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Secret Garden Of QingSong",
  description: "Code World",
  base: "/Home/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Documents", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Fronted",
        items: [],
      },
      {
        text: "Backend",
        items: [],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/LQingSong" }],
  },
});
