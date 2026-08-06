import "./globals.css";

export const metadata = {
  title: "Rami Chaimae | Portfolio",
  description: "Portfolio de Rami Chaimae, Community Manager & Créatrice de Contenu Digital basée à Marrakech, Maroc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
