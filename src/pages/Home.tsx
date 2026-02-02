import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function Home() {
    const featuredProjects = projects.slice(0, 3); // Just show first 3 as featured

    return (
        <div className="flex flex-col gap-20 py-12 md:py-24">
            {/* Hero Section */}
            <section className="container flex flex-col gap-6 text-center md:text-left">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Macallan Butler
                    <span className="block text-muted-foreground text-2xl sm:text-3xl md:text-4xl mt-2 font-medium">
                        Full-Stack Web Designer
                    </span>
                </h1>
                <p className="max-w-[42rem] mx-auto md:mx-0 text-muted-foreground sm:text-xl leading-relaxed">
                    Designing and building user-focused websites with a strong emphasis on UX clarity,
                    SEO, and emerging AEO best practices.
                </p>
                <div className="flex gap-4 justify-center md:justify-start mt-4">
                    <Link
                        to="/projects"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        View Projects
                    </Link>
                    <Link
                        to="/resume" // Assuming resume route or file exists, for now route
                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        Download Resume
                    </Link>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="container space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight">Selected Work</h2>
                    <Link to="/projects" className="text-sm font-medium text-muted-foreground hover:text-primary flex items-center gap-1">
                        View all <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {featuredProjects.map((project) => (
                        <article key={project.id} className="group relative flex flex-col space-y-3 rounded-lg border p-6 hover:bg-accent/50 transition-colors">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <p className="text-muted-foreground flex-1">
                                {project.shortDescription}
                            </p>
                            <div className="flex gap-2 text-xs text-muted-foreground font-mono uppercase tracking-wider">
                                {project.techStack.join(" · ")}
                            </div>
                            <Link
                                to={`/projects/${project.id}`}
                                className="inline-flex items-center text-sm font-medium text-primary pt-2 hover:underline"
                            >
                                View Case Study <ArrowRight className="ml-1 h-3 w-3" />
                                <span className="absolute inset-0"></span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section className="container space-y-8">
                <h2 className="text-2xl font-bold tracking-tight">Core Skills</h2>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-sm font-medium text-muted-foreground">
                    <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        UX / UI Design
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Full-Stack Development
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        SEO & AEO Optimization
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Accessibility & Performance
                    </li>
                </ul>
            </section>
        </div>
    );
}
