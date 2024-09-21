const hotel = {

	// strings, integers & booleans
	name: "SALAMANDER", // the EXACT name of the hotel -> including any letter accents or special characters correctly

	// MUST be either "Hotel" or "Resort"
	type: "Resort",

	homepage: "https://www.salamanderdc.com",

	// slogan/motto/tagline of the hotel
	slogan: "Distinction, luxury, and comfort await in the new heart of D.C.",

	description: "Prominently located along the capital’s vibrant Southwest waterfront, Salamander Washington DC exudes a refined sense of style in a picturesque setting. The elegant, 373-room hotel features beautifully designed rooms, spacious suites, and the city’s finest spa. The hotel will undergo an exciting enhancement program under Salamander’s management, including a bold and imaginative new restaurant concept. Salamander DC is a short walk to the nation's most cherished monuments and attractions, including The Wharf DC.",

	// if pets are allowed in the hotel or not
	petsAllowedTrueFalse: true, // true or false

	// total number of rooms that are used as accommodations
	totalRoomCount: 373,

	// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
	priceRange: "491",

	// based on 24 hours time. ex: 14:00 means 2:00 PM
	checkInTime: "16:00",
	checkOutTime: "11:00",

	// other urls
	logoUrl: "https://www.salamanderdc.com/images/layout/site-logo.png", // image source url of the hotel logo
	copyrightUrl: "https://www.salamanderdc.com/terms", // a copyright url for the website

	// social media urls
	facebookUrl: "https://www.facebook.com/salamanderhoteldc",
	twitterUrl: "",
	instagramUrl: "https://www.instagram.com/salamanderhoteldc",
	linkedinUrl: "https://www.linkedin.com/company/salamander-washington-dc",
	tiktokUrl: "",
	youtubeUrl: "",

	// pull rating from the official Google business listing
	rating: {
		value: "4.6",
		count: "2184"
	},

	contact: {
		phone: "1-877-401-9818", // format: x-xxx-xxx-xxxx
		email: "sales@salamanderdc.com" // primary contact email of the hotel
	},

	location: {
		street: "1330 Maryland Ave SW",
		city: "Washington DC",
		state: "WA", // 2 letter state abbreviation
		zip: "20024", // 5 digit zip code
		country: "USA",
		lat: 39.2217, // latitude coordinates
		long: -77.0728 // longitude coordinates
	},

	// arrays
	currenciesAccepted: [
		'USD'
	],

	paymentAccepted: [
		'Credit Card',
		'Debit Card'
	],

	// array of languages spoken by the staff
	availableLanguage: [
		"English",
		"Spanish"
	],

	// amenities offered at the hotel
	amenitiesArr: [
		{
			name: "The Monument Club",
			url: "https://www.salamanderdc.com/rooms/overview"
		},
		{
			name: "Indoor Pool",
			url: "https://www.salamanderdc.com/rooms/overview"
		},
		{
			name: "Dog Friendly",
			url: "https://www.salamanderdc.com/rooms/overview"
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
