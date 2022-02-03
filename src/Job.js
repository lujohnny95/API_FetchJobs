import React, { useState } from 'react';
import { Card, Badge, Button, Collapse } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
 
const Job = ({ job }) => {
    const [open, setOpen] = useState(false);

    return (
        <Card className='mb-3'>
            <Card.body>
                <div className='d-flex justify-content-between'>
                    <div>
                        <Card.title>
                            {job.title} - <span className='text-muted font-weight-light'>{job.company}</span>
                        </Card.title>
                        <Card.subtitle className="text-muted mb-2">
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.subtitle>
                        <Badge variant="secondary" className="mr-2">{job.type}</Badge>
                        <Badge variant="secondary">{job.location}</Badge>
                    </div>
                    <img className='d-none d-md-block' height="50" src={job.company_logo} alt={job.company}/>
                </div>
                <Card.text>
                    <Button onClick={() => setOpen(prevOpen => !prevOpen)} variant="primary">View Details</Button>
                </Card.text>
                <Collapse in={open}>
                    <div className='mt-4'>
                        <ReactMarkdown source={job.description} />
                    </div>
                </Collapse>
            </Card.body>
            {job.title}
        </Card>
    )
};
 
export default Job;
