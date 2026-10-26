import { footer, kit, site } from '../content';
import { ArrowUp } from './Icons';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-log">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <p>
            {footer.copyright} · <span className="mono">{site.url.replace('https://', '')}</span>
          </p>
          <a href="#top" className="text-link footer-top">
            {footer.backToTop}
            <ArrowUp className="text-link-arrow" />
          </a>
        </div>
        <p className="footer-notice">{kit.notice}</p>
      </div>
    </footer>
  );
}
