import "./resume.css";

export default function Resume() {
  return (
    <section id="resume">
    <>
      <div className="banner banner-top" aria-hidden="true"></div>

      <div className="page">
        <header className="header">
          <div className="header-left">
            <div>Charlotte, NC</div>
          </div>

          <div className="header-center">
<img
  src="/WebPortfolio/headshot.png"
  alt="Christina Heggins"
  className="headshot"
/>


            <h1>Christina J. Heggins</h1>
            <p className="title">FULL STACK SOFTWARE ENGINEER</p>
          </div>

          <div className="header-right">
            <div>
              <a href="mailto:chegginsw@gmail.com">
                chegginsw@gmail.com
              </a>
            </div>
            <div>
              <a
                href="https://github.com/ChrisJayH"
                target="_blank"
                rel="noreferrer"
              >
                github.com/ChrisJayH
              </a>
            </div>
          </div>
        </header>

        <div className="rule"></div>

        <main className="grid">
          <section className="left">
            <h2>Experience</h2>

            <article className="job">
              <h3>
                Web Developer — Tek Systems (Charlotte-Mecklenburg Schools)
              </h3>
              <p className="meta">July 2025 – Present</p>
              <ul>
                <li>
                  Developed and launched district-wide accessibility training
                  for staff and educators, reinforcing WCAG-aligned best
                  practices.
                </li>
                <li>
                  Built and enhanced front-facing web applications with a focus
                  on usability, accessibility, and cross-platform consistency.
                </li>
                <li>
                  Translated designs into semantic, accessible HTML and
                  responsive layouts using modern CSS.
                </li>
                <li>
                  Created CMS-driven and AI-enabled web experiences using modern
                  JavaScript standards.
                </li>
                <li>
                  Built automation scripts and validation checks to reduce
                  manual compliance work and keep pages accurate at scale.
                </li>
              </ul>
            </article>

            <article className="job">
              <h3>Associate Software Engineer — Tek Systems (Optum)</h3>
              <p className="meta">March 2022 – April 2023</p>
              <ul>
                <li>
                  Developed custom React components to support feature
                  enhancements and improve user experience.
                </li>
                <li>
                  Implemented front-end BDD automation using Cucumber and
                  Selenium for feature validation.
                </li>
                <li>
                  Monitored critical applications processing 200,000+
                  transactions daily and supported incident response.
                </li>
                <li>
                  Created documentation and communicated sprint deliverables to
                  non-technical stakeholders.
                </li>
              </ul>
            </article>

            <article className="job">
              <h3>Project Manager — Charlotte-Mecklenburg Library</h3>
              <p className="meta">July 2021 – November 2021</p>
              <ul>
                <li>
                  Planned, designed, and delivered digital content for the
                  Living Archive project, supporting long-term public access
                  and preservation goals.
                </li>
                <li>
                  Collaborated cross-functionally with developers, designers,
                  and stakeholders to produce web pages, graphics, and digital
                  marketing materials.
                </li>
                <li>
                  Evaluated, selected, and procured digital production
                  equipment to improve content quality and expand audience
                  reach.
                </li>
                <li>
                  Recorded, transcribed, and edited interviews for public
                  audiences and official library archives.
                </li>
                <li>
                  Tracked project milestones and reported progress, risks, and
                  timelines to stakeholders.
                </li>
                <li>
                  Supervised and trained staff on technologies and workflows
                  for recording, editing, publishing, and archiving digital
                  content.
                </li>
              </ul>
            </article>

            <article className="job">
              <h3>Program Coordinator — Mecklenburg County</h3>
              <p className="meta">July 2016 – July 2021</p>
              <ul>
                <li>
                  Designed and implemented an electronic referral process that
                  reduced service wait times and improved service coordination.
                </li>
                <li>
                  Trained 84 service providers across 17 community agencies on
                  workflows, tools, and data reporting requirements.
                </li>
                <li>
                  Developed custom reporting tools to track program performance
                  and provide actionable insights.
                </li>
                <li>
                  Facilitated monthly community workgroups involving 12+
                  agencies and 27 service providers.
                </li>
                <li>
                  Coordinated cross-agency communication and data sharing to
                  improve service delivery.
                </li>
                <li>
                  Supported ongoing program evaluation through data collection
                  and stakeholder reporting.
                </li>
              </ul>
            </article>
          </section>

          <aside className="right">
            <section className="block">
              <h2>Skills</h2>
              <ul className="bullets">
                <li>React, JavaScript, HTML, CSS</li>
                <li>Accessibility testing and implementation</li>
                <li>Frontend testing and validation (Cucumber, Selenium)</li>
                <li>REST APIs, system design fundamentals</li>
                <li>Java, Spring Boot, SQL</li>
                <li>Git/GitHub, modern frontend workflows</li>
              </ul>
            </section>

            <div className="rule rule-small"></div>

            <section className="block">
              <h2>Education</h2>
              <p>
                <strong>
                  Bachelor of Science, Urban Studies and Geography
                </strong>
                <br />
                Virginia Commonwealth University, Richmond, VA — 2010
              </p>
            </section>

            <div className="rule rule-small"></div>

            <section className="block">
              <h2>Additional Training</h2>
              <div className="ref">
                Java Full Stack Development Course — Charlotte, NC (2022)
              </div>
              <div>
                Lean Six Sigma Green Belt — Central Piedmont Community College,
                Charlotte, NC (2020)
              </div>
            </section>
          </aside>
        </main>
      </div>


      <div className="banner banner-bottom" aria-hidden="true"></div>
    </>
    </section>
  );
}
