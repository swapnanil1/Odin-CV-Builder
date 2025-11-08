export default function NavBar() {
	return (
		<div className="w-full fixed top-0 left-0 z-50 outline-2">
			<nav className="flex justify-between items-center px-10 py-5 font-bold">
				<p className="text-3xl">CV Buddy</p>
				<ul className="list-none flex text-xl justify-between gap-2 items-center">
					<li className="px-5 outline-black  outline-2">
						<a href="/new">New</a>
					</li>
					<li className="px-5 outline-black outline-2">
						<a href="/saved">Saved</a>
					</li>
					<li className="px-5 outline-black outline-2">
						<a href="/login">Login</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
