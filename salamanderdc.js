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
			type: "Room", // must be either 'Suite' or 'Room'
			name: "Deluxe Room", // name of the room
			url: "https://www.salamanderdc.com/rooms/rooms", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "An elegant room with a spa-inspired bathroom.",
			maxOccupancy: 4, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "2", // total number of beds in this accommodation
			bedType: "2 Queen Beds",
			bathroomCount: "1", // total number of bathrooms in this accommodation
			roomCount: "1", // total number of rooms in this accommodation
			images: [
				{
					caption: "Deluxe Room", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/deluxe-room-1.jpg?0019604270555581893", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "Spa-inspired bathroom",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/rooms"
				}
			]
		},
		{
			type: "Room", // must be either 'Suite' or 'Room'
			name: "Deluxe Water View Room", // name of the room
			url: "https://www.salamanderdc.com/rooms/rooms", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "Waterfront views from a spacious room.",
			maxOccupancy: 2, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "1", // total number of beds in this accommodation
			bedType: "1 King Bed",
			bathroomCount: "1", // total number of bathrooms in this accommodation
			roomCount: "1", // total number of rooms in this accommodation
			images: [
				{
					caption: "Deluxe Water View Room", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/deluxe-waterview-room-1.jpg?009669102673435159", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "Spa-inspired bathroom",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/rooms"
				}
			]
		},
		{
			type: "Room", // must be either 'Suite' or 'Room'
			name: "Premier Water View Room", // name of the room
			url: "https://www.salamanderdc.com/rooms/rooms", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "A spacious corner room with views of the Marina or Jefferson Memorial.",
			maxOccupancy: 2, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "1", // total number of beds in this accommodation
			bedType: "1 King Bed",
			bathroomCount: "1", // total number of bathrooms in this accommodation
			roomCount: "1", // total number of rooms in this accommodation
			images: [
				{
					caption: "Premier Water View Room", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/premier-waterview-room1.jpg?07507421903968812", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "Spa-inspired bathroom",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/rooms"
				}
			]
		},
		{
			type: "Room", // must be either 'Suite' or 'Room'
			name: "Deluxe Connecting Room", // name of the room
			url: "https://www.salamanderdc.com/rooms/rooms", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "Two connected rooms for up to six guests with two large bathrooms.",
			maxOccupancy: 6, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "1", // total number of beds in this accommodation
			bedType: "2 Queens and 1 King Bed",
			bathroomCount: "2", // total number of bathrooms in this accommodation
			roomCount: "2", // total number of rooms in this accommodation
			images: [
				{
					caption: "A white bed with a blue chair at the foot of the bed", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage2/deluxe-connecting-room-2.jpg?07597102640625389", // url of the image source
				},
				{
					caption: "White beds with blue blankets", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/premier-waterview-2bed.jpg?031197429824613787", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "Spa-inspired bathroom",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/rooms"
				}
			]
		},
		{
			type: "Room", // must be either 'Suite' or 'Room'
			name: "Deluxe Room ADA", // name of the room
			url: "https://www.salamanderdc.com/rooms/rooms", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "An elegant room with a spa-inspired bathroom. Daily rates may vary by bed type.",
			maxOccupancy: 4, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "2", // total number of beds in this accommodation
			bedType: "2 Queen Beds",
			bathroomCount: "2", // total number of bathrooms in this accommodation
			roomCount: "2", // total number of rooms in this accommodation
			images: [
				{
					caption: "A room with blue walls", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/deluxe-room-1.jpg?047600481666010797", // url of the image source
				},
				{
					caption: "A blue chair alongside a table", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage2/marina-view-connecting-1.jpg?04393701755520574", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "Two spa-inspired bathrooms",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/rooms"
				}
			]
		},
		{
			type: "Room", // must be either 'Suite' or 'Room'
			name: "Deluxe Water View Room ADA", // name of the room
			url: "https://www.salamanderdc.com/rooms/rooms", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "Waterfront views from a spacious room",
			maxOccupancy: 4, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "1", // total number of beds in this accommodation
			bedType: "2 Queen Beds",
			bathroomCount: "1", // total number of bathrooms in this accommodation
			roomCount: "1", // total number of rooms in this accommodation
			images: [
				{
					caption: "deluxe waterview room", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/deluxe-waterview-room-1.jpg?023609203387405564", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "Two spa-inspired bathrooms",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/rooms"
				}
			]
		},
		{
			type: "Room", // must be either 'Suite' or 'Room'
			name: "Premier Water View Room ADA", // name of the room
			url: "https://www.salamanderdc.com/rooms/rooms", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "A spacious corner room with views of the Marina or Jefferson Memorial.",
			maxOccupancy: 4, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "1", // total number of beds in this accommodation
			bedType: "2 Queen Beds",
			bathroomCount: "1", // total number of bathrooms in this accommodation
			roomCount: "1", // total number of rooms in this accommodation
			images: [
				{
					caption: "A white bed with a blue blanket", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/premier-waterview-room1.jpg?006304247819661557", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "Two spa-inspired bathrooms",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/rooms"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/rooms"
				}
			]
		},
		{
			type: "Suite", // must be either 'Suite' or 'Room'
			name: "Studio Suite", // name of the room
			url: "https://www.salamanderdc.com/rooms/suites", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "The Studio Suite features an open floor plan.",
			maxOccupancy: 4, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "2", // total number of beds in this accommodation
			bedType: "1 King Bed and 1 Double Sofa Bed",
			bathroomCount: "1", // total number of bathrooms in this accommodation
			roomCount: "1", // total number of rooms in this accommodation
			images: [
				{
					caption: "Studio Suite", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/240820_SalamanderDC_328Suites_0211c_lowres.jpg?08397670742435268", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Two spa-inspired bathrooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/suites"
				}
			]
		},
		{
			type: "Suite", // must be either 'Suite' or 'Room'
			name: "Deluxe One Bedroom Suite", // name of the room
			url: "https://www.salamanderdc.com/rooms/suites", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "A one-bed suite with separate living room and spa-inspired bathroom.",
			maxOccupancy: 4, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "2", // total number of beds in this accommodation
			bedType: "1 King Bed and 1 Double Sofa Bed",
			bathroomCount: "1", // total number of bathrooms in this accommodation
			roomCount: "2", // total number of rooms in this accommodation
			images: [
				{
					caption: "Deluxe One Bedroom Suite", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/240820_SalamanderDC_328Suites_0196b_lowres.jpg?03320330508645184", // url of the image source
				},
				{
					caption: "Deluxe One Bedroom Suite - Bathroom", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage2/240820_SalamanderDC_328Suites_0176_lowres.jpg?07546263513898019", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Two spa-inspired bathrooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/suites"
				}
			]
		},
		{
			type: "Suite", // must be either 'Suite' or 'Room'
			name: "Marina View One Bedroom Suite", // name of the room
			url: "https://www.salamanderdc.com/rooms/suites", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "A spacious one-bedroom suite with large windows overlooking the Marina.",
			maxOccupancy: 2, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "1", // total number of beds in this accommodation
			bedType: "1 King Bed",
			bathroomCount: "1", // total number of bathrooms in this accommodation
			roomCount: "2", // total number of rooms in this accommodation
			images: [
				{
					caption: "living space in a marina view suite", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/240820_SalamanderDC_301Suites_0130_lowres.jpg?010356951015766414", // url of the image source
				},
				{
					caption: "A white bed with a view", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage2/240820_SalamanderDC_300Suites_0337b_lowres.jpg?042348997735908056", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Two spa-inspired bathrooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/suites"
				}
			]
		},
		{
			type: "Suite", // must be either 'Suite' or 'Room'
			name: "Marina View One Bedroom Suite ADA", // name of the room
			url: "https://www.salamanderdc.com/rooms/suites", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "Offering peaceful Marina views, this spacious suite features a king bedroom and separate living room. A spa-like bathroom connects to the bedroom, offering a deep bath, walk-in glass-enclosed shower, and dimmable lighting.",
			maxOccupancy: 2, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "1", // total number of beds in this accommodation
			bedType: "1 King Bed",
			bathroomCount: "1", // total number of bathrooms in this accommodation
			roomCount: "2", // total number of rooms in this accommodation
			images: [
				{
					caption: "A marina view room", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/marinaview-1bed-1.jpg?09895259601421438", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Two spa-inspired bathrooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/suites"
				}
			]
		},
		{
			type: "Suite", // must be either 'Suite' or 'Room'
			name: "Deluxe Balcony One Bedroom Suite", // name of the room
			url: "https://www.salamanderdc.com/rooms/suites", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "Garden or marina views from this one-bedroom suite with a balcony.",
			maxOccupancy: 4, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "2", // total number of beds in this accommodation
			bedType: "1 King Bed and 1 Double Sofa Bed",
			bathroomCount: "1", // total number of bathrooms in this accommodation
			roomCount: "1", // total number of rooms in this accommodation
			images: [
				{
					caption: "A TV and couch", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/240820_SalamanderDC_301Suites_0130_lowres.jpg?05783811510122352", // url of the image source
				},
				{
					caption: "Living Room", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage2/240820_SalamanderDC_300Suites_0011_lowres.jpg?06359372930600364", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Two spa-inspired bathrooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/suites"
				}
			]
		},
		{
			type: "Suite", // must be either 'Suite' or 'Room'
			name: "Premier Water View One Bedroom Suite", // name of the room
			url: "https://www.salamanderdc.com/rooms/suites", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "A spacious corner suite with views over the Marina and Jefferson Memorial.",
			maxOccupancy: 4, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "2", // total number of beds in this accommodation
			bedType: "1 King Bed and 1 Double Sofa Bed",
			bathroomCount: "1", // total number of bathrooms in this accommodation
			roomCount: "1", // total number of rooms in this accommodation
			images: [
				{
					caption: "A room with a view", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/240820_SalamanderDC_370Suites_0508_lowres.jpg?06486315502125151", // url of the image source
				},
				{
					caption: "The bedroom of the room", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage2/240820_SalamanderDC_301Suites_0130_lowres.jpg?04611401077343886", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Two spa-inspired bathrooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/suites"
				}
			]
		},
		{
			type: "Suite", // must be either 'Suite' or 'Room'
			name: "Marina View Suite with Two Kings", // name of the room
			url: "https://www.salamanderdc.com/rooms/suites", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "With views of the Marina and Wharf, this two-bedroom suite measures 1,463 sq ft and features a Marina View Suite paired with an adjacent King room by an outer door.  A pullout sofa provides additional bedding.",
			maxOccupancy: 4, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "2", // total number of beds in this accommodation
			bedType: "2 King Beds",
			bathroomCount: "1", // total number of bathrooms in this accommodation
			roomCount: "2", // total number of rooms in this accommodation
			images: [
				{
					caption: "A blue chair and a table", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/marina-view-connecting-1.jpg?09097085949133128", // url of the image source
				},
				{
					caption: "A white bed with a view", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage2/marinaview-1bed-1.jpg?0443466236532866", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Two spa-inspired bathrooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/suites"
				}
			]
		},
		{
			type: "Suite", // must be either 'Suite' or 'Room'
			name: "Premier Water View Two-Bedroom Suite", // name of the room
			url: "https://www.salamanderdc.com/rooms/suites", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "Enjoy generous space provided by a Premier Water View 2-Bedroom Suite with views over the Marina and Jefferson Memorial.",
			maxOccupancy: 6, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "3", // total number of beds in this accommodation
			bedType: "1 King Beds and 2 Queen Beds",
			bathroomCount: "1", // total number of bathrooms in this accommodation
			roomCount: "2", // total number of rooms in this accommodation
			images: [
				{
					caption: "A white bed with a view", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/marinaview-1bed-1.jpg?08014681872724062", // url of the image source
				},
				{
					caption: "Two white beds side by side", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage2/premier-waterview-2bed.jpg?034696698683944693", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Two spa-inspired bathrooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/suites"
				}
			]
		},
		{
			type: "Suite", // must be either 'Suite' or 'Room'
			name: "Diplomat Suite", // name of the room
			url: "https://www.salamanderdc.com/rooms/suites", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "A signature one-bedroom suite with waterside views.",
			maxOccupancy: 2, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "1", // total number of beds in this accommodation
			bedType: "1 King Bed",
			bathroomCount: "1", // total number of bathrooms in this accommodation
			roomCount: "1", // total number of rooms in this accommodation
			images: [
				{
					caption: "A room with a view", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/diplomat-1.jpg?000865349849812913", // url of the image source
				},
				{
					caption: "Glasses next to food", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage2/detail3.jpg?04659419187213063", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Two spa-inspired bathrooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/suites"
				}
			]
		},
		{
			type: "Suite", // must be either 'Suite' or 'Room'
			name: "Mayor Suite", // name of the room
			url: "https://www.salamanderdc.com/rooms/suites", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "A top-floor, one-bedroom suite with living room and large bathroom.",
			maxOccupancy: 2, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "1", // total number of beds in this accommodation
			bedType: "1 King Bed",
			bathroomCount: "1", // total number of bathrooms in this accommodation
			roomCount: "1", // total number of rooms in this accommodation
			images: [
				{
					caption: "A white bathroom", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/mayor1.jpg?05547008320735202", // url of the image source
				},
				{
					caption: "A couch and table", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage2/mayor2.jpg?04938791555646648", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Two spa-inspired bathrooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/suites"
				}
			]
		},
		{
			type: "Suite", // must be either 'Suite' or 'Room'
			name: "Ambassador Suite", // name of the room
			url: "https://www.salamanderdc.com/rooms/suites", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "Panoramic waterside views from this one-bedroom suite with original art.",
			maxOccupancy: 2, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "1", // total number of beds in this accommodation
			bedType: "1 King Bed",
			bathroomCount: "1", // total number of bathrooms in this accommodation
			roomCount: "1", // total number of rooms in this accommodation
			images: [
				{
					caption: "A suite with brown furnishings", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/ambassador-1.jpg?07568545950077704", // url of the image source
				},
				{
					caption: "Alcohol in an ice bucket", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage2/detail1.jpg?0882401579741719", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Two spa-inspired bathrooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/suites"
				}
			]
		},
		{
			type: "Suite", // must be either 'Suite' or 'Room'
			name: "Bethune Suite", // name of the room
			url: "https://www.salamanderdc.com/rooms/suites", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "A 112sqm suite with Jefferson Memorial views and a living/dining room.",
			maxOccupancy: 2, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "1", // total number of beds in this accommodation
			bedType: "1 King Bed",
			bathroomCount: "1", // total number of bathrooms in this accommodation
			roomCount: "2", // total number of rooms in this accommodation
			images: [
				{
					caption: "A room with a view", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/bethune-1.jpg?03273261831410298", // url of the image source
				},
				{
					caption: "The side of the building", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage2/bethune-2.jpg?0929150684296669", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Two spa-inspired bathrooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/suites"
				}
			]
		},
		{
			type: "Suite", // must be either 'Suite' or 'Room'
			name: "Presidential Suite", // name of the room
			url: "https://www.salamanderdc.com/rooms/suites", // URL of this specific room
			bookUrl: "https://www.salamanderdc.com/#/booking/step-1", // URL from where the room can be booked (if applicable)
			description: "The grandest two-bed suite with a vast living room and sweeping city views.",
			maxOccupancy: 4, // maximum number of guests that can stay in this accommodation
			checkInTime: "16:00", // 24 hours time. ex: 14:00
			checkOutTime: "11:00", // 24 hours time. ex: 14:00
			bedCount: "2", // total number of beds in this accommodation
			bedType: "2 King Beds",
			bathroomCount: "2", // total number of bathrooms in this accommodation
			roomCount: "3", // total number of rooms in this accommodation
			images: [
				{
					caption: "The presidential bed", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage1/presidential-1.jpg?015131173929720587", // url of the image source
				},
				{
					caption: "The presidential bathroom", // a name or caption of the image
					url: "https://www.salamanderdc.com/images/content/roomsaltrowimage2/presidential-2.jpg?05248329230843014", // url of the image source
				}
			],
			roomAmenitiesArr: [
				{
					name: "connecting rooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "High-speed WiFi",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Complimentary gym",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Two spa-inspired bathrooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "elegantly furnished rooms also feature smart technology",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "spa-inspired marble bathroom",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Two large bedrooms",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Grand living room with dining",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Office and media room",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Guest powder room",
					url: "https://www.salamanderdc.com/rooms/suites"
				},
				{
					name: "Butlers pantry",
					url: "https://www.salamanderdc.com/rooms/suites"
				}
			]
		}
	],
	restaurants: [
		{
			name: "Dōgon", // name of the restaurant
			url: "https://www.salamanderdc.com/dining/dogon", // primary url for the restaurant
			description: "To honor to the date Washington, D.C. was officially named back in 1791, Dōgon opened on Monday, September 9 as part of its commitment to highlight the District, its history, and culture.

", // description of the restaurant
			menu: [
				{
					name: "Dinner", // name of the menu, example: "Breakfast Menu" or "Drinks Menu"
					url: "https://www.salamanderdc.com/dining/dogon#dinner" // the url of the menu (can be a PDF if applicable)
				},
				{
					name: "Drinks", // name of the menu, example: "Breakfast Menu" or "Drinks Menu"
					url: "https://www.salamanderdc.com/dining/dogon#drinks" // the url of the menu (can be a PDF if applicable)
				}
			],
			priceRange: "100+", // is either "$", "$$", "$$$", "$$$$". Pull this info from the official Google business listing
			contact: {
				phone: "1-855-228-6325", // format: x-xxx-xxx-xxxx
				email: "reserve@dogondc.com" // contact email of the restaurant
			},

			// pull rating from the official Google business listing
			rating: {
				value: "4.8",
				count: "14"
			},
			imageArr: [
				{
					caption: "multiple colorful dishes",
					url: "https://www.salamanderdc.com/images/content/dogonimagecarousel/dogon080824_0064-1-.jpg?06393611952958549"
				},
				{
					caption: "avocado and veggies",
					url: "https://www.salamanderdc.com/images/content/dogonimagecarousel/dogon080824_0015-1-.jpg?035003615063264015"
				},
				{
					caption: "corn bread prep in the kitchen",
					url: "https://www.salamanderdc.com/images/content/dogonimagecarousel/dogon080824_0158-1-.jpg?020176112030096038"
				},
				{
					caption: "Cocktail",
					url: "https://www.salamanderdc.com/images/content/dogonimagecarousel/DOGON080824_0199.jpg?002063612057310893"
				},
				{
					caption: "entree with onion red tomatoes",
					url: "https://www.salamanderdc.com/images/content/dogonimagecarousel/dogon080824_0112-1-.jpg?009472876634225247"
				},
				{
					caption: "shrimp dish with lemon",
					url: "https://www.salamanderdc.com/images/content/dogonimagecarousel/dogon080824_0053-1-.jpg?05580741785235628"
				},
				{
					caption: "cabbage dish with greens",
					url: "https://www.salamanderdc.com/images/content/dogonimagecarousel/dogon080824_0089-1-.jpg?08793216923540974"
				},
				{
					caption: "signature cocktail",
					url: "https://www.salamanderdc.com/images/content/dogonimagecarousel/dogon080824_0202-2-.jpg?004004685421621379"
				},
				{
					caption: "fish with seasoning",
					url: "https://www.salamanderdc.com/images/content/dogonimagecarousel/dogon080824_0022-1-.jpg?015076212416119472"
				},
				{
					caption: "lobster entree",
					url: "https://www.salamanderdc.com/images/content/dogonimagecarousel/dogon080824_0041-1-.jpg?07515396106469205"
				},
				{
					caption: "frying pan caramelize onions",
					url: "https://www.salamanderdc.com/images/content/dogonimagecarousel/dogon080824_0175-1-.jpg?0274111562561395"
				},
				{
					caption: "Cocktail Pour",
					url: "https://www.salamanderdc.com/images/content/dogonimagecarousel/dogon080824_0179-1-.jpg?00037306494345199503"
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
