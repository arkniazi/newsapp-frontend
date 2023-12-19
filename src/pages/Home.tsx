import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllArticles, getArticleMeta } from '../setup/redux/actions/articleAction';
import Loader from '../components/Loader/Loader';
import ArticleCard from '../components/Card/ArticleCard';
import { makeLabelOptions, makeOptions } from '../utils/helpers';
import { Article } from '../models/Article';
import { Pagination as PaginationModel } from '../models/Pagination';
import { Category } from '../models/Category';
import { Source } from '../models/Source';
import { Author } from '../models/Author';
import SearchBar from '../components/SearchBar/SeatchBar';
import ArticleFilter from '../components/ArticleFilter/ArticleFilter';
import { ArticleFilterValues } from '../setup/redux/types/actionTypes';
import { PaginationLink, PaginationStyled } from './styled';
import Pagination from '../components/Paginate/Pagination';

interface HomeProps {
  articles: Article[];
  pagination: PaginationModel;
  categories: Category[];
  sources: Source[];
  authors: Author[];
  isAuthorized: boolean;
  loading: boolean;
  getAllArticles: (params: any) => Promise<boolean | undefined>;
  getArticleMeta: (values: any) => Promise<boolean | undefined>;
}

const Home: React.FC<HomeProps> = ({
  articles,
  pagination,
  categories,
  sources,
  authors,
  getAllArticles,
  getArticleMeta,
  isAuthorized,
  loading,
}) => {
  const { currentPage, itemsPerPage, lastPage } = pagination || {currentPage: 1, itemsPerPage:0};
  const [searchTerm, setSearchTerm] = useState('');
  const [delayedSearch, setDelayedSearch] = useState<NodeJS.Timeout | null>(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [articleFilters, setArticleFilters] = useState<ArticleFilterValues | null>(null);
  const authorOptions = makeLabelOptions(authors);
  const categoryOptions = makeOptions(categories);
  const sourceOptions = makeOptions(sources);

  useEffect(() => {
    getAllArticles(articleFilters);
  }, [articleFilters]);

  useEffect(() => {
    getAllArticles({ page: currentPage });
    getArticleMeta({type: 'all'});
  }, [getAllArticles, getArticleMeta, isAuthorized]);

  const handlePageClick = ({ selected }: { selected: number }) => {
    getAllArticles({ page: selected + 1, per_page: itemsPerPage });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (delayedSearch) {
      clearTimeout(delayedSearch);
    }

    if (term.length > 3 || term.length === 0) {
      setDelayedSearch(
        setTimeout(() => {
          getAllArticles({ page: 1, keyword: term });
        }, 1000)
      );
    }
  };

  const initialArticleFilters: ArticleFilterValues = {
    category_id: null,
    source_id: null,
    author_name: null,
    date: '',
  };

  return (
    <>
      <Loader loading={loading} />
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} setShowFilterModal={setShowFilterModal} />

      <div className="container d-flex flex-wrap justify-content-between mb-5">
        <div className="row">
          {articles?.length > 0 ? (
            articles.map((article) => (
              <div className="col-lg-4 col-md-6 col-sm-12">
                <ArticleCard key={article.id} article={article} />
              </div>
            ))
          ) : (
            <h3 className="mt-5 w-100 text-center text-muted">No articles available</h3>
          )}
        </div>
      </div>
      {lastPage > 1 && <Pagination lastPage={lastPage} handlePageClick={handlePageClick} currentPage={currentPage} />}

      <ArticleFilter
        show={showFilterModal}
        onHide={() => setShowFilterModal(false)}
        categories={categoryOptions || []}
        sources={sourceOptions || []}
        authors={authorOptions || []}
        filterValues={articleFilters || initialArticleFilters}
        onSubmit={(values) => {
          setArticleFilters(values);
          setShowFilterModal(false);
        }}
      />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  articles: state.articles?.articlesList,
  pagination: state.articles?.pagination,
  categories: state.articles?.categories,
  sources: state.articles?.sources,
  authors: state.articles?.authors,
  isAuthorized: state.auth.isAuthenticated,
  loading: state.ui.loading,
});

export default connect(mapStateToProps, {
  getAllArticles,
  getArticleMeta,
})(Home);
