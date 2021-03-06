export const listItems = [
	{
		id: "climate",
		name: "Climate",
		collapseItem: [
			{
				id: "temperature",
				name: "Average Temperature",
				children: [
					{
						id: "year",
						name: "Filter by Year",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "city",
						name: "Filer by City",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "periodOfCity",
						name: "Filter by period of city",
						input: false,
						output: true,
						disabled: false,
					},
				],
			},
			{
				id: "humidity",
				name: "Average Humidity",
				children: [
					{
						id: "year",
						name: "Filter by Year",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "city",
						name: "Filer by City",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "periodOfCity",
						name: "Filter by period of city",
						input: false,
						output: true,
						disabled: false,
					},
				],
			},
			{
				id: "rainfall",
				name: "Average Rainfall",
				children: [
					{
						id: "year",
						name: "Filter by Year",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "city",
						name: "Filer by City",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "periodOfCity",
						name: "Filter by period of city",
						input: false,
						output: true,
						disabled: false,
					},
				],
			},
		],
	},
	{
		id: "atmosphere",
		name: "Atmosphere",
		collapseItem: [
			{
				id: "airQualityStation",
				name: "Air Quality Station",
				disabled: true,
			},
			{
				id: "airQualityFilter",
				name: "Air Quality Filter",
				disabled: true,
			},
		],
	},
	{
		id: "population",
		name: "Population",
		collapseItem: [
			{
				id: "population",
				name: "Population",
				children: [
					{
						id: "year",
						name: "Filter by Year",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "city",
						name: "Filer by City",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "periodOfCity",
						name: "Filter by period of city",
						input: false,
						output: true,
						disabled: false,
					},
				],
			},
		],
	},
	{
		id: "industry",
		name: "Industry",
		collapseItem: [
			{
				id: "industry",
				name: "Industry Production",
				children: [
					{
						id: "year",
						name: "Filter by Year",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "city",
						name: "Filer by City",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "periodOfCity",
						name: "Filter by period of city",
						input: false,
						output: true,
						disabled: false,
					},
				],
			},
		],
	},
	{
		id: "forest",
		name: "Forest",
		collapseItem: [
			{
				id: "forestCoverArea",
				name: "Forest Cover Area",
				disabled: false,
				children: [
					{
						id: "year",
						name: "Filter by Year",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "city",
						name: "Filer by City",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "periodOfCity",
						name: "Filter by period of city",
						input: false,
						output: true,
						disabled: false,
					},
				],
			},
			{
				id: "afforestation",
				name: "Afforestation",
				children: [
					{
						id: "year",
						name: "Filter by Year",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "city",
						name: "Filer by City",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "periodOfCity",
						name: "Filter by period of city",
						input: false,
						output: true,
						disabled: false,
					},
				],
			},
		],
	},
	{
		id: "operators",
		name: "Operators",
		collapseItem: [
			{
				id: "statisticsMerge",
				name: "Statistics Merge",
				disabled: false,
			},
			{
				id: "simpleMerge",
				name: "Simple Merge",
				disabled: true,
			},
		],
	},
	{
		id: "visualization",
		name: "Visualization",
		collapseItem: [
			{
				id: "table",
				name: "Table",
				input: true,
				output: false,
				button: true,
				disabled: true,
			},
			{
				id: "chart",
				name: "Charts",
				children: [
					{
						id: "column",
						name: "Column Chart",
						input: true,
						output: false,
						button: true,
						disabled: false,
					},
					{
						id: "line",
						name: "Line Chart",
						input: true,
						output: false,
						button: true,
						disabled: false,
					},
					{
						id: "lineTwoAxis",
						name: "Two Y-Axis Line Chart ",
						input: true,
						output: false,
						button: true,
						disabled: false,
					},
					{
						id: "lineThreeAxis",
						name: "Three Y-Axis Line Chart ",
						input: true,
						output: false,
						button: true,
						disabled: false,
					},
					{
						id: "pie",
						name: "Pie Chart",
						input: true,
						output: false,
						button: true,
						disabled: true,
					},
				],
			},
			{
				id: "maps",
				name: "Maps",
				input: true,
				output: false,
				button: true,
				disabled: false,
			},
		],
	},
];

