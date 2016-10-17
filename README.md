 ### Running mocha
 
 mocha --compilers js:babel-core/register --recursive test/mocha/partial/
 
 
 
 
 ### Set up IDEA
 
 Configure all the librairies to have a good code completion [https://blog.jetbrains.com/webstorm/2014/07/how-webstorm-works-completion-for-javascript-libraries/](https://blog.jetbrains.com/webstorm/2014/07/how-webstorm-works-completion-for-javascript-libraries/)
 
 Configure the code format by going in Files -> Settings the Editor -> Code Style -> Javascript and press the button manage. Load the configuration file locate in DEV/AIRBNB. This will allow you to reformat the javascript code with IDEA formatter as expected by most of configured ES6 rules. 
 
 Debug mocha test 
 - Add a mocha test configuration with test directory
 - Configure the launcher with the Extra moch option `--compilers js:babel-core/register`
 
 
 Activate ESLint checks
 
 
 
 ### ESLINT
 
 You can use the disable synthax. Each time it should be with a comment
   // We make usage of a DOM object here
   // eslint-disable-next-line no-undef
 
 
 /* eslint-disable no-param-reassign */
 
 I am anoyed by no-restricted synthax
 https://github.com/airbnb/javascript/issues/851