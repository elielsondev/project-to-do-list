export default function Header() {
  return (
    <header className="flex items-center justify-between flex-wrap gap-2.5 p-2.5 w-screen bg-emerald-600">
      <div className="flex-none">
        <h1 className="text-4xl arsenal-bold-italic text-white">To do List</h1>
      </div>

      <form className="flex flex-1 items-center justify-center flex-wrap gap-2">
        <input className="w-2/5 h-9 min-w-36 p-2 rounded-3xl text-lg arsenal-regular items-center shadow-lg" type="text" name="" id="" />
        <input className="font-sans	text-2xl font-black px-3 py-0.5 rounded-full shadow-lg bg-emerald-400 text-white" type="button" value="+" />
      </form>
    </header>
  );
}
