import {getProjects} from '../../data/projects'
import ProjectList from '../../components/projects'

export const metadata = {
  title: 'Projects',
  description: 'Projects.',
  alternates: {
    canonical: 'https://mdxrsc-showcase.vercel.app/projects',
  },
}

export default async function Projects() {
  const projects = await getProjects()
  return <ProjectList showYears={true} projects={projects} seeMore={true} />
}
