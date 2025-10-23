// import React from "react";


// const SearchBar = ({ onSearch }) => {
//   const [city, setCity] = React.useState("");
//     const handleInputChange = (e) => {
//         setCity(e.target.value);
//     };

//     const handleSearch = () => {
//         if (city.trim() !== "") {
//             onSearch(city);
//             setCity("");
//         }
//     };  
//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             handleSearch();
//         }       

//     };

//     return (    
//         <div className="search-bar">
//             <input
//                 type="text"
//                 value={city}    
//                 onChange={handleInputChange}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Enter city name"   
//                 className="search-input"
//             />
//             <button onClick={handleSearch} className="search-button">Search</button>
//         </div>    
//     );
// }
// export default SearchBar;