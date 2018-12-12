import React, { Fragment } from 'react';

const StoryTell = {
    T1:
    {
        Question: "Bonjour, ça va ?",
        Reponses: [{
            phrase: "Oui et toi ? ",
            Target : "T2"
        },
        {
            phrase: "Non",
            Target : "T3"
        }],
    },
    T2:
    {
        Question: "Tranquillou ?",
        Reponses: [{
            phrase: "Oke ",
            Target : "T1"
        },
        {
            phrase: "Mh",
            Target : "T3"
        }],
    },
    T3:
    {
        Question: "Wesh ?",
        Reponses: [{
            phrase: "OAfeke ",
            Target : "T1"
        },
        {
            phrase: "MGhtyh",
            Target : "T2"
        }],
    }
}

class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: "T1"
        };
    }

    changeStep (reponse) {
        this.setState({step: reponse.Target})
    }

    render() {
        console.log(this.props)
        return (
            <Fragment>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>{ StoryTell[this.state.step].Question }</div>
                </div>
                <div>
                    {
                        StoryTell[this.state.step].Reponses.map( reponse => (
                            <button onClick={ () => this.changeStep(reponse) } key={reponse.phrase}>{reponse.phrase}</button>
                        ))
                    }
                </div>
            </Fragment>
        );
    }
}

export default Story;
