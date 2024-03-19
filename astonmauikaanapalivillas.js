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

			// must be either 'Suite' or 'Room'
			type: "HotelRoom",

			// name of the room
			name: "Hotel Room",

			// URL of this specific room
			url: "https://www.astonmauikaanapalivillas.com/guest-rooms",

			// URL from where the room can be booked (if applicable)
			bookUrl: "https://be.synxis.com/?hotel=14894&level=hotel&locale=en-US&room=HR00&src=MKV.HR00.schema",

			// description of the room
			description: "Our spacious hotel room offers the basic necessities for a comfortable place to unwind. Amenities include central air conditioning, a coffee maker, and mini-refrigerator.",

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
				]
				
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

			// images of the room
			images: [
				{
					caption: 'Hotel Room Premium', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2021/03/aston-maui-kaanapali-villas-premium-bed-1440x964-1-1030x690.jpg', // url
				},
				{
					caption: 'Hotel Room Premium', // string
					url: 'https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-hotel-room-shower-1440x993-1-1030x710.jpg', // url
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

		}
				{

			// must be either 'Suite' or 'Room'
			type: "HotelRoom",

			// name of the room
			name: "Studio Garden View Premium",

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
					caption: "Studio Garden View Deluxe Bedroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-deluxe-bedroom-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "Studio Garden View Deluxe Kitchen", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-deluxe-kitchen-1440x993-1-1030x710.jpg
				{
					caption: "Studio Garden View Deluxe Living Area", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-deluxe-living-area-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "Studio Garden View Deluxe Setting Area", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-deluxe-seating-area-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "Studio Garden View Deluxe Bathroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-deluxe-bathroom-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "Studio Garden View Deluxe Bathroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-shower-1440x993-2-1030x710.jpg", // url
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

		}

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
					caption: "Studio Garden View Deluxe Bedroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-deluxe-bedroom-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "Studio Garden View Deluxe Kitchen", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-deluxe-kitchen-1440x993-1-1030x710.jpg
				{
					caption: "Studio Garden View Deluxe Living Area", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-deluxe-living-area-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "Studio Garden View Deluxe Setting Area", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-deluxe-seating-area-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "Studio Garden View Deluxe Bathroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-deluxe-bathroom-1440x993-1-1030x710.jpg", // url
				},
				{
					caption: "Studio Garden View Deluxe Bathroom", // string
					url: "https://s40340.pcdn.co/wp-content/uploads/2021/06/aston-maui-kaanapali-villas-studio-garden-view-shower-1440x993-2-1030x710.jpg", // url
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
