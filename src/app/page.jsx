// app/page.jsx

export default function Home() {
  const certifications = [
    {
      name: "Full-Stack Web Development (Udemy)",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-9744f9a8-d9fa-4980-a6c8-6fe78441c769.jpg",
    },
    {
      name: "Tata Group - Cybersecurity Analyst Job Simulation",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_5kuy8figT5NLBjX8H_1748405966731_completion_certificate.pdf",
    },
    "National Workshop on FinTech Security (MeitY ISEA 3)",
    {
      name: "DBMS (Scaler)",
      link: "https://www.linkedin.com/in/bibhanshusingh/details/certifications/1750222616092/single-media-viewer/?profileId=ACoAAERXX1kB-wwJRxKKkb83RglHd_iMDEx1MDc",
    },
    "Cybersecurity Awareness (HP Life)",
  ];

  const activities = [
    "Worked as a core member of the Infinity Esport Club, managing over 20 events with 400–500 participants. Led event planning and execution to ensure smooth operations and participant engagement.",
    "Participated in two national-level Hackathons; shortlisted for the HR round in one for outstanding technical and teamwork skills.",
  ];

  return (
    <main className="min-h-screen bg-slate-100 flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white text-slate-900 border border-slate-200 shadow-sm px-6 py-8 md:px-10 md:py-10">
        {/* Header */}
        <header className="text-center border-b border-slate-200 pb-4 mb-4">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase text-green-500">
            BIBHANSHU SINGH
          </h1>
          <div className="mt-2 text-xs md:text-sm space-y-1">
            <p>9770711522 · bibhanshus394@gmail.com</p>
            <p className="flex flex-wrap justify-center gap-2 md:gap-3">
              <a
                href="https://www.linkedin.com/in/bibhanshusingh"
                target="_blank"
                rel="noreferrer"
                className="underline text-green-800 hover:text-sky-700"
              >
                LinkedIn
              </a>
              <span>|</span>
              <a
                href="https://portfolio-kappa-eight-44.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="underline text-green-800 hover:text-sky-700"
              >
                Portfolio
              </a>
              <span>|</span>
              <a
                href="https://github.com/Bibhanshu16" // change this
                target="_blank"
                rel="noreferrer"
                className="underline text-green-800 hover:text-sky-700"
              >
                GitHub
              </a>
            </p>
          </div>
        </header>

        {/* SUMMARY */}
        <SectionTitle>SUMMARY</SectionTitle>
        <p className="text-sm leading-relaxed mb-4">
          Full-stack developer skilled in React, Next.js, Node.js, and
          PostgreSQL. Built production-ready projects including an AI-based
          deepfake detector and a handwritten OCR system. Strong in
          problem-solving and actively participating in hackathons.
        </p>

        {/* EDUCATION */}
        <SectionTitle>EDUCATION</SectionTitle>
        <div className="text-sm mb-4">
          <p className="font-semibold">
            Bachelor of Technology in Cyber Security
          </p>
          <p>
            Rungta College of Engineering and Technology, Bhilai, Chhattisgarh.
          </p>
          <p className="text-xs text-slate-600">Sep 2022 - April 2026</p>
        </div>

        {/* ADDITIONAL INFORMATION */}
        <SectionTitle>ADDITIONAL INFORMATION</SectionTitle>

        <div className="space-y-2 text-sm mb-4">
          <p>
            <span className="font-semibold">Technical Skills:</span>
          </p>
          <p>
            <span className="font-semibold">Frontend:</span> HTML5, CSS,
            JavaScript, React.js, Tailwind CSS, UI/UX Design.
          </p>
          <p>
            <span className="font-semibold">Backend:</span> Node.js, Express.js,
            RESTful APIs, Passport.js (Session-based Auth).
          </p>
          <p>
            <span className="font-semibold">Database:</span> PostgreSQL.
          </p>
          <p>
            <span className="font-semibold">Tools:</span> Git, GitHub, VS Code,
            Postman.
          </p>
          <p>
            <span className="font-semibold">Other:</span> Java, Problem Solving,
            Debugging.
          </p>
          <div className="mt-2">
            <p>
              <span className="font-semibold">Certifications:</span>
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1">
              {certifications.map((item) => (
                <li key={typeof item === "string" ? item : item.name}>
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <div className="flex items-center gap-1">
                      <span>{item.name}</span>
                      <a
                        className="text-blue-500 underline"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Link
                      </a>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Awards / Activities */}
        <div className="mb-4">
          <p className="text-sm font-semibold mb-1">Awards/Activities:</p>
          <ul className="list-disc list-outside pl-5 space-y-1 text-sm">
            {activities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* PROJECTS */}
        <SectionTitle>PROJECTS</SectionTitle>

        <div className="space-y-4 text-sm">
          {/* Token-Web3 */}
          <div>
            <p className="font-semibold">
              Token-Web3:{" "}
              <a
                href="https://github.com/Bibhanshu16/Token-Web3" // change this
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-sky-700"
              >
                [GitHub Repository]
              </a>
            </p>
            <p className="mt-1">
              Developed a blockchain-based token system leveraging Internet
              Computer (IC) canisters and smart contract logic. Implemented
              token balance querying, transfers, and deployment workflows using
              Motoko and JavaScript. Worked on front-end integration, deployment
              scripts, and tested core token functionalities on live IC
              networks.
            </p>
          </div>

          {/* Deepfake-AI-video-detector */}
          <div>
            <p className="font-semibold">
              Deepfake-AI-video-detector:{" "}
              <a
                href="https://github.com/Bibhanshu16/Deepfake-ai-video-detector" // change this
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-sky-700"
              >
                [GitHub Repository]
              </a>
            </p>
            <p className="mt-1">
              I built DeepScan, an AI-based deepfake video detector using
              FastAPI, PyTorch, OpenCV, and Next.js. It analyzes uploaded videos
              by sampling frames and running them through a deepfake detection
              model. The UI is clean, responsive, and fully integrated with the
              backend. The system works completely offline without any paid
              APIs.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

// Simple section title to mimic resume style
function SectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`mt-4 mb-2 text-sm font-semibold tracking-[0.15em] text-green-700 uppercase underline ${className}`}
    >
      {children}
    </h2>
  );
}
