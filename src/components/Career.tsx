import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&amp;</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DSA &amp; Hackathons</h4>
                <h5>LeetCode &amp; Full Stack Grinding</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively solving Data Structures &amp; Algorithms challenges on LeetCode (@Rizwaan_Ahmed_20),
              collaborating on open-source repositories, and engineering full-stack production systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Virtual Intern</h4>
                <h5>EduSkills (AICTE · Google Sponsored)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Completed Google AI/ML virtual internship. Studied supervised/unsupervised machine learning fundamentals,
              deep learning architectures, and real-world AI applications using Python and data analysis.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Info Bharat Interns</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Engineered and shipped BabaFly — an aircraft marketplace platform with real-time filters, JWT authentication,
              responsive UI, and cloud deployment on Vercel. Led API integrations and frontend architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>SR University, Warangal</h5>
              </div>
              <h3>2024–28</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science &amp; Engineering. Building strong foundations in
              core computing, object-oriented design, database management systems, algorithms, and cloud computing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
