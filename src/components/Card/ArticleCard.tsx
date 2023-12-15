// components/ArticleCard.tsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    description: string;
    thumbnail_url?: string;
    source: string;
    source_url: string;
    published_at: string;
    author?: string;
    slug: string;
  };
}

const StyledCard = styled(Card)`
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Thumbnail = styled(Card.Img)`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const NoThumbnail = styled.div`
  background-color: #f5f5f5;
  text-align: center;
  padding: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardBody = styled(Card.Body)`
  padding: 20px;
`;

const CardTitle = styled(Card.Title)`
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

const CardText = styled(Card.Text)`
  color: #555;
  margin-bottom: 15px;
`;

const CardFooter = styled(Card.Footer)`
  background-color: #f5f5f5;
  padding: 10px 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const SourceLink = styled.a`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

const truncateTitle = (title: string, maxLength: number) => {
  return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
};


const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
  <StyledCard>
    {article.thumbnail_url ? <Thumbnail variant="top" src={article.thumbnail_url} /> : <NoThumbnail>{article.source}</NoThumbnail>}
    <CardBody>
      <CardTitle>
        <Link to={`/article/${btoa(article.id)}`} className={`text-decoration-none`}>
          {truncateTitle(article.title, 100)}
        </Link>
      </CardTitle>
      <CardText>{truncateTitle(article.slug, 120)}</CardText>
    </CardBody>
    <CardFooter>
      <b>Source:</b>{' '}
      <SourceLink href={article.source_url} target="_blank" rel="noopener noreferrer">
        {article.source}
      </SourceLink>
    </CardFooter>
  </StyledCard>
);

export default ArticleCard;
