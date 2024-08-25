
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {

	return (
		<form className="flex items-center gap-2 w-full">
			<input 
				type="text" 
				placeholder="Search…" 
				className="input input-bordered w-full rounded-full"
			/>
			<button 
				type="submit" 
				className="btn btn-circle bg-sky-500 text-white flex items-center justify-center"
			>
				<IoSearchSharp className="w-5 h-5" />
			</button>
		</form>
	);
};

export default SearchInput;
