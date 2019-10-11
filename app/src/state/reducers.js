import * as types from './actionTypes';

// design the state of the apps - what slices (1 castleblack)

const initialValueCount = 0;

//create one reducer function per slice of state (3 last hearth)
export function countReducer (state= initialValueCount, action){
    switch(action.type) {
        case types.INCREMENT:
            return state + 2;

        default: 
        return state;
    }
}
 
//main axios reducer
const initialCharacter = [];
export function characterReducer (state= initialCharacter, action) {
    switch(action.type) {
        case types.ADD_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
            }
        default: 
            return state;
    }
}


//secondary reducers
// const initialSearchForm = '';

// export function searchReducer (state = initialSearchForm, action) {
//     switch(action.type) {
//         case types.SEARCH:
//             return {
//                 ...state,
//                 state: state.filter(character => character.name.toLowerCase().includes(action.payload)),
//             }
//         case types.ON_INPUT_CHANGE:
//             return {
//                 ...state,
//                 [action.payload.name]: action.payload.value,

//             };

//         default:
//             return state;
//     }
// }

// const initialSearchResult = [];
// export function searchResultReducer (state = initialSearchResult, action) {

//     switch(action.type) {
//         case types.SEARCH_RESULT:
//             return {
//                 state:state.concat(action.payload),

//             };

//         default:
//             return state;
//     }
// }

// export default function SearchForm({character}) {
  
//     const searchData = character;
  
//     const [search, setSearch] = useState();
//     const [searchResults, setSearchResults] = useState([]);
  
//     useEffect(() => {
//       const results = searchData.filter(e =>
//         // Needed to change searchData.name to lowercase with .toLowerCase()
//         // Otherwise, search queries will become caps-sensative 
//         // Need to fix problem with results not showing when using any capitalization
//         e.name.toLowerCase().includes(search)
//       );
//       setSearchResults(results);
//     }, [search]);
  
//     const handleChange = event => {
//       console.log(event.target.value)
//       setSearch(event.target.value);
//       // If searchbox is left empty, the searchResults array is cleared out
//       if (event.target.value="") {
//         setSearchResults([])
//       }
//     };
  