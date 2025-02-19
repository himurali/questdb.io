let guidelines

if (process.env.NODE_ENV === "development") {
  guidelines = {
    label: "Guidelines (DEV ONLY)",
    type: "category",
    items: [
      {
        type: "category",
        label: "Templates",
        items: [
          "__guidelines/template/guide",
          "__guidelines/template/function",
          "__guidelines/template/sql",
        ],
      },
      "__guidelines/naming-convention",
      "__guidelines/content-hierarchy",
      "__guidelines/lexicon",
      "__guidelines/markdown",
      "__guidelines/sql-code-blocks",
      "__guidelines/influences",
    ],
  }
}

module.exports = {
  docs: [
    {
      id: "introduction",
      type: "doc",
    },
    {
      label: "Lead Ride",
      type: "category",
      items: [
        "lead-ride/city",
        "lead-ride/company",
        "lead-ride/academia",
        "lead-ride/community",
      ],
    },
    {
      label: "Bharath Open Bike",
      type: "category",
      items: [
        "bob-final/vision",
        "bob-final/bcdc",
        "bob-final/strategy",
        "bob-final/BOB",
        "bob-final/programflow",
      ],
    },
     
    {
      label: "She Cycles",
      type: "category",
      items: [
        "she-cycles/vision",
        "she-cycles/strategy",
        "she-cycles/socialstock",
        "she-cycles/programflow",
      ],
    },
    {
      label: "Cycle Day",
      type: "category",
      items: [
        "cycle-day/goal",
        "cycle-day/our-work",
        "cycle-day/community-building",
        
      ],
    },

    {
      label: "Cycle Tourism",
      type: "category",
      items: [
        "cycle-tourism/intro",
        "cycle-tourism/blr-heritage",
        "cycle-tourism/wtd",
        "cycle-tourism/mapping",
        "cycle-tourism/kaveri",
        "cycle-tourism/nandi",
        
      ],
    },


     
     
     
    
     
     
    {
      label: "Tutorials",
      type: 'link',
      href: '/tutorial',
    },
  ].filter(Boolean),
}
