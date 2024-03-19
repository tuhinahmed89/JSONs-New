const hotel = {
	config: {
		live: true, // indicates if the schema is live on the website
		features: {
			pageSpecific: true, // if the schema is page-specific as opposed to a single global site-wide schema
			voiceSearch: true, // if the schema is optimized for voice search
			arrays: {
				restaurants: true, // if the schema includes restaurant data
				spas: true, // if the schema includes spa data
				healthClubs: true, // if the schema includes health club data
				rooms: true, // if the schema includes room data
				amenities: true // if the schema includes amenities data
			}
		}
	},

	// the exact name of the hotel
	// be sure to include any letter accents or special characters correctly
	name: "Aston Kaanapali Shores",

	// MUST be either "Hotel" or "Resort"
	type: "Resort",

	// the website of the hotel
	// include 'https://' and any subdomain such as 'www' (if applicable)
	// must not end with a '/'
	homepage: "https://www.astonkaanapalishoresresort.com",

	// slogan/motto/tagline of the hotel
	slogan: "An Unforgettable Experience",

	// a brief description of the hotel
	description: "Welcome to the gorgeous Kaanapali coast on West Maui, where the Aston Kaanapali Shores beachfront resort rests on 10 acres of white sand, tropical gardens, and flowing waterfalls. Our Kaanapali resort boasts the quintessential Hawaii experience.",

	// if pets are allowed in the hotel or not
	petsAllowedTrueFalse: 'false',

	// total number of rooms that are used as accommodations
	totalRoomCount: 'null',

	// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
	priceRange: "$$$",

	// array of accepted currencies
	currenciesAccepted: ['USD'],

	// array of accepted payment methods
	paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],

	// array of languages spoken by the staff
	availableLanguage: ["English"],

	// based on 24 hours time. ex: 14:00
	checkInTime: "12:00",
	checkOutTime: "10:00",

	// rating
	rating: {
		value: 4.6,
		count: 24
	},

	// contact
	contact: {

		// format: 1-234-567-8910
		phone: "1-234-567-8910",

		email: "inquiry@theranchlife.com"
	},
	
	// location
	location: {
		street: "12220 Cotharin Road",
		city: "Malibu",
		state: "CA", // 2 letter state abbreviation
		zip: "90265",
		country: "USA",
		lat: 34.0974, // latitude coordinates
		long: -118.7342 // longitude coordinates
	},

	// links
	logoUrl: "https://theranchlife.com/wp-content/themes/the-ranch/img/theranch-logo-new-2.jpg",

	// this is required - every hotel must have a copyright or privacy link
	copyrightUrl: "https://theranchlife.com/privacy-policy",

	// social media URLs
	// no '/' at the end of the URL
	facebookUrl: "https://www.facebook.com/TheRanchMalibu",
	twitterUrl: "https://twitter.com/theranchmalibu",
	instagramUrl: "https://www.instagram.com/TheRanchMalibu",
	linkedinUrl: "https://www.linkedin.com/company/the-ranch-malibu/about",

	// list of hotel amenities
	amenitiesArr: [
		
		{
			name: "Integrative Health Plan",
			url: "https://theranchlife.com/health-and-fitness-programs/functional-health-programs/#the-ranch",
		}
		
	],

	// list of hotel images
	imageArr: [
		
		{
			caption: "Outdoor Pool",
			url: "https://theranchlife.com/wp-content/uploads/2022/09/gallery_pool-1.jpg"
		}
		
	],

	// list of rooms
	roomsArr: [
		
		{

			// must be either 'Suite' or 'Room'
			type: "Suite",

			// name of the room
			name: "The Ranch 9.0",

			// URL of this specific room
			url: "https://theranchlife.com/health-and-fitness-programs/the-ranch-9-0",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://theranchlife.com/retreat-reservations/reserve",

			// description of the room
			description: "The ultimate health immersion, enjoy 9 decision-free days of our transformative fitness and wellness program",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: 4,

			// 24 hours time. ex: 14:00
			checkInTime: "12:00",
			checkOutTime: "10:00",

			// total number of beds in this accommodation
			bedCount: "",

			bedType: "",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: "Outdoor Pool",
					url: "https://theranchlife.com/wp-content/uploads/2022/09/gallery_pool-1.jpg"
				}
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: "Integrative Health Plan",
					url: "https://theranchlife.com/health-and-fitness-programs/functional-health-programs/#the-ranch",
				}
			]

		}
	],

	// list of restaurants at the hotel
	restaurants: [
		
		{
			
			name: "The Ranch Kitchen",
			url: "https://theranchlife.com/restaurant/the-ranch-kitchen",
			description: "The Ranch Kitchen is a culinary experience that is as much about the food as it is about the setting. Our meals are designed to be enjoyed in a relaxed, communal setting, where guests can connect with each other and our chefs.",

			// the URL of the menu (can be a PDF if applicable)
			menuUrl: "https://theranchlife.com/restaurant/the-ranch-kitchen.pdf",

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-234-567-8910", // format: x-xxx-xxx-xxxx
				email: "inquiry@theranchlife.com"
				
			},
			
			// location
			location: {
				street: "12220 Cotharin Road",
				city: "Malibu",
				state: "CA", // 2 letter state code
				zip: "90265",
				country: "USA"
			},
			
			// rating
			rating: {
				value: 4.6,
				count: 24
			},

			// Tuhin, leave the 'openingHours' and 'servesCuisine' empty for now
			openingHours: [],
			servesCuisine: []
			
		}
	],

	// list of spas at the hotel
	spas: [
		
		{
			name: "The Ranch Spa",
			url: "https://theranchlife.com/spa",
			description: "The Ranch Spa is a luxury wellness spa that offers a variety of treatments and services to help guests relax and rejuvenate. Our spa is designed to help guests achieve sustainable, healthy habits that will last a lifetime.",
		}
		
	],

	// list of health clubs at the hotel
	healthClubs: [
		
		{
			name: "The Ranch Health Club",
			url: "https://theranchlife.com/health-club",
			description: "The Ranch Health Club is a luxury fitness and wellness club that offers a variety of programs and services to help guests achieve sustainable, healthy habits that will last a lifetime.",
		}
		
	],

	reviews: [ // Tuhin, add 2 reviews for each hotel
		{
			author: "Jake Labate", // name of the reviewer
			value: '', // be sure to only include 5 star reviews -> so the value should always be 5
			datePublished: "2022-09-29",
			reviewed: {

				// Tuhin, set the 'type' to 'VacationRental' for all for now
				type: "", // expected: 'VacationRental' (can add more functionality later)

				// Tuhin, leave the 'name' empty for now for any reviews
				name: ""
			}
		}
	]
	
}
