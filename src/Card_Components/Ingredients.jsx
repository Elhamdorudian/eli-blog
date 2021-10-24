import "./EachCard.css";
const Ingredients = ({allItems, id}) => {

    const renderIngredients = item => <li>{item.name}: {item.quantity}</li>;
    const renderInstructions = item => <li>{item.explanation}</li>;

  

    return ( 
        <>

            <div className="holder-ingredients">
                <h4 className="title-ingredients">Ingredients</h4>
                <ul className="ingredients">{allItems[id].ingredients.map(renderIngredients)}</ul>
                <h4 className="title-instructions">Instruction</h4>
                <ol className="instructions">{allItems[id].instructions.map(renderInstructions)}</ol>
            </div>
        </>
     );

}
 
export default Ingredients;