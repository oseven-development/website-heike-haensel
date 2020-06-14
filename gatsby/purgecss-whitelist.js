const modifierClasses = [
  "container--left-aligned",
  "container--right-aligned",
  "button--white",
  "button--turquoise",
  "button--peach",
  "button--ghost",
]

const tailwindClasses = [
  "lg:w-1/2",
  "lg:w-1/3",
  "lg:w-1/4",
  "bg-light-steel-blue",
  "bg-medium-steel-blue",
  "bg-dark-steel-blue",
  "bg-light-purple",
  "bg-dark-purple",
  "bg-gray-blue",
  "text-dark-purple",
]

const purgecssWhitelist = [...modifierClasses, ...tailwindClasses]

module.exports = purgecssWhitelist
