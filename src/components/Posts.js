import axios from 'axios';
import {Button, Card, Row} from 'react-bootstrap'
import React from 'react';
import { Component } from 'react';
import { Router } from 'react-router-dom';
import { FullPost } from './FullPost';
export class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            info: {},
        };
    }

    componentDidMount() {
        this.getBlogPosts();
        }
    
    getBlogPosts(){
        axios
        .get('http://localhost:8000/posts/')
        .then(res => {
            this.setState({ posts: res.data.result });
        })
        .catch(err => {
            console.log(err)
        })

    }

    getFullPost(id){
        <Router.Link to="posts/:id">Landing Page</Router.Link>     
        
    }
    
    render(){
        return(
            <Row xs={1} md={2} className="g-4">
                {this.state.posts.map(item =>(
                
                    <Card key={item.id} bg="secondary" style={{ width: '18rem' }}>   
                        <Card.Img variant="top" src="https://picsum.photos/200" />
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.body.slice(0,70)}...</Card.Text>

                        
                            <Button variant="success" 
                                    href={'post/' + item.id}  
                            >
                                    Post
                            </Button>
                    
                        <Card.Footer >{item.user.name}</Card.Footer>
                    </Card>
                ))}
            </Row>
        )
    }
}