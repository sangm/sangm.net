import React from 'react'
import {Well, Panel, Modal, ModalTrigger, Row, Col} from 'react-bootstrap'
import {FlatButton, FontIcon, Toolbar, ToolbarGroup, IconButton} from 'material-ui'

import _ from 'lodash'

const MyModal = React.createClass({
    getIcon(name) {
        if (name === "live")
            name = "laptop";
        return "fa fa-" + name.toLowerCase();
    },

    render() {
        let projects = this.props.projects.map(project => {
            let icons = ["github", "live", "youtube"];
            icons = icons.map(icon => {
                    let className = `${this.getIcon(icon)} ${project[icon] == null ? "disabled" : null }`
                    return (
                        <IconButton iconClassName={className} 
                                    href={project[icon] ? project[icon] : "#"}
                                    linkButton={true}
                                    tooltip={project[icon] == null ? 'Not Available' : icon}/>
                    )
                });

            return (
                <li>
                    <Panel>
                        <Toolbar className="toolbar">
                            <ToolbarGroup key={0} 
                                          float="left">
                                <FlatButton label={project.title} 
                                className="project-desc"/>
                            </ToolbarGroup>
                            <ToolbarGroup key={1} float="right">
                                {icons}
                            </ToolbarGroup>
                        </Toolbar>
                    </Panel>
                </li>
            )
        })
        return (
            <Modal {...this.props} bsStyle='primary' animation={true}>
                <div className='modal-body project-modal'>
                    <ul className="list-unstyled project-list">
                        {projects}
                    </ul>
                </div>
            </Modal>
        );
    }
});

export default React.createClass({
    render() {
        return (
            <div className="project">
                <h1 className={this.props.mainHeader}>
                    Projects 
                    <ModalTrigger modal={<MyModal {...this.props} />}>
                        <span className={'second-header'}> 
                            <FlatButton className={this.props.secondHeader}
                                        label="List of Projects" />     
                        </span>
                    </ModalTrigger>
                </h1>
            </div>
        )
    }
})