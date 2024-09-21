const hotel = {

	// strings, integers & booleans
	name: "SALAMANDER", // the EXACT name of the hotel -> including any letter accents or special characters correctly

	// MUST be either "Hotel" or "Resort"
	type: "Resort",

	homepage: "https://www.salamanderdc.com",

	// slogan/motto/tagline of the hotel
	slogan: "Endurance, Nutrition, Wellness",

	description: "The Ranch Malibu is a luxury fitness, health and wellness retreat that offers immersive, results-oriented programs based on the principles of endurance, nutrition and wellness. Our programs are designed to help guests achieve sustainable, healthy habits that will last a lifetime.",

	// if pets are allowed in the hotel or not
	petsAllowedTrueFalse: false, // true or false

	// total number of rooms that are used as accommodations
	totalRoomCount: 373,

	// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
	priceRange: "491",

	// based on 24 hours time. ex: 14:00 means 2:00 PM
	checkInTime: "15:00",
	checkOutTime: "11:00",

	// other urls
	logoUrl: "", // image source url of the hotel logo
	copyrightUrl: "", // a copyright url for the website

	// social media urls
	facebookUrl: "",
	twitterUrl: "",
	instagramUrl: "",
	linkedinUrl: "",
	tiktokUrl: "",
	youtubeUrl: "",

	// pull rating from the official Google business listing
	rating: {
		value: "",
		count: ""
	},

	contact: {
		phone: "1-234-567-8910", // format: x-xxx-xxx-xxxx
		email: "inquiry@theranchlife.com" // primary contact email of the hotel
	},

	location: {
		street: "12220 Cotharin Road",
		city: "Malibu",
		state: "CA", // 2 letter state abbreviation
		zip: "90265", // 5 digit zip code
		country: "USA",
		lat: 34.0974, // latitude coordinates
		long: -118.7342 // longitude coordinates
	},

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
