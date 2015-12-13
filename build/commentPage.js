
var data = [
  {author: "xiaohua", text: "nihaopiaoliang"},
  {author: "xiaoming", text: "nihaoshuai"}
];
var CommentBox=React.createClass({displayName: "CommentBox",
	render:function(){
		console.log(this.props.data)
		return (
			React.createElement("div", {className: "comment_box"}, 
				React.createElement(CommentList, {data: this.props.data}), 
				React.createElement(CommentInput, null)
			)
		)
	}
})
var CommentList=React.createClass({displayName: "CommentList",
	dataHandle:function(){
		
		var list=this.props.data.map(function(obj){
			return (
				React.createElement(Comment, {name: obj.author}, 
				obj.text
				)
			)
		});
		return list;
	},
	render:function(){
		
		return (
			React.createElement("div", {className: "list", data: this.props.data}, 
				this.dataHandle()
			)
		)
	}
});
var CommentInput=React.createClass({displayName: "CommentInput",
	getInitialState:function(){
		return {
			value:"xiaoming"
		}
	},
	changeHandle:function(e){
		this.setState({value:e.target.value});
	},
	render:function(){
		return (
			React.createElement("input", {type: "text", value: this.state.value, onChange: this.changeHandle}) 
		)
	}
});
var Comment=React.createClass({displayName: "Comment",
	render:function(){
		return (
			React.createElement("div", {className: "comment"}, 
				React.createElement("h2", {className: "comment_title"}, this.props.name), 
				this.props.children
			)
		)
	}
});
React.render(
	React.createElement(CommentBox, {data: data}),
	document.getElementById("container")
);