export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © {new Date().getFullYear()} Macallan Butler. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <a
                        href="mailto:macallan.butler@gmail.com"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        Email
                    </a>
                    <a
                        href="https://linkedin.com/in/macallanbutler"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/MacallanButler"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
