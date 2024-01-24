import React from 'react';

function RecipeSteps(props) {
    // Create the ordered list items using map
    const recipeStepsItems = props.steps.map((step, index) => {
        return (
            // Return the desired HTML for each step
            <li key={index}>
                { step }
            </li>
        );
    });

    // return the HTML for the component
    // recipeStepsItems will be rendered as ol elements
    return (
        <ol>
            { recipeStepsItems }
        </ol>
    );
}

export default RecipeSteps;