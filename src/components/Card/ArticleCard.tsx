import React from 'react';
import { Author, CardBody, CardFooter, CardImage, CardImageCaption, Stats, StyledCard } from './styled';
import { Link } from 'react-router-dom';

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


export const truncateTitle = (title: string, maxLength: number) => {
  return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
};


const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
  <StyledCard>
    <CardImage>
      {article.thumbnail_url && <img src={article.thumbnail_url} alt={article.title} />}
      <CardImageCaption>{article.source}</CardImageCaption>
    </CardImage>
    <CardBody>
      <Link to={`/articles/${btoa(article.id)}`} className={`text-decoration-none`}>
        <h3>{article.title ? truncateTitle(article.title, 50) : ''}</h3>
      </Link>
      <p>{article.slug ? truncateTitle(article.slug, 100) : ''}</p>
    </CardBody>
    <CardFooter>
      <Author>{article.author}</Author>
      <Stats>Published at: {article.published_at}</Stats>
    </CardFooter>
  </StyledCard>
);

export default ArticleCard;
