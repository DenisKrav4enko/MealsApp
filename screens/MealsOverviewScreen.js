import { useLayoutEffect } from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealsList from '../components/MealsList/MealsList'

function MealsOverviewScreen({ route, navigation }) {
    const catID = route.params.categoryId

    const displayedMeals = MEALS.filter(meal => {
        return meal.categoryIds.indexOf(catID) >= 0
    })

    useLayoutEffect(() => {
        const catTitle = CATEGORIES.find(category => category.id === catID).title

        navigation.setOptions({
            title: catTitle
        })
    }, [catID, navigation]);

    return <MealsList items={displayedMeals} />

}

export default MealsOverviewScreen