import { Link } from "react-router-dom"
import { SingleArticleCard } from "./SingleArticleCard"

export const ArticlesList = ({ articlesList}) => {
  
    return (
        <>
        <div className="articlesList">
            <h2>All Articles</h2>
             <div>
                {articlesList.map((article) => {
                return (
                     <div key={article.articles_id}>
                        <Link to={`/article/${article.articles_id}`}>
                        <h3>{article.title}</h3>
                        <p>{article.author}</p>
                        <p>Published: {article.created_at}</p>
                        {article.article_img_url && <img src={article.article_img_url} alt={article.title} />}
                        </Link>
                    </div>
                    );
                 })}
            </div>
        </div>
        </>
        )
    }