export const widgetInfos = {
	visualization: {
		chart: {
			column: [
				{
					id: "Name",
					info: "Column Chart",
				},
				{
					id: "Description",
					info: "Used to draw a Column chart, using HighCharts",
				},
				{
					id: "Input",
					info: "json data",
				},
				{
					id: "Output",
					info: "no",
				},
				{
					id: "Connect",
					info: "Statistics widgets",
				},
			],
			line: [
				{
					id: "Name",
					info: "Line Chart",
				},
				{
					id: "Description",
					info: "Used to draw a Line chart, using HighCharts",
				},
				{
					id: "Input",
					info: "json data",
				},
				{
					id: "Output",
					info: "no",
				},
				{
					id: "Connect",
					info: "Statistics widgets",
				},
			],
			lineTwoAxis: [
				{
					id: "Name",
					info: "Line Chart with Two Y-Axis",
				},
				{
					id: "Description",
					info: "Used to draw a Line chart, when merge two widgets ",
				},
				{
					id: "Input",
					info: "json data",
				},
				{
					id: "Output",
					info: "no",
				},
				{
					id: "Connect",
					info: "Statistics Merge",
				},
			],
			lineThreeAxis: [
				{
					id: "Name",
					info: "Line Chart with Two Y-Axis",
				},
				{
					id: "Description",
					info: "Used to draw a Line chart, when merge three widgets ",
				},
				{
					id: "Input",
					info: "json data",
				},
				{
					id: "Output",
					info: "no",
				},
				{
					id: "Connect",
					info: "Statistics Merge",
				},
			],
			pie: [
				{
					id: "Name",
					info: "Pie Chart",
				},
				{
					id: "Description",
					info: "Used to draw a Pie chart, using HighCharts",
				},
				{
					id: "Input",
					info: "json data",
				},
				{
					id: "Output",
					info: "no",
				},
				{
					id: "Connect",
					info: "Statistics widgets",
				},
			],
		},
		maps: [
			{
				id: "Name",
				info: "Maps",
			},
			{
				id: "Description",
				info: "Used to display locations with their long & lat",
			},
			{
				id: "Input",
				info: "Json data with attribute point(long, lat)",
			},
			{
				id: "Output",
				info: "no",
			},
			{
				id: "Connect",
				info: "Industry, Average Temperature",
			},
		],
		table: [
			{
				id: "Name",
				info: "Table",
			},
			{
				id: "Description",
				info: "aaaaaaaaaaaaaaaa",
			},
			{
				id: "Input",
				info: "Json",
			},
			{
				id: "Output",
				info: "No",
			},
			{
				id: "Connect",
				info: "Industry Production, Average Temperature,...",
			},
		],
	},
	climate: {
		humidity: {
			year: [
				{
					id: "Name",
					info: "Average Humidity",
				},
				{
					id: "Description",
					info:
						"Get humidity data of Vietnam's provinces in a specific year. Combine with Maps to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Maps, Table",
				},
			],
			city: [
				{
					id: "Name",
					info: "Average Humidity",
				},
				{
					id: "Description",
					info:
						"Get humidity data of a specific city from 2012 to 2019. Combine with Charts to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Line, Column chart, Table",
				},
			],
			periodOfCity: [
				{
					id: "Name",
					info: "Average Humidity",
				},
				{
					id: "Description",
					info:
						"Get humidity data of a specific city in the a years range. Combine with Charts to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Line, Column chart, Table",
				},
			],
		},
		temperature: {
			year: [
				{
					id: "Name",
					info: "Average Temperature",
				},
				{
					id: "Description",
					info:
						"Get temperature data of Vietnam's provinces in a specific year. Combine with Maps to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Maps, Table",
				},
			],
			city: [
				{
					id: "Name",
					info: "Average Temperature",
				},
				{
					id: "Description",
					info:
						"Get temperature data of a specific city from 2012 to 2019. Combine with Charts to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Line, Column chart, Table",
				},
			],
			periodOfCity: [
				{
					id: "Name",
					info: "Average Temperature",
				},
				{
					id: "Description",
					info:
						"Get temperature data of a specific city in the a years range. Combine with Charts to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Line, Column chart, Table",
				},
			],
		},
		rainfall: {
			year: [
				{
					id: "Name",
					info: "Average Rainfall",
				},
				{
					id: "Description",
					info:
						"Get rainfall data of Vietnam's provinces in a specific year. Combine with Maps to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Maps, Table",
				},
			],
			city: [
				{
					id: "Name",
					info: "Average Temperature",
				},
				{
					id: "Description",
					info:
						"Get rainfall data of a specific city from 2012 to 2019. Combine with Charts to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Line, Column chart, Table",
				},
			],
			periodOfCity: [
				{
					id: "Name",
					info: "Average Temperature",
				},
				{
					id: "Description",
					info:
						"Get rainfall data of a specific city in the a years range. Combine with Charts to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Line, Column chart, Table",
				},
			],
		},
	},

	industry: {
		industry: {
			year: [
				{
					id: "Name",
					info: "Industry Production",
				},
				{
					id: "Description",
					info:
						"Get industry data of Vietnam's provinces in a specific year. Combine with Maps to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Maps, Table",
				},
			],
			city: [
				{
					id: "Name",
					info: "Industry Production",
				},
				{
					id: "Description",
					info:
						"Get industry data of a specific city from 2012 to 2019. Combine with Charts to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Line, Column chart, Table",
				},
			],
			periodOfCity: [
				{
					id: "Name",
					info: "Industry Production",
				},
				{
					id: "Description",
					info:
						"Get industry data of a specific city in the a years range. Combine with Charts to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Line, Column chart, Table",
				},
			],
		},
	},
	population: {
		population: {
			year: [
				{
					id: "Name",
					info: "Population",
				},
				{
					id: "Description",
					info:
						"Get Population data of Vietnam's provinces in a specific year. Combine with Maps to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Maps, Table",
				},
			],
			city: [
				{
					id: "Name",
					info: "Population",
				},
				{
					id: "Description",
					info:
						"Get Population data of a specific city from 2012 to 2019. Combine with Charts to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Line, Column chart, Table",
				},
			],
			periodOfCity: [
				{
					id: "Name",
					info: "Population",
				},
				{
					id: "Description",
					info:
						"Get Population data of a specific city in the a years range. Combine with Charts to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Line, Column chart, Table",
				},
			],
		},
	},
	forest: {
		afforestation: {
			year: [
				{
					id: "Name",
					info: "Afforestation",
				},
				{
					id: "Description",
					info:
						"Get AfForestation data of Vietnam's provinces in a specific year. Combine with Maps to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Maps, Table",
				},
			],
			city: [
				{
					id: "Name",
					info: "Afforestation",
				},
				{
					id: "Description",
					info:
						"Get Afforestation data of a specific city from 2012 to 2019. Combine with Charts to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Line, Column chart, Table",
				},
			],
			periodOfCity: [
				{
					id: "Name",
					info: "Afforestation",
				},
				{
					id: "Description",
					info:
						"Get Afforestation data of a specific city in the a years range. Combine with Charts to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Line, Column chart, Table",
				},
			],
		},
		forestCoverArea: {
			year: [
				{
					id: "Name",
					info: "Forest Cover Area",
				},
				{
					id: "Description",
					info:
						"Get Forest Cover Area data of Vietnam's provinces in a specific year. Combine with Maps to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Maps, Table",
				},
			],
			city: [
				{
					id: "Name",
					info: "Forest Cover Area",
				},
				{
					id: "Description",
					info:
						"Get Forest Cover Area data of a specific city from 2012 to 2019. Combine with Charts to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Line, Column chart, Table",
				},
			],
			periodOfCity: [
				{
					id: "Name",
					info: "Forest Cover Area",
				},
				{
					id: "Description",
					info:
						"Get Forest Cover Area data of a specific city in the a years range. Combine with Charts to view results",
				},
				{
					id: "Input",
					info: "No",
				},
				{
					id: "Output",
					info: "json",
				},
				{
					id: "Connect",
					info: "Line, Column chart, Table",
				},
			],
		},
	},
	operators: {
		statisticsMerge: [
			{
				id: "Name",
				info: "Statistics Merge",
			},
			{
				id: "Description",
				info:
					"	Used to merge two sources of statistical data, based on their common field",
			},
			{
				id: "Input",
				info: "Two Json arrays",
			},
			{
				id: "Output",
				info: "The new Json array",
			},
			{
				id: "Connect",
				info: "2 statistical data widget, Charts, Maps,...",
			},
		],
	},
};

