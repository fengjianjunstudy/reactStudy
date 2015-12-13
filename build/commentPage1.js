
var CommentBox=React.createClass({displayName: "CommentBox",
	getInitialState:function(){
		return {
			data:[]
		}
	},
	componentDidMount:function(){
		var self=this;
		function getData(){
			$.ajax({
				url:self.props.url,
				dataType:"json",
				success:function(data){
					self.setState({data:data})
				}
			});
		}
		setInterval(getData,2000)
		
	},
	render:function(){
		return (
			React.createElement("div", {className: "comment_box"}, 
				React.createElement(CommentList, {data: this.state.data}), 
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
	/*changeHandle:function(e){
		var self=this;
		var data={author:"fjj",text:e.target.value}
		$.ajax({
			url:"/api/comments",
			type:"POST",
			data:data,
			success:function(msg){

			}

		});
	},*/
	submitHandle:function(e){
		e.preventDefault();
		var author=this.refs.author.getDOMNode().value.trim();
		var text=this.refs.text.getDOMNode().value.trim();
		var self=this;
		var data={author:author,text:text}
		$.ajax({
			url:"/api/comments",
			type:"POST",
			data:data,
			success:function(msg){
				console.log(msg)
			}

		});
	},
	render:function(){
		return (
			React.createElement("form", {className: "commentForm", onSubmit: this.submitHandle}, 
        React.createElement("input", {type: "text", ref: "author", placeholder: "Your name"}), 
        React.createElement("input", {type: "text", ref: "text", placeholder: "Say something..."}), 
        React.createElement("input", {type: "submit", value: "Post"})
      )
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
	React.createElement(CommentBox, {url: "comments.json"}),
	document.getElementById("container")
);