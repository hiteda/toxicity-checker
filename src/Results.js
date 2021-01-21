import React from 'react';
import './index.css';

class Results extends React.Component {
    constructor(props) {
        super(props);
        console.log("Props: ",props)
        this.state = {item: null};
    }

    setValue(value) {
        this.setState({item: value});
    }

    render() {
        if (this.state.item == null) {
            return null;
        }
        const itemValue = this.state.item.trim();
        const itemLower = itemValue.toLowerCase();
        let itemHash = 0;
        for (var i = 0; i < itemLower.length; ++i) {
            itemHash += itemLower.charCodeAt(i);
        }
        itemHash = ((itemHash * 34) % 100) + 1;

        return (
            <div className="jumbotron">
                <h1>{itemValue.toUpperCase()}</h1>
                <h2>Toxicity Rating: {itemHash}</h2>
                <p>{this.getItemDescription(itemValue, itemHash)}</p>
            </div>
        );
    }

    getItemDescription(itemValue, itemHash) {
        const itemTitle = this.toTitleCase(itemValue);
        let result = "";

        if (itemHash < 21) {
            result = `${itemTitle} has a low toxicity level and is safe to ingest, rub into your eyes, pour on your body, or even cleanse your chakra. Native Americans would often use ${itemValue} for its medicinal qualities.`;
        }
        else if (itemHash < 51) {
            result = `${itemTitle} has a relatively low toxicity, but should be avoided in large quantities, or avoided altogether if you are cleansing. Your body can handle a little ${itemValue} at a time, but don't go overboard!`
        }
        else if (itemHash < 76) {
            result = `${itemTitle} has a relatively high toxicity level. Make sure and use gloves and eye protection when handling ${itemValue}, as prolonged exposure may cause burning, ulcers, or gluten sensitivity. Due to its mildly caustic nature, ${itemValue} was sometimes used by Native Americans to clean their toilets.`
        }
        else {
            result = `${itemTitle} is highly toxic! Science has shown that people who come into contact with ${itemValue} are 50% more likely to die! Just looking at ${itemValue} can cause such extreme reactions as burning eyeballs, hernias, and sudden fruit allergies.`
        }

        return result;
    }

    toTitleCase(item) {
        return item.replace(/\w\S*/g, function(str) { return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()});
    }
}

export default Results;