export const treeHumidity = {
	name: "Average Humidity",
	id: "climate-humidity",
	year: {
		id: "year",
		name: "Year",
		children: [
			{
				id: "2012",
				name: "2012",
			},
			{
				id: "2013",
				name: "2013",
			},
			{
				id: "2014",
				name: "2014",
			},
			{
				id: "2015",
				name: "2015",
			},
			{
				id: "2016",
				name: "2016",
			},
			{
				id: "2017",
				name: "2017",
			},
			{
				id: "2018",
				name: "2018",
			},
			{
				id: "2019",
				name: "2019",
			},
		],
	},
	city: {
		id: "city",
		name: "City",
		children: [
			{
				id: "baichay",
				name: "B??i Ch??y",
			},
			{
				id: "camau",
				name: "C?? Mau",
			},
			{
				id: "dalat",
				name: "???? L???t",
			},
			{
				id: "danang",
				name: "???? N???ng",
			},
			{
				id: "hanoi",
				name: "H?? N???i",
			},
			{
				id: "hue",
				name: "Hu???",
			},
			{
				id: "laichau",
				name: "Lai Ch??u",
			},
			{
				id: "namdinh",
				name: "Nam ?????nh",
			},
			{
				id: "nhatrang",
				name: "Nha Trang",
			},
			{
				id: "pleiku",
				name: "Pleiku",
			},
			{
				id: "quinhon",
				name: "Qui Nh??n",
			},
			{
				id: "sonla",
				name: "S??n La",
			},
			{
				id: "tuyenquang",
				name: "Tuy??n Quang",
			},
			{
				id: "vinh",
				name: "Vinh",
			},
			{
				id: "vungtau",
				name: "V??ng T??u",
			},
		],
	},
};

