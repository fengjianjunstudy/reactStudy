var CommentBox=React.createClass({
	render:function(){
		return (
			<div className="comment_box">
				<CommentList />
				<CommentInput />
			</div>
		)
	}
})
var CommentList=React.createClass({
	render:function(){
		return(
			<ul className="list">
				<li>
					<h2>
						<span>小明：</span>
						<span>咱们一起去玩吧</span>
					</h2>
					<Comment />
				</li>
			</ul>
		)
	}
});
var CommentInput=React.createClass({
	render:function(){
		return (
			<input type="text"/>
		)
	}
});
var Comment=React.createClass({
	render:function(){
		return (
			<div className="comment">
				好啊！
			</div>
		)
	}
});
React.render(
	<CommentBox />,
	document.getElementById("container")
);