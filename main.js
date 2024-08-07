let modal = document.getElementById('login');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


let databazeAuto = [
	{
 
	id: 1,
	znacka: "Škoda",
	model: "Rapid",
	rokVyroby: 2012,
	ujeteKilometry: 34000,
	prevodovka: "Manuální",
    image: "images/rapid.png"
},
{
 
	id: 2,
	znacka: "peugot",
	model: "208",
	rokVyroby: 2012,
	ujeteKilometry: 112000,
	prevodovka: "Automatická",
    image: "images/peugot.png"
},


    {
        id: 3,
        znacka: "VW",
        model: "Golf",
        rokVyroby: 2005,
        ujeteKilometry: 124000,
        prevodovka: "Manuální",
        image: "images/golf.png"
    },

    {
        id: 4,
        znacka: "Kia",
        model: "Rio",
        rokVyroby: 2006,
        ujeteKilometry: 89000,
        prevodovka: "Manuální",
        image: "images/kia.png"
    },
    {
        id: 5,
        znacka: "Ford",
        model: "Transit",
        rokVyroby: 2006,
        ujeteKilometry: 230000,
        prevodovka: "Manuální",
        image: "images/transit.png"
    },
    {
        id: 6,
        znacka: "VW",
        model: "Transporter",
        rokVyroby: 1990,
        ujeteKilometry: 380000,
        prevodovka: "Manuální",
        image: "images/transporter.png"
    },
    {
        id: 7,
        znacka: "VW",
        model: "Crafter",
        rokVyroby: 2008,
        ujeteKilometry: 110000,
        prevodovka: "Manuální",
        image: "images/crafter.png"
    },
    {
        id: 8,
        znacka: "peugot",
        model: "Boxer",
        rokVyroby: 2006,
        ujeteKilometry: 114000,
        prevodovka: "Manuální",
        image: "images/boxer.png"
    },
    {
        id: 9,
        znacka: "Kia",
        model: "Sorento",
        rokVyroby: 2009,
        ujeteKilometry: 65000,
        prevodovka: "Automatická",
        image: "images/sorento.png"
    },
    {
        id: 10,
        znacka: "Ford",
        model: "Kuga",
        rokVyroby: 2008,
        ujeteKilometry: 168000,
        prevodovka: "Manuální",
        image: "images/kuga.png"
    },
    {
        id: 11,
        znacka: "Mitshubishi",
        model: "ASX",
        rokVyroby: 2010,
        ujeteKilometry: 65000,
        prevodovka: "Manuální",
        image: "images/asx.png"
    },
    {
        id: 12,
        znacka: "Nissan",
        model: "X-Trail",
        rokVyroby: 2001,
        ujeteKilometry: 52000,
        prevodovka: "Manuální",
        image: "images/trail.png"
    },
    {
        id: 13,
        znacka: "Audi",
        model: "A4",
        rokVyroby: 2008,
        ujeteKilometry: 250400,
        prevodovka: "Manuální",
        image: "images/audi.png"
    },
    {
        id: 14,
        znacka: "VW",
        model: "passat",
        rokVyroby: 2012,
        ujeteKilometry: 294000,
        prevodovka: "Automatická",
        image: "images/passat.png"
    },
    {
        id: 15,
        znacka: "Škoda",
        model: "Octavia",
        rokVyroby: 2009,
        ujeteKilometry: 250700,
        prevodovka: "Manuální",
        image: "images/octavia.png"
    },
    {
        id: 16,
        znacka: "Hyundai",
        model: "I30kombi",
        rokVyroby: 2012,
        ujeteKilometry: 58000,
        prevodovka: "Manuální",
        image: "images/combi.png"
    }
]   