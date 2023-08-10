const siteResources = {
    people: {
        navTitle: "Characters",
        label: "Star Wars Characters",
        description: "Explore the characters in Star Wars franchise",
        fields: [
            {
                name: "name",
                label: "Name",
                type: "text",
            },
            {
                name: "gender",
                label: "Gender",
                type: "text",
            },
            {
                name: "birth_year",
                label: "Year of Birth",
                type: "text",
            },
            {
                name: "height",
                label: "Height",
                type: "number",
            },
            {
                name: "mass",
                label: "Weight",
                type: "number",
            },
            {
                name: "hair_color",
                label: "Hair Color",
                type: "text",
            },
            {
                name: "eye_color",
                label: "Eye Color",
                type: "text",
            },
        ],
    },
    planets: {
        navTitle: "Planets",
        label: "Star Wars Planets",
        description: "Explore the planets in Star Wars franchise",
        fields: [
            {
                name: "name",
                label: "Name",
                type: "text",
            },
            {
                name: "diameter",
                label: "Diameter",
                type: "number",
            },
            {
                name: "climate",
                label: "Climate",
                type: "text",
            },
            {
                name: "terrain",
                label: "Terrain",
                type: "text",
            },
            {
                name: "surface_water",
                label: "Surface Water",
                type: "number",
            },
            {
                name: "population",
                label: "Population",
                type: "number",
            },
        ]
    },
}

export default siteResources