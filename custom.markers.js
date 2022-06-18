/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: false,

    markers: [

        // add your markers here
	{
	    x: -2607,
            z: 3971,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Applechamp",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -228,
            z: 567,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Oxeye Valley",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -505,
            z: 134,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Pyramid",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -764,
            z: 604,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Llama Valley",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: 142,
            z: 1605,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Derptopia",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: 110,
            z: 580,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Iron Forge",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -300,
            z: 906,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Scout Town",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: 537,
            z: 227,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Alexandria",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -1634,
            z: 2063,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Chatawaga",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -259,
            z: 1324,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Riverbend Plains",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: 176,
            z: 1060,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Turtle Topia",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -2107,
            z: 2222,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Evil Topia",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -347,
            z: -311,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Beetroot Plains",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -789,
            z: -309,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "The Hood",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

	// update two

        {
            x: -820,
            z: -50,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Blackwater",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -810,
            z: 993,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Urkenopolis",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: 744,
            z: 872,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Olicipo",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -1108,
            z: 678,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Orecrest",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -602,
            z: 631,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Gabe's Mansion",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },


        {
            x: 513,
            z: -331,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Spawn City",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: 387,
            z: 639,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Bingleton",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: 278,
            z: 527,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Nico's Factory",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

// Update 3
        
	{
            x: -854,
            z: 756,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Riverhelm",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -733,
            z: 2256,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Port Southtree",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

// Update 4

        {
            x: 218,
            z: 2491,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Conortown",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -1268,
            z: 3435,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Yeezyville",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -746,
            z: 3121,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Virbank",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -2168,
            z: 1867,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Quentown",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -1466,
            z: 1052,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Fort Arnold",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        {
            x: -1420,
            z: 555,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Shawntown",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },


// Update 5

        {
            x: 2335,
            z: 645,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Citria",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },





        // do not delete the following two closing brackets
    ]
}
