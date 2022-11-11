module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy('./src/loading.js');
    eleventyConfig.addPassthroughCopy('./src/assets/images');
    eleventyConfig.addPassthroughCopy('./src/admin');
    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "public"
        }
    };
}