(function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", "#f5f5f5");
    }
  } else if (!savedTheme) {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (!prefersDark) {
      document.documentElement.setAttribute("data-theme", "light");

      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", "#f5f5f5");
      }
    }
  }
})();
