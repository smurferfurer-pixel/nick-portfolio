export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Nick Nelson. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:stoninonicknelson@gmail.com"
            className="transition-colors hover:text-accent"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/nick-stonino"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/smurferfurer-pixel"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
