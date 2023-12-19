import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { MdOutlineKeyboardBackspace as BackArrow } from 'react-icons/md';
import Loader from '../../components/Loader/Loader';
import { RootState } from '../../setup/redux/types/actionTypes';
import { getArticleDetail } from '../../setup/redux/actions/articleAction';
import { Article } from '../../models/Article';

interface ArticleDetailProps {
  articleDetail: Article
  getArticleDetail: (articleId: string) => void;
  loading: boolean;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ articleDetail, getArticleDetail, loading }) => {
  const { articleId } = useParams();
  const [descriptionParagraphs, setDescriptionParagraphs] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getArticleDetail(atob(articleId!));
  }, [getArticleDetail, articleId]);

  useEffect(() => {
    const paragraphs = [];
    if (articleDetail.description) {
      const sentences = articleDetail.description.split(/\.(?=\s)/);

      for (let i = 0; i < sentences.length; i += 5) {
        const paragraph = sentences.slice(i, i + 5).join('. ');
        paragraphs.push(paragraph);
      }
    } else {
      paragraphs.push(articleDetail.slug);
    }
    setDescriptionParagraphs(paragraphs);

  }, [articleDetail.description]);

  return (
    <div className="container mt-4 text-body-secondry">
      <Loader loading={loading} />

      <div className="w-100 text-start mb-3">
        <Button variant="secondary" onClick={() => navigate(-1)}>
          <BackArrow size={24} style={{ cursor: 'pointer' }} /> {'Back'}
        </Button>
      </div>

      {articleDetail.thumbnail_url ? (
        <img src={articleDetail.thumbnail_url} alt="Thumbnail" className="w-100" />
      ) : (
        <div className={'styles.noThumnail'}>{articleDetail.source}</div>
      )}

      <div className="p-4 bg-white">
        <h1 className="mb-4">{articleDetail.title}</h1>
        <div className="mt-4 text-start">
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {!articleDetail.description && (
            <a href={articleDetail.source_url} target="_blank" rel="noopener noreferrer">
              Read More ...
            </a>
          )}
        </div>

        <div className="mt-5 w-100">
          <div className="w-25 text-start">
            <p>
              <b>Author:</b> {articleDetail.author}
            </p>
            <p>
              <b>Publish Date:</b> {articleDetail.published_at}
            </p>
            <p>
              <b>Source: </b>
              <a href={articleDetail.source_url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                {articleDetail.source}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  articleDetail: state.articles.articleDetail,
  loading: state.ui.loading,
});

export default connect(mapStateToProps, { getArticleDetail })(ArticleDetail);
