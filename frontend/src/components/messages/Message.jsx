import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const bubbleBgColor = fromMe ? "bg-black" : "";


	return (
		<div className={`chat ${chatClassName}`}>
			{/* <div className='chat-image avatar'>
		</div> */}
			<div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{message.createdAt}</div>
		</div>
	);
};
export default Message;