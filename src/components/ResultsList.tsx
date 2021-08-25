import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import ReactHtmlParser from 'react-html-parser'; 



const ResultsList: React.FC = () => {
    const [term, setTerm ] = useState('');
    const { searchInput } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.results);


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        searchInput(term);
    }
    
    return (
        <div className="center-align">
            <form onSubmit={onSubmit}>
                <div className="input-field inline">
                    <label htmlFor="search_term">Search Term</label>

                    <input id="search_term" onChange={ e => setTerm(e.target.value)} value={term} type="text" className="validate"/>
                </div>
                <button><i className="small material-icons">search</i></button>
            </form>
            {error ?<h3>{error}</h3> : '' }
            {loading ?<h3>Loading..</h3> : '' }
            { !error && !loading && data.map((name, idx) => <div key={name}>{ ReactHtmlParser (name) }</div>)}
        </div>
    )
};

export default ResultsList;