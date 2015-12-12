# Master Factory Pattern (A Single Factory for $scope)
# What Does It Do?
This is an example angular application demonstrating how to share data between two or more sibling controllers without using services such as $broadcast or $watch. The methodology behind this approach is to put all your logic within a single Master Controller that will update it's own Child Factory data models.

## Medium Article:
https://medium.com/@danielram/angular-1-x-how-to-properly-share-data-between-controllers-through-a-single-factory-5a5a2a9e1d06#.bogfnjy9y

#### How To Install ####
```sh
git clone https://github.com/danieldram/ng-master-factory-example
npm install
gulp js // Compile SRC JS to public/assets/js/bundle.js
gulp serve-dev //launch app in browser or navigate to localhost:7300
```
## How to run the example.
1. Once gulp-serve dev has run, read the output on index.html.
2. Type in the input text box to see data shared between two parent controllers.
3. Open the console to view the result of an HTTP request method handled by the Master Factory that will update the Child Factory: ExampleChildFactoryTwo.details
4. View the source code. Navigate to the app.js to see the two controllers and how the single $scope.models is assigned the MasterFactory with all it's models, child models and methods.
5. Specifically look at how the MasterFactory.init() method works.

## Questions?
If you have quetions about the example, or not sure how something works, feel free to use the issues page to ask. Alternatively you can ask me on twitter at @danielram86
