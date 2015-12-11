var Comonent=React.createClass({displayName: "Comonent",
	render:function(){
		return (
			React.createElement("div", {className: "con"}
			)
		)
	}
});
React.render(
	React.createElement("h1", null, "hello world!"),
	document.getElementById("container")
);