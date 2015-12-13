var converter = new Showdown.converter();
var data = [
  {author: "xiaohua", text: "nihaopiaoliang"},
  {author: "xiaoming", text: "nihaoshuai"}
];
var CommentBox=React.createClass({
	render:function(){
		console.log(this.props.data)
		return (
			<div className="comment_box">
				<CommentList data={this.props.data} />
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
	changeHandle:function(e){
		this.setState({value:e.target.value});
	},
	render:function(){
		return (
			<input type="text" value={this.state.value} onChange={this.changeHandle}/> 
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
	<CommentBox  data={data}/>,
	document.getElementById("container")
);