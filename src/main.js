var TimeMessageTag = React.createClass({
    render: function() {
        var elapsed = Math.round(this.props.elapsed / 100);
        var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0');
        var message = this.props.message + seconds + ' seconds';
        
        return React.DOM.p(null, message);
    }
});

var TimeMessageTagFactory = React.createFactory(TimeMessageTag);

var start = new Date().getTime();

setInterval(function(){
   ReactDOM.render(
       TimeMessageTagFactory({message: 'Application has run for: ', elapsed: new Date().getTime() - start}), document.getElementById('timeelapsed')
   );
});


ReactDOM.render(
  <h1>Hello, world from Phu!</h1>,
  document.getElementById('example')
);

var Counter = React.createClass({
    getInitialState: function () {
        return { clickCount: 0};
    },
    handleClick: function () {
        this.setState(function (state){
            return {clickCount: state.clickCount + 1};
        });
    },
    render: function () {
        return (<h2 onClick={this.handleClick}>{this.props.clickMessage} {this.props.counterMessage} {this.state.clickCount}</h2>);
    }
});

ReactDOM.render(
    <Counter clickMessage='Click me please!' counterMessage='Number (#) of click(s): '/>,
    document.getElementById('counter')
);














