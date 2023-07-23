import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //NOTE - handler not work for layout  (global-error not display)
  throw new Error("aaaaaaaaaaaaaaaaaaaaaaaaa");
  

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
