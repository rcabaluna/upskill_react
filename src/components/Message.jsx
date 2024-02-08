function Message() {
	function handleClick() {
		console.log("clicked");
	}
	return (
		<div>
			<button onClick={handleClick}>Click here</button>
		</div>
	);
}

export default Message;
