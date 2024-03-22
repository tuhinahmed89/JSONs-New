const hotel = {
	config: {
		live: "true", // indicates if the schema is live on the website
		features: {
			pageSpecific: "true", // if the schema is page-specific as opposed to a single global site-wide schema
			voiceSearch: "true", // if the schema is optimized for voice search
			arrays: {
				restaurants: "true", // if the schema includes restaurant data
				spas: "true", // if the schema includes spa data
				healthClubs: "true", // if the schema includes health club data
				rooms: "true", // if the schema includes room data
				amenities: "true" // if the schema includes amenities data
			}
		}
	},

	// the exact name of the hotel
	// be sure to include any letter accents or special characters correctly
	name: "Aston at The Whaler on Kaanapali Beach",

	// MUST be either "Hotel" or "Resort"
	type: "Resort",

	// the website of the hotel
	// include 'https://' and any subdomain such as 'www' (if applicable)
	// must not end with a '/'
	homepage: "https://www.globalambassadorhotel.com",

	// slogan/motto/tagline of the hotel
	slogan: "A Tranquil Oasis on Kaanapali Beach",

	// a brief description of the hotel
	description: "Beachfront leisure at its finest, Aston at The Whaler on Kaanapali Beach offers the tropical escape that dreams are made of.",

	// if pets are allowed in the hotel or not
	petsAllowedTrueFalse: "false",

	// total number of rooms that are used as accommodations
	totalRoomCount: "463",
	priceRange: "$$$",

	// array of accepted currencies
	currenciesAccepted: ['USD'],

	// array of accepted payment methods
	paymentAccepted: ['Credit Card', 'Debit Card'],

	// array of languages spoken by the staff
	availableLanguage: ['English'],

	// based on 24 hours time. ex: 14:00
	checkInTime: "16:00",
	checkOutTime: "11:00",

	// rating
	rating: {
		value: '4.6',
		count: '865',
	},

	// contact
	contact: {

		// format: 1-234-567-8910
		phone: "1-244-008-002",
		email: "info@astonhotels.com"
	},
	
	// location
	location: {
		street: '2481 Kaanapali Parkway',
		city: 'Lahaina',
		state: 'HI',
		zip: '96761',
		country: 'USA',
		lat: '21.3904', // latitude coordinates
		long: '-156.8466' // longitude coordinates
	},

	// links
	logoUrl: "http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-logo-blue.png",

	// this is required - every hotel must have a copyright or privacy link
	copyrightUrl: "https://www.aquaaston.com/about-us/terms-of-use",

	// social media URLs
	facebookUrl: "https://www.facebook.com/WhalerKaanapali",
	twitterUrl: "https://twitter.com/aquaaston",
	instagramUrl: "https://www.instagram.com/aquaaston",
	linkedinUrl: "null",

	// list of hotel amenities
	amenitiesArr: [
		
		{
			name: "Barbecue grills",
			url: "https://www.astonwhaler.com/amenities/",
		},
		{
			name: "Beach Concierge",
			url: "https://www.astonwhaler.com/amenities/",
		},
		{
			name: "Fitness center access",
			url: "https://www.astonwhaler.com/amenities/",
		},
		{
			name: "Laundry facilities",
			url: "https://www.astonwhaler.com/amenities/",
		},
		{
			name: "Pool",
			url: "https://www.astonwhaler.com/amenities/",
		},
		{
			name: 'Self-parking',
			url: 'https://www.astonwhaler.com/amenities/',
		},
		{
			name: 'Tennis/pickleball courts and equipment',
			url: 'https://www.astonwhaler.com/amenities/',
		},
		{
			name: 'Airline boarding pass printing',
			url: 'https://www.astonwhaler.com/amenities/',
		},
		{
			name: 'HD digital cable service with HBO',
			url: 'https://www.astonwhaler.com/amenities/',
		},
		{
			name: 'Poolside and lobby refreshments',
			url: 'https://www.astonwhaler.com/amenities/',
		},
		{
			name: 'Housekeeping service',
			url: 'https://www.astonwhaler.com/amenities/',
		},
		{
			name: 'In-room safe',
			url: 'https://www.astonwhaler.com/amenities/',
		},
		{
			name: 'Security - 24 hours',
			url: 'https://www.astonwhaler.com/amenities/',
		},
		{
			name: 'Sun deck',
			url: 'https://www.astonwhaler.com/amenities/',
		},
		{
			name: 'Meeting room',
			url: 'https://www.astonwhaler.com/amenities/',
		},
		{
			name: 'Kaanapali Trolley shuttle to Kaanapali Resort area',
			url: 'https://www.astonwhaler.com/amenities/',
		}
		
	],

	// list of hotel images
	imageArr: [
		{
			caption: 'The Spirit of Aloha',
			url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2BDRM-2BA-Oceanfront-Premium-Living-Area-452-006-scaled.jpg',
		},
		{
			caption: 'Your Home Away From Home',
			url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/slide-home-4-1.jpg',
		},
		{
			caption: 'Select Your Condo',
			url: 'http://www.astonwhaler.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-exterior-aerial-2560x1440_rc-1.jpg',
		},
		{
			caption: 'Elevate Your Experience',
			url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/home-fullbleed-1.jpg',
		},
		{
			caption: 'Camera Ready',
			url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-firetable-008-scaled.jpg',
		},
	],

	// list of rooms
	roomsArr: [
	
		{
			type: 'HotelRoom', // string -> HotelRoom or Suite
			name: 'Studio Garden View', // string
			url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
			bookUrl: 'https://be.synxis.com/?hotel=14900&locale=en-US&level=hotel&src=wha.rooms.studios&room=STGV&nights=2&_gl=1*9n3rkk*_ga*MjA0MTI0ODE1Mi4xNzEwNjEyNjYy*_ga_KLM44Y6YE9*MTcxMDc2ODMxMy43LjEuMTcxMDc2ODM5MS4wLjAuMA..#_ga=2.257561736.2091020174.1710701117-2041248152.1710612662', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'Soak up the aromatic magic of tropical garden views from this comfortable studio. Unit is one large space and features a fully equipped kitchen and private balcony.', // string
			defaultPrice: '300', // number
			maxOccupancy: '3', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '1', // number
			bedType: 'King or Murphy Bed', // string
			smokingBoolean: 'False', // boolean
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: 'Studio Garden View', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-Studio-Garden-View-Bed-Living-Area-316-005-scaled.jpg', // url
				},
				{
					caption: 'Studio Garden View', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-Studio-Garden-View-BD-Living-Area-213-008-scaled.jpg', // url
				},
				{
					caption: 'Studio Garden View', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/62455141_4K-scaled.jpg', // url
				},
				{
					caption: 'Studio Garden View', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-Studio-Garden-View-Balcony-316-011-scaled.jpg', // url
				},
				{
					caption: 'Studio Garden View', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/Aston-at-The-Whaler-on-Kaanapali-Beach-View-scaled.jpg', // url
				},
			],
			roomAmenitiesArr: [
				{
					name: 'Central Air Conditioning', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Full Kitchen with Microwave and Dishwasher', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'HD Cable TV with DVR', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'In-room Safe', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Laundry Facilities on every floor (complimentary)', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Private Balcony', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'WiFi Access', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Hair Dryer', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Coffee Maker', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Iron/Ironing Board', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Non-Smoking', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
			],
		},
		{
			type: 'HotelRoom', // string -> HotelRoom or Suite
			name: 'Studio Garden View Premium', // string
			url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
			bookUrl: 'https://be.synxis.com/?hotel=14900&locale=en-US&level=hotel&src=wha.rooms.studios&room=STGVP&nights=2&_gl=1*1msuze2*_ga*MjA0MTI0ODE1Mi4xNzEwNjEyNjYy*_ga_KLM44Y6YE9*MTcxMDc2ODMxMy43LjEuMTcxMDc2ODM5MS4wLjAuMA..#_ga=2.257021064.2091020174.1710701117-2041248152.1710612662', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'This premium studio offers tropical garden views. Unit is one large space and features updated furnishings, a fully equipped designer kitchen, and private balcony.', // string
			defaultPrice: '350', // number
			maxOccupancy: '3', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '1', // number
			bedType: 'King or Murphy Bed', // string
			smokingBoolean: '', // boolean
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: 'Studio Garden View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-Studio-Garden-View-Premium-Bed-Living-Area-263-002-scaled.jpg', // url
				},
				{
					caption: 'Studio Garden View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-Studio-Garden-View-Premium-Living-Area-263-007-scaled.jpg', // url
				},
				{
					caption: 'Studio Garden View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-Studio-Garden-View-Premium-Kitchen-263-012-scaled.jpg', // url
				},
				{
					caption: 'Studio Garden View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-Studio-Garden-View-Premium-BA-263-015-scaled.jpg', // url
				},
				{
					caption: 'Studio Garden View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/Aston-at-The-Whaler-on-Kaanapali-Beach-View-scaled.jpg', // url
				},
				
			],
			roomAmenitiesArr: [
				{
					name: 'Central Air Conditioning', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Full Kitchen with Microwave and Dishwasher', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'HD Cable TV with DVR', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'In-room Safe', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Laundry Facilities on every floor (complimentary)', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Private Balcony', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Upgraded Furnishing and Appliances', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'WiFi Access', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				}
			],
		},
		{
			type: 'HotelRoom', // string -> HotelRoom or Suite
			name: 'Studio Ocean View', // string
			url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
			bookUrl: 'https://be.synxis.com/?hotel=14900&locale=en-US&level=hotel&src=wha.rooms.studios&room=STOV&nights=2&_gl=1*1msuze2*_ga*MjA0MTI0ODE1Mi4xNzEwNjEyNjYy*_ga_KLM44Y6YE9*MTcxMDc2ODMxMy43LjEuMTcxMDc2ODM5MS4wLjAuMA..#_ga=2.257021064.2091020174.1710701117-2041248152.1710612662', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'Enjoy beautiful views of the Pacific Ocean from this studio. Unit is one large space and features a fully equipped kitchen.', // string
			defaultPrice: '350', // number
			maxOccupancy: '3', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '1', // number
			bedType: 'King or Murphy Bed', // string
			smokingBoolean: 'False', // boolean
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: 'Studio Ocean View', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-Studio-Ocean-View-213-001-scaled.jpg', // url
				},
				{
					caption: 'Studio Ocean View', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-Studio-Ocean-View-Balcony-213-006-scaled.jpg', // url
				},
				{
					caption: 'Studio Ocean View', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/66918749_4K-scaled.jpg', // url
				},
				{
					caption: 'Studio Ocean View', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-Studio-Ocean-View-Bathroom-213-012-scaled.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Central Air Conditioning', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Full Kitchen with Microwave and Dishwasher', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'HD Cable TV with DVR', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'In-room Safe', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Laundry Facilities on every floor (complimentary)', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Private Balcony', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'WiFi Access', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				}
			],
		},
		{
			type: 'HotelRoom', // string -> HotelRoom or Suite
			name: 'Studio Ocean View Premium', // string
			url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
			bookUrl: 'https://be.synxis.com/?hotel=14900&locale=en-US&level=hotel&src=wha.rooms.studios&room=STOVP&nights=2&_gl=1*zewnno*_ga*MjA0MTI0ODE1Mi4xNzEwNjEyNjYy*_ga_KLM44Y6YE9*MTcxMDc2ODMxMy43LjEuMTcxMDc2ODM5MS4wLjAuMA..#_ga=2.253885323.2091020174.1710701117-2041248152.1710612662', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'Take in stunning ocean views from this upgraded studio. Unit features updated furnishings, a fully equipped kitchen with modern appliances, and private balcony.', // string
			defaultPrice: '500', // number
			maxOccupancy: '3', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '1', // number
			bedType: 'King or Murphy Bed', // string
			smokingBoolean: 'False', // boolean
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: 'Studio Ocean View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-Studio-Ocean-View-Premium-Living-Area-Bed-718-008-scaled.jpg', // url
				},
				{
					caption: 'Studio Ocean View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-Studio-Ocean-View-Premium-Bed-718-005-scaled.jpg', // url
				},
				{
					caption: 'Studio Ocean View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-Studio-Ocean-View-Premium-Kitchen-718-022-scaled.jpg', // url
				},
				{
					caption: 'Studio Ocean View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-Studio-Ocean-View-Premium-BA-718-024-scaled.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Central Air Conditioning', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Full Kitchen with Microwave and Dishwasher', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'HD Cable TV with DVR', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'In-room Safe', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Laundry Facilities on every floor (complimentary)', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Private Balcony', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Upgraded Furnishing and Appliances', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'WiFi Access', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: '1-Bedroom Garden View Suite', // string
			url: 'https://www.astonwhaler.com/rooms/1-bedrooms/', // url
			bookUrl: 'https://be.synxis.com/?hotel=14900&locale=en-US&level=hotel&src=wha.rooms.1bedroom&room=1BG2&nights=2&_gl=1*yv89t7*_ga*MjA0MTI0ODE1Mi4xNzEwNjEyNjYy*_ga_KLM44Y6YE9*MTcxMDc2ODMxMy43LjEuMTcxMDc2ODc4Ni4wLjAuMA..#_ga=2.224441497.2091020174.1710701117-2041248152.1710612662', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'Enjoy tropical garden views from this suite with one bedroom. Suite features one bathroom, a living area, a fully equipped kitchen, and private balcony.', // string
			defaultPrice: '600', // number
			maxOccupancy: '4', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '1', // number
			bedType: 'King', // string
			smokingBoolean: true, // boolean
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: '1-Bedroom Garden View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-1BA-Garden-View-Living-Area-4000x2667-1-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom Garden View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-1BA-Garden-View-BDRM-319-011-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom Garden View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/Aston-at-The-Whaler-on-Kaanapali-Beach-1-Bedroom-1-Bath-Ocean-View-Living-Area-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom Garden View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/Aston-at-The-Whaler-on-Kaanapali-Beach-View-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom Garden View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-1BA-Ocean-View-BA-4000x2667-1-scaled.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Central Air Conditioning', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'Full Kitchen with Microwave and Dishwasher', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'HD Cable TV with DVR', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'In-room Safe', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'Laundry Facilities on every floor (complimentary)', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'Private Balcony', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'WiFi Access', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: '1-Bedroom Ocean View Suite', // string
			url: 'https://www.astonwhaler.com/rooms/1-bedrooms/', // url
			bookUrl: 'https://be.synxis.com/?hotel=14900&locale=en-US&level=hotel&src=wha.rooms.1bedroom&room=1BOV&nights=2&_gl=1*16v3t2k*_ga*MjA0MTI0ODE1Mi4xNzEwNjEyNjYy*_ga_KLM44Y6YE9*MTcxMDc2ODMxMy43LjEuMTcxMDc2ODc4Ni4wLjAuMA..#_ga=2.165402812.2091020174.1710701117-2041248152.1710612662', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'This ocean view suite with one bedroom offers beautiful views of the Pacific Ocean. Suite features one bathroom, a living area, fully equipped kitchen, and private balcony.', // string
			defaultPrice: '600', // number
			maxOccupancy: '4', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '1', // number
			bedType: 'King', // string
			smokingBoolean: 'False', // boolean
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: '1-Bedroom Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-1BA-Ocean-View-Living-Area-459-008-1-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-1BA-Ocean-View-BDRM-4000x2667-1-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-1BA-Ocean-View-Balcony-4000x2667-1-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-1BA-Ocean-View-BA-4000x2667-1-scaled.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Central Air Conditioning', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'Full Kitchen with Microwave and Dishwasher', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'HD Cable TV with DVR', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'In-room Safe', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'Laundry Facilities on every floor (complimentary)', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'Private Balcony', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'WiFi Access', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: '1-Bedroom Ocean View Premium', // string
			url: 'https://www.astonwhaler.com/rooms/1-bedrooms/', // url
			bookUrl: 'https://be.synxis.com/?hotel=14900&locale=en-US&level=hotel&src=wha.rooms.1bedroom&room=1BOVP&nights=2&_gl=1*f1dbb6*_ga*MjA0MTI0ODE1Mi4xNzEwNjEyNjYy*_ga_KLM44Y6YE9*MTcxMDc2ODMxMy43LjEuMTcxMDc2ODc4Ni4wLjAuMA..#_ga=2.189914024.2091020174.1710701117-2041248152.1710612662', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'Relax with peaceful ocean views from this suite with one bedroom and a separate living area. Suite features one bathroom, updated furnishings, a fully equipped designer kitchen, and private balcony.', // string
			defaultPrice: '600', // number
			maxOccupancy: '4', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '1', // number
			bedType: 'King', // string
			smokingBoolean: 'False', // boolean
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: '1-Bedroom Ocean View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/65560588_4K-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom Ocean View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-1BA-Ocean-View-Premium-Living-Area-359-018-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom Ocean View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-1BA-Ocean-View-Premium-Kitchen-359-022-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom Ocean View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-1BA-Ocean-View-Premium-BA-359-006-scaled.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Central Air Conditioning', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'Full Kitchen with Microwave and Dishwasher', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'HD Cable TV with DVR', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'In-room Safe', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'Laundry Facilities on every floor (complimentary)', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'Private Balcony', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'Upgraded Furnishing and Appliances', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				},
				{
					name: 'WiFi Access', // string
					url: 'https://www.astonwhaler.com/rooms/1-bedrooms', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: '1-Bedroom / 2-Bath Ocean View Suite', // string
			url: 'https://www.astonwhaler.com/rooms/1-bedrooms/', // url
			bookUrl: 'https://be.synxis.com/?hotel=14900&locale=en-US&level=hotel&src=wha.rooms.1bedroom&room=1BO2&nights=2&_gl=1*1dq3lol*_ga*MjA0MTI0ODE1Mi4xNzEwNjEyNjYy*_ga_KLM44Y6YE9*MTcxMDc2ODMxMy43LjEuMTcxMDc2ODc4Ni4wLjAuMA..#_ga=2.258543625.2091020174.1710701117-2041248152.1710612662', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'Relax with peaceful ocean views from this suite with one bedroom and a separate living area. Suite features one bathroom, updated furnishings, a fully equipped designer kitchen, and private balcony.', // string
			defaultPrice: '600', // number
			maxOccupancy: '4', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '1', // number
			bedType: 'King', // string
			smokingBoolean: 'False', // boolean
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: '1-Bedroom / 2-Bath Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-2BA-Ocean-View-Living-Area-874-005-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom / 2-Bath Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-2BA-Ocean-View-BDRM-874-004-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom / 2-Bath Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/65605090_4K-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom / 2-Bath Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-2BA-Ocean-View-BA-874-023-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom / 2-Bath Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-2BA-Ocean-View-Balcony3-874-036-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom / 2-Bath Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/65679378_4K-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom / 2-Bath Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/66942812_4K-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom / 2-Bath Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/66942814_4K-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom / 2-Bath Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/66942826_4K-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom / 2-Bath Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/66942828_4K-scaled.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Central Air Conditioning', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Full Kitchen with Microwave and Dishwasher', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'HD Cable TV with DVR', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'In-room Safe', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Laundry Facilities on every floor (complimentary)', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Private Balcony', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Upgraded Furnishing and Appliances', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'WiFi Access', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: '1 Bedroom / 2-Bath Ocean View Premium', // string
			url: 'https://astonwhaler.com/rooms/1-bedrooms/', // url
			bookUrl: 'https://be.synxis.com/?hotel=14900&locale=en-US&level=hotel&src=wha.rooms.1bedroom&room=1B2OVP&nights=2&_gl=1*1no1s2n*_ga*MjA0MTI0ODE1Mi4xNzEwNjEyNjYy*_ga_KLM44Y6YE9*MTcxMDc2ODMxMy43LjEuMTcxMDc2ODc4Ni4wLjAuMA..#_ga=2.258701321.2091020174.1710701117-2041248152.1710612662', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'Enjoy this premium style one-bedroom suite with tranquil ocean views. Suite features updated furnishings, two bathrooms, a living area, fully equipped designer kitchen, and private balcony.', // string
			defaultPrice: '600', // number
			maxOccupancy: '4', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '1', // number
			bedType: 'King', // string
			smokingBoolean: 'False', // boolean
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: '1 Bedroom / 2-Bath Ocean View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/Aston-at-The-Whaler-on-Kaanapali-Beach-Premium-1-Bedroom-2-Bath-Ocean-View-Living-Area-1-scaled.jpg', // url
				},
				{
					caption: '1 Bedroom / 2-Bath Ocean View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-2BA-Ocean-View-Premium-Dining-Area-874-008-scaled.jpg', // url
				},
				{
					caption: '1 Bedroom / 2-Bath Ocean View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-2BA-Ocean-View-Premium-BDRM-974-019-scaled.jpg', // url
				},
				{
					caption: '1 Bedroom / 2-Bath Ocean View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-2BA-Ocean-View-Premium-BA-974-015-scaled.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Central Air Conditioning', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Full Kitchen with Microwave and Dishwasher', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'HD Cable TV with DVR', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'In-room Safe', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Laundry Facilities on every floor (complimentary)', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Private Balcony', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'WiFi Access', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: '1-Bedroom / 2-Bath Oceanfront Suite Premium', // string
			url: 'https://astonwhaler.com/rooms/1-bedrooms/', // url
			bookUrl: 'https://be.synxis.com/?hotel=14900&locale=en-US&level=hotel&src=wha.rooms.1bedroom&room=1BOFP&nights=2&_gl=1*1u30zdh*_ga*MjA0MTI0ODE1Mi4xNzEwNjEyNjYy*_ga_KLM44Y6YE9*MTcxMDc2ODMxMy43LjEuMTcxMDc2ODc4Ni4wLjAuMA..#_ga=2.156900152.2091020174.1710701117-2041248152.1710612662', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'This premium style one bedroom suite is stunning with breathtaking oceanfront views. Suite features updated furnishings, two bathrooms, living area, a fully equipped designer kitchen, and spacious private balcony.', // string
			defaultPrice: '600', // number
			maxOccupancy: '2', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '1', // number
			bedType: 'King', // string
			smokingBoolean: 'False', // boolean
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: '1-Bedroom / 2-Bath Oceanfront Suite Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-2BA-Oceanfront-PemiumvLiving-Area-and-View-3000x2000-1-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom / 2-Bath Oceanfront Suite Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/Aston-at-The-Whaler-on-Kaanapali-Beach-Exterior-Beach-1-scaled.jpg', // url
				},
				{
					caption: '1-Bedroom / 2-Bath Oceanfront Suite Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-2BA-Oceanfront-Kitchen-651-002-scaled.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Central Air Conditioning', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Full Kitchen with Microwave and Dishwasher', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'HD Cable TV with DVR', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'In-room Safe', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Laundry Facilities on every floor (complimentary)', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Private Balcony', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Upgraded Furnishing and Appliances', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'WiFi Access', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: '2-Bedroom 2-Bath Garden View Suite', // string
			url: 'https://www.astonwhaler.com/rooms/2-bedrooms', // url
			bookUrl: 'https://be.synxis.com/?hotel=14900&locale=en-US&level=hotel&src=wha.rooms.2bedroom&room=2BGV&nights=2&_gl=1*1v10ciu*_ga*MjA0MTI0ODE1Mi4xNzEwNjEyNjYy*_ga_KLM44Y6YE9*MTcxMDc2ODMxMy43LjEuMTcxMDc3MDM3NC4wLjAuMA..#_ga=2.156900152.2091020174.1710701117-2041248152.1710612662', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'Spend your downtime in our spacious two-bedroom suites with tropical garden views. Suite features two bathrooms, a living area, fully equipped kitchen, and private balcony.', // string
			defaultPrice: '', // number
			maxOccupancy: '6', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '2', // number
			bedType: 'King', // string
			smokingBoolean: 'False', // boolean
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: '2-Bedroom 2-Bath Garden View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2-Bedroom-2-BA-Garden-Living-Area-2-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom 2-Bath Garden View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2-Bedroom-2-BA-Garden-Living-Area-1-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom 2-Bath Garden View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2-Bedroom-2-BA-Garden-Bedroom-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom 2-Bath Garden View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-Studio-Garden-View-Balcony-Tennis-Courts-316-022-scaled.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Central Air Conditioning', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Full Kitchen with Microwave and Dishwasher', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'HD Cable TV with DVR', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'In-room Safe', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Laundry Facilities on every floor (complimentary)', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Private Balcony', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Upgraded Furnishing and Appliances', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'WiFi Access', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: '2-Bedroom 2-Bath Ocean View Suite', // string
			url: 'https://www.astonwhaler.com/rooms/2-bedrooms/', // url
			bookUrl: 'https://be.synxis.com/?hotel=14900&locale=en-US&level=hotel&src=wha.rooms.2bedroom&room=2BOV&nights=2&_gl=1*1t53x0r*_ga*MjA0MTI0ODE1Mi4xNzEwNjEyNjYy*_ga_KLM44Y6YE9*MTcxMDc2ODMxMy43LjEuMTcxMDc3MDM3NC4wLjAuMA..#_ga=2.152096826.2091020174.1710701117-2041248152.1710612662', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'Spend your downtime in our spacious two-bedroom suites with tropical garden views. Suite features two bathrooms, a living area, fully equipped kitchen, and private balcony.', // string
			defaultPrice: '600', // number
			maxOccupancy: '6', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '2', // number
			bedType: '2 King + Sofa Bed', // string
			smokingBoolean: 'False', // boolean
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: '2-Bedroom 2-Bath Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2BDRM-2BA-Ocean-View-Living-Area-873-004-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom 2-Bath Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2BDRM-2BA-Ocean-View-Balcony2-873-018-1-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom 2-Bath Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2BDRM-2BA-Ocean-View-Master-BDRM-873-009-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom 2-Bath Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2BDRM-2BA-Ocean-View-Guest-Room-873-012-1-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom 2-Bath Ocean View Suite', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-2BA-Ocean-View-BA-874-023-scaled.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Central Air Conditioning', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Full Kitchen with Microwave and Dishwasher', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'HD Cable TV with DVR', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'In-room Safe', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Laundry Facilities on every floor (complimentary)', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Private Balcony', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'WiFi Access', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: '2-Bedroom Ocean View Premium', // string
			url: 'https://www.astonwhaler.com/rooms/2-bedrooms', // url
			bookUrl: 'https://be.synxis.com/?hotel=14900&locale=en-US&level=hotel&src=wha.rooms.2bedroom&room=2BOVP&nights=2&_gl=1*1t53x0r*_ga*MjA0MTI0ODE1Mi4xNzEwNjEyNjYy*_ga_KLM44Y6YE9*MTcxMDc2ODMxMy43LjEuMTcxMDc3MDM3NC4wLjAuMA..#_ga=2.152096826.2091020174.1710701117-2041248152.1710612662', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'This premium suite offers maximum space plus beautiful ocean views. Suite features updated furnishings, a fully equipped kitchen with modern appliances, and private balcony.', // string
			defaultPrice: '600', // number
			maxOccupancy: '6', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '2 or 3', // number
			bedType: 'King, 2 Queens, and Sofa Bed OR 2 Kings and Sofa Bed', // string
			smokingBoolean: 'False', // boolean
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: '2-Bedroom Ocean View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2BDRM-2BA-Ocean-View-Premium-Living-Area-1173-005-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom Ocean View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2BDRM-2BA-Ocean-View-Premium-Master-BDRM-1173-007-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom Ocean View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2BDRM-2BA-Ocean-View-Balcony2-873-018-1-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom Ocean View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-1BA-Ocean-View-Premium-Kitchen-359-022-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom Ocean View Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-1BA-Ocean-View-Premium-BA-359-006-scaled.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Central Air Conditioning', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Full Kitchen with Microwave and Dishwasher', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'HD Cable TV with DVR', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'In-room Safe', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Laundry Facilities on every floor (complimentary)', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Private Balcony', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'WiFi Access', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				}
			],
		},
		{
			type: 'suite', // string -> HotelRoom or Suite
			name: '2-Bedroom Oceanfront', // string
			url: 'https://www.astonwhaler.com/rooms/2-bedrooms/', // url
			bookUrl: 'https://be.synxis.com/?hotel=14900&locale=en-US&level=hotel&src=wha.rooms.2bedroom&room=2BOF&nights=2&_gl=1*1t53x0r*_ga*MjA0MTI0ODE1Mi4xNzEwNjEyNjYy*_ga_KLM44Y6YE9*MTcxMDc2ODMxMy43LjEuMTcxMDc3MDM3NC4wLjAuMA..#_ga=2.152096826.2091020174.1710701117-2041248152.1710612662', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'TIndulge with picturesque oceanfront views of the Pacific and a large wraparound balcony to soak it all up. Suite features two bedrooms, two bathrooms, a living area, and a fully equipped kitchen.'
			defaultPrice: '', // number
			maxOccupancy: '6', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '2 or 3', // number
			bedType: 'King, 2 Queens, and Sofa Bed OR 2 Kings and Sofa Bed', // string
			smokingBoolean: 'False', // boolean
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: '2-Bedroom Oceanfront', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2-Bedroom-Oceanfront-Living-Area-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom Oceanfront', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/Aston-at-The-Whaler-on-Kaanapali-Beach-Exterior-Beach-1-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom Oceanfront', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-2BA-Oceanfront-Kitchen-651-002-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom Oceanfront', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2-Bedroom-Oceanfront-Master-Bedroom-873-009-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom Oceanfront', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2-Bedroom-Oceanfront-Guest-Room-873-012-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom Oceanfront', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-1BDRM-2BA-Ocean-View-BA-874-023-scaled.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Central Air Conditioning', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Full Kitchen with Microwave and Dishwasher', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'HD Cable TV with DVR', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'In-room Safe', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Laundry Facilities on every floor (complimentary)', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Private Balcony', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Upgraded Furnishing and Appliances', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'WiFi Access', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				}
			],
		},
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: '2-Bedroom Oceanfront Premium', // string
			url: 'https://www.astonwhaler.com/rooms/2-bedrooms/', // url
			bookUrl: 'https://be.synxis.com/?hotel=14900&locale=en-US&level=hotel&src=wha.rooms.2bedroom&room=2BOFP&nights=2&_gl=1*13o9nox*_ga*MjA0MTI0ODE1Mi4xNzEwNjEyNjYy*_ga_KLM44Y6YE9*MTcxMDc2ODMxMy43LjEuMTcxMDc3MDM3NC4wLjAuMA..#_ga=2.257677448.2091020174.1710701117-2041248152.1710612662', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'What dream vacations are made of, this is the best suite in the house. Enjoy serene oceanfront views of the Pacific and a large wraparound balcony. Suite features two bedrooms, two bathrooms, updated furnishings, a living area, and fully equipped designer kitchen.', // string
			defaultPrice: '', // number
			maxOccupancy: '6', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '2 or 3', // number
			bedType: 'King, Queen, and Sofa Bed OR King, 2 Doubles, and Sofa Bed OR King, 2 Queens, and Sofa Bed', // string
			smokingBoolean: 'False', // boolean
			bathroomCount: "1",
			roomCount: "",
			images: [
				{
					caption: '2-Bedroom Oceanfront Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2BDRM-2BA-Oceanfront-Premium-Living-Area-452-006-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom Oceanfront Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2BDRM-2BA-Oceanfront-Premium-Kitchen-452-009-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom Oceanfront Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/09/aston-at-the-whaler-kaanapali-beach-2BDR-2B-ocean-front-premium-1440x1050-1.jpg', // url
				},
				{
					caption: '2-Bedroom Oceanfront Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2BDRM-2BA-Oceanfront-Premium-MSTR-BDRM-452-026-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom Oceanfront Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2BDRM-2BA-Oceanfront-Premium-MSTR-BA-452-027-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom Oceanfront Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2BDRM-2BA-Oceanfront-Premium-Guest-BDRM-452-031-scaled.jpg', // url
				},
				{
					caption: '2-Bedroom Oceanfront Premium', // string
					url: 'http://s40583.p631.sites.pressdns.com/wp-content/uploads/2022/04/Aston-at-The-Whaler-on-Kaanapali-Beach-2BDRM-2BA-Oceanfront-Premium-Guest-BA-452-017-scaled.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Central Air Conditioning', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Full Kitchen with Microwave and Dishwasher', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'HD Cable TV with DVR', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'In-room Safe', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Laundry Facilities on every floor (complimentary)', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'Private Balcony', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				},
				{
					name: 'WiFi Access', // string
					url: 'https://www.astonwhaler.com/rooms/studios-rooms/', // url
				}
			],
		},
	],

	// list of restaurants at the hotel
	restaurants: [
		
		{
			
			name: "Teppan-yaki Dan",
			url: "https://www.astonwhaler.com/resort/dining",
			description: "Japanese place at the Sheraton Maui Resort with energetic table-side chefs preparing teppanyaki.",

			// the URL of the menu (can be a PDF if applicable)
			  menu: [
						{
							name: "Menu"
							url: "http://places.singleplatform.com/dan-teppan-yaki/menu?ref=google"
						},
					]

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-808-661-0031", // format: x-xxx-xxx-xxxx
				email: "null"
				
			},
			
			/ location
			location: {
				street: "2605 Kaanapali Pkwy",
				city: "Lahaina",
				state: "HI", // 2 letter state code
				zip: "96761",
				country: "USA",
			},
			
			// rating
			rating: {
				value: '4',
				count: '47',
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		},
		{
			
			name: "Star Noodle",
			url: "https://www.astonwhaler.com/resort/dining",
			description: "Star noodle first opened its doors in february 2010, offering up fresh noodles, sake cocktails and asian-inspired share plates. Originally located off the beaten track in the lahaina industrial park, the maui restaurant created a buzz with local residents and island guests who flocked to sample its unique flavors and family-style dining. Now into its 12th year of operation, star noodle continues to be one of maui’s most popular eateries. Relocated to its new front street location in november 2020, our guests now enjoy the same great and innovative food paired with amazing ocean views. ",

			// the URL of the menu (can be a PDF if applicable)
			menu: [
				{
					name: "Menu"
					url: "https://static1.squarespace.com/static/5ee99c6de2700714f78d9391/t/64d014ce4c0ac125cd514af7/1691358415148/08032023+Star+Menu.pdf"
				},
				]

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-808-667-5400", // format: x-xxx-xxx-xxxx
				email: "contact@starnoodle.com"
				
			},
			
			// location
			location: {
				street: "1285 Front St",
				city: "Lahaina",
				state: "HI", // 2 letter state code
				zip: "96761",
				country: "USA",
			},
			
			// rating
			rating: {
				value: '4.4',
				count: '3481',
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		}
		{
			
			name: "Son'z Steakhouse",
			url: "https://www.astonwhaler.com/resort/dining",
			description: "Our steaks are regularly named the best of Maui restaurants by our guests and the readers of Maui Nō Ka Oi Magazine. We serve only 100% USDA-certiﬁed Prime beef, sourced from the plains of the Midwest. Our suppliers go above and beyond to meet the USDA requirements to be considered “all-natural,” creating minimally processed cuts of meat that are free of all additives and preservatives. Because we don’t just care about where you eat, we care about what you eat.",

			// the URL of the menu (can be a PDF if applicable)
			menu: [
				{
					name: "Food Menu"
					url: "https://www.sonzsteakhouse.com/food-menu/"
				},
				]

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-808-667-4506", // format: x-xxx-xxx-xxxx
				email: "sonzmaui@hawaii.rr.com"
				
			},
			
			// location
			location: {
				street: "200 Nohea Kai Dr",
				city: "Kaanapali",
				state: "HI", // 2 letter state code
				zip: "96761",
				country: "USA" ,

			},
			
			// rating
			rating: {
				value: '4',
				count: '384',
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		},
		{
			
			name: "Leilani’s on the Beach",
			url: "https://www.astonwhaler.com/resort/dining",
			description: "Beachside eatery known for its seafood-driven menu, tropical drinks & family-friendly vibe.",

			// the URL of the menu (can be a PDF if applicable)
			menu: [
				{
					name: "Beach Bar"
					url: "https://www.leilanis.com/wp-content/uploads/2023/11/23_TS_L_VinylMenu_BeachBar_NOV16_R2.pdf"
				},
				{
					name: "Dinner"
					url: "https://www.leilanis.com/wp-content/uploads/2023/11/23_TS_L_VinylMenu_Dinner_NOV16_R3.pdf"
				},
				{
					name: "Keiki Menu"
					url: "https://www.leilanis.com/wp-content/uploads/2024/01/23_HI-Keiki-Menu-Page-Only_DEC22.pdf"
				},
				{
					name: "Taco Tuesday"
					url: "https://www.leilanis.com/wp-content/uploads/2023/10/23_TSR_LM_Hotislandnights_Taconight_OCT25.pdf"
				},
				{
					name: "Burger & Beer Wednesday"
					url: "https://www.leilanis.com/wp-content/uploads/2023/11/23_TSR_LM_Menus_BurgerandBeerWednesday_NOV21.pdf"
				}
			]

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-808-661-4495", // format: x-xxx-xxx-xxxx
				email: "null"
				
			},
			
			// location
			location: {
				street: "2435 Kaanapali Pkwy",
				city: "Lahaina",
				state: "HI", // 2 letter state code
				zip: "96761",
				country: "USA" ,

			},
			
			// rating
			rating: {
				value: '4.5',
				count: '3073',
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		},
		
		{
			
			name: "Kimo’s Maui",
			url: "https://www.astonwhaler.com/resort/dining",
			description: "Relaxed seafood spot with harbor views features local seafood, prime rib & famous Hula Pie dessert.",

			// the URL of the menu (can be a PDF if applicable)
			menu:	[
						{
							name: "Lobby Bar"
							url: "https://www.globalambassadorhotel.com/pdf/LobbyBar_0324.pdf"
						},
				
					]

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-808-661-4811", // format: x-xxx-xxx-xxxx
				email: "info@kimosmaui.com"
				
			},
			
			// location
			location: {
				street: "845 Front St a",
				city: "Lahaina",
				state: "HI", // 2 letter state code
				zip: "96761",
				country: "USA" ,

			},
			
			// rating
			rating: {
				value: "4.5",
				count: "4698",
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		},
		{
			
			name: "Duke’s Beach House Maui",
			url: "https://www.astonwhaler.com/resort/dining",
			description: "Honua Kai Resort's open-air beach eatery offers island menus, surfer decor, tiki torches & vistas.",

			// the URL of the menu (can be a PDF if applicable)
			menu: 	[
						{
							name: "Breakfast"
							url: "https://www.dukesmaui.com/wp-content/uploads/2023/09/23_TS_DBHM_Menu_Breakfast_SEPT21.pdf"
						},
						{
							name: "Lunch"
							url: "https://www.dukesmaui.com/wp-content/uploads/2024/02/24_TS_DBHM_Vinyl-Lunch_FNL_JAN16-1.pdf"
						},
						{
							name: "Barefoot Bar"
							url: "https://www.dukesmaui.com/wp-content/uploads/2024/03/23_TS_DBHM_Ohia-Bar_Reopening_AUG31.pdf"
						},
						{
							name: "Dinner"
							url: "https://www.dukesmaui.com/wp-content/uploads/2024/02/24_TS_DBHM_Vinyl-Dinner_FNL_JAN16-1.pdf"
						},
						{
							name: "Pool Menu"
							url: "https://www.dukesmaui.com/wp-content/uploads/2024/03/24_TS_DBHM_Menu_Pool_5.5x9_MAR12_MeaEdit.pdf"
						},
						{
							name: "Keiki Menu"
							url: "https://www.dukesmaui.com/wp-content/uploads/2024/01/23_HI-Keiki-Menu-Page-Only_DEC22.pdf"
						},
				
					]

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-808-662-2900", // format: x-xxx-xxx-xxxx
				email: "kc@tsrestaurants.com"
				
			},
			
			// location
			location: {
				street: "130 Kai Malina Pkwy",
				city: "Lahaina",
				state: "HI", // 2 letter state code
				zip: "96761",
				country: "USA" ,  

			},
			
			// rating
			rating: {
				value: '4.4' ,
				count: '4333',
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		},
		{
			
			name: "Hula Grill Kaanapali ",
			url: "https://www.astonwhaler.com/resort/dining",
			description: "Beachside eatery & sandy hub for pupu, fish tacos, tropical drinks, live music & people-watching.",

			// the URL of the menu (can be a PDF if applicable)
			menu: 	[
						{
							name: "Brunch"
							url: "https://www.hulagrillkaanapali.com/wp-content/uploads/2024/01/23_TS_HGK_Menu_Vinyl_Brunch_NOV22_NoCB.pdf"
						},
						{
							name: "Lunch"
							url: "https://www.hulagrillkaanapali.com/wp-content/uploads/2024/01/23_TS_HGK_Menu_Vinyl_Lunch_NOV22_NoCB.pdf"
						},
						{
							name: "Dinner"
							url: "https://www.hulagrillkaanapali.com/wp-content/uploads/2024/01/23_TS_HGK_Menu_Vinyl_Dinner_NOV22.pdf"
						},
						{
							name: "Barefoot Bar"
							url: "https://www.hulagrillkaanapali.com/wp-content/uploads/2024/01/23_TS_HGK_Menu_Vinyl_Barefoot-Bar_NOV22_NOCB.pd"
						},
						{
							name: "Keiki Menu"
							url: "https://www.hulagrillkaanapali.com/wp-content/uploads/2024/01/23_HI-Keiki-Menu-Page-Only_DEC22.pdf"
						}
					]

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-808-667-6636", // format: x-xxx-xxx-xxxx
				email: "kc@tsrestaurants.com"
				
			},
			
			// location
			location: {
				street: "2435 Kaanapali Pkwy",
				city: "Lahaina",
				state: "HI", // 2 letter state code
				zip: "96761",
				country: "USA" ,

			},
			
			// rating
			rating: {
				value: '4.4' ,
				count: '4155',
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		},
		
		{
			
			name: "Honu Oceanside",
			url: "https://www.astonwhaler.com/resort/dining",
			description: "Honu Oceanside delivers the finest seafood and spirits to match our world class ocean view with fresh, fun and modern flare. Let us WOW you with our tide to table menu, exclusive wine list, craft cocktails, stunning scenery and Aloha.",

			// the URL of the menu (can be a PDF if applicable)
			menu: 	[
						{
							name: "Menu"
							url: "https://www.honumaui.com/menu"
						}
					]

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-808-667-9390", // format: x-xxx-xxx-xxxx
				email: "null"
				
			},
			
			// location
			location: {
				street: "1295 Front St",
				city: "Lahaina",
				state: "HI", // 2 letter state code
				zip: "96761",
				country: "USA" ,

			},
			
			// rating
			rating: {
				value: '4.6' ,
				count: '1279',
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		}
		{
			
			name: "Japengo",
			url: "https://www.astonwhaler.com/resort/dining",
			description: "Enjoy Asian cuisine infused with island flavors. Located at Hyatt Regency Maui Resort & Spa with stunning views of the ocean, the restaurant offers an open-air patio seating and menu of seafood, steak and sushi.",

			// the URL of the menu (can be a PDF if applicable)
			menu: 	[
						{
							name: "Menus"
							url: "https://qrcodes.pro/Or6sfE"
						}
					]

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-808-667-4909", // format: x-xxx-xxx-xxxx
				email: "null"
				
			},
			
			// location
			location: {
				street: "200 Nohea Kai Dr",
				city: "Lahaina",
				state: "HI", // 2 letter state code
				zip: "96761",
				country: "USA" ,

			},
			
			// rating
			rating: {
				value: '4.3' ,
				count: '744',
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		},
		{
			
			name: "Japengo",
			url: "https://www.astonwhaler.com/resort/dining",
			description: "Enjoy Asian cuisine infused with island flavors. Located at Hyatt Regency Maui Resort & Spa with stunning views of the ocean, the restaurant offers an open-air patio seating and menu of seafood, steak and sushi.",

			// the URL of the menu (can be a PDF if applicable)
			menu: 	[
						{
							name: "Menus"
							url: "https://qrcodes.pro/Or6sfE"
						}
					]

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-808-667-4909", // format: x-xxx-xxx-xxxx
				email: "null"
				
			},
			
			// location
			location: {
				street: "200 Nohea Kai Dr",
				city: "Lahaina",
				state: "HI", // 2 letter state code
				zip: "96761",
				country: "USA" ,

			},
			
			// rating
			rating: {
				value: '4.3' ,
				count: '744',
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		}
		{
			
			name: "The Pour House Italian Kitchen and Wine Bar",
			url: "https://www.astonwhaler.com/resort/dining",
			description: "At The Pour House, we serve delicious, authentic Italian food prepared with fresh, locally-sourced ingredients. Our full bar serves cocktails, domestic and imported beers, and global wines. We offer indoor and outdoor dine-in service, along with takeout. We also maintain strict sanitizing procedures within our restaurant, and in between guests, to ensure your safety and ours. Whether you’re out for date night, celebrating a special occasion, or simply wanting to share a great meal with friends and family, we’ll strive to make The Pour House one of your favorite restaurants on Maui. **We accept cash, Visa/MasterCard/Discover (no AMEX or Apple Pay)",

			// the URL of the menu (can be a PDF if applicable)
			menu: 	[
						{
							name: "the pour house greatest hits menu"
							url: "https://qr.imenupro.com/n3d-4e"
						},
						{
							name: "the pour house classics menu"
							url: "https://qr.imenupro.com/n3d-4f"
						},
						{
							name: "the pour house kids menu"
							url: "https://qr.imenupro.com/n3d-4g"
						},
						{
							name: "Wine list"
							url: "https://qr.imenupro.com/n3d-4c"
						},
						{
							name: "Party of 8-16 Menu"
							url: "https://qr.imenupro.com/n3d-4a"
						},
						{
							name: "Private Events"
							url: "https://www.thepourhousekapalua.com/copy-of-coming-soon"
						}
						
					]

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-808-214-5296", // format: x-xxx-xxx-xxxx
				email: "jgermani@aol.com"
				
			},
			
			// location
			location: {
				street: "700 Office Rd",
				city: "Kapalua",
				state: "HI", // 2 letter state code
				zip: "96761",
				country: "USA" ,

			},
			
			// rating
			rating: {
				value: '4.2' ,
				count: '358',
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		},
		{
			
			name: "Taverna Maui",
			url: "https://www.astonwhaler.com/resort/dining",
			description: "Enjoy views of Kahālāwai, the West Maui mountains, outside on our lanai or inside our open-air Urban Drinks | Italian eats restaurant in the heart of Kapalua. Chef Roger Stettler brings his mother’s recipes to life in our a la carte Italian menu using only the highest quality ingredients found on Maui. Taverna won Best New Restaurant (GOLD), Best Bar (GOLD), Best Italian (SILVER) Maui No Ka 'Oi Magazine Awards 2017 & 2018. Best Italian (GOLD) and Best Cocktails (GOLD) at the Maui No Ka 'Oi Magazine Ai'pono Awards 2019.",

			// the URL of the menu (can be a PDF if applicable)
			menu: 	[
						{
							name: "Lunch"
							url: "https://www.tavernamaui.com/menu"
						},
						{
							name: "Dinner"
							url: "https://www.tavernamaui.com/menu"
						},
						{
							name: "At the bar"
							url: "https://www.tavernamaui.com/menu"
						},
						{
							name: "Dolci"
							url: "https://www.tavernamaui.com/menu"
						}
						
					]

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-808-667-2426", // format: x-xxx-xxx-xxxx
				email: "info@tavernamaui.com"
				
			},
			
			// location
			location: {
				street: "2000 Village Rd",
				city: "Lahaina",
				state: "HI", // 2 letter state code
				zip: "96761",
				country: "USA" ,

			},
			
			// rating
			rating: {
				value: '4.2' ,
				count: '689',
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		}
		{
			
			name: "The Plantation House",
			url: "https://www.astonwhaler.com/resort/dining",
			description: "Found on the Fairways of Kapalua's Plantation Golf Course, The Plantation House features casual elegance, breathtaking views and island inspired cuisine.",

			// the URL of the menu (can be a PDF if applicable)
			menu: 	[
						{
							name: "Dinner"
							url: "https://www.theplantationhouse.com/menu/"
						},
						{
							name: "Brunch & Lunch"
							url: "https://www.theplantationhouse.com/menu/"
						}
						
					]

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-808-669-6299", // format: x-xxx-xxx-xxxx
				email: "social@dinecrg.com"
				
			},
			
			// location
			location: {
				street: "2000 Plantation Club Dr",
				city: "Lahaina",
				state: "HI", // 2 letter state code
				zip: "96761",
				country: "USA" ,

			},
			
			// rating
			rating: {
				value: '4.6' ,
				count: '1418',
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		}
		{
			
			name: "Merriman's Kapalua",
			url: "https://www.astonwhaler.com/resort/dining",
			description: "Dine at the most breathtaking oceanfront setting in Kapalua Resort. Peter Merriman Chef/Restaurateur has brought his unique style of Hawaii Regional Cuisine to Maui. A pioneer in the “Farm to Table” concept, Peter serves only the freshest products, at least 90% of which are locally grown or caught, using only sustainable methods. Our aloha friendly staff will ensure that you have an extraordinary dining experience. The Ocean Front Point opens at 3pm for drinks and options for a pupu. Dinner reservations can be made from 4pm to 8:30pm.",

			// the URL of the menu (can be a PDF if applicable)
			menu: 	[
						{
							name: "Dinner Menu"
							url: "https://www.merrimanshawaii.com/kapalua/dinner-menu"
						},
						{
							name: "Wine List"
							url: "https://www.merrimanshawaii.com/kapalua/wine-list"
						},
						{
							name: "Beverage Menu"
							url: "https://www.merrimanshawaii.com/kapalua/bar-menu/"
						},
						{
							name: "Keiki Menu"
							url: "https://www.merrimanshawaii.com/kapalua/keiki-menu"
						},
						{
							name: "Dessert"
							url: "https://www.merrimanshawaii.com/kapalua/dessert-menu"
						},
						{
							name: "Point Menu"
							url: "https://www.merrimanshawaii.com/kapalua/pointmenu"
						},
						
					]

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-808-669-6400", // format: x-xxx-xxx-xxxx
				email: "reservations@merrimanshawaii.com"
				
			},
			
			// location
			location: {
				street: "1 Bay Club Pl",
				city: "Lahaina",
				state: "HI", // 2 letter state code
				zip: "96761",
				country: "USA" ,

			},
			
			// rating
			rating: {
				value: '4.7' ,
				count: '2141',
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		},
		{
			
			name: "Sea House Restaurant",
			url: "https://www.astonwhaler.com/resort/dining",
			description: "Sea House Restaurant at Napili Kai Beach Resort offers open-air dining and delicious sea-to-table cuisine at its oceanfront location on gorgeous Napili Bay on the island of Maui, Hawaii. Under the direction of Executive Chef Alex Stanislaw, the Sea House serves gourmet takes on classic dishes infused with island-inspired flavors and locally sourced ingredients. Breakfast favorites include the Molokai Sweet Potato Frittata, Haleakala Pancake, and Homemade Macadamia Nut Cinnamon Roll with cream cheese icing. Other signature dishes include the Macadamia Nut-Crusted Mahi Mahi, Poke Nachos, and “60 Second” Ceviche.",

			// the URL of the menu (can be a PDF if applicable)
			menu: 	[
						{
							name: "Breakfast Menu"
							url: "https://www.napilikai.com/wp-content/uploads/12.15.23-Breakfast-Menu.pdf"
						},
						{
							name: "Keiki Menu"
							url: "https://www.napilikai.com/wp-content/uploads/12.15.23-Keiki-Menu.pdf"
						},
						{
							name: "Lunch Menu"
							url: "https://www.napilikai.com/wp-content/uploads/Lunch-Menu-2.1.23.pdf"
						},
						{
							name: "Happy Hour Menu"
							url: "https://www.napilikai.com/wp-content/uploads/12.15.23-Happy-Hour-Menu.pdf"
						},
						{
							name: "Dinner Menu"
							url: "https://www.napilikai.com/wp-content/uploads/12.18.23-Dinner-Menu.pdf"
						},
						
					]

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-808-669-1500", // format: x-xxx-xxx-xxxx
				email: "seahousereservations@napilikai.com"
				
			},
			
			// location
			location: {
				street: "5900 Lower Honoapiilani Road",
				city: "Lahaina",
				state: "HI", // 2 letter state code
				zip: "96761",
				country: "USA" ,

			},
			
			// rating
			rating: {
				value: '4.3' ,
				count: '1651',
			},

			// openingHours
			openingHours: [],
			servesCuisine: []
			
		}
		{
			
			name: "Sansei Seafood Restaurant & Sushi Bar",
			url: "https://www.astonwhaler.com/resort/dining",
			description: "Vibrant, trendy eatery featuring Japanese-Pacific Rim fare, creative sushi rolls & weekend karaoke.",

			// the URL of the menu (can be a PDF if applicable)
			menu: 	[
						{
							name: "Dine-in Menu"
							url: "https://dkrestaurants.com/wp-content/uploads/2022/08/kapalua-dine-in.pdf"
						},
						{
							name: "Take-out Menu"
							url: "https://dkrestaurants.com/wp-content/uploads/2022/08/kapalua-takeout.pdf"
						}
					]

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-808-669-6286", // format: x-xxx-xxx-xxxx
				email: "seahousereservations@napilikai.com"
				
			},
			
			// location
			location: {
				street: "600 Office Rd",
				city: "Lahaina",
				state: "HI", // 2 letter state code
				zip: "96761",
				country: "USA" ,

			},
			
			// rating
			rating: {
				value: '4.5' ,
				count: '1168',
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

	reviews: [
		{
			author: "Suzy Carlson", // name of the reviewer
			value: "5", // be sure to only include 5 star reviews -> so the value should always be 5
			datePublished: "2023-12-21",
			reviewed: {

				type: "VacationRental", // expected: 'VacationRental' (can add more functionality later)
				name: ""
			}
		},
		{
			author: "Abracadeborah Smith", // name of the reviewer
			value: "5", // be sure to only include 5 star reviews -> so the value should always be 5
			datePublished: "2023-09-21",
			reviewed: {

				
				type: "VacationRental", // expected: 'VacationRental' (can add more functionality later)
				name: ""
			}
		}
	]
	
}