export const treeTemperature = {
	name: "Average Temperature",
	id: "climate-temperature",
	year: {
		id: "year",
		name: "Year",
		children: [
			{
				id: "2012",
				name: "2012",
			},
			{
				id: "2013",
				name: "2013",
			},
			{
				id: "2014",
				name: "2014",
			},
			{
				id: "2015",
				name: "2015",
			},
			{
				id: "2016",
				name: "2016",
			},
			{
				id: "2017",
				name: "2017",
			},
			{
				id: "2018",
				name: "2018",
			},
			{
				id: "2019",
				name: "2019",
			},
		],
	},
	city: {
		id: "city",
		name: "City",
		children: [
			{
				id: "camau",
				name: "C?? Mau",
			},
			{
				id: "dalat",
				name: "???? L???t",
			},
			{
				id: "danang",
				name: "???? N???ng",
			},
			{
				id: "hanoi",
				name: "H?? N???i",
			},
			{
				id: "hue",
				name: "Hu???",
			},
			{
				id: "laichau",
				name: "Lai Ch??u",
			},
			{
				id: "namdinh",
				name: "Nam ?????nh",
			},
			{
				id: "nhatrang",
				name: "Nha Trang",
			},
			{
				id: "pleiku",
				name: "Pleiku",
			},
			{
				id: "quinhon",
				name: "Qui Nh??n",
			},
			{
				id: "sonla",
				name: "S??n La",
			},
			{
				id: "tuyenquang",
				name: "Tuy??n Quang",
			},
			{
				id: "vinh",
				name: "Vinh",
			},
			{
				id: "vungtau",
				name: "V??ng T??u",
			},
		],
	},
};

export const treeRainfall = {
	name: "Average Rainfall",
	id: "climate-rainfall",
	year: {
		id: "year",
		name: "Year",
		children: [
			{
				id: "2012",
				name: "2012",
			},
			{
				id: "2013",
				name: "2013",
			},
			{
				id: "2014",
				name: "2014",
			},
			{
				id: "2015",
				name: "2015",
			},
			{
				id: "2016",
				name: "2016",
			},
			{
				id: "2017",
				name: "2017",
			},
			{
				id: "2018",
				name: "2018",
			},
			{
				id: "2019",
				name: "2019",
			},
		],
	},
	city: {
		id: "city",
		name: "City",
		children: [
			{
				id: "baichay",
				name: "B??i Ch??y",
			},
			{
				id: "camau",
				name: "C?? Mau",
			},
			{
				id: "dalat",
				name: "???? L???t",
			},
			{
				id: "danang",
				name: "???? N???ng",
			},
			{
				id: "hanoi",
				name: "H?? N???i",
			},
			{
				id: "hue",
				name: "Hu???",
			},
			{
				id: "laichau",
				name: "Lai Ch??u",
			},
			{
				id: "namdinh",
				name: "Nam ?????nh",
			},
			{
				id: "nhatrang",
				name: "Nha Trang",
			},
			{
				id: "pleiku",
				name: "Pleiku",
			},
			{
				id: "quinhon",
				name: "Qui Nh??n",
			},
			{
				id: "sonla",
				name: "S??n La",
			},
			{
				id: "tuyenquang",
				name: "Tuy??n Quang",
			},
			{
				id: "vinh",
				name: "Vinh",
			},
			{
				id: "vungtau",
				name: "V??ng T??u",
			},
		],
	},
};

