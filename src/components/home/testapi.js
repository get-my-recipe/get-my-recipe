import React, { Component } from "react";
import axios from "axios";
import Nav from "../sharedcomponents/nav/nav";
import TestFormAPI from "./testFormAPI";
import TestRecipe from "./testRecipe";
// import Bouton from "./searchbar/boutons/bouton";
// import Range from "./searchbar/boutons/range";
// import Dropdown from "./searchbar/boutons/dropdown";
// import Checkbox from "./searchbar/boutons/checkbox";
// import Input from "./searchbar/boutons/input";
import Testfilteringredient from "./testfilteringredient";
import TestIngredientYouDontWant from "./testIngredientYouDontWant";
import TestDropdownDiet from "./testdropdowndiet";
import TestCheckbox from "./testcheckbox";
import Slider from "./testslider";

class TestAPI extends Component {
  constructor() {
    super();

    this.state = {
      ingredient: "",
      recipes: [],
      count: 0,
      ingr: 0,
      health: "",
    };
  }

  // "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

  getAPi = (event) => {
    event.preventDefault();
    const apiID = "a3b47c77";
    const apiKey = "742e6a73e3d13dd35b00ec2852aaf28d";

    //let the user enter a number beetween 1 and max 100?
    const nb = 10; //Max 100

    const ingredient = this.state.ingredient;
    let example = `https://api.edamam.com/search?q=${ingredient}&app_id=${apiID}&app_key=${apiKey}&from=0&to=${nb}`;

    // ou????
    // const ingr1='tomato';
    // const ingr2='onion';
    // example=`https://api.edamam.com/search?q=${ingr1}&${ingr2}&app_id=${apiID}&app_key=${apiKey}&from=0&to=${nb}`

    //calories
    //do intervalles or let the user enters intervalles?
    const caloriesInt1Min = 591;
    const caloriesInt1Max = 722;
    //The format is calories=RANGE where RANGE is replaced by the value in kcal. RANGE is in one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative integer numbers. The + symbol needs to be properly encoded.
    // Examples: “calories=100-300” will return all recipes with which have between 100 and 300 kcal per serving.
    example = `${example}&calories=${caloriesInt1Min}-${caloriesInt1Max}`;
    // calcul ( calories / yield )

    //ingr = Maximum number of ingredients.
    //let the user choose?
    const ingr = 5;
    example = `${example}&ingr=${ingr}`;

    //Diet label: one of “balanced”, “high-protein”, “low-fat”, “low-carb”  (labels are per serving)
    const diet = "balanced";
    example = `${example}&diet=${diet}`;
    // HAVE TO PAY FOR “high-fiber”  “low-sodium”

    //Health label: One of the Health api parameters listed in Diet and Health Labels table at the end of this documentation.
    //Multiple labels can be submitted simultatniousely this way “health=peanut-free&health=tree-nut-free”
    const health = "peanut-free";
    example = `${example}&health=${health}`;
    //Health labels: “vegan”, “vegetarian”, “peanut-free”, “tree-nut-free”, "sugar-conscious" , "alcohol-free" (labels are per serving)
    // HAVE TO PAY FOR the other

    // The type of cuisine of the recipe.
    // You can simultatniousely use saveral cuisines this way “cuisineType=chinese&cuisineType=indian”
    // const cuisineType='indian'
    // example=`${example}&cuisineType=${cuisineType}`
    //HAVE TO PAY FOR THIS

    // The type of meal a recipe belongs to – lunch, dinner, breakfast, snack
    // const mealType='breakfast'
    // example=`${example}&mealType=${mealType}`
    // HAVE TO PAY FOR THIS

    // The dish type a recipe belongs to – soup, salad, sandwich etc.
    // You can simultatniousely use saveral dish types this way “dishType=soup&dishType=dessert”
    // const dishType='sandwich'
    // example=`${example}&dishType=${dishType}`
    // HAVE TO PAY FOR THIS

    //Time range for the total cooking and prep time for a recipe . The format is time=RANGE where RANGE is replaced by the value in minutes. RANGE is in one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative integer numbers. The + symbol needs to be properly encoded.
    //Examples: “time=1%2B” will return all recipes with available total time greater then 1 minute
    const timeMin = 1; //avoid to put 0 because sometimes it's null
    const timeMax = 30;
    example = `${example}&time=${timeMin}-${timeMax}`;

    // Excluding recipes with certain ingredients. The format is excluded=FOOD where FOOD is replaced by the name of the specific food you don’t want to be present in the recipe results. More than one food can be excluded at the same time.
    // Example: excluded=vinegar&excluded=pretzel will exclude any recipes which contain vinegar or pretzels in their ingredient list
    const excluded = "vinegar";
    example = `${example}&excluded=${excluded}`;
    //add control to check excluded<>ingredient

    //Negative search (excluded ingredients)
    //You can specify foods which you don’t want to be present in the results which the search request returns.
    // This method is to be combined with the diet/health/allergen labels and is not designed to replace them.
    // Example: You want to get back only recipes which do not contain gluten, pork or yogurt. You will use the following exclusions then:
    // health=gluten-free&health=pork-free&excluded=yogurt&excluded=greek+yogurt
    // This request when combined with the proper “q=” term will result in recipes which do not contain plain yogurt or plain greek yogurt and which are also gluten and pork free.
    // However if you wish to get recipes which do not contain milk or diary at all you will be better off using the “dairy-free” or “milk-free” labels as opposed to listing all possible foods containing lactose in the excluded ingredient
    // Here are some examples of how ingredient exclusion works:
    // • ‘Eggplant’ will exclude both eggplant and aubergine because they are synonyms
    // • ‘Chicken’ breast will exclude only chicken breast with skin but not ‘chicken’ or ‘skinless chicken breast’ as they are different foods nutritionally
    // • ‘spaghetti’ will exclude any type of normal pasta like macaroni or linguini as they are all the same food nutritionally just in different format. However it will not exclude cooked pasta or whole wheat pasta as they are distinct from regular pasta.
    // The negative search also looks for a presense of the phrase from the “excluded=” parameter in the title of the recipe. So “excluded=yogurt” will exclude not only any recipes which contain the specific ingredient plain yogurt in their ingredient list but also for any recipes which contain the phrase yogurt in their title – for example “Greek Yogurt Dressing”

    console.log(example);

    axios.get(example).then((res) => {
      const recipes = res.data.hits;
      const count = res.data.count;
      console.log(res.data);
      this.setState({ recipes, count });
      // console.log(this.state)
    });
    console.log("getAPI");
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    this.setState({
      ingredient: value,
    });
  };

  handleInputIngrChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const valueIngr = target.value;
    this.setState({
      ingr: valueIngr,
    });
  };

  incrementIngrButton = () => {
    const ingr = this.state.ingr + 1;
    this.setState({
      ingr,
    });
  };

  decrementIngrButton = () => {
    const ingr = this.state.ingr - 1;
    this.setState({
      ingr,
    });
  };

  handleInputNotWantedIngr = (event) => {
    event.preventDefault();
    const target = event.target;
    const valuehealth = target.value;
    this.setState({
      health: valuehealth,
    });
  };


  handleStarChange = (uri) => {
    console.log(uri);
    // do a post request to send bookmarked=true
  };

  render() {
    const { ingredient, recipes, count, ingr, health } = this.state;
    return (
      <div>
        <Nav />
        {/* <Bouton />
        <Range />
        <Dropdown />
        <Checkbox />
        <Input /> */}
        <TestFormAPI
          value={ingredient}
          handleInputChange={this.handleInputChange}
          updateAPI={this.getAPi}
        />
        <Testfilteringredient
          value={ingr}
          handleInputChange={this.handleInputIngrChange}
          incrementIngr={this.incrementIngrButton}
          decrementIngr={this.decrementIngrButton}
        />
        <TestIngredientYouDontWant
          value={health}
          handleInputChange={this.handleInputNotWantedIngr}
        />
        <TestDropdownDiet />
        <TestCheckbox />
        <Slider />
        {/* <div>Count: {count}</div>
        {recipes.map((r) => (
          <TestRecipe
            key={r.recipe.uri}
            title={r.recipe.label}
            image={r.recipe.image}
            uri={r.recipe.uri}
            bookmarked={r.bookmarked}
            bookmarkF={this.handleStarChange}
          />
        ))} */}
      </div>
    );
  }
}

export default TestAPI;
