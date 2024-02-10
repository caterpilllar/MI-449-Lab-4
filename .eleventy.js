// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("card", function(planetName, au){
    `<div class="card ${planetName}">
    <div class="planet ${planetName}y"></div>
    <h3> ${planetName} </h3>
    <p> AU: ${au} </p> 
  </div>`
  });
  

  eleventyConfig.addShortcode("nav", function(title){
    return `<h1> ${title} </h1`
  });


};