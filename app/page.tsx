'use client';

import { projects } from '@/lib/projects';
import ProjectGrid from '@/components/ProjectGrid';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projectsRef = useRef(null);
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
  const featuredProject = projects[0]; // Feature the first project

  return (
    <div className="w-full">
      {/* Fullpage Hero Section - Featured Project */}
      <div className="relative h-screen flex items-end">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={featuredProject.thumbnail}
            alt={featuredProject.title}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-8 md:px-16 pb-16 md:pb-24 w-full">
          <div>
            <p className="text-white/80 text-sm md:text-base mb-4 tracking-wider uppercase">
              Featured Project — {featuredProject.year}
            </p>
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white"
              style={{ lineHeight: '0.9' }}
            >
              {featuredProject.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              {featuredProject.description}
            </p>
            <div>
              <Link 
                href={`/projects/${featuredProject.slug}`}
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-sm font-medium transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section - Below the fold with fade in */}
      <motion.div 
        ref={projectsRef}
        className="px-8 md:px-16 py-16"
        initial={{ opacity: 0, y: 60 }}
        animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="flex justify-between items-center mb-6"
          initial={{ opacity: 0 }}
          animate={isProjectsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl font-bold">Recent projects</h2>
          <button className="text-sm font-medium hover:opacity-70 transition-opacity">View All</button>
        </motion.div>
        <ProjectGrid projects={projects} />
      </motion.div>
    </div>
  );
}
