import React, { Component } from 'react';
import axios from 'axios';

class Beers extends Component {
    constructor() {
        super();
        this.state = {
            beers: [],
        };
    }

    loadData = () => {
        const url = 'https://api.punkapi.com/v2/beers';

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
            },
        };

        axios
            .get(url, axiosConfig)
            .then((response) => {
                this.setState({ beers: response.data }, () => {
                    console.log('Beers...', this.state.beers);
                });
            })
            .catch((err) => console.log(err));
    };

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div>
                {this.state.beers.map((beer, idx) => {
                    return (
                        <div
                            key={beer.id}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                marginTop: '30px',
                            }}
                        >
                            <div style={{ height: '300px', width: '200px' }}>
                                <img
                                    src={beer.image_url}
                                    style={{ height: '230px', width: '120px' }}
                                    alt=''
                                />
                            </div>
                            <div style={{ width: '800px' }}>
                                <h1
                                    id='name'
                                    style={{ fontFamily: 'permanent marker' }}
                                >
                                    {beer.name}
                                </h1>

                                <h3>
                                    <span style={{ fontWeight: 'bold' }}>
                                        Description:
                                    </span>{' '}
                                    {beer.description}
                                </h3>
                                <h3>Tips: {beer.brewers_tips}</h3>
                                <ul>
                                    <span style={{ fontWeight: 'bold' }}>
                                        Pair With:
                                    </span>
                                    {beer.food_pairing.map((item, idx) => {
                                        return <li key={idx}>{item}</li>;
                                    })}
                                </ul>

                                <hr />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Beers;