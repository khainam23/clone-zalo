function Content(props) {
  return (
    <div {...props}>
      {/* Show chats */}
      <Chat></Chat>
      <ShowMsg></ShowMsg>
    </div>
  );
}

export default Content;