export const treeIndustryProduction = {
	name: "Industry Production",
	id: "industry-industry",
	year: {
		id: "year",
		name: "Year",
		children: [
			{
				id: "2012",
				name: "2012",
			},
			{
				id: "2013",
				name: "2013",
			},
			{
				id: "2014",
				name: "2014",
			},
			{
				id: "2015",
				name: "2015",
			},
			{
				id: "2016",
				name: "2016",
			},
			{
				id: "2017",
				name: "2017",
			},
			{
				id: "2018",
				name: "2018",
			},
			{
				id: "2019",
				name: "2019",
			},
		],
	},
	city: {
		id: "city",
		name: "City",
		children: [
			{
				name: "Qu???ng Ninh",
				id: "quangninh",
			},
			{
				name: "Kh??nh Ho??",
				id: "khanhhoa",
			},
			{
				name: "Ti???n Giang",
				id: "tiengiang",
			},
			{
				name: "B?? R???a - V??ng T??u",
				id: "bariavungtau",
			},
			{
				name: "B??nh Thu???n",
				id: "binhthuan",
			},
			{
				name: "TP.H??? Ch?? Minh",
				id: "tphochiminh",
			},
			{
				name: "B???n Tre",
				id: "bentre",
			},
			{
				name: "S??c Tr??ng",
				id: "soctrang",
			},
			{
				name: "Ph?? Th???",
				id: "phutho",
			},
			{
				name: "Y??n B??i",
				id: "yenbai",
			},
			{
				name: "H???i D????ng",
				id: "haiduong",
			},
			{
				name: "B???c Ninh",
				id: "bacninh",
			},
			{
				name: "H??ng Y??n",
				id: "hungyen",
			},
			{
				name: "Ninh B??nh",
				id: "ninhbinh",
			},
			{
				name: "H?? Nam",
				id: "hanam",
			},
			{
				name: "Ho?? B??nh",
				id: "hoabinh",
			},
			{
				name: "V??nh Ph??c",
				id: "vinhphuc",
			},
			{
				name: "H?? N???i",
				id: "hanoi",
			},
			{
				name: "B???c Giang",
				id: "bacgiang",
			},
			{
				name: "Th??i B??nh",
				id: "thaibinh",
			},
			{
				name: "L??m ?????ng",
				id: "lamdong",
			},
			{
				name: "B??nh Ph?????c",
				id: "binhphuoc",
			},
			{
				name: "Ph?? Y??n",
				id: "phuyen",
			},
			{
				name: "B??nh ?????nh",
				id: "binhdinh",
			},
			{
				name: "Gia Lai",
				id: "gialai",
			},
			{
				name: "Qu???ng Ng??i",
				id: "quangngai",
			},
			{
				name: "?????ng Nai",
				id: "dongnai",
			},
			{
				name: "?????ng Th??p",
				id: "dongthap",
			},
			{
				name: "Long An",
				id: "longan",
			},
			{
				name: "H???i Ph??ng",
				id: "haiphong",
			},
			{
				name: "H???u Giang",
				id: "haugiang",
			},
			{
				name: "B???c Li??u",
				id: "baclieu",
			},
			{
				name: "V??nh Long",
				id: "vinhlong",
			},
			{
				name: "T??y Ninh",
				id: "tayninh",
			},
			{
				name: "Th??i Nguy??n",
				id: "thainguyen",
			},
			{
				name: "Lai Ch??u",
				id: "laichau",
			},
			{
				name: "S??n La",
				id: "sonla",
			},
			{
				name: "H?? Giang",
				id: "hagiang",
			},
			{
				name: "Nam ?????nh",
				id: "namdinh",
			},
			{
				name: "H?? T??nh",
				id: "hatinh",
			},
			{
				name: "Ngh??? An",
				id: "nghean",
			},
			{
				name: "Qu???ng B??nh",
				id: "quangbinh",
			},
			{
				name: "?????k L???k",
				id: "daklak",
			},
			{
				name: "Ninh Thu???n",
				id: "ninhthuan",
			},
			{
				name: "?????k N??ng",
				id: "daknong",
			},
			{
				name: "Kon Tum",
				id: "kontum",
			},
			{
				name: "Qu???ng Nam",
				id: "quangnam",
			},
			{
				name: "Qu???ng Tr???",
				id: "quangtri",
			},
			{
				name: "Th???a Thi??n Hu???",
				id: "thuathienhue",
			},
			{
				name: "???? N???ng",
				id: "danang",
			},
			{
				name: "An Giang",
				id: "angiang",
			},
			{
				name: "C?? Mau",
				id: "camau",
			},
			{
				name: "Tr?? Vinh",
				id: "travinh",
			},
			{
				name: "Cao B???ng",
				id: "caobang",
			},
			{
				name: "Ki??n Giang",
				id: "kiengiang",
			},
			{
				name: "L??o Cai",
				id: "laocai",
			},
			{
				name: "??i???n Bi??n",
				id: "dienbien",
			},
			{
				name: "L???ng S??n",
				id: "langson",
			},
			{
				name: "Thanh Ho??",
				id: "thanhhoa",
			},
			{
				name: "B???c K???n",
				id: "backan",
			},
			{
				name: "Tuy??n Quang",
				id: "tuyenquang",
			},
			{
				name: "B??nh D????ng",
				id: "binhduong",
			},
			{
				name: "C???n Th??",
				id: "cantho",
			},
		],
	},
};

