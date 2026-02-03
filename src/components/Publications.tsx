import React from "react";
import "../assets/styles/Publications.scss";

type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: "Published" | "Preprint";
  linkLabel: string;
  href: string;
  secondaryLinkLabel?: string;
  secondaryHref?: string;
};

const publications: Publication[] = [
  {
    title:
      "Neural Edge Histogram Descriptors for Underwater Acoustic Target Recognition",
    authors:
      "Agashe, Atharva; Carreiro, Davelle; Van Dine, Alexandra; Peeples, Joshua",
    venue: "OCEANS 2025 Brest",
    year: "2025",
    status: "Published",
    linkLabel: "DOI",
    href: "https://doi.org/10.1109/OCEANS58557.2025.11104298",
  },
  {
    title:
      "LGDWT-GS: Local and Global Discrete Wavelet-Regularized 3D Gaussian Splatting for Sparse-View Scene Reconstruction",
    authors:
      "Salehi, Shima; Agashe, Atharva; McFarland, Andrew J; Peeples, Joshua",
    venue: "arXiv preprint arXiv:2601.17185",
    year: "2026",
    status: "Preprint",
    linkLabel: "arXiv",
    href: "https://arxiv.org/abs/2601.17185",
    secondaryLinkLabel: "Project Website",
    secondaryHref: "https://advanced-vision-and-learning-lab.github.io/LGDWT-GS-website/",
  },
];

function Publications() {
  return (
    <div id="publications">
      <div className="items-container publications-container">
        <h1>Publications</h1>
        <div className="publications-list">
          {publications.map((pub) => (
            <article className="publication-card" key={pub.href}>
              <div className="publication-card__header">
                <h2>{pub.title}</h2>
                <span
                  className={`publication-status ${
                    pub.status === "Published" ? "published" : "preprint"
                  }`}
                >
                  {pub.status}
                </span>
              </div>
              <p className="publication-authors">{pub.authors}</p>
              <p className="publication-venue">
                {pub.venue} · {pub.year}
              </p>
              <div className="publication-links">
                <a
                  href={pub.href}
                  target="_blank"
                  rel="noreferrer"
                  className="publication-link"
                >
                  {pub.linkLabel}
                </a>
                {pub.secondaryHref && pub.secondaryLinkLabel ? (
                  <a
                    href={pub.secondaryHref}
                    target="_blank"
                    rel="noreferrer"
                    className="publication-link"
                  >
                    {pub.secondaryLinkLabel}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Publications;


