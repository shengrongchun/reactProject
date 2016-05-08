    var TodoApp = React.createClass({

        getInitialState: function() {
            return {text: ''};
        },
        onChange: function(e) {
            this.setState({text:e.target.value});
        },
        render:function() {
            return <div>
                        <h3>这是Todo小例子</h3>
                        <form>
                            <input onChange={this.onChange} value={this.state.text}/>
                            <button>ADD{this.state.text}</button>
                        </form>
                   </div>;
        }


    });

    ReactDOM.render(<TodoApp />,document.getElementById('container'));