export const treeAfforestation = {
	name: "Afforestation",
	id: "forest-afforestation",
	year: {
		id: "year",
		name: "Year",
		children: [
			{
				id: "2012",
				name: "2012",
			},
			{
				id: "2013",
				name: "2013",
			},
			{
				id: "2014",
				name: "2014",
			},
			{
				id: "2015",
				name: "2015",
			},
			{
				id: "2016",
				name: "2016",
			},
			{
				id: "2017",
				name: "2017",
			},
			{
				id: "2018",
				name: "2018",
			},
			{
				id: "2019",
				name: "2019",
			},
		],
	},
	city: {
		id: "city",
		name: "City",
		children: [
			{
				id: "angiang",
				name: "An Giang",
			},
			{
				id: "bacgiang",
				name: "B???c Giang",
			},
			{
				id: "backan",
				name: "B???c K???n",
			},
			{
				id: "baclieu",
				name: "B???c Li??u",
			},
			{
				id: "bacninh",
				name: "B???c Ninh",
			},
			{
				id: "bariavungtau",
				name: "B?? R???a - V??ng T??u",
			},
			{
				id: "bentre",
				name: "B???n Tre",
			},
			{
				id: "binhdinh",
				name: "B??nh ?????nh",
			},
			{
				id: "binhduong",
				name: "B??nh D????ng",
			},
			{
				id: "binhphuoc",
				name: "B??nh Ph?????c",
			},
			{
				id: "binhthuan",
				name: "B??nh Thu???n",
			},
			{
				id: "camau",
				name: "C?? Mau",
			},
			{
				id: "caobang",
				name: "Cao B???ng",
			},
			{
				id: "daklak",
				name: "?????k L???k",
			},
			{
				id: "daknong",
				name: "?????k N??ng",
			},
			{
				id: "danang",
				name: "???? N???ng",
			},
			{
				id: "dienbien",
				name: "??i???n Bi??n",
			},
			{
				id: "dongnai",
				name: "?????ng Nai",
			},
			{
				id: "dongthap",
				name: "?????ng Th??p",
			},
			{
				id: "gialai",
				name: "Gia Lai",
			},
			{
				id: "hagiang",
				name: "H?? Giang",
			},
			{
				id: "haiduong",
				name: "H???i D????ng",
			},
			{
				id: "haiphong",
				name: "H???i Ph??ng",
			},
			{
				id: "hanam",
				name: "H?? Nam",
			},
			{
				id: "hanoi",
				name: "H?? N???i",
			},
			{
				id: "hatinh",
				name: "H?? T??nh",
			},
			{
				id: "haugiang",
				name: "H???u Giang",
			},
			{
				id: "hoabinh",
				name: "Ho?? B??nh",
			},
			{
				id: "khanhhoa",
				name: "Kh??nh Ho??",
			},
			{
				id: "kiengiang",
				name: "Ki??n Giang",
			},
			{
				id: "kontum",
				name: "Kon Tum",
			},
			{
				id: "laichau",
				name: "Lai Ch??u",
			},
			{
				id: "lamdong",
				name: "L??m ?????ng",
			},
			{
				id: "langson",
				name: "L???ng S??n",
			},
			{
				id: "laocai",
				name: "L??o Cai",
			},
			{
				id: "longan",
				name: "Long An",
			},
			{
				id: "namdinh",
				name: "Nam ?????nh",
			},
			{
				id: "nghean",
				name: "Ngh??? An",
			},
			{
				id: "ninhbinh",
				name: "Ninh B??nh",
			},
			{
				id: "ninhthuan",
				name: "Ninh Thu???n",
			},
			{
				id: "phutho",
				name: "Ph?? Th???",
			},
			{
				id: "phuyen",
				name: "Ph?? Y??n",
			},
			{
				id: "quangbinh",
				name: "Qu???ng B??nh",
			},
			{
				id: "quangnam",
				name: "Qu???ng Nam",
			},
			{
				id: "quangngai",
				name: "Qu???ng Ng??i",
			},
			{
				id: "quangninh",
				name: "Qu???ng Ninh",
			},
			{
				id: "quangtri",
				name: "Qu???ng Tr???",
			},
			{
				id: "soctrang",
				name: "S??c Tr??ng",
			},
			{
				id: "sonla",
				name: "S??n La",
			},
			{
				id: "taynguyen",
				name: "T??y Nguy??n",
			},
			{
				id: "tayninh",
				name: "T??y Ninh",
			},
			{
				id: "thaibinh",
				name: "Th??i B??nh",
			},
			{
				id: "thainguyen",
				name: "Th??i Nguy??n",
			},
			{
				id: "thanhhoa",
				name: "Thanh Ho??",
			},
			{
				id: "thuathienhue",
				name: "Th???a Thi??n Hu???",
			},
			{
				id: "tiengiang",
				name: "Ti???n Giang",
			},
			{
				id: "tphochiminh",
				name: "TP.H??? Ch?? Minh",
			},
			{
				id: "travinh",
				name: "Tr?? Vinh",
			},
			{
				id: "tuyenquang",
				name: "Tuy??n Quang",
			},
			{
				id: "vinhphuc",
				name: "V??nh Ph??c",
			},
			{
				id: "yenbai",
				name: "Y??n B??i",
			},
		],
	},
};

