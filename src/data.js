// SortBy

export const sortData = (data, sortBy, sortOrder) => {

const rickandmorty = data.results;
const sortedCharacters = rickandmorty.sort(function(a, b){
    if (a[sortBy] > b[sortBy]) { 
        return 1; 
    }
    if (a[sortBy] < b[sortBy]) {
        return -1;
    }
});
if (sortOrder === 'nameZA') {
    return sortedCharacters.reverse();
}
return sortedCharacters;
}
