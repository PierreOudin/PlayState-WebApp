import React from "react";

class GameCard extends React.Component {
    constructor(){
        super();
        this.state = {isHovered: false};
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover(){
        this.setState(prevState => ({isHovered: !prevState.isHovered}));
    }
}