export const treeForestCoverArea = {
	name: "Forest Cover Area",
	id: "forest-forestCoverArea",
	year: {
		id: "year",
		name: "Year",
		children: [
			{
				id: "2016",
				name: "2016",
			},
			{
				id: "2017",
				name: "2017",
			},
			{
				id: "2018",
				name: "2018",
			},
			{
				id: "2019",
				name: "2019",
			},
		],
	},
	city: {
		id: "city",
		name: "City",
		children: [
			{
				id: "angiang",
				name: "An Giang",
			},
			{
				id: "bacgiang",
				name: "B???c Giang",
			},
			{
				id: "backan",
				name: "B???c K???n",
			},
			{
				id: "baclieu",
				name: "B???c Li??u",
			},
			{
				id: "bacninh",
				name: "B???c Ninh",
			},
			{
				id: "bariavungtau",
				name: "B?? R???a - V??ng T??u",
			},
			{
				id: "bentre",
				name: "B???n Tre",
			},
			{
				id: "binhdinh",
				name: "B??nh ?????nh",
			},
			{
				id: "binhduong",
				name: "B??nh D????ng",
			},
			{
				id: "binhphuoc",
				name: "B??nh Ph?????c",
			},
			{
				id: "binhthuan",
				name: "B??nh Thu???n",
			},
			{
				id: "camau",
				name: "C?? Mau",
			},
			{
				id: "caobang",
				name: "Cao B???ng",
			},
			{
				id: "daklak",
				name: "?????k L???k",
			},
			{
				id: "daknong",
				name: "?????k N??ng",
			},
			{
				id: "danang",
				name: "???? N???ng",
			},
			{
				id: "dienbien",
				name: "??i???n Bi??n",
			},
			{
				id: "dongnai",
				name: "?????ng Nai",
			},
			{
				id: "dongthap",
				name: "?????ng Th??p",
			},
			{
				id: "gialai",
				name: "Gia Lai",
			},
			{
				id: "hagiang",
				name: "H?? Giang",
			},
			{
				id: "haiduong",
				name: "H???i D????ng",
			},
			{
				id: "haiphong",
				name: "H???i Ph??ng",
			},
			{
				id: "hanam",
				name: "H?? Nam",
			},
			{
				id: "hanoi",
				name: "H?? N???i",
			},
			{
				id: "hatinh",
				name: "H?? T??nh",
			},
			{
				id: "haugiang",
				name: "H???u Giang",
			},
			{
				id: "hoabinh",
				name: "Ho?? B??nh",
			},
			{
				id: "khanhhoa",
				name: "Kh??nh Ho??",
			},
			{
				id: "kiengiang",
				name: "Ki??n Giang",
			},
			{
				id: "kontum",
				name: "Kon Tum",
			},
			{
				id: "laichau",
				name: "Lai Ch??u",
			},
			{
				id: "lamdong",
				name: "L??m ?????ng",
			},
			{
				id: "langson",
				name: "L???ng S??n",
			},
			{
				id: "laocai",
				name: "L??o Cai",
			},
			{
				id: "longan",
				name: "Long An",
			},
			{
				id: "namdinh",
				name: "Nam ?????nh",
			},
			{
				id: "nghean",
				name: "Ngh??? An",
			},
			{
				id: "ninhbinh",
				name: "Ninh B??nh",
			},
			{
				id: "ninhthuan",
				name: "Ninh Thu???n",
			},
			{
				id: "phutho",
				name: "Ph?? Th???",
			},
			{
				id: "phuyen",
				name: "Ph?? Y??n",
			},
			{
				id: "quangbinh",
				name: "Qu???ng B??nh",
			},
			{
				id: "quangnam",
				name: "Qu???ng Nam",
			},
			{
				id: "quangngai",
				name: "Qu???ng Ng??i",
			},
			{
				id: "quangninh",
				name: "Qu???ng Ninh",
			},
			{
				id: "quangtri",
				name: "Qu???ng Tr???",
			},
			{
				id: "soctrang",
				name: "S??c Tr??ng",
			},
			{
				id: "sonla",
				name: "S??n La",
			},
			{
				id: "taynguyen",
				name: "T??y Nguy??n",
			},
			{
				id: "tayninh",
				name: "T??y Ninh",
			},
			{
				id: "thaibinh",
				name: "Th??i B??nh",
			},
			{
				id: "thainguyen",
				name: "Th??i Nguy??n",
			},
			{
				id: "thanhhoa",
				name: "Thanh Ho??",
			},
			{
				id: "thuathienhue",
				name: "Th???a Thi??n Hu???",
			},
			{
				id: "tiengiang",
				name: "Ti???n Giang",
			},
			{
				id: "tphochiminh",
				name: "TP.H??? Ch?? Minh",
			},
			{
				id: "travinh",
				name: "Tr?? Vinh",
			},
			{
				id: "tuyenquang",
				name: "Tuy??n Quang",
			},
			{
				id: "vinhphuc",
				name: "V??nh Ph??c",
			},
			{
				id: "yenbai",
				name: "Y??n B??i",
			},
		],
	},
};

