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
			caption: "Water View King", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/nav-menu/rooms-dc.jpg" // url of the image source
		},
		{
			caption: "Club", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/nav-menu/club.jpg" // url of the image source
		},
		{
			caption: "Dining", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/nav-menu/dining.jpg" // url of the image source
		},
		{
			caption: "The Spa at Innisbrook", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/nav-menu/stock-flowers.jpg" // url of the image source
		},
		{
			caption: "DC attractions", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/nav-menu/dc.jpg" // url of the image source
		},
		{
			caption: "Ballroom", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/nav-menu/meetings.jpg" // url of the image source
		},
		{
			caption: "Monument Club", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/navpackages/09172020_hotelbennett_andrewcebulka-4949-1-.jpg" // url of the image source
		},
		{
			caption: "Gift Cards", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/navpackages/sdc-lounge-rendering-1-1-.jpg" // url of the image source
		},
		{
			caption: "Chef Kwame X Salamander DC", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/navpackages/dogon080824_0260-1-.jpg" // url of the image source
		},
		
		{
			caption: "Newly Enhanced Lounge", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/navpackages/sdc-lounge-rendering-1-1-.jpg" // url of the image source
		},
		{
			caption: "Enjoy exclusive access to The Monument Club", // a name or caption of the image
			url: "https://www.salamanderdc.comhttps://www.salamanderdc.com/images/content/homepageflyin/lifestyle-monument-club.jpg" // url of the image source
		},
		{
			caption: "Suite Serenity", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageflyin/suite-serenity-photo-final.jpg" // url of the image source
		},
		{
			caption: "woman on spa treatment table", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageflyin/salamanderresortscottkruitboschnoellabaronespa--99-1-.jpg" // url of the image source
		},
		{
			caption: "The Art of Giving", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageflyin/231102_salamanderdc_courtyard_0221_lowres-3-1-.jpg" // url of the image source
		},
		{
			caption: "A faraway shot of Salamander hotel", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageflyin/hotel-exterior.jpg?09530950337421684" // url of the image source
		},
		{
			caption: "The new living room at Salamander DC", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/hero/full/sdc-lobby-rendering-1-.jpg" // url of the image source
		},
		{
			caption: "The new Lounge and outdoor lounge terrace", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/hero/full/2.jpg" // url of the image source
		},
		{
			caption: "Salamander DC Suites", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/hero/full/240820_SalamanderDC_300Suites_0011_lowres.jpg" // url of the image source
		},
		{
			caption: "Horizontal Exterior", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/hero/full/dc_hero_0012_horizontal-exterior-with-salamander-logo.jpg" // url of the image source
		},
		{
			caption: "Luxury hotel room in D.C.", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/home/tiles/img-1/240820_SalamanderDC_300Suites_0011_lowres.jpg" // url of the image source
		},
		{
			caption: "Woman smiling in the sun", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/home/tiles/img-2/woman-looking.jpg" // url of the image source
		},
		{
			caption: "A chef holding skewers over a plate of food", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepagediningsliderlargeimg/dogon080824_0175-1-.jpg" // url of the image source
		},
		{
			caption: "pancakes with bananas and maple syrup and berries", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepagediningsliderlargeimg/pancake.jpg" // url of the image source
		},
		{
			caption: "Two beds in a hotel room with blue walls", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepagediningsliderlargeimg/double-bed.jpg" // url of the image source
		},
		{
			caption: "Chef Kwame Onwuachi returns to D.C.", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepagediningslidersmallimg/dogon080824_0260-1-.jpg" // url of the image source
		},
		{
			caption: "Afternoon Tea, Curated Cocktails and Culinary Delights", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepagediningslidersmallimg/231102_salamanderdc_courtyard_0258_lowres-1-.jpg" // url of the image source
		},
		{
			caption: "Open Daily for Guests 7AM - 12PM", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepagediningslidersmallimg/coffee-book.jpg" // url of the image source
		},
		{
			caption: "Dine from the comfort of your guestroom", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepagediningslidersmallimg/inroom-dining1.jpg" // url of the image source
		},
		{
			caption: "Studio Suite", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageroomslider/240820_SalamanderDC_328Suites_0158_lowres.jpg" // url of the image source
		},
		{
			caption: "A bedroom with one bed", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageroomslider/240820_SalamanderDC_328Suites_0196b_lowres.jpg" // url of the image source
		},
		{
			caption: "Marina View One Bedroom Suite", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageroomslider/240820_SalamanderDC_301Suites_0130_lowres.jpg" // url of the image source
		},
		{
			caption: "Deluxe Balcony One Bedroom Suite", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageroomslider/240820_SalamanderDC_328Suites_0196b_lowres.jpg" // url of the image source
		},
		{
			caption: "Premier Water View One Bedroom Suite", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageroomslider/240820_SalamanderDC_370Suites_0508_lowres.jpg" // url of the image source
		},
		{
			caption: "Diplomat Suite", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageroomslider/DIPLOMAT-SUITE.jpg" // url of the image source
		},
		{
			caption: "Mayor Suite", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageroomslider/MAYOR-SUITE.jpg" // url of the image source
		},
		{
			caption: "Ambassador Suite", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageroomslider/AMBASSADOR-SUITE.jpg" // url of the image source
		},
		{
			caption: "Bethune Suite", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageroomslider/BETHUNE-SUITE.jpg" // url of the image source
		},
		{
			caption: "Presidential Suite", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageroomslider/PRESIDENTIAL-SUITE.jpg" // url of the image source
		},
		{
			caption: "Deluxe Room", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageroomslider/DELUXE-ROOM.jpg" // url of the image source
		},
		{
			caption: "Premier Water View Room", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageroomslider/PREMIER-WATER-VIEW-ROOM.jpg" // url of the image source
		},
		{
			caption: "Deluxe Water View Room", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageroomslider/DELUXE-WATER-VIEW-ROOM.jpg" // url of the image source
		},
		{
			caption: "Weddings", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepagegatheringslidersmallimg/weddings.jpg" // url of the image source
		},
		{
			caption: "Meetings", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepagegatheringslidersmallimg/meetings.jpg" // url of the image source
		},
		{
			caption: "woman sitting in private monument club lounge", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepageoffers/untitled-design-66-.jpg" // url of the image source
		},
		{
			caption: "salamander spa welcome reception area", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepagespaslider/sdcspareception-rendering.jpg" // url of the image source
		},
		{
			caption: "Facial", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepagespaslider/facial1.jpg" // url of the image source
		},
		{
			caption: "A girl holding a yoga mat", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homepagespaslider/salamander-va-scott-kruitbosch-noella-barone-4011.jpg?09353786704116607" // url of the image source
		},
		{
			caption: "The Anthem", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/the-anthem-courtesy-of-washington.org-1-.jpg" // url of the image source
		},
		{
			caption: "Ride The Wharf Water Taxi", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/wharf.jpg" // url of the image source
		},
		{
			caption: "The Municipal Fish Market at The Wharf", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/fishmarket.jpg" // url of the image source
		},
		{
			caption: "The Wharf DC", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/thewharf-2-.jpg" // url of the image source
		},
		{
			caption: "", // a name or caption of the image
			url: "https://www.salamanderdc.com" // url of the image source
		},
		{
			caption: "", // a name or caption of the image
			url: "https://www.salamanderdc.com" // url of the image source
		},
		{
			caption: "Diverse Restaurant Scene", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/restaurant.jpg" // url of the image source
		},
		{
			caption: "Shopping", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/shopping.jpg" // url of the image source
		},
		{
			caption: "ARTECHOUSE DC", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/artechouse-dc.jpg" // url of the image source
		},
		{
			caption: "Martin Luther King, Jr. Memorial", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/mlkmemorial.jpg" // url of the image source
		},
		{
			caption: "World War II Memorial", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/wwiimemorial-1-.jpg" // url of the image source
		},
		{
			caption: "Lincoln Memorial", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/lincolnmemorial-1-.jpg?" // url of the image source
		},
		{
			caption: "Washington Monument", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/washingtonmonument.jpg" // url of the image source
		},
		{
			caption: "Big Bus Tour", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/BigBusTour.jpg" // url of the image source
		},
		{
			caption: "United States Capitol", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/thecapitol.jpg" // url of the image source
		},
		{
			caption: "National Museum of African American History and Culture", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/newdiscoveries.jpg" // url of the image source
		},
		{
			caption: "Thomas Jefferson Memorial", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/thomasjeffersonmemorial.jpg" // url of the image source
		},
		{
			caption: "United States Capitol dome", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/southwest-by-southwest.jpg" // url of the image source
		},
		{
			caption: "New Discoveries", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/newdiscoveries.jpg" // url of the image source
		},
		{
			caption: "Smithsonian National Museum of American History", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/culture.jpg" // url of the image source
		},
		{
			caption: "Salamander Exclusive Foot Bridge", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/woman-bridge.jpg" // url of the image source
		},
		{
			caption: "Afternoon Tea", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/afternoon-tea.jpg" // url of the image source
		},
		{
			caption: "Salamander Gem Car", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/01_gemcart_monument-1-.jpg" // url of the image source
		},
		{
			caption: "Cruiser Bikes", // a name or caption of the image
			url: "https://www.salamanderdc.com/images/content/homeactivities/bikes_mar_2023-1-1-.jpg" // url of the image source
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
