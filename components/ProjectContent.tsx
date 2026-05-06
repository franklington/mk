import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';

interface ProjectContentProps {
  project: Project;
  prev: Project | null;
  next: Project | null;
}

export default function ProjectContent({ project, prev, next }: ProjectContentProps) {
  return (
    <div className="w-full px-6 py-10 md:px-10 md:py-12 lg:px-12">
      {/* Project Header */}
      <div className="mb-12 pt-16 md:pt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          {project.title} <span className="text-gray-400">{project.category}</span>
        </h1>
        
        {/* Metadata */}
        <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm mb-10">
          <div>
            <p className="text-gray-500 mb-1">Medium</p>
            <p className="font-medium">{project.category}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Year</p>
            <p className="font-medium">{project.year}</p>
          </div>
          {project.details?.role && (
            <div>
              <p className="text-gray-500 mb-1">Type</p>
              <p className="font-medium">{project.details.role}</p>
            </div>
          )}
          {project.details?.client && (
            <div>
              <p className="text-gray-500 mb-1">Client</p>
              <p className="font-medium">{project.details.client}</p>
            </div>
          )}
        </div>
      </div>

      {/* Project Description */}
      <div className="mb-14">
        <h2 className="text-sm font-medium uppercase tracking-wider mb-4">Project Description</h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl">
          {project.description}
        </p>
      </div>

      {/* Project Images */}
      <div className="space-y-6 mb-20">
        {project.images.map((image, index) => (
          <div
            key={index}
            className="relative w-full aspect-[16/10] bg-zinc-100 overflow-hidden"
          >
            <Image
              src={image}
              alt={`${project.title} - Image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1400px"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Credits Section */}
      {project.details && (
        <div className="mb-20 border-t border-gray-200 pt-10">
          <h3 className="text-sm font-medium uppercase tracking-wider mb-8">Credits</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            {project.details.client && (
              <div>
                <p className="text-gray-500 mb-1">Client</p>
                <p>{project.details.client}</p>
              </div>
            )}
            {project.details.role && (
              <div>
                <p className="text-gray-500 mb-1">Role</p>
                <p>{project.details.role}</p>
              </div>
            )}
            {project.details.deliverables && (
              <div className="md:col-span-2">
                <p className="text-gray-500 mb-1">Deliverables</p>
                <p>{project.details.deliverables.join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* More Works Section */}
      <div className="border-t border-gray-200 pt-10">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold">More works</h3>
          <Link
            href="/"
            className="text-sm font-medium hover:opacity-60 transition-opacity"
          >
            View All
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {prev && (
            <Link 
              href={`/projects/${prev.slug}`}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                <Image
                  src={prev.thumbnail}
                  alt={prev.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-lg font-bold">{prev.title}</h4>
                </div>
              </div>
            </Link>
          )}
          {next && (
            <Link 
              href={`/projects/${next.slug}`}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                <Image
                  src={next.thumbnail}
                  alt={next.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-lg font-bold">{next.title}</h4>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
