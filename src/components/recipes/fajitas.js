const Fajitas = () => {
  const ingredients = ["1/2 cup olive oil", "1/4 cup lime juice", "tsp garlic salt", "tsp oregano", "tsp cumin", "tsp garlic powder", "1/2 tsp chili powder", "1/2 tsp paprika", "1/2 tsp red pepper flakes", "onion, sliced", "green bell pepper, sliced"];
  const fajitaIngredients = ingredients.map((ingredient) => <li>{ingredient}</li>);

  return <ul>{fajitaIngredients}</ul>;
};

export default Fajitas;
