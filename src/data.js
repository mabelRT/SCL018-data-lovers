// SortBy

export const sortData = (data, sortBy, sortOrder) => {

    const rickandmorty = data.results;
    const sortedCharacters = rickandmorty.sort((a, b) => {
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


//filtrar especie
export const filterDataSpecies = (results, species) => {
  
    const filterSpecie = results.filter(especie => especie.species === species);
    return filterSpecie;
  };

  //devolver los resultados a los anteriores
 //filtrar estado
  export const filterDataStatus = (results, status) => {
      
      const filterStatus = results.filter(estado => estado.status === status);
      return filterStatus;
  };