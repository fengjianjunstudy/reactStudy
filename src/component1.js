var Comonent=React.createClass({
	render:function(){
		return (
			<div className="con">
			{this.props.name}
			</div>
		)
	}
});
React.render(
	<Comonent name="(*^__^*) 嘻嘻……"/>,
	document.getElementById("container")
);