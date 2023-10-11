import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const RepoCard = ({ repo }) => {
    const truncateDescription = (description) => {
      if (description) {
        const words = description.split(' ');
        if (words.length > 30) {
          return words.slice(0, 30).join(' ') + '...';
        }
        return description;
      }
      return '';
    };
  
    return (
      <div style={{
        width: '200px',
        margin: '10px',
        marginBottom: '20px', 
        background: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        border: '1px solid #ccc',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <Card>
          <CardImg top width="100%" src={repo.owner.avatar_url} alt={repo.name} style={{ borderRadius: '8px 8px 0 0' }} />
          <CardBody style={{
            fontSize: '15px',
            color: 'black',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <CardTitle style={{ margin: 0 }}>{repo.name}</CardTitle>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid #ccc', margin: '10px 0' }}>
              <i className="fa fa-star" style={{ color: 'gold', margin: '0 4px' }}></i>
              <span style={{ margin: 0 }}>{repo.stargazers_count}</span>
            </div>
            <CardText style={{ color: 'black', margin: '0 auto', borderTop: '1px solid #ccc', margin: '10px 0' }}>
              {truncateDescription(repo.description)}
            </CardText>
            <hr style={{ borderTop: '1px solid #ccc', margin: '10px 0' }} />
            <CardText style={{ color: 'black', margin: 0, textAlign: 'center' }}>
              Language: {repo.language}
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  };
  

export default RepoCard;
