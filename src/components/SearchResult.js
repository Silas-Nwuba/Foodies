import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import style from "../style/searchResult.module.css";
import SkeletonLoadingSpinner from "./SkeletonLoadingSpinner";
import skeletonStyle from "../style/skeleton.module.css";
const SearchResult = ({ searchQuery, children }) => {
  // useEffect(() => {
  //   document.title = "Foodies | search";
  //   return () => {
  //     document.title = "Foodies";
  //   };
  // });
  return (
    <>
      {!searchQuery && (
        <div className={style.searchResult}>
          <div className={style.header}>
            <h2>Search Result - Chicken</h2>
          </div>
          {children}
        </div>
      )}
    </>
  );
};

// const SearchContent = () => {
//   return (
//     <div className={style.searchContent}>
//       <div className={style.searchDetail}>
//         <img src="\image\bbq chicken.jpeg" alt="search" />
//         <div>
//           <p>chicken</p>
//           <h2>BBQ Chicken</h2>
//           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//             <div>
//               {Array.from({ length: 5 }, (_, i) => (
//                 <FaStar
//                   key={i}
//                   style={{ color: "#ff922b", fontSize: "14px" }}
//                 />
//               ))}
//             </div>
//             <span style={{ color: "#101010", fontSize: 12 }}>20 Ratings</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
export default SearchResult;
