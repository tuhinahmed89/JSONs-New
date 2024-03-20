
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
	name: "Ilikai Hotel & Luxury Suites",

	// MUST be either "Hotel" or "Resort"
	type: "Hotel",

	// the website of the hotel
	// include 'https://' and any subdomain such as 'www' (if applicable)
	// must not end with a '/'
	homepage: "https://www.ilikaihotel.com",

	// slogan/motto/tagline of the hotel
	slogan: "An Unforgettable Experience",

	// a brief description of the hotel
	description: "At the crossroads between Waikiki’s white sand beaches and Honolulu’s city life, the relaxed elegance of the Ilikai Hotel & Luxury Suites awaits. Experience breathtaking panoramic views of the ever-changing colorful sky, the glassy blue waters of the Pacific, and Oahu’s scenic south shore.",

	// if pets are allowed in the hotel or not
	petsAllowedTrueFalse: "false",

	// total number of rooms that are used as accommodations
	totalRoomCount: "1009",

	// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
	priceRange: "$$$",

	// array of accepted currencies
	currenciesAccepted: ['USD'],

	// array of accepted payment methods
	paymentAccepted: ['Credit Cards Are Accepted'],

	// array of languages spoken by the staff
	availableLanguage: ['English'],

	// based on 24 hours time. ex: 14:00
	checkInTime: "15:00",
	checkOutTime: "12:00",

	// rating
	rating: {
		value: 4.3,
		count: 3154
	},

	// contact
	contact: {

		// format: 1-234-567-8910
		phone: "1-808-949-3811",

		email: "guestservices@ilikaihotel.com"
	},
	
	// location
	location: {
		street: '1777 Ala Moana Blvd',
		city: 'Honolulu',
		state: 'HI',
		zip: '96815',
		country: 'USA',
		lat: 21.2865, // latitude coordinates
		long: -157.8387 // longitude coordinates
	},

	// links
	logoUrl: "https://s45578.p631.sites.pressdns.com/wp-content/uploads/2023/12/ilikailogodesktop-sticky.svg",

	// this is required - every hotel must have a copyright or privacy link
	copyrightUrl: "https://www.aquaaston.com/about-us/terms-of-use",

	// social media URLs
	// no '/' at the end of the URL
	facebookUrl: "https://www.facebook.com/ilikaihotel",
	twitterUrl: 'https://twitter.com/aquaaston',
	instagramUrl: 'https://www.instagram.com/ilikaihotel',
	linkedinUrl: null,

	// list of hotel amenities
	amenitiesArr: [
		
				{
					name: 'Air conditioning', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full kitchen w/4-burner stovetop, microwave, and toaster', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Private balcony', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Wake up call service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: '40-in LCD TV', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Blackout drapes', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full-sized refrigerator', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Enhanced cleaning protocols', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Hair dryer', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'In-room safe', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Movie rentals', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee & tea packets replenished', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'essential items service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Iron/ironing board', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Telephone w/voicemail', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Alarm clock radio', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee maker', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Daily local newspaper', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				}
		
	],

	// list of hotel images
	imageArr: [
		{
		
			caption: "Iconic. Irresistible. Ilikai.",
			url: "https://s45578.p631.sites.pressdns.com/wp-content/uploads/2023/12/3x2-1.jpg"
		},
		{
			caption: "Your Waikiki Getaway Awaits",
			url: "http://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/Ilikai-couple-harbor-view-2560x789-1.jpg"
		},
		{
			caption: "Your Waikiki Getaway Awaits",
			url: "http://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/Ilikai-skyline-2560x789-1.jpg"
		},
		{
			caption: "Your Waikiki Getaway Awaits",
			url: "http://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/Ilikai-skyline-2560x789-1.jpg"
		},
		{
			caption: "Your Waikiki Getaway Awaits",
			url: "http://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/Ilikai-walkway-woman-2560x789-1.jpg"
		},
		{
			caption: "Unwind in Spacious Suites",
			url: "http://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/Ilikai-family-living-room-1800x1200-1.jpg"
		},
		{
			caption: "Dining Delights",
			url: "https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/Pesca-dish-1200x800-1.jpg"
		},
		{
			caption: "Explore and Discover",
			url: "https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/blurb-2.jpg"
		},
		{
			caption: "Experience the Ultimate in Convenience",
			url: "https://s45578.p631.sites.pressdns.com/wp-content/uploads/2023/12/Ilikai_Hotel___Luxury_Suites_2-Bedroom_Oceanfront_Bedroom-2.png"
		},
		{
			caption: "Kaamaina Rates",
			url: "https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/kamaaina-component.jpg"
		},
		{
			caption: "Senior Savings",
			url: "http://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/senior.jpg"
		},
		{
			caption: "View All offers",
			url: "https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/home-offers-3.jpg"
		},
		
	],

	// list of rooms
	roomsArr: [
	
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Luxury Junior Suite Sunset Ocean View', // string
			url: 'https://www.ilikaihotel.com/property-overview/suites/', // url
			bookUrl: 'https://be.synxis.com/?locale=en-us&hotel=27641&room=OSL&src=ili.suites.OSL&_gl=1*cgvumc*_ga*NjU0NzAzMTEuMTcxMDY3MjQwMA..*_ga_G0DP9JYES6*MTcxMDc5NjIxNS42LjEuMTcxMDc5OTE1Mi4wLjAuMA..#_ga=2.250357062.1307598240.1710796216-65470311.1710672400', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'A highly desired accommodation, where the best amenity is the view. These 500 square foot studios are furnished with upscale appliances and modern fixtures that exude the style and comfort you would expect to find in a luxury suite.', // string
			maxOccupancy: '4', // number
			checkInTime: '15:00', // datetime
			checkOutTime: '12:00', // datetime
			bedCount: '2', // number
			bedType: 'King and Sofa Bed', // string
			smokingBoolean: 'False', // boolean
			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",
			images: [
				{
					caption: 'Luxury Junior Suite Sunset Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/sunset-ocean-view-2.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Sunset Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/sunset-ocean-view-4.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Sunset Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/sunset-ocean-view-7.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Sunset Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/sunset-ocean-view-5.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Sunset Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/sunset-ocean-view-6.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Sunset Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/sunset-ocean-view-1.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Sunset Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/sunset-ocean-view-3.jpg', // url
				},
			],
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full kitchen w/4-burner stovetop, microwave, and toaster', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Private balcony', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Wake up call service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: '40-in LCD TV', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Blackout drapes', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full-sized refrigerator', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Enhanced cleaning protocols', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Hair dryer', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'In-room safe', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Movie rentals', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee & tea packets replenished', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'essential items service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Iron/ironing board', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Telephone w/voicemail', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Alarm clock radio', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee maker', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Daily local newspaper', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				}
				
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Luxury Junior Suite City View', // string
			url: 'https://www.ilikaihotel.com/suites', // url
			bookUrl: 'https://be.synxis.com/?locale=en-us&hotel=27641&room=CTL&src=ili.suites.CTL&_gl=1*1relq40*_ga*NjU0NzAzMTEuMTcxMDY3MjQwMA..*_ga_G0DP9JYES6*MTcxMDc5NjIxNS42LjEuMTcxMDc5OTE1Mi4wLjAuMA..#_ga=2.177948901.1307598240.1710796216-65470311.1710672400', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'Modern and chic, this junior suite includes high-end furniture with modern style. Large bathroom has custom tile, granite, glass, and a massage jet showerhead. Full kitchen with granite counter tops.', // string
			maxOccupancy: '4', // number
			checkInTime: '15:00', // datetime
			checkOutTime: '12:00', // datetime
			bedCount: '2', // number
			bedType: 'King and Sofa Bed', // string
			smokingBoolean: 'False', // boolean
			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",
			images: [
				{
					caption: 'Luxury Junior Suite City View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/junior-city-view-4.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite City View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/junior-city-view-3.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite City View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/junior-city-view-5.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite City View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/junior-city-view-6.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite City View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/junior-city-view-2.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite City View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/junior-city-view-1.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full kitchen w/4-burner stovetop, microwave, and toaster', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Private balcony', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Wake up call service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: '40-in LCD TV', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Blackout drapes', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full-sized refrigerator', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Enhanced cleaning protocols', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Hair dryer', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'In-room safe', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Movie rentals', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee & tea packets replenished', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'essential items service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Iron/ironing board', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Telephone w/voicemail', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Alarm clock radio', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee maker', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Daily local newspaper', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Luxury Junior Suite Courtyard View', // string
			url: 'https://www.ilikaihotel.com/property-overview/suites/', // url
			bookUrl: 'https://be.synxis.com/?locale=en-us&hotel=27641&room=CYL&src=ili.suites.CYL&_gl=1*1relq40*_ga*NjU0NzAzMTEuMTcxMDY3MjQwMA..*_ga_G0DP9JYES6*MTcxMDc5NjIxNS42LjEuMTcxMDc5OTE1Mi4wLjAuMA..#_ga=2.177948901.1307598240.1710796216-65470311.1710672400', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'Glimpse our bustling courtyard and surrounding area. Suite features a full gourmet kitchen, seating area, and private balcony.', // string
			maxOccupancy: '4', // number
			checkInTime: '15:00', // datetime
			checkOutTime: '12:00', // datetime
			bedCount: '2', // number
			bedType: 'King and Sofa Bed', // string
			smokingBoolean: '', // boolean
			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",
			images: [
				{
					caption: 'Luxury Junior Suite Courtyard View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/courtyard-view-1.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Courtyard View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/courtyard-view-5.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Courtyard View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/courtyard-view-2.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Courtyard View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/courtyard-view-4.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Courtyard View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/courtyard-view-1.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Courtyard View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/courtyard-view-3.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full kitchen w/4-burner stovetop, microwave, and toaster', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Private balcony', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Wake up call service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: '40-in LCD TV', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Blackout drapes', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full-sized refrigerator', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Enhanced cleaning protocols', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Hair dryer', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'In-room safe', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Movie rentals', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee & tea packets replenished', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'essential items service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Iron/ironing board', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Telephone w/voicemail', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Alarm clock radio', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee maker', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Daily local newspaper', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Luxury Junior Suite Poolside View', // string
			url: 'https://www.ilikaihotel.com/property-overview/suites/', // url
			bookUrl: 'https://be.synxis.com/?locale=en-us&hotel=27641&room=PSL&src=ili.suites.PSL&_gl=1*1relq40*_ga*NjU0NzAzMTEuMTcxMDY3MjQwMA..*_ga_G0DP9JYES6*MTcxMDc5NjIxNS42LjEuMTcxMDc5OTE1Mi4wLjAuMA..#_ga=2.177948901.1307598240.1710796216-65470311.1710672400', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'Indulge in luxury, this junior suite includes high-end furniture with modern style. Spacious patio offers views of the pool and sundeck. Large bathroom has custom tile, granite, glass, and a massage jet showerhead. Full kitchen with granite counter tops.', // string
			maxOccupancy: '4', // number
			checkInTime: '15:00', // datetime
			checkOutTime: '12:00', // datetime
			bedCount: '2', // number
			bedType: 'King Bed & Sofa Bed', // string
			smokingBoolean: 'False', // boolean
			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",
			images: [
				{
					caption: 'Luxury Junior Suite Poolside View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/poolside-view-2.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Poolside View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/poolside-view-5.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Poolside View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/poolside-view-4.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Poolside View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/poolside-view-6.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Poolside View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/poolside-view-1.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Poolside View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/poolside-view-3.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full kitchen w/4-burner stovetop, microwave, and toaster', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Private balcony', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Wake up call service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: '40-in LCD TV', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Blackout drapes', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full-sized refrigerator', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Enhanced cleaning protocols', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Hair dryer', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'In-room safe', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Movie rentals', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee & tea packets replenished', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'essential items service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Iron/ironing board', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Telephone w/voicemail', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Alarm clock radio', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee maker', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Daily local newspaper', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Luxury Junior Suite Partial Ocean View', // string
			url: 'https://www.ilikaihotel.com/property-overview/suites/', // url
			bookUrl: 'https://be.synxis.com/?locale=en-us&hotel=27641&room=POL&src=ili.suites.POL&_gl=1*x6sl3*_ga*NjU0NzAzMTEuMTcxMDY3MjQwMA..*_ga_G0DP9JYES6*MTcxMDc5NjIxNS42LjEuMTcxMDc5OTE1Mi4wLjAuMA..#_ga=2.148638967.1307598240.1710796216-65470311.1710672400', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'Always a grandeur experience, this junior suite includes high-end furniture with modern style. Spacious patio overlooks the marina and offers sunset views. Large bathroom has custom tile, granite, glass, and a massage jet showerhead. Full kitchen with granite counter tops.', // string
			maxOccupancy: '4', // number
			checkInTime: '15:00', // datetime
			checkOutTime: '12:00', // datetime
			bedCount: '', // number
			bedType: 'King Bed & Sofa Bed', // string
			smokingBoolean: 'False', // boolean
			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",
			images: [
				{
					caption: 'Luxury Junior Suite Partial Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/partial-ocean-view-2.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Partial Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/partial-ocean-view-5.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Partial Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/partial-ocean-view-6.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Partial Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/partial-ocean-view-3.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Partial Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/partial-ocean-view-4.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Partial Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/partial-ocean-view-1.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full kitchen w/4-burner stovetop, microwave, and toaster', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Private balcony', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Wake up call service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: '40-in LCD TV', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Blackout drapes', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full-sized refrigerator', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Enhanced cleaning protocols', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Hair dryer', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'In-room safe', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Movie rentals', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee & tea packets replenished', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'essential items service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Iron/ironing board', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Telephone w/voicemail', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Alarm clock radio', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee maker', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Daily local newspaper', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Luxury Junior Suite Ocean View', // string
			url: 'https://www.ilikaihotel.com/property-overview/suites/', // url
			bookUrl: 'https://be.synxis.com/?locale=en-us&hotel=27641&room=ODL&src=ili.suites.ODL&_gl=1*x6sl3*_ga*NjU0NzAzMTEuMTcxMDY3MjQwMA..*_ga_G0DP9JYES6*MTcxMDc5NjIxNS42LjEuMTcxMDc5OTE1Mi4wLjAuMA..#_ga=2.148638967.1307598240.1710796216-65470311.1710672400', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'Prepare a cocktail and relax on your 120 square foot lanai, taking in views of Duke Kahanamoku Lagoon and the Pacific Ocean beyond. Some rooms may even offer views of the Friday night fireworks (subject to availability).', // string
			maxOccupancy: '4', // number
			checkInTime: '15:00', // datetime
			checkOutTime: '12:00', // datetime
			bedCount: '2', // number
			bedType: 'King and Sofa Bed', // string
			smokingBoolean: 'False', // boolean
			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",
			images: [
				{
					caption: 'Luxury Junior Suite Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/junior-ocean-view-1.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/junior-ocean-view-4-1.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/junior-ocean-view-6-1.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/junior-ocean-view-5-1.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/junior-ocean-view-3-1.jpg', // url
				},
				{
					caption: 'Luxury Junior Suite Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/junior-ocean-view-2-1.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full kitchen w/4-burner stovetop, microwave, and toaster', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Private balcony', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Wake up call service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: '40-in LCD TV', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Blackout drapes', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full-sized refrigerator', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Enhanced cleaning protocols', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Hair dryer', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'In-room safe', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Movie rentals', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee & tea packets replenished', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'essential items service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Iron/ironing board', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Telephone w/voicemail', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Alarm clock radio', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee maker', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Daily local newspaper', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Luxury 1-Bedroom Boulevard View Suite', // string
			url: 'https://www.ilikaihotel.com/property-overview/suites/', // url
			bookUrl: 'https://be.synxis.com/?locale=en-us&hotel=27641&room=1BL&src=ili.suites.1BL&_gl=1*1uvkcwq*_ga*NjU0NzAzMTEuMTcxMDY3MjQwMA..*_ga_G0DP9JYES6*MTcxMDc5NjIxNS42LjEuMTcxMDc5OTUxMS4wLjAuMA..#_ga=2.174205282.1307598240.1710796216-65470311.1710672400', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'This suite with a bedroom and separate living area offers a bird’s-eye view of Ala Moana Boulevard. Suite features a full gourmet kitchen, seating area, and private lanai.', // string
			maxOccupancy: '4', // number
			checkInTime: '15:00', // datetime
			checkOutTime: '12:00', // datetime
			bedCount: '2', // number
			bedType: 'Kings and Sofa Bed', // string
			smokingBoolean: 'False', // boolean
			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",
			images: [
				{
					caption: 'Luxury 1-Bedroom Boulevard View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/boulevard-2.jpg', // url
				},
				{
					caption: 'Luxury 1-Bedroom Boulevard View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/boulevard-7.jpg', // url
				},
				{
					caption: 'Luxury 1-Bedroom Boulevard View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/boulevard-6.jpg', // url
				},
				{
					caption: 'Luxury 1-Bedroom Boulevard View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/boulevard-8.jpg', // url
				},
				{
					caption: 'Luxury 1-Bedroom Boulevard View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/boulevard-5.jpg', // url
				},
				{
					caption: 'Luxury 1-Bedroom Boulevard View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/boulevard-1.jpg', // url
				},
				{
					caption: 'Luxury 1-Bedroom Boulevard View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/boulevard-3.jpg', // url
				},
				{
					caption: 'Luxury 1-Bedroom Boulevard View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/boulevard-4.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full kitchen w/4-burner stovetop, microwave, and toaster', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Private balcony', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Wake up call service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: '40-in LCD TV', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Blackout drapes', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full-sized refrigerator', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Enhanced cleaning protocols', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Hair dryer', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'In-room safe', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Movie rentals', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee & tea packets replenished', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'essential items service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Iron/ironing board', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Telephone w/voicemail', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Alarm clock radio', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee maker', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Daily local newspaper', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Luxury 1-Bedroom Ocean View Suite', // string
			url: 'https://www.ilikaihotel.com/property-overview/suites/', // url
			bookUrl: 'https://be.synxis.com/?locale=en-us&hotel=27641&room=1OV&src=ili.suites.1OV&_gl=1*1uvkcwq*_ga*NjU0NzAzMTEuMTcxMDY3MjQwMA..*_ga_G0DP9JYES6*MTcxMDc5NjIxNS42LjEuMTcxMDc5OTUxMS4wLjAuMA..#_ga=2.174205282.1307598240.1710796216-65470311.1710672400', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'Spread out in this suite with one bedroom that offers a separate living area and relaxing views that overlook Duke Kahanamoku Lagoon and extend to the Pacific Ocean. Suite also features a full gourmet kitchen and private balcony.', // string
			maxOccupancy: '4', // number
			checkInTime: '15:00', // datetime
			checkOutTime: '12:00', // datetime
			bedCount: '2', // number
			bedType: 'King and Sofa Bed', // string
			smokingBoolean: 'False', // boolean
			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",
			images: [
				{
					caption: 'Luxury 1-Bedroom Ocean View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/1-room-ocean-view-1.jpg', // url
				},
				{
					caption: 'Luxury 1-Bedroom Ocean View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/1-room-ocean-view-5.jpg', // url
				},
				{
					caption: 'Luxury 1-Bedroom Ocean View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/1-room-ocean-view-6.jpg', // url
				},
				{
					caption: 'Luxury 1-Bedroom Ocean View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/1-room-ocean-view-3.jpg', // url
				},
				{
					caption: 'Luxury 1-Bedroom Ocean View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/1-room-ocean-view-4.jpg', // url
				},
				{
					caption: 'Luxury 1-Bedroom Ocean View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/1-room-ocean-view-2.jpg', // url
				},
			],
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full kitchen w/4-burner stovetop, microwave, and toaster', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Private balcony', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Wake up call service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: '40-in LCD TV', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Blackout drapes', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full-sized refrigerator', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Enhanced cleaning protocols', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Hair dryer', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'In-room safe', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Movie rentals', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee & tea packets replenished', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'essential items service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Iron/ironing board', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Telephone w/voicemail', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Alarm clock radio', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee maker', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Daily local newspaper', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Luxury 2-Bedroom City View Suite', // string
			url: 'https://www.ilikaihotel.com/property-overview/suites/', // url
			bookUrl: 'https://be.synxis.com/?locale=en-us&hotel=27641&room=SCL&src=ili.suites.SCL&_gl=1*pvu33o*_ga*NjU0NzAzMTEuMTcxMDY3MjQwMA..*_ga_G0DP9JYES6*MTcxMDc5NjIxNS42LjEuMTcxMDc5OTUxMS4wLjAuMA..#_ga=2.207642706.1307598240.1710796216-65470311.1710672400', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'With 1,240 total square feet, our two-bedroom suites are an ideal home-away-from-home for families. Suite features two bathrooms, a full gourmet kitchen, seating area, and private lanai.', // string
			maxOccupancy: '6', // number
			checkInTime: '15:00', // datetime
			checkOutTime: '12:00', // datetime
			bedCount: '3', // number
			bedType: '2 Kings and Sofa Bed', // string
			smokingBoolean: 'False', // boolean
			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",
			images: [
				{
					caption: 'Luxury 2-Bedroom City View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-cv-1.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom City View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-cv-2.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom City View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-cv-5.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom City View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-cv-6.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom City View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-cv-8.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom City View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-cv-3.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom City View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-cv-7.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom City View Suite', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-cv-4.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full kitchen w/4-burner stovetop, microwave, and toaster', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Private balcony', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Wake up call service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: '40-in LCD TV', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Blackout drapes', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full-sized refrigerator', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Enhanced cleaning protocols', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Hair dryer', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'In-room safe', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Movie rentals', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee & tea packets replenished', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'essential items service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Iron/ironing board', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Telephone w/voicemail', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Alarm clock radio', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee maker', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Daily local newspaper', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Luxury 2-Bedroom Ocean View', // string
			url: 'https://www.ilikaihotel.com/property-overview/suites/', // url
			bookUrl: 'https://be.synxis.com/?locale=en-us&hotel=27641&room=SOL&src=ili.suites.SOL&_gl=1*pvu33o*_ga*NjU0NzAzMTEuMTcxMDY3MjQwMA..*_ga_G0DP9JYES6*MTcxMDc5NjIxNS42LjEuMTcxMDc5OTUxMS4wLjAuMA..#_ga=2.207642706.1307598240.1710796216-65470311.1710672400', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'Experience the breathtaking views of the Pacific Ocean and Duke Kahanamoku Lagoon. Perfect for families or large groups, these 1240 square foot studios are furnished with fully-equipped kitchens and new stainless steel appliances. Both bedrooms feature a single king bed along with all the premium amenities that our other luxury suites offer.', // string
			maxOccupancy: '6', // number
			checkInTime: '15:00', // datetime
			checkOutTime: '12:00', // datetime
			bedCount: '3', // number
			bedType: '2 Kings and Sofa Bed', // string
			smokingBoolean: 'False', // boolean
			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",
			images: [
				{
					caption: 'Luxury 2-Bedroom Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-ov-1.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-ov-2.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-ov-5.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-ov-6.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-ov-7.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-ov-8.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-ov-4.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom Ocean View', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-ov-3.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full kitchen w/4-burner stovetop, microwave, and toaster', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Private balcony', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Wake up call service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: '40-in LCD TV', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Blackout drapes', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full-sized refrigerator', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Enhanced cleaning protocols', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Hair dryer', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'In-room safe', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Movie rentals', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee & tea packets replenished', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'essential items service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Iron/ironing board', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Telephone w/voicemail', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Alarm clock radio', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee maker', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Daily local newspaper', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				}
			],
		},
		
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: 'Luxury 2-Bedroom Oceanfront', // string
			url: 'https://www.ilikaihotel.com/property-overview/suites/', // url
			bookUrl: 'https://be.synxis.com/?locale=en-us&hotel=27641&room=SFL&src=ili.suites.SFL&_gl=1*pvu33o*_ga*NjU0NzAzMTEuMTcxMDY3MjQwMA..*_ga_G0DP9JYES6*MTcxMDc5NjIxNS42LjEuMTcxMDc5OTUxMS4wLjAuMA..#_ga=2.207642706.1307598240.1710796216-65470311.1710672400', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'This suite will leave you in pure bliss as you enjoy all day views starting with the morning beach backdrop, to spectacular unforgettable sunsets. Located on the upper floors, suite features two separate bedrooms and a spacious living and dining area. Suite includes two large bathrooms featuring custom tile, granite, glass and a massage jet showerhead. Fully equipped kitchen with granite counter tops.', // string
			maxOccupancy: '6', // number
			checkInTime: '15:00', // datetime
			checkOutTime: '12:00', // datetime
			bedCount: '3', // number
			bedType: '2 Kings and Sofa Bed', // string
			smokingBoolean: 'False', // boolean
			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",
			images: [
				{
					caption: 'Luxury 2-Bedroom Oceanfront', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-of-2.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom Oceanfront', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-of-3.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom Oceanfront', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-of-1.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom Oceanfront', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-of-6.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom Oceanfront', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-of-8.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom Oceanfront', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-of-4.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom Oceanfront', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-of-7.jpg', // url
				},
				{
					caption: 'Luxury 2-Bedroom Oceanfront', // string
					url: 'https://s45578.p631.sites.pressdns.com/wp-content/uploads/2024/01/luxury-2B-of-5.jpg', // url
				}
			],
			roomAmenitiesArr: [
			    {
					name: 'Air conditioning', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full kitchen w/4-burner stovetop, microwave, and toaster', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Private balcony', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Wake up call service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: '40-in LCD TV', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Blackout drapes', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Full-sized refrigerator', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Enhanced cleaning protocols', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Hair dryer', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'In-room safe', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Movie rentals', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee & tea packets replenished', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'essential items service', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Iron/ironing board', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Telephone w/voicemail', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Alarm clock radio', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Coffee maker', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				},
				{
					name: 'Daily local newspaper', // string
					url: 'https://www.ilikaihotel.com/suites', // url
				}
			],
		}
	],

	// list of restaurants at the hotel
	restaurants: [
		
		{
			
			name: "Pesca Waikiki Beach",
			url: "https://www.ilikaihotel.com/dining/",
			description: "Relax at the edge of Waikiki Beach as you indulge in authentic Mediterranean fare at Pesca Waikiki Beach. Located on the top two floors of the Ilikai Hotel & Luxury Suites, the award-winning restaurant serves a world-class, fine dining menu with unparalleled views of the sea, sky, mountains and city.",

			// the URL of the menu (can be a PDF if applicable)
			menuUrl: "https://www.pescawaikikibeach.com/menu",

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1‑808-777-3100", // format: x-xxx-xxx-xxxx
				email: "info@pescasea.com"
				
			},
			
			// location
			location: {
				street: "1777 Ala Moana Blvd, Sky Floor",
				city: "Honolulu",
				state: "Hi", // 2 letter state code
				zip: "96815",
				country: "USA" ,  
			},
			
			// rating
			rating: {
				value: 3.8,
				count: 322
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		},
		{
			
			name: "Paradise Poke",
			url: "https://www.ilikaihotel.com/dining/",
			description: "Paradise Poke was born from a fisherman’s family wanting to provide the community with fresh, locally sourced fish. This island-style poke spot serves up some of the best Hawaiian poke while sustainably supporting Hawaii’s fishing industry. Just show them your Ilikai Hotel & Luxury Suites room card and receive a 10% discount!",

			// the URL of the menu (can be a PDF if applicable)
			menuUrl: "https://paradisepokenuuanu.com/menu/",

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1‑808-207-3129", // format: x-xxx-xxx-xxxx
				email: "paradisepokehi@gmail.com"
				
			},
			
			// location
			location: {
				street: "1613 Nuuanu Ave #A12",
				city: "Honolulu",
				state: "Hi", // 2 letter state code
				zip: "96817",
				country: "USA" ,  
			},
			
			// rating
			rating: {
				value: 4.7,
				count: 93,
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		}
		{
			
			name: "Hawaiian Aroma Caffé",
			url: "https://www.ilikaihotel.com/dining/",
			description: "Relax and enjoy authentic, high-quality, Italian and Hawaiian coffee at Hawaiian Aroma Caffé located right in our courtyard. Sip premium blend coffees and espresso roasts, or choose from their full line of specialty teas. Hawaiian Aroma Caffé also offers a delicious menu that includes waffles, acai bowls, and panini sandwiches.",

			// the URL of the menu (can be a PDF if applicable)
			menuUrl: "https://www.hawaiianaromacaffe.com/menu",

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1‑808-942-7662", // format: x-xxx-xxx-xxxx
				email: "info@hawaiianaromacaffe.com"
				
			},
			
			// location
			location: {
				street: "1777 Ala Moana Blvd.",
				city: "Honolulu",
				state: "Hi", // 2 letter state code
				zip: "96815",
				country: "USA" ,  

			},
			
			// rating
			rating: {
				value: 3.9,
				count: 167,
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		}
		{
			
			name: "Dave’s Hawaiian Ice Cream",
			url: "https://www.ilikaihotel.com/dining/",
			description: "Indulge in delightful decadence at Dave’s Hawaiian Ice Cream, a cherished institution that has been lavishing guests with its popular scoops for over three decades. Skillfully crafted on Oahu, each of their 50-plus ice cream flavors is a testament to their commitment to freshness and quality. Their exclusive concoctions include the ever-popular Hawaiian mud pie, subtle sophisticated green tea, and tangy tropical pineapple and mango.",

			// the URL of the menu (can be a PDF if applicable)
			menuUrl: "https://www.hawaiianaromacaffe.com/menu",

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1‑808-425-4496", // format: x-xxx-xxx-xxxx
				email: "info@hawaiianaromacaffe.com"
				
			},
			
			// location
			location: {
				street: "1777 Ala Moana Blvd.",
				city: "Honolulu",
				state: "Hi", // 2 letter state code
				zip: "96815",
				country: "USA" ,  

			},
			
			// rating
			rating: {
				value: 4.5,
				count: 200,
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		}
	],

	// list of spas at the hotel
	spas: [
		
		{
			name: "",
			url: "",
			description: "",
		}
		
	],

	// list of health clubs at the hotel
	healthClubs: [
		
		{
			name: "",
			url: "",
			description: "",
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
