import React from 'react';
import Nav from '../components/nav.js';
import { Container, Header, Card, Rating, Icon, Grid, Segment } from 'semantic-ui-react';

const GamesPage = () => {
    return (
        <React.Fragment>
        <Nav></Nav>
        <Container>
            <Header>Games</Header>
            <Grid columns={3}>
            <Grid.Column>
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>Tic-Tac-Toe</Card.Header>
                        <Card.Meta>3 in a row</Card.Meta>
                        <Grid columns={2}>
                            <Grid.Row>
                                <Grid.Column>
                                <Rating icon='star' defaultRating={2} maxRating={5} />
                                </Grid.Column>
                                <Grid.Column>
                                    <Icon name='exclamation'></Icon>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
    
                    </Card.Content>
                </Card>
            </Card.Group>
            </Grid.Column>

            <Grid.Column>
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>Checkers</Card.Header>
                        <Card.Meta>Jumping Race</Card.Meta>
                        <Grid columns={2}>
                            <Grid.Row>
                                <Grid.Column>
                                <Rating icon='star' defaultRating={3} maxRating={5} />
                                </Grid.Column>
                                <Grid.Column>
                                    <Icon name='exclamation'></Icon>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
    
                    </Card.Content>
                </Card>
            </Card.Group>
            </Grid.Column>

            <Grid.Column>
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>Snakes & Ladders</Card.Header>
                        <Card.Meta>Snake!</Card.Meta>
                        <Grid columns={2}>
                            <Grid.Row>
                                <Grid.Column>
                                <Rating icon='star' defaultRating={4} maxRating={5} />
                                </Grid.Column>
                                <Grid.Column>
                                    <Icon name='exclamation'></Icon>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
    
                    </Card.Content>
                </Card>
            </Card.Group>
            </Grid.Column>

            <Grid.Column>
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>Yahtzee</Card.Header>
                        <Card.Meta>Feeling Lucky?</Card.Meta>
                        <Grid columns={2}>
                            <Grid.Row>
                                <Grid.Column>
                                <Rating icon='star' defaultRating={5} maxRating={5} />
                                </Grid.Column>
                                <Grid.Column>
                                    <Icon name='exclamation'></Icon>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
    
                    </Card.Content>
                </Card>
            </Card.Group>
            </Grid.Column>
            </Grid>
        </Container>
        </React.Fragment>
    )
}

export default GamesPage;