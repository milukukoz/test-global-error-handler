export default async function ChildPage() {
  //   const aaa = await fetch("http://abc.test.ss");

  //NOTE - error page  work
  throw new Error("sdsdsd");

  return <p>home</p>;
}
