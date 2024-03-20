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
	homepage: "https://www.astonmauikaanapalivillas.com",

	// slogan/motto/tagline of the hotel
	slogan: "A modern resort with old Hawaii at heart",

	// a brief description of the hotel
	description: "Aston Maui Kaanapali Villas is set on 11 acres of exotic tropical gardens in the Kaanapali Resort area on one of the finest stretches of Kaanapali Beach.",

	// if pets are allowed in the hotel or not
	petsAllowedTrueFalse: "false",

	// total number of rooms that are used as accommodations
	totalRoomCount: "187",

	// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
	priceRange: "$$$",

	// array of accepted currencies
	currenciesAccepted: ['USD'],

	// array of accepted payment methods
	paymentAccepted: ["Credit Cards Are Accepted"],

	// array of languages spoken by the staff
	availableLanguage: ["English"],

	// based on 24 hours time. ex: 14:00
	checkInTime: "16:00",
	checkOutTime: "11:00",

	// rating
	rating: {
		value: 4.4,
		count: 1225
	},

	// contact
	contact: {

		// format: 1-234-567-8910
		phone: "808-667-7791",

		email: "res.mkv@astonreservations.com"
	},
	
	// location
	location: {
		street: "45 Kai Ala Drive",
		city: "Lahaina",
		state: "HI", // 2 letter state abbreviation
		zip: "96761",
		country: "USA",
		lat: 20.9343, // latitude coordinates
		long: -156.6913 // longitude coordinates
	},

	// links
	logoUrl: "https://s40340.pcdn.co/wp-content/uploads/2016/08/MKV-logo_02.png",

	// this is required - every hotel must have a copyright or privacy link
	copyrightUrl: "https://www.astonmauikaanapalivillas.com/privacy-policy",

	// social media URLs
	// no '/' at the end of the URL
	facebookUrl: "https://www.facebook.com/MauiKaanapaliVillas",
	twitterUrl: "https://twitter.com/astonhotels",
	instagramUrl: "https://www.instagram.com/mauikaanapalivillas",
	linkedinUrl: "https://www.linkedin.com/company/aston-maui-kaanapali-villas/about",

	// list of hotel amenities
	amenitiesArr: [
		
		{
			name: 'Swimming Pools',
			url: 'https://www.astonmauikaanapalivillas.com/featured-amenities',
			imageUrl: 'https://s40340.pcdn.co/wp-content/uploads/2016/02/MKV-Pool-Aerial-495x400.jpg'
		},
		{
			name: 'Dining at the Castaway Café',
			url: 'https://www.astonmauikaanapalivillas.com/featured-amenities',
			imageUrl: 'https://s40340.pcdn.co/wp-content/uploads/2021/05/castaway-front-entrance-845x684-1-495x400.jpg'
		},
		{
			name: 'Kaanapali Trolley',
			url: 'https://www.astonmauikaanapalivillas.com/featured-amenities',
			imageUrl: 'https://s40340.pcdn.co/wp-content/uploads/2015/10/Kaanapali-Trolley-495x400.jpg'
		},
		{
			name: 'Beach Activities Center',
			url: 'https://www.astonmauikaanapalivillas.com/featured-amenities/',
			imageUrl: 'https://s40340.pcdn.co/wp-content/uploads/2016/02/K43A4789-495x400.jpg'
		},
		{
			name: 'Lobby Concierge by Pleasant Activities',
			url: 'https://www.astonmauikaanapalivillas.com/featured-amenities',
			imageUrl: 'https://s40340.pcdn.co/wp-content/uploads/2016/02/K43A4789-495x400.jpg'
		},
		{
			name: 'Fitness Center',
			url: 'https://www.astonmauikaanapalivillas.com/featured-amenities',
			imageUrl: 'https://s40340.pcdn.co/wp-content/uploads/2021/06/Aston-Maui-Kaanapali-Villas-Fitness-Center-3_1440-495x400.jpg'
		},
		{
			name: 'Spa La Mer',
			url: 'https://www.astonmauikaanapalivillas.com/featured-amenities',
			imageUrl: 'https://s40340.pcdn.co/wp-content/uploads/2022/03/spa-la-mer-495x400-1.jpg'
		},
		{
			name: 'On-site Yoga Class and Water Aerobics',
			url: 'https://www.astonmauikaanapalivillas.com/featured-amenities',
			imageUrl: 'https://s40340.pcdn.co/wp-content/uploads/2021/09/In-House-Retreats-1-495x400.jpg'
		}
		
	],

	// list of hotel images
	imageArr: [
		{
			caption: 'Set your watch to “Island Time”',
			url: 'https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villas-Pool-View_5040x3360-1500x430-1.jpg',
		},
		{
			caption: 'Overhead view of Kaanapali Beach',
			url: 'https://s40340.pcdn.co/wp-content/uploads/2016/01/Aston-Maui-Kaanapali-Villas_Aerial-2-1030x756.jpg',
		},
		{
			caption: 'View of a rainbow and a sailboat from the beach',
			url: 'https://s40340.pcdn.co/wp-content/uploads/2016/02/K43A4341-1030x687.jpg',
		},
		{
			caption: 'The pool at Aston Maui Kaanapali Villas',
			url: 'https://s40340.pcdn.co/wp-content/uploads/2021/06/Aston-Maui-Kaanapali-Villas-_Pool_5040x3360-1030x687.jpg',
		},
		{
			caption: 'Kaanapali Beach',
			url: 'https://s40340.pcdn.co/wp-content/uploads/2015/11/Homepage-Kaanapali-Beach.jpg',
		},
		{
			caption: 'Serenity in Kaanapali',
			url: 'https://s40340.pcdn.co/wp-content/uploads/2015/11/mkv_495x400-1.jpg',
		}
	],

	// list of rooms
	roomsArr: [
				{
			type: 'HotelRoom', // string -> HotelRoom or Suite
			name: 'Hotel Room', // string
			url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
			bookUrl: 'https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=HR00&src=MKV.HR00.schema', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'Our spacious hotel room offers the basic necessities for a comfortable place to unwind. Amenities include central air conditioning, a coffee maker, and mini-refrigerator.', // string
			maxOccupancy: '2', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '1', // number
			bedType: 'King or Queen', // string
			bathroomCount: "1",
			roomCount: "1"
			smokingBoolean: 'False', // boolean
			images: [
				{
					caption: "Hotel Room", // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2021/03/aston-maui-kaanapali-villas-rooms-standard-bedroom-1440x993-1-1030x710.jpg', // url
				},
				{
					caption: "Hotel Room Shower", // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-hotel-room-shower-1440x993-1-1030x710.jpg', // url
				},
				{
					caption: "Hotel Room Shower", // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-hotel-room-shower-1440x993-1-1030x710.jpg', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Mini-refrigerator', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Private balcony (subjet to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				}
			],
		},
		{			
			// must be either 'Suite' or 'Room'
			type: "HotelRoom",

			// name of the room
			name: "Hotel Room Deluxe",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=0HDST&src=MKV.0HDST.schema",

			// description of the room
			description: "This hotel room deluxe features upgraded décor and a contemporary bathroom. Amenities include central air conditioning, a coffee maker, and mini-refrigerator.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: 2,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "1",

			bedType: "King or Queen",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: "Hotel Room Deluxe Bedroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-hotel-room-deluxe-bedroom-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "Hotel Room Deluxe Bedroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-hotel-room-deluxe-bedroom-view-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "Hotel Room Deluxe Bedroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-hotel-room-deluxe-refreshment-center-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "Hotel Room Deluxe Refreshment Center", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-hotel-room-deluxe-refreshment-center-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "Hotel Room Deluxe Balcony", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-hotel-room-deluxe-balcony-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "Hotel Room Deluxe Balcony View", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-hotel-room-deluxe-balcony-view-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "Hotel Room Deluxe Bathroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-hotel-room-deluxe-bathroom-1440x993-1-1030x710.jpg", // url
				},
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms/', // url
				},
				{
					name: 'Mini-refrigerator', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms/', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms/', // url
				},
				{
					name: 'Upgraded decor', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms/', // url
				},
				{
					name: 'contemporary bathroom', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms/', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms/', // url
				}
			]

		},

		{
			// must be either 'Suite' or 'Room'
			type: "HotelRoom",

			// name of the room
			name: "Hotel Room Premium",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=0HP&src=MKV.0HP.schema",

			// description of the room
			description: "For an upgraded stay, our hotel room premium features upscale décor and a modern well-appointed bathroom. This room includes central air conditioning, a coffee maker, and mini-refrigerator.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: 2,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "1",

			bedType: "King or Queen",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			images: [
				{
					caption: 'Hotel Room Premium', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2021/03/aston-maui-kaanapali-villas-premium-bed-1440x964-1-1030x690.jpg', // url
				},
				{
					caption: 'Hotel Room Shower', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-hotel-room-shower-1440x993-1-1030x710.jpg', // url
				},
			],
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms/', // url
				},
				{
					name: 'Mini-refrigerator', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms/', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms/', // url
				},
				{
					name: 'Upscale decor', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms/', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms/', // url
				}
			],
		},
		{
			// must be either 'Suite' or 'Room'
			type: "HotelRoom",

			// name of the room
			name: "Studio Garden View",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=STGV&src=MKV.STGV.schema",

			// description of the room
			description: "Take in views of our tropical gardens and lush landscape. Simple and equipped with the basic necessities, this studio features a full kitchen and bathroom.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: 3,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "2",

			bedType: "King and Sofa Bed OR Queen and Sofa Bed OR 2 Queens",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: "Aston Maui Kaanapali Villa – Studio Garden View Bed", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/MKV-Studio-GV-1-8192x5464-large-1030x687.jpg", // url
				},
				{
					caption: "Aston Maui Kaanapali Villa – Studio Garden View", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/MKV-Studio-GV-Living-Area-1-8192x5464-large-1030x687.jpg", // url
				},
				{
					caption: "Aston Maui Kaanapali Villa – Studio Garden View Living Space", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/MKV-Studio-GV-2-8192x5464-large-1030x687.jpg", // url
				},
				{
					caption: "Aston Maui Kaanapali Villa – Studio Garden View Bedroom Patio", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/MKV-Studio-GV-Patio-Edited-2-8192x5464-R-large-1030x687.jpg", // url
				},
				{
					caption: "Aston Maui Kaanapali Villa – Studio Garden View Kitchen", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/MKV-Studio-GV-Kitchen-2-8192x5464-large-1030x687.jpg", // url
				},
				{
					caption: "Aston Maui Kaanapali Villa – Studio Garden View Bathroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/MKV-Studio-GV-Bathroom-1-8192x5464-large-1030x687.jpg", // url
				},
				
			],
			// list of room amenities
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms/', // url
				},
				{
					name: 'Mini-refrigerator', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms/', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms/', // url
				},
				{
					name: 'Upscale decor', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms/', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms/', // url
				}
			]
		},
		{

			// must be either 'Suite' or 'Room'
			type: "HotelRoom",

			// name of the room
			name: "Studio Garden View Deluxe",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=STGVD&src=MKV.STGVD.schema",

			// description of the room
			description: "This deluxe studio offers serene tropical views of our surrounding gardens. Studio features quality furnishings and a contemporary kitchen and bathroom.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: 3,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "2",

			bedType: "King and Sofa Bed OR Queen and Sofa Bed",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: 'Studio Garden View Deluxe', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-deluxe-bedroom-1440x993-1-1030x710.jpg", // url
				},
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Full kitchen', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Upgraded decor', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				}
			]

		},
				{

			// must be either 'Suite' or 'Room'
			type: "HotelRoom",

			// name of the room
			name: "Studio Garden View Premium",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=STGVP&src=MKV.STGVP.schema",

			// description of the room
			description: "With upscale decor and views of our lush tropical gardens, this premium studio offers some added luxury to comfortable accommodations. Premium studios feature modern upgraded kitchens and bathrooms for up to three people.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: "3" ,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "2",

			bedType: "King and Sofa Bed OR Queen and Sofa Bed",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "2.5",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: 'Studio Garden View Deluxe Bedroom', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-premium-bedroom-1440x993-2-1030x710.jpg", // url
				},
				{
					caption: 'Studio Garden View Deluxe Kitchen', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-premium-kitchen-1440x993-2-1030x710.jpg", // url
				},
				{
					caption: 'Studio Garden View Deluxe Living Area', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-premium-living-area-1440x993-2-1030x710.jpg", // url
				},
				{
					caption: 'Studio Garden View Deluxe Living Area', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-premium-living-area-view-1440x993-2-1030x710.jpg", // url
				},
				{
					caption: 'Studio Garden View Deluxe Patio', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-premium-view-1440x993-2-1030x710.jpg", // url
				},
				{
					caption: 'Studio Garden View Deluxe Bathroom', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-premium-bathroom-2-1440x993-2-1030x710.jpg", // url
				},
				{
					caption: 'Studio Garden View Deluxe Bathroom', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-premium-bathroom-1440x993-2-1030x710.jpg", // url
				},
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Full kitchen', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Upgraded decor', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				}
			]

		}
		{
			type: 'Suite', // string -> HotelRoom or Suite
			name: '1-Bedroom Garden View', // string
			url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
			bookUrl: 'https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=1BGV&src=MKV.1BGV.schema', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: 'False', // boolean
			description: 'This spacious 1-bedroom suite offers views of our tropical gardens. Suite features a separate living area and fully equipped kitchen.', // string
			maxOccupancy: '4', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '2', // number
			bedType: 'King and Sofa Bed OR Queen and Sofa Bed', // string
			smokingBoolean: 'False', // boolean
			images: [
				{
					caption: '1-Bedroom Garden View', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2021/03/aston-maui-kaanapali-villas-1bdrm-garden-view-bedroom-1440x822-1-1030x588.jpg', // url
				},
			],
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Full kitchen', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				}
			],
		},
		{

			// must be either 'Suite' or 'Room'
			type: "Suite",

			// name of the room
			name: "1-Bedroom Garden View",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=1BGV&src=MKV.1BGV.schema",

			// description of the room
			description: "With upscale decor and views of our lush tropical gardens, this premium studio offers some added luxury to comfortable accommodations. Premium studios feature modern upgraded kitchens and bathrooms for up to three people.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: "3" ,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "2",

			bedType: "King and Sofa Bed OR Queen and Sofa Bed",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "2.5",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: 'Studio Garden View Deluxe Bedroom', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-premium-bedroom-1440x993-2-1030x710.jpg", // url
				},
				{
					caption: 'Studio Garden View Deluxe Kitchen', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-premium-kitchen-1440x993-2-1030x710.jpg", // url
				},
				{
					caption: 'Studio Garden View Deluxe Living Area', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-premium-living-area-1440x993-2-1030x710.jpg", // url
				},
				{
					caption: 'Studio Garden View Deluxe Living Area', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-premium-living-area-view-1440x993-2-1030x710.jpg", // url
				},
				{
					caption: 'Studio Garden View Deluxe Patio', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-premium-view-1440x993-2-1030x710.jpg", // url
				},
				{
					caption: 'Studio Garden View Deluxe Bathroom', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-premium-bathroom-2-1440x993-2-1030x710.jpg", // url
				},
				{
					caption: 'Studio Garden View Deluxe Bathroom', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-premium-bathroom-1440x993-2-1030x710.jpg", // url
				},
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Full kitchen', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Upgraded decor', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				}
			]

		}
		{

			// must be either 'Suite' or 'Room'
			type: "Suite",

			// name of the room
			name: "1-Bedroom Garden View Premium",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=1BGVP&src=MKV.1BGVP.schema",

			// description of the room
			description: "With premium amenities and more space to spread out, this 1 bedroom suite offers serene views of our tropical landscape. Suite features upgraded furnishings, a separate living area, designer bathroom, and a fully equipped gourmet kitchen",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: "4" ,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "2",

			bedType: "King and Sofa Bed OR Queen and Sofa Bed",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: 'Aston Maui Kaanapali Villa – 1 Bedroom Garden View Premium - Bedroom', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2023/09/MKV-1BD-GV-Premium-Bedroom-1-8192x5464-large-1030x687.jpg', // url
				},
				{
					caption: 'Aston Maui Kaanapali Villa – 1 Bedroom Garden View Premium - Living Area', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2023/09/MKV-1BD-GV-Premium-Living-Area-Edited-1-8192x5464-large-1030x687.jpg', // url
				},
				{
					caption: 'Aston Maui Kaanapali Villa – 1 Bedroom Garden View Premium - Living Area', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2023/09/MKV-1BD-GV-Premium-Living-Area-4-8192x5464-large-1030x687.jpg', // url
				},
				{
					caption: 'Aston Maui Kaanapali Villa – 1 Bedroom Garden View Premium - Dining Area', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2023/09/MKV-1BD-GV-Premium-Dining-1-8192x5464-large-1030x687.jpg', // url
				},
				{
					caption: 'Aston Maui Kaanapali Villa – 1 Bedroom Garden View Premium - Kitchen', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2023/09/MKV-1BD-GV-Premium-Kitchen-1-8192x5464-large-1030x687.jpg', // url
				},
				{
					caption: 'Aston Maui Kaanapali Villa – 1 Bedroom Garden View Premium - Patio', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2023/09/MKV-1BD-GV-Premium-Patio-2-8192x5464-large-1030x687.jpg', // url
				},
				{
					caption: 'Aston Maui Kaanapali Villa – 1 Bedroom Garden View Premium - Bathroom', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2023/09/MKV-1BD-GV-Premium-Bathroom-1-8192x5464-large-1030x687.jpg', // url
				},
				
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Full kitchen', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Upgraded decor', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				}
			]

		}
		{

			// must be either 'Suite' or 'Room'
			type: "HotelRoom",

			// name of the room
			name: "Studio Ocean View",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=STOV&src=MKV.STOV.schema",

			// description of the room
			description: "Take in peaceful views of the sparkling Pacific Ocean. This studio features simple and clean appointments, central air conditioning, and a fully equipped kitchen.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: "3" ,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "2",

			bedType: "King and Sofa Bed OR Queen and Sofa Bed",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: 'Studio Ocean View Area', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-ocean-view-living-area_1440x993-1030x710.jpg', // url
				},
				{
					caption: 'Studio Ocean View Bedroom', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-ocean-view-bedroom_1440x993-1030x710.jpg', // url
				},
				{
					caption: 'Studio Ocean View Kitchen', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-ocean-view-kitchen_1440x993-1030x710.jpg', // url
				},
				{
					caption: 'Studio Ocean View Kitchen', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-ocean-view-kitchen-2-1440x993-1-1030x710.jpg', // url
				},
				{
					caption: 'Studio Ocean View Balcony', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-ocean-view-balcony-view-2_1440x993-1030x710.jpg', // url
				},
				{
					caption: 'View overlloking the Villas', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-ocean-view-balcony-view_1440x993-1030x710.jpg', // url
				},
				{
					caption: 'Studio Ocean View Shower', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-ocean-view-shower_1440x993-1030x710.jpg', // url
				},
				{
					caption: 'Studio Ocean View Bathroom', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-ocean-view_bathroom_1440x993-1030x710.jpg', // url
				},
				
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Full kitchen', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Upgraded decor', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				}
			]

		}
		{

			// must be either 'Suite' or 'Room'
			type: "HotelRoom",

			// name of the room
			name: "Studio Ocean View Premium",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=STOVP&src=MKV.STOVP.schema",

			// description of the room
			description: "Upgrade your getaway with beautiful Pacific Ocean views and premium amenities. This studio features upgraded furnishings, a designer bathroom, and fully equipped gourmet kitchen.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: "3" ,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "2",

			bedType: "King and Sofa Bed OR Queen and Sofa Bed",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: 'Aston Maui Kaanapali Villa – Studio Ocean View Premium - Bed', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-Studio-Ocean-View-Premium-Bed-1030x687.jpg', // url
				},
				{
					caption: 'Aston Maui Kaanapali Villa – Studio Ocean View Premium -Living Area View', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-Studio-Ocean-View-Premium-Living-Area-View-1030x687.jpg', // url
				},
				{
					caption: 'Aston Maui Kaanapali Villa – Studio Ocean View Premium -Dining', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-Studio-Ocean-View-Premium-Dining-1-1030x687.jpg', // url
				},
				{
					caption: 'Aston Maui Kaanapali Villa – Studio Ocean View Premium - Living Area 2', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-Studio-Ocean-View-Premium-Living-Area-2-1030x687.jpg', // url
				},
				{
					caption: 'Aston Maui Kaanapali Villa – Studio Ocean View Premium -Living Area', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-Studio-Ocean-View-Premium-Living-Area-1-1030x687.jpg', // url
				},
				{
					caption: 'Aston Maui Kaanapali Villa – Studio Ocean View Premium - Kitchen', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-Studio-Ocean-View-Premium-Kitchen-1-1030x687.jpg', // url
				},
				{
					caption: 'Aston Maui Kaanapali Villa – Studio Ocean View Premium -Bathroom', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-Studio-Ocean-View-Premium-Bathroom-1-1030x687.jpg', // url
				},
				
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Full kitchen', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Upgraded decor', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				}
			]

		}
		{

			// must be either 'Suite' or 'Room'
			type: "HotelRoom",

			// name of the room
			name: "Studio Oceanside",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=STOS&src=MKV.STOS.schema",

			// description of the room
			description: "This studio offers a large balcony and easy access to the beach. Studio features central air conditioning and a fully equipped kitchen.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: "3" ,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "2",

			bedType: "King and Sofa Bed OR Queen and Sofa Bed",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: 'Studio Oceanside', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2021/03/aston-maui-kaanapali-villas-outside-premium-living-1440x938-1-1030x757.jpg', // url
				},
				
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Full kitchen', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Upgraded decor', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				}
			]

		}
		{

			// must be either 'Suite' or 'Room'
			type: "HotelRoom",

			// name of the room
			name: "Studio Oceanside Premium",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=STOSP&src=MKV.STOSP.schema",

			// description of the room
			description: "Upgrade your vacation and stay just steps from the beach in our premium studios with modern amenities and easy access to the oceanfront. Studio features upscale furnishings, a designer bathroom, and fully equipped gourmet kitchen.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: "3" ,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "2",

			bedType: "King and Sofa Bed OR Queen and Sofa Bed",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: 'Studio Oceanside Premium', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/03/aston-maui-kaanapali-villas-studio-premium-1440x1053-1-1030x753.jpg", // url
				},
				{
					caption: 'Studio Oceanside', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/03/aston-maui-kaanapali-villas-outside-premium-living-1440x938-1-1030x757.jpg", // url
				},
				
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Full kitchen', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Upgraded decor', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				}
			]

		}
		{

			// must be either 'Suite' or 'Room'
			type: "Suite",

			// name of the room
			name: "1-Bedroom Ocean View",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=1BOV&src=MKV.1BOV.schema",

			// description of the room
			description: "Enjoy beautiful views of the sparkling Pacific Ocean from this spacious suite with one bedroom. Suite features central air conditioning, a separate living area, and fully equipped kitchen.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: "4" ,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "2",

			bedType: "King and Sofa Bed OR Queen and Sofa Bed",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: 'Studio Oceanside Premium', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2022/10/Aston-Maui-Kaanapali-Villas-1-Bedroom-Ocean-View-Bedroom-1030x691.jpg", // url
				},
				{
					caption: '1-Bedroom Ocean View Living Room', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2022/10/Aston-Maui-Kaanapali-Villas-1-Bedroom-Ocean-View-Living-Room-1030x564.jpg", // url
				},
				{
					caption: 'Aston Maui Kaanapali Villas-1-Bedroom-Ocean-View-Kitchen', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2022/10/Aston-Maui-Kaanapali-Villas-1-Bedroom-Ocean-View-Kitchen-1030x687.jpg", // url
				},
				{
					caption: 'Aston Maui Kaanapali Villas-1-Bedroom-Ocean-View-Shower', // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2022/10/Aston-Maui-Kaanapali-Villas-1-Bedroom-Ocean-View-Shower-5040x3360-1-1030x687.jpg", // url
				},
				
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Full kitchen', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Upgraded decor', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				}
			]

		}
		{

			// must be either 'Suite' or 'Room'
			type: "Suite",

			// name of the room
			name: "1-Bedroom Ocean View Premium",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=1BOVP&src=MKV.1BOVP.schema",

			// description of the room
			description: "Treat your vacation to an upgrade with premium amenities and gorgeous ocean views. Suite features upgraded furnishings, a separate living area, designer bathroom, and fully equipped gourmet kitchen.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: "4" ,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "2",

			bedType: "King and Sofa Bed OR Queen and Sofa Bed",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: "Aston Maui Kaanapali Villa – 1 Bedroom Ocean View Premium -Bedroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-1-Bedroom-Ocean-View-Premium-Bedroom-1030x687.jpg", // url
				},
				{
					caption: "Aston Maui Kaanapali Villa – 1 Bedroom Ocean View Premium -Living-Area", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-1-Bedroom-Ocean-View-Premium-Living-Area-1030x687.jpg", // url
				},
				{
					caption: "Aston Maui Kaanapali Villa – 1 Bedroom Ocean View Premium -Living - Area and View", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-1-Bedroom-Ocean-View-Premium-Living-Area-and-View-1030x687.jpg", // url
				},
				{
					caption: "Aston Maui Kaanapali Villa – 1 Bedroom Ocean View Premium -Living Room", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-1-Bedroom-Ocean-View-Premium-Living-Room-1030x687.jpg", // url
				},
				{
					caption: "Aston Maui Kaanapali Villa – 1 Bedroom Ocean View Premium - Kitchen", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-1-Bedroom-Ocean-View-Premium-Kitchen-1030x687.jpg", // url
				},
				{
					caption: "Aston Maui Kaanapali Villa – 1 Bedroom Ocean View Premium -Lanai", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-1-Bedroom-Ocean-View-Premium-Lanai-1030x687.jpg", // url
				},
				{
					caption: "Aston Maui Kaanapali Villa – 1 Bedroom Ocean View Premium -Bathroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-1-Bedroom-Ocean-View-Premium-Bathroom-1030x687.jpg", // url
				},
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Full kitchen', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Upgraded decor', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				}
			]

		},
		{

			// must be either 'Suite' or 'Room'
			type: "Suite",

			// name of the room
			name: "1-Bedroom Oceanside",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=1BOS&src=MKV.1BOS.schema",

			// description of the room
			description: "Experience true leisure in this 1-bedroom suite with a private balcony and easy access to the beach. Suite features air conditioning, a separate living area, and fully equipped kitchen.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: "4" ,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "2",

			bedType: "King & Sofa Bed or Queen & Sofa Bed or 2 Queens",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: "1-Bedroom Oceanside", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/03/aston-maui-kaanapali-villas-1bdrm-oceanside-bedroom-1440x957-1-1030x685.jpg", // url
				},
				{
					caption: "1-Bedroom Oceanside Living Area", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-1bdrm-oceanside-living-area-1440x959-1-1030x686.jpg", // url
				},
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Full kitchen', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Upgraded decor', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				}
			]

		},
		{

			// must be either 'Suite' or 'Room'
			type: "Suite",

			// name of the room
			name: "1-Bedroom Oceanside Premium",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=1BOSP&src=MKV.1BOSP.schema",

			// description of the room
			description: "The ultimate luxury, this upgraded 1-bedroom suite offers premium amenities and oceanside access to the beach. Suite features upgraded furnishings, a separate living area, designer bathroom, and fully equipped gourmet kitchen.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: "4" ,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "2",

			bedType: "King & Sofa Bed or Queen & Sofa Bed",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: "Aston Maui Kaanapali Villa – 1 Bedroom Oceanside Premium -Bedroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-1-Bedroom-Oceanside-Premium-Bedroom-1030x687.jpg", // url
				},
				{
					caption: "Aston Maui Kaanapali Villa – 1 Bedroom Oceanside Premium - Living Area View", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-1-Bedroom-Oceanside-Premium-Living-Area-View-1030x687.jpg", // url
				},
				{
					caption: "Aston Maui Kaanapali Villa – 1 Bedroom Oceanside Premium -Living Area", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-1-Bedroom-Oceanside-Premium-Living-Area-1030x687.jpg", // url
				},
				{
					caption: "Aston Maui Kaanapali Villa – 1 Bedroom Oceanside Premium -Kitchen", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-1-Bedroom-Oceanside-Premium-Kitchen-1030x687.jpg", // url
				},
				{
					caption: "Aston Maui Kaanapali Villa – 1 Bedroom Oceanside Premium -Bathroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-1-Bedroom-Oceanside-Premium-Bathroom-1030x687.jpg", // url
				},
				{
					caption: "Aston Maui Kaanapali Villa – 1 Bedroom Oceanside Premium -Lanai", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2023/09/Aston-Maui-Kaanapali-Villa-%E2%80%93-1-Bedroom-Oceanside-Premium-Lanai-1030x687.jpg", // url
				},
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Full kitchen', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Upgraded decor', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				}
			]

		}
		{

			// must be either 'Suite' or 'Room'
			type: "Suite",

			// name of the room
			name: "2-Bedroom Suite Deluxe",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=2BDX&src=MKV.2BDX.schema",

			// description of the room
			description: "Ideal for families and small groups, this two bedroom suite offers maximum space and comfort. Suite features central air conditioning, a separate living area, and fully equipped kitchen.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: "4" ,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "2",

			bedType: "King, Queen and Sofa Bed",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: "2-Bedroom Suite Deluxe Bedroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-2-bedroom-suite-deluxe_master-bedroom-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "2-Bedroom Suite Deluxe Living Area", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-hotel-living-area-1-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "2-Bedroom Suite Deluxe Kitchen", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-2-bedroom-suite-deluxe_master-kitchen-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "2-Bedroom Suite Deluxe Living Area", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-2-bedroom-suite-deluxe_master-living-area-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "2-Bedroom Suite Deluxe Living Area", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-2-bedroom-suite-deluxe_dining-area_1440x993-1030x710.jpg", // url
				},
				{
					caption: "2-Bedroom Suite Deluxe Patio", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-2-bedroom-suite-deluxe_lanai-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "aston-maui-kaanapali-villas-hotel-master-bedroom-1-1440x993", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-hotel-master-bedroom-1-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "2-Bedroom Suite Deluxe Bathroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-2-bedroom-suite-deluxe_master-bathroom-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "2-Bedroom Suite Deluxe Bedroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-2-bedroom-suite-deluxe_bathroom_1440x993-1030x710.jpg", // url
				},
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Full kitchen', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Upgraded decor', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				}
			]

		}
{

			// must be either 'Suite' or 'Room'
			type: "Suite",

			// name of the room
			name: "1-Bedroom Oceanfront Premium",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=1BOFP&src=MKV.1BOFP.schema",

			// description of the room
			description: "With 180-degree unobstructed oceanfront views, this premium 1-bedroom suite offers an elevated vacation experience. Suite features upgraded furnishings, a separate living area, designer bathroom, and fully equipped gourmet kitchen.",

			// maximum number of guests that can stay in this accommodation
			maxOccupancy: "4" ,

			// 24 hours time. ex: 14:00
			checkInTime: "16:00",
			checkOutTime: "11:00",

			// total number of beds in this accommodation
			bedCount: "2",

			bedType: "King",

			// total number of bathrooms in this accommodation (ex: 1 or 2.5, etc)
			bathroomCount: "1",

			// total number of rooms in this accommodation
			roomCount: "",

			// images of the room
			images: [
				{
					caption: "Aston-Maui-Kaanapali-Villas-1-Bedroom-Oceanfront-Premium_Kitchen", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/Aston-Maui-Kaanapali-Villas-1-Bedroom-Oceanfront-Premium_Kitchen_5040x3360-medium-1030x687.jpg", // url
				},
				{
					caption: "Aston-Maui-Kaanapali-Villas-1-Bedroom-Oceanfront-Premium_Kitchen-tight", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/Aston-Maui-Kaanapali-Villas-1-Bedroom-Oceanfront-Premium_Kitchen-tight_5040x3360-medium-1030x687.jpg", // url
				},
				{
					caption: "Aston-Maui-Kaanapali-Villas-1-Bedroom-Oceanfront-Premium_Bedroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/Aston-Maui-Kaanapali-Villas-1-Bedroom-Oceanfront-Premium_Bedroom-2_5040x3360-medium-1030x687.jpg", // url
				},
				{
					caption: "Aston-Maui-Kaanapali-Villas-1-Bedroom-Oceanfront-Premium_Bathroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/Aston-Maui-Kaanapali-Villas-1-Bedroom-Oceanfront-Premium_Bathroom_5040x3360-medium-1030x687.jpg", // url
				},
				{
					caption: "Aston-Maui-Kaanapali-Villas-1-Bedroom-Oceanfront-Premium_Shower", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/Aston-Maui-Kaanapali-Villas-1-Bedroom-Oceanfront-Premium_Shower_5040x3360-medium-1030x687.jpg", // url
				},
				
			],

			// list of room amenities
			roomAmenitiesArr: [
				{
					name: 'Air conditioning', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Full kitchen', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Private balcony (subject to availability)', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'Upgraded decor', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				},
				{
					name: 'WiFi access', // string
					url: 'https://www.astonmauikaanapalivillas.com/guest-rooms', // url
				}
			]

		}
	
	],

	// list of restaurants at the hotel
	restaurants: [
		
		{
			
			name: "Castaway Café",
			url: "https://www.astonmauikaanapalivillas.com/resort-dining/",
			description: "Indulge in a casual beachfront dining experience at Castaway Café. The menu features cuisine with island flavors that are inspired by the Pacific region. You’ll love the diverse menu offering delicious salads, sandwiches, seafood, burgers, and a nightly fresh fish selection. Dine al fresco, gaze out at Pacific Ocean, and enjoy romantic sunsets during dinner with the islands of Lanai and Molokai in the distance. Castaway Café is surrounded by towering palms and is located between the resort’s swimming pools and the ocean.",

			// the URL of the menu (can be a PDF if applicable)
			menuUrl: "https://www.castawaycafe.com/menu/",

			// is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			priceRange: "$$$",

			// contact
			contact: {

				phone: "1-808-661-9091", // format: x-xxx-xxx-xxxx
				email: ""
				
			},
			
			// location
			location: {
				street: "45 Kai Ala Drive",
				city: "Lahaina",
				state: "Hi", // 2 letter state code
				zip: "96761",
				country: "USA"
			},
			
			// rating
			rating: {
				value: 4.4,
				count: 1226
			},

			// Tuhin, leave the 'openingHours' and 'servesCuisine' empty for now
			openingHours: [],
			servesCuisine: []
			
		}
	],

	// list of spas at the hotel
	spas: [
		
		{
			name: "Spa La Mer",
			url: "https://www.astonmauikaanapalivillas.com/featured-amenities/",
			description: "Make your getaway complete with a session at our on-site spa. Spa La Mer offers a variety of wellness services including therapeutic massage, couple experiences, and facial treatments. It’s your time to relax and unwind, make an appointment today! We recommend booking your appointment in advance. Treat your skin to a rejuvenating facial with healing vitamins and botanicals. Enhance your wellness experience with aromatherapy or a warm coconut oil scalp massage.",
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
			author: "William Rogers", // name of the reviewer
			value: "5", // be sure to only include 5 star reviews -> so the value should always be 5
			datePublished: "2023-11-20",
			reviewed: {

				// Tuhin, set the 'type' to 'VacationRental' for all for now
				type: "VacationRental", // expected: 'VacationRental' (can add more functionality later)

				// Tuhin, leave the 'name' empty for now for any reviews
				name: ""
			}
		},
		{
			author: "Malia K", // name of the reviewer
			value: "5", // be sure to only include 5 star reviews -> so the value should always be 5
			datePublished: "2023-11-20",
			reviewed: {

				// Tuhin, set the 'type' to 'VacationRental' for all for now
				type: "VacationRental", // expected: 'VacationRental' (can add more functionality later)

				// Tuhin, leave the 'name' empty for now for any reviews
				name: ""
			}
		}
	]
	
}
