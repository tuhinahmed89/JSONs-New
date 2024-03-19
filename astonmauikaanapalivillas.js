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
	name: "Maui Kaanapali Villas",

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
	petsAllowedTrueFalse: "false",

	// total number of rooms that are used as accommodations
	totalRoomCount: "null",

	// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
	priceRange: "$$$",

	// array of accepted currencies
	currenciesAccepted: ['USD'],

	// array of accepted payment methods
	paymentAccepted: ['Credit Card', 'Debit Card'],

	// array of languages spoken by the staff
	availableLanguage: ['English', 'Filipino'],

	// based on 24 hours time. ex: 14:00
	checkInTime: "16:00",
	checkOutTime: "11:00",

	// rating
	rating: {
		value: 4.3,
		count: 2371
	},

	// contact
	contact: {

		// format: 1-234-567-8910
		phone: "808-667-2211",

		email: "res.aks@astonreservations.com"
	},
	
	// location
	location: {
		street: "3445 Lower Honoapiilani Road",
		city: "Lahaina",
		state: "HI", // 2 letter state abbreviation
		zip: "96761",
		country: "USA",
		lat: 20.9494, // latitude coordinates
		long: -156.6891 // longitude coordinates
	},

	// links
	logoUrl: "https://s42525.p631.sites.pressdns.com/wp-content/uploads/2023/10/White-Copy.png",

	// this is required - every hotel must have a copyright or privacy link
	copyrightUrl: "https://www.astonkaanapalishoresresort.com/privacy-policy",

	// social media URLs
	// no '/' at the end of the URL
	facebookUrl: "https://www.facebook.com/KaanapaliShores",
	twitterUrl: "https://twitter.com/aquaaston",
	instagramUrl: "https://www.instagram.com/aquaaston",
	linkedinUrl: "https://www.linkedin.com/company/aston-maui-kaanapali-villas",

	// list of hotel amenities
	amenitiesArr: [
		
		{
			name: "Coffee kiosk",
			url: "https://www.astonkaanapalishoresresort.com/amenities",
		},
		{
			name: "Convenience store",
			url: "https://www.astonkaanapalishoresresort.com/amenities",
		},
		{
			name: "Fitness center",
			url: "https://www.astonkaanapalishoresresort.com/amenities",
		},
		{
			name: "Gift & apparel shops",
			url: "https://www.astonkaanapalishoresresort.com/amenities",
		},
		{
			name: "Guest activities desk",
			url: "https://www.astonkaanapalishoresresort.com/amenities/",
		},
		{
			name: "Jet spas (2)",
			url: "https://www.astonkaanapalishoresresort.com/amenities/",
		},
		{
			name: "Meeting rooms",
			url: "https://www.astonkaanapalishoresresort.com/amenities/",
		},
		{
			name: "On-site cultural experiences",
			url: "https://www.astonkaanapalishoresresort.com/amenities/",
		},
		{
			name: "Outdoor barbecues",
			url: "https://www.astonkaanapalishoresresort.com/amenities/",
		},
		{
			name: "Pickleball court",
			url: "https://www.astonkaanapalishoresresort.com/amenities/",
		},
		{
			name: "Restaurant & bar",
			url: "https://www.astonkaanapalishoresresort.com/amenities/",
		},
		{
			name: "Salon/spa",
			url: "https://www.astonkaanapalishoresresort.com/amenities/",
		},
		{
			name: "Sauna",
			url: "https://www.astonkaanapalishoresresort.com/amenities/",
		},
		{
			name: "Shuffleboard court",
			url: "https://www.astonkaanapalishoresresort.com/amenities/",
		},
		{
			name: "Swimming pools (2)",
			url: "https://www.astonkaanapalishoresresort.com/amenities/",
		},
		{
			name: "Wi-Fi Internet access throughout the hotel",
			url: "https://www.astonkaanapalishoresresort.com/amenities/",
		}
		
	],

	// list of hotel images
	imageArr: [
		{
		
			caption: "Aston Kaanapali Shores Beach Oceanfront",
			url: "https://s42525.p631.sites.pressdns.com/wp-content/uploads/2023/10/230619_AKS_GW_PoolBeach-9-min-scaled.jpg"
		},
		{
			caption: "Aston Kaanapali Shores Ocean View",
			url: "http://www.astonkaanapalishoresresort.com/wp-content/uploads/2023/10/230619_AKS_GW_Rooms-8-min-min-scaled.jpg"
		},
		{
			caption: "Aston Kaanapali Shores Sky View of Pool",
			url: "https://s42525.p631.sites.pressdns.com/wp-content/uploads/2023/09/leisure-at-its-finest-min-scaled.jpeg"
		},
		{
			caption: "Aston Kaanapali Shores Hotel & Pool",
			url: "http://www.astonkaanapalishoresresort.com/wp-content/uploads/2023/12/Aston-Kaanapali-Shores-Garden-Pool-1903x1281-1.jpg"
		}
		
	],

	// list of rooms
	roomsArr: [
		
		{

			// must be either 'Suite' or 'Room'
			type: "HotelRoom",

			// name of the room
			name: "Hotel Room",

			// URL of this specific room
			url: "https://www.astonkaanapalishoresresort.com/rooms-suites",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14892&level=hotel&locale=en-US&room=HR00&src=AKS.HR00.schema",

			// description of the room
			description: "Get cozy in one of our attractive hotel rooms with resort view. Resort view may include one or more views of mountains, courtyard, or neighboring resorts.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: 2,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "1",

			bedType: "Queen",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: "aston kaanapali shores hotel bedroom",
					url: "https://s42525.p631.sites.pressdns.com/wp-content/uploads/2023/10/aston-kaanapali-shores-hotel-bedroom-937-017-1440x960-1.jpeg"
				},
				{
					caption: "aston kaanapali shores hotel bathroom",
					url: "https://s42525.p631.sites.pressdns.com/wp-content/uploads/2023/10/aston-kaanapali-shores-hotel-bathroom-937-026-1440x960-1.jpeg"
				},
				{

			// must be either 'Suite' or 'Room'
			type: "Suite",

			// name of the room
			name: "Junior Suite with Kitchen",

			// URL of this specific room
			url: "https://www.astonkaanapalishoresresort.com/rooms-suites",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14892&level=hotel&locale=en-US&room=STST&src=AKS.STST.schema",

			// description of the room
			description: "For a Kaanapali Shores condo to call your own, our spacious Junior Suite includes a full kitchen, sofa bed and private balcony.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: 3,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "2",

			bedType: "Queen and Sofa Bed",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: "Junior Suite Room with Kitchen - Bedroom",
					url: "https://s42525.p631.sites.pressdns.com/wp-content/uploads/2023/10/junior-suite-with-kitchen-suite-min.jpeg"
				},
				{
					caption: "Full Kitchen",
					url: "https://s42525.p631.sites.pressdns.com/wp-content/uploads/2023/10/aston-kaanapali-shores-hotel-jr-suite-kitchen-932-011-1440x960-2.jpeg"
				},
				{
					caption: "Junior Suite Room with Kitchen - Bathroom",
					url: "https://s42525.p631.sites.pressdns.com/wp-content/uploads/2023/10/aston-kaanapali-shores-hotel-jr-suite-kitchen-932-011-1440x960-2.jpeg"
				}
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: "Integrative Health Plan",
					url: "https://theranchlife.com/health-and-fitness-programs/functional-health-programs/#the-ranch",
				}
			]

		},
		{

			// must be either 'Suite' or 'Room'
			type: "Suite",

			// name of the room
			name: "1-Bedroom 1-Bath Standard Suite",

			// URL of this specific room
			url: "https://www.astonkaanapalishoresresort.com/rooms-suites",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14892&level=hotel&locale=en-US&room=1BST&src=AKS.1BST.schema",

			// description of the room
			description: "You’ll enjoy over 900 square feet in this home-away-from-home one-bedroom suite. These suites have a separate bedroom, private balcony, fully equipped kitchen, and in-suite washer/dryer.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: 4,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "2",

			bedType: "King or Queen and Sofa Bed",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: "1-Bedroom 1-Bath Standard Suite Interior",
					url: "https://s42525.p631.sites.pressdns.com/wp-content/uploads/2023/10/aston-kaanapali-shores-1-bedroom-1-bathroom-standard-suite-livingroom-1440x960-1.jpeg"
				},
				{
					caption: "1-Bedroom 1-Bath Standard Suite Bedroom Interior View",
					url: "https://s42525.p631.sites.pressdns.com/wp-content/uploads/2023/11/aston-kaanapali-shores-hotel-bedroom-937-017-1440x960-min.jpeg"
				},
				{
					caption: "Junior Suite Room with Kitchen - Bathroom",
					url: "https://s42525.p631.sites.pressdns.com/wp-content/uploads/2023/10/aston-kaanapali-shores-hotel-jr-suite-kitchen-932-011-1440x960-2.jpeg"
				}
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: "Central air-conditioning",
					url: "https://www.astonkaanapalishoresresort.com/rooms-suites/",
				},
				{
					name: "Full kitchen",
					url: "https://www.astonkaanapalishoresresort.com/rooms-suites/",
				},
				{
					name: "Private balcony",
					url: "https://www.astonkaanapalishoresresort.com/rooms-suites/",
				},
				{
					name: "Washer/dryer",
					url: "https://www.astonkaanapalishoresresort.com/rooms-suites/",
				},
				{
					name: "WiFi access",
					url: "https://www.astonkaanapalishoresresort.com/rooms-suites/",
				}
			]

		}		
	],

	// list of restaurants at the hotel
	restaurants: [
		
		{
			
			name: "The Beach Club Restaurant & Bar",
			url: "https://www.astonkaanapalishoresresort.com/dining/",
			description: "Dine indoors or al fresco while taking in views of neighboring islands Lanai and Molokai at The Beach Club Restaurant & Bar at Aston Kaanapali Shores. Serving up American dishes with a Pacific Rim flare, fuel up with a fresh stack of Maui pancakes topped with coconut and maple syrup or satisfy your sweet tooth with Hawaiian French toast dipped in cinnamon decadence. Treat your eyes and tastebuds with coconut shrimp, barbecue ribs prepared “island style,” or kalua pork flatbread dressed with roasted pineapple and mango barbecue sauce. And if you’re busy soaking in the sunshine, enjoy your refreshing beverages and bites poolside.",

			// the URL of the menu (can be a PDF if applicable)
			menuUrl: "https://www.aquaaston.com/files/live/sites/aah/files/properties/AKS/amenities/beach-club-menus/Beach-Club-Lunch-Dinner-Menu.pdf",

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1‑808‑667‑3723", // format: x-xxx-xxx-xxxx
				email: "res.aks@astonreservations.com"
				
			},
			
			// location
			location: {
				street: "3445 Lower Honoapiilani Road",
				city: "Lahaina",
				state: "Hi", // 2 letter state code
				zip: "96761",
				country: "USA"
			},
			
			// rating
			rating: {
				value: 4.0,
				count: 267
			},

			// Tuhin, leave the 'openingHours' and 'servesCuisine' empty for now
			openingHours: [],
			servesCuisine: []
			
		}
	],

	// list of spas at the hotel
	spas: [
		
		{
			name: "aston kaanapali shore resort spa",
			url: "https://www.astonkaanapalishoresresort.com/spa",
			description: "For generations, Hawaiian healers have practiced and passed down the art of the lomi lomi massage—an ancient technique used to restore the mind, body and spirit. Today, it’s one of the therapeutic treatments you can relish with a visit to the Puamana Day Spa right here at the resort. Indulge in a hot stone massage using lava rocks naturally smoothed and polished by the Pacific Ocean. Treat your skin to a rejuvenating facial with healing vitamins and botanicals. Enhance your wellness experience with aromatherapy or a warm coconut oil scalp massage.",
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
			author: "Angela Mitchell", // name of the reviewer
			value: "5", // be sure to only include 5 star reviews -> so the value should always be 5
			datePublished: "2024-03-19",
			reviewed: {

				// Tuhin, set the 'type' to 'VacationRental' for all for now
				type: "VacationRental", // expected: 'VacationRental' (can add more functionality later)

				// Tuhin, leave the 'name' empty for now for any reviews
				name: ""
			}
		},
		{
			author: "Abdul Rahman", // name of the reviewer
			value: "5", // be sure to only include 5 star reviews -> so the value should always be 5
			datePublished: "2024-03-05",
			reviewed: {

				// Tuhin, set the 'type' to 'VacationRental' for all for now
				type: "VacationRental", // expected: 'VacationRental' (can add more functionality later)

				// Tuhin, leave the 'name' empty for now for any reviews
				name: ""
			}
		}
	]
	
}
