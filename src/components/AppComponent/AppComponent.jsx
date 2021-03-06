import React from 'react'
import Header from '../HeaderComponent/HeaderComponent.jsx'
import Project from '../ProjectComponent/ProjectComponent.jsx'
import {Grid, Row, Col} from 'react-bootstrap'

export default class AppComponent extends React.Component {
    render() {
        let {projects, github, linkedin, email} = this.props.info;

        return (
            <Grid className="site-container" fluid={true} >
                <Row className="SysMargin">
                    <Col xs={12}
                         sm={12}
                         md={12} >
                        <div>
                            <Header firstName="Sang"
                                    lastName="Mercado"
                                    firstNameColor="lightBlue"
                                    lastNameColor="black"
                                    github={github}
                                    linkedin={linkedin}
                                    email={email} />
                        </div>
                    </Col>
                </Row>
                <Row className="SysMargin">
                    <Col xs={12}
                         sm={12}
                         md={12}
                         className="center-div">

                        <Project projects={projects} />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
