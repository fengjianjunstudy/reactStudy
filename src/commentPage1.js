
var CommentBox=React.createClass({
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
			<div className="comment_box">
				<CommentList data={this.state.data} />
				<CommentInput />
			</div>
		)
	}
})
var CommentList=React.createClass({
	dataHandle:function(){
		
		var list=this.props.data.map(function(obj){
			return (
				<Comment name={obj.author}>
				{obj.text}
				</Comment>
			)
		});
		return list;
	},
	render:function(){
		
		return (
			<div className="list" data={this.props.data}>
				{this.dataHandle()}
			</div>
		)
	}
});
var CommentInput=React.createClass({
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
			<form className="commentForm" onSubmit={this.submitHandle}>
        <input type="text" ref="author" placeholder="Your name" />
        <input type="text" ref="text" placeholder="Say something..." />
        <input type="submit" value="Post" />
      </form>
		)
	}
});
var Comment=React.createClass({
	render:function(){
		return (
			<div className="comment">
				<h2 className="comment_title">{this.props.name}</h2>
				{this.props.children}
			</div>
		)
	}
});
React.render(
	<CommentBox  url="comments.json"/>,
	document.getElementById("container")
);