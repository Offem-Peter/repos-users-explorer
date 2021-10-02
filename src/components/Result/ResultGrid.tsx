import ResultCard from "./ResultCard";
import "./ResultGrid.css";

type ResultGridProp = {
    data: object[]
}

const ResultGrid = ({ data }: ResultGridProp) => {

    return (
        <div className="result-grid">
            {data.map((item: any) => <ResultCard key={item.id} data={item}/> )}
        </div>
    )
}

export default ResultGrid;