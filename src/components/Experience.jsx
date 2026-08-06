"use client";

const experiences = [
  {
    date: "2024 – 2025",
    title: "Community Manager",
    place: "Gorgeous Ladies – Oujda",
    items: [
      "Gestion et animation de la page Instagram (cosmétiques).",
      "Création de Posts, Stories et Reels viraux (167K+ vues).",
      "Photographie et mise en valeur des produits.",
      "Gestion des messages clients & supports marketing.",
    ],
  },
  {
    date: "Juillet 2025",
    title: "Stagiaire Commerciale",
    place: "MAXIPRO",
    items: [
      "Saisie et gestion des opérations commerciales (Atlascom).",
      "Suivi de la relation client et analyse des besoins.",
      "Préparation et suivi des commandes (logistique).",
    ],
  },
];

const formations = [
  {
    date: "2026",
    title: "TS en Gestion des Entreprises",
    place: "OFPPT – Oujda",
    sub: "Option Commerce et Marketing",
  },
  {
    date: "2025",
    title: "Certificat Innovation Entrepreneuriale",
    place: "OFPPT – Oujda",
    sub: "De l'idée de projet au projet viable",
  },
  {
    date: "2023",
    title: "Licence d'Études Anglaises",
    place: "Université Mohammed Premier, Oujda",
    sub: "",
  },
  {
    date: "2020",
    title: "Baccalauréat",
    place: "Lycée Ibn Khaldoun, Oujda",
    sub: "Sciences de la vie et de la Terre",
  },
];

export default function Experience() {
  return (
    <div style={{ background: "var(--color-bg-light)" }}>
      <section id="experience">
        <h2>Mon Parcours</h2>
        <div>
          <div>
            <h3>
              <span>💼</span>
              Expériences
            </h3>
            {experiences.map((exp) => (
              <div key={exp.title}>
                <span>{exp.date}</span>
                <h4>{exp.title}</h4>
                <p>{exp.place}</p>
                {exp.sub && <p>{exp.sub}</p>}
                {exp.items && (
                  <ul>
                    {exp.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div>
            <h3>
              <span>🎓</span>
              Formation
            </h3>
            {formations.map((f) => (
              <div key={f.title}>
                <span>{f.date}</span>
                <h4>{f.title}</h4>
                <p>{f.place}</p>
                {f.sub && <p>{f.sub}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
