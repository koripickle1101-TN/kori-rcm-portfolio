export const metadata = {
  title: "Kori Pickle | RCM Workflow Portfolio",
  description: "RCM workflow analysis, denial prevention, and healthcare operations portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}