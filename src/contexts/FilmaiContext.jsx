import { createContext, useReducer, useEffect } from "react";

const FilmaiContext = createContext();

const FilmaiActionTypes = {
    get: 'get_all_filmai',
    add: 'add_new_filmas'
}

const reducer = (state, action) => {
    switch (action.type) {
        case FilmaiActionTypes.get:
            return action.data;
        case FilmaiActionTypes.add:
            fetch(`http://localhost:8080/filmai`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(action.data)
            })
            return [...state, action.data]
        default:
            return state
    }
}

const FilmaiProvider = ({ children }) => {

    const [filmai, setFilmai] = useReducer(reducer, []);

    useEffect(() => {
        fetch(`http://localhost:8080/filmai`)
            .then(res => res.json())
            .then(data => setFilmai({
                type: FilmaiActionTypes.get,
                data: data
            }));
    }, []);

    return (
        <FilmaiContext.Provider
            value={{
                filmai,
                FilmaiActionTypes,
                setFilmai
            }}
        >
            {children}
        </FilmaiContext.Provider>
    )
}

export { FilmaiProvider };
export default FilmaiContext;