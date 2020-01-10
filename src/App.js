import React, { Component } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";
import { render } from "react-dom";

class App extends Component {
    //setting this.state.cards to the cards json array
    state = {
        cards,
        score: 0,
        hightscore: 0
    };
}

gameOver = () => {
    if (this.state.score > this.state.hightscore) {
        this.setState({ hightscore: this.state.score }, function () {
            console.log(this.state.hightscore);
        });
        this.state.cards.forEach(cars => {
            cards.count = 0;
        });
        alert("Game Over :( \nscore: ${this.state.score");
        this.setState({ score: 0 });
        return true;
    }

    clickCount = id => {
        this.state.cards.find((o, i) => {
            if (o.id === id) {
                if (cards[i].count === 0) {
                    cards[i].count = cards[i].count + 1;
                    this.setState({ score: this.state.score + 1 }, function () {
                        console.log(this.state.score);
                    });
                    this.state.cards.sort(() => Math.random() - 0.5)
                    return true;
                } else {
                    this.gameOver();
                }
            }
        });
    }

    //Map over this.state.cards and render a cardCard component for each card object
    render() {
        return (
            <Wrapper>
                <Header score={this.state.score} hightscore={this.state.hightscore}>Clicky Game</Header>
                {this.state.card.map(card => (
                    <Card
                        clickCount={this.clickCount}
                        id={card.id}
                        key={card.id}
                        image={card.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;
