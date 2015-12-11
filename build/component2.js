var Comonent=React.createClass({displayName: "Comonent",
	getInitialState:function(){
		return {
			value:"xiaohua"
		}
	},
	render:function(){
		return (
			React.createElement("div", {className: "con"}, 
				this.state.value
			)
		)
	}
});
React.render(
	React.createElement(Comonent, null),
	document.getElementById("container")
);