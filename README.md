# Introduction to Trigonometry - Intelligent Textbook

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![MkDocs](https://img.shields.io/badge/docs-mkdocs-blue)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/theme-material-blue)](https://squidfunk.github.io/mkdocs-material/)

An interactive, AI-assisted Trigonometry textbook designed for junior high and high school students (Grades 8-10). This intelligent textbook features a comprehensive learning graph with interconnected concepts, interactive MicroSims, and structured chapter content aligned with Common Core State Standards.

**Live Site:** [https://iowerx.github.io/intro-to-trig/](https://iowerx.github.io/intro-to-trig/)

## Features

- **📚 10 Comprehensive Chapters** - From definitions of angles to types of triangles, to trig functions
- **🕸️ Learning Graph** - 200 concepts with 248 dependency relationships visualized as an interactive graph
- **🎮 Interactive MicroSims** - Educational simulations using p5.js and vis-network
- **🎯 Standards-Aligned** - Aligned with Common Core State Standards for Mathematics (CCSSM)
- **📊 Concept Taxonomy** - Organized into 12 pedagogical categories
- **📖 Glossary** - Comprehensive definitions following ISO 11179 metadata standards
- **✨ Mathematical Rendering** - Beautiful equation rendering with MathJax
- **🔍 Full-Text Search** - Built-in search functionality
- **📱 Responsive Design** - Mobile-friendly Material Design theme

## Table of Contents

- [Getting Started](#getting-started)
- [Course Structure](#course-structure)
- [Learning Graph](#learning-graph)
- [Development](#development)
- [Building the Site](#building-the-site)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## Getting Started

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/iowerx/intro-to-trig.git
   cd algebra-1
   ```

2. Install MkDocs and dependencies:
   ```bash
   pip install mkdocs
   pip install mkdocs-material
   pip install mkdocs-material[imaging]
   ```

3. Serve the site locally:
   ```bash
   mkdocs serve
   ```

4. Open your browser to `http://127.0.0.1:8000/intro-to-trig`

## Course Structure

The textbook is organized into 13 chapters covering 200 algebra concepts:

1. **Foundations of Geometry** - 
2. **The Pythogrean Theorem** - 
3. **Trigonometric Ratios** - 
4. **Special Right Triangles** - 
5. **Unit Circle & Functions** - 
6. **Trigonometric Identities** - 
7. **Solving Triangles & Angles** - 
8. **Advanced Triangle Solutions** - 
9. **Real World Applications** - 
10. **Tools & Integration** - 

## Learning Graph

The course is built around a learning graph that:

- Contains **200 concepts** with precise definitions
- Maps **248 dependency relationships** between concepts
- Organizes concepts into **12 taxonomy categories**
- Ensures proper sequencing (no concept appears before its prerequisites)
- Provides interactive visualization tools

### Taxonomy Categories

- Foundation Concepts (FOUND)
- Properties and Operations (PROP)
- Number Systems (NUMS)
- Exponents and Radicals (EXP)
- Polynomials (POLY)
- Factoring (FACT)
- Linear Equations and Inequalities (LIN)
- Functions and Relations (FUNC)
- Graphing and Coordinate Geometry (GRAPH)
- Systems (SYS)
- Quadratic and Exponential Functions (QUAD)
- Data Analysis and Applications (DATA)

## Development

### Local Development Server

Run the development server with live reload:

```bash
mkdocs serve
```

The site will automatically rebuild when you make changes to the source files.

### Adding New Content

1. **New Chapters**: Add content to `docs/chapters/[chapter-name]/index.md`
2. **MicroSims**: Create new simulations in `docs/sims/[sim-name]/`
3. **Glossary Terms**: Add definitions to `docs/glossary.md`
4. **Learning Graph**: Modify `docs/learning-graph/learning-graph.json`

### MicroSim Development

MicroSims are interactive educational simulations. Each MicroSim should include:

- `index.md` - Documentation and iframe embed
- `main.html` - Standalone simulation
- `metadata.json` - Dublin Core metadata
- Source code (JavaScript/p5.js)

## Building the Site

### Build Static Site

Generate the static HTML site:

```bash
mkdocs build
```

The built site will be in the `site/` directory.

### Deploy to GitHub Pages

Deploy the site to GitHub Pages:

```bash
mkdocs gh-deploy
```

This command builds the site and pushes it to the `gh-pages` branch.

## Project Structure

```
# TODO - corrections.
intro-to-it/
├── docs/                          # Source content
│   ├── chapters/                  # 13 chapter directories
│   │   ├── 01-foundations-of-algebra/
│   │   ├── 02-number-systems-and-properties/
│   │   └── ...
│   ├── learning-graph/            # Learning graph files
│   │   ├── learning-graph.json    # 200 concepts with dependencies
│   │   ├── concept-list.md
│   │   ├── concept-taxonomy.md
│   │   └── quality-metrics.md
│   ├── sims/                      # Interactive MicroSims
│   │   ├── graph-viewer/
│   │   ├── algebra-concept-viewer/
│   │   └── ...
│   ├── course-description.md      # Course overview
│   ├── glossary.md               # Concept definitions
│   ├── references.md             # Academic references
│   └── index.md                  # Homepage
├── site/                         # Generated static site (git-ignored)
├── logs/                         # Generation session logs
├── mkdocs.yml                    # MkDocs configuration
├── README.md                     # This file
└── LICENSE                       # CC BY-NC-SA 4.0 license

```

## Technologies Used

### Core Framework

- **[MkDocs](https://www.mkdocs.org/)** (1.5+) - Static site generator for project documentation
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** - Modern, responsive theme with advanced features
- **[Python](https://www.python.org/)** (3.8+) - Programming language for MkDocs

### JavaScript Libraries

- **[p5.js](https://p5js.org/)** - Creative coding library for interactive simulations
- **[vis-network](https://visjs.github.io/vis-network/docs/network/)** - Network visualization library for learning graphs
- **[Chart.js](https://www.chartjs.org/)** - Charting library for data visualizations
- **[MathJax](https://www.mathjax.org/)** (v3) - Beautiful mathematical equation rendering

### MkDocs Extensions

- **[PyMdown Extensions](https://facelessuser.github.io/pymdown-extensions/)** - Markdown extensions for enhanced formatting
  - `pymdownx.arithmatex` - LaTeX math support
  - `pymdownx.highlight` - Syntax highlighting with line numbers
  - `pymdownx.superfences` - Advanced code fence support
  - `pymdownx.details` - Collapsible content blocks
- **[Python-Markdown](https://python-markdown.github.io/)** - Core markdown parser
  - `admonition` - Styled note/warning boxes
  - `attr_list` - Attribute lists for markdown elements
  - `md_in_html` - Markdown inside HTML blocks

### Development Tools

- **[Git](https://git-scm.com/)** - Version control
- **[GitHub Pages](https://pages.github.com/)** - Static site hosting
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD (if configured)

### Content Generation

- **[Claude Code](https://claude.com/claude-code)** - AI-assisted content generation and skill automation
- Custom Skills:
  - `learning-graph-generator` - Generates concept graphs from course descriptions
  - `book-chapter-generator` - Creates chapter structure with dependency validation
  - `glossary-generator` - Generates ISO 11179 compliant definitions
  - `quiz-generator` - Creates Bloom's Taxonomy aligned assessments

## Contributing

Contributions are welcome! This project is designed as an educational resource.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test locally with `mkdocs serve`
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Contribution Guidelines

- Follow the existing content structure and formatting
- Ensure all mathematical notation uses MathJax LaTeX syntax
- Test your changes locally before submitting
- Update documentation as needed
- Respect the CC BY-NC-SA 4.0 license terms

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

### You are free to:

- **Share** - Copy and redistribute the material in any medium or format
- **Adapt** - Remix, transform, and build upon the material

### Under the following terms:

- **Attribution** - You must give appropriate credit, provide a link to the license, and indicate if changes were made
- **NonCommercial** - You may not use the material for commercial purposes
- **ShareAlike** - If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original

## Acknowledgments

This project is made possible by the following open-source software and communities:

### Documentation Platform

- **MkDocs Team** - For creating an excellent static site generator
- **Martin Donath** - For the beautiful Material for MkDocs theme
- **Python Software Foundation** - For the Python programming language

### JavaScript Libraries

- **p5.js Community** - For making creative coding accessible and fun
- **vis.js Team** - For powerful network visualization tools
- **Chart.js Contributors** - For flexible charting capabilities
- **MathJax Consortium** - For beautiful mathematical typesetting on the web

### Standards and Educational Resources

- **Common Core State Standards Initiative** - For mathematics education standards
- **National Council of Teachers of Mathematics (NCTM)** - For educational guidance
- **ISO/IEC 11179** - For metadata registry standards used in glossary definitions

### AI and Automation

- **Anthropic** - For Claude Code and AI-assisted content generation capabilities
- **Open Source Community** - For countless tools and libraries that make this project possible

### Inspiration and Resources

- **Khan Academy** - For pioneering free, world-class education
- **OpenStax** - For open educational resources
- **Mathematics Educators Worldwide** - For sharing knowledge and best practices
- **Dan McCreary** - For Inteligent Textbooks Claude Skills

### Special Thanks

- All contributors who help improve this educational resource
- Educators who provide feedback and suggestions
- Students who learn from and help refine this material

## Contact

**Author:** Hank R.

**Project Repository:** [https://github.com/iowerx/intro-to-trig](https://github.com/iowerx/intro-to-trig)

**Website:** [https://iowerx.github.io/intro-to-trig/](https://iowerx.github.io/intro-to-trig/)

For questions, suggestions, or issues, please:
- Open an issue on GitHub
- Visit the TODO

---

**Built with ❤️ for mathematics education**

*Last updated: November 2025*
