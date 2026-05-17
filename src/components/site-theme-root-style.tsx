import { getSiteThemeRootCss } from "@/config/site-theme";

export function SiteThemeRootStyle() {
  return (
    <style
      precedence="default"
      href="site-theme-root"
      dangerouslySetInnerHTML={{
        __html: getSiteThemeRootCss(),
      }}
    />
  );
}
