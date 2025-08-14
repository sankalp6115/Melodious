import { showTooltip } from "./toolTip.js";

//Searching Implementation

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // clear previous timer
    timer = setTimeout(() => {
      func.apply(this, args); // preserve context and arguments
    }, delay);
  };
}

const searchBar = document.getElementById("search");
const debouncedSearch = debounce(searchSongs, 400);
searchBar.addEventListener("input", debouncedSearch);

function searchSongs() {
  const rows = document.querySelectorAll("#songList tbody tr");
  const fuseOptions = {
    shouldSort: true, 
    // isCaseSensitive: false,
    // includeScore: false,
    // ignoreDiacritics: false,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    threshold: 0.4,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: ["title", "artist", "album", "genre"],
  };

  const fuse = new Fuse(songs, fuseOptions);

  // Change the pattern
  const searchPattern = searchBar.value;
  let result = searchPattern === "" ? [] : fuse.search(searchPattern);
  console.log("Searching");
  console.log(result);
    
  rows.forEach((row) => {
      const title = row.children[2].textContent;
      const matchFound = result.some((res) => res.item.title === title);

      //scroll handling
      if(result.length > 0){
        const firstTitle = result[0].item.title;

        for(let row of rows){
          const titleText = row.children[2].textContent.trim();
          if(titleText === firstTitle){
            row.scrollIntoView({
              behavior : "smooth",
              block : "center"
            });
            break;
          }
        }
      }
      showTooltip(`Found ${result.length} matching results!`)
      if(matchFound){row.classList.add("searchActive")}
      else{row.classList.remove("searchActive");}
    });
}
