import Conversations from "./Conversations";
import Logoutbutton from "./Logout";
// import Logout from "./Logout";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className="w-[35vw] border-r border-slate-500 p-4 flex flex-col">
			<SearchInput />
			<div className="divider px-3"></div>
			<Conversations />
			<Logoutbutton />
		</div>
	);
};

export default Sidebar;

// <div className='border-r border-slate-500 p-4 flex flex-col'>