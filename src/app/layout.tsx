import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  //!SECTION - Test fetch data => not work
  //NOTE - the fetch will throw error, because url not correctly, but the error page not display
  //NOTE - my node version: v18.16.1

  const aaa = await fetch("http://abc.test.ss");

  //!SECTION - Test throw any => not work
  //NOTE - handler not work for layout  (global-error not display)
  // throw new Error("aaaaaaaaaaaaaaaaaaaaaaaaa");

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
