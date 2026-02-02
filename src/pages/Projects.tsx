import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function Projects() {
    return (
        <div className="container py-12 flex flex-col gap-12">
            <section>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Projects</h1>
                <p className="text-muted-foreground max-w-2xl text-lg">
                    A selection of independent projects focused on UX clarity, technical execution,
                    and search visibility.
                </p>
            </section>

            <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
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
            </section>
        </div>
    );
}
