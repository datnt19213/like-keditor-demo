import {Route, Routes} from "react-router";

import {RetroGrid} from "./components/magicui/retro-grid";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "./components/ui/navigation-menu";
import Examples from "./pages/Examples";
import Github from "./pages/Github";
import Home from "./pages/Home";

const listMenu = [
	{
		label: "Home",
		href: "/",
		component: <Home />,
	},
	{
		label: "Examples",
		href: "/examples",
		component: <Examples />,
	},
	{
		label: "Github",
		href: "/github",
		component: <Github />,
	},
];

function App() {
	return (
		<div className="min-h-screen w-full relative overflow-hidden flex items-center justify-start flex-col gap-4">
			<RetroGrid
				angle={0}
				cellSize={300}
				className="absolute opacity-10 inset-0 w-screen h-screen"
			/>
			<NavigationMenu className="p-6 w-full flex justify-center max-w-[1200px] lg:justify-start">
				<NavigationMenuList className="gap-4 flex flex-col sm:flex-row  justify-start items-center ">
					{listMenu.map((item) => {
						return (
							<NavigationMenuItem key={item.label}>
								<NavigationMenuLink
									className="font-medium text-xl px-4 py-2 rounded-md"
									key={item.label}
									href={item.href}
								>
									{item.label}
								</NavigationMenuLink>
							</NavigationMenuItem>
						);
					})}
				</NavigationMenuList>
			</NavigationMenu>
			<Routes>
				{listMenu.map((item) => {
					return <Route key={item.label} path={item.href} element={item.component} />;
				})}
			</Routes>
		</div>
	);
}

export default App;
