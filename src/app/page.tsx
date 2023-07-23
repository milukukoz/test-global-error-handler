export default async function Home() {
  //NOTE - the fetch will throw error, because url not correctly, but the error page not display
  //NOTE - my node version: v18.16.1



  const aaa = await fetch("http://abc.test.ss"); //error handler not work for page

  return <p>home</p>;
}
