import "./ResultCard.css";

type ResultCardProp = {
    data: any,
}

const ResultCard = ({ data }: ResultCardProp) => {
    return (
        <div className="result-card">
            <a target="__blank" href={data.owner.html_url}>
            <img className="avatar-image" src={data.owner.avatar_url} alt={data.full_name} loading="lazy"/>
            </a>
            <div className="body">
                <p>User: <a target="__blank" href={data.owner.html_url}>{data.owner.login}</a></p>
                <p>Repo: <a target="__blank" href={data.html_url}>{data.full_name}</a></p>
                <p>Fork: <a target="__blank" href={data.html_url}>{data.forks_count}</a></p>
                <p>Open-issues: <a target="__blank" href={data.html_url}>{data.open_issues_count}</a></p>
                <p>Star: <a target="__blank" href={data.html_url}>{data.stargazers_count}</a></p>
            </div>
            
        </div>
    )
}

export default ResultCard;
