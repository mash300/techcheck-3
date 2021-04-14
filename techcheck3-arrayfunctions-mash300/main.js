// Using the data retrieved from the API Endpoint below, 
// write a function called 'getTotalPopulation' that returns the total population
// for all countries that BOTH border China and list English as one of their official languages

//NOTE: You are NOT permitted to use FOR, FOREACH, FOR OF or WHILE loops of any kind.
//  You must leverage any of the available JavaScript Array Iteration Functions to accomplish your goal. (except forEach!)
//  https://www.w3schools.com/js/js_array_iteration.asp
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

// MARKING
// -------
// 10/10 - Tech check is correct (passes all tests) and is completed 
//         and submitted within the allotted in-class time.

//  8/10 - Tech check is correct (passes all tests) and is completed 
//         and submitted within a 12-hour grace period beginning 
//         immediately following the end of in-class time.

//  6/10 - Tech check is correct (passes all tests) and is completed 
//         and submitted after the 12-hour grace period has elapsed.

//  0/10 - Tech check is not submitted or is submitted but does not pass all tests.


(function(test){

    // DO NOT MODIFY THE CODE BELOW
    // |          |           |
    // V          V           V
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then(response => response.json())
        .then(json => {
            try{
                //DO NOT MODIFY THIS CODE
                document.write(`The total population of countries that border China and list 
                                English as an official language is ${getTotalPopulation(json)}`)
                test.run(getTotalPopulation(json)) // will output test result to browser console
            } catch(e) {
                test.outputErrorMessage(e.message);
            }
        })
        // ^          ^           ^
        // |          |           |
        // DO NOT MODIFY THE ABOVE CODE

    // WRITE YOUR getTotalPopulation FUNCTION HERE
    // |           |             |           |
    // V           V             V           V

    function getTotalPopulation(json) {
        const bordersChina = json.filter(function(country) {
            return country.borders.includes("CHN");
        })
        console.log(bordersChina)


        const speaksEnglish = bordersChina.filter(function(country) {
        if(country.languages.some(function(language){
            return language.name === "English";
        })
        ){
            return true;
        }else {
            return false;
        }
        }, 0)


        console.log(speaksEnglish);


        // const populations = speaksEnglish.map(function(country) {
        //     // let population = country.population.push[country];
        //     // return country.population;
        //     return populations;
            
        //     // I need to reduce al of the populations returned to one value  //
        // })
        // console.log(co);
        // let popTotal = [];
        let popTotal = 0;
        popTotal = speaksEnglish.reduce(function(total, speaksEnglish) {
            return total + speaksEnglish.population
        // popTotal = [];
        // popTotal = countryData.reduce(function(countryData, population){
        //     return countryData + population
        }, 0);
        console.log(popTotal);
        return popTotal
    }   
})(test);





        // const countries = bordersChina;
        // const fluent = speaksEnglish.some(countries => country)

        // const speaksEnglish = bordersChina.filter(function(country) {
        //     country.languages.some(function(value, language, country){
        //         if(language == "en" || language == "eng")
        //         return country
        //     })
          
        // })


        // const speaksEnglish = bordersChina.filter(function(country) {
        //     country.languages.some(function(value, language, country){
        //         country.languages.language === "en" || country.languages.language === "eng"
        //     })
        //     return country
        // })
        // console.log(speaksEnglish);

        // const speaksEnglish = bordersChina.filter(function(country) {
        //     bordersChina.some(function(value, country, array){
        //         languages == "en" || "eng"
        //     })
        //     return speaksEnglish
        // })
        // // console.log(speaksEnglish);

        // const speaksEnglish = bordersChina.filter(function(country) {
        //     english = bordersChina.some(function(languages, index, array){
        //         bordersChina.languages == "en" || bordersChina.languages == "eng"
        //     })
        //     return english
        // })
        // console.log(english);

        // const speaksEnglish = bordersChina.filter(function(country) {
        //     english = bordersChina.some(function(value, language, bordersChina){
        //         bordersChina.languages == "en" || bordersChina.languages == "eng"
        //     })
        //     return english
        // }, 0)
        // console.log(english);
        // console.log(speaksEnglish);

        // const speaksEnglish = bordersChina.some(languageFunction) {
        //     function languageFunction(language, country, array){
        //         return languages == "en" || languages == "eng";
        //     }
        //     return speaksEnglish
        // }
        // // console.log(speaksEnglish);

        // const speaksEnglish = bordersChina.filter(function(country) {
        //     country.languages.some(function(fluency, language) {
        //     if(fluency[languages.language] == "en" || fluency[languages.language] == "eng") {
        //         return country;
        //     }
        //     })
      
        // })

        // const speaksEnglish = bordersChina.filter(function(country) {
        //     country.languages.some(function(language, languages, country) {
        //     if(language == "en" || language == "eng") {
        //         return country;
        //     }
        //     })
      
        // })
        // console.log(speaksEnglish);

                // const speaksEnglish = bordersChina.find(findLanguage);
        // // console.log(speaksEnglish);
        // function findLanguage(element) {
        //     return element.languages == "English";
        // }

        // const speaksEnglish = bordersChina.find(findLanguage);
        // console.log(speaksEnglish);
        // function findLanguage(element) {
        //     return element.languages == "English";
        // }

        // const speaksEnglish = bordersChina.filter(country) {
        //     // return language.find(thing => thing.language == "english");
        //    return country.language.find === "English";

        // })
        // console.log(speaksEnglish);

        // const speaksEnglish = bordersChina.filter(function(country) {
        //     country.languages.some(function(currentValue, languages, borders) {
        //     if(borders.languages.language == "en" || borders.languages.language == "eng") {
        //         return country;
        //     }
        //     })
      
        // })
        // console.log(speaksEnglish);