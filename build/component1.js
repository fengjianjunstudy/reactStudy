var Comonent=React.createClass({displayName: "Comonent",
	render:function(){
		return (
			React.createElement("div", {className: "con"}, 
			this.props.name
			)
		)
	}
});
React.render(
	React.createElement(Comonent, {name: "(*^__^*) 嘻嘻……"}),
	document.getElementById("container")
);