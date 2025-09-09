import type { FC } from "react";

const CertificationsPage: FC = () => {
  return (
    <main aria-labelledby="certifications-title">
      <section className="container py-4">
        <section className="row justify-content-center">
          <section className="col-lg-8">
            <header className="mb-3">
              <h1 id="certifications-title" className="mb-0">Certifications</h1>
              <p className="text-muted">Professional certifications & learning credentials</p>
            </header>

            {/* Featured: CISA (Credly) */}
            <article className="card-like mb-4">
              <header className="mb-2">
                <h2 className="h5 mb-1">CISA — Certified Information Systems Auditor</h2>
                <p className="mb-0">ISACA</p>
              </header>
              <p className="mb-2">
                Validates expertise in IS audit, governance, risk, and compliance.
              </p>
              <p className="mb-0">
                <a
                  href="https://www.credly.com/badges/4a631523-1f06-452c-9556-6f0b5ce8c816/public_url"
                  target="_blank"
                  rel="noreferrer"
                >
                  View verified credential (Credly)
                </a>
              </p>
            </article>

            {/* Featured: Cisco Intro to Cybersecurity (Credly) */}
            <article className="card-like mb-4">
              <header className="mb-2">
                <h2 className="h5 mb-1">Introduction to Cybersecurity</h2>
                <p className="mb-0">Issued by Cisco</p>
              </header>
              <p className="mb-2">
                Foundational knowledge of cybersecurity concepts, threats, and defenses.
              </p>
              <p className="mb-0">
                <a
                  href="https://www.credly.com/badges/0516afd8-ac78-4713-a2cf-5aaeeee32e12/public_url"
                  target="_blank"
                  rel="noreferrer"
                >
                  View verified credential (Credly)
                </a>
              </p>
            </article>

            {/* LinkedIn Learning certificates */}
            <article className="card-like">
              <header className="mb-2">
                <h2 className="h5 mb-1">LinkedIn Learning Certificates</h2>
                <p className="text-muted mb-0">Selected courses completed</p>
              </header>
              <ul className="mb-0">
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/1eb2dcaf742d90994a25f5bd85a61782976981127d9f54fc8bd133b131c8e3b3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bi3xG8mOGR%2FeAbhHuoBhgiQ%3D%3D" target="_blank" rel="noreferrer">
                    Cybersecurity Fundamentals
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/b9e7651dd12c3848da364917897ead65f73d6c7b44e22ddafffa251df093c64d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bi3xG8mOGR%2FeAbhHuoBhgiQ%3D%3D" target="_blank" rel="noreferrer">
                    Artificial Intelligence for Cybersecurity
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/a088a0497dd0a1afa04414cf45cd6a5544434984a52e7bf400a709c6bcd1fb06?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bi3xG8mOGR%2FeAbhHuoBhgiQ%3D%3D" target="_blank" rel="noreferrer">
                    Become a Cybersecurity Professional
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/c68c70f185ce79f5c0d5566e744b824f390811231fda39997fc7729c7e279be3" target="_blank" rel="noreferrer">
                    Become an IT Security Specialist
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/96c92213f0cd0173c9dec1854224385885778bf1df73030d1d0ff6ddbef9185d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BX1yRBgF%2FQzGO%2BlZ9OWaBbg%3D%3D" target="_blank" rel="noreferrer">
                    Cybersecurity Foundations
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/a155b0119c2fe17ac4069fdf626cae1059ec421fb61911e056e2d8afd7d6ec45?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BX1yRBgF%2FQzGO%2BlZ9OWaBbg%3D%3D" target="_blank" rel="noreferrer">
                    Cybersecurity Foundations: Computer Forensics
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/3b7655e9289173f8da1ce74b3e719c754904122f32f89771d13ff65da5d28de4" target="_blank" rel="noreferrer">
                    Cybersecurity Foundations: Governance, Risk, and Compliance (GRC)
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/b360449f805ecb2ede4cd7cf52310db86fce8cec16337649d9e0f55138a7804d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BHe4U5uExRFODlx6CaYkq0Q%3D%3D" target="_blank" rel="noreferrer">
                    Cybersecurity Foundations: Security Architecture
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/3cdc839822cbc2f001c3dba4dcdf97b99e67e28c78db5948685ceae7116e1d2c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BHe4U5uExRFODlx6CaYkq0Q%3D%3D" target="_blank" rel="noreferrer">
                    Cybersecurity with Cloud Computing
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/4b72744f9942844cc19c6358cc9ac4e30c2075979fec6008b90aeee5d2c2f09b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bi3xG8mOGR%2FeAbhHuoBhgiQ%3D%3D" target="_blank" rel="noreferrer">
                    Ethics in Cybersecurity
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/5a7f88c48f4f475d945d3d29124a185f0e0969964cd64c4a5e49c345a7c15e39" target="_blank" rel="noreferrer">
                    IT Security Foundations: Core Concepts
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/37608bc6a4fc60d4c42fedf0cf57a52bdf05770f22089e65ae56a4786e02dbb6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bi3xG8mOGR%2FeAbhHuoBhgiQ%3D%3D" target="_blank" rel="noreferrer">
                    IT Security Foundations: Network Security
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/e2264fa4ee97d54d41cb00f34b8f8b43d165382123a8eac24bf0ad2810eb5293?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bi3xG8mOGR%2FeAbhHuoBhgiQ%3D%3D" target="_blank" rel="noreferrer">
                    IT Security Foundations: Operating System Security
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/033eeec012b5d0e1bce24f874614c766e326619b522ac5bf707e15bc8f80299b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bi3xG8mOGR%2FeAbhHuoBhgiQ%3D%3D" target="_blank" rel="noreferrer">
                    IT and Cybersecurity Risk Management Essential Training
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/5952135853d2110afbd352cd86013fcda4b09fe0ccf92f299eaf76f9a5166540?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bi3xG8mOGR%2FeAbhHuoBhgiQ%3D%3D" target="_blank" rel="noreferrer">
                    Learning Threat Modeling for Security Professionals
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/3eeaa49fddf63e730a9c1de42692bc57dd2c1886b25d8b983522472ebf749d5a" target="_blank" rel="noreferrer">
                    Practical Cybersecurity for IT Professionals
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/1507c2a388bfac9a08bbd48b2502f912f0d801d4c2e908ae8eb15216f0a99c20?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bi3xG8mOGR%2FeAbhHuoBhgiQ%3D%3D" target="_blank" rel="noreferrer">
                    Security Frameworks Fundamentals
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/126220679890e516144f82e164c662e8553f654a2d178e2d1a1a7575455a532a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bi3xG8mOGR%2FeAbhHuoBhgiQ%3D%3D" target="_blank" rel="noreferrer">
                    Soft Skills for Information Security Professionals
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/2a8b44326375077ef4faca660af7d3a229f9c15184d9ec1dc454da542f23dad6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bi3xG8mOGR%2FeAbhHuoBhgiQ%3D%3D" target="_blank" rel="noreferrer">
                    TLS for Beginners: Securing Network Communications
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/certificates/dc348da86cd6a59470f12b10e95ee04414aa236f34f833530df1b522fc02786c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bi3xG8mOGR%2FeAbhHuoBhgiQ%3D%3D" target="_blank" rel="noreferrer">
                    The IT Professional's Path to Cybersecurity
                  </a>
                </li>
              </ul>
            </article>
          </section>
        </section>
      </section>
    </main>
  );
};

export default CertificationsPage;
