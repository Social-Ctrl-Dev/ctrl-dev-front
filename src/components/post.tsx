import React, { Component } from 'react';
import axios from 'axios';

interface PostState {
    posts: any[];
    info: any;
}

export class Post extends Component<{}, PostState> {
    constructor(props: {}) {
        super(props);
    
        this.state = {
            posts: [],
            info: {},
        };        
    }

    componentDidMount() {
        this.getPosts();
        }
    getPosts(){
        axios
        .get('http://127.0.0.1:8000/api/v1/user/post')
        .then(res => {
            this.setState({ posts: res.data });
        })
        .catch(err => {
            console.log(err)
        })

    }
    
    render(){
        return(
            <h1>No data yet</h1>
        )
    }
}