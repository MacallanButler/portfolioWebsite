import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

export function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="container py-12 flex flex-col items-center justify-center min-h-[50vh] gap-4">
                <h1 className="text-2xl font-bold">Project Not Found</h1>
                <p className="text-muted-foreground">The project you are looking for does not exist.</p>
                <Link to="/projects" className="text-primary hover:underline">
                    Return to Projects
                </Link>
            </div>
        );
    }

    return (
        <article className="container py-12 md:py-24 space-y-16">
            {/* Header */}
            <div className="max-w-3xl space-y-6">
                <Link to="/projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                </Link>

                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {project.shortDescription}
                    </p>
                </div>

                <div className="flex gap-2 text-sm font-mono uppercase tracking-wider text-muted-foreground pt-4">
                    {project.techStack.join(" · ")}
                </div>
            </div>

            {/* Content Sections */}
            <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
                <div className="space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Overview</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.overview}
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">The Problem</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.problem}
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Technical Implementation</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.technicalImplementation}
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Outcome & Next Steps</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.outcome}
                        </p>
                    </section>
                </div>

                <div className="space-y-12 h-fit md:sticky md:top-24">
                    {/* Sidebar Info */}
                    <div className="rounded-lg border bg-card text-card-foreground p-6 space-y-8">
                        <div>
                            <h3 className="font-semibold mb-2">My Role</h3>
                            <ul className="text-sm text-muted-foreground space-y-1">
                                {project.role.map(role => <li key={role}>{role}</li>)}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Design Decisions</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {project.designDecisions}
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">SEO & AEO</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {project.seoConsiderations}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
