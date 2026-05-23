import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    company: 'TechCorp Solutions',
    position: 'Python Automation Engineer & Data Analyst',
    period: '2022 - Present',
    description: 'Developing Python automation solutions, data analysis pipelines, and technical documentation for enterprise clients',
    achievements: [
      'Architected automated testing framework reducing manual testing time by 70%',
      'Built data analysis dashboards revealing key insights from complex datasets',
      'Published 30+ technical articles on Python automation and data analysis'
    ]
  },
  {
    company: 'Digital Innovations Inc',
    position: 'Full Stack Developer & Data Analyst',
    period: '2020 - 2022',
    description: 'Created Python scripts, data analysis tools, and documentation for internal and client projects',
    achievements: [
      'Developed ETL pipelines processing 100K+ records with statistical analysis',
      'Built web scraping solutions extracting and analyzing market data',
      'Wrote technical documentation and guides for internal teams and clients'
    ]
  },
  {
    company: 'StartUp Labs',
    position: 'Junior Software Developer',
    period: '2019 - 2020',
    description: 'Started career learning Python development, data analysis, and technical writing fundamentals',
    achievements: [
      'Built Python scripts for data processing and system automation',
      'Learned data analysis with Pandas and basic statistical concepts',
      'Contributed to technical documentation and knowledge base articles'
    ]
  }
]

const skills = [
  'Python',
  'Selenium',
  'BeautifulSoup',
  'Requests',
  'Pandas',
  'NumPy',
  'Matplotlib',
  'PostgreSQL',
  'MySQL',
  'JSON/XML',
  'REST APIs',
  'Web Scraping',
  'ETL',
  'Data Analysis',
  'Statistical Analysis',
  'Data Visualization',
  'Logging',
  'Unit Testing',
  'Git',
  'API Integration',
  'Technical Writing',
  'Documentation',
  'Shell Scripting'
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Experience &</span>
            <br />
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Multi-disciplinary expertise combining Python automation, data analysis, and technical communication
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Professional Journey</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="glass p-6 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {exp.position}
                    </h4>
                    <p className="text-blue-400 text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs text-foreground/60">
                    {exp.period}
                  </span>
                </div>
                <p className="text-foreground/70 text-sm mb-4">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-foreground/60 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">→</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 text-blue-300 hover:from-blue-500/30 hover:to-purple-500/30 transition cursor-pointer"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-lg text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  5+
                </div>
                <p className="text-sm text-foreground/70">
                  Years Experience
                </p>
              </div>
              <div className="glass p-6 rounded-lg text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  50+
                </div>
                <p className="text-sm text-foreground/70">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
