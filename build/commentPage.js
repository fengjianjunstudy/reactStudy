var CommentBox=React.createClass({displayName: "CommentBox",
	render:function(){
		return (
			React.createElement("div", {className: "comment_box"}, 
				React.createElement(CommentList, null), 
				React.createElement(CommentInput, null)
			)
		)
	}
})
var CommentList=React.createClass({displayName: "CommentList",
	render:function(){
		return(
			React.createElement("ul", {className: "list"}, 
				React.createElement("li", null, 
					React.createElement("h2", null, 
						React.createElement("span", null, "小明："), 
						React.createElement("span", null, "咱们一起去玩吧")
					), 
					React.createElement(Comment, null)
				)
			)
		)
	}
});
var CommentInput=React.createClass({displayName: "CommentInput",
	render:function(){
		return (
			React.createElement("input", {type: "text"})
		)
	}
});
var Comment=React.createClass({displayName: "Comment",
	render:function(){
		return (
			React.createElement("div", {className: "comment"}, 
				"好啊！"
			)
		)
	}
});
React.render(
	React.createElement(CommentBox, null),
	document.getElementById("container")
);