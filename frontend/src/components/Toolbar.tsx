export default function Toolbar() {
  return (
    <section className="flex justify-center items-center">
      <ul className="flex gap-5 border-b-2 border-black/25 p-2 my-5">
        <li className="border border-black/25 rounded-lg p-2 bg-blue-500 text-white font-semibold">
          <a href="">Add Asset</a>
        </li>
        <li className="border border-black/25 rounded-lg p-2 bg-blue-500 text-white font-semibold">
          <a href="">View Archive</a>
        </li>
      </ul>
    </section>
  );
}
