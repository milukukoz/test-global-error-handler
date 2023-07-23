export default async function ChildPage() {
  //   const aaa = await fetch("http://abc.test.ss");

 //error handler not work for nested page
  throw new Error("sdsdsd");


  return <p>home</p>;
}
