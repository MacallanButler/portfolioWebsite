import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Header() {
    const location = useLocation();

    const navLinks = [
        { href: "/projects", label: "Projects" },
        { href: "/about", label: "About" },
        { href: "/resume", label: "Resume" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link to="/" className="text-xl font-bold tracking-tight hover:text-primary/80 transition-colors">
                    Macallan Butler
                </Link>

                <nav className="flex items-center gap-6">
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    to={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary",
                                        location.pathname === link.href
                                            ? "text-foreground"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* Theme toggle can go here later */}
                    <button className="text-xl" aria-label="Toggle theme">
                        🌙
                    </button>
                </nav>
            </div>
        </header>
    );
}
