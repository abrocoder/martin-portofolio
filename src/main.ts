import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav id="navbar">
    <div class="nav-container">
      <div class="nav-logo">MKT</div>
      <div class="nav-links">
        <a href="#hero" class="nav-link">Home</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#skills" class="nav-link">Skills</a>
        <a href="#experience" class="nav-link">Experience</a>
        <a href="#education" class="nav-link">Education</a>
      </div>
    </div>
  </nav>

  <header id="app-header">
    <section id="hero" class="snap-start hero-compact">
      <div class="hero-content-wrapper">
        <div class="hero-text-center">
          <h1 class="hero-title">
            <span id="typing-text"></span>
            <span class="cursor" style="color: rgb(104, 178, 160);">|</span>
          </h1>
          <h2 class="hero-subtitle">
            AI Fellow @ Handshake | Software & AI/ML Engineer | Ex-IBM | LLM Evals | Distributed Systems | Bridging Research & Production
          </h2>
          <p class="hero-location">South Carolina</p>
          <div class="hero-buttons">
            <a href="#about"><button class="heroButton">About</button></a>
            <a href="#experience"><button class="heroButton">Experience</button></a>
            <a href="#skills"><button class="heroButton">Skills</button></a>
            <a href="#projects"><button class="heroButton">Projects</button></a>
          </div>
        </div>
      </div>
    </section>
  </header>

  <main>
    <section id="projects" class="full-width-section">
      <div class="container">
        <h2 class="section-title">Selected Projects & Publications</h2>
      </div>

      <div class="project-showcase">
        <div class="project-feature">
          <div class="project-feature-img">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80" alt="Interactive data visualization dashboard">
          </div>
          <div class="project-feature-content">
            <div class="container">
              <h3>Interactive Reasoning Visualizer</h3>
              <p class="project-meta">Ai2 Research Project | 2025</p>
              <p>A D3.js platform visualizing confidence evolution across reasoning chains, enhancing interpretability in complex inference tasks. This tool provides researchers with real-time insights into model decision-making processes.</p>
              <p>Built an interactive dashboard that tracks belief evolution through multi-step reasoning chains, implementing entropy-based uncertainty metrics and KL divergence calculations. The visualization helped identify reasoning drift patterns 12% earlier than baseline methods.</p>
              <div class="project-details">
                <strong>Key Features:</strong> Real-time confidence tracking, Interactive chain exploration, Entropy & KL divergence visualization, Export capabilities for research
              </div>
              <div class="project-tools">
                <span class="project-tool">D3.js</span>
                <span class="project-tool">React</span>
                <span class="project-tool">LLM Reasoning</span>
                <span class="project-tool">TypeScript</span>
              </div>
            </div>
          </div>
        </div>

        <div class="project-feature project-feature-reverse">
          <div class="project-feature-img">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80" alt="GPU cluster and distributed computing infrastructure">
          </div>
          <div class="project-feature-content">
            <div class="container">
              <h3>Distributed AI Evals Framework</h3>
              <p class="project-meta">hud (YC W25) | 2025</p>
              <p>Architected a distributed evaluation framework on GPU clusters for testing agentic AI systems at scale. The framework enables parallel execution of thousands of test scenarios across multiple GPU nodes.</p>
              <p>Designed the system to handle complex multi-agent workflows, implementing dynamic load balancing and fault-tolerant execution. Reduced evaluation time by 70% compared to sequential testing while maintaining result consistency across distributed runs.</p>
              <div class="project-details">
                <strong>Technical Implementation:</strong> Kubernetes orchestration for GPU cluster management, Python-based evaluation harness, Custom metrics collection pipeline, Integration with LangChain and AutoGen frameworks
              </div>
              <div class="project-tools">
                <span class="project-tool">Kubernetes</span>
                <span class="project-tool">Python</span>
                <span class="project-tool">Agentic AI</span>
                <span class="project-tool">Docker</span>
              </div>
            </div>
          </div>
        </div>

        <div class="project-feature">
          <div class="project-feature-img">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80" alt="Java desktop application interface">
          </div>
          <div class="project-feature-content">
            <div class="container">
              <h3>Java AWT/Swing Student System</h3>
              <p class="project-meta">Published Academic Project</p>
              <p>A comprehensive Java AWT/Swing program to manage student information using JFrames and persistent file storage. This desktop application provides a complete CRUD interface for educational institutions.</p>
              <p>Implemented using Model-View-Controller architecture with custom table models and event listeners. Features include data validation, file-based persistence, search functionality, and report generation. The system handles serialization for data integrity and includes error recovery mechanisms.</p>
              <div class="project-details">
                <strong>Core Capabilities:</strong> Student records management, Grade tracking and GPA calculation, File I/O with serialization, Custom UI components with event handling
              </div>
              <div class="project-tools">
                <span class="project-tool">Java</span>
                <span class="project-tool">AWT/Swing</span>
                <span class="project-tool">MVC Pattern</span>
              </div>
            </div>
          </div>
        </div>

        <div class="project-feature project-feature-reverse">
          <div class="project-feature-img">
            <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80" alt="Currency exchange and financial calculator">
          </div>
          <div class="project-feature-content">
            <div class="container">
              <h3>Currency Converter using AWT</h3>
              <p class="project-meta">Published Academic Project</p>
              <p>A robust Java-based currency conversion utility leveraging AWT components for real-time calculation. The application provides instant exchange rate conversions with support for multiple international currencies.</p>
              <p>Features a clean GUI with dropdown menus for currency selection, numeric input validation, and bidirectional conversion. Implements the Observer pattern for real-time updates and uses BigDecimal for precise financial calculations to avoid floating-point errors.</p>
              <div class="project-details">
                <strong>Features:</strong> Support for 20+ major currencies, Real-time bidirectional conversion, Precision handling with BigDecimal, Input validation and error handling
              </div>
              <div class="project-tools">
                <span class="project-tool">Java</span>
                <span class="project-tool">AWT</span>
                <span class="project-tool">Observer Pattern</span>
              </div>
            </div>
          </div>
        </div>

        <div class="project-feature">
          <div class="project-feature-img">
            <img src="https://www.caliper.com/graphics/maptitude-mapping-software-interface.jpg" alt="Geospatial data visualization and mapping">
          </div>
          <div class="project-feature-content">
            <div class="container">
              <h3>Geospatial & Scientific Visualization</h3>
              <p class="project-meta">Research & Production Projects</p>
              <p>Integration of ML models with geospatial data using QGIS and scientific visualization tools like ParaView for complex data insights. Applied to environmental monitoring, urban planning, and scientific research datasets.</p>
              <p>Developed custom QGIS plugins for automated feature extraction from satellite imagery using TensorFlow models. Created ParaView pipelines for volumetric data analysis, enabling researchers to visualize 3D scientific datasets with custom colormaps and isosurface rendering.</p>
              <div class="project-details">
                <strong>Project Examples:</strong> ML-based land cover classification (QGIS), Climate data volumetric rendering (ParaView), Automated mapping workflows for urban development, Integration with PostGIS databases
              </div>
              <div class="project-tools">
                <span class="project-tool">QGIS</span>
                <span class="project-tool">ParaView</span>
                <span class="project-tool">Python</span>
                <span class="project-tool">TensorFlow</span>
              </div>
            </div>
          </div>
        </div>

        <div class="project-feature project-feature-reverse">
          <div class="project-feature-img">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80" alt="3D medical imaging and CAD analysis">
          </div>
          <div class="project-feature-content">
            <div class="container">
              <h3>Cross-Domain 3D Analysis</h3>
              <p class="project-meta">Research Initiative</p>
              <p>Applying deep learning models to 3D medical imaging and CAD data using 3D Slicer and FreeCAD for automated feature extraction. This cross-domain approach leverages similar geometric patterns across medical and engineering domains.</p>
              <p>Trained custom segmentation models on CT/MRI scans using 3D Slicer's Python API for preprocessing and annotation. Extended the methodology to CAD part recognition in FreeCAD, achieving 89% accuracy in automated feature detection across both domains through transfer learning.</p>
              <div class="project-details">
                <strong>Applications:</strong> Medical tumor segmentation in 3D Slicer, Automated CAD part classification, Cross-domain transfer learning, Mesh processing and analysis pipelines
              </div>
              <div class="project-tools">
                <span class="project-tool">3D Slicer</span>
                <span class="project-tool">FreeCAD</span>
                <span class="project-tool">Deep Learning</span>
                <span class="project-tool">PyTorch</span>
              </div>
            </div>
          </div>
        </div>

        <div class="project-feature">
          <div class="project-feature-img">
            <img src="https://therepaircafe.wordpress.com/wp-content/uploads/2021/01/schematic.png?w=628" alt="Benson Preamplifier Schematic">
          </div>
          <div class="project-feature-content">
            <div class="container">
              <h3>Benson Preamplifier PCB Design</h3>
              <p class="project-meta">Hardware Design Project</p>
              <p>Custom modification and PCB optimization of the "Benson preamplifier". Designed for production with 4-control interface (Bass, Treble, Gain, Volume), 1/4" audio I/O, DC barrel jack, and LED power indicator.</p>
              <p>Redesigned the original circuit for modern manufacturing with surface-mount components where appropriate. Implemented proper grounding techniques to minimize noise, optimized component placement for signal flow, and added thermal management for power components. Created complete manufacturing files including Gerber, drill files, and BOM.</p>
              <div class="project-details">
                <strong>Design Highlights:</strong> 2-layer PCB layout optimized for audio, Custom footprints for vintage components, DRC-verified design ready for fabrication, Full documentation including assembly guide
              </div>
              <div class="project-tools">
                <span class="project-tool">KiCAD</span>
                <span class="project-tool">PCB Design</span>
                <span class="project-tool">Analog Electronics</span>
                <span class="project-tool">Circuit Simulation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <section id="skills">
        <h2 class="section-title">Skills & Expertise</h2>
        <div class="grid">
        <div class="card skill-category">
          <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" alt="AI and Machine Learning" class="skill-img">
          <h3>Core AI/ML</h3>
          <div class="skill-tags">
            <span class="skill-tag">Agentic AI Development</span>
            <span class="skill-tag">LLM Reasoning</span>
            <span class="skill-tag">D3.js Visualization</span>
            <span class="skill-tag">TensorFlow</span>
            <span class="skill-tag">Machine Learning</span>
            <span class="skill-tag">Deep Learning</span>
            <span class="skill-tag">Prompt Engineering (OPRO)</span>
          </div>
        </div>
        <div class="card skill-category">
          <img src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80" alt="Cloud Computing and DevOps" class="skill-img">
          <h3>Engineering</h3>
          <div class="skill-tags">
            <span class="skill-tag">Distributed Systems</span>
            <span class="skill-tag">Docker & Kubernetes</span>
            <span class="skill-tag">AWS Cloud</span>
            <span class="skill-tag">React.js</span>
            <span class="skill-tag">Flask</span>
            <span class="skill-tag">RESTful APIs</span>
            <span class="skill-tag">SQL</span>
          </div>
        </div>
        <div class="card skill-category">
          <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80" alt="3D Modeling and Design Tools" class="skill-img">
          <h3>Specialized Tools</h3>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">Experience with domain-specific analysis & visualization tools:</p>
          <div class="skill-tags">
            <span class="skill-tag">QGIS</span>
            <span class="skill-tag">ParaView</span>
            <span class="skill-tag">3D Slicer</span>
            <span class="skill-tag">Blender</span>
            <span class="skill-tag">Figma</span>
            <span class="skill-tag">Unity</span>
            <span class="skill-tag">Godot</span>
            <span class="skill-tag">KiCAD</span>
            <span class="skill-tag">FreeCAD</span>
          </div>
        </div>
        </div>
      </section>

      <section id="experience">
      <h2 class="section-title">Professional Experience</h2>
      <div class="experience-list">
        
        <div class="experience-item">
          <div class="exp-header">
            <div>
              <div class="exp-role">Aligneer</div>
              <div class="exp-company">Aligneer</div>
            </div>
            <span class="exp-date">October 2025 - Present</span>
          </div>
          <ul class="exp-desc">
            <li>Leading strategic initiatives in AI alignment and scalable infrastructure.</li>
            <li>Optimizing model performance and reliability in production environments.</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="exp-header">
            <div>
              <div class="exp-role">Software Engineer, AI</div>
              <div class="exp-company">CompScale</div>
            </div>
            <span class="exp-date">September 2025 - Present</span>
          </div>
          <ul class="exp-desc">
            <li>Developing high-performance AI systems with a focus on scalability and efficiency.</li>
            <li>Implementing advanced ML algorithms and distributed system architectures.</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="exp-header">
            <div>
              <div class="exp-role">Research Engineer, Agentic AI Evals</div>
              <div class="exp-company">hud (YC W25)</div>
            </div>
            <span class="exp-date">October 2025 - November 2025</span>
          </div>
          <ul class="exp-desc">
            <li>Specialized in Agentic AI evaluation frameworks and performance metrics.</li>
            <li>Bridging the gap between cutting-edge research and production-ready AI agents.</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="exp-header">
            <div>
              <div class="exp-role">AI Researcher</div>
              <div class="exp-company">Ai2</div>
            </div>
            <span class="exp-date">January 2025 - May 2025</span>
          </div>
          <ul class="exp-desc">
            <li>Applied Optimization by Prompting (OPRO) to enhance few-shot reasoning, achieving a 12% gain in hypothesis generation accuracy.</li>
            <li>Developed belief-tracking and uncertainty quantification components using entropy and KL divergence for early detection of reasoning drift.</li>
            <li>Built an interactive D3.js platform visualizing confidence evolution across reasoning chains for research transparency.</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="exp-header">
            <div>
              <div class="exp-role">Software Engineer Intern</div>
              <div class="exp-company">Rootstack</div>
            </div>
            <span class="exp-date">January 2023 - May 2023</span>
          </div>
          <ul class="exp-desc">
            <li>Developed and deployed full-stack modules using React.js and Flask, enhancing transaction throughput by 30%.</li>
            <li>Optimized RESTful APIs and SQL queries, achieving a 25% reduction in latency during high-load scenarios.</li>
            <li>Designed secure data pipelines with schema validation to ensure reliable cross-service communication.</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="exp-header">
            <div>
              <div class="exp-role">Software Engineer</div>
              <div class="exp-company">IBM</div>
            </div>
            <span class="exp-date">January 2020 - May 2022</span>
          </div>
          <ul class="exp-desc">
            <li>Deployed AI-driven automation pipelines powered by classification and regression models, improving throughput by 20%.</li>
            <li>Processed over 10 million data records for training random forest and gradient boosting models.</li>
            <li>Introduced reusable libraries and REST APIs for ML model endpoints, reducing integration timelines by 30%.</li>
            <li>Containerized ML solutions with Docker and orchestrated deployments using Kubernetes, reducing release time from hours to minutes.</li>
          </ul>
        </div>
        </div>
      </section>

      <section id="education">
      <h2 class="section-title">Education & Certifications</h2>
      <div class="experience-list">
        <div class="experience-item">
          <div class="exp-header">
            <div>
              <div class="exp-role">Master of Science in Computer Science</div>
              <div class="exp-company">The University of Texas at Dallas</div>
            </div>
            <span class="exp-date">August 2022 - May 2025</span>
          </div>
        </div>
      </div>
      <div class="grid" style="margin-top: 2rem;">
        <div class="card">
          <h3>Certifications</h3>
          <ul class="exp-desc" style="margin-top: 1rem;">
            <li>AWS Cloud Computing</li>
            <li>Deep Learning Specialization (DeepLearning.AI)</li>
            <li>TensorFlow Developer Specialization</li>
            <li>Machine Learning with Python</li>
          </ul>
        </div>
        </div>
      </section>
    </div>
  </main>

  <footer>
    <div class="container">
      <p>&copy; 2026 Martin Keasher Turner. Built with Vite & TypeScript.</p>
      <p style="margin-top: 0.5rem; font-size: 0.8rem;">Contact: martinturner6167@gmail.com</p>
    </div>
  </footer>
`

const textToType = "Martin Keasher Turner | Welcome to my portfolio"
const typingElement = document.querySelector('#typing-text')

if (typingElement) {
  let i = 0
  function type() {
    if (i < textToType.length) {
      typingElement!.textContent += textToType.charAt(i)
      i++
      const delay = Math.floor(Math.random() * 100) + 50
      setTimeout(type, delay)
    } else {
      // Pause at the end before restarting
      setTimeout(() => {
        i = 0
        typingElement!.textContent = ""
        type()
      }, 3000) // 3 seconds pause
    }
  }
  type()
}
