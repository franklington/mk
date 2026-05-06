import { notFound } from 'next/navigation';
import { getProjectBySlug, getAdjacentProjects, projects } from '@/lib/projects';
import ProjectContent from '@/components/ProjectContent';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return <ProjectContent project={project} prev={prev} next={next} />;
}
