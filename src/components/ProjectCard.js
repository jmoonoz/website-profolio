import React from 'react';
import { Button, Card } from "react-bootstrap";

function ProjectCard({ projectImage, name, description, demo,tools, git }) {
    return (
        <Card>
            <Card.Img varient="top" src={projectImage} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <p className='project-tools'>{tools}</p>
                <div className='btn-row'>
                    <Button variant="outline-danger" className="styleButton"  href={demo} target="_blank">Demo</Button>
                    <Button variant="outline-danger" href={git} target="_blank">Git Repo</Button>
                </div>
            </Card.Body>

        </Card>
    )
}

export default ProjectCard