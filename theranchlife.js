const hotel = {

	// strings, integers & booleans
	name: "The Ranch Life", // the EXACT name of the hotel -> including any letter accents or special characters correctly

	// MUST be either "Hotel" or "Resort"
	type: "Resort",

	homepage: "https://theranchlife.com",

	// slogan/motto/tagline of the hotel
	slogan: "More than a retreat. A way forward.",

	description: "The Ranch is a collection of restorative destinations designed to ignite your spirit, challenge your body and cultivate authentic human connection. Through results-driven, structured wellness programs, we aim to rejuvenate your physical, mental and spiritual health in environments that foster inner harmony and self-discovery, resulting in meaningful positive change.",

	// if pets are allowed in the hotel or not
	petsAllowedTrueFalse: false, // true or false

	// total number of rooms that are used as accommodations
	//totalRoomCount: 21, [Different]

	// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
	//priceRange: "2250-42100", No Google business listing Found

	// based on 24 hours time. ex: 14:00 means 2:00 PM
	checkInTime: "12:00",
	checkOutTime: "10:00",

	// other urls
	logoUrl: "https://www.theranchlife.com/images/favicon.png", // image source url of the hotel logo
	copyrightUrl: "https://www.theranchlife.com/terms-conditions", // a copyright url for the website

	// social media urls
	facebookUrl: "https://www.facebook.com/TheRanchExperience",
	twitterUrl: "",
	instagramUrl: "https://www.instagram.com/theranch.life",
	linkedinUrl: "",
	tiktokUrl: "",
	youtubeUrl: "",

	// pull rating from the official Google business listing
	rating: {
		value: "",
		count: ""
	},

	contact: {
		phone: "1-310-457-8700", // format: x-xxx-xxx-xxxx
		email: "inquiry@theranchlife.com" // primary contact email of the hotel
	},

	locationArr: [
		{
			street: "12220 Cotharin Road",
			city: "Malibu",
			state: "CA", // 2 letter state abbreviation
			zip: "90265", // 5 digit zip code
			country: "USA",
			lat: 34.0974, // latitude coordinates
			long: -118.7342 // longitude coordinates
		},
		{
			street: "150 Sister Servants Lane",
			city: "Sloatsburg",
			state: "NY",
			zip: "10974",
			country: "USA",
			lat: "41.5524",
			long: "-74.4856"
		}
	],
	// arrays
	currenciesAccepted: [
		'USD'
	],

	paymentAccepted: [
		'Cash',
		'Credit Card',
		'Debit Card'
	],

	// array of languages spoken by the staff
	availableLanguage: [
		"English"
	],

	// amenities offered at the hotel
	amenitiesArr: [
		{
			name: "",
			url: ""
		}
	],

	imageArr: [
		{
			caption: "", // a name or caption of the image
			url: "" // url of the image source
		}
	],

	roomsArr: [
		{
			type: "Suite", // must be either 'Suite' or 'Room'
			name: "The Ranch 9.0", // name of the room
			url: "https://theranchlife.com/health-and-fitness-programs/the-ranch-9-0", // URL of this specific room
			bookUrl: "https://theranchlife.com/retreat-reservations/reserve", // URL from where the room can be booked (if applicable)
			description: "The ultimate health immersion, enjoy 9 decision-free days of our transformative fitness and wellness program",
			maxOccupancy: 4, // maximum number of guests that can stay in this accommodation
			checkInTime: "12:00", // 24 hours time. ex: 14:00
			checkOutTime: "10:00", // 24 hours time. ex: 14:00
			bedCount: "", // total number of beds in this accommodation
			bedType: "",
			bathroomCount: "", // total number of bathrooms in this accommodation
			roomCount: "", // total number of rooms in this accommodation
			images: [
				{
					caption: "", // a name or caption of the image
					url: "", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "",
					url: ""
				}
			]
		}
	],
	restaurants: [
		{
			name: "", // name of the restaurant
			url: "", // primary url for the restaurant
			description: "", // description of the restaurant
			menu: [
				{
					name: "", // name of the menu, example: "Breakfast Menu" or "Drinks Menu"
					url: "" // the url of the menu (can be a PDF if applicable)
				}
			],
			priceRange: "", // is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			contact: {
				phone: "", // format: x-xxx-xxx-xxxx
				email: "" // contact email of the restaurant
			},

			// pull rating from the official Google business listing
			rating: {
				value: "",
				count: ""
			},
			imageArr: [
				{
					caption: "",
					url: ""
				}
			],

			location: {
				street: "", // street address of the restaurant
				city: "", // city of the restaurant
				state: "", // 2 letter state code
				zip: "", // 5 digit zip code
				country: "" // country of the restaurant
			},

			// pull the reviews from the official Google business listing
			// we should only include 5-star reviews
			// we want 3 reviews for each (if they exist)
			reviews: [
				{
					// full name of the reviewer
					// try to fund reviews with full first and last names
					author: "",

					text: "", // the full review text

					// be sure to only include 5-star reviews -> so the value should always be 5
					value: 5,

					datePublished: "",

					// the url of the actual review
					url: ""
				}
			],

			openingHours: [],

			// array of strings of the types of cuisine served ex: ["Italian", "American"]
			servesCuisine: []
		}
	],
	spas: [
		{
			name: "",
			url: "",
			description: "",
			imageArr: [
				{
					caption: "",
					url: ""
				}
			],

			location: {
				street: "",
				city: "",
				state: "",
				zip: "",
				country: ""
			},

			// pull the reviews from the official Google business listing
			// we should only include 5-star reviews
			// we want 3 reviews for each (if they exist)
			reviews: [
				{
					// full name of the reviewer
					// try to fund reviews with full first and last names
					author: "",

					text: "", // the full review text

					// be sure to only include 5-star reviews -> so the value should always be 5
					value: 5,

					datePublished: "",

					// the url of the actual review
					url: ""
				}
			]
		}
	],
	landmarksOrHistoricalBuildings: [
		{
			name: "",
			url: "",

			// url of the map location (get this from Google Maps)
			mapUrl: "",

			description: "",
			imageArr: [
				{
					caption: "",
					url: ""
				}
			],

			location: {
				street: "",
				city: "",
				state: "",
				zip: "",
				country: ""
			},

			// pull the reviews from the official Google business listing
			// we should only include 5-star reviews
			// we want 3 reviews for each (if they exist)
			reviews: [
				{
					// full name of the reviewer
					// try to fund reviews with full first and last names
					author: "",

					text: "", // the full review text

					// be sure to only include 5-star reviews -> so the value should always be 5
					value: 5,

					datePublished: "",

					// the url of the actual review
					url: ""
				}
			]
		}
	],
	touristAttractions: [
		{
			name: "",
			url: "",

			// url of the map location (get this from Google Maps)
			mapUrl: "",

			description: "",
			audience: "", // ex: "Family Friendly" or "Educational" or "Historical" etc
			imageArray: [
				{
					caption: "",
					url: ""
				}
			],

			location: {
				street: "",
				city: "",
				state: "",
				zip: "",
				country: ""
			},

			// pull the reviews from the official Google business listing
			// we should only include 5-star reviews
			// we want 3 reviews for each (if they exist)
			reviews: [
				{
					// full name of the reviewer
					// try to fund reviews with full first and last names
					author: "",

					text: "", // the full review text

					// be sure to only include 5-star reviews -> so the value should always be 5
					value: 5,

					datePublished: "",

					// the url of the actual review
					url: ""
				}
			]
		}
	],
	healthClubs: [
		{

			// name of the health club
			name: "",

			// url of the health club
			url: "",

			// description of the health club
			description: "",

			imageArr: [
				{
					caption: "",
					url: ""
				}
			],

			location: {
				street: "",
				city: "",
				state: "",
				zip: "",
				country: ""
			},

			// pull the reviews from the official Google business listing
			// we should only include 5-star reviews
			// we want 3 reviews for each (if they exist)
			reviews: [
				{
					// full name of the reviewer
					// try to fund reviews with full first and last names
					author: "",

					text: "", // the full review text

					// be sure to only include 5-star reviews -> so the value should always be 5
					value: 5,

					datePublished: "",

					// the url of the actual review
					url: ""
				}
			]
		}
	],

	// pull the reviews from the official Google business listing
	// we should only include 5-star reviews
	// we want 3 reviews for each (if they exist)
	reviews: [
		{
			// full name of the reviewer
			// try to fund reviews with full first and last names
			author: "",

			text: "", // the full review text

			// be sure to only include 5-star reviews -> so the value should always be 5
			value: 5,

			datePublished: "",

			// the url of the actual review
			url: ""
		}
	]

}
