{
	"@context": "https://schema.org",
	"@type": "LodgingBusiness",
	"name": "Aston Kaanapali Shores Resort",
	"legalName": "",
	"slogan": "",
	"description": "Experience beachfront bliss at Aston Kaanapali Shores Resort, offering spacious condo rentals with stunning ocean views. Relax by the pools, indulge in rejuvenating spa treatments, or explore the vibrant Maui scene. Perfect for families and couples seeking an unforgettable Hawaiian getaway.",
	"image": "https://www.example.com/aston-kaanapali-shores.jpg",
	"logo": "https://www.example.com/aston-kaanapali-shores.jpg",
	"priceRange": "$200 - $500",	// Update with actual price range
	"starRating": { 
		"@type" : "http://schema.org/Rating",
		"ratingValue": "4" 
	},
	"aggregateRating": {
		"@type": "AggregateRating",
		"bestRating": 5,
		"worstRating": 1,
		"ratingValue": 4,	// Replace with average rating (if available)
		"reviewCount": 215	// Replace with total number of reviews (if available)
	},
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "4550 Lower Honoapiilani Rd",
		"addressLocality": "Lahaina",
		"addressRegion": "HI",
		"postalCode": "96761",
		"addressCountry": "US"
	},
	"geo": {
		"@type": "GeoCoordinates",
		"latitude": 20.908138,	// Replace with actual latitude
		"longitude": -156.672013	// Replace with actual longitude
	},
	"telephone": "+1 808-667-7700",	// Replace with actual phone number
	"faxNumber": "+1 808-667-7700",	// Replace with fax number
	"email": "reservations@astonkaanapalishores.com",
	"sameAs": [
		"https://www.facebook.com/AstonKaanapaliShoresResort",
		"https://www.instagram.com/astonkaanapalishores/"
	],
	"url": "https://www.astonkaanapalishoresresort.com",
	"amenityFeature": [
		"Gym",
		"Multiple pools",
		"Whirlpool",
		"Sauna",
		"Spa (off-site)",
		"Tennis courts",
		"BBQ grills",
		"Free Wi-Fi",
		"Restaurant",
		"Bar",
		"Free parking"
	],
	"mainEntityOfPage": {
		"@type": "WebPage",
		"@id": "https://www.astonkaanapalishoresresort.com/"
	},
	"numberOfRooms": 200,	// Update with actual number of rooms (if known)
	"currenciesAccepted": "USD",
	"additionalProperty": [
		{
			"@type": "PropertyValue",
			"name": "Check-in Time",
			"value": "04:00 PM"
		},
		{
			"@type": "PropertyValue",
			"name": "Check-out Time",
			"value": "10:00 AM"
		},
		{
			"@type": "PropertyValue",
			"name": "Year Established",
			"value": "1976"	// Update with year established (if possible)
		}
	],
	"petsAllowed": "False",
	"smokingAllowed": "True",
	"knowsLanguage": [
		"en",
		"es",
		"jp"	// Add more languages as applicable
	],
	"areaServed": "Lahaina, Maui, Hawaii",
	"awards": [
		"TripAdvisor Certificate of Excellence 2023"
	],

	"availableLanguage": [
		{
						"@type": "Language",
						"name": "German"
		},
		{
						"@type": "Language",
						"name": "English"
		}
	],
	"checkinTime": "04:00 PM",
	"checkoutTime": "04:00 PM",
    
	"duns": "", // Business DUNS number
	"naics": "", //The North American Industry Classification System (NAICS) code for a particular organization or business person.
	"taxID": "",
	"founder": {
		"@type": "Person",
		"name": "A. N. Other"
	},
	"employee": {
		"@type": "Person",
		"name": "A. N. Other"
	},
	"foundingDate": "YYYY-MM-DD",
	"location": {
		"@type" : "PostalAddress",
		"streetAddress" : "79 Washington St.",
		"addressLocality" : "Providence",
		"addressRegion" : "RI",
		"postalCode" : "02903",
		"addressCountry" : "US"
	},

	"hasCertification": {
		"@type": "Certification",
		"@id": "https://www.co2trust.com/12345678901231"
	},

	"hasCredential": {
		"@context": "https://schema.org",
		"@type": "EducationalOccupationalCredential",
		"name" : "HNC Facilities Management",
		"description" : "Higher National qualifications provide practical skills and theoretical knowledge that meet the needs of employers. The HNC in Facilities Management (SCQF level 7) develops knowledge and skills of the modern Facilities Management industry including both ‘hard’ and ‘soft’ services, and is aimed at those in supervisory and management roles or aspiring managers within the wider realm of Facilities Services.",
		"educationalLevel" : {
		  "@type": "DefinedTerm",
		  "name": "SCQF Level 7",
		  "inDefinedTermSet": "https://www.sqa.org.uk/sqa/71377.html"
		},
		"credentialCategory" : {
		  "@type": "DefinedTerm",
		  "name": "Higher National Certificate",
		  "termCode": "HNC"
		},
		"competencyRequired" : {
		  "@type": "DefinedTerm",
		  "termCode": "ASTFM401",
		  "name": "Understand facilities management and its place in the organisation",
		  "url": "https://www.ukstandards.org.uk/PublishedNos/ASTFM401.pdf",
		  "inDefinedTermSet": "https://www.ukstandards.org.uk/"
		}
	},



	"diversityPolicy": "", //url
	"ethicsPolicy": "", //url
	
	"memberOf": {
		"@type": "Organization",
		"name": "GloboCorp",
		"url": "http://www.example.com/"
	},

	"parentOrganization": {
		"@type": "Organization",
		"name": "GloboCorp",
		"url": "http://www.example.com/"
	},

	"subOrganization": {
		"@type": "Organization",
		"name": "GloboCorp",
		"url": "http://www.example.com/"
	}

	
}