export const treePopulation = {
	name: "Population",
	id: "population-population",
	year: {
		id: "year",
		name: "Year",
		children: [
			{
				id: "2012",
				name: "2012",
			},
			{
				id: "2013",
				name: "2013",
			},
			{
				id: "2014",
				name: "2014",
			},
			{
				id: "2015",
				name: "2015",
			},
			{
				id: "2016",
				name: "2016",
			},
			{
				id: "2017",
				name: "2017",
			},
			{
				id: "2018",
				name: "2018",
			},
			{
				id: "2019",
				name: "2019",
			},
		],
	},
	city: {
		id: "city",
		name: "City",
		children: [
			{
				id: "angiang",
				name: "An Giang",
			},
			{
				id: "bacgiang",
				name: "B???c Giang",
			},
			{
				id: "backan",
				name: "B???c K???n",
			},
			{
				id: "baclieu",
				name: "B???c Li??u",
			},
			{
				id: "bacninh",
				name: "B???c Ninh",
			},
			{
				id: "bariavungtau",
				name: "B?? R???a - V??ng T??u",
			},
			{
				id: "bentre",
				name: "B???n Tre",
			},
			{
				id: "binhdinh",
				name: "B??nh ?????nh",
			},
			{
				id: "binhduong",
				name: "B??nh D????ng",
			},
			{
				id: "binhphuoc",
				name: "B??nh Ph?????c",
			},
			{
				id: "binhthuan",
				name: "B??nh Thu???n",
			},
			{
				id: "camau",
				name: "C?? Mau",
			},
			{
				id: "cantho",
				name: "C???n Th??",
			},
			{
				id: "caobang",
				name: "Cao B???ng",
			},
			{
				id: "daklak",
				name: "?????k L???k",
			},
			{
				id: "daknong",
				name: "?????k N??ng",
			},
			{
				id: "danang",
				name: "???? N???ng",
			},
			{
				id: "dienbien",
				name: "??i???n Bi??n",
			},
			{
				id: "dongnai",
				name: "?????ng Nai",
			},
			{
				id: "dongthap",
				name: "?????ng Th??p",
			},
			{
				id: "gialai",
				name: "Gia Lai",
			},
			{
				id: "hagiang",
				name: "H?? Giang",
			},
			{
				id: "haiduong",
				name: "H???i D????ng",
			},
			{
				id: "haiphong",
				name: "H???i Ph??ng",
			},
			{
				id: "hanam",
				name: "H?? Nam",
			},
			{
				id: "hanoi",
				name: "H?? N???i",
			},
			{
				id: "hatinh",
				name: "H?? T??nh",
			},
			{
				id: "haugiang",
				name: "H???u Giang",
			},
			{
				id: "hoabinh",
				name: "Ho?? B??nh",
			},
			{
				id: "hungyen",
				name: "H??ng Y??n",
			},
			{
				id: "khanhhoa",
				name: "Kh??nh Ho??",
			},
			{
				id: "kiengiang",
				name: "Ki??n Giang",
			},
			{
				id: "kontum",
				name: "Kon Tum",
			},
			{
				id: "laichau",
				name: "Lai Ch??u",
			},
			{
				id: "lamdong",
				name: "L??m ?????ng",
			},
			{
				id: "langson",
				name: "L???ng S??n",
			},
			{
				id: "laocai",
				name: "L??o Cai",
			},
			{
				id: "longan",
				name: "Long An",
			},
			{
				id: "namdinh",
				name: "Nam ?????nh",
			},
			{
				id: "nghean",
				name: "Ngh??? An",
			},
			{
				id: "ninhbinh",
				name: "Ninh B??nh",
			},
			{
				id: "ninhthuan",
				name: "Ninh Thu???n",
			},
			{
				id: "phutho",
				name: "Ph?? Th???",
			},
			{
				id: "phuyen",
				name: "Ph?? Y??n",
			},
			{
				id: "quangbinh",
				name: "Qu???ng B??nh",
			},
			{
				id: "quangnam",
				name: "Qu???ng Nam",
			},
			{
				id: "quangngai",
				name: "Qu???ng Ng??i",
			},
			{
				id: "quangninh",
				name: "Qu???ng Ninh",
			},
			{
				id: "quangtri",
				name: "Qu???ng Tr???",
			},
			{
				id: "soctrang",
				name: "S??c Tr??ng",
			},
			{
				id: "sonla",
				name: "S??n La",
			},
			{
				id: "taynguyen",
				name: "T??y Nguy??n",
			},
			{
				id: "tayninh",
				name: "T??y Ninh",
			},
			{
				id: "thaibinh",
				name: "Th??i B??nh",
			},
			{
				id: "thainguyen",
				name: "Th??i Nguy??n",
			},
			{
				id: "thanhhoa",
				name: "Thanh Ho??",
			},
			{
				id: "thuathienhue",
				name: "Th???a Thi??n Hu???",
			},
			{
				id: "tiengiang",
				name: "Ti???n Giang",
			},
			{
				id: "tphochiminh",
				name: "TP.H??? Ch?? Minh",
			},
			{
				id: "travinh",
				name: "Tr?? Vinh",
			},
			{
				id: "tuyenquang",
				name: "Tuy??n Quang",
			},
			{
				id: "vinhlong",
				name: "V??nh Long",
			},
			{
				id: "vinhphuc",
				name: "V??nh Ph??c",
			},
			{
				id: "yenbai",
				name: "Y??n B??i",
			},
		],
	},
};
