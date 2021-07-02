module.exports = {
  content: ['*.html', '*.blade', '*.blade.php', '*.php', '*/*.php', '*.js', '*/*.js','frontend-min.js'],
  css: ['maksucocss.css'],
  //whitelist: ['flickity-viewport','flickity-slider','flickity-page-dots','flickity-button','flickity-prev-next-button','x-clock','v-clock'],
  whitelist: ['x-clock','v-clock'],
  whitelistPatterns: [/flickity-/]
}
//purgecss --config ./purgecss.config.js --output css