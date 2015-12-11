var Comonent=React.createClass({
	getInitialState:function(){
		return {
			value:"xiaohua"
		}
	},
	render:function(){
		return (
			<div className="con">
				{this.state.value}
			</div>
		)
	}
});
React.render(
	<Comonent />,
	document.getElementById("container")
);